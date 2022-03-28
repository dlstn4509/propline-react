import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const MapCpWrap = styled.div`
  height: 409px;
  border-bottom: 1px solid #dae1e7;
`;

const MapCp = () => {
  return <MapCpWrap></MapCpWrap>;
};

export default React.memo(MapCp);
