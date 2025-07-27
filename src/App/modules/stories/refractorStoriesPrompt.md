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
│   │   │   │   ├── storiesApi.hurl
│   │   │   │   ├── stories.controller.js
│   │   │   │   ├── storiesData2.json
│   │   │   │   ├── storiesData.json
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
│   │   │   │   ├── refractorTourGuideRequestPrompt.md
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

18 directories, 80 files
```

## 📁 Target Module Tree (stories)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules/stories
├── storiesApi.hurl
├── stories.controller.js
├── storiesData2.json
├── storiesData.json
├── stories.model.js
├── stories.route.js
└── stories.service.js

1 directory, 7 files
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

/* const getAllStories = async (req, res, next) => {
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
}; */

const getAllStories = async (req, res, next) => {
  try {
    const { limit = 6, skip = 0 } = req.query;

    const result = await StoryService.getAllStories(limit, skip);
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
    console.log(`userId`, req.params.userId);
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

/* const getAllStories = async () => {
  return await Story.find().sort({ createdAt: -1 });
};
 */

const getAllStories = async (limit = 6, skip = 0) => {
  return await Story.find()
    .sort({ createdAt: -1 })
    .skip(Number(skip))
    .limit(Number(limit));
};

const getStoriesByUserId = async (userId) => {
  console.log(userId, "stories.service.js", 29);
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
GET http://localhost:5000/api/v1/stories/user/68852ad7c78ef640a3f9391d
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

### `storiesData.json`
```javascripton
[
  {
    "title": "Whispers of History in Mahasthangarh",
    "description": "Walking through Mahasthangarh was like turning the pages of a forgotten chapter in Bengal’s history. The ruins spoke of empires, kings, and time. It made us wonder about the stories left behind in these stone walls.",
    "images": [
      "https://images.deepai.org/art-image/18013ccde158403e97b2804d68101e57/traditional-launch-boat-in-sundarbans-mangrove-river-.jpg",
      "https://images.deepai.org/art-image/0271952765ce412b878981dbdb957347/royal-bengal-tiger-mid-step-among-trees-in-sundarbans.jpg",
      "https://images.deepai.org/art-image/edb1fdbc627d46b692194673642c8cd8/fishing-village-huts-on-stilts-beside-muddy-river-in-.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocIHcFxiMKjbiLLw0cXzz3YwmzykgLMPQg3D1-1rU3to=s96-c"
  },
  {
    "title": "Tea Gardens and Tranquility in Srimangal",
    "description": "We explored rolling hills of green in Srimangal, sipping 7-layer tea and riding bicycles through tea trails. The air smelled of leaves and rain. It was the kind of calm that recharges your soul quietly.",
    "images": [
      "https://images.deepai.org/art-image/3be7075b97b143d19ca910a9c7621cac/aerial-view-of-saint-martins-turquoise-coast-with-cor.jpg",
      "https://images.deepai.org/art-image/063b33d8fb6f429191d93a7ec99546da/snorkeling-person-near-chera-dwip-with-coral-and-fish.jpg",
      "https://images.deepai.org/art-image/f9d5f96b6548451bbb1721d48464d2f3/bangladeshi-male-night-beach-bonfire-with-tourists-si.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocIHcFxiMKjbiLLw0cXzz3YwmzykgLMPQg3D1-1rU3to=s96-c"
  },
  {
    "title": "Echoes of Royalty: Ahsan Manzil",
    "description": "As a history enthusiast, visiting Ahsan Manzil was a dream come true. Every chandelier, hallway, and stairwell told tales of grandeur. The Pink Palace stands as a reminder of Dhaka’s regal past.",
    "images": [
      "https://images.deepai.org/art-image/83ea73b1eb8f4247bf48c7705aeb4887/hilltop-view-from-nilgiri-in-early-morning-fog-with-g.jpg",
      "https://images.deepai.org/art-image/0a059bc079e049899859428e7be0688a/tourists-hiking-to-nafakhum-waterfall-through-forest-.jpg",
      "https://images.deepai.org/art-image/d8364193a6364316965549baada5b85e/tribal-woman-selling-fruits-in-bandarban-street-marke.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocIHcFxiMKjbiLLw0cXzz3YwmzykgLMPQg3D1-1rU3to=s96-c"
  },
  {
    "title": "A Spiritual Pause at Lalbagh Fort",
    "description": "We wandered through the courtyards of Lalbagh Fort during golden hour. The ancient walls and gardens offer a space for reflection amidst a chaotic city. Peaceful yet powerful.",
    "images": [
      "https://images.deepai.org/art-image/1ff26b4cc5a44188b52df8d4fd35ee24/old-man-picking-tea-leaves-in-sylhet-tea-garden-with-.jpg",
      "https://images.deepai.org/art-image/1d9c99fa1f3c43458eb037c1c62491f4/wooden-boat-floating-through-ratargul-swamp-forest-wi.jpg",
      "https://images.deepai.org/art-image/3f544dbb109e4e438d200e4a03246c3b/madhabkunda-waterfall-falling-over-red-rocks-tourists.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocIHcFxiMKjbiLLw0cXzz3YwmzykgLMPQg3D1-1rU3to=s96-c"
  }
]
```

### `storiesData2.json`
```javascripton
[
  {
    "title": "Adventure in Sajek Valley",
    "description": "The misty mountain views in Sajek were otherworldly. We rode on open jeeps, watched the clouds float beneath us, and stayed in wooden cottages lit with lanterns.",
    "images": [
      "https://i.ibb.co/CMbnwTk/1696577332901.jpg",
      "https://i.ibb.co/KGVWzST/1696577332927.jpg",
      "https://i.ibb.co/ydJYRpG/1696577332948.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocLZxjvUjpGHX3vGztN8kq1V0q2R-6DJl4F3UObNwJQ=s96-c"
  },
  {
    "title": "Boat Safari in Sundarbans",
    "description": "We explored the mangroves on a wooden boat. The silence, broken only by bird calls and occasional splashes, was serene. Spotted a deer and a monkey — unforgettable.",
    "images": [
      "https://i.ibb.co/z6Hp1Hq/1696577455985.jpg",
      "https://i.ibb.co/ggCKPkr/1696577456004.jpg",
      "https://i.ibb.co/XFQGFrk/1696577456035.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocLZxjvUjpGHX3vGztN8kq1V0q2R-6DJl4F3UObNwJQ=s96-c"
  },
  {
    "title": "Mystical Morning in Srimangal",
    "description": "Woke up to endless tea gardens covered in light fog. We visited tribal villages and tasted 7-layer tea at Nilkantha. It was calming and picturesque.",
    "images": [
      "https://i.ibb.co/8dcj6gd/1696577332966.jpg",
      "https://i.ibb.co/VBsW42T/1696577332988.jpg",
      "https://i.ibb.co/QPjD0MV/1696577333012.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocLZxjvUjpGHX3vGztN8kq1V0q2R-6DJl4F3UObNwJQ=s96-c"
  },
  {
    "title": "Lalbagh Fort Lights",
    "description": "Explored the history of Dhaka at Lalbagh Fort. In the evening, the lights made the ancient structure glow. It felt like time travel into Mughal Bengal.",
    "images": [
      "https://i.ibb.co/8mqG4pr/1696577333031.jpg",
      "https://i.ibb.co/VJYgShs/1696577333052.jpg",
      "https://i.ibb.co/kMdwRxX/1696577333073.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocLZxjvUjpGHX3vGztN8kq1V0q2R-6DJl4F3UObNwJQ=s96-c"
  },
  {
    "title": "Eco Living in Ratargul Swamp Forest",
    "description": "Paddling silently through Ratargul's submerged forest was magical. Sunlight filtering through the canopy created a dreamlike atmosphere. Pure, raw nature.",
    "images": [
      "https://i.ibb.co/y06X8Jv/1696577333093.jpg",
      "https://i.ibb.co/fp3Y4P6/1696577333115.jpg",
      "https://i.ibb.co/vjGBzm0/1696577333137.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocLZxjvUjpGHX3vGztN8kq1V0q2R-6DJl4F3UObNwJQ=s96-c"
  },
  {
    "title": "Tribal Culture in Bandarban",
    "description": "We visited Marma and Chakma villages and learned about their rich culture and crafts. Shared meals, dances, and stories under the stars. Pure hospitality.",
    "images": [
      "https://i.ibb.co/zVjS6gJ/1696577333161.jpg",
      "https://i.ibb.co/8dS3Hbk/1696577333186.jpg",
      "https://i.ibb.co/2jD49b9/1696577333210.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocLZxjvUjpGHX3vGztN8kq1V0q2R-6DJl4F3UObNwJQ=s96-c"
  },
  {
    "title": "A Starry Night in Sajek",
    "description": "The sky in Sajek after sunset was unreal. No light pollution — just a blanket of stars and distant hills. We sat by a campfire till midnight.",
    "images": [
      "https://i.ibb.co/LJjYZhn/1696577333234.jpg",
      "https://i.ibb.co/jvWm1Vx/1696577333258.jpg",
      "https://i.ibb.co/Ch1f9FF/1696577333282.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocLZxjvUjpGHX3vGztN8kq1V0q2R-6DJl4F3UObNwJQ=s96-c"
  },
  {
    "title": "Tea Tasting in Srimangal",
    "description": "At Nilkantha Tea Cabin, we tried the legendary 7-layer tea. Each sip was a different flavor. The surrounding gardens made the experience even richer.",
    "images": [
      "https://i.ibb.co/Tr7vhmW/1696577333306.jpg",
      "https://i.ibb.co/cg1mBLx/1696577333328.jpg",
      "https://i.ibb.co/wNfXnZC/1696577333350.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocLZxjvUjpGHX3vGztN8kq1V0q2R-6DJl4F3UObNwJQ=s96-c"
  },
  {
    "title": "River Cruise in Barisal",
    "description": "Barisal’s backwaters were calm and enchanting. We cruised past floating guava markets and children waving from riverside villages. Pure countryside bliss.",
    "images": [
      "https://i.ibb.co/WvChstZ/1696577333372.jpg",
      "https://i.ibb.co/DQK2S1B/1696577333396.jpg",
      "https://i.ibb.co/fk2vpJr/1696577333419.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocLZxjvUjpGHX3vGztN8kq1V0q2R-6DJl4F3UObNwJQ=s96-c"
  },
  {
    "title": "Jaflong's Hidden Waterfalls",
    "description": "Jaflong surprised us with its mix of tribal life and nature. We hiked to hidden waterfalls and swam in clear pools. It was our most spontaneous day.",
    "images": [
      "https://i.ibb.co/rG0yKhP/1696577333443.jpg",
      "https://i.ibb.co/ZShbXgz/1696577333467.jpg",
      "https://i.ibb.co/gwMkLR4/1696577333491.jpg"
    ],
    "userId": "68852ad7c78ef640a3f9391d",
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocLZxjvUjpGHX3vGztN8kq1V0q2R-6DJl4F3UObNwJQ=s96-c"
  }
]
```
