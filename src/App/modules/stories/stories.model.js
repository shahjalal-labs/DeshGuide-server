//
import { Schema, model } from "mongoose";

const storySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      immutable: true, // ❌ Cannot be changed after creation
    },
    userName: {
      type: String,
      required: true,
      immutable: true, // ❌ Prevent mutation
    },
    userPhoto: {
      type: String,
      required: true,
      immutable: true, // ❌ Prevent mutation
    },
  },
  {
    timestamps: true,
  },
);

export const Story = model("Story", storySchema);

// import { Schema, model } from "mongoose";
// const storySchema = new Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: true,
//     },
//     images: {
//       type: [String],
//       default: [],
//     },
//     userId: {
//       type: Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },
//     userName: {
//       type: String,
//       required: true,
//     },
//     userPhoto: {
//       type: String,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   },
// );
//
// export const Story = model("Story", storySchema);
