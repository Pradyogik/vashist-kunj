const { query } = require("express");
var config = require('../../../config');
var commonFunction = require('../../../common_function/common');


exports.landAdd = (req, res, next) => {

    console.log("req.method");
    console.log(req.body);
   // return;

   const pageSize = 5;
   const currentPage = parseInt(req.query.page) || 1;


    if(req.method == 'POST'){

        var formData = req.body;
        var land_category = "'" + formData.land_category + "'";

        var data ="INSERT INTO vk_land_category(land_category) VALUES (" + land_category + ")";

        // console.log(data);
        // return;

            config.query(data, function (error, save) {
                if (error) {
                    console.error(error.message);
                    return;
                }
                else {
                    req.flash('success', 'Record successfully saved');
                    res.redirect('/admin/land-category');
                }

            });  
            
         

             }else{

        
                          var land_data = "SELECT * FROM vk_land_category";
                         console.log(land_data);

            config.query(land_data, function (error, servicedata) {
                if (error) {
                    console.error(error.message);
                    return;
                }
                else {
                    servicename = servicedata;
                }
                paginate(land_data, currentPage, pageSize, function (paginatedItems, totalPage) {
                
                        if (error) {
                            console.error(error.message);
                            return;
                        }
                        else {
                            paginatedItems = paginatedItems;
                            console.log("paginatedItems");
                            console.log(paginatedItems);
                                        
                        }
                    var error = req.flash('error');
                    var success = req.flash('success');
                    res.render('admin/masters/land_category', { error, success, list: paginatedItems,servicelist: servicename, currentPage,  totalPages: Math.ceil(totalPage / pageSize), pageSize, active: 'land_category' });            
                });
            
            });
           
    }

};

