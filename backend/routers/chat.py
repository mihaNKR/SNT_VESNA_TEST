# backend/routers/chat.py
from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime

router = APIRouter()

class ChatMessage(BaseModel):
    phone: str
    message: str
    timestamp: datetime

chat_history = []

@router.get("/history")
def get_chat():
    return sorted(chat_history, key=lambda x: x["timestamp"])

@router.post("/send")
def send_message(msg: ChatMessage):
    chat_history.append(msg.dict())
    return {"status": "delivered"}
