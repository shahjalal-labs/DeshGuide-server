You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules/packages
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `packages_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved packages version`

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
│   │   │   │   └── packages.service.js
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

18 directories, 76 files
```

## 📁 Target Module Tree (packages)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules/packages
├── package.model.js
├── packagesApi.hurl
├── packages.controller.js
├── packages.route.js
└── packages.service.js

1 directory, 5 files
```

## 📄 Module Files & Contents

### `package.model.js`
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

### `packages.controller.js`
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

### `packages.route.js`
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

### `packages.service.js`
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

### `packagesApi.hurl`
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
  "title": "Sajek Adventure 4",
  "description": "A trip to the scenic Sajek Valley",
  "price": 4500,
  "tripType": "Relaxation",
  "days": 3,
  "location": "Sajek",
  "gallery": ["https://img.url/1.jpg", "https://img.url/2.jpg"],
  "tourPlan": [
    { "day": 1, "activities": "Depart from Dhaka, arrive at Sajek" },
    { "day": 2, "activities": "Explore hill tracks and tribal villages" }
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
