import React, { useEffect, useState } from 'react';
import styled from '@/style';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import SearchCp from '@/components/contract/list/SearchCp';
import ListsCp from '@/components/contract/list/ListsCp';

const ListCpWrapper = styled.div`
  font-size: 14px;
  color: #464d50;
  margin-bottom: 100px;
`;
const Button = styled.div`
  display: ${(props) => props.display};
  margin-left: auto;
  width: 150px;
  height: 35px;
  line-height: 35px;
  background-color: #3168ff;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: ${(props) => props.mb};
  margin-top: ${(props) => props.mt};
  cursor: pointer;
`;

const ListCp = ({ formType, setPageType }) => {
  const navigate = useNavigate();
  const [btnName, setBtnName] = useState('');
  const [lists, setLists] = useState([]);

  useEffect(() => {
    switch (formType) {
      case 'sale':
        setBtnName('매매');
        break;
      case 'lease':
        setBtnName('전세');
        break;
      case 'rental':
        setBtnName('월세');
        break;
      case 'short':
        setBtnName('단기임대');
        break;
      default:
        setBtnName('');
    }
  }, [formType]);

  useEffect(() => {
    (async () => {
      let { data } = await axios.get(process.env.REACT_APP_URL_API + `contract?tradetype=${formType}`);
      setLists(data);
    })();
  }, [formType]);

  return (
    <ListCpWrapper>
      <SearchCp listsLength={lists.length} />
      <ListsCp lists={lists} />
      {formType !== 'form' && (
        <Button
          onClick={() => {
            setPageType('form');
            navigate('/contract?type=form');
          }}
        >
          {btnName}계약서 작성하기
        </Button>
      )}
    </ListCpWrapper>
  );
};

export default React.memo(ListCp);
