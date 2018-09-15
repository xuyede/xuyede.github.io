(function ($) {

    $.fn.zoomIn = function (options) {
        var setting = {
            width: 200,
            height: 200
        };

        if (options) {
            $.extend(setting, options);
        }

        var $img = $('.img', this),
            self = this;

        $img.hover(function () {
            var imgWidth = $img.get(0).offsetWidth,
                imgHeight = $img.get(0).offsetHeight,
                imgLeft = $img.offset().left,
                imgTop = $img.offset().top,
                url = $img.attr('href');

            if ($('span.magnifying', self).get().length == 0) {
                $(this).after('<span class="magnifying"><img src="' + url + '" alt=""></span>');

                $('span.magnifying').css({
                    width: setting.width + 'px',
                    height: setting.height + 'px'
                });
            } else {
                $('.magnifying').css('display', 'block');
            }

            $(document.body).on('mousemove', function (e) {
                var bigPicWidth = $('.magnifying').find('img').get(0).offsetWidth,
                    bigPicHeight = $('.magnifying').find('img').get(0).offsetHeight,
                    scaleW = Math.floor(bigPicWidth / imgWidth),
                    scaleH = Math.floor(bigPicHeight / imgHeight),
                    posX = e.clientX - imgLeft - (1 / scaleW) * imgWidth / 2,
                    posY = e.clientY - imgTop - (1 / scaleH) * imgHeight / 2;

                $('.magnifying').get(0).scrollLeft = posX * scaleW;
                $('.magnifying').get(0).scrollTop = posY * scaleH;
            });

        }, function () {
            $('.magnifying').css('display', 'none');
        });
    };

}(jQuery));