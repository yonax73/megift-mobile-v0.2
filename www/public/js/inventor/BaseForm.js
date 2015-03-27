/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 13/02/2015
@ Date update: 13/02/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: BaseForm validations
**/
var BaseForm = (function () {
    function BaseForm() {}
/*
 * @param String value
 * @returns true if value is fullname
 */
BaseForm.isFullName = function (value) {
    return value.match(/^[a-zA-Z][a-zA-Z ]+$/);
};
/*
* @param String value
* @returns true if value is email
*/
BaseForm.isEmail = function (value) {
    return value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
/*
* @param String value
* @returns true if value is empty
*/
BaseForm.isEmpty = function (value) {
    return !value.match(/^\S+$|[^\s]+$/);
};
/*
* @param String value
* @param String value1
* @returns true if both values are equals
*/
BaseForm.isEqualsTo = function (value, value1) {
    return value === value1;
};
/*
* @param String value
* @returns true if value is money format
*/
BaseForm.isMoney = function (value) {
    return value.match(/^\d+(,\d{3})*(\.\d*)?$/);
};
/*
* @param String value
* @param length, number of characters
* @returns true if  value  has length characters or less
*/
BaseForm.maxLength = function (value, length) {
    return !isNaN(length) && value.length <= length;
};
/*
* @param String value
* @param length, number of characters
* @returns true if  value has length characters or more
*/
BaseForm.minLength = function (value, length) {
    return !isNaN(length) && value.length >= length;
};
/*
* @param String value
* @param min, number minimum of characters
* @param max, number maximum of characters
* @returns true if  value is between min and max
*/
BaseForm.rangeLength = function (value, min, max) {
    var length = value.length;
    return ((!isNaN(min) && length >= min) && (!isNaN(max) && length <= max));
};
/*
* @param String value
* @param max, number maximun
* @returns true if  value is equals or less that max
*/
BaseForm.max = function (value, max) {
    return (!isNaN(max) && value <= max);
};
/*
* @param String value
* @param min, number minimun
* @returns true if value is equals or greater that min
*/
BaseForm.min = function (value, min) {
    return (!isNaN(min) && value >= min);
};
/*
* @param String value
* @param min, number minimum
* @param max, number maximum
* @returns true if value is between min and max number
*/
BaseForm.range = function (value, min, max) {
    return ((!isNaN(min) && value >= min) && (!isNaN(max) && value <= max));
};
/*
* @param String value
* @returns true if value is URL
*/
BaseForm.isURL = function (value) {
    return value.match(/https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,}/);
};
/*
* @param String value
* @returns true if value is Date
*/
BaseForm.isDate = function (value) {
    var parms = value.split(/[\.\-\/]/);
    var yyyy = parseInt(parms[2], 10);
    ;
    var mm = parseInt(parms[1], 10);
    var dd = parseInt(parms[0], 10);
    if (yyyy < 1582) {
        var tmp = yyyy;
        yyyy = dd;
        dd = tmp;
    }
    var date = new Date(yyyy, mm - 1, dd);
    return (mm === (date.getMonth() + 1) && dd === date.getDate() && yyyy === date.getFullYear());
};
/*
* @param String value
* @returns true if value is Number
*/
BaseForm.isNumber = function (value) {
    return !isNaN(value);
};
/*
* @param String value
* @returns true if value is credit card
*/
BaseForm.isCreditCard = function (value) {
    return value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/);
};
/*
* @param HtmlElement input
* @returns true if input is Checked
*/
BaseForm.isChecked = function (input) {
    return input.checked;
};
/*
* @param HtmlElement input
* @param option
* @returns true if option is greater than zero
*/
BaseForm.isValidOption = function (input, option) {
    return (!isNaN(option) && option > 0);
};
return BaseForm;
})();