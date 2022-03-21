import React from 'react';
import styled from '@/style';

const RegistryBuildingBtnWrap = styled.div`
  font-size: 0;
  margin-top: 8px;
`;
const RegistryBtn = styled.a`
  display: inline-block;
  width: 49%;
  height: 53px;
  background-image: url(${process.env.REACT_APP_URL + 'img/dbw.svg'});
  background-repeat: no-repeat;
  background-size: cover;
`;
const BuildingMgmBtn = styled.a`
  display: inline-block;
  width: 49%;
  height: 53px;
  background-image: url(${process.env.REACT_APP_URL + 'img/sus.svg'});
  background-repeat: no-repeat;
  background-size: cover;
  margin-left: 2%;
`;

const RegistryBuildingBtnCp = () => {
  return (
    <RegistryBuildingBtnWrap>
      <RegistryBtn href="http://www.iros.go.kr/PMainJ.jsp" target="_black" />
      <BuildingMgmBtn href="https://land.seoul.go.kr:444/land/" target="_black" />
    </RegistryBuildingBtnWrap>
  );
};

export default React.memo(RegistryBuildingBtnCp);
