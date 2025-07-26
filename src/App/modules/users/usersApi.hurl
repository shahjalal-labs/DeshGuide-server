# Get all users (no filter)
GET http://localhost:5000/api/v1/users

# Search users by name or email
GET http://localhost:5000/api/v1/users?search=tour

# Filter users by role
GET http://localhost:5000/api/v1/users?role=tour-guide

# Combine both
GET http://localhost:5000/api/v1/users?search=tour&role=tour-guide


# load tour guides from users 
GET http://localhost:5000/api/v1/users/tour-guides

# ✅ Get single user by ID
GET http://localhost:5000/api/v1/users/687e37ea0d85a52d76c2eb6c
Accept: application/json

# ✅ Get single user by email
GET http://localhost:5000/api/v1/users/email/tourist4@example.com

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




