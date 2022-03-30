import React, { useState, useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const SubCp = ({ v, i, arrName }) => {
  useEffect(() => {
    document.querySelectorAll(`.${arrName}`).forEach((v) => {
      v.addEventListener('click', (e) => {
        e.target.classList.add(`${arrName}`);
        e.target.classList.add('active');
        if (e.target.previousSibling) {
          e.target.previousSibling.classList.remove('active');
        }
        if (e.target.nextSibling) {
          e.target.nextSibling.classList.remove('active');
        }
      });
    });
  }, []);
  return (
    <>
      <div className={arrName}>{v}</div>
    </>
  );
};

export default React.memo(SubCp);
