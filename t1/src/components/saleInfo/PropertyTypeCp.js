import React, { useState } from 'react';
import styled, { Title } from '@/style';
import { Link } from 'react-router-dom';
import { FaRegSquare, FaCheckSquare } from 'react-icons/fa';

const PropertyTypeWrap = styled.div`
  display: flex;
  height: 40px;
  padding: 10px 50px;
  border-bottom: 1px dotted #ced6e3;
`;
const CheckBoxWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  cursor: pointer;
  .hide {
    display: none;
  }
`;

const PropertyTypeCp = () => {
  const [icon01, setIcon01] = useState(false);
  const [icon02, setIcon02] = useState(false);
  const [icon03, setIcon03] = useState(false);
  const [icon04, setIcon04] = useState(false);
  const [icon05, setIcon05] = useState(false);
  const [icon06, setIcon06] = useState(false);
  const [icon07, setIcon07] = useState(false);
  const [icon08, setIcon08] = useState(false);
  const [icon09, setIcon09] = useState(false);
  const [icon10, setIcon10] = useState(false);
  const [icon11, setIcon11] = useState(false);
  const [icon12, setIcon12] = useState(false);
  return (
    <PropertyTypeWrap>
      <Title fs={'13px'} style={{ marginRight: '30px' }}>
        매물유형
      </Title>
      <CheckBoxWrap
        onClick={() => {
          setIcon01(!icon01);
        }}
      >
        {icon01 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>전체</div>
      </CheckBoxWrap>
      <CheckBoxWrap
        onClick={() => {
          setIcon02(!icon02);
        }}
      >
        {icon02 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>아파트</div>
      </CheckBoxWrap>
      <CheckBoxWrap>
        <FaRegSquare />
        <FaCheckSquare className="hide" />
        <div>오피스텔</div>
      </CheckBoxWrap>
      <CheckBoxWrap>
        <FaRegSquare />
        <FaCheckSquare className="hide" />
        <div>빌라/다세대</div>
      </CheckBoxWrap>
      <CheckBoxWrap>
        <FaRegSquare />
        <FaCheckSquare className="hide" />
        <div>단독/다가구</div>
      </CheckBoxWrap>
      <CheckBoxWrap>
        <FaRegSquare />
        <FaCheckSquare className="hide" />
        <div>상가</div>
      </CheckBoxWrap>
      <CheckBoxWrap>
        <FaRegSquare />
        <FaCheckSquare className="hide" />
        <div>업무</div>
      </CheckBoxWrap>
      <CheckBoxWrap>
        <FaRegSquare />
        <FaCheckSquare className="hide" />
        <div>건물</div>
      </CheckBoxWrap>
      <CheckBoxWrap>
        <FaRegSquare />
        <FaCheckSquare className="hide" />
        <div>숙박</div>
      </CheckBoxWrap>
      <CheckBoxWrap>
        <FaRegSquare />
        <FaCheckSquare className="hide" />
        <div>공장</div>
      </CheckBoxWrap>
      <CheckBoxWrap>
        <FaRegSquare />
        <FaCheckSquare className="hide" />
        <div>창고</div>
      </CheckBoxWrap>
      <CheckBoxWrap>
        <FaRegSquare />
        <FaCheckSquare className="hide" />
        <div>토지</div>
      </CheckBoxWrap>
    </PropertyTypeWrap>
  );
};

export default React.memo(PropertyTypeCp);
