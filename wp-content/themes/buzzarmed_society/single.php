<?php
/**
 * The Template for displaying all single posts.
 *
 * @package zerif
 */
get_header(); ?>

<div class="clear"></div>

<?php
//        if($_SERVER['REQUEST_URI'] == '/' ) {
//    ?>
		<?php while ( have_posts() ) : the_post();
				?>
			<?php
            // Must be inside a loop.

            if ( has_post_thumbnail() ) {
				 echo get_the_post_thumbnail(the_ID(), 'post-thumbnails-bigs');
				 ?>
				 <div id='title-single-post'><h1><?php echo the_title()?></h1></div>
            <?php
            } else {
//                echo '<img src="' . get_bloginfo( 'stylesheet_directory' ) . '/images/thumbnail-default.jpg" />';
            ?>

                        <script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=false&amp;v=3"></script>

            <script type="text/javascript">
                function initialize() {
                    google.maps.visualRefresh = true;
                    var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
                        (navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
                    if (isMobile) {
                        var viewport = document.querySelector("meta[name=viewport]");
                        viewport.setAttribute('content', 'initial-scale=1.0, user-scalable=no');
                    }
                    var mapDiv = document.getElementById('googft-mapCanvas');
                    mapDiv.style.width = '100%';
                    mapDiv.style.height = isMobile ? '250px' : '500px';
                    var zoom = isMobile ? 3 : 4;
                    var mapOption = {
//                center: new google.maps.LatLng(40.4754846587654, -96.86768085),
                        center: new google.maps.LatLng(37.4754846587654, -126.86768085),
                        scrollwheel: false,
                        zoom: zoom,
                        disableDefaultUI: true,
                        mapTypeControlOptions: {
                            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'buzzarmcrimeus']
                        }
                    };
                    var map = new google.maps.Map(mapDiv, mapOption);
                    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend-open'));
                    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(document.getElementById('googft-legend'));

                    var crimeMapStyles = [
                        { featureType: 'road', elementType: 'all', stylers: [ { visibility: 'off'} ] },
                        { featureType: 'poi', elementType: 'all', stylers: [ { visibility: 'off' } ] },
                        { featureType: 'water', elementType: 'all', stylers: [{ color: '#7393f6' }] },
                        /*       { featureType: 'landscape', elementType: 'all', stylers: [{ color: '#eeeeee' }] }, */
                        { featureType: "administrative.country", elementType: "labels.text.fill",stylers: [ { "color": "#555555" } ] },
                        { featureType: 'administrative.country', elementType: 'geometry.stroke', stylers: [{color: "#333333"}] },
                        /*       { featureType: "administrative.country", elementType: "labels.text", stylers: [ { visibility: "off" } ] }, */
                        /*       { featureType: 'administrative.province', elementType: 'labels.text.stroke', stylers: [{color: "#a0a0a0"}] }, */
                        { featureType: 'administrative.province', elementType: 'labels.text.fill', stylers: [{color: "#888888"}] },
                        { featureType: 'administrative.province', elementType: 'geometry.stroke', stylers: [{color: "#bbbbbb"}] }


                    ];

                    var styledMapOptions = {
                        name: 'Theft Reports'
                    };

                    var crimeMapType = new google.maps.StyledMapType(
                        crimeMapStyles, styledMapOptions
                    );

                    map.mapTypes.set('buzzarmcrimeus', crimeMapType);
                    map.setMapTypeId('buzzarmcrimeus');

                    layer = new google.maps.FusionTablesLayer({
                        map: map,
                        heatmap: { enabled: false },
                        query: {
                            select: "col0",
                            from: "1wu-0pgZknv4b62bIGH3NxO12NldkFnKQYNN-UIcT",
                            where: ""
                        },
                        styles: [{
                            markerOptions: {
                                /* 		    iconName: "shaded_dot" */
                                iconName: "red_blank"
                            }
                        }],
                        options: {
                            styleId: 2,
                            templateId: 2
                        }

                    });
                }

                google.maps.event.addDomListener(window, 'load', initialize);

                var mapDiv = document.getElementById('googft-mapCanvas');

                google.maps.event.addDomListener(window, 'click', function(e){
                    if( e.target.parentNode.classList[0] ==="googft-info-window"){
                        e.preventDefault();
                        var mapDiv = document.getElementById('content');
                        var coordBlog = getCoords(mapDiv);
                        jQuery('html, body').animate({
                            scrollTop: coordBlog.top
                        }, 500);
                    }

                });

                function getCoords(elem,delta) {
                    if(!delta){
                        delta = 0;
                    }
                    // (1)
                    var box = elem.getBoundingClientRect();

                    var body = document.body;
                    var docEl = document.documentElement;

                    // (2)
                    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
                    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

                    // (3)
                    var clientTop = docEl.clientTop || body.clientTop || 0;
                    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

                    // (4)
                    var top = box.top + scrollTop - clientTop + (delta);
                    var left = box.left + scrollLeft - clientLeft;

                    return {
                        left: left,
                        top: top
                    };
                }
            </script>
            <style>
                #googft-mapCanvas {
                    height: 500px;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                }
            </style>

    <section id="map-section">
        <div class="l-container map__container clearfix">
            <div class="map-jumbo">
                <i class="map__hand-icon"></i>
                <h2 class="map-jumbo__heading">USA theft rates</h2>
            </div>
        </div><!-- /.l-container -->
        <!-- start google maps-->
        <div id="googft-mapCanvas"></div>
        <!-- end google maps-->
        <div class="l-container map__container map__container-2 clearfix">
            <div class="map-jumbo">
                <p class="map-jumbo__paragraph">
                    Crime is a constant part of life in many tourist <br>
                    meccas, including New York and Los Angeles. <br>
                    Even more unregistered thefts happen in the USA, <br>
                    but you can travel with confidence using Buzzarm.
                </p>
                <button class="btn btn-tomato">Go to buzzarm society</button>
            </div>
        </div><!-- /.l-container -->

    </section>

            <?php } ?>

		<?php endwhile; ?>
	<!-- / END TOP BAR -->
    <div class="breadcrumbs" xmlns:v="http://rdf.data-vocabulary.org/#">
        <?php if(function_exists('bcn_display'))
        {
             bcn_display();
        }?>
    </div>
<?php //} ?>
<!---->
</header> <!-- / END HOME SECTION  -->
<div id="content" class="site-content">
<div class="container">

<div class="content-left-wrap col-md-9">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">



		<?php while ( have_posts() ) : the_post();
				?>
				<?php
				 get_template_part( 'content', 'single' );

//				 zerif_post_nav();

				// If comments are open or we have at least one comment, load up the comment template
				if ( comments_open() || '0' != get_comments_number() ) :
					comments_template('');
				endif;
			endwhile; // end of the loop. ?>
		</main><!-- #main -->
	</div><!-- #primary -->
</div>
<div class="sidebar-wrap col-md-3 content-left-wrap">
	<?php get_sidebar(); ?>
</div><!-- .sidebar-wrap -->
</div>
<?php get_footer(); ?>