# ✅ Get 3 random packages (default)
GET http://localhost:5000/api/v1/packages/random
Accept: application/json
# ✅ Get all packages
GET http://localhost:5000/api/v1/packages
Accept: application/json

# ✅ Get single package
GET http://localhost:5000/api/v1/packages/688acd2e0fdea3b0ba6108c7
Accept: application/json

# ✅ Create new package
POST http://localhost:5000/api/v1/packages
Content-Type: application/json

{
    "title": "Cox's Bazar Beach Escape",
    "description": "Enjoy the world’s longest sea beach, local seafood, and calm sunsets at Cox’s Bazar. Ideal for couples, families, or solo travelers.",
    "price": 5500,
    "tripType": "Relaxation",
    "days": 3,
    "location": "Cox's Bazar",
    "gallery": [
      "https://images.deepai.org/art-image/72bca9114b0941e89cdb0ea0a22f5553/cox-s-bazar-sea-beach-during-sunset-with-silhouettes-.jpg",
      "https://api.deepai.org/job-view-file/d46572d0-47a7-41cc-8eae-d7bac1a7e0a6/outputs/output.jpg",
      "https://api.deepai.org/job-view-file/21cbe50a-3fd5-40b2-b412-de7076ace8c9/outputs/output.jpg"
    ],
    "tourPlan": [
      {
        "day": 1,
        "activities": "Departure from Dhaka, check-in at sea view hotel, evening walk by the beach"
      },
      {
        "day": 2,
        "activities": "Visit Himchari, Inani Beach, and enjoy local seafood lunch"
      },
      {
        "day": 3,
        "activities": "Shopping from Burmese market and return journey"
      }
    ]
  }

# ✅ Update package
PATCH http://localhost:5000/api/v1/packages/688acd2e0fdea3b0ba6108c7
Content-Type: application/json
{
    "gallery": [
      "https://images.deepai.org/art-image/723d09e36c894587901e1aa91850b582/migratory-birds-flying-over-wetland-with-reflection-i.jpg",
      "https://images.deepai.org/art-image/91e1d6d4eae747b78e3357790371451f/villagers-fishing-on-small-boats-in-golden-evening-li.jpg",
      "https://images.deepai.org/art-image/e536529a908a4ef6ac8f46c18f0aa279/traditional-wooden-houseboat-floating-on-vast-tanguar.jpg"
    ]

}
# ✅ Delete package
DELETE http://localhost:5000/api/v1/packages/687ce1e14f0f363e8661d183
Accept: application/json

