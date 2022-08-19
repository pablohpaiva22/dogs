import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import { UserStorage } from "./UserContext";
import ProtectedRoute from "./components/Utilities/ProtectedRoute";
import Account from "./components/Account/Account";
import Photo from "./components/Photo/Photo";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta/*"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
            />
            <Route path="/foto/:id" element={<Photo />} />
          </Routes>

          <Footer />
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
