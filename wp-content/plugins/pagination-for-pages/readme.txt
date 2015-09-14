=== Plugin Name ===
Contributors: mcinvale, binarym
Tags: pages, cms, awesome
Requires at least: 2.7
Tested up to: 3.5.1
Stable tag: trunk

Easily create pagination type navigation between pages (or any other custom post type)
 
== Description ==

**Pagination for Pages** is a very simple plugin that creates navigation between pages (or any other custom post type) with the same parent.

This plugin gives you one new function, `pagination_for_pages($getPagesQuery='sort_column=menu_order&sort_order=asc')`

1. **getPagesQuery** - Passed directly to [get_pages](http://codex.wordpress.org/Function_Reference/get_pages), read the codex to find all available options. Defaults to menu_order ascending & pages.


[More documentation for Pagination for Pages on BinaryM.com](http://binarym.com/2011/pagination-for-pages/)

== Installation ==

1. Upload `pagination-for-pages.php` to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress
1. Place `<?php echo pagination-for-pages(''); ?>` in your templates (or use a hook)
1. See [our site](http://binarym.com/2011/pagination-for-pages/) for more examples

== Frequently Asked Questions ==

None at this point. [Contact us](http://binarym.com/contact/) if you have any and I'll add them here.
