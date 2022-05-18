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
  const [blockCodeArr, setBlockCodeArr] = useState([]);
  let insuArr = [];

  const fillColor = (path) => {
    console.log(path);
    let polygon = new kakao.maps.Polygon({
      map: map, // 다각형을 표시할 지도 객체
      path: path,
      strokeWeight: 2,
      strokeColor: '#004c80',
      strokeOpacity: 0.8,
      fillColor: 'red',
      fillOpacity: 0.1,
    });
    polygon.setMap(map);
  };
  // const fillColor = (path) => {
  //   console.log(path);
  //   let polygon = new kakao.maps.Polygon({
  //     map: map, // 다각형을 표시할 지도 객체
  //     path: path,
  //     strokeWeight: 2,
  //     strokeColor: '#004c80',
  //     strokeOpacity: 0.8,
  //     fillColor: 'red',
  //     fillOpacity: 0.1,
  //   });
  //   polygon.setMap(map);
  // };

  // const removeColor = (path) => {
  //   console.log(path);
  //   let polygon = new kakao.maps.Polygon({
  //     map: map, // 다각형을 표시할 지도 객체
  //     path: path,
  //     strokeWeight: 2,
  //     strokeColor: '#004c80',
  //     strokeOpacity: 0.8,
  //     fillColor: 'blue',
  //     fillOpacity: 1,
  //   });
  //   polygon.setMap(map);
  // };

  const displayArea = (area) => {
    let path = [];
    for (let v of area.latlng_list) {
      path.push(new kakao.maps.LatLng(v[0], v[1]));
    }
    let polygon = new kakao.maps.Polygon({
      map: map, // 다각형을 표시할 지도 객체
      path: path,
      strokeWeight: 2,
      strokeColor: 'none',
      strokeOpacity: 0.8,
      fillColor: '#fff',
      fillOpacity: 0.01,
      zIndex: 1,
    });
    kakao.maps.event.addListener(polygon, 'mouseover', () => {
      polygon.setOptions({ strokeColor: 'red' });
    });
    kakao.maps.event.addListener(polygon, 'mouseout', () => {
      polygon.setOptions({ strokeColor: 'none' });
      if (!blockCodeArr.includes(area.blockcode)) {
      }
    });

    kakao.maps.event.addListener(polygon, 'click', () => {
      if (!blockCodeArr.includes(area.blockcode)) {
        polygon.setOptions({ fillColor: 'red' });
        polygon.setOptions({ fillOpacity: 1 });
        setBlockCodeArr((blockCodeArr) => [...blockCodeArr, area.blockcode]);
      } else {
        // polygon.setOptions({ fillColor: '#fff' });
        // polygon.setOptions({ fillOpacity: 0.01 });
        // polygon.setOptions({ zIndex: 2 });

        polygon.setMap(null);
        setBlockCodeArr((blockCodeArr) => blockCodeArr.filter((v) => v !== area.blockcode));
      }
    });
    polygon.setMap(map);
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
  }, [map, mapBlock, blockCodeArr]);
  // 라벨

  return (
    <MapCpWrapper>
      <MapCpWrap id="map"></MapCpWrap>
    </MapCpWrapper>
  );
};

export default React.memo(MapCp);
