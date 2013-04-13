/**
 * @name		jQuery GoLive Plugin
 * @author		Jason St-Cyr
 * @version 	1.0
 * @url			http://theagilecoder.wordpress.com
 *
 * This module is used for a go-live countdown.  Allows for previewing the two iframes, toggling visibility,
 * and refreshing the contents of the iframe at the specified refresh rate.
 */

(function ($) {

	//Define refresh function
	$.fn.refreshFrames = function (refreshRate) {
		(function refresh() {
			//Refresh the frame that is going to be hidden, so it will be reloaded for the next show
			$("iframe.refreshable").attr("src", function (i, val) { return val; });

			//Hide if visible, show if not
			$("#newsite").toggle();
			$("#livesite").toggle();

			//Continue looping at specified refresh rate
			setTimeout(refresh, refreshRate);
		})();
	}

})(jQuery);
