import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ExampleService from "./../../services/ExampleService";
import { useNavigate } from "react-router-dom";
import Styles from "./Styles.module.css";

function ItemEdit() {
  const [item, setItem] = useState();
  const [campo1, setCampo1] = useState("");
  const [campo2, setCampo2] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setItem(location.state.item);
  }, [location]);

  async function handleUpdate(e) {
    e.preventDefault();
    e.stopPropagation();
    const param = { campoX: campo1, campoY: campo2 };
    await ExampleService.register(param);
    navigate("/");
  }

  if (item) {
    return (
      <>
        <form onSubmit={handleUpdate} className={Styles.form}>
          <div className={Styles.formGroup}>
            <label htmlFor="email">campo 1</label>
            <input
              type="text"
              id="email"
              defaultValue={item.name}
              onChange={(e) => {
                setCampo1(e.target.value);
              }}
            />
          </div>

          <div className={Styles.formGroup}>
            <label htmlFor="senha">campo 2</label>
            <input
              defaultValue={item.campoY}
              type="password"
              id="senha"
              onChange={(e) => {
                setCampo2(e.target.value);
              }}
            />
          </div>

          <button type="submit">Salvar</button>
        </form>
      </>
    );
  }
}

export default ItemEdit;
