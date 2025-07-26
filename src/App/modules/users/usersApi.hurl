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
GET http://localhost:5000/api/v1/users/68850d7701426d0f5ab34d34
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
PATCH http://localhost:5000/api/v1/users/6884fdd0e64086d005edf156
Content-Type: application/json

{
  "role": "tourist",
  "photoURL": "https://xsgames.co/randomusers/assets/avatars/male/39.jpg"
}

# ✅ Delete user by ID
DELETE http://localhost:5000/api/v1/users/688036b54582db5aafd12e46




