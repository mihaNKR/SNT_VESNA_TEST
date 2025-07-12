// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import NewsPage from "./pages/NewsPage.jsx";
import AdsPage from "./pages/AdsPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import NavigationMenu from "./components/NavigationMenu.jsx";
import Login from "./components/Login.jsx";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <BrowserRouter>
          <div className="pb-20"> {/* отступ снизу под меню */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/ads" element={<AdsPage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
          <NavigationMenu />
        </BrowserRouter>
      )}
    </div>
  );
}
