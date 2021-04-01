import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
  paginattion: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};
Pagination.defaultProps = {
  onPageChange: null,
}

function Pagination(props) {
  const {pagination, onPageChange} = props;

  const {_page, _limit, _totalRows} = pagination;

  const totalPages = Math.ceil(_totalRows /_limit);

  function handleOnPageChange(newPage){
    if(onPageChange){
      onPageChange(newPage);
    }
  }
  return (
    <div>
      <button
        disabled={_page<=1  }
        onClick={()=>handleOnPageChange(_page - 1)}
      >
        Prev
      </button>
      <button
        disabled={_page >= totalPages}
        onClick={()=>handleOnPageChange(_page + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;