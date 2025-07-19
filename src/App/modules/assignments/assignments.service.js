import Assignment from "./assignments.model.js";

// ✅ Create Assignment
const createAssignmentIntoDB = async (data) => {
  const assignment = new Assignment(data);
  return await assignment.save();
};

// ✅ Get All Assignments
/* const getAllAssignmentsFromDB = async (filter = {}) => {
  return await Assignment.find(filter).sort({ createdAt: -1 });
}; */

// ✅ Enhanced Get All Assignments
const getAllAssignmentsFromDB = async (filter = {}) => {
  const query = {};

  // Filter by difficulty
  if (filter.difficulty) {
    query.difficulty = filter.difficulty;
  }

  // Search by title (case-insensitive)
  if (filter.searchTerm) {
    query.title = { $regex: filter.searchTerm, $options: "i" };
  }

  return await Assignment.find(query).sort({ createdAt: -1 });
};

// ✅ Get Single Assignment by ID
const getAssignmentByIdFromDB = async (id) => {
  return await Assignment.findById(id);
};

// ✅ Update Assignment
const updateAssignmentIntoDB = async (id, updatedData) => {
  return await Assignment.findByIdAndUpdate(id, updatedData, {
    new: true,
    runValidators: true,
  });
};

// ✅ Delete Assignment (Only if creator matches)
const deleteAssignmentFromDB = async (id, email) => {
  const assignment = await Assignment.findById(id);
  if (!assignment) {
    throw new Error("Assignment not found");
  }
  if (assignment?.creatorEmail !== email) {
    throw new Error("Oops! Only the creator can delete this assignment.");
  }

  return await Assignment.findByIdAndDelete(id);
};

export const AssignmentServices = {
  createAssignmentIntoDB,
  updateAssignmentIntoDB,
  getAssignmentByIdFromDB,
  getAllAssignmentsFromDB,
  deleteAssignmentFromDB,
};
