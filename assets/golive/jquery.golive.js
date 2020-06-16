/**
 * @name		jQuery GoLive Plugin
 * @author		Jason St-Cyr
 * @version 	1.1
 * @url			https://github.com/jst-cyr/GoLiveCountdown
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
			$(".sitepreview").toggle();

			//Continue looping at specified refresh rate
			setTimeout(refresh, refreshRate);
		})();
	}

})(jQuery);
