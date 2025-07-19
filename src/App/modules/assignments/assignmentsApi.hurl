GET  http://localhost:5000/api/v1/assignments?search=css




GET  http://localhost:5000


GET  http://localhost:5000/not-found






GET  http://localhost:5000/api/v1/assignments/684abeaf34e52f875cbfebf4




DELETE http://localhost:5000/api/v1/assignments/delete-assignment/684abeca34e52f875cbfebf8
Content-Type: application/json
Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlYWNoZXJAZWR1dmVyc2UuY29tIiwiaWF0IjoxNzQ5NzA3NTA3LCJleHAiOjE3NDk3OTM5MDd9.N8kxW_5idPgvLB_6nzkemFrcdN-xRkLNiSPIILKJSqs

{
  "email": "banglabd515@gmail.com"
}

Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9




PATCH  http://localhost:5000/api/v1/assignments/update-assignment/684abeaf34e52f875cbfebf4
Content-Type: application/json
Cookie: token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlYWNoZXJAZWR1dmVyc2UuY29tIiwiaWF0IjoxNzQ5NzA3NTA3LCJleHAiOjE3NDk3OTM5MDd9.N8kxW_5idPgvLB_6nzkemFrcdN-xRkLNiSPIILKJSqs

{
    "title": "Assignment title updated"
}


POST http://localhost:5000/api/v1/assignments/create-assignment
Content-Type: application/json
{
    "title": "Build a Blog Platform with Node.js",
    "description": "Create a complete blog application using Node.js, Express, and MongoDB that supports posts, comments, and user authentication.",
    "marks": 100,
    "thumbnailUrl": "https://i.ibb.co.com/PZ3DWGJk/developerpuzzles.png",
    "difficulty": "medium",
    "dueDate": "2025-07-01T00:00:00.000Z",
    "creatorEmail": "teacher@eduverse.com"
}



POST  http://localhost:5000/api/v1/create-schedules

Content-Type: application/json

[
  {
    "title": "Chest Workout",
    "day": "Monday",
    "formattedDate": "2025-05-19",
    "isCompleted": false
  },
  {
    "title": "Back & Biceps",
    "day": "Tuesday",
    "formattedDate": "2025-05-20",
    "isCompleted": false
  },
  {
    "title": "Leg Day",
    "day": "Wednesday",
    "formattedDate": "2025-05-21",
    "isCompleted": false
  },
  {
    "title": "Cardio & Core",
    "day": "Thursday",
    "formattedDate": "2025-05-22",
    "isCompleted": false
  },
  {
    "title": "Shoulders & Triceps",
    "day": "Friday",
    "formattedDate": "2025-05-23",
    "isCompleted": false
  },
  {
    "title": "Full Body Stretch",
    "day": "Saturday",
    "formattedDate": "2025-05-24",
    "isCompleted": false
  },
  {
    "title": "Active Recovery Walk",
    "day": "Sunday",
    "formattedDate": "2025-05-25",
    "isCompleted": false
  },
  {
    "title": "Push Workout",
    "day": "Monday",
    "formattedDate": "2025-05-26",
    "isCompleted": false
  },
  {
    "title": "Pull Workout",
    "day": "Tuesday",
    "formattedDate": "2025-05-27",
    "isCompleted": false
  },
  {
    "title": "HIIT Session",
    "day": "Wednesday",
    "formattedDate": "2025-05-28",
    "isCompleted": false
  }
]



