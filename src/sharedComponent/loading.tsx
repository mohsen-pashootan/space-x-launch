import React from "react";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles["spin-container"]}>
      <span className={styles["spiner"]}>
        <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
      </span>
    </div>
  );
}
