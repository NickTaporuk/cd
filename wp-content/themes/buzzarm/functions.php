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
wp_enqueue_style("panel_style", get_template_directory_uri()."/panel.css", false, "1.0", "all");
wp_enqueue_script("panel_script", get_template_directory_uri()."/js/panel.js", false, "1.0");
//wp_enqueue_script("panel_script", get_template_directory_uri()."/js/bower_components/angular/angular.js", false, false);
//wp_enqueue_script("panel_script", get_template_directory_uri()."/js/admin/app.js", false, false);

register_setting( 'theme_settings', 'theme_settings' );
}

/*---------------------------------------------------
add settings page to menu
----------------------------------------------------*/

function add_settings_page() {

add_menu_page( __(' Buzzarm Panel' ), __(' Buzzarm Panel' ), 'manage_options', 'settings', 'theme_settings_page');

}

add_action( 'admin_init', 'theme_settings_init' );
add_action( 'admin_menu', 'add_settings_page' );



/*
 * get all tables name in selected db
 * **/
function getNameTables() {
	global $wpdb;
	$getAllNameTAbles = 'SHOW TABLES;';
	$results = $wpdb->get_results( $getAllNameTAbles );


	if(!empty($results)){
		$res = [] ;
		$c = 0;
		foreach($results as $val){
			foreach($val as $k=>$v) {
				$res[] = $v;
			}
		}
		echo json_encode(["status"=>1,'response' => $res]);exit;
	} else {
		echo json_encode(["status"=>1,'response' => false]);exit;
	}
	exit;
}
add_action('wp_ajax_getNameTables', 'getNameTables');
add_action('wp_ajax_nopriv_getNameTables', 'getNameTables');

/*
 * get name selected db
 * **/
function getNameDatabase() {
		echo json_encode(['response' => (DB_NAME)?DB_NAME:false]);exit;

}
add_action('wp_ajax_getNameDatabase', 'getNameDatabase');
add_action('wp_ajax_nopriv_getNameDatabase', 'getNameDatabase');

/*
 * get metadata selected table
 * **/
function getMetaDataTable() {
	global $wpdb;
	try{
		if(empty($_GET)) throw new Exception('[ERROR] :: no data to get params method:'.__METHOD__.':: line ::'.__LINE__);
		else {
			$res = [];
			$getAllNameTAbles = "DESCRIBE {$_GET['table']};";
			$results = $wpdb->get_results( $getAllNameTAbles );

			for($i=0,$count = count($results);$i<$count;$i++){
				$res[] = $results[$i]->Field;
			}
			echo json_encode(["status"=>1,'response' => $res]);exit;
		}
	}
	catch(Exception $e){
		error_log($e->getMessage());
		echo json_encode(["status"=>1,'response' => false]);exit;
	}

}
add_action('wp_ajax_getMetaDataTable', 'getMetaDataTable');
add_action('wp_ajax_nopriv_getMetaDataTable', 'getMetaDataTable');


/*
 * get data selected table
 * **/
function getDataTable() {
	global $wpdb;
	try{
		if(empty($_GET)) throw new Exception('[ERROR] :: no data to get params method:'.__METHOD__.':: line ::'.__LINE__);
		else {
			$getAllNameTAbles = "SELECT * FROM {$_GET['table']} LIMIT {$_GET['limit']};";
//			$getAllNameTAbles = "SELECT * FROM {$_GET['table']} ;";
			$results = $wpdb->get_results( $getAllNameTAbles );

			echo json_encode(["status"=>1,'response' => $results]);exit;
			echo json_encode(["status"=>1,'response' => $_GET]);exit;
		}
	}
	catch(Exception $e){
		error_log($e->getMessage());
		echo json_encode(["status"=>1,'response' => false]);exit;
	}

}
add_action('wp_ajax_getDataTable', 'getDataTable');
add_action('wp_ajax_nopriv_getDataTable', 'getDataTable');

function theme_settings_page() {
	global $themename,$theme_options,$wpdb;

//	var_dump(DB_NAME);
  ?>
	<link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/js/bower_components/bootstrap/dist/css/bootstrap.css"/>
	<script src="<?php echo get_template_directory_uri()?>/js/bower_components/angular/angular.js"></script>
	<script src="<?php echo get_template_directory_uri()?>/js/admin/app.js"></script>

	<div class="wrap options_wrap" ng-app="App">
    <div id="icon-options-general"></div>
    <h2><?php _e( ' Buzzarm Options' )?></h2>

	<div class="content_options" ng-controller="adminCtrl">
	<h3>Selected database name: {{ nameDb }}</h3>
		<select name="singleSelect" ng-model="selectedTable" ng-change="renderTable()">
			<option value="">---Please select---</option> <!-- not selected / blank option -->
			<option ng-repeat="table in nameTables" value="{{table}}" >{{table}}</option>
		</select>
		<br>
		<br>
	<table id="example1" class="table table-bordered table-striped">
		<thead>
		<tr>
			<th ng-repeat="header in headerData">{{header}}</th>
		</tr>
		</thead>
		<tbody>
		<tr ng-repeat="tabData in dataTable">
			<td ng-repeat="(key, value) in tabData">{{value}}</td>
		</tr>
		</tbody>
		<tfoot>
		<tr>
			<th ng-repeat="header in headerData">{{header}}</th>
		</tr>
		</tfoot>
	</table>
<?php
}