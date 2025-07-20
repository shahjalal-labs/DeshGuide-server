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
├── docs
│   ├── DATA_MODEL.md
│   ├── deployment.md
│   └── Requirement.md
├── package.json
├── README.md
├── src
│   ├── App
│   │   ├── config
│   │   │   └── db.js
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
│   │   │   ├── submission
│   │   │   │   ├── submissionApi.hur
│   │   │   │   ├── submissionApi.hurl
│   │   │   │   ├── submission.controller.js
│   │   │   │   ├── submission.model.js
│   │   │   │   ├── submission.route.js
│   │   │   │   ├── submission.service.js
│   │   │   │   └── submission.validation.js
│   │   │   └── users
│   │   │       ├── usersApi.hurl
│   │   │       ├── users.controller.js
│   │   │       ├── users.model.js
│   │   │       ├── users.route.js
│   │   │       └── users.service.js
│   │   └── utils
│   │       ├── sendResponse.js
│   │       └── validateRequest.js
│   ├── app.js
│   └── server.js
├── structure.md
└── vercel.json

12 directories, 42 files
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
const createUser = async (req, res, next) => {
  try {
    const result = await UserServices.createUserIntoDB(req.body);
    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Users created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllUsers = async (req, res, next) => {
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

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
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
router.post("/", UserControllers.createUser);
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
const createUserIntoDB = async (data) => {
  return await User.create(data);
};
// ✅ Get All Users
const getAllUsersFromDB = async () => {
  return await User.find().sort({ createdAt: -1 });
};

// ✅ Get Single User by ID
const getUserByIdFromDB = async (id) => {
  return await User.findById(id);
};

// ✅ Update User
const updateUserInDB = async (id, updatedData) => {
  return await User.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
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
};
```

### `usersApi.hurl`
```hurl
# ✅ Get all users
GET https://deshguide-server.vercel.app/api/v1/users
Accept: application/json


# ✅ Get single user by ID
GET http://localhost:5000/api/v1/users/USER_ID_HERE
Accept: application/json


# ✅ Create new user
POST http://localhost:5000/api/v1/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "photoURL": "https://i.ibb.co/sample-image.png",
  "role": "tourist"  
}


# ✅ Update user by ID
PATCH http://localhost:5000/api/v1/users/USER_ID_HERE
Content-Type: application/json

{
  "name": "Updated User",
  "role": "tour-guide",
  "photoURL": "https://i.ibb.co/sample-image.png"
}


# ✅ Delete user by ID
DELETE http://localhost:5000/api/v1/users/USER_ID_HERE
Accept: application/json

```
