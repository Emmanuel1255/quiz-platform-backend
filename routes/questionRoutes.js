const express = require('express');
const router = express.Router();
const { protect, lecturer } = require('../middlewares/authMiddleware');
const { upload } = require('../middlewares/uploadMiddleware');
const {
  updateQuestion,
  deleteQuestion,
  bulkUploadQuestions,
} = require('../controllers/questionController');

// Protect all question routes
router.use(protect);

router.route('/:id')
  .put(lecturer, updateQuestion)
  .delete(lecturer, deleteQuestion);

  router.post(
    '/:quizId/questions/bulk-upload',
    protect,
    lecturer,
    upload.single('questions'), // 'questions' is the name of the file field in the form
    bulkUploadQuestions
  );

module.exports = router;