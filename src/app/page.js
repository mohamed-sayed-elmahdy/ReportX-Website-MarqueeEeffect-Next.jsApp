import React from "react";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";
import styles from "./page.module.css";
import ReviewCard from "./components/ReviewCard/page";

export default function Home() {
  return (
    <div>
      <div className={styles.homeSection}>
        <div className={styles.imgContainer}>
          <Image
            src="/instagram.png"
            alt="logo"
            width={1000}
            height={1200}
            className={styles.img}
          />
        </div>
        <div className={`${styles.reviewsContainer} flex`}>
          <span>4.6</span>
          <Image
            src="/stars.png"
            alt="stars"
            width={110}
            height={20}
            className={styles.img}
          />
          <span>30.8K+ Reviews</span>
        </div>
        <div className={`${styles.logoContainer} flex`}>
          <div className={styles.logoimgContainer}>
            <span>Reports</span>
          </div>
          <div className={styles.logoimgContainer}>
            <Image
              src="/Group 3.png"
              alt="logo"
              width={90}
              height={50}
              className={styles.logo}
            />
          </div>
        </div>
        <p className={styles.briefAboutapp}>
          Our most powerful Instagram analytics tool offers 30+ useful features,
          including Instagram Story Viewer, Instagram Downloader, Instagram
          Video Downloader, Instagram Story Downloader, Enlarge photo, and
          Instagram Photo Downloader.
        </p>
        <p className={styles.featurespara}>
 <span>• Designed for large Instagram accounts</span>   <span>• Super fast loading time</span>   <span>• Safe to use</span></p>
        <div className={styles.storeImgs}>
          <div className={styles.appStoreimgContainer}>
            <Image
              src="/google.png"
              alt="logo"
              width={640}
              height={400}
              className={styles.img}
            />
          </div>
          <div className={styles.appStoreimgContainer}>
            <Image
              src="/apple.png"
              alt="logo"
              width={640}
              height={400}
              className={styles.img}
            />
          </div>
        </div>
      </div>
      <div className={styles.reviewsCardsSection}>
        <h2 className={styles.title}>What people are saying ?</h2>
        <div className={styles.animationContainer}>
          <Marquee
            fade={true}
            direction="left"
            pauseOnHover={true}
            className={`${styles.marquee} `}
          >
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </Marquee>
          <Marquee
            fade={true}
            reverse={true}
            pauseOnHover={true}
            className={`${styles.marquee} `}
          >
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </Marquee>
          <Marquee
            fade={true}
            direction="left"
            pauseOnHover={true}
            className={`${styles.marquee} `}
          >
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </Marquee>
        </div>
      </div>
    </div>
  );
}
