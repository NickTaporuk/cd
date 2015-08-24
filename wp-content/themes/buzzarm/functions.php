<?php
/***/
function addNewPreOrder() {
	global $wpdb;
//        $results = $wpdb->get_results( 'SELECT * FROM bz_users WHERE id = 1', OBJECT );

	$data['color'] 		= $_POST['color'];
	$data['quantity'] 	= $_POST['count'];
	$data['name'] 		= $_POST['name'];
	$data['email'] 		= $_POST['email'];
	$data['time_create'] = time();

	$results = $wpdb->insert( "{$wpdb->prefix}pre_order",$data);
	echo json_encode(["status"=>1,'response' => 1]);
	exit;
}
add_action('wp_ajax_addNewPreOrder', 'addNewPreOrder');
add_action('wp_ajax_nopriv_addNewPreOrder', 'addNewPreOrder');

/***/
function chackEmail() {
	global $wpdb;

	$email		= trim($_POST['email']);
	$results = $wpdb->get_results( "SELECT email FROM {$wpdb->prefix}subscribe WHERE email = '$email'", OBJECT );

//	$results = $wpdb->insert( "{$wpdb->prefix}pre_order",$data);
	echo json_encode(["status"=>1,'response' => (!empty($results)?true:false)]);
//	echo json_encode(["status"=>1,'response' => 1]);
	exit;
}
add_action('wp_ajax_chackEmail', 'chackEmail');
add_action('wp_ajax_nopriv_chackEmail', 'chackEmail');


/***/
function addNewNotify() {
	global $wpdb;

	$email		= trim($_POST['email']);
//	$results = $wpdb->insert( "{$wpdb->prefix}pre_order",$data);
	echo json_encode(["status"=>1,'response' => (!empty($results)?true:false)]);
//	echo json_encode(["status"=>1,'response' => 1]);
	exit;
}
add_action('wp_ajax_chackEmail', 'chackEmail');
add_action('wp_ajax_nopriv_chackEmail', 'chackEmail');
