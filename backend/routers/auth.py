# backend/routers/auth.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter()

# Временное хранилище кодов
codes = {}

class PhoneRequest(BaseModel):
    phone: str

class VerifyRequest(BaseModel):
    phone: str
    code: str

@router.post("/send_sms")
def send_sms(data: PhoneRequest):
    code = "1234"  # В реальности — сгенерировать и отправить через SMS API
    codes[data.phone] = code
    print(f"[DEBUG] Код для {data.phone}: {code}")
    return {"status": "ok"}

@router.post("/verify_code")
def verify_code(data: VerifyRequest):
    expected = codes.get(data.phone)
    if expected == data.code:
        return {"token": "mock-jwt-token-for-" + data.phone}
    raise HTTPException(status_code=401, detail="Неверный код")
