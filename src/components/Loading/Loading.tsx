import React from "react";
import styles from "./Loading.module.css";

function Loading() {
    return (
        <>
            <div className={styles.page}>
                <div className={styles.circle} />
            </div>
        </>
    );
};

export default Loading;