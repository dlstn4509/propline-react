/*global kakao*/
import React, { useState, useEffect } from 'react';
import styled, { color, FlexDiv } from '@/style';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { IoMdClose } from 'react-icons/io';
import { GrPowerReset } from 'react-icons/gr';

const MapCpWrapper = styled.div`
  position: relative;
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

const MapCleanWrap = styled(FlexDiv)`
  position: absolute;
  top: 370px;
  right: 10px;
  z-index: 999;
  width: 330px;
  height: 27px;
  padding: 0px 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  background-color: rgba(33, 43, 74, 0.8);
  color: #fff;
  font-size: 13px;
  span {
    color: #ffeb5a;
  }
  .resetBtnWrap {
    font-size: 12px;
    color: #333333;
    width: 90px;
    height: 20px;
    padding: 0px 5px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    background-color: #ffffff;
    cursor: pointer;
    margin-left: 10px;
    button {
      margin-left: 4px;
    }
  }
`;

const MapCp = ({ mapBlock, dongList, subwayList }) => {
  const [map, setMap] = useState('');
  const [subwayArr, setSubwayArr] = useState([]);
  const [blockCodeArr, setBlockCodeArr] = useState([]);
  const [click_polygonArr, setClick_polygonArr] = useState([]);
  const [eupmyeondongLength, setEupmyeondongLength] = useState([]);
  const [mapZoomLevel, setMapZoomLevel] = useState(6);
  const [subwayLabel, setSubwayLabel] = useState([]);

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

    // click_polygonArr 지우기
    setClick_polygonArr((click_polygonArr) =>
      click_polygonArr.filter((v) => {
        return v.blockcode !== blockcode;
      })
    );

    // eupmyeondongLength 지우기
    for (let i = 0; i < eupmyeondongLength.length; i++) {
      if (eupmyeondongLength[i].eupmyeondong === eupmyeondong) {
        setEupmyeondongLength((eupmyeondongLength) =>
          eupmyeondongLength.filter((v) => {
            return v.eupmyeondong !== eupmyeondong;
          })
        );
        if (eupmyeondongLength[i].count > 1) {
          let arr = eupmyeondongLength[i].blockcode.filter((v) => v !== blockcode);
          eupmyeondongLength[i] = {
            blockcode: arr,
            count: eupmyeondongLength[i].count - 1,
            eupmyeondong: eupmyeondong,
          };
          setEupmyeondongLength((setEupmyeondongLength) => [...setEupmyeondongLength, eupmyeondongLength[i]]);
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
      zIndex: 3,
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
    console.log('모든 polygon 그리기');
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
    if (isAllFillPolygon) {
      for (let clickLabel of data) {
        for (let v of click_polygonArr) {
          if (v.blockcode === clickLabel.blockcode) {
            v.click_polygon.setMap(null);
            setClick_polygonArr((click_polygonArr) =>
              click_polygonArr.filter((v) => {
                return v.blockcode !== clickLabel.blockcode;
              })
            );
            setBlockCodeArr((blockCodeArr) => blockCodeArr.filter((v) => v !== clickLabel.blockcode));
          }
        }
      }
      setEupmyeondongLength((setEupmyeondongLength) =>
        setEupmyeondongLength.filter((v) => {
          return v.eupmyeondong !== data[0].eupmyeondong;
        })
      );
    } else {
      for (let clickLabel of data) {
        if (!blockCodeArr.includes(clickLabel.blockcode)) {
          let label_latlng = [];
          for (let v of clickLabel.path) {
            label_latlng.push(new kakao.maps.LatLng(v[0], v[1]));
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
      center: new kakao.maps.LatLng(37.49911, 127.065463),
      // center: new kakao.maps.LatLng(37.575019439683764, 127.16396595688873),
      level: 6,
    };
    let map = new kakao.maps.Map(container, options);
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    map.setZoomable(false);
    map.setMaxLevel(9);
    kakao.maps.event.addListener(map, 'zoom_changed', () => {
      // 지도의 현재 레벨을 얻어옵니다
      setMapZoomLevel(map.getLevel());
    });
    setMap(map);
  }, []);

  // 블럭
  useEffect(() => {
    for (let i = 0; i < mapBlock.length; i++) {
      displayArea(mapBlock[i]);
    }
  }, [mapBlock]);
  // }, [mapBlock, eupmyeondongLength]);

  // 라벨
  useEffect(() => {
    for (let v of dongList) {
      console.log('동라벨 그리기');
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
    // }, [dongList, eupmyeondongLength]);
  }, [dongList, click_polygonArr, eupmyeondongLength]);

  // 지하철 customOverlay 만들기
  useEffect(() => {
    for (let v of subwayList) {
      console.log('지하철 라벨 그리기');
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

      // 지하철 클릭
      content.addEventListener('click', () => {
        clickLabel(v.blockcode_list);
      });
      setSubwayArr((subwayArr) => [...subwayArr, customOverlay]);
    }
  }, [subwayList, click_polygonArr, eupmyeondongLength]);

  // mapZoomLevel에 따른 지하철 표시 or 지우기
  useEffect(() => {
    for (let v of subwayArr) {
      if (mapZoomLevel <= 6) {
        v.setMap(map);
      } else {
        v.setMap(null);
      }
    }
  }, [subwayArr, mapZoomLevel]);

  // upmyeondong x버튼
  const removeeUpmyeondong = (e) => {
    let blockcode = e.target.dataset.blockcode
      ? e.target.dataset.blockcode
      : e.target.parentNode.dataset.blockcode;
    let eupmyeondong = e.target.dataset.eupmyeondong
      ? e.target.dataset.eupmyeondong
      : e.target.parentNode.dataset.eupmyeondong;
    let blockcodeArr = blockcode.split(',');
    setEupmyeondongLength((eupmyeondongLength) =>
      eupmyeondongLength.filter((v) => {
        return v.eupmyeondong !== eupmyeondong;
      })
    );
    for (let v of click_polygonArr) {
      if (blockcodeArr.includes(String(v.blockcode))) {
        polygonClick(v.blockcode, v.click_polygon, eupmyeondong);
      }
    }
  };

  // 지도 초기화 버튼
  const resetBtnClick = () => {
    for (let v of click_polygonArr) {
      v.click_polygon.setMap(null);
    }
    setClick_polygonArr([]);
    setBlockCodeArr([]);
    setEupmyeondongLength([]);
  };

  return (
    <MapCpWrapper>
      <MapCpWrap id="map"></MapCpWrap>
      {blockCodeArr.length === 0 && (
        <MapCleanWrap>
          <div>선택된 블륵이 없습니다. 블록을 선택해주세요.</div>
        </MapCleanWrap>
      )}
      {blockCodeArr.length > 0 && (
        <MapCleanWrap>
          <div style={{ marginRight: '10px' }}>
            총 <span>{blockCodeArr.length}개</span>의 블록이 선택되었습니다.
          </div>
          |
          <div className="resetBtnWrap">
            <GrPowerReset style={{ color: '#333333' }} />
            <button onClick={resetBtnClick}>지도초기화</button>
          </div>
        </MapCleanWrap>
      )}
      <EupmyeondongWrapper>
        {eupmyeondongLength.map((v, i) => (
          <EupmyeondongWrap key={i}>
            {v.eupmyeondong}
            <span>{v.blockcode.length}개</span>
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

// console.time('countEupmyeondongLength');
// console.timeEnd('countEupmyeondongLength');
