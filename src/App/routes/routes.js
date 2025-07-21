import { AssignmentRoutes } from "../modules/assignments/assignments.route.js";
import { AuthRoutes } from "../modules/auth/auth.routes.js";
import { SubmissionRoutes } from "../modules/submission/submission.route.js";
import { UserRoutes } from "../modules/users/users.route.js";
import { PackageRoutes } from "../modules/packages/packages.route.js";
import { BookingRoutes } from "../modules/bookings/bookings.route.js";
import { TourGuideRequestRoutes } from "../modules/tourGuideRequest/tourGuideRequest.route.js";
import { PaymentRoutes } from "../modules/payments/payments.route.js";

// Define all routes in one config array
export const routes = [
  { path: "/api/v1/auth", route: AuthRoutes },
  { path: "/api/v1/assignments", route: AssignmentRoutes },
  { path: "/api/v1/submission", route: SubmissionRoutes },
  { path: "/api/v1/users", route: UserRoutes },
  { path: "/api/v1/packages", route: PackageRoutes },
  { path: "/api/v1/bookings", route: BookingRoutes },
  { path: "/api/v1/tour-guide-requests", route: TourGuideRequestRoutes },
  {
    path: "/api/v1/tour-guide-requests/:id",
    route: PaymentRoutes,
  },
];
