# ✅ Get all tour guide requests
GET http://localhost:5000/api/v1/tour-guide-requests


# ✅ Get single tour guide request
688036d54582db5aafd12e4f
GET http://localhost:5000/api/v1/tour-guide-requests/6884fdd0e64086d005edf156
Accept: application/json


GET http://localhost:5000/api/v1/tour-guide-requests/random-accepted
## get all accepted tour guides
GET http://localhost:5000/api/v1/tour-guide-requests/random-accepted?limit=all



# ✅ Create new tour guide request
POST http://localhost:5000/api/v1/tour-guide-requests
Content-Type: application/json

{
  "userId": "6884fdd0e64086d005edf156",
  "title": "Experienced Mountain Guide",
  "reason": "I love guiding tourists and know every trail in the hills",
  "cvLink": "https://example.com/cv/john_doe.pdf",
  "status": "pending"
}


# ✅ Update request status (e.g., accept or reject)
PATCH http://localhost:5000/api/v1/tour-guide-requests/68850d7701426d0f5ab34d34
Content-Type: application/json

{
  "status": "accepted"
}


# ✅ Delete tour guide request
DELETE http://localhost:5000/api/v1/tour-guide-requests/68850d7701426d0f5ab34d34
Accept: application/json

