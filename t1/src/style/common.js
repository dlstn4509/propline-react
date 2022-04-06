import styled from 'styled-components';

export const Title = styled.div`
  font-size: ${(props) => (props.fs ? props.fs : '20px')};
  font-weight: 600;
  color: #000000;
  margin-bottom: 30px;
  padding-top: ${(props) => (props.pt ? props.pt : '30px')};
`;
export const Text = styled.div`
  font-size: 14px;
  color: #464d50;
  margin-bottom: 30px;
`;
export const Button = styled.div`
  font-size: 13px;
  color: ${(props) => (props.color ? props.color : '#464d50')};
  text-align: center;
  background-color: ${(props) => (props.bgc ? props.bgc : '#ffffff')};
  padding: 2px 15px;
  border: 1px solid ${(props) => (props.bdc ? props.bdc : '#464d50')};
  border-radius: 30px;
  height: 25px;
  cursor: pointer;
`;
export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export const PageWrap = styled.div`
  width: 1000px;
`;
