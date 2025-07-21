// src/App/routes/routes.js
import { AssignmentRoutes } from "../modules/assignments/assignments.route.js";
import { AuthRoutes } from "../modules/auth/auth.routes.js";
import { SubmissionRoutes } from "../modules/submission/submission.route.js";
import { UserRoutes } from "../modules/users/users.route.js";
import { PackageRoutes } from "../modules/packages/packages.route.js";
import { BookingRoutes } from "../modules/bookings/bookings.route.js";
import { TourGuideRequestRoutes } from "../modules/tourGuideRequest/tourGuideRequest.route.js";
import { PaymentRoutes } from "../modules/payments/payments.route.js";
import { StoryRoutes } from "../modules/stories/stories.route.js";

export const routes = [
  { path: "/auth", route: AuthRoutes },
  { path: "/assignments", route: AssignmentRoutes },
  { path: "/submission", route: SubmissionRoutes },
  { path: "/users", route: UserRoutes },
  { path: "/packages", route: PackageRoutes },
  { path: "/bookings", route: BookingRoutes },
  { path: "/tour-guide-requests", route: TourGuideRequestRoutes },
  { path: "/payments", route: PaymentRoutes },
  { path: "/stories", route: StoryRoutes },
];
