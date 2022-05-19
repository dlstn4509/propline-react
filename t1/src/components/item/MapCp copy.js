/*global kakao*/
import React, { useState, useEffect } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MapCpWrapper = styled.div`
  .blockName {
    display: inline-block;
    font-size: 14px;
    color: #3168ff;
    border: 1px solid #3168ff;
    border-radius: 10px;
    padding: 0px 5px;
    cursor: pointer;
    background-color: #ffffff;
    :hover {
      color: #ffffff;
      background-color: #3168ff;
    }
  }
`;
const MapCpWrap = styled.div`
  height: 600px;
  /* height: 409px; */
  border-bottom: 1px solid #dae1e7;
  border-top: 1px solid #2a55cc;
  border-left: 1px solid #2a55cc;
  border-right: 1px solid #2a55cc;
`;

const MapCp = ({ mapBlock, labelName }) => {
  const [map, setMap] = useState('');
  const [blockCodeList, setBlockCodeList] = useState([]);

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
    for (let i = 0; i < mapBlock.length; i++) {
      let polygonPath = [];
      let arr = [];
      for (let v of mapBlock[i].latlng_list) {
        arr.push(new kakao.maps.LatLng(v[0], v[1]));
      }
      polygonPath.push({ name: `${mapBlock[i].blockcode}`, path: arr });

      let polygon = new kakao.maps.Polygon({
        path: polygonPath[0].path,
        strokeWeight: 0, // 선의 두께입니다
        fillColor: 'blue', // 채우기 색깔입니다
        fillOpacity: 0.0001, // 채우기 불투명도 입니다
      });
      kakao.maps.event.addListener(polygon, 'mouseout', () => {
        polygon.setOptions({ strokeWeight: 0 });
      });
      kakao.maps.event.addListener(polygon, 'mouseover', () => {
        polygon.setOptions({ strokeColor: 'blue' });
        polygon.setOptions({ strokeWeight: 3 });
      });
      // eslint-disable-next-line no-loop-func
      kakao.maps.event.addListener(polygon, 'click', () => {
        let blockCode = polygonPath[0].name;
        if (blockCodeList.includes(blockCode)) {
          polygon.setOptions({ fillColor: 'blue' });
          polygon.setOptions({ fillOpacity: 0.0001 });
          setBlockCodeList((blockCodeList) =>
            blockCodeList.filter((v) => {
              return v !== blockCode;
            })
          );
        } else {
          polygon.setOptions({ fillColor: 'blue' });
          polygon.setOptions({ fillOpacity: 0.1 });
          setBlockCodeList((blockCodeList) => [...blockCodeList, polygonPath[0].name]);
        }
      });
      polygon.setMap(map);
    }
  }, [map, mapBlock, blockCodeList]);

  // 라벨
  useEffect(() => {
    for (let v of labelName) {
      let content = document.createElement('div');
      content.innerText = `${v.eupmyeondong}`;
      content.className = 'blockName';
      content.id = `${v.blockcode_list}`;

      content.addEventListener('click', async (e) => {
        let blockCodeQuery = [];
        for (let vv of e.target.id.split(',')) {
          if (!blockCodeList.includes(vv)) {
            blockCodeQuery.push(vv);
          }
        }
        const { data } = await axios.get(
          process.env.REACT_APP_URL_API +
            `item/blockcode?blockcode=${blockCodeQuery.length ? blockCodeQuery.join(',') : e.target.id}`
        );
        for (let v of data) {
          let blockcode_latlng = [];
          for (let vv of v) {
            blockcode_latlng.push(new kakao.maps.LatLng(vv[0], vv[1]));
          }
          console.log(blockcode_latlng);
          console.log(blockCodeQuery.length);
          let polygon = new kakao.maps.Polygon({
            path: blockcode_latlng,
            strokeWeight: 0, // 선의 두께입니다
            fillColor: 'blue', // 채우기 색깔입니다
            fillOpacity: 0.3, // 채우기 불투명도 입니다
          });
          // polygon.setMap(map);
          if (blockCodeQuery.length > 0) {
            polygon.setMap(map);
          } else {
            polygon.setMap(map);
            console.log('a');
            polygon.setOptions({ fillOpacity: 0.0001 });
          }
        }
      });

      let position = new kakao.maps.LatLng(v.latitude, v.longitude);
      let customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
      });
      customOverlay.setMap(map);
    }
  }, [map, labelName, blockCodeList]);

  return (
    <MapCpWrapper>
      <MapCpWrap id="map"></MapCpWrap>
    </MapCpWrapper>
  );
};

export default React.memo(MapCp);
