import React from "react";
import styles from "./innovador.module.css";
import startup from "../../assets/recursos/startUp.PNG";
import onefiveImg from "../../assets/recursos/1551.PNG";
import nttData from "../../assets/recursos/nttData.PNG";
import participant from "../../assets/recursos/participant.PNG";
import tuEmp from "../../assets/recursos/tuexpress.PNG";
import payU from "../../assets/recursos/payU.PNG";
import buPlaza from "../../assets/recursos/buPlaza.PNG";
import cep from "../../assets/recursos/cepeFodes.PNG";
const Innovador = () => {
  return (
    <div className={styles.innovadorSection}>
      <div className="container">
        <div className={styles.innovadorContent}>
          <h2> UN EMPRENDIMIENTO INNOVADOR</h2>
          <p>
            MiTienda,pe ha sido seleccionada para formar parte de la óta
            generación de Startup Perú, el programa del Estado Peruano para la
            promoción y consolidación de Empresas Innovadoras, el mismo que es
            administrado por el Programa Nacional de Innovación para la
            Competitividad y Productividad (Innovate Perú): ambos programas
            liderados por el Ministerio de la Producción. Durante este ano
            estamos siendo acompañados por 1551, la incubadora de empresas
            innovadoras de la Universidad Nacional Mayor de San Marcos.
          </p>
          <div className={styles.images}>
            <div className="row">
              <div className="col-lg-3">
                <div className={styles.bannerImgs}>
                  <img src={startup} alt="" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles.bannerImgs}>
                  <img src={onefiveImg} alt="" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles.bannerImgs}>
                  <img src={nttData} alt="" />
                </div>
              </div>
              <div className="col-lg-3">
                <div className={styles.bannerImgs}>
                  <img src={participant} alt="" />
                </div>
              </div>
            </div>
          </div>
          <h3>ALIANZAS ESTRATEGGICAS</h3>
          <div className="row">
            <div className="col-lg-3">
              <div className={styles.bannerImgs}>
                <img src={tuEmp} alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.bannerImgs}>
                <img src={payU} alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.bannerImgs}>
                <img src={buPlaza} alt="" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className={styles.bannerImgs}>
                <img src={cep} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Innovador;
