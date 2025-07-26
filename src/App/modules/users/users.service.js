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

const getAllTourGuidesFromDB = async () => {
  const guides = await User.find({ role: "tour-guide" }).sort({
    createdAt: -1,
  });

  if (!guides || guides.length === 0) {
    throw new Error("No tour guides found");
  }

  return guides;
};
// ✅ Get All Users
/* const getAllUsersFromDB = async () => {
  const res = await User.find().sort({ createdAt: -1 });
  if (!res) {
    throw new Error("User not found");
  }
  return res;
}; */

const getAllUsersFromDB = async (filters = {}) => {
  const { searchTerm, role } = filters;

  const query = {};

  if (searchTerm) {
    query.$or = [
      { name: { $regex: searchTerm, $options: "i" } },
      { email: { $regex: searchTerm, $options: "i" } },
    ];
  }

  if (role) {
    query.role = role;
  }

  const users = await User.find(query).sort({ createdAt: -1 });

  if (!users) throw new Error("Users not found");
  return users;
};

// ✅ Get Single User by ID
const getUserByIdFromDB = async (id) => {
  const res = await User.findById(id);
  if (!res) {
    throw new Error("User not found");
  }
  return res;
};

const getUserByEmailFromDB = async (email) => {
  const res = await User.findOne({
    email,
  });
  if (!res) {
    throw new Error("User not found");
  }
  return res;
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
  getUserByEmailFromDB,
  getAllTourGuidesFromDB,
};
