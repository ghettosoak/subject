(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());

//jquery v1.8.0 is included in this mess. Copyright 2012 jQuery Foundation and other contributors.
//like something you see, but can't read this unholy mess? drop me a line at (mike)[at](mfischerdesign)[dot](com)


var $windowPane = $(window)

var paneHeight, paneWidth;

var $master = $('#master');
var $english = $('#english');
var $duutsch = $('#duutsch');
var $slider = $('#slider');

$(document).ready(function(){
	// $windowPane.resize(resizer);
	$slider.slider({
		value:100,
		slide:function(e, ui){
			// console.log(e);
			console.log(ui.value);

			$english.css('width', ui.value+'%')
			// $duutsch.css('width', ui.value+'%')
			$duutsch.css('margin-right', -100-ui.value+'%')

		}
	})
})
// var resizer = _.debounce(function(){

// },250)