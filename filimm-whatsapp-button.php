<?php
/**
 * Plugin Name: Whatsapp Button
 * Plugin URI: https://github.com/filimm/whatsapp-button
 * Description: Adiciona botão de whatsapp no wordpress
 * Version: 1.0
 * Author: Filipe Marques
 * Author URI: http://www.filipemarques.net
 */

/**
 * Proper way to enqueue scripts and styles.
 */
function whatsapp_button_script() {
  wp_enqueue_script( 'whatsapp-button-js', plugins_url( '/js/whatsapp-button.js', __FILE__ ), array(), '1.0.0', true);
}

add_action( 'wp_enqueue_scripts', 'whatsapp_button_script' );