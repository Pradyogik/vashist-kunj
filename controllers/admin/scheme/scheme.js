const { query } = require("express");
var config = require('../../../config');
var commonFunction = require('../../../common_function/common');


exports.schemeList = (req, res, next) => {

    console.log("req.method");
    console.log(req.body);
   // return;

       const pageSize = 15;
       const currentPage = parseInt(req.query.page) || 1;
        
         var scheme_data = "SELECT vs.*, vlc.land_category, vum.unit FROM vk_scheme as vs LEFT JOIN vk_land_category as vlc ON vlc.id = vs.land_category_id LEFT JOIN vk_unit_master as vum ON vum.id = vs.total_area_unit_id";
         console.log(scheme_data);

        config.query(scheme_data, function (error, servicedata) {
            if (error) {
                console.error(error.message);
                return;
            }
            else {
                servicename = servicedata;
            }
            paginate(scheme_data, currentPage, pageSize, function (paginatedItems, totalPage) {
            
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
                res.render('admin/scheme/scheme_list', { error, success, list: paginatedItems,servicelist: servicename, currentPage,  totalPages: Math.ceil(totalPage / pageSize), pageSize, active: 'scheme_category' });            
            });
        
        });
};

exports.schemeAdd = (req, res, next) => {
    
    
    if(req.method == 'POST')
        {
            var plotDetailArr = [];
            var formData = req.body;
            //console.log(formData.number_of_reservcat_plots_1[0]);
            //process.exit(0);
            var parent_scheme_id        = formData.parent_scheme_id;
            var land_category_id        = formData.land_category_id;
            var title                   = formData.title;
            var scheme_code             = formData.scheme_code;
            var total_land_area         = formData.total_land_area;
            var total_area_unit_id      = formData.total_area_unit_id;
            var scheme_start_date       = formData.scheme_start_date;
            var scheme_end_date         = formData.scheme_end_date;
            var description             = formData.description;

            var sanquery = "INSERT INTO vk_scheme ( parent_scheme_id, land_category_id, title,scheme_code,total_land_area,total_area_unit_id,scheme_start_date,scheme_end_date,description ) VALUES ?";
        var sanArr = [
            [parent_scheme_id, land_category_id, title,scheme_code,total_land_area,total_area_unit_id,scheme_start_date,scheme_end_date,description]
        ];
             
             config.query(sanquery,[sanArr],function(error,result){
                if (error) 
                {
                    req.flash('error', 'Some thing went wrong,please try again latter.');
                    res.redirect("/admin/scheme-add");
                }
                else   
                {
                  var lastid =  result.insertId;
                } 

                var sizeIdArr         = formData.sizemasterid;
                var sizeCount         = sizeIdArr.length;
                var reservCatIdArr    = formData.reservcatmasterid_1;
                var cntcat = reservCatIdArr.length;
				console.log(sizeCount);
                if(lastid)
                {
                   var prtArr = [];
                   for(s=0;s<sizeCount;s++)
                   {
                      var pltSizeId = formData.sizemasterid[s];

                      for(j=1; j <= cntcat; j++)
                      {
                         var catIdKey = `reservcatmasterid_${j}`; 
                         var catIdVal = formData[catIdKey][s]; 
                         var plotKey = `number_of_reservcat_plots_${j}`;
                         var plotVal = formData[plotKey][s];
                         prtArr.push([lastid, pltSizeId, catIdVal, plotVal]); 
                      }
                   }

                   

                   var instQry = "INSERT INTO scheme_land_distribution (scheme_id,plot_size_id, reserve_category_id, number_of_plots_reserve) VALUES ?";
                       
                    config.query(instQry, [prtArr], function (error) {
                            if (error) {
                                console.error(error.message);
                                return;
                            }

                        });

                 }

                if(lastid){

                    for (i = 0; i < sizeCount; i++) {

                        var plotSizeId      = formData.sizemasterid[i];
                        var totalplots      = formData.total_plots[i];
                        var freeHoldPlots   = formData.free_hold_total_plots[i];
                       
                        plotDetailArr.push([lastid, plotSizeId, totalplots, freeHoldPlots]);

                    }



                    var batchinsert = "INSERT INTO scheme_plot_details (scheme_id,plot_size_id, total_plots, free_hold_total_plots) VALUES ?";
                       
                    config.query(batchinsert, [plotDetailArr], function (error) {
                            if (error) {
                                console.error(error.message);
                                return;
                            }

                            req.flash('success', 'The scheme data has been added successfully.');
                            res.redirect("/admin/scheme");

                        });


                }  


                
            });  

        }
        else
        {
    
            var scheme_data = "SELECT * FROM vk_scheme where parent_scheme_id=0";
            var land_data = "SELECT * FROM vk_land_category";
            var property_data = "SELECT sm.*,um.unit FROM vk_property_size_master as sm LEFT JOIN vk_unit_master um ON um.id = sm.unit_id;";
           
           var unit_data = "SELECT * FROM vk_unit_master";
           var reserve_data = "SELECT * FROM vk_reserve_category";
            config.query(land_data, function (error, landdata) {
            if (error) {
            console.error(error.message);
            return;
            }
            else {
             landname = landdata;
            }
            config.query(property_data, function (error, propertydata) {
                if (error) {
                console.error(error.message);
                return;
                }
                else {
                propertyname = propertydata;
                }

                console.log();
               
                config.query(unit_data, function (error, unitdata) {
                    if (error) {
                    console.error(error.message);
                    return;
                    }
                    else {
                    unitname = unitdata;
                    }

                    config.query(reserve_data, function (error, reservedata) {
                        if (error) {
                        console.error(error.message);
                        return;
                        }
                        else {
                        reservename = reservedata;
                        }
                        config.query(scheme_data, function (error, schemedata) {
                            if (error) {
                            console.error(error.message);
                            return;
                            }
                            else {
                            schemename = schemedata;
                            }
                    var error = req.flash('error');
                    var success = req.flash('success');
                     res.render('admin/scheme/scheme_add', { error, success, landlist: landname,propertylist: propertyname,unitlist: unitname,reservelist: reservename,schemelist: schemename }); 
                 });
               });
              });
            });
          });
        } 
};

exports.viewdetails = (req, res, next) => {

      
  }  
