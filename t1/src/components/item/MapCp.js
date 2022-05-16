/*global kakao*/
import React, { useState, useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const MapCpWrap = styled.div`
  height: 600px;
  /* height: 409px; */
  border-bottom: 1px solid #dae1e7;
  border-top: 1px solid #2a55cc;
  border-left: 1px solid #2a55cc;
  border-right: 1px solid #2a55cc;
`;

const MapCp = () => {
  const [map, setMap] = useState('');
  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(37.575019439683764, 127.16396595688873),
      level: 7,
    };
    setMap(new kakao.maps.Map(container, options));
  }, []);
  useEffect(() => {
    let polygonPath = [
      new kakao.maps.LatLng(37.5738907667459, 127.16570677984537),
      new kakao.maps.LatLng(37.57441653186556, 127.16664186080627),
      new kakao.maps.LatLng(37.57516207418305, 127.16825100562997),
      new kakao.maps.LatLng(37.57572764048899, 127.16968996785192),
      new kakao.maps.LatLng(37.575053001495405, 127.16891865731546),
      new kakao.maps.LatLng(37.57463927355439, 127.168408),
      new kakao.maps.LatLng(37.57572764048899, 127.16968996785192),
      new kakao.maps.LatLng(37.575053001495405, 127.16891865731546),
      new kakao.maps.LatLng(37.57463927355439, 127.1684083125793),
      new kakao.maps.LatLng(37.573567755568504, 127.1679417769789),
      new kakao.maps.LatLng(37.57266653895386, 127.16809823222742),
      new kakao.maps.LatLng(37.57218904587378, 127.168074),
    ];
    let polygon = new kakao.maps.Polygon({
      path: polygonPath, // 그려질 다각형의 좌표 배열입니다
      strokeWeight: 3, // 선의 두께입니다
      strokeColor: '#39DE2A', // 선의 색깔입니다
      strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: 'solid', // 선의 스타일입니다
      fillColor: '#A2FF99', // 채우기 색깔입니다
      fillOpacity: 0.7, // 채우기 불투명도 입니다
    });
    polygon.setMap(map);
  }, [map]);
  return <MapCpWrap id="map"></MapCpWrap>;
};

export default React.memo(MapCp);
