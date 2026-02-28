"use client";

import ReactPaginate from "react-paginate";
import { useRouter } from "next/navigation";
import css from "./Pagination.module.css";

interface Props {
  totalPages: number;
  currentPage: number;
}

export default function Pagination({ totalPages, currentPage }: Props) {
  const router = useRouter();

  const handlePageClick = (event: { selected: number }) => {
    const page = event.selected + 1;
    router.push(`/products?page=${page}`);
  };

  return (
    <nav className={css.paginationContainer} aria-label="Pagination">
      <ReactPaginate
        pageCount={totalPages}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        onPageChange={handlePageClick}
        forcePage={currentPage - 1}
        nextLabel="→"
        previousLabel="←"
        containerClassName={css.pagination}
        pageClassName={css.pageItem}
        pageLinkClassName={css.pageLink}
        previousClassName={css.pageItem}
        previousLinkClassName={css.pageLink}
        nextClassName={css.pageItem}
        nextLinkClassName={css.pageLink}
        breakClassName={css.pageItem}
        breakLinkClassName={css.pageLink}
        activeClassName={css.active}
        disabledClassName={css.disabled}
        renderOnZeroPageCount={null}
      />
    </nav>
  );
}
