import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams
} from "react-router-dom";
import PhotosContextProvider from "./context/PhotosContext";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

function App(props) {
  const { searchInput } = useParams();

  const handleSubmit = (e, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    const url = `/search/${searchInput}`;
    window.location.href = url
  };

  return (
    <PhotosContextProvider>
      <Router>
        <div className="container">
        <Header handleSubmit={handleSubmit} />
          <Routes>
            {/* <Route
              exact
              path="/mountain"
              element={<Header handleSubmit={handleSubmit} />}
            /> */}
            <Route
              exact
              path="/"
              element={<Navigate to="/mountain" replace />}
            />

            <Route path="/mountain" element={<Item searchTerm="mountain" />} />
            <Route path="/beach" element={<Item searchTerm="beach" />} />
            <Route path="/bird" element={<Item searchTerm="bird" />} />
            <Route path="/food" element={<Item searchTerm="food" />} />
            <Route
              path="/search/:searchInput"
              element={<Search searchTerm={searchInput} />}
            />
            <Route component={NotFound}/>
          </Routes>
        </div>
      </Router>
    </PhotosContextProvider>
  );
}

export default App;
