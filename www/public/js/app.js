function keyBoardListener() {
    try {
        window.addEventListener('native.keyboardshow', function (e) {
            var deviceHeight = window.innerHeight;
            var keyboardHeight = e.keyboardHeight;
            var deviceHeightAdjusted = deviceHeight - keyboardHeight;
            deviceHeightAdjusted = deviceHeightAdjusted < 0 ? (deviceHeightAdjusted * -1) : deviceHeightAdjusted;
            document.getElementById('page').style.height = deviceHeightAdjusted + 'px';
            document.getElementById('page').setAttribute('keyBoardHeight', keyboardHeight);
        });
        window.addEventListener('native.keyboardhide', function (e) {
            setTimeout(function () {
                document.getElementById('page').style.height = 100 + '%';
            }, 100);
        });
    } catch (ex) {
        alert(ex.message);
    }
}
function adjustDeviceSize() {
    var inputs = document.querySelectorAll('input');
    var n = inputs.length;
    for (var i = 0; i < n; i++) {
        var input = inputs[i];
        input.addEventListener('focus', function (e) {
            var inp = this;
            setTimeout(function () {
                try {
                    if (cordova.plugins.Keyboard.isVisible) {
                        var padding = 15;
                        var targetPosition = parseInt($(inp).offset().top + padding);
                        var keyboardHeight = parseInt(document.getElementById('page').getAttribute('keyBoardHeight'));
                        if (targetPosition >= keyboardHeight) {
                            padding *= 5;
                            document.getElementById('page').scrollTop = targetPosition - padding;
                        }
                    }
                } catch (ex) {
                    alert(ex.message);
                }
            }, 600);
        }, true);
    }
}

keyBoardListener();
adjustDeviceSize();