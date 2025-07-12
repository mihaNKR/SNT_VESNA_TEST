import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Newspaper, Megaphone, MessageCircle, User } from "lucide-react";

const NavigationMenu = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md z-50">
      <ul className="flex justify-around items-center py-2">
        <NavLink to="/" className="flex flex-col items-center text-sm">
          <Home className="w-6 h-6" />
          Главная
        </NavLink>
        <NavLink to="/news" className="flex flex-col items-center text-sm">
          <Newspaper className="w-6 h-6" />
          Новости
        </NavLink>
        <NavLink to="/ads" className="flex flex-col items-center text-sm">
          <Megaphone className="w-6 h-6" />
          Объявления
        </NavLink>
        <NavLink to="/chat" className="flex flex-col items-center text-sm">
          <MessageCircle className="w-6 h-6" />
          Чат
        </NavLink>
        <NavLink to="/profile" className="flex flex-col items-center text-sm">
          <User className="w-6 h-6" />
          Профиль
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavigationMenu;
