import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Error,
  Login,
  Nasr,
  Register,
  Home,
  Jadid,
  Temur,
  SingleBook,
  Search,
} from "./pages";
import Private from "./private";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Private />}>
          <Route path="/home" element={<Home />}>
            <Route path="/home/jadid" element={<Jadid />} />
            <Route path="/home/temur" element={<Temur />} />
          </Route>
          <Route path="/nasr" element={<Nasr />} />
          <Route path="/search/:searchBook" element={<Search />} />
          <Route path="/single/:id" element={<SingleBook />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
