import React from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const BottomTextWrap = styled.div`
  padding: 10px 10px 0 10px;
  font-size: 13px;
  color: #464d50;
  border: 1px solid #dae1e7;
  margin-bottom: 100px;
`;
const Text = styled.div`
  margin-bottom: 10px;
`;

const BottomTextCp = () => {
  return (
    <BottomTextWrap>
      <Text>- 스팸 및 광고성 글을 게재시 무단삭제하며, 이에 따른 법적인 책임을 질 수 있습니다.</Text>
      <Text>
        - 본 상담은 답변자의 개인의견으로 참고자료로만 활용하시고 어떠한 법적인 책임을 지지 않습니다.
      </Text>
      <Text>- 온라인 상담외의 전화상담은 받지 않으니 양해해 주시기 바랍니다.</Text>
    </BottomTextWrap>
  );
};

export default React.memo(BottomTextCp);
