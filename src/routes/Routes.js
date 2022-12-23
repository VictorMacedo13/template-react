import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreationPage from "./../pages/CreationPage/CreationPage";
import ListPage from "./../pages/ListPage/ListPage";
import EditPage from "./../pages/ItemPage/ItemPage";

function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/create" element={<CreationPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MyRoutes;
