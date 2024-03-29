from sqlalchemy import Column, Integer, String, DateTime
from base import Base
from datetime import datetime
from uuid import uuid4

class VideoLink(Base):
    """ Video Link """

    __tablename__ = "video_links"

    id = Column(Integer, primary_key=True)
    user_id = Column(String(250), nullable=False)
    username = Column(String(250), nullable=False)
    video_id = Column(String(250), nullable=False)
    video_title = Column(String(250), nullable=False)
    video_link = Column(String(100), nullable=False)
    date_created = Column(DateTime, nullable=False)

    def __init__(self, user_id, username, video_link, video_title):
        self.user_id = user_id
        self.username = username
        self.video_id = uuid4()
        self.video_title = video_title
        self.video_link = video_link
        self.date_created = datetime.now()

    def to_dict(self):
        dict = {}

        dict['id'] = self.id
        dict['user_id'] = self.user_id
        dict['username'] = self.username
        dict['video_id'] = self.video_id
        dict['video_title'] = self.video_title
        dict['video_link'] = self.video_link
        dict['date_created'] = self.date_created

        return dict