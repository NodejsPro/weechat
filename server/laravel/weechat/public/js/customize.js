$(document).ready(function() {
    $('.panel .tools-setting .fa').click(function () {
        var el = $(this).parents(".panel-item").children(".panel-body, .panel-heading-collapse");
        if ($(this).hasClass("fa-chevron-down")) {
            $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
            el.slideUp(200);
        } else {
            $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
            el.slideDown(200);
        }
        return false
    });
    $('.popover-markup>.trigger').on('shown.bs.popover',function(e){
        var $link =$(this);
        var winW=$(window).width();
        var poL=$link.offset().left+$link.width();
        var newW=winW-poL-60;
        var poId=$link.attr('aria-describedby');
        var $po=$('#'+poId);
        $po.find('.popover-content').width(newW)
    });
    $('.sidebar-toggle-box .fa-bars').click(function (e) {
        setTimeout(styleFixedSlidebar, 500);
    });
    styleSlideMenu();

    //init function menu info
    initTooltipMenu();

    previewWebchat();
});
$( window ).load(function() {
    //Fixed right Sliderbar style
    if($('.scenario-edit').length > 0) {
        styleFixedSlidebar();

        if ($.fn.slimScroll) {
            if (!$('.conversation_index').length){
                $('.fixedsidebar-content').slimscroll({
                    height: $('.fixedsidebar-content').innerHeight() + 'px',
                    wheelStep: 20
                });
            }else {
                $('.fixedsidebar-content').slimscroll({
                    height: '250px',
                });
            }
        }
    }
});
$( window ).resize(function() {
    styleFixedSlidebar();
    styleSlideMenu();
});

function styleSlideMenu() {
    var windown_h = $( window ).height(),
        header_h  = 0;

    if($('header.header').innerHeight() != void 0 && $('header.header').innerHeight() != '') {
        header_h = $('header.header').innerHeight();
    }
    $('.main-sidebar #sidebar').css({
        'min-height': (windown_h - header_h) + 'px',
        'margin-top': header_h + 'px'
    });
}

function setMesssage(message , type, element, is_hide, is_append) {
    var hide_time = 5000;
    if(element == void 0 || element == '' || !element) {
        element = $('.box_message');
    }

    if (message != '' && message != null) {
        var type_class = 'success',
            content;
        if(type == '' || type == void 0 || type == 1){
            type_class = 'danger';
        }
        content = '<p class="alert alert-' + type_class + '">' + message + ' <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a></p>';
        if(is_append != void 0 && is_append){
            element.append(content).show();
        }else{
            element.html(content).show();
        }
        //hide message box
        if(is_hide != void 0 && is_hide) {
            element.delay(hide_time).fadeOut('fast');
        }
    } else {
        element.html('').show();
    }
}

function styleFixedSlidebar() {
    //except efo type
    var windown_w       = $( window ).width(),
        windown_h       = $( window ).height(),
        fixedsidebar    = $('.fixedsidebar');
    if(windown_w < 992) {
        fixedsidebar.css('position', 'initial');
        fixedsidebar.css('width', 'auto');
        fixedsidebar.find('.slimScrollDiv').css('position', 'initial');
    } else {
        //set width
        var wrapper             = $('.wrapper').innerWidth(),
            scenario_body       = $('.scenario-edit .scenario-body').innerWidth(),
            parent              = $('.fixedsidebar_ctn'),
            parent_padding      = parseInt(parent.css('padding-left')) + parseInt(parent.css('padding-right')) + parseInt(parent.css('margin-left')) + parseInt(parent.css('margin-left')),
            fixedsidebar_width = wrapper - scenario_body - parent_padding;
        fixedsidebar.css('position', 'fixed');
        fixedsidebar.css('width', fixedsidebar_width + 'px');
    }
    //set height, slidebar height = screen height - elements
    var nav_top             = $('.top-nav').height(),
        space               = 208,
        height_main         = windown_h - nav_top,
        common_error_box    = $('.message_bot_area .common_error'),
        group_box           = $('.add_group_box'),
        group_box_header    = 0;

    if(group_box.css('display') != 'none') {
        group_box_header += group_box.innerHeight() + parseInt(group_box.css('margin-bottom'));
    }
    if(common_error_box.length) {
        group_box_header += common_error_box.innerHeight() + parseInt(common_error_box.css('margin-bottom'));
    }

    var height_box  = height_main - space - group_box_header;

    //not set for efo scenario page
    if(!$('.scenario-edit').hasClass('efo-efit')) {
        //except margin bottom
        height_main -= 20;
        $('.fixedsidebar').css('height',  height_main + 'px');
        fixedsidebar.find('.slimScrollDiv').css('height', height_box + 'px');
        $('.fixedsidebar-content').css('height', height_box + 'px');

    } else {
        $('.fixedsidebar').css('height',  height_main + 'px');
    }

    //set style for button update in last slidebar
    fixedsidebar.find('.update_scenario .space_btn_update').css('height',  height_main - 65 + 'px');
}

//create tooltip for menu
function initTooltipMenu() {
    //add menu info element
    $('.sidebar-menu > li').each(function(i, e) {
        if($(this).attr('data-help_content') != void 0 && $(this).attr('data-help_content') != '') {
            var data_help_content = $(this).attr('data-help_content');
            var menu_info_elm = "<div class='menu_info_box' data-tooltip-animate-function='spin' data-tooltip-stickto='right' data-tooltip-persistent='false' data-tooltip-maxWidth='460px'><span class='menu_info' data-tooltip='" + data_help_content + "'>" +
                    "<i class='fa fa-question-circle' aria-hidden='true'></i>" +
                    "</span>" +
                "</div>";
            $(this).append(menu_info_elm);
        }
    });
}

function previewWebchat() {
    if($('.preview_button_box').length) {
        setTimeout(function() {
            $('.preview_button_box button#preview_chatbox').removeClass('disabled');
        }, 2000);

        $(document).on('click', '.preview_button_box #preview_chatbox:not(.disabled)', function () {
            $(".wc-webchat-ctn").show();
            //enable restart button
            $(this).parents('.preview_button_box').find('#restart_chatbox').removeClass('disabled');
        });
        $(document).on('click', '.preview_button_box #restart_chatbox:not(.disabled)', function (e) {
            $('.preview_button_box button').addClass('disabled');

            var iframe_src = $('.wc-webchat-ctn #wc-webchat').attr('src');
            //add force_log_flg param
            iframe_src += '&force_log_flg=2';

            $(".wc-webchat-ctn").hide();
            $('.wc-webchat-ctn #wc-webchat').attr('src', '');
            $('.wc-webchat-ctn #wc-webchat').attr('src', iframe_src);

            setTimeout(function() {
                $(".wc-webchat-ctn").show();
            }, 1000);
            setTimeout(function() {
                $('.preview_button_box button').removeClass('disabled');
            }, 2000);
        });
    }
}

function base64Encode(string, default_value) {
    //encode base 64
    if(string != void 0 && string != '') {
        string = string.replace(/[\\]/g, '');
        return window.btoa(unescape(encodeURIComponent(string)));
    } else {
        if(default_value == void 0) {
            default_value = '';
        }
        return default_value;
    }
}

function base64Decode(string, default_value) {
    var result = '';
    if(string != void 0 && string != '') {
        try {
            result = window.decodeURIComponent(escape(window.atob(string)));
        } catch(e) {

        }
    } else if(default_value != void 0) {
        result = default_value;
    }
    return result;
}