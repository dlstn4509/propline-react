/*global kakao*/
import React, { useState, useEffect, useRef } from 'react';
import styled, { color, FlexDiv } from '@/style';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MapCpWrapper = styled.div`
  position: relative;
`;
const MapCpWrap = styled.div`
  /* height: 1000px; */
  height: 409px;
  border-top: 1px solid #2a55cc;
  border-left: 1px solid #2a55cc;
  border-right: 1px solid #2a55cc;
`;

const MapCp = () => {
  const [map, setMap] = useState('');

  // 초기 맵 세팅
  useEffect(() => {
    let container = document.getElementById('map');
    let center = new kakao.maps.LatLng(37.50905604664822, 127.04053621548162);
    let options = {
      center: center,
      level: 6,
      disableDoubleClickZoom: true,
    };
    let map = new kakao.maps.Map(container, options);
    let zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    map.setZoomable(false);
    map.setMaxLevel(9);
    setMap(map);
  }, []);

  return (
    <MapCpWrapper>
      <MapCpWrap id="map"></MapCpWrap>
    </MapCpWrapper>
  );
};

export default React.memo(MapCp);
