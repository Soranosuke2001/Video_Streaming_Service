from flask import Flask, request, jsonify
from flask_cors import cross_origin
app = Flask(__name__)

from db.db_queries import get_video_link, upload_video_link, get_all_videos


@app.route('/fetch/video', methods=['GET'])
@cross_origin(origins="http://localhost:4000")
def fetch_video():
    video_id = request.args.get('video_id')
    user_id = request.args.get('user_id')

    status_code, message, video = get_video_link(video_id, user_id)

    return jsonify({"data": video, "message": message}), status_code


@app.route('/fetch/all', methods={'GET'})
@cross_origin(origins="http://localhost:4000")
def fetch_all():
    status_code, message, videos = get_all_videos()

    return jsonify({"data": videos, "message": message}), status_code


@app.route('/upload/video', methods=['POST'])
@cross_origin(origins="http://localhost:7000")
def upload_video():
    data = request.json

    user_id = data.get('user_id')
    video_link = data.get('video_link')

    status_code, message = upload_video_link(user_id, video_link)

    return jsonify({"message": message}), status_code


if __name__ == '__main__':
    app.run(debug=True, port=8100)
