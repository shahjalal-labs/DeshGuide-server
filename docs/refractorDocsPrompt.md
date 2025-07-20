You are a **senior full-stack developer**.

## 📌 Task

You are given a real-world code module located at:

```
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/docs
```

Refactor the entire codebase **without modifying any UI or changing behavior**. Instead, improve it using:

- ✅ Clear separation of concerns
- ✅ Consistent, semantic naming conventions
- ✅ Modular architecture (hooks, services, utils, components)
- ✅ Scalable file/folder structure
- ✅ Industry-standard project layout and architecture
- ✅ Readable, testable, production-grade code
- ✅ 100% behavior and API compatibility

👉 Output the refactored code to a new folder: `docs_refactored`

Also return a `.sh` script that will:
- Create that folder
- Write all refactored files
- Run `git add` and `git commit` with message: `refactor: added improved docs version`

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
│   │   │       ├── refractorUsersPrompt.md
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

12 directories, 43 files
```

## 📁 Target Module Tree (docs)

```bash
/run/media/sj/developer/web/L1B11/12mi/ass/DeshGuide/DeshGuide-server/docs
├── DATA_MODEL.md
├── deployment.md
└── Requirement.md

1 directory, 3 files
```

## 📄 Module Files & Contents

### `DATA_MODEL.md`
```md
# 🧩 Data Model – Tourism Management System

This document outlines all MongoDB collections and their fields used in the backend.

---

## 📁 users

Stores all users including tourists, guides, and admins.

| Field         | Type   | Description                                 |
| ------------- | ------ | ------------------------------------------- |
| name          | String | Full name                                   |
| email         | String | Unique email                                |
| password      | String | Hashed password                             |
| photoURL      | String | Profile picture                             |
| role          | String | User role: 'tourist', 'tour-guide', 'admin' |
| last_loggedIn | Date   | Last login timestamp                        |
| createdAt     | Date   | Auto-generated timestamp                    |

---

## 📁 packages

Admin-created tour packages.

| Field       | Type     | Description                      |
| ----------- | -------- | -------------------------------- |
| title       | String   | Trip title                       |
| description | String   | Trip overview                    |
| price       | Number   | Price in BDT                     |
| tripType    | String   | Adventure / Relaxation / etc     |
| days        | Number   | Number of days                   |
| location    | String   | Tour location                    |
| gallery     | [String] | Image URLs                       |
| tourPlan    | [Object] | Day-wise plan (day + activities) |
| createdAt   | Date     | Timestamp                        |

---

## 📁 bookings

Tourist bookings, linked to packages & guides.

| Field         | Type     | Description                               |
| ------------- | -------- | ----------------------------------------- |
| packageId     | ObjectId | Ref to packages                           |
| packageName   | String   | Cached package title                      |
| touristId     | ObjectId | Ref to users                              |
| touristName   | String   | Cached tourist name                       |
| touristEmail  | String   | Cached tourist email                      |
| touristPhoto  | String   | Profile picture                           |
| guideId       | ObjectId | Ref to tour-guide                         |
| guideName     | String   | Cached guide name                         |
| price         | Number   | Booking price                             |
| tourDate      | Date     | Tour date                                 |
| status        | String   | pending / in-review / accepted / rejected |
| paymentStatus | String   | paid / unpaid                             |
| transactionId | String   | Stripe TXN ID                             |
| createdAt     | Date     | Timestamp                                 |

---

## 📁 stories

Stories submitted by users or guides.

| Field       | Type     | Description         |
| ----------- | -------- | ------------------- |
| title       | String   | Story title         |
| description | String   | Text/Description    |
| images      | [String] | Uploaded image URLs |
| userId      | ObjectId | Ref to users        |
| userName    | String   | Cached user name    |
| userPhoto   | String   | Profile picture     |
| createdAt   | Date     | Timestamp           |

---

## 📁 applications

Tour guide join requests.

| Field     | Type     | Description                   |
| --------- | -------- | ----------------------------- |
| userId    | ObjectId | Ref to users                  |
| title     | String   | Application headline          |
| reason    | String   | Motivation to apply           |
| cvLink    | String   | External link to CV           |
| status    | String   | pending / accepted / rejected |
| createdAt | Date     | Timestamp                     |

---

## 📁 payments

Stripe payment records.

| Field         | Type     | Description           |
| ------------- | -------- | --------------------- |
| bookingId     | ObjectId | Linked booking        |
| amount        | Number   | Payment amount        |
| email         | String   | User email            |
| transactionId | String   | Stripe transaction ID |
| date          | Date     | Timestamp             |

---

## 📁 announcements _(Optional)_

Admin announcements or offers.

| Field     | Type   | Description                                                 |
| --------- | ------ | ----------------------------------------------------------- |
| title     | String | Title of the announcement                                   |
| message   | String | Main content/message                                        |
| target    | String | Role target: one of `'all'`, `'tourist'`, or `'tour-guide'` |
| createdAt | Date   | Auto-generated timestamp                                    |

## 📌 Relationships Summary

- `users` ←→ `bookings`, `stories`, `applications`
- `bookings` ←→ `packages`, `users`, `payments`
- `stories` ←→ `users`
- `applications` ←→ `users`

---

> 📎 Keep this file updated as you evolve your project. This is useful for onboarding new devs, debugging, and writing APIs
```

### `deployment.md`
```md
# 🚀 Deployment Info

## ✅ Live Server URL

https://deshguide-server.vercel.app/

## 📦 Platform

[Vercel](https://vercel.com)

## 🌐 Status

- Last Deployed: <!-- You can add date manually or auto-update via script -->
- Branch: `main`
```

### `Requirement.md`
```md
# 🧭 Tourism Management System — assignment12_category_003

## 📽️ Requirement Explanation Video

[📺 Watch the Explanation Video](https://drive.google.com/file/d/14qDDk_X7epplTmbyCc4nIV2RVYSzn46H/view)

---

## 🧩 Project Overview

The **Tourist Guide** site is an online platform to help travelers explore **Bangladesh**. It provides:

- Detailed tourist destination info
- Cultural insights, food, activities
- Famous landmarks & hidden gems

---

## ✅ Key Rules

| Criteria                   | Minimum Required                                                                              |
| -------------------------- | --------------------------------------------------------------------------------------------- |
| Client Side GitHub Commits | 20 notable commits                                                                            |
| Server Side GitHub Commits | 12 notable commits                                                                            |
| `README.md`                | ✅ Website Name<br>✅ Admin Credentials<br>✅ Live Site URL<br>✅ At least 10 bullet features |
| Responsiveness             | ✅ Mobile<br>✅ Tablet<br>✅ Desktop<br>✅ Dashboard Responsive                               |
| Private Route Persistence  | ✅ After reload, user stays logged in                                                         |
| Secure Keys                | ✅ Firebase & MongoDB credentials via `.env`                                                  |
| No Lorem Ipsum             | ❌ Don't use placeholder text                                                                 |
| Notifications              | ✅ Use SweetAlert/Toasts (❌ No default browser alerts)                                       |
| Data Fetching (GET only)   | ✅ Use TanStack Query                                                                         |

---

## 👥 User Roles

- **Tourist (Normal User)**
- **Tour Guide**
- **Admin**

---

## 📐 Layouts

### 1. Basic Layout

- **Navbar**: Logo + Website Name, `Home`, `Community`, `About Us`, `Trips`, `Login/Register`
- **Profile Dropdown**:
  - Dashboard
  - Offer Announcements _(optional)_
  - Username & Email (not clickable)
  - Logout

- **Footer**: Logo + Useful Developer Social Links

### 2. Dashboard Layout

- Sidebar + Footer + Dynamic content via routes

---

## 🔐 Authentication

- Register with: name, email, image, password
- Login: email + password + Google login
- Password validations (strong passwords)
- Token-based auth (JWT) stored in `localStorage`
- On logout: remove token
- Forgot password feature
- Redirect to previous page or homepage after login

---

## 🏠 Home Page Structure

### 1. Banner/Slider

- Design based on your theme

### 2. Overview Section

- Include a video or multimedia overview of your platform

### 3. Tourism & Travel Guide Tabs

#### 🔹 Our Packages

- Use MongoDB `$sample` to show **3 random packages** each visit
- Card format: Photo, Tour Type, Title, Price, `View Package` button
- `View Package` ➜ navigates to **Package Details Page**

#### 🔹 Meet Our Tour Guides

- Show **6 random guides**
- Relevant info + `Details` button ➜ goes to **Tour Guide Profile**

### 4. Tourist Story Section

- Show **4 random stories** with:
  - Share button via `react-share` (Facebook)
  - Only logged-in users can share
  - `All Stories` ➜ navigates to **Community Page**

### 5. Additional Custom Sections

- Add 2 sections based on tourism concepts

---

## 🗺️ Package Details Page

### Gallery Section

- Show multiple images of the tour (no design copy-paste)

### About the Tour

- Give detailed tour information

### Tour Plan

- Day-wise structured breakdown (custom design)

### Tour Guide List

- Clickable guide list ➜ goes to **Guide Profile**

### Booking Form

| Field             | Type        |
| ----------------- | ----------- |
| Package Name      | Auto-filled |
| Tourist Name      | Read-only   |
| Tourist Email     | Read-only   |
| Tourist Image/URL | Read-only   |
| Price             | Manual      |
| Tour Date         | Date picker |
| Tour Guide Name   | Dropdown    |

- `Book Now` ➜ Auth-protected
- On booking:
  - Save with status = `pending`
  - Show modal: "Confirm your Booking"
  - Show link ➜ **My Bookings Page**

---

## 👥 Community Page

- Show all shared stories
- Allow sharing via `react-share`

---

## 🧑‍💻 About Us Page

- Developer Info
- Number of projects
- Project links

---

## 🌏 All Trips Page

- Show all packages as cards
- Each card ➜ navigates to **Package Details Page**

---

## 👨‍✈️ Tour Guide Profile Page

- Relevant guide info
- Show their added stories

---

## 🧑‍💼 Tourist Dashboard (Protected)

### Dashboard Routes:

1. **Manage Profile**
   - Welcome message
   - Info, picture, role
   - Edit modal (except email & role)
   - `Join as Tour Guide` ➜ form route

2. **My Bookings**

| Field        | Description                     |
| ------------ | ------------------------------- |
| Package Name | Tour Package Name               |
| Guide Name   | Selected Tour Guide Name        |
| Tour Date    | Selected Tour Date              |
| Tour Price   | Package Price                   |
| Status       | In Review / Rejected / Accepted |
| Actions      | Pay, Cancel (if pending)        |

- Pay ➜ Payment Route (Stripe)
- On success ➜ Change status to `in review`

3. **Add Stories**
   - Title, Description, Multiple Images
   - Save ➜ Go to `Manage Stories`

4. **Manage Stories**
   - Cards of user's stories
   - Edit ➜ separate route
     - Remove images using `$pull`
     - Add images using `$push`
   - Delete ➜ permanently remove

5. **Join as Tour Guide**
   - Form: Title, Why become a guide, CV link
   - Submit ➜ Show modal

---

## 🧭 Tour Guide Dashboard (Protected)

### Dashboard Routes:

1. **Manage Profile** (same as Tourist)

2. **My Assigned Tours**

| Field        | Description                               |
| ------------ | ----------------------------------------- |
| Package Name | Name                                      |
| Tourist Name | Name                                      |
| Tour Date    | Date                                      |
| Price        | Price                                     |
| Status       | Pending / In Review / Accepted / Rejected |
| Actions      | Accept, Reject                            |

- Accept ➜ Enabled if `in review`
- Reject ➜ Show modal, set status to `rejected`

3. **Add / Manage Stories** (same as Tourist)

---

## 👑 Admin Dashboard (Protected)

### Dashboard Routes:

1. **Manage Profile**
   - Welcome message
   - Show statistics:

| Metric            | Description         |
| ----------------- | ------------------- |
| Total Payment     | Sum of all payments |
| Total Tour Guides | Count guides        |
| Total Packages    | Count all packages  |
| Total Clients     | Count tourists      |
| Total Stories     | Count all stories   |

- Edit modal (except email & role)

2. **Add Package**
   - Package form ➜ Submit to save

3. **Manage Users**
   - Table: info + roles
   - Search by Name/Email
   - Filter by Role (Dropdown with `react-select`)

4. **Manage Candidates**
   - Applications Table
     - Accept ➜ Change role to `tour-guide` & remove application
     - Reject ➜ Remove application

---

## 🧪 Challenge Requirements

| Feature                           | Requirement                               |
| --------------------------------- | ----------------------------------------- |
| Pagination                        | Show 10 items per page on all tables      |
| JWT Auth                          | Use `localStorage`                        |
| Booking Milestone Reward          | If booked >3 times ➜ show confetti modal  |
| Framer Motion / React Spring etc. | Must be used in at least homepage section |

---

## ⭐ Optional Features

- Swiper / react-awesome-slider / light gallery
- Axios Interceptor
- Notification for Offer Announcements

---

## ✅ What to Submit

| Field                        | Example                         |
| ---------------------------- | ------------------------------- |
| **Admin Email**              | `admin@example.com`             |
| **Admin Password**           | `********`                      |
| **Live Site URL**            | `https://your-project.web.app`  |
| **Client GitHub Repository** | `https://github.com/.../client` |
| **Server GitHub Repository** | `https://github.com/.../server` |
```
