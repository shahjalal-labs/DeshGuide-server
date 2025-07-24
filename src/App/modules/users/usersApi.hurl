687cc5b9feaf9ecda8ac1848
# ✅ Get all users
GET https://deshguide-server.vercel.app/api/v1/users


# ✅ Get single user by ID
GET http://localhost:5000/api/v1/users/687e37ea0d85a52d76c2eb6c
Accept: application/json

# ✅ Get single user by email
GET http://localhost:5000/api/v1/users/email/tourist5@example.com

# ✅ Create new user
POST http://localhost:5000/api/v1/users
Content-Type: application/json

{
  "name": "Tourist 5",
  "email": "tourist5@example.com",
  "photoURL": "https://i.ibb.co/sample-image.png",
  "role": "tourist"  
}


# ✅ Update user by ID
PATCH http://localhost:5000/api/v1/users/687e37ea0d85a52d76c2eb6c
Content-Type: application/json

{
  "name": "Updated User 2",
  "role": "tour-guide",
  "photoURL": "https://i.ibb.co/sample-image.png"
}


# ✅ Delete user by ID
DELETE http://localhost:5000/api/v1/users/687cc5b9feaf9ecda8ac184a


