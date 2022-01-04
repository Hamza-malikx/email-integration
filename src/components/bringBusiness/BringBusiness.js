import React from "react";
import styles from "./bringBusiness.module.css";
import img from "../../assets/recursos/img1.PNG";
const BringBusiness = () => {
  return (
    <div className={styles.BringBusiness}>
      <div className="container">
        <div className={styles.content}>
          <h2>Bring your business online</h2>
          <p>
            Create an ecommerce website backed by powerful tools that help you
            find customers, dive sales, and manage your day-to-day
          </p>
          <div className={styles.contentSubHeading}>
            <h6>Explore more examples</h6>
          </div>
          <div className={styles.contentSubHeadingImgs}>
            <div className="row">
              <div className="col-lg-3 ">
                <div className={styles.contentSubHeadingImg}>
                  <img src={img} alt="" />
                  <h6>FOOD & DRINK</h6>
                  <p>Alfred</p>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className={styles.contentSubHeadingImg}>
                  <img src={img} alt="" />
                  <h6>FOOD & DRINK</h6>
                  <p>Alfred</p>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className={styles.contentSubHeadingImg}>
                  <img src={img} alt="" />
                  <h6>FOOD & DRINK</h6>
                  <p>Alfred</p>
                </div>
              </div>
              <div className="col-lg-3 ">
                <div className={styles.contentSubHeadingImg}>
                  <img src={img} alt="" />
                  <h6>FOOD & DRINK</h6>
                  <p>Alfred</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BringBusiness;
