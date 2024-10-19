import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ListViewPage from "./components/ListViewPage";
import DetailViewPage from "./components/DetailViewPage";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage authentication state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/list"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ListViewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <DetailViewPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
