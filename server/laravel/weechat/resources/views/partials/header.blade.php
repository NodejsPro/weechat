<?php $connect_page_id =  Route::current()->getParameter('bot');
$connect_page = ConnectPage::where('_id', $connect_page_id)->first();
$user_login = Auth::user();
$class_header_top = '';
?>
<header class="header fixed-top clearfix">
    @if(ends_with(Route::currentRouteAction(), ['BotController@listbot', 'BotController@index', 'BotController@create', 'BotController@listUserBot', 'BotController@show', 'BotController@createLineBot', 'BotController@confirm', 'BotController@createWebEmbedBot', 'BotController@createChatworkBot'])
        || str_contains(Route::currentRouteAction(), ['UserController', 'TemplateController', 'PlanController', 'PaymentCardController', 'PaymentController', 'SupportController', 'UserNotificationController', 'PaymentGatewayController'])
    )
        @php
            $class_header_top = 'header-top';
        @endphp
        <a href="{{URL::route('bot.index')}}" class="logo system-logo-top">
            {{--{{config('app.name')}}--}}
            @if(strtolower(config('app.name')) == "embot")
                <img src="/images/logo_manager_embot2.png"  style="width: 60%;"/>
            @else
                <img src="/images/logo_manager_botchan2.png"  style="width: 60%;"/>
            @endif
        </a>
    @else
        <div class="brand brand-check">
            {{--<div class="admin-header-title">
                <a href="{!! URL::route('bot.index') !!}" class="logo system-logo-main">
                    {{config('app.name')}}
                </a>
            </div>--}}
            <div>
                <a href="{!! URL::route('bot.index') !!}" class="logo system-logo-main">
                    @if(strtolower(config('app.name')) == "embot")
                        <img src="/images/logo_white_embot2.png" style="width: 73%;"/>
                    @else
                        <img src="/images/logo_white_botchan2.png" style="width: 73%;"/>
                    @endif
                </a>
            </div>

            <div class="sidebar-toggle-box change-color">
                <div class="fa fa-bars"></div>
            </div>
        </div>
    @endif
    <div class="top-nav nav-center clearfix">
        <ul class="nav pull-right top-menu">
            @include('partials.user_notification', ['class_header_top' => $class_header_top])
            <li class="dropdown">
                <a href="{!! URL::route("support.description") !!}" class="{{Request::is('support/*')? 'blue-color' : ''}} sidebar-check"><span>{{{ trans('menu.support') }}}</span></a>
            </li>
            <li class="dropdown">
                <a class="{{ ((Request::is('bot') || Request::is('bot/webEmbed') || Request::is('bot/line')) &&
                    (!$_is_template_flg && !Request::is('template') && !Request::is('template/create') && !Request::is('template/*/edit'))
                    ) ? 'blue-color' : '' }}" href="{{ url('bot')}}">
                    <span>{{{ trans('menu.bot_management')}}}</span>
                </a>
            </li>
            @if(Auth::user()->authority == $authority['admin'])
                <li class="dropdown">
                    <a data-toggle="dropdown" class="dropdown-toggle" href="#" aria-expanded="false">
                        <span class="management">{{{ trans('menu.management')}}}</span>
                        <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu extended logout">
                        <li class="dropdown">
                            <a class="{{Request::is('userNotification') ? 'blue-color' : ''}}" href="{{ url('userNotification')}}"><span>{{{ trans('user_notification.header_menu') }}}</span></a>
                        </li>
                        <li class="dropdown">
                            <a class="{{Request::is('user') || Request::is('user/*/edit') ? 'blue-color' : ''}}" href="{{ url('user')}}"><span>{{{ trans('menu.user_management')}}}</span></a>
                        </li>
                        <li class="dropdown">
                            <a class="{{Request::is('bot/list-user-bot') ? 'blue-color' : ''}}" href="{{ url('bot/list-user-bot')}}"><span>{{{ trans('all_bot.header_menu') }}}</span></a>
                        </li>
                        <li class="dropdown">
                            <a class="{{ (Request::is('template') || Request::is('template/create') || Request::is('template/*/edit') || $_is_template_flg) ? 'blue-color' : '' }}" href="{{ url('template')}}"><span>{{{ (Auth::user()->authority == $authority['admin']) ? trans('menu.template_list') : trans('modal.template_list')}}}</span></a>
                        </li>
                    </ul>
                </li>
            @elseif(Auth::user()->authority == $authority['agency'])
                <li class="dropdown">
                    <a class="{{Request::is('user') || Request::is('user/*/edit') ? 'blue-color' : ''}}" href="{{ url('user')}}"><span>{{{ trans('menu.user_management')}}}</span></a>
                </li>
            @endif
            {{--@if(isset($_efo_bot_flg) && $_efo_bot_flg)--}}
                {{--<li class="dropdown">--}}
                    {{--<a class="{{Request::is('payment-gateway') ? 'blue-color' : ''}}" href="{{ url('payment-gateway')}}"><span>{{{ trans('payment_gateway.payment_gateway') }}}</span></a>--}}
                {{--</li>--}}
            {{--@endif--}}
            <li class="dropdown">
                <a data-toggle="dropdown" class="dropdown-toggle" href="#" aria-expanded="false">
                    <span class="username">{{{ trans('account.account_management')}}}</span>
                    <b class="caret"></b>
                </a>
                <ul class="dropdown-menu extended logout">
                    <li>
                        <a class="{{Request::is('account/edit') ? 'blue-color' : ''}}" href="{{ url('account/edit')}}"><span>{{{ trans('account.user_info') }}}</span></a>
                    </li>
                    <li>
                        <a class="{{Request::is('account/account-information') ? 'blue-color' : ''}}" href="{{ url('account/account-information')}}"><span>{{{ trans('account.account_information') }}}</span></a>
                    </li>
                    @if(Auth::user()->authority == config('constants.authority.client') && Auth::user()->plan != null)
                        @if(config('app.plan') != 'EMBOT')
                            <li>
                                <a class="{{Request::is('plan') ? 'blue-color' : ''}}" href="{{ url('plan')}}"><span>{{{ trans('modal.plan') }}}</span></a>
                            </li>
                            <li>
                                <a class="{{Request::is('paymentCard') ? 'blue-color' : ''}}" href="{{ url('paymentCard')}}"><span>{{{ trans('payment.manage_card') }}}</span></a>
                            </li>
                            <li>
                                <a class="{{Request::is('payment') ? 'blue-color' : ''}}" href="{{ url('payment')}}"><span>{{{ trans('payment.payment_history') }}}</span></a>
                            </li>
                        @endif
                    @endif
                    @if(isset($_efo_bot_flg) && $_efo_bot_flg)
                        <li class="dropdown">
                            <a class="{{Request::is('payment-gateway') ? 'blue-color' : ''}}" href="{{ url('payment-gateway')}}"><span>{{{ trans('payment_gateway.payment_gateway') }}}</span></a>
                        </li>
                    @endif
                </ul>
            </li>
            <li class="dropdown">
                <a href="{!! URL::to('logout') !!}"
                   onclick="event.preventDefault();
         document.getElementById('logout-form').submit();">
                    {{{ trans('menu.logout') }}}
                </a>
                <form id="logout-form"
                      action="{!! URL::to('logout') !!}"
                      method="POST"
                      style="display: none;">
                    {{ csrf_field() }}
                </form>

                {{--<a href="{!! URL::to('logout') !!}">{{{ trans('menu.logout') }}}</a>--}}
            </li>
        </ul>
    </div>
</header>

