var express         = require('express');
var router          = express.Router();

var tribe 	    = require('../../controllers/admin/tribe/tribe');
var master 	    = require('../../controllers/admin/tribe/tribeMaster');

router.get('/', tribe.tribeList);
router.post('/', tribe.tribeList);
router.get('/add', tribe.tribeAdd);
router.post('/add', tribe.tribeAdd);

router.get('/edit/:id?', tribe.tribeEdit);
router.post('/edit/:id?', tribe.tribeEdit);

router.get('/delete/:id?', tribe.tribeDelete);

router.get('/changeTribeStaus/:id?', tribe.tribeChangeTribeStaus);
/*==========================================
    Masters Under Tribes
 ==========================================*/

 /*==========================================
    Masters Under Tribes
 ==========================================*/
 router.get('/master/traditions/:categorytype/:tribeid?/:id?', master.traditions);
 router.post('/master/traditions/:categorytype/:tribeid?/:id?', master.traditions);

 router.get('/master/folk-media/:categorytype/:tribeid?/:id?/:mediatype?', master.masterUplodAllMedia);
 router.post('/master/folk-media/:categorytype/:tribeid?/:id?/:mediatype?', master.masterUplodAllMedia);
 
 router.get('/master/traditionsDelete/:categorytype/:rowId?', master.traditionsDelete);

 
//  router.get('/master/folkmusic/:tribeid?/:id?', master.masterFolkMusic);
//  router.post('/master/folkmusic/:tribeid?/:id?', master.masterFolkMusic);
 
//  router.get('/master/folk-media/:tribeid?/:id?', master.masterUplodAllMedia);
//  router.post('/master/folk-media/:tribeid?/:id?', master.masterUplodAllMedia);

//  router.get('/master/folksong/:tribeid?/:id?', master.masterFolkSong);
//  router.post('/master/folksong/:tribeid?/:id?', master.masterFolkSong);

//  router.get('/master/folkdance/:tribeid?/:id?', master.masterFolkDance);
//  router.post('/master/folkdance/:tribeid?/:id?', master.masterFolkDance);

//  router.get('/master/folktales/:tribeid?/:id?', master.masterFolkTales);
//  router.post('/master/folktales/:tribeid?/:id?', master.masterFolkTales);

//  router.get('/master/folkTraditionalCostumes/:tribeid?/:id?', master.masterFolkTraditionalCostumes);
//  router.post('/master/folkTraditionalCostumes/:tribeid?/:id?', master.masterFolkTraditionalCostumes);

//  router.get('/master/folkRituals/:tribeid?/:id?', master.masterFolkRituals);
//  router.post('/master/folkRituals/:tribeid?/:id?', master.masterFolkRituals);

//  router.get('/master/folkFestivals/:tribeid?/:id?', master.masterFolkFestivals);
//  router.post('/master/folkFestivals/:tribeid?/:id?', master.masterFolkFestivals);

//  router.get('/master/folkCuisineDelicacies/:tribeid?/:id?', master.masterFolkCuisineDelicacies);
//  router.post('/master/folkCuisineDelicacies/:tribeid?/:id?', master.masterFolkCuisineDelicacies);

//  router.get('/master/folkHandicrafts/:tribeid?/:id?', master.masterFolkHandicrafts);
//  router.post('/master/folkHandicrafts/:tribeid?/:id?', master.masterFolkHandicrafts);

//  router.get('/master/folkHandicrafts/:tribeid?/:id?', master.masterFolkHandicrafts);
//  router.post('/master/folkHandicrafts/:tribeid?/:id?', master.masterFolkHandicrafts);

//  router.get('/master/folkFolkBooks/:tribeid?/:id?', master.masterFolkBooks);
//  router.post('/master/folkFolkBooks/:tribeid?/:id?', master.masterFolkBooks);
 
//  router.get('/master/folkScripts/:tribeid?/:id?', master.masterFolkScripts);
//  router.post('/master/folkScripts/:tribeid?/:id?', master.masterFolkScripts);
 
//  router.get('/master/folkLanguages/:tribeid?/:id?', master.masterFolkLanguages);
//  router.post('/master/folkLanguages/:tribeid?/:id?', master.masterFolkLanguages);

module.exports = router;