# storiesApi.hurl
# ✅ Get all stories
GET http://localhost:5000/api/v1/stories
Accept: application/json

# ✅ Get a single story by ID
GET http://localhost:5000/api/v1/stories/687e509abf17c8a9265b66dd
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
DELETE http://localhost:5000/api/v1/stories/687e5087bf17c8a9265b66d4
Accept: application/json

