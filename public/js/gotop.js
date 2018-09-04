var Gotop = {
    myClass: $('#go-top'),
    offset: 128,
    duration: 256,
    init: function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > this.offset) {
                this.myClass.fadeIn(this.duration);

            } else {
                this.myClass.fadeOut(this.duration);
            }
        }.bind(this));

        this.myClass.click(function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, this.duration);
            return false;
        }.bind(this))
    }
};

$(document).ready(function ($) {
    Gotop.init();
});