import { Link } from 'react-router-dom';
import styled from 'styled-components';
export default styled;

export const SubTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #464d50;
  margin-bottom: 20px;
`;
export const TableWrap = styled.table`
  font-size: 13px;
  color: #464d50;
  margin-bottom: 30px;
`;
export const Tr = styled.tr`
  border-top: 1px solid #dae1e7;
`;
export const TdFirst = styled.td`
  background-color: #f9fbfc;
  padding: 20px 0 20px 15px;
  width: 180px;
  span {
    color: red;
    font-size: 14px;
  }
`;
export const TdSecond = styled.td`
  padding: 10px 0 10px 15px;
  .input01 {
    width: 177px;
    margin-right: 20px;
    :focus {
      border: 2px solid #000000;
    }
  }
  .input02 {
    width: 73px;
    margin: 0 5px;
    :focus {
      border: 2px solid #000000;
    }
    :first-child {
      margin-left: 0;
    }
  }
  .btn {
    font-size: 13px;
    font-family: Noto Sans KR;
    font-weight: 400;
    color: #888f91;
    text-decoration: none;
    background-color: #ffffff;
    padding: 2px 15px 2px 15px;
    border: 1px solid #888f91;
    border-radius: 30px;
    display: inline-block;
    margin-right: 10px;
    &.btnBlue {
      color: #3168ff;
      border: 1px solid #3168ff;
    }
  }
  span {
    margin-left: 6px;
    display: inline-block;
    width: 17px;
    height: 17px;
    line-height: 15px;
    font-size: 12px;
    text-align: center;
    border: 1px solid #000;
    border-radius: 100%;
    color: #000;
    cursor: pointer;
  }
  input[type='file'] {
    /* 파일 필드 숨기기 */
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
export const IsMarketingWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: #888f91;
  margin-bottom: 40px;
  img {
    margin-right: 10px;
    cursor: pointer;
  }
`;
