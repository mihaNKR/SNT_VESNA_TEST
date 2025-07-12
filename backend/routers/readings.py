# backend/routers/readings.py
from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime

router = APIRouter()

# Модель показаний
class Reading(BaseModel):
    phone: str
    date: datetime
    value: float

# Временное хранилище
fake_db = []

@router.post("/submit")
def submit_reading(reading: Reading):
    fake_db.append(reading.dict())
    print(f"[DEBUG] Показание: {reading.phone} = {reading.value} ({reading.date})")
    return {"status": "accepted"}

@router.get("/latest")
def get_latest(phone: str):
    readings = [r for r in fake_db if r["phone"] == phone]
    if not readings:
        return {"value": None}
    latest = sorted(readings, key=lambda x: x["date"], reverse=True)[0]
    return {"value": latest["value"], "date": latest["date"]}
