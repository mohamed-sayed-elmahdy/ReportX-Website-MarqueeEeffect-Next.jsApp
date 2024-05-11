"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import { PiUsersThree } from "react-icons/pi";
import { FaBars } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";

function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div>
      <nav className={styles.navContainer}>
        <div className={styles.logocontainer}>
          <Link href="/">
            <PiUsersThree className={styles.icon} />
          </Link>
        </div>
        <div className={`${styles.links} flex`}>
          <Link className={`${styles.link} menuItem`} href="/">
            Instagram Story Viewer
          </Link>
          <Link className={`${styles.link} menuItem`} href="/">
            Instagram Video Downloader
          </Link>
          <Link className={`${styles.link}  menuItem`} href="/">
            Enlarge Profile photo
          </Link>
          <Link className={`${styles.link}  menuItem`} href="/">
          Instagram Photo Downloader
          </Link>
        </div>
      </nav>
      <nav className={styles.navMobileContainer}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <PiUsersThree />
          </Link>
        </div>
        <div className={styles.menuIcon} onClick={toggleSidebar}>
          <FaBars />
        </div>
        <div
          className={`${styles.sidebar} ${
            showSidebar ? styles.showSidebar : ""
          }`}
        >
          <div className={styles.closeIcon} onClick={closeSidebar}>
            <IoIosCloseCircle />
          </div>
          <div className={styles.links}>
            <Link className={styles.link} href="/">
            Instagram Story Viewer
            </Link>
            <Link className={styles.link} href="/">
            Instagram Video Downloader
            </Link>
            <Link className={styles.link} href="/">
            Enlarge Profile photo
            </Link>
            <Link className={styles.link} href="/">
            Instagram Photo Downloader
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
