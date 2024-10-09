<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script>
	window.onload = function() {
		var d = new Date().getTime();
		document.getElementById("tid").value = d;
	};
</script>
<style>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
</head>
<body>
	<div class="loader" style="margin-left: 37%;margin-top: 10%;"></div>
	<form method="post" name="customerData" action="<?php echo base_url()?>payment/begin/<?php echo $order_id;?>" style="visibility: hidden;">
			
			<input type="text" name="tid" id="tid" readonly />
			<input type="text" name="merchant_id" value="<?php echo MERCHANT_ID;?>"/>
			<input type="text" name="order_id" value="<?php echo $order_id;?>"/>
			<input type="text" name="amount" value="<?php echo $amount;?>"/>
			<input type="text" name="currency" value="INR"/>
			<input type="text" name="redirect_url" value="<?php echo base_url();?>payment/responce"/>
			<input type="text" name="cancel_url" value="<?php echo base_url();?>payment/cancel"/>
			<input type="text" name="language" value="EN"/>
			<input type="text" name="billing_name" value="Shani"/>
			<input type="text" name="billing_address" value="Varanasi"/>
			<input type="text" name="billing_city" value="Varanasi"/>
			<input type="text" name="billing_state" value=""/>
			<input type="text" name="billing_zip" value="221010"/>
			<input type="text" name="billing_country" value="India"/>
			<input type="text" name="billing_tel" value="9984143127"/>
			<input type="text" name="billing_email" value="shanitripathi111@gmail.com"/>
			<input type="text" name="delivery_name" value="Shani"/>
			<input type="text" name="delivery_address" value="Varansi"/>
			<input type="text" name="delivery_city" value="Varanasi"/>
			<input type="text" name="delivery_state" value=""/>	
			<input type="text" name="delivery_zip" value="221010"/>
			<input type="text" name="delivery_country" value="India"/>
			<input type="text" name="delivery_tel" value="9984143127"/>
			<input type="text" name="merchant_param1" value="additional Info."/>
			<input type="text" name="merchant_param2" value="additional Info."/>
			<input type="text" name="merchant_param3" value="additional Info."/>
		    <input type="text" name="merchant_param4" value="additional Info."/>    
		    <input type="text" name="merchant_param5" value="additional Info."/>
			<input type="text" name="promo_code" value=""/>
			<input type="text" name="customer_identifier" value=""/>
			<input type="hidden" name="sid" id="sid" value="<?php echo $order_id;?>" readonly />
			<INPUT TYPE="submit" value="CheckOut">
					
	      </form>
	</body>
	<script type="text/javascript" >
	 document.customerData.submit();
	</script>
</html>