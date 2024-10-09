
exports.dashboard = (req, res, next) => {
    const error     = req.flash('error');
    const success     = req.flash('success');

        session = req.session;
        if(!session.arrunadmin) {
            res.redirect("/admin/login");
        }
        res.render('admin/dashboard/dashboard_view',{error,success});
   
}; 
