# ✅ Get all bookings


GET http://localhost:5000/api/v1/bookings

# ✅ Get single booking
GET http://localhost:5000/api/v1/bookings/687da958289cd4c61c2b0c9f

# ✅ Create new booking
POST http://localhost:5000/api/v1/bookings
Content-Type: application/json

{
  "packageId": "687ce60e7511b3341ff488bf",
  "packageName": "Sajek Adventure",
  "touristId": "687ccd783d8c8c7d294a0fca",
  "touristName": "John Doe",
  "touristEmail": "john@example.com",
  "touristPhoto": "https://i.ibb.co/sample-image.png",
  "guideId": "687cff8d095a1d459861b897",
  "guideName": "John Doe",
  "price": 5000,
  "tourDate": "2025-08-01T00:00:00.000Z",
  "status": "pending",
  "paymentStatus": "unpaid",
  "transactionId": ""
}

# ✅ Update booking (e.g., mark as accepted or paid)
687da9b2289cd4c61c2b0ca5     /68836ba66261e0f84285c3ad  687da958289cd4c61c2b0c9f
PATCH http://localhost:5000/api/v1/bookings/687da958289cd4c61c2b0c9f  
Content-Type: application/json

{
  "status": "in-review",
  "paymentStatus": "paid"
}

# ✅ Delete booking
DELETE http://localhost:5000/api/v1/bookings/687d87c1385d0ad42e797a27

# ✅ Get bookings of  a  tourist by  id
GET http://localhost:5000/api/v1/bookings/tourist/688036d54582db5aafd12e4f

# ✅ Get bookings of a specific guide by id
GET http://localhost:5000/api/v1/bookings/guide/687cff8d095a1d459861b897

