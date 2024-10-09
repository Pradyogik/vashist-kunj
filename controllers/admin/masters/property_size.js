const { query } = require("express");
var config = require('../../../config');
var commonFunction = require('../../../common_function/common');


exports.PropertySizeAdd = (req, res, next) => {

    console.log("req.method");
    console.log(req.body);
   // return;

   const pageSize = 5;
   const currentPage = parseInt(req.query.page) || 1;


    if(req.method == 'POST'){

        var formData = req.body;
        var property_size = "'" + formData.property_size + "'";
        var unit_id = "'" + formData.unit_id + "'";

        var data = "INSERT INTO vk_property_size_master(property_size, unit_id) VALUES ("+ property_size +','+ unit_id +")";


        // console.log(data);
        // return;

            config.query(data, function (error, save) {
                if (error) {
                    console.error(error.message);
                    return;
                }
                else {
                    req.flash('success', 'Record successfully saved');
                    res.redirect('/admin/property-size');
                }

            });  
            
         

             }else{

        
                          var property_data = "SELECT * FROM vk_property_size_master LEFT JOIN vk_unit_master ON vk_unit_master.id = vk_property_size_master.unit_id;";
                          var unit_data = "SELECT * FROM vk_unit_master;";

                          console.log(property_data);

            config.query(property_data, function (error, servicedata) {
                if (error) {
                    console.error(error.message);
                    return;
                }
                else {
                    servicename = servicedata;
                }

                config.query(unit_data, function (error, unitdata) {
                    if (error) {
                        console.error(error.message);
                        return;
                    }
                    else {
                        unitname = unitdata;
                    }
                paginate(property_data, currentPage, pageSize, function (paginatedItems, totalPage) {
                
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
                    res.render('admin/masters/property_size', { error, success, list: paginatedItems,servicelist: servicename, unitlist: unitname, currentPage,  totalPages: Math.ceil(totalPage / pageSize), pageSize, active: 'property_size' });            
                });
            });
            });
           
    }

};

