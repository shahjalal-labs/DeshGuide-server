# ✅ Get all payments
GET http://localhost:5000/api/v1/payments
Accept: application/json

###

# ✅ Get single payment by ID
GET http://localhost:5000/api/v1/payments/687e2cf7cbfa711f312c2f03
Accept: application/json

###
# ✅ Create Stripe Payment Intent
POST http://localhost:5000/api/v1/payments/create-payment-intent
Content-Type: application/json

{
  "amountInCents": 5000
}

# ✅ Create new payment
POST http://localhost:5000/api/v1/payments
Content-Type: application/json

{
  "bookingId": "687d9855289cd4c61c2b0c9a",
  "amount": 5000,
  "email": "john@example.com",
  "transactionId": "txn_123456789"
}

###

# ✅ Delete payment
DELETE http://localhost:5000/api/v1/payments/687e2cf7cbfa711f312c2f03
Accept: application/json

