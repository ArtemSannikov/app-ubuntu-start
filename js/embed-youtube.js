"use strict";
$(function() {
	$(".youtube").each(function() {
		// Зная идентификатор видео на YouTube, легко можно найти его миниатюру
		$(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');

		// Добавляем иконку Play поверх миниатюры, чтобы было похоже на видеоплеер
		$(this).append($('<div/>', {'class': 'play'}));

		$(document).delegate('#'+this.id, 'click', function() {
			// создаем iframe со включенной опцией autoplay
			var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1";
			if ($(this).data('params')) iframe_url+='&'+$(this).data('params');

			// Высота и ширина iframe должны быть такими же, как и у родительского блока
			var iframe = $('<iframe/>', {'frameborder': '0', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })

			// Заменяем миниатюру HTML5 плеером с YouTube
			$(this).replaceWith(iframe);
		});
	});
 });
