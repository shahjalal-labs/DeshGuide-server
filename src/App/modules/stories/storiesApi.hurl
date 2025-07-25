# storiesApi.hurl
# ✅ Get all stories
GET http://localhost:5000/api/v1/stories
Accept: application/json


# ✅ Get all stories by userId
GET http://localhost:5000/api/v1/stories/user/688036d54582db5aafd12e4f
Accept: application/json


# ✅ Get a single story by ID
GET http://localhost:5000/api/v1/stories/687e509abf17c8a9265b66dd
Accept: application/json


PATCH http://localhost:5000/api/v1/stories/687e509abf17c8a9265b66dd
Content-Type: application/json

{
  "title": "Updated Sunset Title",
  "description": "New description for this beautiful sunset",
  "images": [
    "https://img.url/sunset3.jpg"
  ]
}

HTTP/1.1 200

POST http://localhost:5000/api/v1/stories
Content-Type: application/json

{
  "title": "Bird Watching at Tanguar Haor",
  "description": "The wetlands came alive with hundreds of migratory birds flying in sync. I spent hours watching them dive and glide across the water. The sound of flapping wings and nature’s stillness was unforgettable.",
  "images": [
    "https://img.url/tanguar1.jpg",
    "https://img.url/tanguar2.jpg"
  ],
  "userId": "688036d54582db5aafd12e4f",
  "userName": "Jalal Uddin",
  "userPhoto": "https://img.url/profile.jpg"
}




# ✅ Delete a story
DELETE http://localhost:5000/api/v1/stories/687e5087bf17c8a9265b66d4
Accept: application/json

