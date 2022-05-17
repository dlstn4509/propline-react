/*global kakao*/
import React, { useState, useEffect } from 'react';
import styled, { color } from '@/style';
import { Link } from 'react-router-dom';

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

const MapCp = ({ setEupmyeondong, eupmyeondong, setMapBlock, mapBlock, labelName }) => {
  const [map, setMap] = useState('');
  const [choiceBlock, setChoiceBlock] = useState([]);

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
      for (let v of mapBlock[i].latlng_list) {
        polygonPath.push(new kakao.maps.LatLng(v[0], v[1]));
      }
      let polygon = new kakao.maps.Polygon({
        path: polygonPath,
        strokeWeight: 3, // 선의 두께입니다
        strokeColor: 'blue', // 선의 색깔입니다
        strokeStyle: 'solid', // 선의 스타일입니다
        fillColor: '#fff', // 채우기 색깔입니다
        strokeOpacity: 0.5, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillOpacity: 0.5, // 채우기 불투명도 입니다
      });
      kakao.maps.event.addListener(polygon, 'mouseout', () => {
        // polygon.setMap(null);
        console.log('mouseout');
        polygon.setOptions({ fillColor: 'none' });
      });
      // kakao.maps.event.addListener(polygon, 'mousemove', () => {
      //   console.log('mousemove');
      //   // polygon.setMap(null);
      //   polygon.setOptions({ fillColor: 'blue' });
      // });
      kakao.maps.event.addListener(polygon, 'mouseover', () => {
        console.log('mouseover');
        // polygon.setMap(null);
        polygon.setOptions({ fillColor: 'blue' });
      });
      polygon.setMap(map);
    }
  }, [map, mapBlock]);

  // 라벨
  useEffect(() => {
    for (let v of labelName) {
      let content = document.createElement('div');
      content.innerText = `${v.eupmyeondong}`;
      content.className = 'blockName';
      // content.addEventListener('click', (e) => {
      //   setEupmyeondong(e.target.innerHTML);
      // });

      let position = new kakao.maps.LatLng(v.latitude, v.longitude);
      let customOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
      });
      customOverlay.setMap(map);
    }
  }, [map, labelName]);

  return (
    <MapCpWrapper>
      <MapCpWrap id="map"></MapCpWrap>
    </MapCpWrapper>
  );
};

export default React.memo(MapCp);
