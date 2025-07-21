# ✅ Get all payments
GET http://localhost:5000/api/v1/payments
Accept: application/json

###

# ✅ Get single payment by ID
GET http://localhost:5000/api/v1/payments/PASTE_PAYMENT_ID_HERE
Accept: application/json

###

# ✅ Create new payment
POST http://localhost:5000/api/v1/payments
Content-Type: application/json

{
  "bookingId": "PASTE_BOOKING_ID_HERE",
  "amount": 5000,
  "email": "john@example.com",
  "transactionId": "txn_123456789"
}

###

# ✅ Delete payment
DELETE http://localhost:5000/api/v1/payments/PASTE_PAYMENT_ID_HERE
Accept: application/json

