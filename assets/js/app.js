(function ($) {

    function init() {
        var $sidebar = $('.sidebar');
        var $sidebarStyles = $sidebar.attr('style') || "";
        $sidebarStyles += ' min-height: ' + $(document).height() + 'px;';
        $sidebar.attr('style', $sidebarStyles);
    };

    // run init on document ready
    $(document).ready(init);

})(jQuery);