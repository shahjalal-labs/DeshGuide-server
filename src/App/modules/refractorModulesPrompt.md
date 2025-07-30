You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `modules_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved modules version`

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
├── fixUserIds.js
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
│   │   │   │   └── packages.service.js
│   │   │   ├── payments
│   │   │   │   ├── paymentsApi.hurl
│   │   │   │   ├── payments.controller.js
│   │   │   │   ├── payments.model.js
│   │   │   │   ├── payments.route.js
│   │   │   │   └── payments.service.js
│   │   │   ├── stories
│   │   │   │   ├── storiesApi.hurl
│   │   │   │   ├── stories.controller.js
│   │   │   │   ├── storiesData2.json
│   │   │   │   ├── storiesData.json
│   │   │   │   ├── stories.model.js
│   │   │   │   ├── stories.route.js
│   │   │   │   └── stories.service.js
│   │   │   ├── tourGuideRequest
│   │   │   │   ├── tourGuideRequestApi.hurl
│   │   │   │   ├── tourGuideRequest.controller.js
│   │   │   │   ├── tourGuideRequest.model.js
│   │   │   │   ├── tourGuideRequest.route.js
│   │   │   │   └── tourGuideRequest.service.js
│   │   │   └── users
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

16 directories, 62 files
```

## 📁 Target Module Tree (modules)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules
├── auth
│   ├── authApi.hurl
│   ├── auth.middleware.js
│   ├── auth.routes.js
│   ├── issueJwt.js
│   └── jwt.js
├── bookings
│   ├── bookingsApi.hurl
│   ├── bookings.controller.js
│   ├── bookings.model.js
│   ├── bookings.route.js
│   └── bookings.service.js
├── packages
│   ├── packageData.json
│   ├── package.model.js
│   ├── packagesApi.hurl
│   ├── packages.controller.js
│   ├── packages.route.js
│   └── packages.service.js
├── payments
│   ├── paymentsApi.hurl
│   ├── payments.controller.js
│   ├── payments.model.js
│   ├── payments.route.js
│   └── payments.service.js
├── stories
│   ├── storiesApi.hurl
│   ├── stories.controller.js
│   ├── storiesData2.json
│   ├── storiesData.json
│   ├── stories.model.js
│   ├── stories.route.js
│   └── stories.service.js
├── tourGuideRequest
│   ├── tourGuideRequestApi.hurl
│   ├── tourGuideRequest.controller.js
│   ├── tourGuideRequest.model.js
│   ├── tourGuideRequest.route.js
│   └── tourGuideRequest.service.js
└── users
    ├── usersApi.hurl
    ├── users.controller.js
    ├── users.model.js
    ├── users.route.js
    └── users.service.js

8 directories, 38 files
```

## 📄 Module Files & Contents

### `auth/auth.middleware.js`
```javascript
import { verifyToken } from "./jwt.js";

export const authenticateUser = (req, res, next) => {
  // Check both headers and cookies
  const token = req.headers.authorization?.split(" ")[1] || req.cookies?.token;

  if (!token) {
    return res.status(401).json({
      code: "MISSING_TOKEN",
      message: "Authentication required",
    });
  }

  try {
    req.user = verifyToken(token);
    next();
  } catch (err) {
    return res.status(401).json({
      code: "INVALID_TOKEN",
      message: err.message,
    });
  }
};
```

### `auth/auth.routes.js`
```javascript
/* import { Router } from "express";
import { clearJwtToken, createJwtToken } from "./issueJwt.js";

const router = Router();

router.post("/create-jwt", createJwtToken);
router.post("/clear-jwt", clearJwtToken);
export const AuthRoutes = router; */

import { Router } from "express";
import { createJwtToken, clearJwtToken } from "./issueJwt.js";
import { authenticateUser } from "./auth.middleware.js";

const router = Router();

router.post("/create-jwt", createJwtToken);
router.post("/clear-jwt", authenticateUser, clearJwtToken); // Protected

export const AuthRoutes = router;
```

### `auth/authApi.hurl`
```hurl
POST  http://localhost:5000/api/v1/auth/create-jwt

Content-Type: application/json

  {
    "email": "teacher2@eduverse.com"
  }
```

### `auth/issueJwt.js`
```javascript
import { generateToken } from "./jwt.js";

export const createJwtToken = async (req, res) => {
  // after validating user credentials
  const userPayload = { email: req.body.email };
  // console.log(userPayload, "issueJwt.js", 6);
  const token = generateToken(userPayload);
  // console.log(token, "token: issueJwt.js", 7);

  /*   res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only over HTTPS in prod
    // sameSite: "strict",
    // maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
 */
  res.cookie("token", token, {
    httpOnly: true,
    secure: true, // must be true because Vercel uses HTTPS
    sameSite: "none", // cross-site cookie required for localhost frontend
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.status(200).json({ message: "token issued successfully" });
};

// Add this new function
export const clearJwtToken = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true, // Must match how cookie was set
    sameSite: "none", // Must match how cookie was set
    path: "/", // Important for cookie clearance
  });

  res.status(200).json({
    success: true,
    message: "Token cleared successfully",
  });
};
```

### `auth/jwt.js`
```javascript
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d";

export const generateToken = (payload) => {
  if (!JWT_SECRET) throw new Error("JWT_SECRET not configured");
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
    algorithm: "HS256",
  });
};

export const verifyToken = (token) => {
  if (!token) throw new Error("No token provided");
  if (!JWT_SECRET) throw new Error("JWT_SECRET not configured");

  try {
    return jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] });
  } catch (err) {
    const errors = {
      TokenExpiredError: "Token expired",
      JsonWebTokenError: "Invalid token",
      NotBeforeError: "Token not active",
    };
    throw new Error(errors[err.name] || "Authentication failed");
  }
};
```

### `bookings/bookings.controller.js`
```javascript
// src/App/modules/bookings/bookings.controller.js

import sendResponse from "../../utils/sendResponse.js";
import { BookingServices } from "./bookings.service.js";

const createBooking = async (req, res, next) => {
  try {
    const result = await BookingServices.createBooking(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Booking created successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllBookings = async (req, res, next) => {
  try {
    const result = await BookingServices.getAllBookings();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Bookings retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await BookingServices.getBookingById(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Booking retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await BookingServices.updateBookingById(id, req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Booking updated successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deleteBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await BookingServices.deleteBookingById(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Booking deleted successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getBookingsByTourist = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id, "bookings.controller.js", 82);
    const result = await BookingServices.getBookingsByTourist(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tourist bookings retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getBookingsByGuide = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await BookingServices.getBookingsByGuide(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Guide bookings retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const BookingControllers = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
  deleteBooking,
  getBookingsByTourist,
  getBookingsByGuide,
};
```

### `bookings/bookings.model.js`
```javascript
// /src/App/modules/bookings/bookings.model.js

import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    packageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Package",
      required: true,
    },
    packageName: {
      type: String,
      required: true,
    },
    touristId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    touristName: {
      type: String,
      required: true,
    },
    touristEmail: {
      type: String,
      required: true,
    },
    touristPhoto: {
      type: String,
    },
    guideId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    guideName: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    tourDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "in-review", "accepted", "rejected"],
      default: "pending",
    },
    paymentStatus: {
      type: String,
      enum: ["paid", "unpaid"],
      default: "unpaid",
    },
    transactionId: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
    versionKey: false,
  },
);

export const Booking = mongoose.model("Booking", bookingSchema);
```

### `bookings/bookings.route.js`
```javascript
// src/App/modules/bookings/bookings.route.js

import express from "express";
import { BookingControllers } from "./bookings.controller.js";

const router = express.Router();

router.post("/", BookingControllers.createBooking);
router.get("/", BookingControllers.getAllBookings);
router.get("/:id", BookingControllers.getSingleBooking);
router.patch("/:id", BookingControllers.updateBooking);
router.delete("/:id", BookingControllers.deleteBooking);

// Additional filters
router.get("/tourist/:id", BookingControllers.getBookingsByTourist);
router.get("/guide/:id", BookingControllers.getBookingsByGuide);

export const BookingRoutes = router;
```

### `bookings/bookings.service.js`
```javascript
import { Booking } from "./bookings.model.js";
import mongoose from "mongoose";

import { Package } from "../packages/package.model.js";
import { User } from "../users/users.model.js"; // assuming tourists & guides are users

export const createBooking = async (bookingData) => {
  const { packageId, guideId, touristId } = bookingData;

  // Validate package
  const pkg = await Package.findById(packageId);
  if (!pkg) throw new Error("Invalid packageId — Package not found");

  // Validate guide
  const guide = await User.findById(guideId);
  if (!guide || guide.role !== "tour-guide") {
    throw new Error("Invalid guideId — Guide not found");
  }

  // Validate tourist
  const tourist = await User.findById(touristId);
  if (!tourist || tourist.role !== "tourist") {
    throw new Error("Invalid touristId — Tourist not found");
  }

  // Now create the booking
  const result = await Booking.create(bookingData);
  return result;
};
// Get all bookings (with optional filters)
const getAllBookings = async (filter = {}) => {
  const result = await Booking.find(filter).populate(
    "packageId touristId guideId",
  );
  return result;
};

// Get a single booking by ID
const getBookingById = async (id) => {
  const result = await Booking.findById(id).populate(
    "packageId touristId guideId",
  );
  return result;
};

// Update booking by ID
const updateBookingById = async (id, updateData) => {
  const result = await Booking.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });
  return result;
};

// Delete booking by ID
const deleteBookingById = async (id) => {
  const result = await Booking.findByIdAndDelete(id);
  return result;
};

// Get bookings by touristId (dashboard usage)
const getBookingsByTourist = async (touristId) => {
  // const result = await Booking.find({ touristId }).populate("packageId");
  const result = await Booking.find({ touristId });
  return result;
};

// Get bookings by guideId (for guides)
const getBookingsByGuide = async (guideId) => {
  const result = await Booking.find({ guideId }).populate(
    "packageId touristId",
  );
  return result;
};
/* const getBookingsByGuide = async (guideId) => {
  const bookings = await Booking.find({ guideId, paymentStatus: "paid" })
    .populate("packageId touristId")
    .lean();

  return bookings.sort((a, b) => {
    // Prioritize "in-review"
    if (a.status === "in-review" && b.status !== "in-review") return -1;
    if (a.status !== "in-review" && b.status === "in-review") return 1;

    // If both are same status (including "in-review"), sort by date (newest first)
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
}; */
export const BookingServices = {
  createBooking,
  getAllBookings,
  getBookingById,
  updateBookingById,
  deleteBookingById,
  getBookingsByTourist,
  getBookingsByGuide,
};
```

### `bookings/bookingsApi.hurl`
```hurl
# ✅ Get all bookings


GET http://localhost:5000/api/v1/bookings

# ✅ Get single booking
GET http://localhost:5000/api/v1/bookings/687da958289cd4c61c2b0c9f

# ✅ Create new booking
POST http://localhost:5000/api/v1/bookings
Content-Type: application/json

{
  "packageId": "687ce60e7511b3341ff488bf",
  "packageName": "Sajek Adventure",
  "touristId": "687ccd783d8c8c7d294a0fca",
  "touristName": "John Doe",
  "touristEmail": "john@example.com",
  "touristPhoto": "https://i.ibb.co/sample-image.png",
  "guideId": "687cff8d095a1d459861b897",
  "guideName": "John Doe",
  "price": 5000,
  "tourDate": "2025-08-01T00:00:00.000Z",
  "status": "pending",
  "paymentStatus": "unpaid",
  "transactionId": ""
}

# ✅ Update booking (e.g., mark as accepted or paid)
687da9b2289cd4c61c2b0ca5     /68836ba66261e0f84285c3ad  687da958289cd4c61c2b0c9f
PATCH http://localhost:5000/api/v1/bookings/687da958289cd4c61c2b0c9f  
Content-Type: application/json

{
  "status": "in-review",
  "paymentStatus": "paid"
}

# ✅ Delete booking
DELETE http://localhost:5000/api/v1/bookings/687d87c1385d0ad42e797a27

# ✅ Get bookings of  a  tourist by  id
GET http://localhost:5000/api/v1/bookings/tourist/688036d54582db5aafd12e4f

# ✅ Get bookings of a specific guide by id
GET http://localhost:5000/api/v1/bookings/guide/687cff8d095a1d459861b897

```

### `packages/package.model.js`
```javascript
// src/models/package.model.js

import mongoose from "mongoose";

const tourPlanSchema = new mongoose.Schema(
  {
    day: { type: Number, required: true },
    activities: { type: String, required: true },
  },
  { _id: false },
);

const packageSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    tripType: {
      type: String,
      required: true,
      enum: [
        "Adventure",
        "Relaxation",
        "Cultural",
        "Nature",
        "Historical",
        "Other",
      ],
      default: "Adventure",
    },

    days: { type: Number, required: true },
    location: { type: String, required: true },
    gallery: [{ type: String }],
    tourPlan: [tourPlanSchema],
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  },
);

export const Package = mongoose.model("Package", packageSchema);
```

### `packages/packageData.json`
```javascripton
[
  {
    "title": "Cox's Bazar Beach Escape",
    "description": "Enjoy the world’s longest sea beach, local seafood, and calm sunsets at Cox’s Bazar. Ideal for couples, families, or solo travelers.",
    "price": 5500,
    "tripType": "Relaxation",
    "days": 3,
    "location": "Cox's Bazar",
    "gallery": [
      "https://images.deepai.org/art-image/72bca9114b0941e89cdb0ea0a22f5553/cox-s-bazar-sea-beach-during-sunset-with-silhouettes-.jpg",
      "https://api.deepai.org/job-view-file/d46572d0-47a7-41cc-8eae-d7bac1a7e0a6/outputs/output.jpg",
      "https://api.deepai.org/job-view-file/21cbe50a-3fd5-40b2-b412-de7076ace8c9/outputs/output.jpg"
    ],
    "tourPlan": [
      {
        "day": 1,
        "activities": "Departure from Dhaka, check-in at sea view hotel, evening walk by the beach"
      },
      {
        "day": 2,
        "activities": "Visit Himchari, Inani Beach, and enjoy local seafood lunch"
      },
      {
        "day": 3,
        "activities": "Shopping from Burmese market and return journey"
      }
    ]
  },
  {
    "title": "Sundarbans Wildlife Expedition",
    "description": "Explore the world’s largest mangrove forest and spot rare wildlife like Royal Bengal Tigers, spotted deer, and exotic birds on a tranquil boat journey.",
    "price": 8200,
    "tripType": "Nature",
    "days": 4,
    "location": "Sundarbans",
    "gallery": [
      "https://images.deepai.org/art-image/18013ccde158403e97b2804d68101e57/traditional-launch-boat-in-sundarbans-mangrove-river-.jpg",
      "https://images.deepai.org/art-image/0271952765ce412b878981dbdb957347/royal-bengal-tiger-mid-step-among-trees-in-sundarbans.jpg",
      "https://images.deepai.org/art-image/edb1fdbc627d46b692194673642c8cd8/fishing-village-huts-on-stilts-beside-muddy-river-in-.jpg"
    ],
    "tourPlan": [
      {
        "day": 1,
        "activities": "Depart from Khulna, board the launch, and begin forest river cruise"
      },
      {
        "day": 2,
        "activities": "Jungle walk in Kotka, birdwatching at dawn, tiger sighting spots"
      },
      {
        "day": 3,
        "activities": "Canoe ride near narrow mangrove creeks, visit local fishing village"
      },
      {
        "day": 4,
        "activities": "Return from cruise and transfer to Khulna city"
      }
    ]
  },
  {
    "title": "Saint Martin's Coral Island Adventure",
    "description": "Crystal blue waters, coral reefs, and beach bonfires await on Bangladesh's only oral island. Ideal for snorkeling and sunset lovers.",
    "price": 7200,
    "tripType": "Adventure",
    "days": 3,
    "location": "Saint Martin's Island",
    "gallery": [
      "https://images.deepai.org/art-image/3be7075b97b143d19ca910a9c7621cac/aerial-view-of-saint-martins-turquoise-coast-with-cor.jpg",
      "https://images.deepai.org/art-image/063b33d8fb6f429191d93a7ec99546da/snorkeling-person-near-chera-dwip-with-coral-and-fish.jpg",
      "https://images.deepai.org/art-image/f9d5f96b6548451bbb1721d48464d2f3/bangladeshi-male-night-beach-bonfire-with-tourists-si.jpg"
    ],
    "tourPlan": [
      {
        "day": 1,
        "activities": "Arrive via Teknaf trawler, check-in, explore West Beach"
      },
      {
        "day": 2,
        "activities": "Boat ride to Chera Dwip, snorkeling and photography"
      },
      {
        "day": 3,
        "activities": "Sunrise walk, seafood breakfast, return to mainland"
      }
    ]
  },
  {
    "title": "Bandarban Tribal Hills Trek",
    "description": "Experience the serene hills of Bandarban, visit tribal villages, and hike trails like Nilgiri and Nafakhum surrounded by clouds and waterfalls.",
    "price": 6900,
    "tripType": "Adventure",
    "days": 5,
    "location": "Bandarban",
    "gallery": [
      "https://images.deepai.org/art-image/83ea73b1eb8f4247bf48c7705aeb4887/hilltop-view-from-nilgiri-in-early-morning-fog-with-g.jpg",
      "https://images.deepai.org/art-image/0a059bc079e049899859428e7be0688a/tourists-hiking-to-nafakhum-waterfall-through-forest-.jpg",
      "https://images.deepai.org/art-image/d8364193a6364316965549baada5b85e/tribal-woman-selling-fruits-in-bandarban-street-marke.jpg"
    ],
    "tourPlan": [
      {
        "day": 1,
        "activities": "Depart from Dhaka, check-in at resort near Meghla"
      },
      {
        "day": 2,
        "activities": "Visit Nilachal, explore tribal markets and local culture"
      },
      {
        "day": 3,
        "activities": "Hike to Nafakhum waterfall, river trekking"
      },
      {
        "day": 4,
        "activities": "Visit Nilgiri and Chimbuk Hill, scenic photography"
      },
      {
        "day": 5,
        "activities": "Morning rest and departure"
      }
    ]
  },
  {
    "title": "Sylhet Tea Garden & Waterfall Tour",
    "description": "Visit Sylhet’s lush tea gardens, serene waterfalls, and natural landmarks like Ratargul swamp forest for a peaceful escape.",
    "price": 4800,
    "tripType": "Nature",
    "days": 3,
    "location": "Sylhet",
    "gallery": [
      "https://images.deepai.org/art-image/1ff26b4cc5a44188b52df8d4fd35ee24/old-man-picking-tea-leaves-in-sylhet-tea-garden-with-.jpg",
      "https://images.deepai.org/art-image/1d9c99fa1f3c43458eb037c1c62491f4/wooden-boat-floating-through-ratargul-swamp-forest-wi.jpg",
      "https://images.deepai.org/art-image/3f544dbb109e4e438d200e4a03246c3b/madhabkunda-waterfall-falling-over-red-rocks-tourists.jpg"
    ],
    "tourPlan": [
      {
        "day": 1,
        "activities": "Arrival, explore Lakkatura tea estate and local restaurants"
      },
      {
        "day": 2,
        "activities": "Boat trip to Ratargul swamp forest and visit Jaflong"
      },
      {
        "day": 3,
        "activities": "Visit Madhabkunda waterfall, return journey"
      }
    ]
  },
  {
    "title": "Rangamati Lake & Tribal Culture Tour",
    "description": "Sail on the vast Kaptai Lake and experience the colorful tribal culture, Chakma Rajbari, and natural peace of Rangamati hills.",
    "price": 5200,
    "tripType": "Cultural",
    "days": 3,
    "location": "Rangamati",
    "gallery": [
      "https://images.deepai.org/art-image/df7b829ba073449689ebdba4fbee9a77/wooden-boat-crossing-kaptai-lake-with-green-hills-and.jpg",
      "https://images.deepai.org/art-image/3f544dbb109e4e438d200e4a03246c3b/madhabkunda-waterfall-falling-over-red-rocks-tourists.jpg",
      "https://images.deepai.org/art-image/668a4269696b40619a05863e3f50ef02/tribal-woman-selling-fruits-in-bandarban-street-marke.jpg"
    ],
    "tourPlan": [
      {
        "day": 1,
        "activities": "Bus ride from Chittagong, lake view resort check-in"
      },
      {
        "day": 2,
        "activities": "Boat tour on Kaptai Lake, visit Chakma Rajbari"
      },
      {
        "day": 3,
        "activities": "Explore local markets and return trip"
      }
    ],
    "imagePrompts": [
      "Sunset view over Kaptai Lake with orange reflections on calm water"
    ]
  },
  {
    "title": "Srimangal Tea & Rainforest Retreat",
    "description": "Known as the tea capital of Bangladesh, Srimangal offers a calm retreat with Lawachara rainforest, tribal communities, and 7-layer tea.",
    "price": 4600,
    "tripType": "Nature",
    "days": 2,
    "location": "Srimangal",
    "gallery": [
      "https://images.deepai.org/art-image/1ff26b4cc5a44188b52df8d4fd35ee24/old-man-picking-tea-leaves-in-sylhet-tea-garden-with-.jpg",
      "https://images.deepai.org/art-image/83ea73b1eb8f4247bf48c7705aeb4887/hilltop-view-from-nilgiri-in-early-morning-fog-with-g.jpg",
      "https://deepai.org/static/images/new_heart.png"
    ],
    "tourPlan": [
      {
        "day": 1,
        "activities": "Arrival, visit Lawachara rainforest and tribal villages"
      },
      {
        "day": 2,
        "activities": "Taste 7-layer tea, explore tea estates, return home"
      }
    ]
  },
  {
    "title": "Paharpur & Mahasthangarh Archaeology Tour",
    "description": "Step back into history with guided tours to Paharpur Buddhist Monastery and Mahasthangarh ruins in North Bengal.",
    "price": 6300,
    "tripType": "Historical",
    "days": 3,
    "location": "Naogaon & Bogura",
    "gallery": [
      "https://images.deepai.org/art-image/56647f7ad23e4a21801c30422b3d6d30/panoramic-view-of-somapura-mahavihara-ruins-with-bric.jpg",
      "https://images.deepai.org/art-image/6681118a3c4d4532a0602d5b5366d8b4/ancient-stone-wall-with-inscriptions-at-mahasthangarh.jpg",
      "https://images.deepai.org/art-image/fd411f45710b413d9c2b65e3f99a1c44/local-guide-explaining-history-at-small-rural-museum-.jpg"
    ],
    "tourPlan": [
      {
        "day": 1,
        "activities": "Train to Bogura, visit Mahasthangarh ancient city ruins"
      },
      {
        "day": 2,
        "activities": "Travel to Paharpur, explore UNESCO heritage site"
      },
      {
        "day": 3,
        "activities": "Visit local museum, return by train"
      }
    ]
  },
  {
    "title": "Kuakata Sunrise to Sunset Tour",
    "description": "Witness both sunrise and sunset over the sea at Kuakata beach, a rare gem in southern Bangladesh.",
    "price": 5800,
    "tripType": "Relaxation",
    "days": 3,
    "location": "Kuakata",
    "gallery": [
      "https://images.deepai.org/art-image/a153c611d6904ca092d86e33c25c8391/sunrise-over-kuakata-sea-beach-with-fishermen-walking.jpg",
      "https://images.deepai.org/art-image/c61023c3eaf344e18481cfca661f2563/tourists-sitting-on-kuakata-beach-watching-golden-sun.jpg",
      "https://images.deepai.org/art-image/b5576a868a6f4fb5b6364f5e6d5ea5d5/buddhist-temple-structure-with-red-roof-and-prayer-fl.jpg"
    ],
    "tourPlan": [
      {
        "day": 1,
        "activities": "Bus ride to Kuakata, beach hotel check-in"
      },
      {
        "day": 2,
        "activities": "See sunrise in early morning and explore dry fish market"
      },
      {
        "day": 3,
        "activities": "Watch sunset, visit Buddhist temple, depart"
      }
    ]
  },
  {
    "title": "Bhawal National Park Forest Daytrip",
    "description": "A short forest escape from Dhaka with wildlife, greenery, and a refreshing picnic vibe for families or groups.",
    "price": 2000,
    "tripType": "Nature",
    "days": 1,
    "location": "Gazipur",
    "gallery": [
      "https://images.deepai.org/art-image/fa7df2d2a6c248bba2a096e31e17c306/path-through-bhawal-forest-with-tall-sal-trees-and-li.jpg",
      "https://images.deepai.org/art-image/6d1242776af24b29989fcb1f05e2a9f7/colorful-paddle-boat-floating-on-small-forest-lake-in.jpg",
      "https://images.deepai.org/art-image/b34dc26354ae436595ba69b3a982f9c5/a-river-and-forest-scenic-beauty-with-the-sunset-thum.jpg"
    ],
    "tourPlan": [
      {
        "day": 1,
        "activities": "Morning drive from Dhaka, jungle walk, boating, picnic, return"
      }
    ]
  }
]
```

### `packages/packages.controller.js`
```javascript
// src/App/modules/packages/packages.controller.js
import sendResponse from "../../utils/sendResponse.js";
import { PackageServices } from "./packages.service.js";

const createPackage = async (req, res, next) => {
  try {
    const result = await PackageServices.createPackage(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Package created successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllPackages = async (req, res, next) => {
  try {
    const result = await PackageServices.getAllPackages();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Packages retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSinglePackage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PackageServices.getPackageById(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Package retrieved successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getRandomPackages = async (req, res, next) => {
  try {
    // allow client to override sample size via query ?size=5
    const size = parseInt(req.query.size, 10) || 3;
    const result = await PackageServices.getRandomPackages(size);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: `${size} random packages`,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updatePackage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PackageServices.updatePackage(id, req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Package updated successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const deletePackage = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PackageServices.deletePackage(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Package deleted successfully!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const PackageControllers = {
  createPackage,
  getAllPackages,
  getSinglePackage,
  updatePackage,
  deletePackage,
  getRandomPackages,
};
```

### `packages/packages.route.js`
```javascript
// src/App/modules/packages/packages.route.js
import express from "express";
import { PackageControllers } from "./packages.controller.js";

const router = express.Router();

router.get("/", PackageControllers.getAllPackages);
router.post("/", PackageControllers.createPackage);
router.get("/random", PackageControllers.getRandomPackages);
router.get("/:id", PackageControllers.getSinglePackage);
router.patch("/:id", PackageControllers.updatePackage);
router.delete("/:id", PackageControllers.deletePackage);

export const PackageRoutes = router;
```

### `packages/packages.service.js`
```javascript
// src/App/modules/packages/packages.service.js

import { Booking } from "../bookings/bookings.model.js";
import { Package } from "./package.model.js";

const createPackage = async (data) => {
  return await Package.create(data);
};

const getAllPackages = async () => {
  return await Package.find().sort({ createdAt: -1 });
};

const getPackageById = async (id) => {
  return await Package.findById(id);
};
const getRandomPackages = async (size = 3) => {
  // Use aggregation $sample
  const samples = await Package.aggregate([{ $sample: { size } }]);
  return samples;
};
const updatePackage = async (id, updatedData) => {
  return await Package.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
};

const deletePackage = async (id) => {
  const pkg = await Package.findById(id);
  if (!pkg) throw new Error("Package not found");

  // Delete all bookings related to this package
  await Booking.deleteMany({ packageId: id });

  // Delete the package
  const deletedPackage = await Package.findByIdAndDelete(id);

  return deletedPackage;
};

export const PackageServices = {
  createPackage,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
  getRandomPackages,
};
```

### `packages/packagesApi.hurl`
```hurl
# ✅ Get 3 random packages (default)
GET http://localhost:5000/api/v1/packages/random
Accept: application/json
# ✅ Get all packages
GET http://localhost:5000/api/v1/packages
Accept: application/json

# ✅ Get single package
GET http://localhost:5000/api/v1/packages/687f5b17ec95de7ba201f143
Accept: application/json

# ✅ Create new package
POST http://localhost:5000/api/v1/packages
Content-Type: application/json

{
    "title": "Cox's Bazar Beach Escape",
    "description": "Enjoy the world’s longest sea beach, local seafood, and calm sunsets at Cox’s Bazar. Ideal for couples, families, or solo travelers.",
    "price": 5500,
    "tripType": "Relaxation",
    "days": 3,
    "location": "Cox's Bazar",
    "gallery": [
      "https://images.deepai.org/art-image/72bca9114b0941e89cdb0ea0a22f5553/cox-s-bazar-sea-beach-during-sunset-with-silhouettes-.jpg",
      "https://api.deepai.org/job-view-file/d46572d0-47a7-41cc-8eae-d7bac1a7e0a6/outputs/output.jpg",
      "https://api.deepai.org/job-view-file/21cbe50a-3fd5-40b2-b412-de7076ace8c9/outputs/output.jpg"
    ],
    "tourPlan": [
      {
        "day": 1,
        "activities": "Departure from Dhaka, check-in at sea view hotel, evening walk by the beach"
      },
      {
        "day": 2,
        "activities": "Visit Himchari, Inani Beach, and enjoy local seafood lunch"
      },
      {
        "day": 3,
        "activities": "Shopping from Burmese market and return journey"
      }
    ]
  }

# ✅ Update package
PATCH http://localhost:5000/api/v1/packages/687ce1e14f0f363e8661d183
Content-Type: application/json

{
  "price": 5000
}

# ✅ Delete package
DELETE http://localhost:5000/api/v1/packages/687ce1e14f0f363e8661d183
Accept: application/json

```

### `payments/payments.controller.js`
```javascript
// src/App/modules/payments/payments.controller.js
import sendResponse from "../../utils/sendResponse.js";
import { PaymentServices } from "./payments.service.js";

const createPayment = async (req, res, next) => {
  try {
    const result = await PaymentServices.createPayment(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Payment created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllPayments = async (req, res, next) => {
  try {
    const result = await PaymentServices.getAllPayments();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Payments retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSinglePayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PaymentServices.getPaymentById(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Payment retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deletePayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PaymentServices.deletePayment(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Payment deleted successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// ✅ New: Stripe Payment Intent
const createPaymentIntent = async (req, res, next) => {
  try {
    const { amountInCents } = req.body;

    if (!amountInCents) {
      return res.status(400).json({ message: "amountInCents is required" });
    }

    const clientSecret =
      await PaymentServices.createStripePaymentIntent(amountInCents);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Stripe payment intent created successfully!",
      data: { clientSecret },
    });
  } catch (error) {
    next(error);
  }
};

export const PaymentControllers = {
  createPayment,
  getAllPayments,
  getSinglePayment,
  deletePayment,
  createPaymentIntent, // ✅ new export
};

/* // src/App/modules/payments/payments.controller.js
import sendResponse from "../../utils/sendResponse.js";
import { PaymentServices } from "./payments.service.js";

const createPayment = async (req, res, next) => {
  try {
    const result = await PaymentServices.createPayment(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Payment created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllPayments = async (req, res, next) => {
  try {
    const result = await PaymentServices.getAllPayments();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Payments retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSinglePayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PaymentServices.getPaymentById(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Payment retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deletePayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await PaymentServices.deletePayment(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Payment deleted successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const PaymentControllers = {
  createPayment,
  getAllPayments,
  getSinglePayment,
  deletePayment,
}; */
```

### `payments/payments.model.js`
```javascript
// src/App/modules/payments/payments.model.js
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    bookingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    transactionId: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    paymentMethod: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  },
  { timestamps: true },
);

export const Payment = mongoose.model("Payment", paymentSchema);
```

### `payments/payments.route.js`
```javascript
// src/App/modules/payments/payments.route.js
import express from "express";
import { PaymentControllers } from "./payments.controller.js";

const router = express.Router();

router.post("/", PaymentControllers.createPayment);
router.get("/", PaymentControllers.getAllPayments);
router.get("/:id", PaymentControllers.getSinglePayment);
router.delete("/:id", PaymentControllers.deletePayment);

// ✅ New route for Stripe client secret
router.post("/create-payment-intent", PaymentControllers.createPaymentIntent);

export const PaymentRoutes = router;
```

### `payments/payments.service.js`
```javascript
// src/App/modules/payments/payments.service.js
import { Payment } from "./payments.model.js";

import { stripe } from "../../config/stripe.js";

const createPayment = async (data) => {
  return await Payment.create(data);
};

const getAllPayments = async () => {
  return await Payment.find().sort({ createdAt: -1 });
};

const getPaymentById = async (id) => {
  const res = await Payment.findById(id).populate("bookingId");
  if (!res) {
    throw new Error("Payment not found");
  }
  return res;
};

const deletePayment = async (id) => {
  const payment = await Payment.findById(id);
  if (!payment) {
    throw new Error("Payment not found");
  }
  return await Payment.findByIdAndDelete(id);
};

// ✅ Stripe: Create Payment Intent
const createStripePaymentIntent = async (amountInCents) => {
  const paymentIntent = await stripe.paymentIntents.create({
    amount: amountInCents,
    currency: "usd",
    payment_method_types: ["card"],
  });

  return paymentIntent.client_secret;
};

export const PaymentServices = {
  createPayment,
  getAllPayments,
  getPaymentById,
  deletePayment,
  createStripePaymentIntent, // ✅ new export
};

/* import { Payment } from "./payments.model.js";

const createPayment = async (data) => {
  return await Payment.create(data);
};

const getAllPayments = async () => {
  return await Payment.find().sort({ createdAt: -1 });
};

const getPaymentById = async (id) => {
  const res = await Payment.findById(id).populate("bookingId");
  if (!res) {
    throw new Error("Payment not found");
  }
  return res;
};

const deletePayment = async (id) => {
  const payment = await Payment.findById(id);
  if (!payment) {
    throw new Error("Payment not found");
  }
  return await Payment.findByIdAndDelete(id);
};

export const PaymentServices = {
  createPayment,
  getAllPayments,
  getPaymentById,
  deletePayment,
}; */
```

### `payments/paymentsApi.hurl`
```hurl
# ✅ Get all payments
GET http://localhost:5000/api/v1/payments
Accept: application/json

###

# ✅ Get single payment by ID
GET http://localhost:5000/api/v1/payments/687e2cf7cbfa711f312c2f03
Accept: application/json

###
# ✅ Create Stripe Payment Intent
POST http://localhost:5000/api/v1/payments/create-payment-intent
Content-Type: application/json

{
  "amountInCents": 5000
}

# ✅ Create new payment
POST http://localhost:5000/api/v1/payments
Content-Type: application/json

{
  "bookingId": "687d9855289cd4c61c2b0c9a",
  "amount": 5000,
  "email": "john@example.com",
  "transactionId": "txn_123456789"
}

###

# ✅ Delete payment
DELETE http://localhost:5000/api/v1/payments/687e2cf7cbfa711f312c2f03
Accept: application/json

```

### `stories/stories.controller.js`
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

### `stories/stories.model.js`
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

### `stories/stories.route.js`
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

### `stories/stories.service.js`
```javascript
import { Story } from "./stories.model.js";
import { User } from "../users/users.model.js"; // ✅ Import user model
import mongoose from "mongoose";

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
  // return await Story.find({ userId }).sort({ createdAt: -1 });
  return await Story.find({ userId: new mongoose.Types.ObjectId(userId) }).sort(
    { createdAt: -1 },
  );
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

### `stories/storiesApi.hurl`
```hurl
# storiesApi.hurl
# ✅ Get all stories
GET http://localhost:5000/api/v1/stories
Accept: application/json


# ✅ Get all stories by userId
GET http://localhost:5000/api/v1/stories/user/68852ad7c78ef640a3f9391d
Accept: application/json


# ✅ Get a single story by ID
GET http://localhost:5000/api/v1/stories/6885e3dbe5bd6ac36ce24fc4
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

### `stories/storiesData.json`
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
    "userId": { "$oid": "68852ad7c78ef640a3f9391d" },
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
    "userId": { "$oid": "68852ad7c78ef640a3f9391d" },
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
    "userId": { "$oid": "68852ad7c78ef640a3f9391d" },
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
    "userId": { "$oid": "68852ad7c78ef640a3f9391d" },
    "userName": "Education Education",
    "userPhoto": "https://lh3.googleusercontent.com/a/ACg8ocIHcFxiMKjbiLLw0cXzz3YwmzykgLMPQg3D1-1rU3to=s96-c"
  }
]
```

### `stories/storiesData2.json`
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

### `tourGuideRequest/tourGuideRequest.controller.js`
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

const getRequestByUserId = async (req, res, next) => {
  try {
    const result = await TourGuideRequestServices.getTourGuideRequestByUserId(
      req.params.userId,
    );

    if (!result) {
      return sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Tour guide request not found for this user",
        data: null,
      });
    }

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Tour guide request fetched by user ID",
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
  getRequestByUserId,
};
```

### `tourGuideRequest/tourGuideRequest.model.js`
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

### `tourGuideRequest/tourGuideRequest.route.js`
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

router.get("/user/:userId", TourGuideRequestControllers.getRequestByUserId);

router.get("/:id", TourGuideRequestControllers.getRequestById);
router.patch("/:id", TourGuideRequestControllers.updateStatus);
router.delete("/:id", TourGuideRequestControllers.deleteRequest);

export const TourGuideRequestRoutes = router;
```

### `tourGuideRequest/tourGuideRequest.service.js`
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

const getTourGuideRequestByUserId = async (userId) => {
  return await TourGuideRequest.findOne({ userId }).populate("userId");
};

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
        "user._id": 1,
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
  getTourGuideRequestByUserId,
};
```

### `tourGuideRequest/tourGuideRequestApi.hurl`
```hurl
# ✅ Get all tour guide requests
GET http://localhost:5000/api/v1/tour-guide-requests


# ✅ Get single tour guide request
688036d54582db5aafd12e4f
GET http://localhost:5000/api/v1/tour-guide-requests/68851af3606080f1804fcc36
Accept: application/json

# ✅ Get Tour Guide Request by User ID
GET http://localhost:5000/api/v1/tour-guide-requests/user/68852b90c78ef640a3f93940
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

### `users/users.controller.js`
```javascript
// src/App/modules/users/users.controller.js
import sendResponse from "../../utils/sendResponse.js";
import { UserServices } from "./users.service.js";
// src/App/modules/users/users.controller.js
const createUser = async (req, res, next) => {
  try {
    const result = await UserServices.createUserIntoDB(req.body);

    const message = result.alreadyExisted
      ? "User already existed, updated last_loggedIn time."
      : "User created successfully!";

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message,
      data: result.user,
    });
  } catch (error) {
    next(error);
  }
};

/* const getAllUsers = async (req, res, next) => {
  try {
    const result = await UserServices.getAllUsersFromDB();
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Users retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
 */

const getAllUsers = async (req, res, next) => {
  try {
    const filters = {
      searchTerm: req.query.search || "", // ?search=tour
      role: req.query.role || "", // ?role=tour-guide
    };

    const result = await UserServices.getAllUsersFromDB(filters);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Users retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getUserByIdFromDB(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// getUserByEmailFromDB;
const getUserByEmail = async (req, res, next) => {
  try {
    const result = await UserServices.getUserByEmailFromDB(req.params.email);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User retrieved successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.updateUserInDB(id, req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await UserServices.deleteUserFromDB(id);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User deleted successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllTourGuides = async (req, res, next) => {
  try {
    const result = await UserServices.getAllTourGuidesFromDB();
    res.status(200).json({
      success: true,
      message: "Tour guides fetched successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  getUserByEmail,
  getAllTourGuides,
};
```

### `users/users.model.js`
```javascript
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    photoURL: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["tourist", "tour-guide", "admin"],
      default: "tourist",
    },
    last_loggedIn: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true, // Automatically creates `createdAt` and `updatedAt`
  },
);

export const User = mongoose.model("User", userSchema);
```

### `users/users.route.js`
```javascript
// src/App/modules/users/users.route.js
import express from "express";
import { UserControllers } from "./users.controller.js";

const router = express.Router();

router.post("/", UserControllers.createUser);
router.get("/", UserControllers.getAllUsers);
router.get("/tour-guides", UserControllers.getAllTourGuides);
router.get("/email/:email", UserControllers.getUserByEmail);
router.get("/:id", UserControllers.getSingleUser);
router.patch("/:id", UserControllers.updateUser);
router.delete("/:id", UserControllers.deleteUser);

export const UserRoutes = router;
```

### `users/users.service.js`
```javascript
// src/App/modules/users/users.service.js
import { User } from "./users.model.js";
// ✅ Get All Users
// src/App/modules/users/users.service.js
const createUserIntoDB = async (data) => {
  const existingUser = await User.findOne({ email: data?.email });

  if (existingUser) {
    existingUser.last_loggedIn = new Date();
    await existingUser.save();
    return {
      user: existingUser,
      alreadyExisted: true,
    };
  }

  const newUser = await User.create({
    ...data,
    last_loggedIn: new Date(),
  });

  return {
    user: newUser,
    alreadyExisted: false,
  };
};

const getAllTourGuidesFromDB = async () => {
  const guides = await User.find({ role: "tour-guide" }).sort({
    createdAt: -1,
  });

  if (!guides || guides.length === 0) {
    throw new Error("No tour guides found");
  }

  return guides;
};
// ✅ Get All Users
/* const getAllUsersFromDB = async () => {
  const res = await User.find().sort({ createdAt: -1 });
  if (!res) {
    throw new Error("User not found");
  }
  return res;
}; */

const getAllUsersFromDB = async (filters = {}) => {
  const { searchTerm, role } = filters;

  const query = {};

  if (searchTerm) {
    query.$or = [
      { name: { $regex: searchTerm, $options: "i" } },
      { email: { $regex: searchTerm, $options: "i" } },
    ];
  }

  if (role) {
    query.role = role;
  }

  const users = await User.find(query).sort({ createdAt: -1 });

  if (!users) throw new Error("Users not found");
  return users;
};

// ✅ Get Single User by ID
const getUserByIdFromDB = async (id) => {
  const res = await User.findById(id);
  if (!res) {
    throw new Error("User not found");
  }
  return res;
};

const getUserByEmailFromDB = async (email) => {
  const res = await User.findOne({
    email,
  });
  if (!res) {
    throw new Error("User not found");
  }
  return res;
};

// ✅ Update User
const updateUserInDB = async (id, updatedData) => {
  const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });

  if (!updatedUser) {
    throw new Error("User not found");
  }

  return updatedUser;
};

// ✅ Delete User
const deleteUserFromDB = async (id) => {
  const user = await User.findById(id);
  if (!user) {
    throw new Error("User not found");
  }

  return await User.findByIdAndDelete(id);
};

export const UserServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getUserByIdFromDB,
  updateUserInDB,
  deleteUserFromDB,
  getUserByEmailFromDB,
  getAllTourGuidesFromDB,
};
```

### `users/usersApi.hurl`
```hurl
# Get all users (no filter)
GET http://localhost:5000/api/v1/users

# Search users by name or email
GET http://localhost:5000/api/v1/users?search=tourist@example.com

# Filter users by role
GET http://localhost:5000/api/v1/users?role=tour-guide

# Combine both
GET http://localhost:5000/api/v1/users?search=tour&role=tour-guide


# load tour guides from users 
GET http://localhost:5000/api/v1/users/tour-guides

# ✅ Get single user by ID
GET http://localhost:5000/api/v1/users/6885e18be5bd6ac36ce24fa0
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
PATCH http://localhost:5000/api/v1/users/6885ed7fca58e8b851c12be6
Content-Type: application/json

{
  "name": "Tourist Jamilur Rahman"
}

# ✅ Delete user by ID
DELETE http://localhost:5000/api/v1/users/688036b54582db5aafd12e46




```
