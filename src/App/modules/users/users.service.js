// src/App/modules/users/users.service.js
import { User } from "./users.model.js";
// ✅ Get All Users
// src/App/modules/users/users.service.js
const createUserIntoDB = async (data) => {
  const existingUser = await User.findOne({ email: data?.email });

  if (existingUser) {
    existingUser.last_loggedIn = new Date();
    await existingUser.save();
    return {
      user: existingUser,
      alreadyExisted: true,
    };
  }

  const newUser = await User.create({
    ...data,
    last_loggedIn: new Date(),
  });

  return {
    user: newUser,
    alreadyExisted: false,
  };
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
  const updatedUser = await User.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });

  if (!updatedUser) {
    throw new Error("User not found");
  }

  return updatedUser;
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
