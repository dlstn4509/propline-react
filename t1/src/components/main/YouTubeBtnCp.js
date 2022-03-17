import React from 'react';
import styled from '../../style';
import { Link } from 'react-router-dom';

const YouTubeBtn = styled.a`
  display: inline-block;
  width: 100%;
  margin-top: 6px;
  padding: 8px 0 8px 10px;
  border: 1px solid #dae1e7;
  border-radius: 5px;
  font-size: 14px;
  background-image: url(${process.env.REACT_APP_URL + 'img/gonsil_arrow_icon.png'});
  background-position: 95% center;
  background-repeat: no-repeat;
  :hover {
    text-decoration: underline;
  }
`;
const YoutubeLogo = styled.img`
  width: 81px;
  vertical-align: middle;
  margin-left: 5px;
`;

const YouTubeBtnCp = () => {
  return (
    <YouTubeBtn href="https://www.youtube.com/channel/UCHd5J7I2x1vgVdxiIoBQqgQ" target="_blank">
      <span style={{ color: '#888f91' }}>공실클럽</span>
      <YoutubeLogo src={process.env.REACT_APP_URL + 'img/utv.svg'} alt="유튜브로고"></YoutubeLogo>
    </YouTubeBtn>
  );
};

export default React.memo(YouTubeBtnCp);
