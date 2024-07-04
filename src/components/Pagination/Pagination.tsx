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
      <button
        data-testid="pagination-btn"
        onClick={() => selectPageHandler(pageNum)}
        className={`pagination-btn ${
          page === pageNum ? 'pagination-btn--active' : ''
        }`}
      >
        {pageNum}
      </button>
    );

    const renderPageNumbers = useMemo(() => {
      const pageNumbers = [];
      const leftDots = page > 3;
      const rightDots = page < totalPages - 2;

      if (leftDots) {
        pageNumbers.push(
          <PageButton key={1} pageNum={1} />,
          <button key="left-dots" className="pagination-btn">
            ...
          </button>,
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
          <button key="right-dots" className="pagination-btn">
            ...
          </button>,
          <PageButton key={totalPages} pageNum={totalPages} />,
        );
      }

      return pageNumbers;
    }, [page, totalPages, selectPageHandler]);

    return (
      <div>
        {products.length > 0 && (
          <div className="pagination">
            <button
              disabled={page === 1}
              role="button"
              data-testid="pagination-prev"
              className={`pagination-btn ${
                page > 1 ? 'pagination-prev' : 'pagination-btn--disabled'
              }`}
              onClick={() => selectPageHandler(page - 1)}
            >
              <FaChevronLeft />
            </button>
            {renderPageNumbers}
            <button
              data-testid="pagination-next"
              disabled={page >= totalPages}
              className={`pagination-btn ${
                page < totalPages
                  ? 'pagination-next'
                  : 'pagination-btn--disabled'
              }`}
              onClick={() => selectPageHandler(page + 1)}
            >
              <FaChevronRight />
            </button>
          </div>
        )}
      </div>
    );
  },
);

export default Pagination;
