# ✅ Get all bookings
GET http://localhost:5000/api/v1/bookings

# ✅ Get single booking
GET http://localhost:5000/api/v1/bookings/687d8734385d0ad42e797a1d

# ✅ Create new booking
POST http://localhost:5000/api/v1/bookings
Content-Type: application/json

{
  "packageId": "687ce1e14f0f363e8661d183",
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
PATCH http://localhost:5000/api/v1/bookings/687d87c8385d0ad42e797a29
Content-Type: application/json

{
  "status": "accepted",
  "paymentStatus": "paid"
}

# ✅ Delete booking
DELETE http://localhost:5000/api/v1/bookings/BOOKING_ID_HERE
Accept: application/json

# ✅ Get bookings by tourist
GET http://localhost:5000/api/v1/bookings/tourist/USER_ID_HERE
Accept: application/json

# ✅ Get bookings by guide
GET http://localhost:5000/api/v1/bookings/guide/GUIDE_ID_HERE
Accept: application/json

