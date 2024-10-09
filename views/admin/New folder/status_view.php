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
	
	body {
        text-align: center;
	}
	
	h1 {
		color: #88B04B;
		font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
		font-weight: 900;
		font-size: 40px;
		margin-bottom: 10px;
	}
	.card p {
		color: #404F5E;
		font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
		font-size:20px;
		margin: 0;
	}
	.card i {
		color: #9ABC66;
		font-size: 100px;
		line-height: 200px;
		margin-left:-15px;
	}
	.card {
		background: white;
		padding: 60px;
		border-radius: 4px;
		box-shadow: 0 2px 3px #C8D0D8;
		display: inline-block;
		margin: 0 auto;
	}

  </style>

<body>

  <div class="container-fluid page-header">
        <div class="container">
            <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 200px">
                <h3 class="display-4 text-white ">Contact For Any Query</h3>
                <div class="d-inline-flex text-white">
                    <p class="m-0 text-uppercase"><a class="text-white" href="">Home</a></p>
                    <i class="fa fa-angle-double-right pt-1 px-3"></i>
                    <p class="m-0 text-uppercase">Contact</p>
                </div>
            </div>
        </div>
    </div>




<div class="container-fluid py-5">
        <div class="container py-5">
            
            <div class="row justify-content-center">

				<?php echo success();echo error();echo important(); echo critical();?>

                <div class="col-lg-8">
                    <div class="contact-form bg-white" style="padding: 30px;">
                        <div class="card">
						
							<?php 
								$statusStr = '<i class="checkmark"></i>';	
								$statusMsg = '';
								
								if($order->payment_status==1) {
									$statusStr = '<i class="checkmark">✓</i>';
									$statusMsg = 'Success';									
								}
								
								if($order->payment_status==2) {
									$statusStr = '<i class="checkmark">X</i>';	
									$statusMsg = 'Aborted';
								}
								
								if($order->payment_status==3) {
									$statusStr = '<i class="checkmark">X</i>';
									$statusMsg = 'Failure';
								}
								
								if($order->payment_status==4) {
									$statusStr = '<i class="checkmark">X</i>';
									$statusMsg = 'Invalid Request';
								}
							
							?>
						
						  <div style="border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto;">
							<i class="checkmark"><?php echo $statusStr; ?></i>
						  </div>
							<h1><?php echo $statusMsg; ?></h1>
							<h3>Your Order Id: <?php echo $order->order_id;?></h3>
							<h4 style="color:red;">Order Amount: <?php echo $order->package_amt;?> Rs.</h4>
							<p>Thanks for showing the intrest.<br/> Our team we'll be in touch shortly!</p>
						  </div>
							<?php 
								//echo '<pre>';print_r($status);print_r($order_id);print_r($order);die;
							?>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <?php $this->load->view('layouts/footer');?>
 </body>
</html>