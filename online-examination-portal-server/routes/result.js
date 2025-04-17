const router = require('express').Router();

const {
    getResult,
    getSingleResult,
    getResultForOneStudent,
    getTotalStudentExams,
    studentResultForExaminer
} = require('../controllers/result');

router.route('/submit/:examID').post(getResult);
router.route('/:resultID').get(getSingleResult);
router.route('/student/:studentID').get(getResultForOneStudent);
router.route('/examiner/:examinerID').get(studentResultForExaminer);
router.route('/student/:studentID/exam/:examID').get(getTotalStudentExams);

module.exports = router;