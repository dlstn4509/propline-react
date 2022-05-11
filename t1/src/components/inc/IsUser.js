import React, { useEffect } from 'react';
import styled from '@/style';
import { Link, useNavigate } from 'react-router-dom';

const IsUser = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (window.confirm('공실클럽 회원 전용 서비스입니다. 로그인하시겠습니까?')) {
      navigate('/login');
    } else {
      navigate('/main');
    }
  }, []);
  return <div style={{ height: '2000px' }}></div>;
};

export default React.memo(IsUser);
