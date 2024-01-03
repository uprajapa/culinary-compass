import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "../src/pages/Home";
import useUsers from "./hooks/useUsers";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";

function App() {
  const { state, dispatch } = useUsers();
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={<Home users={state.users} message={state.message} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
