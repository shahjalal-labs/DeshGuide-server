# Get all users
GET http://localhost:5000/api/v1/users
Accept: application/json


# Get single user by ID
GET http://localhost:5000/api/v1/users/USER_ID_HERE
Accept: application/json


# Update user by ID
PATCH http://localhost:5000/api/v1/users/USER_ID_HERE
Content-Type: application/json

{
  "name": "Updated User",
  "role": "tourist",
  "image": "https://i.ibb.co/sample-image.png"
}


# Delete user by ID
DELETE http://localhost:5000/api/v1/users/USER_ID_HERE
Accept: application/json

