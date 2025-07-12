# backend/main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import auth, readings, bulletin, chat

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/auth")
app.include_router(readings.router, prefix="/api/readings")
app.include_router(bulletin.router, prefix="/api/bulletin")
app.include_router(chat.router, prefix="/api/chat")
