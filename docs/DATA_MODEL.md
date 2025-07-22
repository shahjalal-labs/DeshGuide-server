# 🧩 Data Model – Tourism Management System

This document outlines all MongoDB collections and their fields used in the backend.

---

## 📁 users

Stores all users including tourists, guides, and admins.

| Field         | Type   | Description                                 |
| ------------- | ------ | ------------------------------------------- |
| name          | String | Full name                                   |
| email         | String | Unique email                                |
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
