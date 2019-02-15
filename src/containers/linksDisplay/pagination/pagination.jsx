// @flow
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import PageButton, { Button } from './pageButton';

export const PaginationWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  button:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  button:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const range = (from: number, to: number, step = 1): Array<number> => {
  let i = from;
  const arr = [];

  while (i <= to) {
    arr.push(i);
    i += step;
  }

  return arr;
};

type Props = {
  onPageChange: (page: number) => void,
  itemsCount: number,
  pageLimit: number,
  itemLimit: number,
  currentPage: number,
};
class Pagination extends Component<Props> {
  onPreviousPage = () => {
    const { currentPage } = this.props;
    if (currentPage > 1) {
      this.props.onPageChange(currentPage - 1);
    }
  };

  onNextPage = () => {
    const { currentPage, itemLimit, itemsCount } = this.props;
    const pagesCount = Math.ceil(itemsCount / itemLimit);
    if (pagesCount > currentPage) {
      this.props.onPageChange(currentPage + 1);
    }
  };

  render() {
    const {
      itemsCount, pageLimit, itemLimit, onPageChange, currentPage,
    } = this.props;
    const pagesCount = Math.ceil(itemsCount / itemLimit);
    const middlePage = Math.ceil((pageLimit - 1) / 2);
    let startPage = Math.max(currentPage - middlePage, 1);
    if (currentPage + middlePage > pagesCount) {
      startPage = pagesCount - pageLimit + 1;
    }
    let endPage = pageLimit + startPage - 1;
    if (pageLimit >= pagesCount) {
      startPage = 1;
      endPage = pagesCount;
    }
    return (
      <PaginationWrapper>
        <Button onClick={this.onPreviousPage} disabled={currentPage <= 1}>
          {'<'}
        </Button>
        {range(startPage, endPage).map(page => (
          <PageButton
            key={page}
            onPageChange={onPageChange}
            page={page}
            active={page === currentPage}
          >
            {page}
          </PageButton>
        ))}
        {startPage + pageLimit - 1 < pagesCount && (
          <Fragment>
            <PageButton
              disabled={startPage + pageLimit >= pagesCount}
              onPageChange={onPageChange}
              page={pagesCount - middlePage}
            >
              ...
            </PageButton>

            <PageButton onPageChange={onPageChange} page={pagesCount}>
              {pagesCount}
            </PageButton>
          </Fragment>
        )}
        <Button onClick={this.onNextPage} disabled={pagesCount <= currentPage}>
          {'>'}
        </Button>
      </PaginationWrapper>
    );
  }
}

export default Pagination;
