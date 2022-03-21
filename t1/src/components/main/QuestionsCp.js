import React from 'react';
import {
  TableWrap,
  TableTheadTr,
  TableListTitle,
  TableListTitlePlus,
  PlusSpan,
  TableTbodyTr,
  NoticeTbodyTd,
  NoticeTbodyLink,
} from '@/style/main';

const QuestionsCp = () => {
  return (
    <TableWrap>
      <thead>
        <TableTheadTr>
          <TableListTitle>자주하는질문</TableListTitle>
          <TableListTitlePlus>
            <PlusSpan to="/main">더보기</PlusSpan>
          </TableListTitlePlus>
        </TableTheadTr>
      </thead>
      <tbody>
        <TableTbodyTr>
          <NoticeTbodyTd colSpan="2">
            <NoticeTbodyLink to="/main" style={{ fontWeight: '500' }}>
              매물정보에"기준가"는 무엇인가요? <span>N</span>
            </NoticeTbodyLink>
          </NoticeTbodyTd>
        </TableTbodyTr>
        <TableTbodyTr>
          <NoticeTbodyTd colSpan="2">
            <NoticeTbodyLink to="/main">매물정보에"기준가"는 무엇인가요?</NoticeTbodyLink>
          </NoticeTbodyTd>
        </TableTbodyTr>
        <TableTbodyTr>
          <NoticeTbodyTd colSpan="2">
            <NoticeTbodyLink to="/main">매물정보에"기준가"는 무엇인가요?</NoticeTbodyLink>
          </NoticeTbodyTd>
        </TableTbodyTr>
        <TableTbodyTr>
          <NoticeTbodyTd colSpan="2">
            <NoticeTbodyLink to="/main">매물정보에"기준가"는 무엇인가요?</NoticeTbodyLink>
          </NoticeTbodyTd>
        </TableTbodyTr>
        <TableTbodyTr>
          <NoticeTbodyTd colSpan="2">
            <NoticeTbodyLink to="/main">매물정보에"기준가"는 무엇인가요?</NoticeTbodyLink>
          </NoticeTbodyTd>
        </TableTbodyTr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(QuestionsCp);
