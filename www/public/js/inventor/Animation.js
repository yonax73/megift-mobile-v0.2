/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 16/02/2015
@ Date update: 16/02/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: Animations
**/
var Animation = (function () {
    /**
    * constructor
    * @param type
    * @param fn
    * @param time
    * @param ms
    */
    function Animation(type, fn, time, ms) {
        this.type = type;
        this.fn = fn;
        this.time = time;
        this.ms = ms;
    }
    /**
   * Run animation
   * @param element
   * @param callback
   * @method run
   */
    Animation.prototype.run = function (element, callBack) {
        var _this = this;
        element.classList.add(this.type);
        element.classList.add(this.fn);
        element.classList.add(this.time);
        this.timeOut = setTimeout(function () {
            element.classList.remove(_this.type);
            element.classList.remove(_this.fn);
            element.classList.remove(_this.time);
            if (callBack)
                callBack();
        }, this.ms);
    };
    /**
    * Stop animation
    * @method stop
    */
    Animation.prototype.stop = function () {
        if (this.timeOut)
            clearTimeout(this.timeOut);
    };
    return Animation;
})();
