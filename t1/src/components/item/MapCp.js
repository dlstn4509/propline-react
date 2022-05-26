/*global kakao*/
import React, { useState, useEffect, useRef } from 'react';
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
  flex-wrap: wrap;
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

const MapCp = ({ mapBlock, dongList, subwayList, guList, seoulLine }) => {
  const [map, setMap] = useState('');
  const [blockArr, setBlockArr] = useState([]); // 모든 block 만들어 담을 배열
  const [dongArr, setDongArr] = useState([]);
  const [subwayArr, setSubwayArr] = useState([]);
  const [guArr, setGuArr] = useState([]);

  const [plusBlockCodeArr, setPlusBlockCodeArr] = useState([]);
  const [minusBlockCodeArr, setMinusBlockCodeArr] = useState([]); // 8
  const [clickLabelData, setClickLabelData] = useState([]); // label 클릭, axios data, 쓰고 바로 지움
  const [blockCodeArr, setBlockCodeArr] = useState([]); // 9
  const [click_polygonArr, setClick_polygonArr] = useState([]); // 색칠된 polygon
  const [eupmyeondongLength, setEupmyeondongLength] = useState([]); // 동, count
  const [mapZoomLevel, setMapZoomLevel] = useState(6);

  // 동, 지하철, 구 라벨 만들기
  const makeLabel = (list) => {
    let arr = [];
    console.log(list.length);
    for (let v of list) {
      if (list === subwayList) {
        console.log('라벨만들기 subwayList');
      } else if (list === dongList) {
        console.log('라벨만들기 dongList');
      } else {
        console.log('라벨만들기 guList');
      }
      let content = '';
      if (list === subwayList) {
        content = document.createElement('div');
        content.className = 'subwayName';
        content.innerHTML = `
            <div class="imgWrap">
              <img src="${process.env.REACT_APP_URL + 'img/train.png'}" alt="" />
            </div>
            <div>${v.station}</div>
          `;
      } else if (list === dongList) {
        content = document.createElement('div');
        content.innerText = `${v.eupmyeondong}`;
        content.className = 'blockName';
      } else if (list === guList) {
        content = document.createElement('div');
        content.innerText = `${v.sigungu}`;
        content.className = `blockName`;
      }
      let position = new kakao.maps.LatLng(v.latitude, v.longitude);
      let customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
      });
      customOverlay.setMap(map);
      arr.push(customOverlay);

      content.addEventListener('click', async () => {
        const { data } = await axios.get(
          process.env.REACT_APP_URL_API + `item/blockcode?blockcode=${v.blockcode_list}`
        );
        setClickLabelData([data, v.blockcode_list.split(',')]);
      });
    }

    if (list === subwayList) {
      setSubwayArr(arr);
    } else if (list === dongList) {
      setDongArr(arr);
    } else {
      setGuArr(arr);
    }
  };

  // 리스트 x 버튼
  const removeeUpmyeondong = (e) => {
    let eupmyeondong = e.target.dataset.eupmyeondong
      ? e.target.dataset.eupmyeondong
      : e.target.parentNode.dataset.eupmyeondong;
    for (let v of click_polygonArr) {
      if (v.eupmyeondong === eupmyeondong) {
        v.click_polygon.setMap(null);
      }
    }
    setBlockCodeArr((blockCodeArr) => blockCodeArr.filter((v) => v.eupmyeondong !== eupmyeondong));
    setClick_polygonArr((click_polygonArr) =>
      click_polygonArr.filter((v) => v.eupmyeondong !== eupmyeondong)
    );
    setEupmyeondongLength((eupmyeondongLength) =>
      eupmyeondongLength.filter((v) => v.eupmyeondong !== eupmyeondong)
    );
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

  // 초기 맵 세팅
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.49911, 127.065463),
      // center: new kakao.maps.LatLng(37.575019439683764, 127.16396595688873),
      level: 6,
      disableDoubleClickZoom: true,
    };
    let map = new kakao.maps.Map(container, options);
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    map.setZoomable(false);
    map.setMaxLevel(9);
    kakao.maps.event.addListener(map, 'zoom_changed', () => {
      setMapZoomLevel(map.getLevel());
    });
    setMap(map);
  }, []);

  // 모든 블럭 state에 담기 : blockArr
  useEffect(() => {
    let polygonList = [];
    for (let i = 0; i < mapBlock.length; i++) {
      console.log('모든 블럭 만들기');
      let path = [];
      for (let v of mapBlock[i].latlng_list) {
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
      polygonList.push({
        polygon,
        path,
        eupmyeondong: mapBlock[i].eupmyeondong,
        blockcode: mapBlock[i].blockcode,
      });
    }
    setBlockArr(polygonList);
  }, [map, mapBlock]);

  // 모든 블럭 지도에 뿌리기
  useEffect(() => {
    for (let v of blockArr) {
      console.log('모든 블럭 뿌리기');
      kakao.maps.event.addListener(v.polygon, 'mouseover', () => {
        v.polygon.setOptions({ fillColor: 'blue' });
        v.polygon.setOptions({ fillOpacity: 0.1 });
      });
      kakao.maps.event.addListener(v.polygon, 'mouseout', () => {
        v.polygon.setOptions({ fillColor: '#fff' });
        v.polygon.setOptions({ fillOpacity: 0.0001 });
      });

      kakao.maps.event.addListener(v.polygon, 'click', () => {
        let click_polygon = new kakao.maps.Polygon({
          map: map,
          path: v.path,
          strokeWeight: 2,
          strokeColor: 'blue',
          strokeOpacity: 0.8,
          fillColor: 'blue',
          fillOpacity: 0.3,
          zIndex: 2,
        });
        setClick_polygonArr((click_polygonArr) => [
          ...click_polygonArr,
          { blockcode: v.blockcode, click_polygon: click_polygon, eupmyeondong: v.eupmyeondong },
        ]);
        setBlockCodeArr((blockCodeArr) => [
          ...blockCodeArr,
          { blockcode: v.blockcode, eupmyeondong: v.eupmyeondong },
        ]);
      });
      v.polygon.setMap(map);
    }
  }, [blockArr]);

  // click_polygonArr click이벤트 (지우기)
  useEffect(() => {
    for (let v of click_polygonArr) {
      kakao.maps.event.addListener(v.click_polygon, 'click', () => {
        v.click_polygon.setMap(null);
        setBlockCodeArr((blockCodeArr) => blockCodeArr.filter((vv) => vv.blockcode !== v.blockcode));
        setClick_polygonArr((click_polygonArr) =>
          click_polygonArr.filter((vv) => vv.click_polygon !== v.click_polygon)
        );
      });
    }
  }, [click_polygonArr]);

  // 동라벨 만들기
  useEffect(() => {
    for (let v of dongArr) {
      v.setMap(null);
      resetBtnClick();
    }
    if (mapZoomLevel <= 7) {
      makeLabel(dongList);
      resetBtnClick();
    }
  }, [dongList, mapZoomLevel]);

  // 지하철라벨 만들기
  useEffect(() => {
    for (let v of subwayArr) {
      v.setMap(null);
      resetBtnClick();
    }
    if (mapZoomLevel <= 6) {
      makeLabel(subwayList);
      resetBtnClick();
    }
  }, [subwayList, mapZoomLevel]);

  // 구 라벨 만들기
  useEffect(() => {
    console.log('gu 만들기');
    for (let v of guArr) {
      v.setMap(null);
      resetBtnClick();
    }
    if (mapZoomLevel > 7) {
      makeLabel(guList);
      resetBtnClick();
    }
  }, [guList, mapZoomLevel]);

  useEffect(() => {});

  // 라벨 클릭
  useEffect(() => {
    let arr = [];
    for (let v of blockCodeArr) {
      arr.push(v.blockcode);
    }
    let duplicationCnt = 0; // 라벨중 1개라도 차있는지 여부
    if (clickLabelData[0]) {
      for (let clickLabel of clickLabelData[0]) {
        if (arr.includes(clickLabel.blockcode)) {
          duplicationCnt += 1;
        }
      }
    }

    if (clickLabelData[1] && duplicationCnt !== clickLabelData[1].length) {
      // 1개라도 있으면
      let clickLabelArr = [];
      for (let clickLabel of clickLabelData[0]) {
        if (!arr.includes(clickLabel.blockcode)) {
          let label_latlng = [];
          for (let v of clickLabel.path) {
            label_latlng.push(new kakao.maps.LatLng(v[0], v[1]));
          }
          let click_polygon = new kakao.maps.Polygon({
            map: map,
            path: label_latlng,
            strokeWeight: 2,
            strokeColor: 'blue',
            strokeOpacity: 0.8,
            fillColor: 'blue',
            fillOpacity: 0.3,
            zIndex: 2,
          });
          setClick_polygonArr((click_polygonArr) => [
            ...click_polygonArr,
            {
              blockcode: clickLabel.blockcode,
              click_polygon: click_polygon,
              eupmyeondong: clickLabel.eupmyeondong,
            },
          ]);
          clickLabelArr.push(clickLabel);
        }
      }
      setPlusBlockCodeArr(clickLabelArr);
    } else {
      // 꽉 차있어서 지우기
      let clickLabelArr = [];
      if (clickLabelData[1] && duplicationCnt) {
        for (let clickLabel of clickLabelData[0]) {
          for (let v of click_polygonArr) {
            if (v.blockcode === clickLabel.blockcode) {
              v.click_polygon.setMap(null);
              clickLabelArr.push(clickLabel);
              setClick_polygonArr((click_polygonArr) =>
                click_polygonArr.filter((v) => v.blockcode !== clickLabel.blockcode)
              );
            }
          }
        }
        setMinusBlockCodeArr(clickLabelArr);
      }
    }
  }, [clickLabelData]);

  // blockcodeArr 추가하기
  useEffect(() => {
    if (plusBlockCodeArr.length > 0) {
      for (let v of plusBlockCodeArr) {
        setBlockCodeArr((blockCodeArr) => [
          ...blockCodeArr,
          { blockcode: v.blockcode, eupmyeondong: v.eupmyeondong },
        ]);
      }
      setPlusBlockCodeArr([]);
      setClickLabelData([]);
    }
  }, [plusBlockCodeArr]);

  // blockcodeArr 빼기
  useEffect(() => {
    if (minusBlockCodeArr.length > 1) {
      for (let v of minusBlockCodeArr) {
        setBlockCodeArr((blockCodeArr) =>
          blockCodeArr.filter((vv) => {
            return vv.blockcode !== v.blockcode;
          })
        );
      }
      setMinusBlockCodeArr([]);
    }
  }, [minusBlockCodeArr]);

  // EupmyeondongLength 정리
  useEffect(() => {
    let arr = blockCodeArr;
    let resultArr = [];
    for (let v of arr) {
      let isDuplication = true;
      for (let vv of resultArr) {
        if (vv.eupmyeondong === v.eupmyeondong) {
          vv.count += 1;
          isDuplication = false;
        }
      }
      if (isDuplication) {
        resultArr.push({ eupmyeondong: v.eupmyeondong, count: 1 });
      }
    }
    setEupmyeondongLength(resultArr);
  }, [blockCodeArr]);

  useEffect(() => {
    if (seoulLine.length > 0) {
      console.log('seoulLine 만듬');
      let path = [];
      for (let v of seoulLine) {
        path.push(new kakao.maps.LatLng(v[1], v[0]));
      }

      let polygon = new kakao.maps.Polygon({
        map: map,
        path: path,
        strokeColor: 'blue',
        strokeWeight: 2,
        strokeOpacity: 0.8,
        fillColor: '#fff',
        fillOpacity: 0.00001,
        zIndex: 1,
      });
      polygon.setMap(map);
    }
  }, [seoulLine]);

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
