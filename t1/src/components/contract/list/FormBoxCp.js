import React from 'react';
import styled, { FlexDiv, Button } from '@/style';
import { Link } from 'react-router-dom';

const FormBoxCpWrap = styled.div`
  margin-bottom: 30px;
`;
const TableWrap = styled.table`
  border-top: 1px solid #dde2e6;
  thead {
    height: 45px;
    text-align: center;
    background-color: #f9fbfc;
    padding: 15px 0 15px 0;
    font-size: 13px;
    color: #464d50;
    border-bottom: 1px solid #dde2e6;
  }
  tbody {
    text-align: center;
    tr {
      height: 45px;
      border-bottom: 1px solid #dde2e6;
    }
  }
`;
const ListWrap = styled(FlexDiv)`
  justify-content: space-between;
  padding: 0 10px;
`;

const FormBoxCp = () => {
  return (
    <FormBoxCpWrap>
      <TableWrap>
        <thead>
          <tr>
            <th>구분</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <ListWrap>
                <div>(시행 2019.3.1) 중개대상물 확인ㆍ설명서[Ⅰ] (주거용 건축)</div>
                <div>
                  <a href="https://www.gongsilclub.com/v4/con_contract/[별지_제20호서식]_중개대상물_확인ㆍ설명서[Ⅰ]__주거용_건축물__단독주택¸_공동주택¸_매매ㆍ교환¸_임대__0_.hwp">
                    <Button>다운로드</Button>
                  </a>
                </div>
              </ListWrap>
            </td>
          </tr>
          <tr>
            <td>
              <ListWrap>
                <div>(시행 2019.3.1) 중개대상물 확인ㆍ설명서[Ⅱ] (비주거용 건축물)</div>
                <div>
                  <a href="https://www.gongsilclub.com/v4/con_contract/중개대상물_확인ㆍ설명서[Ⅱ]__비주거용_건축물__업무용¸_상업용¸_공업용¸_매매ㆍ교환¸_임대¸_그_밖의_경우__1_.hwp">
                    <Button>다운로드</Button>
                  </a>
                </div>
              </ListWrap>
            </td>
          </tr>
          <tr>
            <td>
              <ListWrap>
                <div>(시행 2019.2.27) 표준임대차계약서</div>
                <div>
                  <a href="https://www.gongsilclub.com/v4/con_contract/[별지 제24호서식] 표준임대차계약서.hwp">
                    <Button>다운로드</Button>
                  </a>
                </div>
              </ListWrap>
            </td>
          </tr>
        </tbody>
      </TableWrap>
    </FormBoxCpWrap>
  );
};

export default React.memo(FormBoxCp);
