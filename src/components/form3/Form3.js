import React from "react";
import styles from "./form3.module.css";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
const Form3 = () => {
  const navigate = useNavigate();
  const SubmitHandler = (e) => {
    e.preventDefault();
    // navigate("/login-page3");
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
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Apellidos</Form.Label>
                <Form.Control type="text" placeholder="" />
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
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Numero documento </Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Razon Social</Form.Label>
                <Form.Control type="email" placeholder="" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="number" placeholder="Password" />
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
                  pagar
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form3;
