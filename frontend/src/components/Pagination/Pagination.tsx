'use client'

import {FC, useMemo} from "react"
import cn from "classnames"

type Props = {
  pageCount: number;
  visiblePageButtonsCount: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: FC<Props> = (
  {
    pageCount,
    visiblePageButtonsCount,
    currentPage,
    onPageChange,
  }
) => {
  if (pageCount === 1) {
    return <></>
  }

  const visiblePages = useMemo(() => {
    const startPage =
      currentPage <= Math.floor(visiblePageButtonsCount / 2)
        ? 1
        : Math.min(
          currentPage - Math.floor(visiblePageButtonsCount / 2),
          pageCount - visiblePageButtonsCount + 1
        )
    const endPage = Math.min(startPage + visiblePageButtonsCount - 1, pageCount)
    return Array.from(
      {length: endPage - startPage + 1},
      (_, i) => startPage + i
    )
  }, [currentPage, pageCount, visiblePageButtonsCount])

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > pageCount) {
      return
    }

    onPageChange(pageNumber)
  }

  const handlePrevPageClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)
    }
  }

  const handleNextPageClick = () => {
    if (currentPage < pageCount) {
      handlePageChange(currentPage + 1)
    }
  }

  return (
    <div>
      <button data-testid='prev' onClick={handlePrevPageClick} disabled={currentPage === 1}>
        {"<"}
      </button>
      {visiblePages.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={cn({'active': currentPage === pageNumber})}
        >
          {pageNumber}
        </button>
      ))}
      <button data-testid='next' onClick={handleNextPageClick} disabled={currentPage === pageCount}>
        {">"}
      </button>
    </div>
  )
}

export default Pagination
