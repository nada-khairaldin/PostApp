import { useEffect, useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import styles from "./Pagination.module.css";
import type { startedPageType } from "../../types";
import { useSearchParams } from "react-router-dom";

const postsNumber = 100;
const postsPerPage = 10;
const PaginationLimit = 5;
const totalPagesNumber = Math.ceil(postsNumber / postsPerPage);
function Pagination({ setStartedPost }: startedPageType) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [startPaginator, setStartPaginator] = useState(1);

  const currentPage = Number(searchParams.get("page")) || 1;
  const endPaginator = Math.min(
    startPaginator + PaginationLimit - 1,
    totalPagesNumber
  );

  useEffect(
    function () {
      const currentPageState =
        Math.floor((currentPage - 1) / PaginationLimit) * PaginationLimit + 1;
      setStartPaginator(currentPageState);
    },
    [currentPage]
  );
  function createPaginator(startPaginator: number) {
    return Array.from(
      { length: endPaginator - startPaginator + 1 },
      (_, i) => i + startPaginator
    ).map((paginator) => (
      <button
        key={paginator}
        onClick={() => handlePageChanging(paginator)}
        className={paginator === currentPage ? styles.active : ""}
      >
        {paginator}
      </button>
    ));
  }

  function handlePageChanging(paginator: number) {
    setSearchParams({ page: String(paginator) });
    setStartedPost((paginator - 1) * postsPerPage + 1);
  }

  function handleNextPaginator() {
    if (startPaginator + PaginationLimit - 1 < totalPagesNumber)
      setStartPaginator((start) => start + PaginationLimit);
  }

  function handlePreviousPaginator() {
    if (startPaginator > 1)
      setStartPaginator((start) => start - PaginationLimit);
  }

  return (
    <div className={styles["pagination-container"]}>
      <button onClick={handlePreviousPaginator} disabled={startPaginator === 1}>
        <FaArrowLeftLong />
      </button>
      {createPaginator(startPaginator)}

      <button
        onClick={handleNextPaginator}
        disabled={startPaginator + PaginationLimit - 1 >= totalPagesNumber}
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
}

export default Pagination;
