import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Registration from "./pages/Register";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import NavBar from "./components/Navbar";
import Photos from "./pages/PhotosPage";
import Albums from "./pages/AlbumsPage";
import { useEffect, useState } from "react";
import { useAuth } from "./utils/AuthContext";
import ErrorPage from "./pages/ErrorPage";
import PublisherDetails from "./pages/PublisherDetails";
import AlbumDetails from "./pages/AlbumDetails";
import PhotoDetails from "./pages/PhotoDetails";
import UpdatePhotoForm from "./components/UpdatePhotoForm";
import Footer from "./pages/Footer";

function App() {
  const { user, loginUser } = useAuth();
  const [publisherID, setPublisherId] = useState(null);

  useEffect(() => {
    const fetchAlbums = () => {
      fetch("http://127.0.0.1:3000/publishers")
        .then((response) => response.json())
        .then((data) => {
          const filteredPublishers = data.filter(
            (publisher) => publisher.email === user.email
          );
          console.log(filteredPublishers[0].id);
          setPublisherId(filteredPublishers[0].id);
        })
        .catch((error) => console.error("Error fetching albums:", error));
    };

    fetchAlbums();
  }, [user]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/publishers/:id" element={<PublisherDetails />} />

          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/:id" element={<AlbumDetails />} />

          <Route
            path="/photos"
            element={<Photos publisherID={publisherID} />}
          />
          <Route path="/photos/:id" element={<PhotoDetails />} />
          <Route path="*" element={<ErrorPage />} />

          <Route path="/update/photos/:id" element={<UpdatePhotoForm />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
