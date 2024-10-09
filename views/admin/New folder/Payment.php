<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Payment extends CI_Controller {
	 public function __construct()
	{
		parent::__construct();
		$this->load->model('Payment_model'); 
		$this->admin 	= $this->functions->login();
		$this->load->library('ccavenue');
		//$this->functions->adminLoginPermission();  
        $this->load->library('PHPExcel/Classes/PHPExcel.php'); 		
	}
	
	public function index()
	{
		
	}
	
	
	public function paymentdetail()
	{
		
		$postData = $this->input->post();
		
		if($postData)
		{
			$rentalproId= $postData['rental_property_id'];
		$proId = $this->Payment_model->getrentalproperty($where=array('id'=>$rentalproId));
		$amount= $proId->monthly_rent;
		
		$month = array('1'=>'January','2'=>'February','3'=>'March','4'=>'April','5'=>'May','6'=>'June','7'=>'July','8'=>'August','9'=>'September','10'=>'October','11'=>'November','12'=>'December');

		$month_id = $this->input->post('choice');
		$monthstr = implode(',', $month_id);
		
		foreach ($month_id as  $v) {
				  $a['month'] = $month[$v];
				  $a['rent_amount'] = $proId->monthly_rent;
				  //$a['total'] =$amount);
				  $a['financial_year'] =$postData['financial_year'];
				  $prArr[] = $a;
			 }

			 

			 $data ['rental_property_id'] = $postData['rental_property_id'];
			 $data ['user_id'] = $postData['user_id'];
			 $data ['montharr'] = $prArr;
			 $data ['monthstr'] = $monthstr;
			 $data ['financial_year'] = $postData['financial_year'];
			 
		}
		else{
			redirect('rentalallotment/propertyallotedlist');
		}
		$this->load->view('rental/payment_view',$data);
	}
	
	public function addpayment()
	{
		$postData = $this->input->post();
		$minth_ids = $postData['month_id'];
        $minthIdArr = explode(',', $minth_ids);
        //print_r($minthIdArr); exit();
		if($postData)
		{
			//print_r($postData['financial_year']);die;
			$rentalproId= $postData['rental_property_id'];
		    $proId = $this->Payment_model->getrentalproperty($where=array('id'=>$rentalproId));
		//print_r($proId->monthly_rent);die;
			foreach($minthIdArr as $m)
			{
		      
	            $arrayData= array(
					'user_id' => $postData['user_id'],
					'property_id' => $postData['rental_property_id'],
					'month_id' => $m,
					'amount	' => $proId->monthly_rent,
					'financial_year'=> $postData['financial_year'],
					'payment_date' => date('Y-m-d h:i:s'),
					'payment_mode' => $postData['payment_mode'],
					'payment_type' => $postData['payment_type'],
					'cheque_date' => $postData['cheque_date'],
					'cheque_no' => $postData['cheque_no'],
					'status' => 1,
					);
					//print_r($arrayData);die;
	              $sanData = $this->Payment_model->insertData($arrayData); 
		    }

		    if($sanData) 
		    {
				$this->session->set_flashdata('success', 'Rental Payment Transaction Successfully');
		    	redirect('rentalallotment/propertyallotedlist');
		    }
		    else
		    {
		    	echo "error";
		    }
		}
	}
	
///////start---for arrears amount Add/////	
	
	public function addarrearamount()
	{
		$postData = $this->input->post();
		$minthIdArr = $postData['choice'];
		if($postData)
		{
			if(!empty($minthIdArr))
			{
				foreach($minthIdArr as $m)
				{
		      
	              $arrayData= array(
					'user_id' => $postData['user_id'],
					'property_id' => $postData['rental_property_id'],
					'month_id' => $m,
					'amount	' => $postData['due_rent'],
					'financial_year'=> $postData['financial_year'],
					'payment_date' => date('Y-m-d h:i:s'),
					'payment_mode' => $postData['payment_mode'],
					'payment_type' => $postData['payment_type'],
					'cheque_date' => $postData['cheque_date'],
					'cheque_no' => $postData['cheque_no'],
					'arrear_status' => 1,
					'status' => 1,
					);
					//print_r($arrayData);die;
	              $sanData = $this->Payment_model->insertData($arrayData); 
				  
				    $updatestatus= array(
			               'arrear_status'=>'1',
			       );
			     $updateData = $this->Payment_model->updatearrearstatus($updatestatus,$where=array('month_id'=>$m,'user_id'=>$postData['user_id'],'rental_property_id'=>$postData['rental_property_id']));  
				}
				
				

				if($sanData) 
				{
					$this->session->set_flashdata('success', 'Rental Payment Transaction Successfully');
					redirect('rentalallotment/propertyallotedlist');
				}
				else
				{
					$this->session->set_flashdata('error', 'Rental Payment Transaction failed.');
					redirect('rentalallotment/propertyallotedlist');
				}
		    }
			else{
				
				
		      
	              $arrayData= array(
					'user_id' => $postData['user_id'],
					'property_id' => $postData['rental_property_id'],
					/* 'month_id' => $m, */
					'amount	' => $postData['due_rent'],
					'financial_year'=> $postData['financial_year'],
					'payment_date' => date('Y-m-d h:i:s'),
					'payment_mode' => $postData['payment_mode'],
					'payment_type' => $postData['payment_type'],
					'cheque_date' => $postData['cheque_date'],
					'cheque_no' => $postData['cheque_no'],
					'arrear_status' => 1,
					'status' => 1,
					);
					//print_r($arrayData);die;
	              $sanData = $this->Payment_model->insertData($arrayData); 
				  
				    $updatestatus= array(
			               'arrear_status'=>'1',
			       );
			     $updateData = $this->Payment_model->updatearrearstatus($updatestatus,$where=array('user_id'=>$postData['user_id'],'rental_property_id'=>$postData['rental_property_id']));  
				
				if($sanData) 
				{
					$this->session->set_flashdata('success', 'Rental Payment Transaction Successfully');
					redirect('rentalallotment/propertyallotedlist');
				}
				else
				{
					$this->session->set_flashdata('error', 'Rental Payment Transaction failed.');
					redirect('rentalallotment/propertyallotedlist');
				}
				
			}
		}
	}
	
	///////end------for arrears amount Add/////	
	
	public function successpaymentlist($userID,$proId)
	{
		 $userID=decrypt($userID); 
		 $proId=decrypt($proId); 
		 $where=array('m.status'=>1,'m.user_id'=>$userID,'m.property_id'=>$proId);
		 $data['paymentdata'] = $this->Payment_model->getsuccesspayment($where);
		 $data['content']='Success';
		$this->load->view('rental/paymentsuccess_list',$data);
	}
	
	public function tenantsuccesspaymentlist()
	{
	  $data['tenantpaymentdata'] = $this->Payment_model->tenantwisesuccesspayment($where=array('m.status'=>1));
	  //print_r($data['paymentdata']);die;
	  $data['content']='Success';
		$this->load->view('rental/tenantwisepaymentsuccess_list',$data);
	}
	
	public function paymentfailedlist($userID,$proId)
	{
		$userID=decrypt($userID); 
		 $proId=decrypt($proId); 
		 $where=array('m.status'=>0,'m.user_id'=>$userID,'m.property_id'=>$proId);
	    $data['paymentdata'] = $this->Payment_model->getsuccesspayment($where);
	    $data['content']='Failed';
		$this->load->view('rental/paymentsuccess_list',$data);
	}
	
	public function tenantfailedpaymentlist()
	{
	  $data['tenantpaymentdata'] = $this->Payment_model->tenantwisesuccesspayment($where=array('m.status'=>0));
	  $data['content']='Failed';
	  $this->load->view('rental/tenantwisepaymentsuccess_list',$data);
	}





	public function dopayment($orderId,$amount) {
		//$bookingId 		= decrypt($caseId);
        //$info 			= $this->booking_model->getPayment($bookingId);
        /*
		if(decrypt($orderId) != $info->order_id ) {
			redirect(base_url('home/booking_view/'.encrypt($info->package_id)));
		}
		
		if(decrypt($amount) != $info->package_amt ) {
			redirect(base_url('home/booking_view/'.encrypt($info->package_id)));
		}
		*/
		//$data["info"] 	= $info;
		//echo '<pre>';print_r($data["info"]);die;
		$data['order_id']	=	$orderId;
		$data['amount']		=	$amount;
		$this->load->view('payment/dopayment_view',$data);
	}
	
	
	public function begin($bookId) {
		$merchant_data  = '2';
		$working_key 	= WORKING_CODE; //'E2B122A0140C55090B17A284925A0465';//Shared by CCAVENUES
		$access_code 	= ACCESS_CODE; //'AVVM67DI04BP90MVPB';//Shared by CCAVENUES
		$bookingId 		= $bookId;//decrypt($bookId);
		
		/*
		if($this->input->post('sid') != $bookingId ) {
			$this->session->set_flashdata('error', 'Sonthing went wrong');
			redirect(base_url('home/packageslist'));
		}
		
		$info 			= $this->booking_model->getPayment($bookingId);
		
		if($info->order_id != $this->input->post('order_id')) {
			$this->session->set_flashdata('error', 'Invalid reference id');
			redirect(base_url('home/packageslist'));
		}
		
		if($info->package_amt != $this->input->post('amount')) {
			$this->session->set_flashdata('error', 'Invalid Amount');
			redirect(base_url('home/packageslist'));
		}*/
		
		foreach ($_POST as $key => $value){
			$merchant_data.=$key.'='.$value.'&';
		}

		$encrypted_data=$this->ccavenue->encrypt($merchant_data,$working_key);
		
		?>
		
		<form method="post" name="redirect" action="<?php echo PAYMENT_URL;?>"> 
		<?php
		echo "<input type=hidden name=encRequest value=$encrypted_data>";
		echo "<input type=hidden name=access_code value=$access_code>";
		?>
		</form>
		</center>
		<script language='javascript'>document.redirect.submit();</script>
	<?php
	}
	
	
	public function responce() {
		//echo '<pre>';print_r($this->input->post());die;
		
		if(!$this->input->post()) {
			redirect('home/packageslist');
		}
		
		$workingKey		= WORKING_CODE;//'E2B122A0140C55090B17A284925A0465';		//Working Key should be provided here.
		$encResponse	= $_POST["encResp"];			//This is the response sent by the CCAvenue Server
		$rcvdString		= $this->ccavenue->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
		
		$order_status	= "";
		$order_id 		= '';
		
		$decryptValues=explode('&', $rcvdString);
		$dataSize=sizeof($decryptValues);
		//echo "<center>";

		for($i = 0; $i < $dataSize; $i++) 
		{
			$information=explode('=',$decryptValues[$i]);
			if($i==3)	$order_status=$information[1];
			
			if($information[0]=='order_id') {
				$order_id = $information[1];
			}
		}

		if($order_status==="Success")
		{
			echo "<br>Thank you for shopping with us. Your credit card has been charged and your transaction is successful. We will be shipping your order to you soon.";
			$upData = array(
				'payment_status' 	=> 1,
				'payment_string'	=> json_encode($decryptValues)
			);
			
			$this->booking_model->updatePaymentStatus($order_id,$upData);
			
			redirect('payment/prestatus/success/'.$order_id);
		}
		else if($order_status==="Aborted")
		{
			echo "<br>Thank you for shopping with us.We will keep you posted regarding the status of your order through e-mail";
			$upData = array(
				'payment_status' 	=> 2,
				'payment_string'	=> json_encode($decryptValues)
			);
			
			$this->booking_model->updatePaymentStatus($order_id,$upData);
			redirect('payment/prestatus/aborted/'.$order_id);
		}
		else if($order_status==="Failure")
		{
			echo "<br>Thank you for shopping with us.However,the transaction has been declined.";
			$upData = array(
				'payment_status' 	=> 3,
				'payment_string'	=> json_encode($decryptValues)
			);
			
			$this->booking_model->updatePaymentStatus($order_id,$upData);
			redirect('payment/prestatus/failure/'.$order_id);
		}
		else
		{
			echo "<br>Security Error. Illegal access detected";
			$upData = array(
				'payment_status' 	=> 4,
				'payment_string'	=> json_encode($decryptValues)
			);
			
			$this->booking_model->updatePaymentStatus($order_id,$upData);
			redirect('payment/prestatus/error/'.$order_id);
		}
		
		/*
		echo "<br><br>";

		echo "<table cellspacing=4 cellpadding=4>";
		for($i = 0; $i < $dataSize; $i++) 
		{
			$information=explode('=',$decryptValues[$i]);
				echo '<tr><td>'.$information[0].'</td><td>'.$information[1].'</td></tr>';
		}

		echo "</table><br>";
		echo "</center>";*/
	}
	
	
	public function prestatus($pStatus,$orderId) {
		$reCheckData 		= $this->reverify($orderId);
		
		//if($reCheckData->order_status === "Shipped")
		if($reCheckData->order_status === "Shipped" || $reCheckData->order_status == 'Successful')
		{
			$upData = array(
				'payment_status' 	=> 1,
				'recheck_payment'	=> json_encode($reCheckData)
			);
			
			$this->booking_model->updatePaymentStatus($orderId,$upData);
			redirect('payment/status/success/'.$orderId);
		} else {
			$upData = array(
				'payment_status' 	=> 3,
				'recheck_payment'	=> json_encode($reCheckData)
			);
			
			$this->booking_model->updatePaymentStatus($orderId,$upData);
			redirect('payment/status/aborted/'.$orderId);
		}
		
	}
	
	public function cancel() {
		if(!$this->input->post()) {
			redirect('home/packageslist');
		}
		
		$workingKey		= WORKING_CODE;//'E2B122A0140C55090B17A284925A0465';		//Working Key should be provided here.
		$encResponse	= $_POST["encResp"];			//This is the response sent by the CCAvenue Server
		$rcvdString		= $this->ccavenue->decrypt($encResponse,$workingKey);		//Crypto Decryption used as per the specified working key.
		
		$order_status	= "";
		$order_id 		= '';
		
		$decryptValues=explode('&', $rcvdString);
		$dataSize=sizeof($decryptValues);
		//echo "<center>";

		for($i = 0; $i < $dataSize; $i++) 
		{
			$information=explode('=',$decryptValues[$i]);
			if($i==3)	$order_status=$information[1];
			
			if($information[0]=='order_id') {
				$order_id = $information[1];
			}
		}

		if($order_status==="Success")
		{
			echo "<br>Thank you for shopping with us. Your credit card has been charged and your transaction is successful. We will be shipping your order to you soon.";
			$upData = array(
				'payment_status' 	=> 1,
				'payment_string'	=> json_encode($decryptValues)
			);
			
			$this->booking_model->updatePaymentStatus($order_id,$upData);
			
			redirect('payment/prestatus/status/'.$order_id);
		}
		else if($order_status==="Aborted")
		{
			echo "<br>Thank you for shopping with us.We will keep you posted regarding the status of your order through e-mail";
			$upData = array(
				'payment_status' 	=> 2,
				'payment_string'	=> json_encode($decryptValues)
			);
			
			$this->booking_model->updatePaymentStatus($order_id,$upData);
			redirect('payment/status/aborted/'.$order_id);
		}
		else if($order_status==="Failure")
		{
			echo "<br>Thank you for shopping with us.However,the transaction has been declined.";
			$upData = array(
				'payment_status' 	=> 3,
				'payment_string'	=> json_encode($decryptValues)
			);
			
			$this->booking_model->updatePaymentStatus($order_id,$upData);
			redirect('payment/status/failure/'.$order_id);
		}
		else
		{
			echo "<br>Security Error. Illegal access detected";
			$upData = array(
				'payment_status' 	=> 4,
				'payment_string'	=> json_encode($decryptValues)
			);
			
			$this->booking_model->updatePaymentStatus($order_id,$upData);
			redirect('payment/status/error/'.$order_id);
		}
	}
	
	
	
	public function status($pStatus,$orderId) {
		
		$data['status']		=	$pStatus;
		$data['order_id']	=	$orderId;
		$order  			= 	$this->booking_model->getOrderDetailByOrderId($orderId);
		$data['order']		= $order;
		$this->load->view('payment/status_view',$data);
	}
	
	
	/*=====================================================
	Payment reverification API call
	=======================================================*/
	
	private function reverify($orderNo) {
		$working_key = WORKING_CODE; //Shared by CCAVENUES
		$access_code = ACCESS_CODE;

		$merchant_json_data =
		    array(
		    'order_no' => $orderNo,
		);

		$merchant_data = json_encode($merchant_json_data);
		$encrypted_data = $this->ccavenue->encrypt($merchant_data, $working_key); 
		$final_data = 'enc_request='.$encrypted_data.'&access_code='.$access_code.'&command=orderStatusTracker&request_type=JSON&response_type=JSON&version=1.2'; echo'<br/>';
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, "https://apitest.ccavenue.com/apis/servlet/DoWebTrans?".$final_data);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
		curl_setopt($ch, CURLOPT_VERBOSE, 1);
		curl_setopt($ch, CURLOPT_HTTPHEADER,array('Content-Type: application/json')) ;
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
		curl_setopt($ch, CURLOPT_POST, 1);
		$result = curl_exec($ch);
		curl_close($ch);
		$information = explode('&', $result);

		$dataSize = sizeof($information);
		for ($i = 0; $i < $dataSize; $i++) {
		    $info_value = explode('=', $information[$i]);
		    if ($info_value[0] == 'enc_response') {
				$status = $this->ccavenue->decrypt(trim($info_value[1]), $working_key);
		    }
		}
		
		return $obj = json_decode($status);//echo $obj->order_amt; prx($obj);
	}
	
	
	
}