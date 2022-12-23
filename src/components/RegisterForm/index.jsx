import Styles from "./Styles.module.css";
import { useState } from "react";
import ExampleService from "./../../services/ExampleService";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const [campo1, setCampo1] = useState("");
  const [campo2, setCampo2] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    e.stopPropagation();
    const param = { campoX: campo1, campoY: campo2 };
    await ExampleService.register(param);
    navigate("/");
  }

  return (
    <>
      <form onSubmit={handleRegister} className={Styles.form}>
        <div className={Styles.formGroup}>
          <label htmlFor="email">campo 1</label>
          <input
            type="text"
            id="email"
            onChange={(e) => {
              setCampo1(e.target.value);
            }}
          />
        </div>

        <div className={Styles.formGroup}>
          <label htmlFor="senha">campo 2</label>
          <input
            type="password"
            id="senha"
            onChange={(e) => {
              setCampo2(e.target.value);
            }}
          />
        </div>

        <button type="submit">cadatrar</button>
      </form>
    </>
  );
}

export default RegisterForm;
