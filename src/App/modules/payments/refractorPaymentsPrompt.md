You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules/payments
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `payments_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved payments version`

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
│   │   │   │   └── payments.service.js
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

18 directories, 74 files
```

## 📁 Target Module Tree (payments)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/src/App/modules/payments
├── paymentsApi.hurl
├── payments.controller.js
├── payments.model.js
├── payments.route.js
└── payments.service.js

1 directory, 5 files
```

## 📄 Module Files & Contents

### `payments.controller.js`
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

export const PaymentControllers = {
  createPayment,
  getAllPayments,
  getSinglePayment,
  deletePayment,
};
```

### `payments.model.js`
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
  },
  { timestamps: true },
);

export const Payment = mongoose.model("Payment", paymentSchema);
```

### `payments.route.js`
```javascript
// src/App/modules/payments/payments.route.js
import express from "express";
import { PaymentControllers } from "./payments.controller.js";

const router = express.Router();

router.post("/", PaymentControllers.createPayment);
router.get("/", PaymentControllers.getAllPayments);
router.get("/:id", PaymentControllers.getSinglePayment);
router.delete("/:id", PaymentControllers.deletePayment);

export const PaymentRoutes = router;
```

### `payments.service.js`
```javascript
// src/App/modules/payments/payments.service.js
import { Payment } from "./payments.model.js";

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
};
```

### `paymentsApi.hurl`
```hurl
# ✅ Get all payments
GET http://localhost:5000/api/v1/payments
Accept: application/json

###

# ✅ Get single payment by ID
GET http://localhost:5000/api/v1/payments/687e2cf7cbfa711f312c2f03
Accept: application/json

###

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
