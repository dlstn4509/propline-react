import React from 'react';
import {
  TableWrap,
  TableTheadTr,
  TableListTitle,
  TableListTitlePlus,
  PlusSpan,
  TableTbodyTr,
  TableTbodyType,
  TableTbodyAddr,
  TableTbodyPrice,
} from '@/style/main';

const RealTimeMamulCp = () => {
  return (
    <TableWrap>
      <thead>
        <TableTheadTr>
          <TableListTitle colSpan="2">실시간 공실매물</TableListTitle>
          <TableListTitlePlus>
            <PlusSpan to="/main">더보기</PlusSpan>
          </TableListTitlePlus>
        </TableTheadTr>
      </thead>
      <tbody>
        <TableTbodyTr>
          <TableTbodyType>일반룸</TableTbodyType>
          <TableTbodyAddr>강남구 논현동</TableTbodyAddr>
          <TableTbodyPrice>
            <span>월</span> 1,000 / 80
          </TableTbodyPrice>
        </TableTbodyTr>

        <TableTbodyTr>
          <TableTbodyType>일반룸</TableTbodyType>
          <TableTbodyAddr>강남구 논현동</TableTbodyAddr>
          <TableTbodyPrice>
            <span>월</span> 1,000 / 80
          </TableTbodyPrice>
        </TableTbodyTr>
        <TableTbodyTr>
          <TableTbodyType>일반룸</TableTbodyType>
          <TableTbodyAddr>강남구 논현동</TableTbodyAddr>
          <TableTbodyPrice>
            <span>월</span> 1,000 / 80
          </TableTbodyPrice>
        </TableTbodyTr>
        <TableTbodyTr>
          <TableTbodyType>일반룸</TableTbodyType>
          <TableTbodyAddr>
            강남구 논현동
            <img src={process.env.REACT_APP_URL + 'img/6.camera.svg'} alt="" />
          </TableTbodyAddr>
          <TableTbodyPrice>
            <span>월</span> 1,000 / 80
          </TableTbodyPrice>
        </TableTbodyTr>
        <TableTbodyTr>
          <TableTbodyType>일반룸</TableTbodyType>
          <TableTbodyAddr>강남구 논현동</TableTbodyAddr>
          <TableTbodyPrice>
            <span>월</span> 1,000 / 80
          </TableTbodyPrice>
        </TableTbodyTr>
      </tbody>
    </TableWrap>
  );
};

export default React.memo(RealTimeMamulCp);
