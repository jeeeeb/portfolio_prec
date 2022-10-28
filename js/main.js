$(function () {
    let winHeight = $(window).height();

    $(window).on('resize', function () {
        winHeight = $(window).height();
    });

    $('#wrap>section').on('mousewheel', function (e, d) {
        if (d > 0) { // 스크롤을 올렸을 때
            let prv = $(this).prev().offset().top;
            $('html,body').stop().animate({
                scrollTop: prv
            });
        } else if (d < 0) { //스크롤을 내렸을 때
            let nxt = $(this).next().offset().top;
            $('html,body').stop().animate({
                scrollTop: nxt
            });
        }
    });

    $('.work_in .tab li').on('click', function (e) {
        e.preventDefault();
        let i = $(this).index();
        $('.work_in .cont>div').eq(i).css({ display: 'flex' }).siblings().hide();
        $(this).addClass('on').siblings().removeClass('on');
    });


    let title = $('#title').offset().top;
    let intro = $('#intro').offset().top;
    let work = $('#work').offset().top;
    let contact = $('#contact').offset().top;
    $(window).on('scroll', function () {
        let scr = $(this).scrollTop();
        if (scr <= title) {
            $('#menu_toggle').find('span').css({ backgroundColor: '#fff' });
            $('#menu').css({ color: '#fff' });
        } else if (scr > title && scr <= intro) {
            $('#menu_toggle').find('span').css({ backgroundColor: '#000' });
            $('#menu').css({ color: '#000' });
        } else if (scr > intro && scr <= work) {
            $('#menu_toggle').find('span').css({ backgroundColor: '#fff' });
            $('#menu').css({ color: '#fff' });
        } else if (work > intro && scr <= contact) {
            $('#menu_toggle').find('span').css({ backgroundColor: '#000' });
            $('#menu').css({ color: '#000' });
        }
    });

    $('#menu_toggle').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('#menu').toggleClass('show');
    })
    $('#menu>li>a').click(function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').stop().animate({
            scrollTop: $(target).offset().top
        });
    });

})