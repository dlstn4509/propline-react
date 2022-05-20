/*global kakao*/
import React, { useState, useEffect } from 'react';
import styled, { color, FlexDiv } from '@/style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FaSubway from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const MapCpWrapper = styled.div`
  .blockName {
    font-size: 14px;
    display: inline-block;
    color: #3168ff;
    border: 1px solid #3168ff;
    border-radius: 10px;
    padding: 0px 5px;
    cursor: pointer;
    background-color: #ffffff;
    z-index: 1;
    :hover {
      color: #ffffff;
      background-color: #3168ff;
    }
  }
  .subwayName {
    display: flex;
    justify-content: center;
    font-size: 13px;
    color: #ffffff;
    background-color: #77ab56;
    cursor: pointer;
    width: auto;
    border: 1px solid #77ab56;
    border-radius: 10px;
    padding: 0 10px 0 6px;
    :hover {
      background-color: #447744;
    }
    .imgWrap {
      width: 20px;
      margin-right: 4px;
      img {
        max-width: 100%;
      }
    }
  }
`;
const MapCpWrap = styled.div`
  /* height: 1000px; */
  height: 409px;
  border-bottom: 1px solid #dae1e7;
  border-top: 1px solid #2a55cc;
  border-left: 1px solid #2a55cc;
  border-right: 1px solid #2a55cc;
`;
const EupmyeondongWrapper = styled(FlexDiv)`
  padding: 5px 0;
  align-items: center;
  font-size: 11px;
  padding: 6px 10px;
  border-left: 1px solid #2a55cc;
  border-right: 1px solid #2a55cc;
  span {
    color: ${color.blue};
    margin: 0 4px;
  }
`;
const EupmyeondongWrap = styled(FlexDiv)`
  align-items: center;
  margin-right: 10px;
`;

const MapCp = ({ mapBlock, labelName, subwayList }) => {
  const [map, setMap] = useState('');
  const [blockCodeArr, setBlockCodeArr] = useState([]);
  const [click_polygonArr, setClick_polygonArr] = useState([]);
  const [eupmyeondongLength, setEupmyeondongLength] = useState([]);

  // eupmyeondongLength 계산
  const countEupmyeondongLength = (eupmyeondong, blockcode) => {
    let arr = eupmyeondongLength;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].eupmyeondong === eupmyeondong) {
        arr[i].count += 1;
        arr[i].blockcode.push(blockcode);
        setEupmyeondongLength(arr);
        return true;
      }
    }
    arr.push({ eupmyeondong: eupmyeondong, count: 1, blockcode: [blockcode] });
    setEupmyeondongLength(arr);
  };

  // polygon 지우기
  const polygonClick = (blockcode, click_polygon, eupmyeondong) => {
    click_polygon.setMap(null);
    setBlockCodeArr((blockCodeArr) => blockCodeArr.filter((v) => v !== blockcode));

    // eupmyeondongLength 지우기
    for (let i = 0; i < eupmyeondongLength.length; i++) {
      if (eupmyeondongLength[i].eupmyeondong === eupmyeondong) {
        if (eupmyeondongLength[i].count > 1) {
          eupmyeondongLength[i].count -= 1;
          eupmyeondongLength[i].blockcode.filter((v) => v !== blockcode);
        } else {
          setEupmyeondongLength((eupmyeondongLength) =>
            eupmyeondongLength.filter((v) => {
              return v.eupmyeondong !== eupmyeondong;
            })
          );
        }
      }
    }
  };

  // polygon 색 채우기
  const mapClick = (blockcode, path, eupmyeondong) => {
    let click_polygon = new kakao.maps.Polygon({
      map: map,
      path: path,
      strokeWeight: 2,
      strokeColor: 'blue',
      strokeOpacity: 0.8,
      fillColor: 'blue',
      fillOpacity: 0.3,
      zIndex: 2,
    });
    kakao.maps.event.addListener(click_polygon, 'click', () => {
      polygonClick(blockcode, click_polygon, eupmyeondong);
    });
    countEupmyeondongLength(eupmyeondong, blockcode);
    setBlockCodeArr((blockCodeArr) => [...blockCodeArr, blockcode]);
    setClick_polygonArr((click_polygonArr) => [...click_polygonArr, { blockcode, click_polygon }]);
  };

  // 모든 polygon 그리기
  const displayArea = (area) => {
    let path = [];
    for (let v of area.latlng_list) {
      path.push(new kakao.maps.LatLng(v[0], v[1]));
    }
    let polygon = new kakao.maps.Polygon({
      map: map,
      path: path,
      strokeColor: 'none',
      fillColor: '#fff',
      fillOpacity: 0.00001,
      zIndex: 1,
    });
    kakao.maps.event.addListener(polygon, 'mouseover', () => {
      polygon.setOptions({ fillColor: 'blue' });
      polygon.setOptions({ fillOpacity: 0.1 });
    });
    kakao.maps.event.addListener(polygon, 'mouseout', () => {
      polygon.setOptions({ fillColor: '#fff' });
      polygon.setOptions({ fillOpacity: 0.0001 });
    });
    kakao.maps.event.addListener(polygon, 'click', () => {
      mapClick(area.blockcode, path, area.eupmyeondong);
    });
    polygon.setMap(map);
  };

  // 라벨 클릭
  const clickLabel = async (blockcode_list) => {
    const { data } = await axios.get(
      process.env.REACT_APP_URL_API + `item/blockcode?blockcode=${blockcode_list}`
    );
    let isAllFillPolygon = true; // 라벨의 모든 blockcode 가 채워져 있는지 유무
    for (let clickLabel of data) {
      if (!blockCodeArr.includes(clickLabel.blockcode)) {
        isAllFillPolygon = false;
        break;
      }
    }
    for (let clickLabel of data) {
      if (isAllFillPolygon) {
        for (let v of click_polygonArr) {
          if (v.blockcode === clickLabel.blockcode) {
            polygonClick(clickLabel.blockcode, v.click_polygon, clickLabel.eupmyeondong);
            setClick_polygonArr((click_polygonArr) =>
              click_polygonArr.filter((v) => {
                return v.blockcode !== clickLabel.blockcode;
              })
            );
          }
        }
      } else {
        if (!blockCodeArr.includes(clickLabel.blockcode)) {
          let label_latlng = [];
          for (let vv of clickLabel.path) {
            label_latlng.push(new kakao.maps.LatLng(vv[0], vv[1]));
          }
          mapClick(clickLabel.blockcode, label_latlng, clickLabel.eupmyeondong);
        }
      }
    }
  };

  // 초기 맵 세팅
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.575019439683764, 127.16396595688873),
      level: 6,
    };
    setMap(new kakao.maps.Map(container, options));
  }, []);

  // 블럭
  useEffect(() => {
    for (var i = 0; i < mapBlock.length; i++) {
      displayArea(mapBlock[i]);
    }
  }, [mapBlock, eupmyeondongLength]);

  // 라벨
  useEffect(() => {
    for (let v of labelName) {
      let content = document.createElement('div');
      content.innerText = `${v.eupmyeondong}`;
      content.className = 'blockName';
      let position = new kakao.maps.LatLng(v.latitude, v.longitude);
      let customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
      });
      customOverlay.setMap(map);

      // 라벨 클릭
      content.addEventListener('click', () => {
        clickLabel(v.blockcode_list);
      });
    }
  }, [labelName, click_polygonArr, eupmyeondongLength]);

  // 지하철
  useEffect(() => {
    for (let v of subwayList) {
      let content = document.createElement('div');
      content.className = 'subwayName';
      content.innerHTML = `
        <div class="imgWrap">
          <img src="${process.env.REACT_APP_URL + 'img/train.png'}" alt="" />
        </div>
        <div>${v.station}</div>
      `;
      let position = new kakao.maps.LatLng(v.latitude, v.longitude);
      let customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
      });
      customOverlay.setMap(map);

      // 지하철 클릭
      content.addEventListener('click', () => {
        clickLabel(v.blockcode_list);
      });
    }
  }, [subwayList, click_polygonArr, eupmyeondongLength]);

  const removeeUpmyeondong = (e) => {
    let blockcode = e.target.dataset.blockcode
      ? e.target.dataset.blockcode
      : e.target.parentNode.dataset.blockcode;
    let eupmyeondong = e.target.dataset.eupmyeondong
      ? e.target.dataset.eupmyeondong
      : e.target.parentNode.dataset.eupmyeondong;
    let blockcodeArr = blockcode.split(',');
    console.log(blockcode);
    console.log(eupmyeondong);
    console.log(blockcodeArr);
    setEupmyeondongLength((eupmyeondongLength) =>
      eupmyeondongLength.filter((v) => {
        return v.eupmyeondong !== eupmyeondong;
      })
    );
  };

  return (
    <MapCpWrapper>
      <MapCpWrap id="map"></MapCpWrap>
      <EupmyeondongWrapper>
        {eupmyeondongLength.map((v, i) => (
          <EupmyeondongWrap key={i}>
            {v.eupmyeondong}
            <span>{v.count}개</span>
            <IoMdClose
              style={{ cursor: 'pointer' }}
              data-blockcode={[v.blockcode]}
              data-eupmyeondong={v.eupmyeondong}
              onClick={removeeUpmyeondong}
            />
          </EupmyeondongWrap>
        ))}
      </EupmyeondongWrapper>
    </MapCpWrapper>
  );
};

export default React.memo(MapCp);
