import React, { useState, useEffect } from 'react';
import styled from '@/style';
import { Link } from 'react-router-dom';

const SubCp = ({ v, i, arrName }) => {
  useEffect(() => {
    document.querySelector(`.${arrName}`).classList.add('active');
    document.querySelectorAll(`.${arrName}`).forEach((v) => {
      v.addEventListener('click', (e) => {
        e.target.parentNode.childNodes.forEach((v) => v.classList.remove('active'));
        e.target.classList.add('active');
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
