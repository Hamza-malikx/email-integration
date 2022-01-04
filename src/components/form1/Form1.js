import React from "react";
import Form from "react-bootstrap/Form";
import styles from "./form1.module.css";
import { useNavigate } from "react-router";
const Form1 = () => {
  const navigate = useNavigate();
  const SubmitHandler = (e) => {
    e.preventDefault();
    navigate("/login-page2");
  };
  return (
    <div className={styles.form1}>
      <div className="container">
        <div className="text-center">
          <h2 className="mb-5">Registrate en miTienda</h2>
        </div>
        <div className={styles.formBorder}>
          <div className={styles.socialButton}>
            <button className={styles.fbBtn}>CONTINUAR CON FACEBOOK</button>
          </div>
          <div className={styles.socialButton}>
            <button className={styles.googleBtn}>CONTINUAR CON Google</button>
          </div>

          <div className={styles.form1WidthDiv}>
            <Form onSubmit={SubmitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Numbers</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Appiledos</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Coreo Electronico</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="password" placeholder="Password" />
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

export default Form1;
