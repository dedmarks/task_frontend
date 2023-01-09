import React from 'react';
import ReactPaginate from 'react-paginate';

interface Props {
  pageCount: number;
  changePage: (page: { selected: number }) => void;
}

const ProductPagination: React.FC<Props> = ({ pageCount, changePage }) => {
  return (
    <ReactPaginate
    previousLabel={"Previous"}
    nextLabel={"Next"}
    pageCount={pageCount} 
    onPageChange={changePage}
    containerClassName={"paginationbtns"}
    previousLinkClassName={"previousbtn"}
    activeClassName={"paginationActive"}
    nextLinkClassName={"nextbtn"}
    />
  );
};

export default ProductPagination;
