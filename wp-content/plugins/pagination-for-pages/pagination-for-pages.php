<?php
/*
Plugin Name: Pagination for Pages
Plugin URI:  http://binarym.com/2011/pagination-for-pages/
Description: Create pagination for pages (or any other custom post type).
Version: 0.1.1
Author: Matt McInvale - BinaryM Inc.
Author URI: http://binarym.com/ 
*/



function pagination_for_pages($getPagesQuery='sort_column=menu_order&sort_order=asc') {
	global $post;

	// first, we'll query all pages with a similar parent	
	$getPages = get_pages('child_of='.$post->post_parent.'&parent='.$post->post_parent .'&'.$getPagesQuery);
	
	// maybe our post type doesn't have a parent?
	if (empty($getPages)) {
		$getPages = get_posts('numberposts=-1&' . $getPagesQuery);
	}

	$count = 1;	

	$output = '<ul class="paginationForPages">' . "\n";

	if (count($getPages) > 1) {

		foreach ($getPages as $page) {

			// same last item for next loop.
			$prevItem = $thisItem;

			$thisItem = '<li><a href="'. get_permalink($page->ID) .'" title="'.esc_attr($page->post_title).'">%ANCHOR%</a></li>' . "\n";

			if ($nextItemTest) {
				$nextItem = str_replace('%ANCHOR%', '&gt;', $thisItem);
				unset($nextItemTest);
			}

			if ($page->ID == $post->ID) {
				$backItem = str_replace('%ANCHOR%', '&lt;', $prevItem);
				$nextItemTest = true;

				$listOutput .= str_replace('%ANCHOR%', '<strong>' . $count . '</strong>', $thisItem);
			} else {
				$listOutput .= str_replace('%ANCHOR%', $count, $thisItem);
			}

		
			$count++;
		}
	}


	$output .= $backItem;
	$output .= $listOutput;
	$output .= $nextItem;

	$output .= '</ul>';

	return $output;
}

?>