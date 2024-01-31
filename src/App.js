import "./App.css";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Registration from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import NavBar from "./components/Navbar";
import PublishersPage from "./components/PublishersPage";
import Photos from "./components/PhotosPage";
import Albums from "./components/AlbumsPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/publishers" element={<PublishersPage />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/photos" element={<Photos />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
