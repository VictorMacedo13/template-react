import Styles from "./Styles.module.css";
import { useState } from "react";
import { useEffect } from "react";
import ExampleService from "../../services/ExampleService";
import { useNavigate } from "react-router-dom";

function ListItem() {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await ExampleService.getAll();
      setList(data);
    };
    fetchData();
  }, []);

  async function updateList() {
    const data = await ExampleService.getAll();
    setList(data);
  }

  async function handleDelete(id) {
    await ExampleService.delete(id);
    updateList();
  }
  async function handleUpdate(id) {
    const item = { name: "Item Name", campoY: 123 };
    // const item = await ExampleService.getById(id);
    navigate("/edit", { state: { item } });
  }

  return (
    <>
      <ul className={Styles.ul}>
        {list &&
          list.map((item) => {
            return (
              <li key={item}>
                {item}
                <button id={item.id} onClick={(e) => handleUpdate(e.target.id)}>
                  editar
                </button>
                <button id={item.id} onClick={(e) => handleDelete(e.target.id)}>
                  excluir
                </button>
              </li>
            );
          })}
      </ul>
    </>
  );
}
export default ListItem;
