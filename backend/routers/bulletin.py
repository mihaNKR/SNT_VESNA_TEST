# backend/routers/bulletin.py
from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime

router = APIRouter()

class BulletinItem(BaseModel):
    title: str
    text: str
    author: str
    date: datetime

bulletin_board = []

@router.get("/")
def get_bulletin():
    return sorted(bulletin_board, key=lambda x: x["date"], reverse=True)

@router.post("/post")
def post_item(item: BulletinItem):
    bulletin_board.append(item.dict())
    return {"status": "posted"}
