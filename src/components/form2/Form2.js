import React from "react";
import styles from "./Form2.module.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";

const Form2 = () => {
  const navigate = useNavigate();
  const SubmitHandler = (e) => {
    e.preventDefault();
    navigate("/login-page3");
  };
  return (
    <div className={styles.form1}>
      <div className="container">
        <div className="text-center">
          <h2 className="mb-5">Registrate en miTienda</h2>
        </div>
        <div className={styles.formBorder}>
          <div className={styles.form1WidthDiv}>
            <Form onSubmit={SubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Elige tu plan </Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Como quieres pagario?</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombres</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="me-3">Tipo de documento</Form.Label>
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css" className="me-3">
                  RUC
                </label>
                <input type="radio" id="css" name="fav_language" value="CSS" />
                <label for="css">RUC</label>
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
              <div className={styles.lastBtn}>
                <button
                  className="btn-primary btn "
                  variant="primary"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form2;
