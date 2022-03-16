import React from 'react';
import { SubMenuWrap } from '../../../style/main';

const Gongdongjunggae = ({ mouseLeave }) => {
  return (
    <SubMenuWrap to="/main" onMouseLeave={mouseLeave}>
      <li className="sub-menu">공동중개매물</li>
      <li className="sub-menu">나의공동중개</li>
    </SubMenuWrap>
  );
};

export default React.memo(Gongdongjunggae);
