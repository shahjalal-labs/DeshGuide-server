const createRequest = catchAsync(async (req, res) => {
  const result = await service.createTourGuideRequest(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Request submitted successfully",
    data: result,
  });
});

const getAllRequests = catchAsync(async (req, res) => {
  const result = await service.getAllTourGuideRequests();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "All requests fetched",
    data: result,
  });
});

const getRequestById = catchAsync(async (req, res) => {
  const result = await service.getTourGuideRequestById(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Request fetched",
    data: result,
  });
});

const updateStatus = catchAsync(async (req, res) => {
  const { status } = req.body;
  const result = await service.updateTourGuideRequestStatus(
    req.params.id,
    status,
  );
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Status updated",
    data: result,
  });
});

const deleteRequest = catchAsync(async (req, res) => {
  const result = await service.deleteTourGuideRequest(req.params.id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Request deleted",
    data: result,
  });
});

export const TourGuideRequestControllers = {
  createRequest,
  getAllRequests,
  getRequestById,
  updateStatus,
  deleteRequest,
};
