(function ($) {

    function init() {
        function fixSidebarHeight() {
            var $sidebar = $('.sidebar');
            var $sidebarStyles = $sidebar.attr('style') || "";
            $sidebarStyles += ' min-height: ' + $(document).height() + 'px;';
            $sidebar.attr('style', $sidebarStyles);
        }
        fixSidebarHeight();
        setTimeout(function () {
            fixSidebarHeight();
        }, 3000);
    }

    // run init on document ready
    $(document).ready(init);

})(jQuery);