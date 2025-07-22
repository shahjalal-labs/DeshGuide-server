# ✅ Get 3 random packages (default)
GET http://localhost:5000/api/v1/packages/random
Accept: application/json
# ✅ Get all packages
GET http://localhost:5000/api/v1/packages
Accept: application/json

# ✅ Get single package
GET http://localhost:5000/api/v1/packages/687ce1e14f0f363e8661d183
Accept: application/json

# ✅ Create new package
POST http://localhost:5000/api/v1/packages
Content-Type: application/json

{
  "title": "Sajek Adventure 4",
  "description": "A trip to the scenic Sajek Valley",
  "price": 4500,
  "tripType": "Relaxation",
  "days": 3,
  "location": "Sajek",
  "gallery": ["https://img.url/1.jpg", "https://img.url/2.jpg"],
  "tourPlan": [
    { "day": 1, "activities": "Depart from Dhaka, arrive at Sajek" },
    { "day": 2, "activities": "Explore hill tracks and tribal villages" }
  ]
}

# ✅ Update package
PATCH http://localhost:5000/api/v1/packages/687ce1e14f0f363e8661d183
Content-Type: application/json

{
  "price": 5000
}

# ✅ Delete package
DELETE http://localhost:5000/api/v1/packages/687ce1e14f0f363e8661d183
Accept: application/json

