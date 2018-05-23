$(function() {
    if (typeof(Swiper) === 'function') {
        var mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 7,
            loop: true
        });
    }
    /*
    $('.obtain_on').on('click', function () {		// 		发送验证码
    	if (!$(this).hasClass('active')) {
    		$(this).addClass('active');
    		$(this).removeClass('obtain_on');
    		$(this).html('60s&nbsp;后重新发送');
    		$(this).css({
    			'cursor': 'not-allowed',
    		});
    		var t = 60;
    		var _this = $(this);
    		var time = setInterval(function () {
    			t = t - 1;
    			_this.html(t + 's&nbsp;后重新发送');
    			if (t == 0) {
    				clearInterval(time);
    				_this.addClass('obtain_on').removeClass('active');;
    				_this.html('发送短信验证码');
    				_this.css('cursor', 'pointer');
    			}
    		}, 1000)
    	}
    });
    */
    
    //动态控制select选中状态----------end------------
    $('.add_required').on('input', function() { //处理可以为空  但是如果有内容 需要验证内容的格式的  方法
        if ($(this).val()) {
            $(this).addClass('required');
        } else {
            $(this).removeClass('required');
        }
    })

    $('.date_select').on('focus', function() { //使日期选择输入框   变为不可输入
        $(this).blur();
    })

    $('.closeTank').on('click', function() { //关闭弹框 
        $(this).parents('.tank').hide();
        if ($('.mask')) {
            $('.mask').hide();
        }
    })


    $('.select_data').on('click', function(ev) { //下拉选择框  模拟html select option
        $('.data_select_2').hide();
        $(this).find('.data_select_2').eq(0).show();
        ev.stopPropagation();
    })
    $('.data_select_2 li').on('click', function(ev) {
        $(this).parents('.data_select_2').eq(0).hide();
        $(this).parents('.data_select_2').siblings('.select_data_on').html($(this).html());
        ev.stopPropagation();
    })
    $(document).on('click', function(ev) {
        $('.data_select_2').hide();
        $('.search .search_more').hide();
        $('#searchQuickInput').hide();
        ev.stopPropagation();
    })

	$('.foot_slide_left').click(function () {
		mySwiper.swipePrev();
	});
	$('.foot_slide_right').click(function () {
		mySwiper.swipeNext();
    });
    $('.search .search_input').on('keydown',function(e){//回车搜索
        var keyCode =window.event? e.keyCode:e.which;
        if($(this).val()){
            if(keyCode== 13){
                IndexSearch.search();
            }
        }
    }).on('input propertychange',function(){
        if($(this).val()){
            $(this).removeClass('autofill_empty');
            $(this).siblings('.search_more').hide();
            
            //$('#searchQuickInput').show();//该行代码已放到IndexSearch.generateImagingTags();中执行
            var lastValue = $.trim($('#index_search_input_last_value').val());
            var thisValue = $.trim($('#index_search_input').val());
            if (lastValue != thisValue) {
                IndexSearch.generateImagingTags();
            }        
        }else{
            $(this).addClass('autofill_empty');
            $('#searchQuickInput').hide();
            var empty = IndexSearch.isSearchBoardEmpty();
            if (!empty) {
                $(this).siblings('.search_more').show();
            }
        }
    }).on('click',function(ev){
        ev.stopPropagation();
        if ($(this).val() == '') {
            //console.info('文本框为空');
            $(this).addClass('autofill_empty');
            var empty = IndexSearch.isSearchBoardEmpty();
            if (!empty) {
                $(this).siblings('.search_more').show();
            }
        }else{
            $(this).removeClass('autofill_empty');
            //console.info('文本框不为空');

            //$('#searchQuickInput').show();//该行代码已放到IndexSearch.generateImagingTags();中执行
            var lastValue = $.trim($('#index_search_input_last_value').val());
            var thisValue = $.trim($('#index_search_input').val());
            if (lastValue != thisValue) {
                IndexSearch.generateImagingTags();
            }   
        }
    });
    $('.search .search_more').on('click',function(ev){
        ev.stopPropagation();
    })

	$('.senior_search_m').on('click', function (event) {
		event.stopPropagation();
    });
    $('.senior_search').on('mouseover',function(){
        $('#search_board,#searchQuickInput').hide();
    })
	$('.senior_search_m_input1 .left1 span').click(function () {
		if ($(this).find('i').hasClass('icon-fangkuang')) {
			$(this).find('i').removeClass('icon-fangkuang').addClass('icon-checkbank');
		} else {
			$(this).find('i').removeClass('icon-checkbank').addClass('icon-fangkuang');
		}
	});
	$('.senior_search_m_bot .qingchu').on('click', function () {
		$('.senior_search_m_input1 .left1 span').find('i').removeClass('icon-checkbank').addClass('icon-fangkuang');
		$('.senior_search .senior_search_m_input1 .section input, .senior_search .senior_search_m_input input').val('');
	});
	$('.senior_search_m_input1 .more').on('click', function () {
		if ($(this).hasClass('on')) {
			$(this).removeClass('on');
			$(this).html('更多 <i class="iconfont icon-zhankai"></i>');
			$(this).prev().css('height', '26px');
		} else {
			$(this).addClass('on');
			$(this).html('收起 <i class="iconfont icon-shouqi"></i>');
			$(this).prev().css('height', 'auto');
		}
	});
	$('.friendship_link_more').on('click', function () {
		if (!$(this).siblings('.friendship_link_right').hasClass('auto')) {
			$(this).siblings('.friendship_link_right').addClass('auto');
			$(this).hide();
		}
	});
	$('.friendship_link_shouqi').on('click', function () {
        $(this).parent().removeClass('auto');
        $(this).parent().siblings('.friendship_link_more').show();
	});
	$('.common_nav .nav_more').hover(function () {
		$('.common_nav .ul').show();
	}, function () {
		$('.common_nav .ul').hide();
	});
	$('.icon-backtop').on('click', function () {
		$('html,body').animate({
			scrollTop: 0
		});
    });
    $('input.required').on('keydown',function(e){
        var e = window.event||e;
        var keynum = e.keyCode ||  e.which;
        if (keynum == 32) {
            return false;
        }
    })

});
//动态控制select选中状态----------start------------
    function set_select_checked(selectId, checkValue){  
        var select = document.getElementById(selectId);  

        for (var i = 0; i < select.options.length; i++){  
            if (select.options[i].value == checkValue){  
                select.options[i].selected = true;  
                break;  
            }  
        }  
    }
//  公用居中弹出框  参数传入要打开的 div   mask为半透明背景    tank  为通用弹框的class
function openTank(obj) {
    if (obj) {
        $('.tank').hide();
        var obj = $(obj);
        var left = -obj.outerWidth() / 2;
        var top = -obj.outerHeight() / 2;
        $('.mask').show();
        obj.css({
            "display": "block",
            "marginTop": top,
            "marginLeft": left
        })
    }
}
(function() {
    //判断浏览器是否支持placeholder属性
    supportPlaceholder = 'placeholder' in document.createElement('input');
    supportPlaceholder = 'placeholder' in document.createElement('textarea');
    placeholder = function(input) {
            var text = input.attr('placeholder');
            defaultValue = input.defaultValue;
            if (!defaultValue) {
                input.val(text).css('color', '#999');
            };
            input.focus(function() {
                if (input.val() == text) {
                    $(this).val("");
                };
            });
            input.blur(function() {
                if (input.val() == "") {
                    $(this).val(text).css('color', '#999');
                }
            });
            //输入的字符不为灰色
            input.keydown(function() {
                $(this).removeClass("phcolor");
            });
        }
        //当浏览器不支持placeholder属性时，调用placeholder函数
    if (!supportPlaceholder) {
        $('input').each(function() {
            text = $(this).attr("placeholder");
            if ($(this).attr("type") == "text" || $(this).attr("type") == "password") {
                placeholder($(this));
            };
        });
        $('textarea').each(function() {
            text = $(this).attr("placeholder");
            placeholder($(this));
        });
    };

})();
var api = (function(window, document) {
    'use strict';
    try {
        document.domain = 'uzai.com';
    } catch (e) {
        console.log(e.message);
    }
    var api = {},
        urlReg = '', //路由参数规则
        api = {
            urlReg: urlReg,
            post: function(logicApiUrl, reqParm, callback, redirectUrl) {
                var dStr = location.host;
                if (redirectUrl !== '' && redirectUrl !== undefined) {
                    dStr = redirectUrl;
                }
                $.ajax({
                    type: 'POST',
                    url: '//' + dStr + '/logic/data',
                    data: { logicApiUrl: logicApiUrl, requestData: reqParm },
                    beforeSend: function() {},
                    complete: function() {},
                    error: function(data) {
                        callback(data);
                    },
                    success: function(msg) {
                        if (msg !== null && msg !== '') {
                            callback(JSON.parse(msg));
                        } else {
                            callback(null);
                        }
                    }
                });
            },
            //获取url地址的参数 by 王超 2017/1/7
            getUrlParam: function(param) {
                //var urlReg='/outbound/proc_one/{date}/{adultnum}/{childnum}/{productId}.html';
                var url = location.pathname;
                //var url='tour.uzai.com/ww/{productId}/{num}/{ddd}';
                //var result = url.match(/([^\{\}]+)(?=\})/g);
                var arrUrlReg = api.urlReg.split('/');
                var arrUrl = url.split('/');
                var obj = {};
                if (arrUrl.length === arrUrlReg.length) {
                    for (var i = 0; i < arrUrlReg.length; i++) {
                        if (arrUrlReg[i] !== '') {
                            var paramName = '';
                            var paramNameArr = arrUrlReg[i].match(/([^\{\}]+)(?=\})/g);
                            if (paramNameArr !== '' && paramNameArr !== null && paramNameArr !== undefined && paramNameArr.length > 0) {
                                paramName = paramNameArr[0].split('.').length > 1 ? paramNameArr[0].split('.')[0] : paramNameArr[0];
                            }
                            if (paramName !== '') {
                                obj[paramName] = arrUrl[i].split('.')[0];
                            }
                        }
                    }
                } else {
                    return '';
                }
                return obj[param];
            },
            //获取网址get方式的参数
            //key  关键字
            //func 解码方式
            //caseSensitive 大小写敏感，1为敏感
            getQueryString: function(key, func, caseSensitive) {
                if (!key || typeof(key) === 'undefined') {
                    key = '';
                    return null;
                } else {
                    key = key.toLowerCase();
                    var r,
                        reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)');
                    if (caseSensitive == '1') {
                        r = window.location.search.substr(1).match(reg);
                    } else {
                        r = window.location.search.toLowerCase().substr(1).match(reg);
                    }
                    if (r !== null) {
                        if (!func || func === '' || func == 'decodeURI' || typeof(func) == 'undefined') {
                            return decodeURI(r[2]);
                        } else if (func == 'unescape') {
                            return unescape(r[2]);
                        } else if (func == 'decodeURIComponent') {
                            return decodeURIComponent(r[2]);
                        }
                    } else {
                        return null;
                    }
                }
            },
            //获取cookie
            getCookie: function(key, func) {

                var bikky = document.cookie;
                key += '=';
                var i = 0;
                while (i < bikky.length) {
                    var offset = i + key.length;
                    if (bikky.substring(i, offset) == key) {
                        var endstr = bikky.indexOf(';', offset);
                        if (endstr == -1) {
                            endstr = bikky.length;
                        }
                        var r = bikky.substring(offset, endstr);
                        if (r !== null) {
                            if (!func || func === '' || func == 'decodeURI' || typeof(func) == 'undefined') {
                                return decodeURI(r);
                            } else if (func == 'unescape') {
                                return unescape(r);
                            } else if (func == 'decodeURIComponent') {
                                return decodeURIComponent(r);
                            }
                        } else {
                            return null;
                        }
                    }
                    i = bikky.indexOf(' ', i) + 1;
                    if (i === 0) {
                        return;
                    }
                }
                return null;

            },
            //写入cookie
            //timeout秒 600秒=10分钟*60
            setCookie: function(key, value, timeout) {
                if (!timeout || typeof(timeout) == 'undefined') {
                    timeout = 0;
                } else {
                    timeout = parseInt(timeout, 10);
                }
                if (timeout === 0) {
                    document.cookie = key + '=' + value + ';domain=.uzai.com;path=/';
                } else {
                    var exp = new Date();
                    exp.setTime(exp.getTime() + timeout * 1000);
                    document.cookie = key + '=' + value + ';expires=' + exp.toGMTString() + ';domain=.uzai.com;path=/';
                }
            },
            //移除cookie
            removeCookie: function(key) {

                var exp = new Date();
                exp.setTime(exp.getTime() - 3600 * 24);
                var value = '';
                document.cookie = key + '=' + value + ';expires=' + exp.toGMTString() + ';domain=.uzai.com;path=/';

            },
            //校验是否登录
            loginInfo: function (callback) {
                var encryptedUserId = api.getCookie('user');
                if (encryptedUserId) {
                    var userId = encodeURIComponent(encryptedUserId);
                    $.ajax({
                        type: 'get',
                        url: 'https://www.uzai.com/Com/IsLoginByEncryptUserId?type=jsonp&encryptedUserId=' + userId,
                        dataType: 'jsonp',
                        success: function (data) {
                            if (data) {
                                callback(JSON.parse(data));

                            } else {
                                callback(null);
                            }
                        },
                        error: function () {
                            console.info('fail to get user login status..');
                        }
                    });
                }
                else {
                    // cookie都没有，肯定没有登录
                    var result = { isLogin: "0" };
                    callback(result);
                }
            }
        };
    return api;
})(window, document);

// 通用 返回顶部按钮  returnTopInit();
function returnTopInit() {
    $('body').append('<div class="returnTop"><img src="//r.uzaicdn.com/content/store/images/common/returntop.png"/></div>');
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > $(window).height()/2) {
            $('.returnTop').show();
        } else {
            $('.returnTop').hide();
        }
    });
    $('.returnTop').on('click', function() {
        $('html,body').stop().animate({
            scrollTop: 0
        });
    });
}

//Iframe url w宽 h高 fn回调
function showIframe(url, w, h, fn) {
    //添加iframe
    var if_w = w;
    var if_h = h;
    var iframeBox = $('<div class="iframeWrap" style="width:'+if_w+'px;height:'+if_h+'px;position:fixed;top:50%;left:50%;z-index:1000;margin-left:' + parseInt(-if_w / 2) + 'px;margin-top:' + parseInt(-if_h / 2) + 'px;" ><iframe src="' + url + '"  width="' + if_w + '" height="' + if_h + '" frameborder="0" scrolling="no"></iframe><i class="iconfont icon-shanchu" </i></div>')
    var iframeMask = $('<div id="iframeMask" style="position:fixed;width:100%;height:100%;z-index:999;background-color:#000;opacity: .4;filter: alpha(opacity=40);top:0;left:0;"></div>');
    $('body').eq(0).append(iframeBox, iframeMask);
    $(iframeBox).find('.iconfont').click(function(){
        $(iframeBox).remove();
        $(iframeMask).remove();
    });
    window.closeFrame={
        f:iframeBox,
        m:iframeMask
    };
    if (fn) fn();
}

/*
通用轮播图
*/
var index_banner = function(parent, list, navs, spend) {//轮播图
    var active = 0;
    var banner_timer = null;
    var list = list;
    var navs = navs;
    var spend = spend;

    function autoplay() {
        active++;
        if (active >= list.length) {
            active = 0;
        }
        list.eq(active).stop().fadeIn().siblings().stop().fadeOut();
        navs.eq(active).addClass('active').siblings().removeClass('active');
    }
    banner_timer = setInterval(autoplay, spend);

    $(parent).on('mouseover', function () {
        clearInterval(banner_timer);
    }).on('mouseout', function () {
        banner_timer = setInterval(autoplay, spend);
    });

    navs.on('mouseover', function () {
        active = $(this).index();
        list.eq(active).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut();
        navs.eq(active).addClass('active').siblings().removeClass('active');
    })
}

/*!
liuwei  2018-03-27 修改
通用分页功能控件 liuwei
使用方法：页面只需要一个  <div class='page'></div>
$('.page').uzaiPaging({
    pageNo:5,           //当前页
    totalPage: 9,           //总页数
    totalSize: 300,         //数据总条数（如果需要）
    callback: function(num) {   //回调每次点击执行
        alert(num)
    }
})
ajax调用方法  参数为当前页数
ajaxTest(1); 
function ajaxTest(num) {
    $.ajax({
        url: "",
        type: "get",
        data: {},
        dataType: "json",
        success: function(data) {
            console.log(data);
            //分页
            $('.page').uzaiPaging({
                pageNo: num,
                totalPage: data.totalPage,
                totalSize: data.totalSize,
                callback: function(num) {
                    ajaxTest(num)
                }
            })
        }
    })
}
*/
var uzaiPaging = (function($, window, document, undefined) {
	//定义分页类
	function Paging(element, options) {
		this.element = element;
		//传入形参
		this.options = {
			pageNo: options.pageNo||1,
			totalPage: options.totalPage,
			totalSize:options.totalSize,
			callback:options.callback
		};
		//根据形参初始化分页html和css代码
		this.init();
	}
	//对Paging的实例对象添加公共的属性和方法
	Paging.prototype = {
		constructor: Paging,
		init: function() {
			this.creatHtml();
			this.bindEvent();
		},
		creatHtml: function() {
			var me = this;
			var content = "";
			var current = me.options.pageNo;
			var total = me.options.totalPage;
			var totalNum = me.options.totalSize;
			content += "<a id=\"firstPage\">首页</a><a id='prePage'>上一页</a>";
			//总页数大于6时候
			if(total > 7) {
				//当前页数小于5时显示省略号
				if(current < 5) {
					for(var i = 1; i < 6; i++) {
						if(current == i) {
							content += "<a class='active'>" + i + "</a>";
						} else {
							content += "<a>" + i + "</a>";
						}
					}
					content += ". . .";
					content += "<a>"+total+"</a>";
				} else {
					 //判断页码在末尾的时候
					if(current < total - 3) {
						for(var i = current - 2; i < current + 3; i++) {
							if(current == i) {
								content += "<a class='active'>" + i + "</a>";
							} else {
								content += "<a>" + i + "</a>";
							}
						}
						content += ". . .";
						content += "<a>"+total+"</a>";
					//页码在中间部分时候	
					} else {
						content += "<a>1</a>";
						content += ". . .";
						for(var i = total - 4; i < total + 1; i++) {
							if(current == i) {
								content += "<a class='active'>" + i + "</a>";
							} else {
								content += "<a>" + i + "</a>";
							}
						}
					}
				}
				//页面总数小于6的时候
			} else {
				for(var i = 1; i < total + 1; i++) {
					if(current == i) {
						content += "<a class='active'>" + i + "</a>";
					} else {
						content += "<a>" + i + "</a>";
					}
				}
			}
			content += "<a id='nextPage'>下一页</a>";
			content += "<a id=\"lastPage\">尾页</a>";
			//content += "<span class='totalPages'> 共<span>"+total+"</span>页 </span>";
			//content += "<span class='totalSize'> 共<span>"+totalNum+"</span>条记录 </span>";
			me.element.html(content);
		},
		//添加页面操作事件
		bindEvent: function() {
			var me = this;
			me.element.off('click', 'a');
			me.element.on('click', 'a', function() {
				var num = $(this).html();
				var id=$(this).attr("id");
				if(id == "prePage") {
					if(me.options.pageNo == 1) {
						me.options.pageNo = 1;
					} else {
						me.options.pageNo = +me.options.pageNo - 1;
					}
				} else if(id == "nextPage") {
					if(me.options.pageNo == me.options.totalPage) {
						me.options.pageNo = me.options.totalPage
					} else {
						me.options.pageNo = +me.options.pageNo + 1;
					}

				} else if(id =="firstPage") {
					me.options.pageNo = 1;
				} else if(id =="lastPage") {
					me.options.pageNo = me.options.totalPage;
				}else{
					me.options.pageNo = +num;
				}
				me.creatHtml();
				if(me.options.callback) {
					me.options.callback(me.options.pageNo);
				}
			});
		}
	};
	//通过jQuery对象初始化分页对象
	$.fn.uzaiPaging = function(options) {
		return new Paging($(this), options);
	}
})(jQuery, window, document);

/* 全站通用js begin */  
// 页头->站点切换
function city_change(e, cityId, cityAbbr) {
    var cityName = $(e).html();
    $("#_site_name").html(cityName);
    $("#cityBoard").hide();

    // 一定要在页面跳转之前将当前用户选择的站点写入cookie!
    setCookie('_city_name', encodeURI(cityName), 7);
    setCookie('_city_id', cityId, 7);

    window.location.href = "https://www.uzai.com/" + cityAbbr;
}
/* 静态化页面的站点状态保持 */
function restoreCurrentSite() {
    var cityName = getCookie('_city_name');
    if (cityName) {
        $('#_site_name').html(cityName);
    }
}
/*静态化页面的站点id、站点中文名称cookie默认值设定 */
function resetSiteCookie(callback) {
    // 如果用户清除了浏览器缓存再到详情页会导致报错
    //var reg = /www.uzai.com\/tours\/[0-9]+\.html$/g;
    var cityId = getCookie("_city_id");
    if (!cityId) {
        $.ajax({
            type: "get",
            url: 'https://www.uzai.com/Com/GetCityId?type=jsonp&url=' + encodeURI(window.location.href),
            dataType: "jsonp",
            success: function (data) {
                //{"CityId":"347","CityName":"上海"}
                console.info('GetCityId()跨域请求到的站点数据：' + data);
                if (data) {
                    var cityResult = JSON.parse(data);
                    // 写入cookie
                    if (cityResult && cityResult.CityId && cityResult.CityName) {
                        setCookie("_city_id", cityResult.CityId);
                        setCookie("_city_name", cityResult.CityName);

                        callback();//站点状态保持
                    }
                }
            },
            error: function (err) {
                console.info('resetSiteCookie()中发生异常，错误信息：' + err);
            }
        });
    }
    else {
        callback();//站点状态保持
    }
}

/* 静态化的页面还原频道页导航栏选中状态 */
function restoreChannelCheckedStatus() {
    var url = window.location.href;
    var regIndex = /.uzai.com(\/?)$|.uzai.com\/([a-zA-Z]+)(\/?)$/g;//首页 
    if (url.indexOf(".uzai.com/outboundcruises") > 0) {
        // 出境邮轮
        setChannelCheckedStatus('出境邮轮');
    }
     else if (url.indexOf('.uzai.com/qijilvxing') > 0) {
        setChannelCheckedStatus('高端奇迹旅行');
    }
    else if (regIndex.test(url)) {
        // 当前页面是首页
        setChannelCheckedStatus('首页');
    }
    else if (url.indexOf('.uzai.com/outbound/') > 0) {
        // 当前页面是出境游
        setChannelCheckedStatus('出境游');
    }
    else if (url.indexOf('.uzai.com/lvyoucn') > 0 || url.indexOf('.uzai.com/inland') > 0) {
        // 当前页面是国内游
        setChannelCheckedStatus('国内游');
    }
    else if (url.indexOf('.uzai.com/cruise') > 0) {
        // 当前页面是邮轮
        setChannelCheckedStatus('邮轮');
    }
    
    else {
        // 其他频道页请自行扩展...
    }
}
// 设置频道选中
function setChannelCheckedStatus(channelName) {
    var liArr = [];
    $(".common_nav").find("ul").find("li").each(function () {
        liArr.push($(this));
    });
    for (var i = 0; i < liArr.length; i++) {
        var _channelName = liArr[i].find("a").html();
        if (_channelName == channelName) {
            if (!liArr[i].hasClass('active')) {
                liArr[i].addClass('active');
            }
        }
        else {
            liArr[i].removeClass('active');
        }
    }
}

// 频道：根据cookie中的频道id设置频道选中样式
$(document).ready(function () {
    try {
        // 静态化页面的站点id、站点中文名称cookie默认值设定
        resetSiteCookie(restoreCurrentSite);
        // 静态化页面的站点状态保持
        //restoreCurrentSite();//已移至resetSiteCookie中处理
        // 静态化页面的用户状态保持
        UserStatus.remain();
        // 静态化页面的搜索历史还原
        IndexSearch.restoreHistory();
        // 静态化页面的频道选中状态保持      
        restoreChannelCheckedStatus();
    }
    catch (err) {
        console.info(err);
    }
});
// 侧边栏->在线客服
function _index_online_service(e) {   
    (function (m, ei, q, i, a, j, s) {
        m[i] = m[i] || function () {
            (m[i].a = m[i].a || []).push(arguments)
        };
        j = ei.createElement(q),
            s = ei.getElementsByTagName(q)[0];
        j.async = true;
        j.charset = 'UTF-8';
        j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
        s.parentNode.insertBefore(j, s);
    })(window, document, 'script', '_MEIQIA');
    //_MEIQIA('entId', 48931);
    _MEIQIA('showPanel'); 
}

// 侧边栏->我的订单
function _index_my_order(url) {  
    api.loginInfo(function (data) {
        console.info('_index_my_order中的data=' + data);
        if (data != null) {
            if (data.isLogin == "1") {
                var _url = "https://u.uzai.com/personal/myorder";
                openWindow(_url);
            }
            else if (data.isLogin == "0") {
                var _url = "https://u.uzai.com/reg/login";
                window.location.href = _url;
            }
        }
        else {
            var _url = "https://u.uzai.com/reg/login";
            window.location.href = _url;
        }  
    });
}
// 侧边栏->我的足迹
function _index_my_trace(url) {
    openWindow(url);
}
/* 全站通用js end */

// 通用工具----begin-------------------
/*
* 写入cookie
* @param cname cookie名称
* @param cvalue cookie值
* @param exday 过期时间(单位：天)
*/
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";domain=.uzai.com;path=/";
}
/*
* 获取cookie
* @pram cname cookie名称
*/
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return decodeURI(c.substring(name.length, c.length));
    }
    return "";
}
function clearCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if (cval != null)
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";domain=.uzai.com;path=/";
}
/* 在新窗口中打开 */
function openWindow(url) {
    var a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');
    var id = Math.random(10000, 99999);
    a.setAttribute('id', id);
    // 防止反复添加
    if (!document.getElementById(id)) {
        document.body.appendChild(a);
    }
    a.click();
}
// 通用工具----end-------------------

/* 搜索有关的js */
var IndexSearch = {
    /*
    * 首页搜索框搜索功能
    */
    search: function () {
        var keyword = $("#index_search_input").val();//用户输入的搜索词
        if (keyword == "" || keyword == null) {
            // 用户没有输入搜索词
            var defaultWord = $("#index_search_input").attr("placeholder");//默认搜索词
            var defaultWordLink = $("#index_search_input").attr("attr-href");//默认搜索词指向的链接
            if (defaultWord != "请输入目的地、主题或关键字" && defaultWord != "") {
                if (defaultWordLink != "" && defaultWordLink != null) {
                    openWindow(defaultWordLink);
                }
                else {
                    var url = "https://search.uzai.com/" + defaultWord;
                    window.location.href = url;
                }
            }
        }
        else {
            // 用户输入了搜索词

            // 判断用户输入的是不是全为空格，不全为空格时才执行搜索
            if ($.trim(keyword) != "") {
                keyword = keyword.substr(0, 30);//只取30个字符，如果输入的大于30个字，则截取前30个字符(2018.4.17添加的新需求)
                // 搜索词写入cookie并执行搜索
                if (!IndexSearch.isNormalChar(keyword)) { //包含[英文、数字、汉字]之外的特殊字符，直接跳转至搜索无结果页[注意wangjue后来要求跳转到无结果页时要做状态保持]
                    window.location.href = 'https://www.uzai.com/error/cannotfind?searchkey=' + encodeURIComponent(keyword);
                }
                else {
                    // 只有非特殊字符才写入cookie做状态保持
                    IndexSearch.writeSearchHistory(keyword);
                    window.location.href = "https://search.uzai.com/" + keyword;
                }
            }
        }
    },
    /*
    * 清除搜索历史
    */
    clearHistory: function () {
        clearCookie('_search_words');
        $('#search_history').html('');//请不要注释这行代码
        $('#search_history').hide();//在hide()前必须清除#search_history的内容，否则IndexSearch.isSearchBoardEmpty()会认为搜索框中有数据
        $('#search_board').find(".split_line").remove();
        var empty = IndexSearch.isSearchBoardEmpty();
        if (empty) {
            $('#search_board').hide();
        }
    },
    /*
    * 还原搜索历史(用于静态化搜索历史状态保持)
    */
    restoreHistory: function () {
        var searchKeys = getCookie('_search_words');
        if (searchKeys) {
            var searchKeyArr = searchKeys.split('^');
            if (searchKeyArr) {
                if ($('#search_history') == null || $('#search_history').length == 0) {
                    var historyHtml = '<div class="search_more_top" id="search_history">';
                    historyHtml += '<span class="empty" onclick="IndexSearch.clearHistory()">清除</span>';
                    historyHtml += '<span>您最近搜索：</span>';
                    for (var i = 0; i < searchKeyArr.length; i++) {
                        var word = searchKeyArr[i];
                        historyHtml += '<span><a href="javascript:;" onclick="IndexSearch.target_link(\'' + word + '\',\'https://search.uzai.com/' + word + '\')">' + word + '</a></span>';
                    }
                    historyHtml += '</div>';

                    var more = $('#search_more_m');
                    if (more != null && more.length > 0) {
                        historyHtml += '<div class="split_line"></div>';
                        $(more).before(historyHtml);
                    }
                    else {
                        $('#search_history').append(historyHtml);
                    }   
                }
            }
        }
    },
    /*
    * 高级搜索按钮事件
    */
    index_adv_search_click: function () {
        //console.info('you clicked the adv search button..');
        var keyword = $.trim($('#input_adv_search').val()); //关键词
        
        // 天数
        var dayArr = [];
        $("i[name='index_trip_days'][class='iconfont icon-checkbank']").each(function () {
            var day = $(this).parent().text().replace('天', '');
            if (!isNaN(day)) {
                dayArr.push(day);//[1天,2天,...,18天]
            }
            else {
                dayArr.push(35);//[18天以上]
            }
        });
        // 价格区间
        var priceStr1 = $('#index_price_low').val();
        var priceStr2 = $('#index_price_high').val();

        // 验证
        var result1 = true;//关键词的验证结果
        var result2 = true;//价格区间的验证结果
        var errorMsg = "";
        if (!keyword) {
            $('#adv_search_error_tip').html('请输入关键词');
            $('#input_adv_search').focus();
            result1 = false;
        }
        else {
            $('#adv_search_error_tip').html('');
        }
        if (isNaN(priceStr1)) {
            errorMsg = '请输入数字';
            $('#index_price_low').focus();
            result2 = false;
        }
        else if (isNaN(priceStr2)) {
            errorMsg = '请输入数字';
            $('#index_price_high').focus();
            result2 = false;
        }
        else if (parseFloat(priceStr1) < 0) {
            errorMsg = '输入的数字必须大于等于0';
            $('#index_price_low').focus();
            result2 = false;
        }
        else if (parseFloat(priceStr2) < 0) {
            errorMsg = '输入的数字必须大于等于0';
            $('#index_price_high').focus();
            result2 = false;
        }


        if (priceStr1 == "" && priceStr2 == "") {
            // 两个数字框都没填，不做任何处理
        }
        else {
            // 填了一个，或都填

            // 判断是否填了两个0
            if (priceStr1 == "0" && priceStr2 == "0") {
                result2 = false;
                errorMsg = '价格区间不能为0-0';
            }
            else {
                // 输入的价格区间如果下限＞上限，则自动调换数字位置
                if (priceStr2 != "") {
                    if (parseFloat(priceStr1) > parseFloat(priceStr2)) {   
                        var temp = priceStr1;
                        priceStr1 = priceStr2;
                        priceStr2 = temp;
                    }
                }
            }
        }
        if (!result2) {
            IndexSearch.appendPriceZoneErrorTip(errorMsg);
        }
        else {
            IndexSearch.removePriceZoneErrorTip();
        }

        // 跳转至搜索页
        //console.info("result1=" + result1 + ",result2=" + result2);
        if (result1 && result2) {
            if (!IndexSearch.isNormalChar(keyword)) { //包含[英文、数字、汉字]之外的特殊字符，直接跳转至搜索无结果页[注意wangjue后来要求跳转到无结果页时要做状态保持]
                //console.info('特殊字符，跳转搜索无结果页');
                window.location.href = 'https://www.uzai.com/error/cannotfind?searchkey=' + encodeURIComponent(keyword);
            }
            else {
                // 写入cookie
                keyword = keyword.substr(0, 30);//只取30个字符，如果输入的大于30个字，则截取前30个字符(2018.4.17添加的新需求)
                IndexSearch.writeSearchHistory(keyword);
                if (priceStr1 == "") priceStr1 = "0";
                if (priceStr2 == "") priceStr2 = "0";
                var days = dayArr.join("_");              
                var url = "https://search.uzai.com/" + keyword + "#type=0&c=&d=&p=&t=" + days + "&j=" + priceStr1 + "_" + priceStr2 + "&r=&s=0&h=&e=&g=&i=&page=1";
                //console.info('常规字符，即将跳转搜索页，搜索url=' + url);
                if (window.location.href.indexOf('search.uzai.com/') > 0) {
                    // 当前就在搜索列表页，需要刷新

                    // 判断#前面的内容是否发生变化
                    var oldUrlHead = "";//当前页面(搜索列表页)URL中#前面的部分
                    var url_segments = window.location.href.split('#');
                    if (url_segments.length > 0) {
                        oldUrlHead = url_segments[0];
                    }
                    //console.info(newUrlHead + "," + oldUrlHead);
                    var newUrlHead = "https://search.uzai.com/" + encodeURIComponent(keyword); //即将跳转的url中#前面的部分
                    if (oldUrlHead == newUrlHead) {                      
                        window.location.href = url;
                        window.location.reload();
                    }
                    else {
                        window.location.href = url;
                    }
                }
                else {
                    // 当前不在搜索列表页，直接跳转
                    window.location.href = url;
                }            
            }
        }
    },
    /*
    * 添加价格区间错误提示信息
    */
    appendPriceZoneErrorTip: function (msg) {
        IndexSearch.removePriceZoneErrorTip();
        $('#index_price_low').parent().parent().append('<div class="error">' + msg + '</div>');
    },
    /*
    * 添加价格区间错误提示信息
    */
    removePriceZoneErrorTip: function () {
        $('#index_price_low').parent().parent().find(".error").remove();
    },
    /*
    * 清除高级搜索的查询条件
    */
    clear_index_adv_condis: function () {
        $('#input_adv_search').val('');

        $("i[name='index_trip_days']").each(function () {
            $(this).attr("class", "iconfont icon-fangkuang");
        });

        $('#index_price_low').val('');
        $('#index_price_high').val('');

        $('#adv_search_error_tip').html('');
        $(".senior_search_m").find("div[class='error']").remove();
    },
    /*
    * 生成关键词联想下拉框
    */
    generateImagingTags: function () {
        var keyword = $.trim($('#index_search_input').val());
        $('#index_search_input_last_value').val(keyword);
        var num = 10;
        if (keyword) {
            //console.info('即将发送ajax请求至getimaging,keyword=' + keyword);         
            $.ajax({
                type: "get",
                url: 'https://www.uzai.com/Com/GetImagingTags?type=jsonp&keyword=' + keyword + '&num=' + num,
                dataType: "jsonp",
                success: function (data) {
                    //console.info("跨域请求完成，获取到的数据data:" + data);
                    if (data) {
                        var imagingTags = JSON.parse(data);
                        //console.info(imagingTags);
                        $('#searchQuickInput').find("a").remove();
                        if (imagingTags && imagingTags.length > 0) {
                            for (var i = 0; i < imagingTags.length; i++) {
                                var tag = imagingTags[i];
                                var rowHtml = "<a class='searchQuickList' href='javascript:;' onclick=\"IndexSearch.imaging_link('" + tag.TagName + "')\">";

                                var rex = new RegExp(keyword, 'g');
                                var tagHtml = tag.TagName.replace(rex, "<font color='red'>" + keyword + "</font>");
                                rowHtml += '<em class="quickLink">' + tagHtml + '</em><span class="quickGay">' + tag.PreTagName + '</span></a>';

                                $('#searchQuickInput').append(rowHtml);
                            }
                            $('#searchQuickInput').show();
                        }
                        else {
                            $('#searchQuickInput').hide();//没有联想词，隐藏
                        }
                    }
                    else {
                        $('#searchQuickInput').hide();//没有联想词，隐藏
                    }
                },
                error: function (err) {
                    console.info('fail to get imaging tags!keyword=' + keyword+",msg:" + err);
                }
            });
        }
    },
    /*
    * 将搜索词写入cookie，并在当前页面打开搜索链接
    */
    imaging_link: function (keyword) {
        IndexSearch.writeSearchHistory(keyword);
        window.location.href = "https://search.uzai.com/" + keyword;
    },
    /*
    * 在新窗口中打开搜索链接
    */
    target_link: function (keyword, url, newTab) {
        IndexSearch.writeSearchHistory(keyword);

        if (newTab == 1) {
            openWindow(url);
        }
        else {
            window.location.href = url;
        }
    },
    /*
    * 将搜索历史写入公共cookie
    */
    writeSearchHistory: function (keyword) {
        keyword = $.trim(keyword);
        if (!keyword) return;
        var words = "";//待写入的搜索历史(未加密)，格式：北京^上海^欧洲 [多个以^分隔]
        var now_words = getCookie('_search_words'); // cookie中现存的搜索历史，已解密<getCookie会自动解密>

        if (now_words != null && now_words != "") {
            var newArr = [];
            var wordArr = now_words.split('^');
            if (wordArr) {
                for (var i = 0; i < wordArr.length; i++) {
                    if (wordArr[i] != keyword) {
                        newArr.push(wordArr[i]);
                    }
                }
            }
            if (keyword != "" && keyword.length > 200) { //输入框输入超过200个字符的情况下只保留前200个字符
                keyword = keyword.substr(0, 200);
            }
            words = keyword + "^" + newArr.join("^");
        }
        else {
            if (keyword != "" && keyword.length > 200) { //输入框输入超过200个字符的情况下只保留前200个字符
                keyword = keyword.substr(0, 200);
            }
            words = keyword;
        }
        var encodeWords = encodeURI(words);//编码
        setCookie("_search_words", encodeWords, 7);//写入cookie
    },
    /*
    * 判断是否是常规字符
    */
    isNormalChar: function (keyword) {
        var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9])+$");//英文，汉字，数字(除此之外均视为特殊字符)
        if (keyword) {
            var res = regex.test(keyword);
            return res;
        }
        return false;
    },
    /*
    * 判断搜索框中是否有内容
    */
    isSearchBoardEmpty: function () {
        var isEmpty = true;
        if ($('#search_more_m').html() || $('#search_history').length > 0 && $('#search_history').html()) {
            isEmpty = false;
        }
        return isEmpty;
    }
}

// 页面顶部状态保持
var UserStatus = {
    /*
    * 用户状态保持，用于静态化页面
    *
    */
    remain: function () {
        var encryptedUserId = api.getCookie('user');
        //console.info("encryptedUserId=" + encryptedUserId);
        if (encryptedUserId) {
            var userId = encodeURIComponent(encryptedUserId);
            //console.info('userId=' + userId + ",UserStatus.remain()即将发送跨域请求...");
            $.ajax({
                type: "get",
                url: 'https://www.uzai.com/Com/IsLoginByEncryptUserId?type=jsonp&encryptedUserId=' + userId,
                dataType: "jsonp",
                success: function (data) {
                    //console.info('UserStatus.remain()跨域请求到的数据：' + data);
                    if (data) {
                        var json = JSON.parse(data);
                        if (json.isLogin == "1") {
                            // 欢迎词
                            var top_m = $(".publicTopW").find(".top_m");
                            if (top_m != null && top_m.length > 0 && $(top_m).find(".top_m_l1").length == 0) {
                                $(top_m).find(".top_m_l").remove();

                                var welcomeHtml = '';
                                welcomeHtml += '<div class="top_m_l1">';
                                welcomeHtml += '<a href="https://u.uzai.com/personal/personalindex" target="_blank"><span>HI，' + json.username + '</span></a>';
                                welcomeHtml += '<a href="https://u.uzai.com/personal/memberlevel?level=A" target="_blank" class="grade grade1"></a>';
                                welcomeHtml += '<a class="sign" href="https://u.uzai.com/user/loginout"><i class="iconfont icon-tuichu-copy"></i>退出</a>';
                                welcomeHtml += '</div>';

                                $(top_m).append(welcomeHtml);
                            }

                            // 我的悠哉
                            var myUzai = $(".publicTopW").find("div[class='top_server myuzai']");
                            if (myUzai == null || myUzai.length == 0) {
                                var myUzaiHtml = '';
                                myUzaiHtml += '<div class="top_server myuzai">';
                                myUzaiHtml += '<a href="https://u.uzai.com/personal/personalindex" target="_blank">我的悠哉 <i class="iconfont icon-zhankai"></i><i class="iconfont icon-shouqi"></i></a>';
                                myUzaiHtml += '<div class="clear"></div>';
                                myUzaiHtml += '<div class="ul"><a href="https://u.uzai.com/personal/myorder" target="_blank">我的订单</a>';
                                myUzaiHtml += '<a href="https://u.uzai.com/personal/myintegral" target="_blank">我的积分</a>';
                                myUzaiHtml += '<a href="https://u.uzai.com/personal/mydiscountcoupon" target="_blank">我的优惠券</a>';
                                myUzaiHtml += '<a href="https://u.uzai.com/personal/personaldata" target="_blank">我的资料</a>';
                                myUzaiHtml += '</div>';
                                myUzaiHtml += '</div>';

                                $(".publicTopW").find(".top_m_r").find("a[href='https://u.uzai.com/personal/myorder']").after(myUzaiHtml);
                            }
                        }
                    }
                },
                error: function (err) {
                    console.info('UserStatus.remain()中发生异常，错误信息：' + err);
                }
            });
        }
    }
};

//图片不显示时执行的方法
function nofind() {
    var img = event.srcElement;
    img.src = "//r.uzaicdn.com/content/store/images/liner/noimg.jpg";
    img.onerror = null; //控制不要一直跳动
}
