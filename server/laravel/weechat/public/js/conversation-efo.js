function fillBotChatEfo(message_data, appendHead) {
    if(message_data.message != void 0 && message_data.message != '' && message_data.message.constructor == Array){
        setPreviousMessageDefault();
        var message = message_data.message;
        var bot_chat = initChat(message_data, message_data.type),
            time_of_message = '',
            item = null,
            wrap_content = bot_chat.find('.ctext-wrap'),
            bot_message_type = common_data['bot_message_type'];
        if(message_data['created_at'] != void 0) {
            time_of_message = getDateByTimezone(message_data['created_at'], 'H:mm:ss');
        }
        bot_chat.find('.time_of_message').html(time_of_message);
        for(var i = 0 ; i < message.length; i++){
            item = $('.template-efo .item').clone();
            if(message[i].type != void 0 && message[i].type == bot_message_type.text){
                item.addClass('text-item').html(str_replace(message[i].content));
                wrap_content.addClass('left-text');
            } else {
                return;
            }
            bot_chat.find('.text_message').append(item);
        }
        if(appendHead != void 0 && appendHead){
            $('.conversation_index .chat_content .conversation-list').prepend(bot_chat);
        }else{
            $('.conversation_index .chat_content .conversation-list').append(bot_chat);
        }
    }
}

function viewEfoSelectBox(item_content, type, message) {
    if(message.list != void 0){
        var answer = [],
            tmp_index = 0,
            select_container = $('.template-efo .select_template .select_container').clone(),
            bot_content_type_flip = common_data['bot_content_type_flip'];
        viewText(select_container.find('.title'), message.title, 'title label-text');
        if(message.answer != void 0 && message.answer.constructor == Array){
            answer = message.answer;
        }
        $.each(message.list, function (ind, val) {
            var select_item = $('.template-efo .select_template .'+ bot_content_type_flip[type] +'_box_efo').clone();
            select_item.removeClass('select-group').iCheck();
            if(answer.indexOf(ind + '') > -1){
                tmp_index ++;
                select_item.addClass('checked input-checked');
                select_item.find('.i'+ bot_content_type_flip[type] +'_minimal').addClass('checked');
            } else{
                select_item.addClass('input-unchecked');
            }
            select_item.find('.label-title').addClass('label-text').html(val);
            select_container.append(select_item);
        });
        if(tmp_index > 0){
            item_content.attr('answer', '1');
        }
    }
    item_content.append(select_container);
    return item_content;
}

function viewEfoRadioImage(item_content, message, log_id) {
    if(message.list != void 0){
        var radio_image = $('.template-efo .radio-image-template .radio-image-container').clone(),
        date = new Date(),
        base_name = (!isEmpty(log_id)? log_id : date.getTime()),
        msg_answer = [];

        viewText(radio_image.find('.title'), message.title);
        if(!isEmpty(message.answer)){
            msg_answer = message.answer[0];
        }
        $.each(message.list, function (ind, item_box) {
            var item_box_element = $('.template-efo .radio-image-template .radio-image-box').clone();
            item_box_element.addClass('radio-box-' + item_box.length);
            var width_item = item_box.length ? 12 / (item_box.length) : 12,
                name_input = base_name + '-radio';
            $.each(item_box, function (ind, val) {
                var item = $('.template-efo .radio-image-template .radio-image-item').clone();
                item.addClass('col-xs-' + width_item + ' radio-item-' + ind);
                item.find('input').attr('name', name_input);
                viewText(item.find('.label-title'), val.comment);
                initIcheckType(item.find('.icheck'));
                if(!isEmpty(val.image_url)){
                    item.find('img').attr('src', val.image_url);
                }
                item_box_element.append(item);
            });
            radio_image.append(item_box_element);
        });
    }
    item_content.append(radio_image);
    fillRadioAnswer(item_content, msg_answer);
    return item_content;
}

function viewInput(item_content, message) {
    if(message.list != void 0){
        var answer = [],
            input_length = message.list.length,
            tmp_index = 0,
            input_wrap = $('.template-efo .item').clone(),
            answer_confirm = '',
            template_type_class,
            template_input = common_data['template_input'],
            template_input_flip = common_data['template_input_flip'],
            tel_input_type = common_data['tel_input_type'];
        if(message.answer != void 0 && message.answer.constructor == Array){
            answer = message.answer;
        }
        item_content = viewTitle(item_content, message.title, 'title label-text');
        if(message.template_type == template_input.email_confirm || message.template_type == template_input.password_confirm){
            if(answer.length > 0){
                answer_confirm = message.answer[0];
            }
            template_type_class = 'confirm';
        } else if(message.tel_input_type != void 0 && message.tel_input_type == tel_input_type.hyphen){
            template_type_class = 'tel_hyphen';
        } else if(message.template_type == template_input.text && message.list.length > 1){
            template_type_class = 'text';
        }
        input_wrap.addClass('col-xs-12 input-box ' + template_input_flip[message.template_type] + '_box').removeClass('item');
        $.each(message.list, function (ind, val) {
            var input_box = $('.template-efo .input-group .input-content').clone();
            if(template_type_class != void 0 && template_type_class == 'confirm'){
                input_box.addClass('col-xs-12 input-confirmation-' + ind);
            } else if(template_type_class != void 0 && template_type_class == 'tel_hyphen'){
                input_box.addClass('input_content_tel_' + ind + ' col-xs-' + (input_length ? (12/input_length) : 12));
            } else if(template_type_class != void 0 && template_type_class == 'text'){
                input_box.addClass('input_content_text_'+ ind+ ' col-xs-' + (input_length ? (12/input_length) : 12));
            }
            var input_item = input_box.find('.input').attr('disabled', 'disabled');
            if(answer_confirm != void 0 && answer_confirm != ''){
                tmp_index ++;
                input_item.val(answer_confirm);
            } else if(answer[ind] != void 0 && answer[ind] != ''){
                tmp_index ++;
                input_item.val(answer[ind]);
            }else{
                input_item.attr('placeholder', val.placeholder);
            }
            changeInputType(input_item, message.template_type);
            input_wrap.append(input_box);
        });
        item_content.append(input_wrap);
        if(tmp_index == message.list.length){
            item_content.attr('answer', '1');
        }
    }
    return item_content;
}

function changeInputType(item_content, type) {
    var template_input = common_data['template_input'];
    switch (type){
        case template_input.password:
        case template_input.password_confirm:
            item_content.attr('type', 'password');
            break;
    }
}

function viewTextarea(item_content, message) {
    item_content = viewTitle(item_content, message.title, 'title label-text');
    var text_area = $('.template-efo .text-area').clone(),
        tmp_index = 0;
    if(message.answer != void 0 && message.answer != ''){
        tmp_index ++;
        var number_line = message.answer.split(/\r\n|\r|\n/).length;
        if(number_line > 5){
            text_area.height('210px')
        }
        text_area.text(message.answer)
    } else{
        text_area.attr('placeholder', message.placeholder);
    }
    item_content.append(text_area);
    if(tmp_index > 0){
        item_content.attr('answer', '1');
    }
    return item_content;
}

function viewTitle(item, title_name, class_name) {
    if(title_name != void 0 && title_name != ''){
        var title = $('.template-efo .item').clone();
        title.removeClass('item').html(str_replace(title_name)).addClass(class_name);
        item.append(title);
    }
    return item;
}

function viewPostalCode(item_content, message) {
    if(message.list != void 0){
        var answer = [],
            tmp_index = 0;
        if(message.answer != void 0 && message.answer != '') {
            answer = message.answer;
        }
        $.each(message.list, function (ind, val) {
            var item = $('.template-efo .postal-code-group .postal-code-item').clone();
            item.removeClass('postal-code-item').addClass(val.type)
            if(answer[val.type] != void 0 && answer[val.type] != ''){
                tmp_index ++;
                item.find('.input-content').val(answer[val.type]);
            } else{
                item.find('.input-content').attr('placeholder', val.placeholder);
            }
            var title = $('.template-efo .postal-code-group .' + val.type).clone().addClass('title label-text');
            item.prepend(title);
            item_content.append(item);
        });
        if(tmp_index == message.list.length){
            item_content.attr('answer', '1');
        }
    }
    return item_content;
}

function viewPullDown(item_content, message) {
    var answer = [],
        pull_down = $('.template-efo .pull-down-group .pull-down-item').clone(),
        pull_down_commnent = $('.template-efo .pull-down-group .pull-down-label').clone(),
        template_pulldown = common_data['template_pulldown'];
    viewText(pull_down.find('.title'), message.title);
    viewText(pull_down_commnent, message.comment);
    if(message.template_type == template_pulldown.brithday){
        var brithday_box = $('.template-efo .pull-down-group .birthday-box').clone();
        pull_down.append(brithday_box);
    } else if(message.template_type == template_pulldown.time){
        checkPullDownTime(pull_down);
    } else if(message.template_type == template_pulldown.date){
        var date_box = $('.template-efo .pull-down-group .date-box').clone();
        pull_down.append(date_box);
    } else if(message.template_type == template_pulldown.month_date){
        var date_box = $('.template-efo .pull-down-group .date-box').clone();
        date_box.find('.select-year-box').remove();
        date_box.find('.select-month-box').attr('class', 'input-content select-month-box col-xs-6');
        date_box.find('.select-day-box').attr('class', 'input-content select-day-box col-xs-6');
        pull_down.append(date_box);
    } else if(message.template_type == template_pulldown.date_time){
        checkPullDownDateTime(pull_down);
    } else if(message.template_type == template_pulldown.period_of_time){
        checkPullDownPeriodTime(pull_down);
    } else if(message.template_type == template_pulldown.period_of_day){
        checkPullDownPeriodDay(pull_down);
    } else if(message.template_type == template_pulldown.customize || message.template_type == template_pulldown.the_provinces_of_japan){
        checkPullDownCustomize(pull_down, message);
    } else if(message.template_type == template_pulldown.towns_and_villages){
        checkPullDownTownsVillages(pull_down, message);
    }
    pull_down.append(pull_down_commnent);
    if(message.answer != void 0 && message.answer != '') {
        answer = message.answer;
    }
    fillOptionAnswer(pull_down, answer, message.template_type);
    if(pull_down.attr('answer') == '1'){
        pull_down.removeAttr('answer');
        item_content.attr('answer', 1)
    }
    item_content.append(pull_down);
    return item_content;
}

function checkPullDownDateTime(parent) {
    if(parent.length){
        var date_box = $('.template-efo .pull-down-group .date-box').clone();
        var time_box = $('.template-efo .pull-down-group .time-box').clone();
        time_box.find('.time-item').attr('class', 'time-item');
        time_box.find('.select-hour-box').attr('class', 'input-content select-hour-box col-xs-4')
        time_box.find('.select-minute-box').attr('class', 'input-content select-minute-box col-xs-4')
        time_box.find('.time-spacing').remove();
        parent.append(date_box);
        parent.append(time_box);
    }
}

function checkPullDownPeriodTime(parent) {
    if(parent.length){
        var period_time_box1 = $('.template-efo .pull-down-group .time-box .time-item').clone();
        var time_spacing = $('.template-efo .pull-down-group .time-box .time-spacing').clone();
        var period_time_box2 = $('.template-efo .pull-down-group .time-box .time-item').clone();
        period_time_box1.attr('class', 'period-time-item select-box col-xs-5');
        period_time_box2.attr('class', 'period-time-item select-box col-xs-5');
        time_spacing.addClass('time-spacing-to');
        parent.append(period_time_box1);
        parent.append(time_spacing);
        parent.append(period_time_box2);
    }
}

function viewCardPayment(item_content, message) {
    var tmp_index = 0,
        card = $('.template-efo .card-payment-group .card-payment-box ').clone();
    viewText(card.find('.card_title'), message.title);
    var answers = message.answer ? message.answer : [];
    if(message.answer != void 0 && message.answer != ''){
        Object.keys(answers).forEach(function (key) {
            card.find('.content[name="' + key + '"]').val(answers[key])
        })
    } else{
        $.each(message.list, function (ind, val) {
            card.find('.content[name="' + (val.type) + '"]').attr('placeholder', val.placeholder)
        })
    }
    item_content.append(card);
    return item_content;
}

function checkPullDownPeriodDay(parent) {
    if(parent.length){
        var date_box1 = $('.template-efo .pull-down-group .date-box').clone();
        var date_box2 = $('.template-efo .pull-down-group .date-box').clone();
        var time_spacing = $('.template-efo .pull-down-group .time-box .time-spacing').clone();
        time_spacing.attr('class', 'time-spacing col-xs-12');
        parent.append(date_box1);
        parent.append(time_spacing);
        parent.append(date_box2);
    }
}

function checkPullDownCustomize(parent, message) {
    var message_list = message.list,
        first_title_msg = message.first_title,
        last_title_msg = message.last_title;
    if(parent.length && message_list != void 0 && message_list.length) {
        var customize_one_box_item = $('.template-efo .pull-down-group .customize-one-box').clone(),
            customize_two_box_item = $('.template-efo .pull-down-group .customize-two-box').clone();
        if (message_list.length == 1) {
            // customize 1 select
            viewText(customize_one_box_item.find('.first_title'), first_title_msg);
            viewText(customize_one_box_item.find('.last_title'), last_title_msg);
            var customize_item = customize_one_box_item;
            var select_class = 'select';
        } else {
            // customize 2 select
            viewText(customize_two_box_item.find('.first_title'), first_title_msg);
            viewText(customize_two_box_item.find('.last_title'), last_title_msg);
            var customize_item = customize_two_box_item;
            var select_class = '.customize-item-box:eq(:ind) select';
        }
        $(message_list).each(function (ind, val) {
            var select_current_class = select_class.replace(':ind', ind);
            for (var i = 0; i < val.length; i++) {
                var customize_option = '<option value="' + i + '">' + val[i] + '</option>';
                if (customize_item.find(select_current_class)) {
                    customize_item.find(select_current_class).append(customize_option);
                }
            }
            parent.append(customize_item);
        });
    }
}

function checkPullDownTownsVillages(parent, message) {
    var item = $('.template-efo .towns_and_villages_box').clone(),
        first_title_item = item.find('.first_title'),
        last_title_item = item.find('.last_title'),
        message_answer = message.answer;
    viewText(first_title_item, message.first_title, 'first_title label-text');
    viewText(last_title_item, message.last_title, 'last_title label-text');
    $(message_answer).each(function (ind, val) {
        if(!isEmpty(val)){
            var select_current_class = 'select:eq(' + ind + ')';
            var customize_option = '<option selected="selected" value="0">' + val + '</option>';
            if (item.find(select_current_class)) {
                item.find(select_current_class).append(customize_option);
            }
        }
    });
    parent.append(item);
}

function checkPullDownTime(parent) {
    if(parent.length){
        var time_box = $('.template-efo .pull-down-group .time-box').clone();
        time_box.find('.time-item').attr('class', 'time-item');
        time_box.find('.time-spacing').remove();
        parent.append(time_box);
    }
}

function viewLabel(item_content, message) {
    item_content.addClass('item-text');
    item_content = viewTitle(item_content, message.content, 'title label-text');
    return item_content;
}

function fillOptionAnswer(item, answer, template_type) {
    var tmp_index = 0;
    $(answer).each(function (ind, data) {
        var select = item.find('select:eq(' + ind + ')');
        if(answer[ind] != void 0 && answer[ind] != ''){
            tmp_index ++;
            if(template_type == template_pulldown.towns_and_villages){
                select.val(0);
            } else{
                select.val(answer[ind]);
            }
        } else{
            select.val('');
        }
    });
    if(tmp_index == answer.length && tmp_index > 0){
        item.attr('answer', 1);
    }
}

function viewTermsUse(item_content, message) {
    var answer = [];
    if(message.answer != void 0 && message.answer.constructor == Array){
        answer = message.answer;
    }
    var terms_item = $('.template-efo .terms-use-group').clone(),
        terms_text_area = terms_item.find('.terms-text-area');
    terms_item.removeClass('terms-use-group');
    viewText(terms_item.find('.title'), message.title);
    terms_text_area.text(message.content);
    if(answer.length > 0){
        terms_item.find('.icheck').addClass('checked');
        item_content.attr('answer', '1');
    }
    terms_item.find('.label-title').html(message.text_confirm).addClass('title label-text');
    item_content.append(terms_item);
    return item_content;
}

function viewFile(item_content, message) {
    var answer = message.answer ? message.answer : [],
        base_url_upload = common_data['base_url_upload'];
    var file_item = $('.template-efo .file_user_select_container').clone();
    if(!isEmpty(answer) && !isEmpty(answer.file_path) && !isEmpty(answer.file_name_origin)){
        file_item.find('.file_user_answer .label-title').html(answer.file_name_origin).attr('href', base_url_upload + '/' + answer.file_path);
    } else{
        file_item.find('.file_user_answer').remove();
    }
    item_content.append(file_item);
    return item_content;
}

function viewButton(item, flg) {
    var button_wrap = $('.template-efo .btn-action').clone(),
        btn_item = button_wrap.find('.button');
    if(flg == true){
        btn_item.html(btn_item.attr('data-ok'));
        btn_item.addClass('disabled');
    } else{
        btn_item.html(btn_item.attr('data-next'));
    }
    button_wrap.append(btn_item);
    item.append(button_wrap);
    return item;
}

function viewCalendar(item, message) {
    var calendar = $('.template-efo .calendar_box .calendar_item').clone(),
        calendar_type,
        answer = null,
        efo_template_calendar = common_data['template_calendar'];
    viewText(calendar.find('.title'), message.title);
    if(message.answer != void 0 && message.answer != ''){
        answer = message.answer;
    }
    if(message.template_type == efo_template_calendar.select){
        calendar_type = $('.template-efo .calendar_box .calendar_select').clone();
        $(calendar_type).addClass('not_init');
        calendar.append(calendar_type);
    } else if(message.template_type == efo_template_calendar.embed){
        calendar_type = $('.template-efo .calendar_box .calendar_embed').clone();
        $(calendar_type).addClass('not_init');
        calendar.append(calendar_type);
    } else{
        var calendar_type1 = $('.template-efo .calendar_box .calendar_select').clone(),
            calendar_type2 = $('.template-efo .calendar_box .calendar_select').clone();
        calendar.append('<div class="col-xs-6 calendar_box_from"><div class="calendar input-group datetimepicker">' + calendar_type1.html() + '</div></div>');
        calendar.append('<div class="col-xs-6 calendar_box_to"><div class="calendar input-group datetimepicker">' + calendar_type2.html() + '</div></div>');
        calendar.find('.calendar').addClass('not_init');
    }
    initDatePicker(calendar, answer, message.template_type);
    item.append(calendar);
    return item;
}

function initChat(message_data, type) {
    var message_chat_type = common_data['message_type'];
    if(type == message_chat_type.user){
        var item = $('.template_message .bot_chat').clone();
        item.find('.ctext-wrap').addClass('bot-border content-right');
        item.find('.chat-avatar').hide();
    } else {
        var item = $('.template_message .user_chat').clone();
        item.find('.ctext-wrap').addClass('user-border content-left');
        item.find('.chat-avatar').show();
    }
    item.addClass('message-wrapper');
    item.find('.ctext-wrap').attr('data-message_id', message_data._id);
    return item;
}

function viewCaptcha(item, message) {
    var captcha_item = $('.template-efo .captcha_box .captcha_container').clone();
    item.append(captcha_item);
    return item;
}

function fillMessageEfo(message_data, appendHead) {
    var message_chat_type = common_data['message_type'];
    if(message_data.type == message_chat_type.user){
        fillUserChatEfo(message_data, appendHead);
        setBorderChatEfo();
        initSlick();
        resetSlickCarousel();
        initDatePicker();
    } else{
        fillBotChatEfo(message_data, appendHead);
    }
}

function viewCarousel(item, message) {
    var carousel_item =  $('.template-efo .carousel_box').clone();
    //carousel title
    if(message.title != void 0 && message.title != ''){
        carousel_item.find('.title').addClass('title label-text').html(message.title);
    }
    var answer_number = message.answer != void 0 && message.answer != '' ? message.answer[0] : null;
    if(message.list != void 0){
        $.each(message.list, function (ind, val) {
            var clone = $('.template-efo .carousel_item').clone();
            viewText(clone.find('.item_title'), val['title'], 'item_title');
            viewText(clone.find('.item_subtitle'), val['subtitle'], 'item_subtitle');
            if(!isEmpty(val.image_url) ) {
                clone.find('.image_box img').attr('src', val['image_url']);
            }
            if(!isEmpty(val.button)) {
                clone.find('.select_box button').html(val['button']['title']);
            }
            if(answer_number != void 0 && answer_number == ind){
                clone.addClass('active');
                carousel_item.attr('carousel_answer', answer_number);
            }
            carousel_item.find('.carousel_container').append(clone);
        });
    }
    item.append(carousel_item);
    return item;
}

function initSlick() {
    $('.chat-conversation  .carousel_box').show();
    if($('.chat-conversation .carousel_container').not('.slick-initialized').length) {
        var option = {
            slidesToScroll: 1,
            arrows: true,
            dots: false,
            infinite: false,
            autoplay: false,
            cssEase: 'linear',
            slidesToShow: 1
        };

        $('.chat-conversation .carousel_container').not('.slick-initialized').each(function(i, e) {
            var carousel_box = $(e).parents('.carousel_box'),
                button_next = carousel_box.find('.right.carousel-slick-control'),
                button_prev = carousel_box.find('.left.carousel-slick-control'),
                answer_number = carousel_box.attr('carousel_answer');
            if(answer_number != void 0){
                option.initialSlide = parseInt(answer_number);
            }
            option.nextArrow = button_next;
            option.prevArrow = button_prev;
            $(e).slick(option);
            //active slide have .active class
            var carousel_item_active = $(e).find('.carousel_item.active');
            if(carousel_item_active.length) {
                $(e).slick('slickGoTo', carousel_item_active.index());
            }

            //check to show, hide button after init slide
            checkCarouselButton($(e));
            //check to show, hide button after click next, prev slide
            $(e).on('afterChange', function(event, slick, currentSlide, nextSlide) {
                checkCarouselButton(event);
            });
        });
    }
}

function checkCarouselButton(slick_elm) {
    if($(slick_elm).length) {
        var parent;
        if($(slick_elm.target).length) {
            parent = $(slick_elm.target).parents('.carousel_box');
        } else {
            parent = $(slick_elm).parents('.carousel_box');
        }

        if($(parent).length) {
            var button_next = $(parent).find('.right.carousel-slick-control'),
                button_prev = $(parent).find('.left.carousel-slick-control');
            if(button_prev.hasClass('slick-disabled') || button_prev.hasClass('slick-hidden')){
                button_prev.hide();
            } else {
                button_prev.show();
            }
            if(button_next.hasClass('slick-disabled') || button_next.hasClass('slick-hidden')){
                button_next.hide();
            } else {
                button_next.show();
            }
        }
    }
}

function resetSlickCarousel() {
    $('.chat-conversation .carousel_container.slick-initialized').slick("refresh");
}

function fillUserChatEfo(message_data, appendHead){
    if(message_data.message != void 0 && message_data.message != '' && message_data.message.constructor == Array){
        // update bot log
        var log_id = null;
        if(message_data._id != void 0 && message_data._id != ''){
            log_id = message_data._id;
            removeAfterMessage(message_data._id)
        }
        var message = message_data.message,
            user_content = common_data['bot_content_type'],
            user_chat = initChat(message_data, message_data.type),
            time_of_message = '',
            item = null,
            button_status_flg = true, // show or hide button action next, ok
            button_type_flg = true, // button next or ok
            wrap_content = user_chat.find('.ctext-wrap');
        if(message_data['created_at'] != void 0) {
            time_of_message = getDateByTimezone(message_data['created_at'], 'H:mm:ss');
        }
        user_chat.find('.time_of_message').html(time_of_message);
        setPreviousMessageDefault();
        for(var i = 0 ; i < message.length; i++){
            item = $('.template-efo .item').clone();
            item.addClass('col-xs-12');
            if(message[i].type != void 0 && (message[i].type == common_data['bot_content_type']['radio'])){
                if(message[i].template_type == template_radio[type_image_radio]){
                    viewEfoRadioImage(item, message[i], log_id);
                } else {
                    item = viewEfoSelectBox(item, message[i].type, message[i]);
                }
            } else if(message[i].type != void 0 && message[i].type == common_data['bot_content_type']['checkbox']){
                item = viewEfoSelectBox(item, message[i].type, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.input){
                viewInput(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.textarea){
                item = viewTextarea(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.postal_code){
                item = viewPostalCode(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.terms_of_use){
                item = viewTermsUse(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.pulldown){
                item = viewPullDown(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.text){
                item = viewLabel(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.card_payment){
                item = viewCardPayment(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.carousel){
                item = viewCarousel(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.file){
                item = viewFile(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.calendar){
                item = viewCalendar(item, message[i]);
            } else if(message[i].type != void 0 && message[i].type == user_content.captcha){
                item = viewCaptcha(item, message[i]);
            }
            user_chat.find('.text_message').append(item);
            button_status_flg = showHiddenButtonNext(message);
            if(button_status_flg){
                if(item.attr('answer') != void 0 && item.attr('answer') == '1') {
                    button_type_flg &= true;
                }else{
                    button_type_flg &= false;
                }
                item.removeAttr('answer');
            }
        }
        if(button_status_flg){
            var button_action = viewButton(user_chat.find('.text_message'), button_type_flg);
            wrap_content.append(button_action);
        }
        if(appendHead != void 0 && appendHead){
            $('.conversation_index .chat_content .conversation-list').prepend(user_chat);
        }else{
            $('.conversation_index .chat_content .conversation-list').append(user_chat);
        }
    }
}

/**
 * set default previous message user
 * **/
function setPreviousMessageDefault() {
    var button = $('.conversation-list .btn-action button'),
        text_input = $('.conversation-list input'),
    label_ok = $('.template-efo .button-group .button').clone().attr('data-ok');
    button.addClass('btn-ok disabled').html(label_ok);
    text_input.attr('placeholder', '');
}

//get message box element by log_message_id
function getMessageBox(log_message_id) {
    return $('.conversation_index .ctext-wrap[data-message_id=' + log_message_id + ']').parents('.message-wrapper');
}

//remove all message after message have log_message_id
//return true: if have remove after message
function removeAfterMessage(log_message_id) {
    var message_box = getMessageBox(log_message_id);
    var index = message_box.index() >= 0 ?  message_box.index() - 1 : message_box.index();
    if($('.conversation_index .message-wrapper:gt(' +index + ')').length) {
        $('.conversation_index .message-wrapper:gt(' + index + ')').remove();
        message_box.remove();
        return true;
    }
    return false;
}

function str_replace(str) {
    if(str){
        str = str.replace(/ /g, '&nbsp;');
        return str.replace(/\n/g, '<br/>');
    }
}

function showHiddenButtonNext(msg) {
    var user_content = common_data['bot_content_type'];
    var message_type_hidden_arr = [user_content.radio, user_content.carousel, user_content.text];
    if(msg && msg.length == 1 && message_type_hidden_arr.indexOf(msg[0].type) > -1 ){
        return false;
    }
    return true;
}

function initDatePicker(calendar, answer, template_type) {
    var option = {
        //sideBySide: true,
        format: 'Y/MM/DD',
        allowInputToggle : true,
        ignoreReadonly: true
    },
        efo_template_calendar = common_data['template_calendar'];
    if(calendar != void 0 && $(calendar).length > 0){
        var calendar_item = calendar.find('.calendar');
        if(calendar_item.hasClass('calendar_embed')){
            option.inline = true;
        }
        if(answer != void 0){
            calendar_item.datetimepicker(option);
            if(template_type == efo_template_calendar.select || template_type == efo_template_calendar.embed){
                fillAnswerCalendar(calendar_item, answer.year, answer.month, answer.day);
            } else{
                for(var i = 0; i< answer.length; i++){
                    if(calendar.find('.calendar:eq('+ i + ')').length){
                        fillAnswerCalendar(calendar.find('.calendar:eq('+ i + ')'), answer[i].year, answer[i].month, answer[i].day);
                    }
                }
            }
        }
    } else{
        $('.calendar.not_init:not(.calendar_embed)').datetimepicker(option);
        option.inline = true;
        $('.calendar.not_init.calendar_embed').datetimepicker(option);
        $('.calendar').removeClass('not_init');
    }
}

function fillAnswerCalendar(calender_item, answer_year, answer_month, answer_day) {
    if(answer_year != void 0 && answer_month != void 0 && answer_day != void 0 && calender_item.data("DateTimePicker") != void 0){
        calender_item.data("DateTimePicker").date(answer_year + '/' + answer_month + '/' + answer_day);
    }
}

function fillRadioAnswer(item, answer) {
    if(!isEmpty(answer)){
        var answer_split = answer.split(",");
        if(!isEmpty(answer_split) && answer_split.length == 2){
            var radio_item = item.find('.radio-image-box:eq(' + answer_split[0] + ') .radio-image-item:eq(' + answer_split[1] + ')');
            if(radio_item.length){
                radio_item.addClass('active');
                radio_item.find('.icheck').iCheck('check');
            }
        }
    }
}

function viewText(item, msg, class_name) {
    if(class_name == void 0){
        class_name = '';
    }
    if(msg != void 0 && msg != ''){
        item.addClass('label-text ' + class_name).html(msg);
    } else{
        item.remove();
    }
}

function isEmpty(msg) {
    if(msg != void 0 && msg != ''){
        return false;
    }
    return true;
}

function initIcheckType(element, type) {
    if(type == void 0){
        type = 'blue';
    }
    element.iCheck({
        checkboxClass: 'icheckbox_minimal-' + type,
        radioClass: 'iradio_minimal-' + type
    });
}