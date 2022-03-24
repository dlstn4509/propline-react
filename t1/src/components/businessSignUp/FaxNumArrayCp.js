import React from 'react';
import styled from '@/style';

const SelectWrap = styled.select`
  width: 73px;
  margin-right: 10px;
`;

const FaxNumArrayCp = ({ changeFax01 }) => {
  const onChange = (e) => {
    changeFax01(e.target.value);
  };
  return (
    <SelectWrap defaultValue="02" onChange={onChange}>
      <option value="02">02</option>
      <option value="031">031</option>
      <option value="032">032</option>
      <option value="033">033</option>
      <option value="041">041</option>
      <option value="042">042</option>
      <option value="043">043</option>
      <option value="051">051</option>
      <option value="052">052</option>
      <option value="053">053</option>
      <option value="054">054</option>
      <option value="055">055</option>
      <option value="061">061</option>
      <option value="062">062</option>
      <option value="063">063</option>
      <option value="064">064</option>
      <option value="070">070</option>
    </SelectWrap>
  );
};

export default React.memo(FaxNumArrayCp);
