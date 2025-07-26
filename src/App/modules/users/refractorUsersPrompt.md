You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules/users
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `users_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved users version`

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

## 📁 Target Module Tree (users)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules/users
├── usersApi.hurl
├── users.controller.js
├── users.model.js
├── users.route.js
└── users.service.js

1 directory, 5 files
```

## 📄 Module Files & Contents

### `users.controller.js`
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

### `users.model.js`
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

### `users.route.js`
```javascript
// src/App/modules/users/users.route.js
import express from "express";
import { UserControllers } from "./users.controller.js";

const router = express.Router();

router.get("/", UserControllers.getAllUsers);
router.get("/", UserControllers.getAllUsers);
router.get("/tour-guides", UserControllers.getAllTourGuides);
router.get("/email/:email", UserControllers.getUserByEmail);
router.get("/:id", UserControllers.getSingleUser);
router.patch("/:id", UserControllers.updateUser);
router.delete("/:id", UserControllers.deleteUser);

export const UserRoutes = router;
```

### `users.service.js`
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

### `usersApi.hurl`
```hurl
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




```
