/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 16/02/2015
@ Date update: 16/02/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: Animations
**/
class Animation {
    public type: string;
    public fn: string;
    public time: string;
    public ms: number;
    public timeOut;
    /**
    * constructor 
    * @param type
    * @param fn
    * @param time
    * @param ms 
    */
    constructor(type: string, fn: string, time: string, ms: number) {
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
    public run(element: HTMLElement, callBack?) {
        element.classList.add(this.type);
        element.classList.add(this.fn);
        element.classList.add(this.time);
        this.timeOut = setTimeout(() => {
            element.classList.remove(this.type);
            element.classList.remove(this.fn);
            element.classList.remove(this.time);
            if (callBack) callBack();
        }, this.ms);
    }
    /**
    * Stop animation
    * @method stop
    */
    public stop() {
        if (this.timeOut) clearTimeout(this.timeOut);
    }
}