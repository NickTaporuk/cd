<?php
/***/
function addNewPreOrder()
{
    global $wpdb;
//        $results = $wpdb->get_results( 'SELECT * FROM bz_users WHERE id = 1', OBJECT );

    $data['color'] = $_POST['color'];
    $data['quantity'] = $_POST['count'];
    $data['name'] = $_POST['name'];
    $data['email'] = $_POST['email'];
    $data['time_create'] = time();

    $results = $wpdb->insert("{$wpdb->prefix}pre_order", $data);
    echo json_encode(["status" => 1, 'response' => 1]);
    exit;
}

add_action('wp_ajax_addNewPreOrder', 'addNewPreOrder');
add_action('wp_ajax_nopriv_addNewPreOrder', 'addNewPreOrder');

/***/
function chackEmail()
{
    global $wpdb;

    $email = trim($_POST['email']);
    $results = $wpdb->get_results("SELECT email FROM {$wpdb->prefix}subscribe WHERE email = '$email'", OBJECT);

    if (!empty($results)) {
        echo json_encode(["status" => 1, 'response' => true]);
        exit;
    } else {
        $data['email'] = $email;
        $data['time_create'] = time();

        $wpdb->insert("{$wpdb->prefix}subscribe", $data);
        echo json_encode(["status" => 1, 'response' => false]);
        exit;
    }
//	echo json_encode(["status"=>1,'response' => 1]);
    exit;
}

add_action('wp_ajax_chackEmail', 'chackEmail');
add_action('wp_ajax_nopriv_chackEmail', 'chackEmail');


/***/
function addNewCallbackMessage()
{
    global $wpdb;

    $data['email'] = trim($_POST['email']);
    $data['name'] = trim($_POST['name']);
    $data['message'] = htmlspecialchars($_POST['message']);

    $wpdb->insert("{$wpdb->prefix}callback_admin", $data);
    echo json_encode(["status" => 1, 'response' => 1]);
    exit;
}

add_action('wp_ajax_addNewCallbackMessage', 'addNewCallbackMessage');
add_action('wp_ajax_nopriv_addNewCallbackMessage', 'addNewCallbackMessage');


/*---------------------------------------------------
register settings
----------------------------------------------------*/
function theme_settings_init()
{
    register_setting('theme_settings', 'theme_settings');
    wp_enqueue_style("panel_style", get_template_directory_uri() . "/panel.css", false, "1.0", "all");
    wp_enqueue_script("panel_script", get_template_directory_uri() . "/js/panel.js", false, "1.0");
//wp_enqueue_script("panel_script", get_template_directory_uri()."/js/bower_components/angular/angular.js", false, false);
//wp_enqueue_script("panel_script", get_template_directory_uri()."/js/admin/app.js", false, false);

    register_setting('theme_settings', 'theme_settings');
}

/*---------------------------------------------------
add settings page to menu
----------------------------------------------------*/

function add_settings_page()
{

    add_menu_page(__(' Buzzarm Panel'), __(' Buzzarm Panel'), 'manage_options', 'settings', 'theme_settings_page');

}

add_action('admin_init', 'theme_settings_init');
add_action('admin_menu', 'add_settings_page');


/*
 * get all tables name in selected db
 * **/
function getNameTables()
{
    global $wpdb;
    $getAllNameTAbles = 'SHOW TABLES;';
    $results = $wpdb->get_results($getAllNameTAbles);


    if (!empty($results)) {
        $res = [];
        $c = 0;
        foreach ($results as $val) {
            foreach ($val as $k => $v) {
                $res[] = $v;
            }
        }
        echo json_encode(["status" => 1, 'response' => $res]);
        exit;
    } else {
        echo json_encode(["status" => 1, 'response' => false]);
        exit;
    }
    exit;
}

add_action('wp_ajax_getNameTables', 'getNameTables');
add_action('wp_ajax_nopriv_getNameTables', 'getNameTables');

/*
 * get name selected db
 * **/
function getNameDatabase()
{
    echo json_encode(['response' => (DB_NAME) ? DB_NAME : false]);
    exit;

}

add_action('wp_ajax_getNameDatabase', 'getNameDatabase');
add_action('wp_ajax_nopriv_getNameDatabase', 'getNameDatabase');

/*
 * get metadata selected table
 * **/
function getMetaDataTable()
{
    global $wpdb;
    try {
        if (empty($_GET)) throw new Exception('[ERROR] :: no data to get params method:' . __METHOD__ . ':: line ::' . __LINE__);
        else {
            $res = [];
            $getAllNameTAbles = "DESCRIBE {$_GET['table']};";
            $results = $wpdb->get_results($getAllNameTAbles);

            for ($i = 0, $count = count($results); $i < $count; $i++) {
                $res[] = $results[$i]->Field;
            }
            echo json_encode(["status" => 1, 'response' => $res]);
            exit;
        }
    } catch (Exception $e) {
        error_log($e->getMessage());
        echo json_encode(["status" => 1, 'response' => false]);
        exit;
    }

}

add_action('wp_ajax_getMetaDataTable', 'getMetaDataTable');
add_action('wp_ajax_nopriv_getMetaDataTable', 'getMetaDataTable');


/*
 * get data selected table
 * **/
function getDataTable()
{
    global $wpdb;
    try {
        if (empty($_GET)) throw new Exception('[ERROR] :: no data to get params method:' . __METHOD__ . ':: line ::' . __LINE__);
        else {
            $getAllNameTAbles = "SELECT * FROM {$_GET['table']} LIMIT {$_GET['limit']};";
//			$getAllNameTAbles = "SELECT * FROM {$_GET['table']} ;";
            $results = $wpdb->get_results($getAllNameTAbles);

            echo json_encode(["status" => 1, 'response' => $results]);
            exit;
            echo json_encode(["status" => 1, 'response' => $_GET]);
            exit;
        }
    } catch (Exception $e) {
        error_log($e->getMessage());
        echo json_encode(["status" => 1, 'response' => false]);
        exit;
    }

}

add_action('wp_ajax_getDataTable', 'getDataTable');
add_action('wp_ajax_nopriv_getDataTable', 'getDataTable');


/*
 * get data selected table
 * **/
function getCountRowsTable()
{
    global $wpdb;
    try {
        if (empty($_GET)) throw new Exception('[ERROR] :: no data to get params method:' . __METHOD__ . ':: line ::' . __LINE__);
        else {
            $getAllNameTAbles = "SELECT COUNT(*) FROM {$_GET['table']} LIMIT {$_GET['limit']};";
//			$getAllNameTAbles = "SELECT * FROM {$_GET['table']} ;";
            $results = $wpdb->get_results($getAllNameTAbles);

            echo json_encode(["status" => 1, 'response' => $results]);
            exit;
            echo json_encode(["status" => 1, 'response' => $_GET]);
            exit;
        }
    } catch (Exception $e) {
        error_log($e->getMessage());
        echo json_encode(["status" => 1, 'response' => false]);
        exit;
    }

}

add_action('wp_ajax_getDataTable', 'getDataTable');
add_action('wp_ajax_nopriv_getDataTable', 'getDataTable');

function theme_settings_page()
{
    global $themename, $theme_options, $wpdb;

//	var_dump(DB_NAME);
    ?>

    <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/js/bower_components/bootstrap/dist/css/bootstrap.css"/>
<!--    <link rel="stylesheet" href="--><?php //echo get_template_directory_uri() ?><!--/js/bower_components/ngDialog/css/ngDialog.css"/>-->
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/js/bower_components/ngDialog/css/ngDialog.min.css"/>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/js/bower_components/ngDialog/css/ngDialog-custom-width.css"/>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/js/bower_components/ngDialog/css/ngDialog-theme-default.css"/>
    <link rel="stylesheet" href="<?php echo get_template_directory_uri() ?>/js/bower_components/ngDialog/css/ngDialog-theme-plain.css"/>

    <script src="<?php echo get_template_directory_uri() ?>/js/bower_components/angular/angular.js"></script>
    <script src="<?php echo get_template_directory_uri() ?>/js/admin/app.js"></script>
    <script src="<?php echo get_template_directory_uri() ?>/js/bower_components/ngDialog/js/ngDialog.js"></script>

    <div class="wrap options_wrap" ng-app="App">
    <div id="icon-options-general"></div>
    <h2><?php _e(' Buzzarm Options') ?></h2>

    <div class="content_options" ng-controller="adminCtrl">

        <script type="text/ng-template" id="templateId">
            <h1>Template heading</h1>
            <p>Content goes here</p>
        </script>

        <div class="box">
            <div class="box-header">
                <h3 class="box-title">Data base name : {{ nameDb }}</h3>
                <h3 class="box-title" ng-show="selectedTable">Data Table name : {{ selectedTable }}</h3>
            </div>
            <!-- /.box-header -->
            <div class="box-body">
                <div id="example1_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="dataTables_length" id="example1_length">
                                <label>Show
                                    <select name="nameTable" ng-model="selectedTable" ng-change="renderTable()">
                                        <option value="">---Please select---</option>
                                        <option ng-repeat="table in nameTables" value="{{table}}">{{table}}</option>
                                    </select>
                                    table</label>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="dataTables_length" id="example1_length" ng-show="selectedTable">
                                <label>Show
                                    <select name="visible-td" ng-model="tableLimit" ng-change="renderTable()">
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="25">25</option>
                                        <option value="50" selected>50</option>
                                        <option value="75">75</option>
                                        <option value="100">100</option>
                                    </select>
                                    entries</label>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div id="example1_filter" class="dataTables_filter" ng-show="selectedTable"><label>Search:<input type="search"
                                                                                                     class="form-control input-sm"
                                                                                                     placeholder=""
                                                                                                     aria-controls="example1"></label>
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <!-- Indicates a successful or positive action -->
                            <button type="button" class="btn btn-success pull-right" ng-show="selectedTable" ng-click="clickToOpen()">Add</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <table ng-show="selectedTable" id="example1" class="table table-bordered table-striped dataTable" role="grid"
                                   aria-describedby="example1_info">
                                <thead>
                                    <tr role="row">
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
                        </div>
                    </div>
                    <div class="row" ng-show="selectedTable">
                        <div class="col-sm-5">
                            <div class="dataTables_info" id="example1_info" role="status" aria-live="polite">Showing 1
                                to 10 of 57 entries
                            </div>
                        </div>
                        <div class="col-sm-7">
                            <div class="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                <ul class="pagination">
                                    <li class="paginate_button previous disabled" id="example1_previous"><a href="#"
                                                                                                            aria-controls="example1"
                                                                                                            data-dt-idx="0"
                                                                                                            tabindex="0">Previous</a>
                                    </li>
                                    <li class="paginate_button active"><a href="#" aria-controls="example1"
                                                                          data-dt-idx="1" tabindex="0">1</a></li>
                                    <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="2"
                                                                    tabindex="0">2</a></li>
                                    <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="3"
                                                                    tabindex="0">3</a></li>
                                    <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="4"
                                                                    tabindex="0">4</a></li>
                                    <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="5"
                                                                    tabindex="0">5</a></li>
                                    <li class="paginate_button "><a href="#" aria-controls="example1" data-dt-idx="6"
                                                                    tabindex="0">6</a></li>
                                    <li class="paginate_button next" id="example1_next"><a href="#"
                                                                                           aria-controls="example1"
                                                                                           data-dt-idx="7" tabindex="0">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.box-body -->
        </div>
<?php
}