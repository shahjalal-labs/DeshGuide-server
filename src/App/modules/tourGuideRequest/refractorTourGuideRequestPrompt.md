You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules/tourGuideRequest
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `tourGuideRequest_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved tourGuideRequest version`

---

## 🌲 Full Project Structure (cwd)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server
├── bars.env.example
├── bun.lock
├── chat.md
├── docs
│   ├── DATA_MODEL.md
│   ├── deployment.md
│   ├── refractorDocsPrompt.md
│   └── Requirement.md
├── hurlNvimShowcase.mp4
├── package.json
├── README.md
├── src
│   ├── App
│   │   ├── config
│   │   │   ├── corsOptions.js
│   │   │   ├── db.js
│   │   │   └── stripe.js
│   │   ├── middlewires
│   │   │   ├── globalError.js
│   │   │   ├── notFound.js
│   │   │   └── validateRequest.js
│   │   ├── modules
│   │   │   ├── assignments
│   │   │   │   ├── assignmentData.json
│   │   │   │   ├── assignmentsApi.hur
│   │   │   │   ├── assignmentsApi.hurl
│   │   │   │   ├── assignments.controllers.js
│   │   │   │   ├── assignments.model.js
│   │   │   │   ├── assignments.route.js
│   │   │   │   ├── assignments.service.js
│   │   │   │   └── assignments.validation.js
│   │   │   ├── auth
│   │   │   │   ├── authApi.hurl
│   │   │   │   ├── auth.middleware.js
│   │   │   │   ├── auth.routes.js
│   │   │   │   ├── issueJwt.js
│   │   │   │   └── jwt.js
│   │   │   ├── bookings
│   │   │   │   ├── bookingsApi.hurl
│   │   │   │   ├── bookings.controller.js
│   │   │   │   ├── bookings.model.js
│   │   │   │   ├── bookings.route.js
│   │   │   │   └── bookings.service.js
│   │   │   ├── packages
│   │   │   │   ├── packageData.json
│   │   │   │   ├── package.model.js
│   │   │   │   ├── packagesApi.hurl
│   │   │   │   ├── packages.controller.js
│   │   │   │   ├── packages.route.js
│   │   │   │   ├── packages.service.js
│   │   │   │   └── refractorPackagesPrompt.md
│   │   │   ├── payments
│   │   │   │   ├── paymentsApi.hurl
│   │   │   │   ├── payments.controller.js
│   │   │   │   ├── payments.model.js
│   │   │   │   ├── payments.route.js
│   │   │   │   ├── payments.service.js
│   │   │   │   └── refractorPaymentsPrompt.md
│   │   │   ├── stories
│   │   │   │   ├── refractorStoriesPrompt.md
│   │   │   │   ├── storiesApi.hurl
│   │   │   │   ├── stories.controller.js
│   │   │   │   ├── stories.model.js
│   │   │   │   ├── stories.route.js
│   │   │   │   └── stories.service.js
│   │   │   ├── submission
│   │   │   │   ├── submissionApi.hur
│   │   │   │   ├── submissionApi.hurl
│   │   │   │   ├── submission.controller.js
│   │   │   │   ├── submission.model.js
│   │   │   │   ├── submission.route.js
│   │   │   │   ├── submission.service.js
│   │   │   │   └── submission.validation.js
│   │   │   ├── tourGuideRequest
│   │   │   │   ├── tourGuideRequestApi.hurl
│   │   │   │   ├── tourGuideRequest.controller.js
│   │   │   │   ├── tourGuideRequest.model.js
│   │   │   │   ├── tourGuideRequest.route.js
│   │   │   │   └── tourGuideRequest.service.js
│   │   │   └── users
│   │   │       ├── refractorUsersPrompt.md
│   │   │       ├── usersApi.hurl
│   │   │       ├── users.controller.js
│   │   │       ├── users.model.js
│   │   │       ├── users.route.js
│   │   │       └── users.service.js
│   │   ├── routes
│   │   │   └── routes.js
│   │   └── utils
│   │       ├── sendResponse.js
│   │       └── validateRequest.js
│   ├── app.js
│   └── server.js
├── structure.md
└── vercel.json

18 directories, 78 files
```

## 📁 Target Module Tree (tourGuideRequest)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules/tourGuideRequest
├── tourGuideRequestApi.hurl
├── tourGuideRequest.controller.js
├── tourGuideRequest.model.js
├── tourGuideRequest.route.js
└── tourGuideRequest.service.js

1 directory, 5 files
```

## 📄 Module Files & Contents

### `tourGuideRequest.controller.js`
```javascript
// src/App/modules/tourGuideRequest/tourGuideRequest.controller.js

import sendResponse from "../../utils/sendResponse.js";
import { TourGuideRequestServices } from "./tourGuideRequest.service.js";

const createRequest = async (req, res, next) => {
  try {
    const result = await TourGuideRequestServices.createTourGuideRequest(
      req.body,
    );
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Tour guide created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllRequests = async (req, res, next) => {
  try {
    const result = await TourGuideRequestServices.getAllTourGuideRequests();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "All guides fetched",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getRequestById = async (req, res, next) => {
  try {
    const result = await TourGuideRequestServices.getTourGuideRequestById(
      req.params.id,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tour guide fetched",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getRandomAcceptedTourGuides = async (req, res, next) => {
  try {
    const { limit } = req.query; // get from URL like ?limit=3 or ?limit=all

    const guides = await TourGuideRequestServices.getRandomAcceptedTourGuides(
      limit === "all" ? "all" : Number(limit) || 6, // default to 6 if invalid
    );

    res.status(200).json({
      success: true,
      message: `${limit || 6} accepted tour guides`,
      data: guides,
    });
  } catch (error) {
    next(error);
  }
};

const updateStatus = async (req, res, next) => {
  try {
    const result = await TourGuideRequestServices.updateTourGuideRequestStatus(
      req.params.id,
      req.body.status,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Status updated",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteRequest = async (req, res, next) => {
  try {
    const result = await TourGuideRequestServices.deleteTourGuideRequest(
      req.params.id,
    );
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tour guide deleted",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const TourGuideRequestControllers = {
  createRequest,
  getAllRequests,
  getRequestById,
  updateStatus,
  deleteRequest,
  getRandomAcceptedTourGuides,
};
```

### `tourGuideRequest.model.js`
```javascript
import mongoose from "mongoose";

const tourGuideRequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    cvLink: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  },
);

export const TourGuideRequest = mongoose.model(
  "TourGuideRequest",
  tourGuideRequestSchema,
);
```

### `tourGuideRequest.route.js`
```javascript
import express from "express";
import { TourGuideRequestControllers } from "./tourGuideRequest.controller.js";

const router = express.Router();

router.post("/", TourGuideRequestControllers.createRequest);
router.get("/", TourGuideRequestControllers.getAllRequests);
router.get(
  "/random-accepted",
  TourGuideRequestControllers.getRandomAcceptedTourGuides,
);
router.get("/:id", TourGuideRequestControllers.getRequestById);
router.patch("/:id", TourGuideRequestControllers.updateStatus);
router.delete("/:id", TourGuideRequestControllers.deleteRequest);

export const TourGuideRequestRoutes = router;
```

### `tourGuideRequest.service.js`
```javascript
import { User } from "../users/users.model.js";
import { TourGuideRequest } from "./tourGuideRequest.model.js";

const createTourGuideRequest = async (data) => {
  const existUser = await User.findById({ _id: data.userId });
  if (!existUser) throw new Error("User not found");

  const existingGuide = await TourGuideRequest.findOne({ userId: data.userId });
  if (existingGuide)
    throw new Error("You already Applied or you already a tour guide ");

  return await TourGuideRequest.create(data);
};

const getAllTourGuideRequests = async () => {
  return await TourGuideRequest.find().populate(
    "userId",
    "name email photo role",
  );
};

const getTourGuideRequestById = async (id) => {
  return await TourGuideRequest.findById(id).populate("userId");
};

/* const updateTourGuideRequestStatus = async (id, status) => {
  const res = await TourGuideRequest.findByIdAndUpdate(
    id,
    { status },
    { new: true },
  );

  console.log(res, "tourGuideRequest.service.js", 27);
  if (res?.status === "accepted") {
    const userRoleChanged = await User.updateOne(
      { _id: res.userId },
      { role: "tour-guide" },
      { new: true },
    );
    console.log(
      userRoleChanged,
      "user role changed tourGuideRequest.service.js",
      35,
    );
  }

  return res;
}; */

const updateTourGuideRequestStatus = async (id, status) => {
  console.log(id, status, " id status tourGuideRequest.service.js", 51);
  const res = await TourGuideRequest.findByIdAndUpdate(
    id,
    { status: status },
    { new: true },
  );

  console.log(res, "tourGuideRequest.service.js", 27);

  if (res?.status === "accepted") {
    const userRoleChanged = await User.findByIdAndUpdate(
      res.userId,
      { role: "tour-guide" },
      { new: true },
    );

    console.log(
      userRoleChanged,
      "user role changed tourGuideRequest.service.js",
      35,
    );
  }

  return res;
};

const deleteTourGuideRequest = async (id) => {
  const res = await TourGuideRequest.findByIdAndDelete(id);
  if (!res) throw new Error("Guide not found");
  return res;
};

//  NEW: Get 3 random accepted tour guides and all accepted tour guides
const getRandomAcceptedTourGuides = async (limit = 6) => {
  const pipeline = [{ $match: { status: "accepted" } }];

  if (limit !== "all") {
    pipeline.push({ $sample: { size: Number(limit) } });
  }

  pipeline.push(
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
      },
    },
    { $unwind: "$user" },
    {
      $project: {
        _id: 1,
        bio: 1,
        languages: 1,
        expertise: 1,
        status: 1,
        createdAt: 1,
        "user.name": 1,
        "user.email": 1,
        "user.photo": 1,
      },
    },
  );

  return await TourGuideRequest.aggregate(pipeline);
};
export const TourGuideRequestServices = {
  createTourGuideRequest,
  getAllTourGuideRequests,
  getTourGuideRequestById,
  updateTourGuideRequestStatus,
  deleteTourGuideRequest,
  getRandomAcceptedTourGuides,
};
```

### `tourGuideRequestApi.hurl`
```hurl
# ✅ Get all tour guide requests
GET http://localhost:5000/api/v1/tour-guide-requests


# ✅ Get single tour guide request
688036d54582db5aafd12e4f
GET http://localhost:5000/api/v1/tour-guide-requests/68851af3606080f1804fcc36
Accept: application/json


GET http://localhost:5000/api/v1/tour-guide-requests/random-accepted
## get all accepted tour guides
GET http://localhost:5000/api/v1/tour-guide-requests/random-accepted?limit=all



# ✅ Create new tour guide request
POST http://localhost:5000/api/v1/tour-guide-requests
Content-Type: application/json

{
  "userId": "6884fdd0e64086d005edf156",
  "title": "Experienced Mountain Guide",
  "reason": "I love guiding tourists and know every trail in the hills",
  "cvLink": "https://example.com/cv/john_doe.pdf",
  "status": "pending"
}


# ✅ Update request status (e.g., accept or reject)
PATCH http://localhost:5000/api/v1/tour-guide-requests/68850d7701426d0f5ab34d34
Content-Type: application/json

{
  "status": "accepted"
}


# ✅ Delete tour guide request
DELETE http://localhost:5000/api/v1/tour-guide-requests/68850d7701426d0f5ab34d34
Accept: application/json

```
