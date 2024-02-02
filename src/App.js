import "./App.css";
import Landing from "./components/Landing";
import Login from "./pages/Login";
import Registration from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import NavBar from "./components/Navbar";
import PublishersPage from "./pages/PublishersPage";
import Photos from "./pages/PhotosPage";
import Albums from "./pages/AlbumsPage";
import { useEffect, useState } from "react";
import { useAuth } from "./utils/AuthContext";
import ErrorPage from "./pages/ErrorPage";
import PublisherDetails from "./pages/PublisherDetails";

function App() {
  const { user, loginUser } = useAuth();
  // const [publishers, setPublishers] = useState([]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:3000/publishers")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPublishers(data);
  //     });
  // }, []);

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
          <Route path="/publishers/:id" element={<PublisherDetails />} />

          <Route path="/albums" element={<Albums />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
