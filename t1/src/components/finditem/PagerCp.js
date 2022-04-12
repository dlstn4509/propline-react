import React from 'react';
import './pagerCp.css';
import Pagination from 'react-js-pagination';
const PagerCp = ({ page, setPage, totalCount }) => {
  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={20}
      totalItemsCount={Number(totalCount)}
      pageRangeDisplayed={10}
      prevPageText={'이전'}
      nextPageText={'다음'}
      onChange={handlePageChange}
    />
  );
};

export default React.memo(PagerCp);
