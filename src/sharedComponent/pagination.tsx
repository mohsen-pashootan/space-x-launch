import React from "react";
import { useSelector } from "react-redux";
import styles from "./pagination.module.css";

export default function Pagination({ onPageChange }) {
  const { pageSize, itemsCount, currentPage } = useSelector(
    (state: ROOTSTATE) => state
  );

  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = Array.from(Array(pagesCount + 1).keys()).slice(1);

  return (
    <nav className={styles["nav-container"]}>
      <div className={styles["count-container"]}>
        {pages.map((page) => (
          <span
            className={
              styles["nav-span"] +
              " " +
              (page === currentPage && styles["nav-active"])
            }
            key={page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </span>
        ))}
      </div>
    </nav>
  );
}
