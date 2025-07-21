# ✅ Get all tour guide requests
GET http://localhost:5000/api/v1/tour-guide-requests


# ✅ Get single tour guide request
GET http://localhost:5000/api/v1/tour-guide-requests/ID_HERE
Accept: application/json


# ✅ Create new tour guide request
POST http://localhost:5000/api/v1/tour-guide-requests
Content-Type: application/json

{
  "userId": "687cff8d095a1d459861b897",
  "title": "Experienced Mountain Guide",
  "reason": "I love guiding tourists and know every trail in the hills",
  "cvLink": "https://example.com/cv/john_doe.pdf",
  "status": "pending"
}


# ✅ Update request status (e.g., accept or reject)
PATCH http://localhost:5000/api/v1/tour-guide-requests/687dd50b1ff686fc8ebc3cae
Content-Type: application/json

{
  "status": "accepted"
}


# ✅ Delete tour guide request
DELETE http://localhost:5000/api/v1/tour-guide-requests/687ddc747fbf4a4fbc06f8a6
Accept: application/json

