(function ($) {

    $.fn.extend({

	$.fn.slideReveal = function(options) {
		var s = $.extend({
			node: $(this),
			toReveal: '.slideReveal-right',
			direction: 'width',
			buffer: 20,
			dragArea: 50
        }, options );
		var slideIt = function(e) {
			var nuWd = s.node[s.direction]() - (e[s.clientDir] - s.node.offset()[s.offset]);
			if (nuWd > s.buffer && s.node[s.direction]()-nuWd > s.buffer)
				s.toReveal[s.direction](nuWd);
		},
		init = function() {
			s.toReveal = s.node.find(s.toReveal);
			s.clientDir = s.direction==='width'?'clientX':'clientY';
			s.offset = s.direction==='width'?'left':'top';
			s.node.bind('mousedown', function(e) {
				var curOff = s.node[s.direction]() - s.toReveal[s.direction](),
					curL = e[s.clientDir] - s.node.offset()[s.offset];
				if (Math.abs(curL - curOff) < s.dragArea) {
					s.node.bind('mousemove', slideIt).bind('mouseup', function() {
						s.node.unbind('mousemove', slideIt);
					});
				}
			}).bind('dragstart', function(e) {
				e.preventDefault();
			});
		};
		init();
	};
    });

})(jQuery);