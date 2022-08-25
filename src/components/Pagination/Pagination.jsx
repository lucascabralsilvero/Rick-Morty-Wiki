import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styles from "./Pagination.module.scss"


const Pagination = ({ info, pageNumber, setPageNumber }) => {

  let [width, setWidth] = useState(window.innerWidth);

  let updateDimension = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
window.addEventListener("resize", updateDimension)
return () => window.removeEventListener("resize", updateDimension)
  },[]);

  return (
  <>
  <style jsx>
    {`
    @media (max-width: 768px){
      .next, .prev{
        display:none;
      }

      .pagination{
        font-size:14px;
      }
    }
    `}
  </style>

  <ReactPaginate 
  className='pagination justify-content-center gap-4 my-4'
  previousLabel = "Prev"
  nextLabel = "Next"
  previousClassName="btn btn-primary prev"
  nextClassName='btn btn-primary next'
  previousLinkClassName	={styles.link}
  nextLinkClassName	={styles.link}
  marginPagesDisplayed= {width < 576 ? 1 : 2}
  pageRangeDisplayed={width < 576 ? 1 : 2}
  pageClassName='page-item'
  pageLinkClassName='page-link'
  activeClassName='active'
  forcePage={pageNumber ===1 ? 0 : pageNumber - 1}
  onPageChange={(data) => {setPageNumber(data.selected + 1) }}
  pageCount={info?.pages} /> 
  </>
  );
}

export default Pagination;