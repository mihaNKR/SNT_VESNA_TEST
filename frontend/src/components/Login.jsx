import { useState } from "react";
import axios from "axios";

export default function Login({ onLogin }) {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState("enter-phone");

  const sendSms = async () => {
    await axios.post("http://localhost:8000/api/auth/send_sms", { phone });
    setStep("enter-code");
  };

  const verifyCode = async () => {
    const res = await axios.post("http://localhost:8000/api/auth/verify_code", {
      phone,
      code,
    });
    if (res.data.token) {
      onLogin({ phone, token: res.data.token });
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-20 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-center">Вход в личный кабинет СНТ «ВЕСНА»</h2>

      {step === "enter-phone" && (
        <>
          <input
            type="text"
            placeholder="Телефон (например, +79991234567)"
            className="w-full border p-2 rounded"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button
            className="w-full bg-green-600 text-white p-2 rounded"
            onClick={sendSms}
          >
            Получить код
          </button>
        </>
      )}

      {step === "enter-code" && (
        <>
          <input
            type="text"
            placeholder="Код из СМС"
            className="w-full border p-2 rounded"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            className="w-full bg-blue-600 text-white p-2 rounded"
            onClick={verifyCode}
          >
            Войти
          </button>
        </>
      )}
    </div>
  );
}
