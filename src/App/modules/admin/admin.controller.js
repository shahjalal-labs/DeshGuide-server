import sendResponse from "../../utils/sendResponse.js";
import { Payment } from "../payments/payments.model.js";
import { User } from "../users/users.model.js";
import { Package } from "../packages/package.model.js";
import { Story } from "../stories/stories.model.js";

const getDashboardStats = async (req, res, next) => {
  try {
    // Get all statistics in parallel
    const [
      totalPayment,
      totalTourGuides,
      totalPackages,
      totalClients,
      totalStories,
    ] = await Promise.all([
      // Total Payment (sum of all payments)
      Payment.aggregate([
        {
          $group: {
            _id: null,
            total: { $sum: "$amount" },
          },
        },
      ]),

      // Total Tour Guides (count of tour-guide users)
      User.countDocuments({ role: "tour-guide" }),

      // Total Packages
      Package.countDocuments(),

      // Total Clients (count of tourist users)
      User.countDocuments({ role: "tourist" }),

      // Total Stories
      Story.countDocuments(),
    ]);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Dashboard statistics retrieved successfully",
      data: {
        totalPayment: totalPayment[0]?.total || 0,
        totalTourGuides,
        totalPackages,
        totalClients,
        totalStories,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const AdminController = {
  getDashboardStats,
};
