import React, { useEffect, useState } from 'react';
import styled, { PageWrapper, PageWrap } from '@/style';
import { Link } from 'react-router-dom';
import store from '@/store/store';
import axios from 'axios';

const BannerPage = () => {
  const [banner, setBanner] = useState([]);
  const [idx, setIdx] = useState('');

  let type = new URL(window.location.href).search ? new URL(window.location.href).search.split('=')[1] : '';
  useEffect(() => {
    setIdx(type);
  }, [type]);

  useEffect(() => {
    (async () => {
      if (idx) {
        const { data } = await axios.get(process.env.REACT_APP_URL_API + `banner/bannerpage?idx=${idx}`);
        setBanner(data);
      }
    })();
  }, [idx]);

  return (
    <PageWrapper>
      <PageWrap>
        {banner.detail_imageArr && (
          <>
            {banner.detail_imageArr.map((v, i) => (
              <div key={i}>
                {banner.movie1_position - 1 === i && (
                  <iframe
                    src="https://www.youtube.com/embed/8dO8oJpvP3k"
                    frameBorder="0"
                    title="youtube"
                    style={{ width: '100%', height: '560px' }}
                  ></iframe>
                )}
                <img src={process.env.REACT_APP_URL + v} alt="" className="mw-100" />
                {banner.movie1_position === 0 && (
                  <iframe
                    src="https://www.youtube.com/embed/8dO8oJpvP3k"
                    frameBorder="0"
                    title="youtube"
                    style={{ width: '100%', height: '560px' }}
                  ></iframe>
                )}
              </div>
            ))}
          </>
        )}
      </PageWrap>
    </PageWrapper>
  );
};

export default React.memo(BannerPage);
