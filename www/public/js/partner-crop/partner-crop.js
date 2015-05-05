/**
@ Autor :@yonax73 | yonax73@gmail.com
@ Version: 0.1
@ Date : 5/3/2015
@ Date update: 5/3/2015
@ Update by: @yonax73  | yonax73@gmail.com
@ Description: partner crop
**/
var PartnerCrop = (function () {
    function PartnerCrop(dataURI) {
        this.takePictureBtn = document.getElementById('take-picture-pc-btn');
        this.importPictureBtn = document.getElementById('import-picture-pc-btn');
        PartnerCrop.PartnerCropImg = document.getElementById('picture-crop-img');
        PartnerCrop.PartnerCropImg.src = dataURI;
    }
    PartnerCrop.prototype.init = function () {
        //init croppper
        var $image = $('.img-container > img');
        $image.cropper({
            autoCropArea: 0.65,
            highlight: false,
            dragCrop: false,
            movable: false,
            resizable: false,
            minContainerWidth: 235,
            minContainerHeight: 125,
            minCropBoxWidth: 235,
            minCropBoxHeight: 125
        });
        // Methods
        $(document.body).on('click', '[data-method]', function () {
            var data = $(this).data(), $target, result;
            if (data.method) {
                data = $.extend({}, data); // Clone a new one
                if (typeof data.target !== 'undefined') {
                    $target = $(data.target);
                    if (typeof data.option === 'undefined') {
                        try {
                            data.option = JSON.parse($target.val());
                        }
                        catch (e) {
                            console.log(e.message);
                        }
                    }
                }
                result = $image.cropper(data.method, data.option);
                if (data.method === 'getCroppedCanvas') {
                    if (PartnerCrop.saveChangesActionFn) {
                        try {
                            PartnerCrop.saveChangesActionFn(result);
                        }
                        catch (ex) {
                            $('#modal-loader').closeModal();
                            alert(ex.message);
                            console.log(ex);
                        }
                    }
                }
            }
        }).on('keydown', function (e) {
            switch (e.which) {
                case 37:
                    e.preventDefault();
                    $image.cropper('move', -1, 0);
                    break;
                case 38:
                    e.preventDefault();
                    $image.cropper('move', 0, -1);
                    break;
                case 39:
                    e.preventDefault();
                    $image.cropper('move', 1, 0);
                    break;
                case 40:
                    e.preventDefault();
                    $image.cropper('move', 0, 1);
                    break;
            }
        });
    };
    PartnerCrop.prototype.saveChangesAction = function (fn) {
        PartnerCrop.saveChangesActionFn = fn;
    };
    PartnerCrop.prototype.takePictureAction = function (parameters) {
        var _this = this;
        this.takePictureBtn.onclick = function () {
            _this.getPicture(parameters);
        };
    };
    PartnerCrop.prototype.importPictureAction = function (parameters) {
        var _this = this;
        this.importPictureBtn.onclick = function () {
            _this.getPicture(parameters);
        };
    };
    PartnerCrop.prototype.getPicture = function (parameters) {
        try {
            $('#modal-loader').openModal();
            PartnerCrop.disabled(true);
            navigator.camera.getPicture(this.onSuccess, this.onError, parameters);
        }
        catch (ex) {
            $('#modal-loader').closeModal();
            PartnerCrop.disabled(false);
            alert(ex.message);
            console.log(ex);
        }
    };
    PartnerCrop.prototype.onSuccess = function (dataURI) {

        PartnerCrop.refresh(dataURI);
    };
    PartnerCrop.prototype.onError = function (message) {
        alert('failed because: ' + message);
        $('#modal-loader').closeModal();
        PartnerCrop.disabled(false);
    };
    PartnerCrop.refresh = function (dataURI) {
        try {
            var $image = $('.img-container > img');
            $image.one('built.cropper', function () {
                $('#modal-loader').closeModal();
                PartnerCrop.disabled(false);
            }).cropper('reset', true).cropper('replace', dataURI);
        }
        catch (ex) {
            PartnerCrop.disabled(false);
            alert(ex.message);
            console.log(ex);
        }
    };
    PartnerCrop.disabled = function (value) {
        document.getElementById('zoom-plus-pc-btn').disabled = value;
        document.getElementById('zoom-minus-pc-btn').disabled = value;
        document.getElementById('rotate-pc-btn').disabled = value;
        document.getElementById('save-changes-pc-btn').disabled = value;
        document.getElementById('import-picture-pc-btn').disabled = value;
        document.getElementById('take-picture-pc-btn').disabled = value;
    };
    return PartnerCrop;
})();
