from sqlalchemy import create_engine, and_
from sqlalchemy.orm import sessionmaker

from db.video_links import VideoLink
from db.base import Base
from helpers.read_config import database_config
user, password, hostname, port, db = database_config()

DB_ENGINE = create_engine(f'mysql+pymysql://{user}:{password}@{hostname}:{port}/{db}')
Base.metadata.bind = DB_ENGINE
DB_SESSION = sessionmaker(bind=DB_ENGINE)


def get_video_link(video_id, user_id):
    session = DB_SESSION()

    video = session.query(VideoLink).filter(and_(VideoLink.video_id == video_id, VideoLink.user_id == user_id)).first().to_dict()

    if not video:
        return 400, "There were no matching results found", None
    else:
        return 200, "Matching video found", video
    

def get_all_videos():
    session = DB_SESSION()

    results = session.query(VideoLink).all()

    videos = []

    for result in results:
        videos.append(result.to_dict())

    if not videos:
        return 400, "There was an error fetching all the videos", None
    else:
        return 200, "All stored videos fetched", videos


def upload_video_link(user_id, video_link):
    session = DB_SESSION()

    try:
        pr = VideoLink(user_id, video_link)
        session.add(pr)
        
        session.commit()
        session.close()

        return 201, "Video link was saved successfully"
    except:
        return 500, "There was an error saving the video link"