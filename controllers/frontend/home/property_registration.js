const { query } = require("express");
var config = require('../../../config');
var commonFunction = require('../../../common_function/common');



exports.aplication_registration_form = (req, res, next) => {
    session = req.session;
    console.log(session);
    if (!session.ayodhyalandproperty) {
        req.flash('error', 'Please Login first ');
		res.redirect("/login");
	}
    var error = req.flash('error');
    var success = req.flash('success');
    //console.log(servicename);
    res.render('frontend/pages/aplication_registration_form', { error, success,  active: 'aplication_registration_form' });

};

exports.pg = (req, res, next) => {
    session = req.session;
    console.log(session);
    if (!session.ayodhyalandproperty) {
        req.flash('error', 'Please Login first ');
		res.redirect("/login");
	}
    var error = req.flash('error');
    var success = req.flash('success');
    //console.log(servicename);
    res.render('frontend/pages/pg', { error, success,  active: 'pg' });

};

exports.Demo = (req, res, next) => {
    var error = req.flash('error');
    var success = req.flash('success');
    //console.log(servicename);
    res.render('frontend/pages/demo ', { error, success,  active: 'demo ' });

};

exports.schemeList = (req, res, next) => {
    var error = req.flash('error');
    var success = req.flash('success');
    //console.log(servicename);
    res.render('frontend/pages/scheme_list', { error, success,  active: 'scheme_list' });

};

exports.schemeParticipation = (req, res, next) => {
    var error = req.flash('error');
    var success = req.flash('success');
    //console.log(servicename);
    res.render('frontend/pages/scheme_participation', { error, success,  active: 'scheme_participation' });

};

exports.schemePayment = (req, res, next) => {
    var error = req.flash('error');
    var success = req.flash('success');
    //console.log(servicename);
    res.render('frontend/pages/scheme_payment', { error, success,  active: 'scheme_payment' });

};

exports.schemeBrochure = (req, res, next) => {
    var error = req.flash('error');
    var success = req.flash('success');
    //console.log(servicename);
    res.render('frontend/pages/scheme_brochure', { error, success,  active: 'scheme_brochure' });

};

exports.schemeAdvancefee = (req, res, next) => {
    var error = req.flash('error');
    var success = req.flash('success');
    //console.log(servicename);
    res.render('frontend/pages/scheme_advance_fee', { error, success,  active: 'scheme_advance_fee' });

};