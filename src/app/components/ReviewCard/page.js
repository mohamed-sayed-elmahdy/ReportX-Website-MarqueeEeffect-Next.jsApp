import React from "react";
import styles from "./reviewCard.module.css";
import Image from "next/image";

function page() {
  return (
    <div className={styles.cardContainer}>
      <Image
        src="/Group 3.png"
        alt="stars"
        width={110}
        height={15}
        className={styles.img}
      />
      <div className={styles.group}>
        <span>Princess najee </span>
        <span>•</span>
        <span>2023/03/10</span>
        <span>•</span>
        <span>Version 2.3</span>
      </div>
      <h3 className={styles.minireview}>Accurate Tracker!</h3>
      <p className={styles.review}>
        This was exactly what I needed to help me track my followers. This app
        is great for monitoring who’s following and unfollowing your account . I
        also use this for marketing strategies to keep track of potential leads
        based on who’s watching or liking my post . I love it !
      </p>
      <div className={`${styles.nameAndContry} flex`}>
        <p className={styles.name}>By Princess najee from USA</p>
        <Image
          src="/usa.png"
          alt="usa"
          width={60}
          height={40}
          className={styles.img}
        />
      </div>
    </div>
  );
}

export default page;
