$(function () {
    var $menu = $('#menu'),
        $utilWrap = $('#util_wrap'),
        $footerPopup = $('#footer_popup');

    $menu.kendoMenu({
        openOnClick: {
            subMenuItems: true,
        },
        animation: {
            open: {
                effects: 'fadeIn',
            },
        },
        hoverDelay: 0,
    });

    $utilWrap.kendoMenu({
        openOnClick: {
            subMenuItems: true,
        },
        animation: {
            open: {
                effects: 'fadeIn',
            },
        },
        hoverDelay: 0,
    });

    tmripple.init({
        //color: '#bada55', // default is 'rgba(255, 255, 255, 0.4)'
        //eventListener: 'click', // default is 'click'
    });

    function companyPopup() {
        var url = 'http://www.ftc.go.kr/bizCommPop.do?wrkr_no=1058602802&apv_perm_no=',
            opt = 'width=900, height=800';
        window.open(url, '', opt);
    }

    $footerPopup.on('click', companyPopup);

    // 모달

    var $btnCancleModal = $('.modal_cancle'),
        $btnCloseModal = $('.btn_q_close'),
        $btnCancleModal2 = $('.btn_modal_cancle'),
        $btnCloseModal2 = $('.btn_modal_close');

    $btnCancleModal.on('click', closeModal);
    $btnCloseModal.on('click', closeModal);
    $btnCancleModal2.on('click', closeModal);
    $btnCloseModal2.on('click', closeModal);

    function closeModal() {
        $.modal.close();
        // $('#form_modal_q').data('validator').resetForm();
        // $('#form_modal_buy1').data('validator').resetForm();
        return false;
    }

    $('a[data-modal]').click(function (e) {
        var $this = $(this);

        $this.modal({
            showClose: false,
            clickClose: false,
        });

        return false;
    });

    $('#form_modal_q').validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
        },
    });

    $('#form_modal_c').validate({
        rules: {
            email: {
                required: true,
                email: true,
            },
        },
    });

    $('#form_modal_buy1').on('submit', function () {
        return false;
    });

    $('#form_modal_buy1').validate({
        submitHandler: function (form) {
            // console.log('됏나?', form);
            $('#btn_form_buy01').trigger('click');
        },
    });

    $.extend($.validator.messages, {
        required: '필수 항목입니다.',
        email: '유효하지 않은 E-Mail주소입니다.',
    });
    // 모달 끝
});
