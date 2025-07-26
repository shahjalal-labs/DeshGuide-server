You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules/stories
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `stories_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved stories version`

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

18 directories, 76 files
```

## 📁 Target Module Tree (stories)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules/stories
├── storiesApi.hurl
├── stories.controller.js
├── stories.model.js
├── stories.route.js
└── stories.service.js

1 directory, 5 files
```

## 📄 Module Files & Contents

### `stories.controller.js`
```javascript
import sendResponse from "../../utils/sendResponse.js";
import { StoryService } from "./stories.service.js";

const createStory = async (req, res, next) => {
  try {
    const result = await StoryService.createStory(req.body);
    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Story created successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllStories = async (req, res, next) => {
  try {
    const result = await StoryService.getAllStories();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "All stories retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getStoriesByUserId = async (req, res, next) => {
  try {
    const result = await StoryService.getStoriesByUserId(req.params.userId);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Stories by user retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleStory = async (req, res, next) => {
  try {
    const result = await StoryService.getStoryById(req.params.id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Story retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteStory = async (req, res, next) => {
  try {
    const result = await StoryService.deleteStory(req.params.id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Story deleted successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const updateStoryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updated = await StoryService.updateStoryByIdService(id, req.body);

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Story not found" });
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Story updated successfully",
      data: updated,
    });
  } catch (error) {
    next(error);
  }
};
export const StoryController = {
  createStory,
  getAllStories,
  getSingleStory,
  deleteStory,
  getStoriesByUserId,
  updateStoryById,
};
```

### `stories.model.js`
```javascript
import { Schema, model } from "mongoose";

const storySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userPhoto: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Story = model("Story", storySchema);
```

### `stories.route.js`
```javascript
import express from "express";
import { StoryController } from "./stories.controller.js";

const router = express.Router();

router.post("/", StoryController.createStory);
router.get("/", StoryController.getAllStories);
router.get("/user/:userId", StoryController.getStoriesByUserId);
router.patch("/:id", StoryController.updateStoryById);

router.get("/:id", StoryController.getSingleStory);
router.delete("/:id", StoryController.deleteStory);

export const StoryRoutes = router;
```

### `stories.service.js`
```javascript
import { Story } from "./stories.model.js";
import { User } from "../users/users.model.js"; // ✅ Import user model

const createStory = async (data) => {
  const { userId } = data;

  // ✅ Validate if userId exists
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("Invalid userId: No user found with this ID.");
  }

  return await Story.create(data);
};

const getAllStories = async () => {
  return await Story.find().sort({ createdAt: -1 });
};

const getStoriesByUserId = async (userId) => {
  return await Story.find({ userId }).sort({ createdAt: -1 });
};

const getStoryById = async (id) => {
  const story = await Story.findById(id);
  if (!story) {
    throw new Error("Story not found");
  }
  return story;
};

const deleteStory = async (id) => {
  const story = await Story.findById(id);
  if (!story) {
    throw new Error("Story not found or already deleted");
  }

  const deleted = await Story.findByIdAndDelete(id);
  if (!deleted) {
    throw new Error("Failed to delete story");
  }

  return deleted;
};

const updateStoryByIdService = async (id, payload) => {
  //  Prevent these fields from being updated
  delete payload.userId;
  delete payload.userName;
  delete payload.userPhoto;

  const updated = await Story.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return updated;
};
export const StoryService = {
  createStory,
  getAllStories,
  getStoryById,
  deleteStory,
  getStoriesByUserId,
  updateStoryByIdService,
};
```

### `storiesApi.hurl`
```hurl
# storiesApi.hurl
# ✅ Get all stories
GET http://localhost:5000/api/v1/stories
Accept: application/json


# ✅ Get all stories by userId
GET http://localhost:5000/api/v1/stories/user/688036d54582db5aafd12e4f
Accept: application/json


# ✅ Get a single story by ID
GET http://localhost:5000/api/v1/stories/687e509abf17c8a9265b66dd
Accept: application/json


#------UPDATE STORY BY _ID---------------
PATCH http://localhost:5000/api/v1/stories/687e509abf17c8a9265b66dd
Content-Type: application/json

{
  "title": "Updated Sunset Title updated",
  "userName": "Hacker",
  "description": "New description for this beautiful sunset",
  "images": [
    "https://img.url/sunset3.jpg"
  ]
}
#------UPDATE STORY BY _ID --------


POST http://localhost:5000/api/v1/stories
Content-Type: application/json

{
  "title": "Bird Watching at Tanguar Haor ",
  "description": "The wetlands came alive with hundreds of migratory birds flying in sync. I spent hours watching them dive and glide across the water. The sound of flapping wings and nature’s stillness was unforgettable.",
  "images": [
    "https://img.url/tanguar1.jpg",
    "https://img.url/tanguar2.jpg"
  ],
  "userId": "688036d54582db5aafd12e4f",
  "userName": "Jalal Uddin",
  "userPhoto": "https://img.url/profile.jpg"
}




# ✅ Delete a story
DELETE http://localhost:5000/api/v1/stories/687e5087bf17c8a9265b66d4
Accept: application/json

```
