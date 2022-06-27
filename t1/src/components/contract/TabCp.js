import React, { useState } from 'react';
import styled, { FlexDiv, color } from '@/style';
import { Link } from 'react-router-dom';

const TabWrapper = styled(FlexDiv)`
  margin-bottom: 50px;
`;
const TabWrap = styled(FlexDiv)`
  border-bottom: 1px solid #464d50;
  width: 20%;
  height: 44px;
  font-size: 16px;
  color: #464d50;
  justify-content: center;
  cursor: pointer;
  &.active {
    border-left: 1px solid #464d50;
    border-top: 1px solid #464d50;
    border-right: 1px solid #464d50;
    border-bottom: none;
    color: ${color.blue};
  }
`;

const TabCp = ({ formType, setFormType }) => {
  return (
    <TabWrapper>
      <TabWrap
        onClick={() => {
          setFormType('sale');
        }}
        className={formType === 'sale' ? 'active' : ''}
      >
        매매계약서
      </TabWrap>
      <TabWrap
        onClick={() => {
          setFormType('lease');
        }}
        className={formType === 'lease' ? 'active' : ''}
      >
        전세계약서
      </TabWrap>
      <TabWrap
        onClick={() => {
          setFormType('rental');
        }}
        className={formType === 'rental' ? 'active' : ''}
      >
        월세계약서
      </TabWrap>
      <TabWrap
        onClick={() => {
          setFormType('short');
        }}
        className={formType === 'short' ? 'active' : ''}
      >
        단기임대차계약서
      </TabWrap>
      <TabWrap
        onClick={() => {
          setFormType('form');
        }}
        className={formType === 'form' ? 'active' : ''}
      >
        서식함
      </TabWrap>
    </TabWrapper>
  );
};

export default React.memo(TabCp);
