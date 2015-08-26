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

/* ---------------------------------------------------------
Declare options
----------------------------------------------------------- */
$theme_options = array (
	array( "name" => $themename." Options",
		"type" => "title"),
	/* ---------------------------------------------------------
      General section
      ----------------------------------------------------------- */
	array( "name" => "General",
		"type" => "section"),
	array( "type" => "open"),

	array( "name" => "Logo URL",
		"desc" => "Enter the link to your logo image",
		"id" => $shortname."_logo",
		"type" => "text",
		"std" => ""),

	array( "name" => "Custom Favicon",
		"desc" => "A favicon is a 16x16 pixel icon that represents your site; paste the URL to a .ico image that you want to use as the image",
		"id" => $shortname."_favicon",
		"type" => "text",
		"std" => get_bloginfo('url') ."/images/favicon.ico"),

	array( "type" => "close"),
	/* ---------------------------------------------------------
      Home section

      ----------------------------------------------------------- */

	array( "name" => "Homepage",

		"type" => "section"),
	array( "type" => "open"),
	array( "name" => "Homepage Featured",
		"desc" => "Choose a category from which featured posts are.",
		"id" => $shortname."_feat_cat",
		"type" => "select",
		"options" => $all_cats,
		"std" => "Select a category"),

	array( "type" => "close"),

/* ---------------------------------------------------------
      Footer section
----------------------------------------------------------- */
	array( "name" => "Footer",
		"type" => "section"),
	array( "type" => "open"),

	array( "name" => "Footer Credit",
		"desc" => "You can customize footer credit on footer area here.",
		"id" => $shortname."_footer_text",
		"type" => "text",
		"std" => ""),

	array( "type" => "close")

);


function theme_settings_page() {
	global $themename,$theme_options;
  $i=0;
  $message='';
  if ( 'save' == $_REQUEST['action'] ) {
    foreach ($theme_options as $value) {
      update_option( $value['id'], $_REQUEST[ $value['id'] ] ); }
    foreach ($theme_options as $value) {
      if( isset( $_REQUEST[ $value['id'] ] ) ) { update_option( $value['id'], $_REQUEST[ $value['id'] ]  ); } else { delete_option( $value['id'] ); } }
    $message='saved';
  }
  else if( 'reset' == $_REQUEST['action'] ) {

    foreach ($theme_options as $value) {
      delete_option( $value['id'] ); }
    $message='reset';
  }

  ?>
	<link rel="stylesheet" href="<?php echo get_template_directory_uri()?>/js/bower_components/bootstrap/dist/css/bootstrap.css"/>
	<script src="<?php echo get_template_directory_uri()?>/js/bower_components/angular/angular.js"></script>
	<script src="<?php echo get_template_directory_uri()?>/js/admin/app.js"></script>

	<div class="wrap options_wrap" ng-app="App">
    <div id="icon-options-general"></div>
    <h2><?php _e( ' Buzzarm Options' ) //your admin panel title ?></h2>
    <?php
    if ( $message=='saved' ) echo '<div class="updated settings-error" id="setting-error-settings_updated">
    <p>'.$themename.' settings saved.</strong></p></div>';
    if ( $message=='reset' ) echo '<div class="updated settings-error" id="setting-error-settings_updated">
    <p>'.$themename.' settings reset.</strong></p></div>';
    ?>
    <ul>
		<li>View Documentation |</li>
		<li>Visit Support |</li>
		<li>Theme version 1.0 </li>
	</ul>
	<div class="content_options" ng-controller="adminCtrl">
	<table id="example1" class="table table-bordered table-striped">
		<thead>
		<tr>
			<th>Rendering engine</th>
			<th>Browser</th>
			<th>Platform(s)</th>
			<th>Engine version</th>
			<th>CSS grade</th>
		</tr>
		</thead>
		<tbody>
		<tr>
			<td>Trident</td>
			<td>Internet
				Explorer 4.0</td>
			<td>Win 95+</td>
			<td> 4</td>
			<td>X</td>
		</tr>
		<tr>
			<td>Trident</td>
			<td>Internet
				Explorer 5.0</td>
			<td>Win 95+</td>
			<td>5</td>
			<td>C</td>
		</tr>
		<tr>
			<td>Trident</td>
			<td>Internet
				Explorer 5.5</td>
			<td>Win 95+</td>
			<td>5.5</td>
			<td>A</td>
		</tr>
		<tr>
			<td>Trident</td>
			<td>Internet
				Explorer 6</td>
			<td>Win 98+</td>
			<td>6</td>
			<td>A</td>
		</tr>
		</tbody>
		<tfoot>
		<tr>
			<th>Rendering engine</th>
			<th>Browser</th>
			<th>Platform(s)</th>
			<th>Engine version</th>
			<th>CSS grade</th>
		</tr>
		</tfoot>
	</table>
	<form method="post">
      <?php foreach ($theme_options as $value) {

        switch ( $value['type'] ) {

			case "open": ?>
				<?php break;

          case "close": ?>
			  </div>
			  </div><br />
			  <?php break;

          case "title": ?>
			  <div class="message">
				  <p>To easily use the <?php echo $themename;?> theme options, you can use the options below.</p>
			  </div>
			  <?php break;

          case 'text': ?>
			  <div class="option_input option_text">
				  <label for="<?php echo $value['id']; ?>">
					  <?php echo $value['name']; ?></label>
				  <input id="" type="<?php echo $value['type']; ?>" name="<?php echo $value['id']; ?>" value="<?php if ( get_settings( $value['id'] ) != "") { echo stripslashes(get_settings( $value['id'])  ); } else { echo $value['std']; } ?>" />
				  <small><?php echo $value['desc']; ?></small>
				  <div class="clearfix"></div>
			  </div>
			  <?php break;

          case 'textarea': ?>
			  <div class="option_input option_textarea">
				  <label for="<?php echo $value['id']; ?>"><?php echo $value['name']; ?></label>
				  <textarea name="<?php echo $value['id']; ?>" rows="" cols=""><?php if ( get_settings( $value['id'] ) != "") { echo stripslashes(get_settings( $value['id']) ); } else { echo $value['std']; } ?></textarea>
				  <small><?php echo $value['desc']; ?></small>
				  <div class="clearfix"></div>
			  </div>
			  <?php break;

          case 'select': ?>
			  <div class="option_input option_select">
				  <label for="<?php echo $value['id']; ?>"><?php echo $value['name']; ?></label>
				  <select name="<?php echo $value['id']; ?>" id="<?php echo $value['id']; ?>">
					  <?php foreach ($value['options'] as $option) { ?>
						  <option <?php if (get_settings( $value['id'] ) == $option) { echo 'selected="selected"'; } ?>><?php echo $option; ?></option>
					  <?php } ?>
				  </select>
				  <small><?php echo $value['desc']; ?></small>
				  <div class="clearfix"></div>
			  </div>
			  <?php break;

          case "checkbox": ?>
			  <div class="option_input option_checkbox">
				  <label for="<?php echo $value['id']; ?>"><?php echo $value['name']; ?></label>
				  <?php if(get_option($value['id'])){ $checked = "checked=\"checked\""; }else{ $checked = "";} ?>
				  <input id="<?php echo $value['id']; ?>" type="checkbox" name="<?php echo $value['id']; ?>" value="true" <?php echo $checked; ?> />
				  <small><?php echo $value['desc']; ?></small>
				  <div class="clearfix"></div>
			  </div>
			  <?php break;

          case "section":
          $i++; ?>
          <div class="input_section">
          <div class="input_title">

			  <h3><img src="<?php echo get_template_directory_uri();?>/images/options.png" alt="">&nbsp;<?php echo $value['name']; ?></h3>
			  <span class="submit"><input name="save<?php echo $i; ?>" type="submit" class="button-primary" value="Save changes" /></span>
			  <div class="clearfix"></div>
		  </div>
          <div class="all_options">
			  <?php break;

        }
      }?>
      <input type="hidden" name="action" value="save" />
      </form>
      <form method="post">
		  <p class="submit">
			  <input name="reset" type="submit" value="Reset" />
			  <input type="hidden" name="action" value="reset" />
		  </p>
	  </form>
	</div>
    <div class="footer-credit">
		<p>This theme was made by <a title="buzzarm" href="buzzarm.com" target="_blank" >Buzzarm</a>.</p>
	</div>
	</div>

<?php
}