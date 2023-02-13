import { Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Read from "./components/Read";

import "./styles.css";

export default function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route exact path="/" element={<Read />} />
        <Route exact path="create" element={<Create />} />
        <Route exact path="edit" element={<Edit />} />
      </Routes>
    </div>
  );
}
