import React from 'react';
import styled, { FlexDiv } from '@/style';

const RegistryBuildingBtnWrap = styled(FlexDiv)`
  justify-content: space-between;
`;

const RegistryBuildingBtnCp = () => {
  return (
    <RegistryBuildingBtnWrap>
      <a href="http://www.iros.go.kr/" target="_blank" rel="noopener noreferrer">
        <img src={process.env.REACT_APP_URL + 'img/dbw.svg'} alt="" />
      </a>
      <a href="http://land.seoul.go.kr/" target="_blank" rel="noopener noreferrer">
        <img src={process.env.REACT_APP_URL + 'img/sus.svg'} alt="" />
      </a>
    </RegistryBuildingBtnWrap>
  );
};

export default React.memo(RegistryBuildingBtnCp);
