import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize: number;
}

const TablePagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
}) => {
  let pagesToShow: number[] = [];
  const pageLimit = 5;

  if (totalPages <= pageLimit) {
    pagesToShow = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else {
    const halfPages = Math.floor(pageLimit / 2);
    let startPage = Math.max(1, currentPage - halfPages);
    let endPage = startPage + pageLimit - 1;
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - pageLimit + 1);
    }
    pagesToShow = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => onPageChange(currentPage - 1)}
            className={
              currentPage === 1
                ? "opacity-50 cursor-not-allowed"
                : "hover:cursor-pointer"
            }
          />
        </PaginationItem>
        {pagesToShow.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              onClick={() => onPageChange(page)}
              className={
                page === currentPage
                  ? "bg-blue-500 text-white cursor-default"
                  : "hover:bg-blue-200 cursor-pointer"
              }
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => onPageChange(currentPage + 1)}
            className={
              currentPage === totalPages
                ? "opacity-50 cursor-not-allowed"
                : "hover:cursor-pointer"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default TablePagination;