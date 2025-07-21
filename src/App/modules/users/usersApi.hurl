687cc5b9feaf9ecda8ac1848
# ✅ Get all users
GET https://deshguide-server.vercel.app/api/v1/users


# ✅ Get single user by ID
GET http://localhost:5000/api/v1/users/687ccd783d8c8c7d294a0fc9
Accept: application/json


# ✅ Create new user
POST http://localhost:5000/api/v1/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "admin@example.com",
  "photoURL": "https://i.ibb.co/sample-image.png",
  "role": "admin"  
}


# ✅ Update user by ID
PATCH http://localhost:5000/api/v1/users/687cc5b9feaf9ecda8ac1838
Content-Type: application/json

{
  "name": "Updated User",
  "role": "tour-guide",
  "photoURL": "https://i.ibb.co/sample-image.png"
}


# ✅ Delete user by ID
DELETE http://localhost:5000/api/v1/users/687cc5b9feaf9ecda8ac1848

