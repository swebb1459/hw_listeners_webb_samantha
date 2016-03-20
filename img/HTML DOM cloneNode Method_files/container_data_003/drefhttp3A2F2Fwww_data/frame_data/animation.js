'use strict';

var size = '300x250';
var header = 'h3';
var subheader = 's3';
var cta = 'c1';

// CHECK BROWSER SUPPORT FOR CSS ATTRIBUTES
function isPropertySupported(property) {
	return property in document.body.style;
}

// CHECK FOR IE OR EDGE
var isIE = /MSIE/.test(navigator.userAgent) || /Edge/.test(navigator.userAgent) || /Trident/.test(navigator.userAgent);

$(document).ready(function() {
  var $stage = $('.stage');
  var stageW = $stage.width();
  var stageH = $stage.height();

	var clickUrl = 'http://www.hrblock.com';
$stage.on('click', function() {
    if (typeof te_html !== 'undefined') {
  te_html.click('clickTAG', clickUrl);
} else {
  window.location.href = clickUrl;
}
  });

  var $logo = $('.logo');
  var $header = $('.header');
  var $subheader = $('.subheader');
  var $ctaTxt = $('.cta-txt');
  var $ctaBg = $('.cta-bg');
  var $cube = $('.cube');
	var $cube3d = $('.cube3d');
  var $cloud = $('.cloud');
  var $stars = $('.stars');
  var $largeDollar = $('.large-dollar');
  var endframeBegin = 6;
  var transformSupported = isPropertySupported('transformStyle');
  if (!transformSupported) {
    endframeBegin = 4;
  }

	$header.css('background-image', 'url(\'images/' + size + '_' + header + '.svg\')');
	$subheader.css('background-image', 'url(\'images/' + size + '_' + subheader + '.svg\')');
	$ctaTxt.css('background-image', 'url(\'images/' + size + '_' + cta + '.svg\')');

  var masterTL = new TimelineLite({paused: false});
  var tl = new TimelineLite();
  var dollars = new TimelineLite();

  masterTL.add(tl, 0);
  if (transformSupported) {
		masterTL.add(dollars, 2);
	}

  tl.to($cloud, 8, { left:'-=200', ease:Linear.easeNone}, 'start');
  tl.to($stars, 8, { left:'-=100', ease:Linear.easeNone}, 'start');

  if (transformSupported) {
    tl.to($logo, 0.3, { left:'-=' + stageW}, 'start+=3');
    tl.to($header, 0.3, { left:'-=' + stageW}, 'start+=3');
    tl.to($cloud, 0.3, { left:'-=300', ease:Linear.easeNone}, 'start+=3');
    tl.to($stars, 0.3, { left:'-=200', ease:Linear.easeNone}, 'start+=3');
    tl.set($cube, { display:'block' },'start+=3');
    tl.from($cube, 0.3, { left: stageW + 100},'start+=3');

    tl.to($cloud, 8, { left:'-=200', ease:Linear.easeNone}, 'start+=3.3');
    tl.to($stars, 8, { left:'-=100', ease:Linear.easeNone}, 'start+=3.3');
  }

	if (isIE) {
		$cube3d.addClass('cube2d');
		dollars.to($cube3d, 6, { rotationZ: -180, ease:Linear.easeNone}, 'start');
	}

  tl.from($largeDollar, 1.5, {
    top: -300,
    left: -1035,
    width: 100,
    height: 200
  }, 'start+=' + endframeBegin);

  tl.set($cube, { display:'none' }, 'start+=' + (endframeBegin + 0.5));
  tl.set($logo, {
    top: 30,
    left: 30,
    width: 52,
    height: 52
  }, 'start+=' + (endframeBegin + 0.5));
	tl.set($header, { display:'none' }, 'start+=' + (endframeBegin + 0.5));
  tl.set($subheader, { display:'block' }, 'start+=' + (endframeBegin + 0.5));
  tl.set($ctaTxt, { display:'block' }, 'start+=' + (endframeBegin + 0.5));
  tl.set($ctaBg, { display:'block', onComplete:function() {
    dollars.stop();
  }}, 'start+=' + (endframeBegin + 0.5));

  if (transformSupported) {
    for (var i = 0; i < 8; i++) {
      var $dollar = $('.dollar' + i);
      var depth = getRandom(80, 110);
      var speed;
      var d = 0;
      var dw = $dollar.width();
      var dh = $dollar.height();
      var dy;
      var prop = dh / dw;

      TweenLite.set($dollar, {transformPerspective:500});

      switch(i){
        case 0  :
          speed = 1.1;
          break;
        case 1 :
          speed = 1;
          dw = 4;
          dy = getRandom(-80, 80);
          break;
        case 2 :
          speed = 0.8;
          dw = 8;
          dy = getRandom(-80, 80);
          break;
        case 3 :
          speed = 3.5;
          dw = 30;
          dy = -20;
          break;
        case 4 :
          speed = 2;
          dw = 20;
          dy = getRandom(-80, 80);
          break;
        case 5 :
          speed = 1.5;
          dw = 10;
          dy = getRandom(-80, 80);
          break;
        case 6 :
          speed = 1.6;
          dw = 12;
          dy = getRandom(-80, 80);
          break;
        case 7 :
          speed = 0.7;
          dw = 3;
          dy = getRandom(-80, 80);
          break;
      }

      dh = dw * prop;

      $dollar.css({
        top: (stageH/2 - dh/2 + dy) + 'px',
        width: dw + 'px',
        height: dh + 'px'
      });

      dollars.to($dollar, speed/2, { rotationY:'+=90', transformOrigin:'left 50% '+depth, ease:Linear.easeNone, onComplete:changeZindex, onCompleteParams:[$dollar, 20]}, 'start+='+d);
      dollars.to($dollar, speed, { rotationY:'+=180', transformOrigin:'left 50% '+depth, ease:Linear.easeNone, onComplete:changeZindex, onCompleteParams:[$dollar, 1]},'start+='+(d+speed*0.5));
      dollars.to($dollar, speed, { rotationY:'+=180', transformOrigin:'left 50% '+depth, ease:Linear.easeNone, onComplete:changeZindex, onCompleteParams:[$dollar, 20]},'start+='+(d+speed*1.5));
      dollars.to($dollar, speed, { rotationY:'+=180', transformOrigin:'left 50% '+depth, ease:Linear.easeNone, onComplete:changeZindex, onCompleteParams:[$dollar, 1]},'start+='+(d+speed*2.5));
      dollars.to($dollar, speed, { rotationY:'+=180', transformOrigin:'left 50% '+depth, ease:Linear.easeNone, onComplete:changeZindex, onCompleteParams:[$dollar, 20]},'start+='+(d+speed*3.5));
      dollars.to($dollar, speed, { rotationY:'+=180', transformOrigin:'left 50% '+depth, ease:Linear.easeNone, onComplete:changeZindex, onCompleteParams:[$dollar, 1]},'start+='+(d+speed*4.5));
      dollars.to($dollar, speed, { rotationY:'+=180', transformOrigin:'left 50% '+depth, ease:Linear.easeNone, onComplete:changeZindex, onCompleteParams:[$dollar, 20]},'start+='+(d+speed*5.5));

      d += 0.2;
    }
  }

  function changeZindex(object, z) {
    object.css({
      'z-index': z
    });
  }

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
});
