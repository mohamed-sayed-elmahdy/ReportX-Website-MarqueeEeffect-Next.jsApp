import React from "react";
import styles from "./footer.module.css";
import Link from "next/link";

function page() {
  return (
    <div className={`${styles.footer} flex`}>
      <p className={styles.footerParagraph}>
        © 2024 ReportsX . All rights reserved. Apple, the Apple logo, iPhone,
        iPad, and iPod Touch are trademarks of Apple Inc., registered in the
        U.S. and other countries. App Store is a service mark of Apple Inc.
      </p>
      <ul className={`${styles.links} flex`}>
        <Link href="/"  className={styles.link}>
          <li>Contact us</li>
        </Link>
        <Link href="/" className={styles.link}>
          <li>Privacy policy</li>
        </Link>
        <Link href="/" className={styles.link}>
          <li>Terms of condition </li>
        </Link>
      </ul>
    </div>
  );
}

export default page;
