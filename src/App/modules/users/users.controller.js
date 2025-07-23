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

// getUserByEmailFromDB;
const getUserByEmail = async (req, res, next) => {
  try {
    const result = await UserServices.getUserByIdFromDB(req.params.email);
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
  getUserByEmail,
};
