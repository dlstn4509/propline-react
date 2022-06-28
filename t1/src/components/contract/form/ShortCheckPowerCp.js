import React from 'react';
import styled, { FlexDiv } from '@/style';
import { Link } from 'react-router-dom';

const ShortCheckPowerCpWrap = styled.div`
  margin-bottom: 30px;
`;
const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;
const Text = styled.div`
  margin-bottom: ${(props) => props.mb};
  font-size: 13px;
`;
const TableWrap = styled.table`
  color: #000000;
  font-size: 10pt;
  line-height: 11pt;
  border-top: solid 2px #000000;
  border-bottom: solid 2px #000000;
  tbody {
    tr {
      height: 50px;
      border-bottom: 1px solid #c6cfdc;
      :last-child {
        border-bottom: none;
      }
    }
  }
`;
const TdTitle = styled.td`
  background-color: #f0f3f7;
  color: #000000;
  font-size: 10pt;
  text-align: center;
  width: 150px;
`;
const Input = styled.input`
  border: 1px solid #c6cfdc;
  height: 20px;
  font-size: 9pt;
  width: ${(props) => (props.width ? props.width : '80px')};
  margin-left: 10px;
  :focus {
    border: 2px solid #000;
    border-radius: 4px;
  }
`;
const Td = styled.td`
  padding-left: 10px;
  vertical-align: middle;
`;

const ShortCheckPowerCp = () => {
  return (
    <ShortCheckPowerCpWrap>
      <Title>6. 입주시 검침 및 시설물</Title>
      <Text mb={'20px'}>
        임차인은 위 부동산의 임대차에 대해 아래 입주시 검침값 및 시설물(옵션) 내역에 동의한다.
      </Text>
      <TableWrap>
        <tbody>
          <tr>
            <TdTitle>입주시검침값</TdTitle>
            <Td>
              <FlexDiv>
                전기 : <Input type="text" name="index_of_power" />
                &nbsp; kwh, 가스: <Input type="text" name="index_of_gas" />
                &nbsp; m², 수도 : <Input type="text" name="index_of_water" />
                &nbsp; m²
              </FlexDiv>
            </Td>
          </tr>
          <tr>
            <TdTitle>시설물(옵선)내역</TdTitle>
            <td>
              <Input type="text" name="item_transfer_range" width={'570px'} />
            </td>
          </tr>
        </tbody>
      </TableWrap>
    </ShortCheckPowerCpWrap>
  );
};

export default React.memo(ShortCheckPowerCp);
