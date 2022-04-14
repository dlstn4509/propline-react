import styled, { color } from '@/style';

export const MainWrapper = styled.div`
  background-color: #e6ebed;
  margin-left: 285px;
  width: 950px;
  padding: 10px;
  overflow-y: auto;
`;
export const TitleWrap = styled.div`
  padding: 10px 20px;
  background-color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${(props) => props.color};
`;
export const ContentsWrap = styled.div`
  padding: ${(props) => props.padding};
  background-color: #ffffff;
  /* margin-bottom: 30px; */
  img {
    max-width: 100%;
  }
`;
export const IconWrap = styled.div`
  border: 1px solid ${color.blue};
  padding: 10px 15px;
  background-color: #f1faff;
  font-size: 16px;
  color: #3168ff;
  font-weight: 500;
  display: flex;
  align-items: center;
  span {
    color: #59584c;
    font-weight: 400;
  }
`;
