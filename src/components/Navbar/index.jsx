import Styles from "./Styles.module.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  function handleCreate(e) {
    navigate("/create");
  }
  function handleList() {
    navigate("/");
  }

  return (
    <>
      <nav className={Styles.navbar}>
        <button className={Styles.btn} onClick={(e) => handleList(e)}>
          Listagem
        </button>
        <button className={Styles.btn} onClick={(e) => handleCreate(e)}>
          Cadatrar
        </button>
      </nav>
    </>
  );
}

export default Navbar;
