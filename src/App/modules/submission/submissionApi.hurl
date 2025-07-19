
# Get submission by id
GET {{url}}submission/signle/684c72dee4a02464616b4caa
Cookie: token={{your_jwt_token}}




# Get my submissions (My assignments)
GET {{url}}submission/my-submissions?email=nidaa.al.imaan.official@gmail.com
Cookie: token={{your_jwt_token}}





# Create a submission (Take assignment)
POST {{url}}submission/submit-assignment
Content-Type: application/json
Cookie: token={{your_jwt_token}}

{
  "assignmentId": "684abeaf34e52f875cbfebf4",
  "studentEmail": "student1@example.com",
  "googleDocLink": "https://docs.google.com/document/d/1234567890",
  "notes": "Completed the assignment. Please review.",
  "studentEmail":"banglabd5155@gmail.com"
}









# Get all pending submissions (excluding my own)
GET http://localhost:5000/api/v1/submission/pending-submissions
Cookie: token={{your_jwt_token}}




# Evaluate a submission (give marks & feedback)
http://localhost:5000/api/v1/submission/evaluate/684c6100e4a02464616b4c8a

PATCH {{url}}submission/evaluate/684c72dee4a02464616b4caa
Content-Type: application/json
Cookie: token={{your_jwt_token}}

{
  "obtainedMarks":90,
  "feedback":"Well done! Great work.",
  "evaluatedBy":"nidaa.al.imaan.official@gmail.com"
}

