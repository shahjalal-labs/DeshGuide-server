# ✅ Get all bookings
GET http://localhost:5000/api/v1/bookings
Accept: application/json

# ✅ Get single booking
GET http://localhost:5000/api/v1/bookings/BOOKING_ID_HERE
Accept: application/json

# ✅ Create new booking
POST http://localhost:5000/api/v1/bookings
Content-Type: application/json

{
  "packageId": "PACKAGE_ID_HERE",
  "packageName": "Sajek Adventure",
  "touristId": "USER_ID_HERE",
  "touristName": "Shahjalal",
  "touristEmail": "shahjalal@example.com",
  "touristPhoto": "https://image.url/photo.jpg",
  "guideId": "GUIDE_ID_HERE",
  "guideName": "Abir Bhai",
  "price": 4500,
  "tourDate": "2025-08-01T00:00:00.000Z",
  "status": "pending",
  "paymentStatus": "unpaid",
  "transactionId": ""
}

# ✅ Update booking (e.g., mark as accepted or paid)
PATCH http://localhost:5000/api/v1/bookings/BOOKING_ID_HERE
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

