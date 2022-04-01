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
  margin-right: 20px;
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
  const setIcons = [
    setIcon02,
    setIcon03,
    setIcon04,
    setIcon05,
    setIcon06,
    setIcon07,
    setIcon08,
    setIcon09,
    setIcon10,
    setIcon11,
    setIcon12,
  ];
  const onClick01 = () => {
    setIcon01(!icon01);
    setIcons.map((v) => v(false));
  };
  return (
    <PropertyTypeWrap>
      <Title fs={'13px'} style={{ marginRight: '30px' }}>
        매물유형
      </Title>
      <CheckBoxWrap onClick={onClick01}>
        {icon01 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>전체</div>
      </CheckBoxWrap>
      <CheckBoxWrap
        onClick={() => {
          setIcon02(!icon02);
          setIcon01(false);
          setIcon01(false);
        }}
      >
        {icon02 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>아파트</div>
      </CheckBoxWrap>
      <CheckBoxWrap
        onClick={() => {
          setIcon03(!icon03);
          setIcon01(false);
        }}
      >
        {icon03 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>오피스텔</div>
      </CheckBoxWrap>
      <CheckBoxWrap
        onClick={() => {
          setIcon04(!icon04);
          setIcon01(false);
        }}
      >
        {icon04 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>빌라/다세대</div>
      </CheckBoxWrap>
      <CheckBoxWrap
        onClick={() => {
          setIcon05(!icon05);
          setIcon01(false);
        }}
      >
        {icon05 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>단독/다가구</div>
      </CheckBoxWrap>
      <CheckBoxWrap
        onClick={() => {
          setIcon06(!icon06);
          setIcon01(false);
        }}
      >
        {icon06 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>상가</div>
      </CheckBoxWrap>
      <CheckBoxWrap
        onClick={() => {
          setIcon07(!icon07);
          setIcon01(false);
        }}
      >
        {icon07 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>업무</div>
      </CheckBoxWrap>
      <CheckBoxWrap
        onClick={() => {
          setIcon08(!icon08);
          setIcon01(false);
        }}
      >
        {icon08 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>건물</div>
      </CheckBoxWrap>
      <CheckBoxWrap
        onClick={() => {
          setIcon09(!icon09);
          setIcon01(false);
        }}
      >
        {icon09 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>숙박</div>
      </CheckBoxWrap>
      <CheckBoxWrap
        onClick={() => {
          setIcon10(!icon10);
          setIcon01(false);
        }}
      >
        {icon10 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>공장</div>
      </CheckBoxWrap>
      <CheckBoxWrap
        onClick={() => {
          setIcon11(!icon11);
          setIcon01(false);
        }}
      >
        {icon11 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>창고</div>
      </CheckBoxWrap>
      <CheckBoxWrap
        onClick={() => {
          setIcon12(!icon12);
          setIcon01(false);
        }}
      >
        {icon12 ? <FaCheckSquare /> : <FaRegSquare />}
        <div>토지</div>
      </CheckBoxWrap>
    </PropertyTypeWrap>
  );
};

export default React.memo(PropertyTypeCp);
