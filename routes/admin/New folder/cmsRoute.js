var express         = require('express');
var router          = express.Router();

var cms	    = require('../../controllers/admin/cms/cms');

router.get('/pages', cms.pages);
router.get('/pages/add', cms.pagesAdd);
router.post('/pages/add', cms.pagesAdd);

router.get('/pages/edit/:id?', cms.pagesEdit);
router.post('/pages/edit/:id?', cms.pagesEdit);

router.get('/pages/delete/:id?', cms.pagesDelete);

router.get('/cms', cms.cmsAdd);
router.get('/cms/add', cms.cmsAdd);
router.post('/cms/add', cms.cmsAdd);
router.get('/cms/edit/:id?', cms.cmsEdit);
router.post('/cms/edit/:id?', cms.cmsEdit);
router.get('/cms/delete/:id?', cms.cmsDelete);
router.get('/cms/changeCmsStaus/:id?', cms.cmsChangeCmsStaus);

router.get('/slider', cms.slider);
router.get('/slider/add', cms.sliderAdd);
router.post('/slider/add', cms.sliderAdd);

router.get('/slider/edit/:id?', cms.sliderEdit);
router.post('/slider/edit/:id?', cms.sliderEdit);


router.get('/about', cms.about);
router.get('/about/add', cms.aboutAdd);
router.post('/about/add', cms.aboutAdd);

router.get('/about/edit/:id?', cms.aboutEdit);
router.post('/about/edit/:id?', cms.aboutEdit);


router.get('/contact', cms.contactAdd);
router.get('/contact/add', cms.contactAdd);
router.post('/contact/add', cms.contactAdd);
router.get('/contact/edit/:id?', cms.contactEdit);
router.post('/contact/edit/:id?', cms.contactEdit);



router.get('/about-tribe', cms.abouttribeAdd);
router.get('/about-tribe/add', cms.abouttribeAdd);
router.post('/about-tribe/add', cms.abouttribeAdd);
router.get('/about-tribe/edit/:id?', cms.abouttribeEdit);
router.post('/about-tribe/edit/:id?', cms.abouttribeEdit);
router.get('/about-tribe/delete/:id?', cms.abouttribeDelete);
router.post('/about-tribe/delete/:id?', cms.abouttribeDelete);


router.get('/faq', cms.faqAdd);
router.get('/faq/add', cms.faqAdd);
router.post('/faq/add', cms.faqAdd);
router.get('/faq/edit/:id?', cms.faqEdit);
router.post('/faq/edit/:id?', cms.faqEdit);
router.get('/faq/delete/:id?', cms.faqDelete);
router.post('/faq/delete/:id?', cms.faqDelete);


router.get('/government-schemes-for-tribe', cms.governmentschemesAdd);
router.get('/government-schemes-for-tribe/add', cms.governmentschemesAdd);
router.post('/government-schemes-for-tribe/add', cms.governmentschemesAdd);
router.get('/government-schemes-for-tribe/edit/:id?', cms.governmentschemesEdit);
router.post('/government-schemes-for-tribe/edit/:id?', cms.governmentschemesEdit);
router.get('/government-schemes-for-tribe/delete/:id?', cms.governmentschemesDelete);
router.post('/government-schemes-for-tribe/delete/:id?', cms.governmentschemesDelete);

router.get('/media-room', cms.mediaroomAdd);
router.get('/media-room/add', cms.mediaroomAdd);
router.post('/media-room/add', cms.mediaroomAdd);
router.get('/media-room/edit/:id?', cms.mediaroomEdit);
router.post('/media-room/edit/:id?', cms.mediaroomEdit);
router.get('/media-room/delete/:id?', cms.mediaroomDelete);
router.post('/media-room/delete/:id?', cms.mediaroomDelete);

router.get('/privacy-policy', cms.privacypolicyAdd);
router.get('/privacy-policy/add', cms.privacypolicyAdd);
router.post('/privacy-policy/add', cms.privacypolicyAdd);
router.get('/privacy-policy/edit/:id?', cms.privacypolicyEdit);
router.post('/privacy-policy/edit/:id?', cms.privacypolicyEdit);
router.get('/privacy-policy/delete/:id?', cms.privacypolicyDelete);
router.post('/privacy-policy/delete/:id?', cms.privacypolicyDelete);

router.get('/term-condition', cms.termconditionAdd);
router.get('/term-condition/add', cms.termconditionAdd);
router.post('/term-condition/add', cms.termconditionAdd);
router.get('/term-condition/edit/:id?', cms.termconditionEdit);
router.post('/term-condition/edit/:id?', cms.termconditionEdit);
router.get('/term-condition/delete/:id?', cms.termconditionDelete);
router.post('/term-condition/delete/:id?', cms.termconditionDelete);

module.exports = router;