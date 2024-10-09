var express         = require('express');
var router          = express.Router();

var extra	    = require('../../controllers/admin/extra/extra');

router.get('/feedback-list', extra.feedbackList);
router.get('/changeFeedbackStaus',extra.changeFeedbackStaus);
router.get('/delete-Feedback', extra.feedbackDelete);


module.exports = router;