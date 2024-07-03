import React, { useCallback, useMemo } from 'react';
import { Food } from '../../types/food';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Styles
import './Pagination.scss';

interface PaginationProps {
  products: Food[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Pagination = React.memo(
  ({ products, page, setPage }: PaginationProps) => {
    const totalPages = useMemo(
      () => Math.ceil(products.length / 10),
      [products.length],
    );

    const selectPageHandler = useCallback(
      (selectedPage: number) => {
        if (
          selectedPage >= 1 &&
          selectedPage <= totalPages &&
          selectedPage !== page
        ) {
          setPage(selectedPage);
        }
      },
      [page, totalPages, setPage],
    );

    const PageButton = ({ pageNum }: { pageNum: number }) => (
      <span
        onClick={() => selectPageHandler(pageNum)}
        className={`pagination-btn ${
          page === pageNum ? 'pagination-btn--active' : ''
        }`}
      >
        {pageNum}
      </span>
    );

    const renderPageNumbers = useMemo(() => {
      const pageNumbers = [];
      const leftDots = page > 3;
      const rightDots = page < totalPages - 2;

      if (leftDots) {
        pageNumbers.push(
          <PageButton key={1} pageNum={1} />,
          <span key="left-dots" className="pagination-btn">
            ...
          </span>,
        );
      }

      const startPage = leftDots ? Math.max(page - 1, 2) : 1;
      const endPage = rightDots
        ? Math.min(page + 1, totalPages - 1)
        : totalPages;

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(<PageButton key={i} pageNum={i} />);
      }

      if (rightDots) {
        pageNumbers.push(
          <span key="right-dots" className="pagination-btn">
            ...
          </span>,
          <PageButton key={totalPages} pageNum={totalPages} />,
        );
      }

      return pageNumbers;
    }, [page, totalPages, selectPageHandler]);

    return (
      <div>
        {products.length > 0 && (
          <div className="pagination">
            <span
              className={`pagination-btn ${
                page > 1 ? 'pagination-prev' : 'pagination-btn--disabled'
              }`}
              onClick={() => selectPageHandler(page - 1)}
            >
              <FaChevronLeft />
            </span>
            {renderPageNumbers}
            <span
              className={`pagination-btn ${
                page < totalPages
                  ? 'pagination-next'
                  : 'pagination-btn--disabled'
              }`}
              onClick={() => selectPageHandler(page + 1)}
            >
              <FaChevronRight />
            </span>
          </div>
        )}
      </div>
    );
  },
);

export default Pagination;
