const sendResponse = (
  res,
  { success = true, message = "Request is successful", data = {} },
) => {
  res.status(200).json({ success, message, data });
};

export default sendResponse;
