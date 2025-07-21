# storiesApi.hurl
# ✅ Get all stories
GET http://localhost:5000/api/v1/stories
Accept: application/json

# ✅ Get a single story by ID
GET http://localhost:5000/api/v1/stories/64e4f4d61f8f4a9f3ddc9e17
Accept: application/json

# ✅ Create a new story
POST http://localhost:5000/api/v1/stories
Content-Type: application/json

{
  "title": "Sunset at Saint Martin",
  "description": "Witnessed the most beautiful sunset ever!",
  "images": [
    "https://img.url/sunset1.jpg",
    "https://img.url/sunset2.jpg"
  ],
  "userId": "687e37ea0d85a52d76c2eb6c",
  "userName": "Jalal Uddin",
  "userPhoto": "https://img.url/profile.jpg"
}

# ✅ Delete a story
DELETE http://localhost:5000/api/v1/stories/64e4f4d61f8f4a9f3ddc9e17
Accept: application/json

