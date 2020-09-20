import React, { useRef } from "react";
import styles from "./layout.module.css";
import { getSearched } from "./../stateManager/actions";
import { useDispatch } from "react-redux";

export default function Layout({ onPast, onLuanch }) {
  const getSearch = useRef();
  const dispatch = useDispatch();

  function handleSearch(text: string) {
    dispatch(getSearched(text));
  }

  return (
    <>
      <div className={styles["wrapper"]}>
        <div className={styles["container"]}>
          <h1 className={styles["title"]}>SpaceX's launches list</h1>
          <section className={styles["search"]}>
            <label>
              <i className="fa fa-search" aria-hidden="true"></i>
            </label>
            <input
              className={styles["input"]}
              type="text"
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search Sites"
              ref={getSearch}
            />
          </section>
          <span>
            <button className={styles["btn"]} onClick={onPast}>
              Past Launches
            </button>
            <button className={styles["btn"]} onClick={onLuanch}>
              Upcoming Launches
            </button>
          </span>
          <span>
            <i className="fa fa-spinner fa-spin"></i>
            <br />
            <i className="icon-spinner"></i>
          </span>
        </div>
      </div>
    </>
  );
}
