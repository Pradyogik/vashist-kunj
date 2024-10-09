<!DOCTYPE html>
<html lang="en">
  <?php $this->load->view('layouts/top-header');?>
  <?php $this->load->view('layouts/header');?>
  <style type="text/css">
    
    @media screen and  (max-width: 720px) and (min-width: 500px)  {
      .f-size30 {
      font-size: 20px !important;
      padding:20px 0 0 0!important;
      }
      .imghw{
      height: 50px;
      width: 50px;
      }
      }
    @media screen and (max-width: 500px) and (min-width: 220px)  {
    .f-size30 {
    font-size: 18px !important;
    padding:20px 0 0 0!important;
    }
    }
    .error{
      inline-size:-webkit-fill-available !important;
      color: red;
    }
  </style>
  <body>
    <div class="container-fluid page-header">
      <div class="container">
        <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 200px">
          <h3 class="display-4 text-white ">Book Now</h3>
          <div class="d-inline-flex text-white">
            <p class="m-0 text-uppercase"><a class="text-white" href="<?php echo base_url('home');?>">Home</a></p>
            <i class="fa fa-angle-double-right pt-1 px-3"></i>
            <p class="m-0 text-uppercase">Book Now</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid ">
      <div class="login-page bg-light ">
        <div class="container py-5">
           <!-- Status message -->
            <?php echo success();echo error();echo important(); echo critical();?>
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              
              <div class="bg-white shadow rounded">
                <div class="row">
                  <div class="col-md-8 pe-0">
                    <div class="form-left h-100 py-5 px-5">
                      <form method="post" action="<?php echo base_url('payment/index');?>" enctype="multipart/form-data" class="row g-4" novalidate="novalidate">
                        <div class="col-6">
                          <label>Full Name<span class="text-danger">*</span></label>
                          <div class="input-group">
                            <div class="input-group-text"><i class="fas fa-user-alt "></i></div>
                            <input type="text" class="form-control" name="full_name" id="full_name" placeholder="Enter Full Name" required>
                          </div>
                        </div>
                        
                        <div class="col-6">
                              <label>Address<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <div class="input-group-text"><i class="fas fa-home "></i></div>
                                <input type="text" class="form-control" placeholder="Enter Address" name="address" id="address" required>
                                                                 </div><div class="clearfix"></div><br>
                              </div>
                        
                              <div class="col-6">
                              <label>City<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <div class="input-group-text"><i class="fas fa-home "></i></div>
                                <input type="text" class="form-control" placeholder="Enter Address" name="city" id="city" required>
                                                                 </div><div class="clearfix"></div><br>
                              </div>
                              <div class="col-6">
                              <label>State<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <div class="input-group-text"><i class="fas fa-home "></i></div>
                                <input type="text" class="form-control" placeholder="Enter Address" name="state" id="state" required>
                                                                 </div><div class="clearfix"></div><br>
                              </div>
                              <div class="col-6">
                              <label>Pin code<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <div class="input-group-text"><i class="fas fa-home "></i></div>
                                <input type="text" class="form-control" placeholder="Enter Address" name="pincode" id="pincode" required>
                                                                 </div><div class="clearfix"></div><br>
                              </div>
                              <div class="col-6">
                              <label>Country<span class="text-danger">*</span></label>
                              <div class="input-group">
                                <div class="input-group-text"><i class="fas fa-home "></i></div>
                                <input type="text" class="form-control" placeholder="Enter Address" name="country" id="country" required>
                                                                 </div><div class="clearfix"></div><br>
                              </div>
                        <div class="col-6">
                          <label>Phone Number<span class="text-danger">*</span></label>
                          <div class="input-group">
                            <div class="input-group-text">
                            <i class="fas fa-phone-volume"></i></div>
                           
                            <input type="text" class="form-control" placeholder="Enter Phone Number" name="mobile_number" required id="userPhoneNo" onkeypress="return isNumber(event)" minlength="10" maxlength="10">
                            </div><div class="clearfix"></div><br>
                          </div>
                          
                          <div class="col-6">
                            <label>Email address<span class="text-danger">*</span></label>
                            <div class="input-group">
                              <div class="input-group-text"><i class="fas fa-envelope"></i></div>
                              <input type="email" class="form-control" placeholder="Enter Email address" name="email" id="userEmail" required>
                                                             </div><div class="clearfix"></div><br>
                            </div>
                            
                          
                              
                              <!-- <div class="col-sm-8 text-right">
                                <span>Already have an account with us</span> <a href="https://chandaulitourism.in/home/login" class="float-end text-primary">Login Here</a>
                              </div> -->
                              
                          </div>
                        </div>
                        <div class="col-md-4 ps-0 d-none d-md-block">
                          <div class="form-right h-100 bg-primary text-white text-center pt-5">
                            
                            <div class="container-fluid ">
                              <div class="container ">
                                
                                <div class="row">
                                  <div class="col-lg-12">
                                    <div class="team-item bg-white mb-2">
                                      <div class="team-img position-relative overflow-hidden">
                                        <a class="h5 text-decoration-none" href="https://chandaulitourism.in/packages/getpackages/1">
                                          <img class="img-fluid w-100 img-thumbnail" src="https://chandaulitourism.in/assets/img/team-5.jpg" alt="">
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                 </div>
                              </div>
                            </div><hr>
                            <h5 class="fs-1 text-white">Rajdari <br>Package Price : 700                             
                             <input type="hidden" name="price" value="700" >
                              <br> 2 Adult, 1 Children</h5>
                              <div class="col-12">
                                <button type="submit" class="btn btn-primary px-4 float-end mt-4" style="background-color: #433837;">Book Now</button>
                              <!--  <input type="submit" name="btnSave" value="SAVE" id="btnSave" class="btn btn-success "> -->
                              </div>
                            </form>
                         
                            </div>
                          
                        </div>
                      </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <?php $this->load->view('layouts/footer');?>
    </body>

<script type="text/javascript">
         
</html>