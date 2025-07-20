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
