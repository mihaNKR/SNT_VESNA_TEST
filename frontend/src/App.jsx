import { useState } from "react";
import Login from "./components/Login";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {!user ? (
        <Login onLogin={setUser} />
      ) : (
        <div className="p-6">
          <h1 className="text-2xl font-bold">Добро пожаловать, {user.phone}!</h1>
          <p className="mt-2">Здесь будет: показания, объявления, чат, оплата</p>
        </div>
      )}
    </div>
  );
}
