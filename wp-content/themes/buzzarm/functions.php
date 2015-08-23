<?php
function getPrices(){
//	$the_id = $_REQUEST["post_id"];
//	$results[] = get_post_meta($the_id, "price_one", true);
//	$results[] = get_post_meta($the_id, "price_two", true);
//	$results[] = get_post_meta($the_id, "price_three", true);
//	$results[] = get_post_meta($the_id, "price_four", true);
//	$results[] = get_post_meta($the_id, "price_five", true);
//	$results[] = get_post_meta($the_id, "price_six", true);
//	$results[] = get_post_meta($the_id, "price_seven", true);
//	$results[] = get_post_meta($the_id, "price_eight", true);
	global $wpdb;
//        $results = $wpdb->get_results( 'SELECT * FROM bz_users WHERE id = 1', OBJECT );

	$data['color'] = $_POST['color'];
	$data['quantity'] = $_POST['count'];
	$data['name'] = $_POST['name'];
	$data['email'] = $_POST['email'];
	$data['time_create'] = time();

	$results = $wpdb->insert( "{$wpdb->prefix}pre_order",$data);
//	echo json_encode(["status"=>1,'response' => $results]);
	echo json_encode(["status"=>1,'response' => 1]);
	exit;
}
add_action('wp_ajax_getPrices', 'getPrices');
add_action('wp_ajax_nopriv_getPrices', 'getPrices');