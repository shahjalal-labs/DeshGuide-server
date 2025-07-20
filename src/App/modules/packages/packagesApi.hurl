# ✅ Get all packages
GET http://localhost:5000/api/v1/packages
Accept: application/json

# ✅ Get single package
GET http://localhost:5000/api/v1/packages/ID_HERE
Accept: application/json

# ✅ Create new package
POST http://localhost:5000/api/v1/packages
Content-Type: application/json

{
  "title": "Sajek Adventure",
  "description": "A trip to the scenic Sajek Valley",
  "price": 4500,
  "tripType": "Adventure",
  "days": 3,
  "location": "Sajek",
  "gallery": ["https://img.url/1.jpg", "https://img.url/2.jpg"],
  "tourPlan": [
    { "day": 1, "activities": "Depart from Dhaka, arrive at Sajek" },
    { "day": 2, "activities": "Explore hill tracks and tribal villages" }
  ]
}

# ✅ Update package
PATCH http://localhost:5000/api/v1/packages/ID_HERE
Content-Type: application/json

{
  "price": 5000,
  "days": 4
}

# ✅ Delete package
DELETE http://localhost:5000/api/v1/packages/ID_HERE
Accept: application/json

