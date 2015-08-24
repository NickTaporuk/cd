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

	if(!empty($results)){
		echo json_encode(["status"=>1,'response' => true]);exit;
	} else {
		$data['email'] 			= $email;
		$data['time_create'] 	= time();

		$wpdb->insert( "{$wpdb->prefix}subscribe",$data);
		echo json_encode(["status"=>1,'response' => false]);exit;
	}
//	echo json_encode(["status"=>1,'response' => 1]);
	exit;
}
add_action('wp_ajax_chackEmail', 'chackEmail');
add_action('wp_ajax_nopriv_chackEmail', 'chackEmail');


/***/
function addNewCallbackMessage() {
	global $wpdb;

	$data['email']		= trim($_POST['email']);
	$data['name']		= trim($_POST['name']);
	$data['message']	= htmlspecialchars($_POST['message']);

	$wpdb->insert( "{$wpdb->prefix}callback_admin",$data);
	echo json_encode(["status"=>1,'response' => 1]);
	exit;
}
add_action('wp_ajax_addNewCallbackMessage', 'addNewCallbackMessage');
add_action('wp_ajax_nopriv_addNewCallbackMessage', 'addNewCallbackMessage');


/*---------------------------------------------------

register settings

----------------------------------------------------*/

function theme_settings_init(){

register_setting( 'theme_settings', 'theme_settings' );

}

/*---------------------------------------------------

add settings page to menu

----------------------------------------------------*/

function add_settings_page() {

add_menu_page( __( 'Your theme name' .' Theme Panel' ), __( 'Your theme name' .' Theme Panel' ), 'manage_options', 'settings', 'theme_settings_page');

}

/*---------------------------------------------------

add actions

----------------------------------------------------*/

add_action( 'admin_init', 'theme_settings_init' );

add_action( 'admin_menu', 'add_settings_page' );



/*---------------------------------------------------

Theme Panel Output

----------------------------------------------------*/

/* ----------------------------------------------------------
Declare vars
------------------------------------------------------------- */
$themename = "Theme Name";
$shortname = "shortname";
$categories = get_categories('hide_empty=0&orderby=name');
$all_cats = array();
foreach ($categories as $category_item ) {
$all_cats[$category_item->cat_ID] = $category_item->cat_name;
}
array_unshift($all_cats, "Select a category");

function theme_settings_page() {

	?>
	<div class="wrap">
		<div id="icon-options-general"></div>
		<h2><?php _e( ' Theme Options' ) //your admin panel title ?></h2>
		<ul>
			<li>View Documentation |</li>
			<li>Visit Support </li>
		</ul>
		<p><span>Theme version</span></p>
		<div class="footer-credit">
			<p>This theme was made by <a title="Anang pratika" href="http://anangpratika.wordpress.com" target="_blank" >Anang Pratika</a>.</p>
		</div>
	</div>
<?php
}