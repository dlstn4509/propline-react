import React from 'react';
import styled from '@/style';

const SelectWrap = styled.select`
  width: 150px;
`;

const MailOptionCp = ({ changeMailOption }) => {
  const onChange = (e) => {
    console.log(e.target.value);
    changeMailOption(e.target.value);
  };
  return (
    <SelectWrap onChange={onChange}>
      <option value="">-- 직접입력 --</option>
      <option value="hanmail.net">hanmail.net</option>
      <option value="naver.com">naver.com</option>
      <option value="nate.com">nate.com</option>
      <option value="gmail.com">gmail.com</option>
      <option value="hotmail.com">hotmail.com</option>
      <option value="yahoo.co.kr">yahoo.co.kr</option>
      <option value="empal.com">empal.com</option>
      <option value="paran.com">paran.com</option>
      <option value="korea.com">korea.com</option>
      <option value="lycos.co.kr">lycos.co.kr</option>
      <option value="hanmail.com">hanmail.com</option>
      <option value="dreamwiz.com">dreamwiz.com</option>
      <option value="netian.com">netian.com</option>
      <option value="freechal.com">freechal.com</option>
      <option value="hanafos.com">hanafos.com</option>
      <option value="hltel.net">hltel.net</option>
      <option value="unitel.co.kr">unitel.co.kr</option>
      <option value="chollian.net">chollian.net</option>
      <option value="netsgo.com">netsgo.com</option>
      <option value="kebi.com">kebi.com</option>
    </SelectWrap>
  );
};

export default React.memo(MailOptionCp);
