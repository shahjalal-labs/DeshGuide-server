You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules/auth
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `auth_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved auth version`

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

18 directories, 82 files
```

## 📁 Target Module Tree (auth)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules/auth
├── authApi.hurl
├── auth.middleware.js
├── auth.routes.js
├── issueJwt.js
└── jwt.js

1 directory, 5 files
```

## 📄 Module Files & Contents

### `auth.middleware.js`
```javascript
import { verifyToken } from "./jwt.js";

export const authenticateUser = (req, res, next) => {
  const token = req?.cookies?.token;
  console.log(token, "token from client: auth.middleware.js", 5);
  if (!token) {
    return res.status(401).json({
      statusCode: 401,
      success: false,
      message: "Unauthorized: No token",
    });
  }

  try {
    const decoded = verifyToken(token);
    req.decoded = decoded; // attach user info to request
    next();
  } catch (err) {
    res.status(401).json({
      statusCode: 401,
      success: false,
      message: "verifyToken issue: Unauthorized: Invalid token",
    });
    // next(err);
  }
};
```

### `auth.routes.js`
```javascript
import { Router } from "express";
import { createJwtToken } from "./issueJwt.js";

const router = Router();

router.post("/create-jwt", createJwtToken);

export const AuthRoutes = router;
```

### `authApi.hurl`
```hurl
POST  http://localhost:5000/api/v1/auth/create-jwt

Content-Type: application/json

  {
    "email": "teacher2@eduverse.com"
  }
```

### `issueJwt.js`
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
```

### `jwt.js`
```javascript
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const JWT_EXPIRES_IN = "1d"; // token validity

export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const verifyToken = (req, res, next) => {
  const token = req?.cookies?.token;
  if (!token) {
    return res
      .status(401)
      .send({ message: " no token: unauthorized access no token" });
  }
  // console.log(`token from client:`, token);
  // console.log(`process.env.JWT_SECRET`, process.env.JWT_SECRET);
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      let digit = "33";
      digit = digit + 3;
      /* console.log(err, "err jwt.js", 21);
      return res
        .status(401)
        .send({ message: "unauthorized access inside veryfyToken" }); */
    }
    req.decoded = decoded;
    next();
  });
};
```
