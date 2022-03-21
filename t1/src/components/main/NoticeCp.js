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

const NoticeCp = () => {
  return (
    <TableWrap>
      <thead>
        <TableTheadTr>
          <TableListTitle>공지사항</TableListTitle>
          <TableListTitlePlus>
            <PlusSpan to="/main">더보기</PlusSpan>
          </TableListTitlePlus>
        </TableTheadTr>
      </thead>
      <tbody>
        <TableTbodyTr>
          <NoticeTbodyTd colSpan="2">
            <NoticeTbodyLink to="/main">2022년 3월 14(월) 시스템 점검...</NoticeTbodyLink>
          </NoticeTbodyTd>
        </TableTbodyTr>
        <TableTbodyTr>
          <NoticeTbodyTd colSpan="2">
            <NoticeTbodyLink to="/main">2022년 3월 14(월) 시스템 점검...</NoticeTbodyLink>
          </NoticeTbodyTd>
        </TableTbodyTr>
        <TableTbodyTr>
          <NoticeTbodyTd colSpan="2">
            <NoticeTbodyLink to="/main">2022년 3월 14(월) 시스템 점검...</NoticeTbodyLink>
          </NoticeTbodyTd>
        </TableTbodyTr>
        <TableTbodyTr>
          <NoticeTbodyTd colSpan="2">
            <NoticeTbodyLink to="/main">2022년 3월 14(월) 시스템 점검...</NoticeTbodyLink>
          </NoticeTbodyTd>
        </TableTbodyTr>
        <TableTbodyTr>
          <NoticeTbodyTd colSpan="2">
            <NoticeTbodyLink to="/main">2022년 3월 14(월) 시스템 점검...</NoticeTbodyLink>
          </NoticeTbodyTd>
        </TableTbodyTr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(NoticeCp);
