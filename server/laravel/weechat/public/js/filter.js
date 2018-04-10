/**
 * Created by nguyen.khac.tung on 10/17/2017.
 */

//filterClear(); and fillFilterToForm() will call in library page and scenario edit page;

var _variable_custom = ['current_time'];
var _sperate_text = '/';

checkEmptyFilterItem();
//add filter item
$(document).on('click', '#btn_filter_add', function(evt) {
    var filter_index = addFilterItem();
    getFilterVariableData(filter_index);
});

//update data follow variable
$(document).on('change', '.filter_item .filter_variable', function(evt) {
    var filter_index = $(this).parents('.filter_item').index();
    getFilterVariableData(filter_index);
});
//change value
$(document).on('change', '.filter_item .filter_value_select', function(evt) {
    getNumberUser();
});
//change compare
$(document).on('change', '.filter_item .filter_operator', function(evt) {
    getNumberUser();
});
// change value custom variable
$(document).on('input', '.filter_item input.filter_value_text', function(evt) {
    getNumberUser();
});
// change value option filter
$(document).on('change', '.filter_item .filter_option', function(evt) {
    if ($(this).val() == 'or'){
        $(this).parents('.filter_item').find('.filter_scenario_value .filter_scenario').removeClass('hidden').attr('disabled', null);
    }else {
        $(this).parents('.filter_item').find('.filter_scenario_value .filter_scenario').addClass('hidden').attr('disabled', 'disabled');
    }
});
//remove filter item
$(document).on('click', '.filter_item .filter_btn_delete', function(evt) {
    $(this).parents('.filter_item').remove();
    indexParam();
    checkEmptyFilterItem();
    if($('.filter_contain .filter_item').length >= 1) {
        getNumberUser();
    }
    //scenario create
    var parent = $('.filter_contain .filter_item').first();
    parent.find('.select_option .filter_option').addClass('hidden').attr('disabled', 'disabled');
    parent.find('.filter_scenario_value .filter_scenario').removeClass('hidden').attr('disabled', null);
})

;//remove filter item
$(document).on('change', '.filter_item .filter_date_box select', function(evt) {
    var filter_index = $(this).parents('.filter_item').index();
    getDateTypeValue(filter_index);
});

/**
 * ajax get operator and value follow variable
 */
function getFilterVariableData(filter_index, async) {
    var filter_item     = $('.filter_contain .filter_item').eq(filter_index);
    var variable_code   = filter_item.find('.filter_variable').val();
    if(filter_item != void 0 && filter_item != '' && variable_code != void 0) {
        var csrf_token  = $('.template_filter .csrf_token').val();
        var url = $('.template_filter .filter_variable_data_url').val();

        filter_item.find('select.filter_operator, select.filter_value_select, input.filter_value_text, select.filter_value_minute, select.filter_value_hour').attr('style', 'background: #f1f2f7');
        var value_text      = filter_item.find('input.filter_value_text'),
            value_select    = filter_item.find('select.filter_value_select'),
            filter_date_box = filter_item.find('.filter_date_box');

        $.ajax({
            url: url,
            type: 'POST',
            data: {
                "_token": csrf_token,
                "variable_code": variable_code,
            },
            async: (async != void 0) ? async : true,
            success: function(data) {
                if(data != void 0){
                    //fill operator option follow variable
                    if(data.filter_operator_list != void 0) {
                        var operator_select = filter_item.find('select.filter_operator');
                        operator_select.find('option').remove();

                        Object.keys(data.filter_operator_list).forEach(function(key) {
                            var option_item = '<option value="' + key + '">' + data.filter_operator_list[key] + '</option>';
                            operator_select.append(option_item);
                        });
                    }

                    //disable and remove select type
                    value_select.addClass('hidden').attr('disabled', 'disabled');
                    filter_date_box.addClass('hidden');
                    //use text type
                    value_text.removeClass('hidden').attr('disabled', null);

                    //fill value option follow variable
                    //if is _variable_custom then custom value for each variable
                    if(_variable_custom.indexOf(variable_code) < 0) {
                        //If option is not empty then use select type
                        if(data.filter_variable_value_list != void 0 && Object.keys(data.filter_variable_value_list).length) {
                            //disable and remove text type
                            value_text.addClass('hidden').attr('disabled', 'disabled');
                            //use select type
                            value_select.removeClass('hidden').attr('disabled', null).find('option').remove();

                            Object.keys(data.filter_variable_value_list).forEach(function(key) {
                                var option_item = '<option value="' + key + '">' + data.filter_variable_value_list[key] + '</option>';
                                value_select.append(option_item);
                            });
                        }
                    } else {
                        custom_variable_value(variable_code);
                    }

                    getNumberUser();
                }
            },
            error: function(result){
                var response = result.responseJSON;
                if(response.msg != void 0 && response.msg != '') {
                    setMesssage(response.msg, 1, filter_item.parents('.modal-body').find('.box_message'));
                }
            },
            complete: function () {
                filter_item.find('select.filter_operator, select.filter_value_select, input.filter_value_text, select.filter_value_minute, select.filter_value_hour').attr('style', null);
            }
        });
    }

    //custom value for variable_custom
    function custom_variable_value(variable_code) {
        if(_variable_custom.indexOf(variable_code) >= 0) {
            switch (variable_code) {
                case 'current_time':
                    //hidden text type and select type, date value will set to text type input
                    value_select.addClass('hidden');
                    value_text.addClass('hidden');
                    filter_date_box.removeClass('hidden');

                    getDateTypeValue(filter_index);
                    break;
            }
        }
    }
}

function indexParam() {
    $('.filter_contain .filter_item').each(function (i, e) {
        var prefix_name = 'filter['+ i +']';

        $(this).find('select.filter_option').attr('name', prefix_name +'[option]');
        $(this).find('select.filter_variable').attr('name', prefix_name +'[condition]');
        $(this).find('select.filter_operator').attr('name', prefix_name+ '[compare]');
        $(this).find('input.filter_value_text').attr('name', prefix_name+ '[value]');
        $(this).find('select.filter_value_select').attr('name', prefix_name+ '[value]');
        $(this).find('select.filter_scenario').attr('name', prefix_name+ '[scenario_id]');
    });
}

//check to show hide filter status
function checkEmptyFilterItem() {
    if($('.filter_contain .filter_item').length) {
        $('.filter_status').addClass('hidden');
        //show number user push notification
        $('.number_user').removeClass('hidden');
    } else {
        $('.filter_status').removeClass('hidden');
        //hide number user push notification
        $('.number_user').addClass('hidden');
    }
}

//clear filter
function filterClear() {
    $('.filter_contain .filter_item').remove();
    checkEmptyFilterItem();
}

//add filter item
function addFilterItem() {
    var filter_clone = $('.template_filter .filter_item').clone();
    $('.filter_contain').append(filter_clone);

    var filter_index = $('.filter_contain .filter_item').last().index();
    checkEmptyFilterItem();
    if(filter_index >= 1 && ($('.template_filter .select_option').length)) {
        var option_clone = $('.template_filter .select_option').clone();
        var parent = $('.filter_contain .filter_item').last().prepend(option_clone);
        parent.find('.field_filter_option').addClass('hidden').attr('disabled', 'disabled');
        parent.find('.filter_scenario_value .filter_scenario').addClass('hidden').attr('disabled', 'disabled');
    }
    indexParam();
    return filter_index;
}

//fill Filter To Form
function fillFilterToForm(data) {
    if(data != void 0 && data.length) {
        $(data).each(function (i, e) {
            var filter_index = addFilterItem(),
                filter_item = $('.filter_contain .filter_item').eq(filter_index),
                option = e.option,
                variable_code = e.condition,
                compare = e.compare,
                value = e.value,
                scenario_id = e.scenario_id;

            filter_item.find('select.filter_option').val(option).trigger('change');
            filter_item.find('select.filter_variable').val(variable_code);

            //get data follow variable after fill data for variable select
            getFilterVariableData(filter_index, false);

            filter_item.find('select.filter_operator').val(compare);
            filter_item.find('select.filter_scenario').val(scenario_id);

            if(!filter_item.find('select.filter_value_select').prop('disabled')) {
                filter_item.find('select.filter_value_select').val(value);
            } else {
                filter_item.find('input.filter_value_text').val(value);

                //if variable_code is custom code then show corresponding field
                if(_variable_custom.indexOf(variable_code) >= 0) {
                    switch (variable_code) {
                        case 'current_time':
                            setDateTypeValue(filter_index);
                            break;
                    }
                }
            }
        });
    }
}

//get date value and fill to text type
function getDateTypeValue(filter_index) {
    var filter_item = $('.filter_contain .filter_item').eq(filter_index),
        month_val   = filter_item.find('select.filter_value_minute').val(),
        day_val     = filter_item.find('select.filter_value_hour').val(),
        date_str    = '';

    if(month_val != void 0 && day_val != void 0) {
        date_str = day_val + _sperate_text + month_val;
    }
    filter_item.find('input.filter_value_text').val(date_str);
}

//set date value from text type value
function setDateTypeValue(filter_index) {
    var filter_item = $('.filter_contain .filter_item').eq(filter_index),
        filter_value_text = filter_item.find('input.filter_value_text').val();

    if(filter_value_text != void 0 && filter_value_text != '') {
        var date_arr = filter_value_text.split(_sperate_text);
        if(date_arr.length <= 2) {
            filter_item.find('select.filter_value_hour').val(date_arr[0]);
            filter_item.find('select.filter_value_minute').val(date_arr[1]);
        }
    }
}
//count user follow filter
function getNumberUser() {
    var url = $('.template_filter .number_user_filter_url').val(),
        csrf_token  = $('.template_filter .csrf_token').val();
    if (url != undefined && url != ''){
        $.ajax({
            url: url,
            type: 'POST',
            data: $('.notification_create_form').serialize(),
            success: function(data) {
                var message = $('.number_user p.hidden').html();
                $('.number_user label').html('');
                if(data != void 0){
                    message = message.replace(':number', data.user_count);
                    $('.number_user label').html(message);
                }
            },
            error: function(result){

            },
            complete: function () {
            }
        });
    }
}

