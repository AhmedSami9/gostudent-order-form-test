<?php
/**
 * Plugin Name: GoStudent Order Form
 * Description: React-based GoStudent style order form with RTL support and dynamic pricing.
 * Version: 1.0.0
 * Author: Ahmed Samy
 */

if (!defined('ABSPATH')) {
    exit;
}

function gostudent_order_form_assets() {
    $script_path = plugin_dir_path(__FILE__) . 'assets/app.js';
    $style_path = plugin_dir_path(__FILE__) . 'assets/style.css';
    $logo_url = plugin_dir_url(__FILE__) . 'assets/logo.png';

    wp_register_script(
        'gostudent-order-form-app',
        plugin_dir_url(__FILE__) . 'assets/app.js',
        array(),
        file_exists($script_path) ? filemtime($script_path) : '1.0.0',
        true
    );

    wp_add_inline_script(
        'gostudent-order-form-app',
        'window.gostudentOrderFormAssets = ' . wp_json_encode(array(
            'logoUrl' => $logo_url,
            'shareImageUrl' => $logo_url,
        )) . ';',
        'before'
    );

    wp_register_style(
        'gostudent-order-form-style',
        plugin_dir_url(__FILE__) . 'assets/style.css',
        array(),
        file_exists($style_path) ? filemtime($style_path) : '1.0.0'
    );
}
add_action('wp_enqueue_scripts', 'gostudent_order_form_assets');

function gostudent_order_form_has_shortcode() {
    if (!is_singular()) {
        return false;
    }

    $post = get_post();

    return $post && has_shortcode($post->post_content, 'gostudent_order_form');
}

function gostudent_order_form_social_meta() {
    if (!gostudent_order_form_has_shortcode()) {
        return;
    }

    $title = 'احجز باقة الحصص مع المدرسة.كوم';
    $description = 'اختر باقة الحصص المناسبة لطفلك واترك بياناتك، وسيتواصل معك فريق المدرسة.كوم لتأكيد الحجز وخطة التعلم.';
    $image_url = plugin_dir_url(__FILE__) . 'assets/logo.png';
    $page_url = get_permalink();

    echo "\n" . '<meta name="description" content="' . esc_attr($description) . '" />' . "\n";
    echo '<meta property="og:type" content="website" />' . "\n";
    echo '<meta property="og:locale" content="ar_AR" />' . "\n";
    echo '<meta property="og:site_name" content="المدرسة.كوم" />' . "\n";
    echo '<meta property="og:title" content="' . esc_attr($title) . '" />' . "\n";
    echo '<meta property="og:description" content="' . esc_attr($description) . '" />' . "\n";
    echo '<meta property="og:url" content="' . esc_url($page_url) . '" />' . "\n";
    echo '<meta property="og:image" content="' . esc_url($image_url) . '" />' . "\n";
    echo '<meta property="og:image:type" content="image/png" />' . "\n";
    echo '<meta property="og:image:width" content="2096" />' . "\n";
    echo '<meta property="og:image:height" content="1099" />' . "\n";
    echo '<meta name="twitter:card" content="summary_large_image" />' . "\n";
    echo '<meta name="twitter:title" content="' . esc_attr($title) . '" />' . "\n";
    echo '<meta name="twitter:description" content="' . esc_attr($description) . '" />' . "\n";
    echo '<meta name="twitter:image" content="' . esc_url($image_url) . '" />' . "\n";
}
add_action('wp_head', 'gostudent_order_form_social_meta', 5);

function gostudent_order_form_body_classes($classes) {
    if (gostudent_order_form_has_shortcode()) {
        $classes[] = 'gostudent-order-form-page';
    }

    return $classes;
}
add_filter('body_class', 'gostudent_order_form_body_classes');

function gostudent_order_form_wordpress_reset_css() {
    if (!gostudent_order_form_has_shortcode()) {
        return;
    }

    echo "\n" . '<style id="gostudent-order-form-wordpress-reset">' . "\n";
    echo 'html:has(#gostudent-order-root),body.gostudent-order-form-page{max-width:100%!important;overflow-x:hidden!important;scrollbar-color:#4a8b4f #edf6eb;}' . "\n";
    echo 'body.gostudent-order-form-page::-webkit-scrollbar{width:12px;height:12px;}body.gostudent-order-form-page::-webkit-scrollbar-track{background:#edf6eb;}body.gostudent-order-form-page::-webkit-scrollbar-thumb{background:#4a8b4f;border:3px solid #edf6eb;border-radius:999px;}body.gostudent-order-form-page::-webkit-scrollbar-thumb:hover{background:#2f6f3d;}' . "\n";
    echo 'body.gostudent-order-form-page :where(.entry-header,.wp-block-post-title,.entry-title,.post-title,.page-title,.wp-block-query-title){display:none!important;margin:0!important;padding:0!important;}' . "\n";
    echo 'body.gostudent-order-form-page :where(.wp-site-blocks,.site,.site-content,.content-area,#primary,.site-main,main,article,.entry-content,.wp-block-post-content){width:100%!important;max-width:none!important;margin-top:0!important;padding-top:0!important;overflow-x:hidden!important;}' . "\n";
    echo 'body.gostudent-order-form-page .wp-site-blocks>*+*,body.gostudent-order-form-page .entry-content>*:first-child,body.gostudent-order-form-page .wp-block-post-content>*:first-child{margin-top:0!important;margin-block-start:0!important;}' . "\n";
    echo 'body.gostudent-order-form-page #gostudent-order-root{display:block!important;width:100%!important;max-width:100%!important;margin-top:0!important;margin-inline:0!important;padding-top:0!important;}' . "\n";
    echo 'body.gostudent-order-form-page #gostudent-order-root .order-page{padding-top:0!important;border-radius:0 0 28px 28px;}' . "\n";
    echo '@media (max-width:720px){body.gostudent-order-form-page #gostudent-order-root .order-page{border-radius:0 0 18px 18px;}}' . "\n";
    echo '</style>' . "\n";
}
add_action('wp_head', 'gostudent_order_form_wordpress_reset_css', 20);

function gostudent_order_form_shortcode() {
    wp_enqueue_script('gostudent-order-form-app');
    wp_enqueue_style('gostudent-order-form-style');

    $logo_url = plugin_dir_url(__FILE__) . 'assets/logo.png';

    return sprintf(
        '<div id="gostudent-order-root" data-logo-url="%s" data-share-image-url="%s"></div>',
        esc_url($logo_url),
        esc_url($logo_url)
    );
}
add_shortcode('gostudent_order_form', 'gostudent_order_form_shortcode');
