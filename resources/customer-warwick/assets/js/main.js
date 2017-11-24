$(function () {
    var win = $(window),
        doc = $(document),
        body = $('body'),
        $self = $(this);

    $('header .icon-menu').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('nav-open');
    });

    $('.nav .close-icon').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('nav-open');
    });

    $('.nav nav .toggle').on('click', function (e) {
        e.preventDefault();
        $(this).closest('li').toggleClass('open');
    });

    // File upload
    $('.file-upload').change(function () {
        var filepath = this.value;
        var m = filepath.match(/([^\/\\]+)$/);
        var filename = m[1];
        $(this).parent('label').siblings('span').html(filename);
    });

    new Chartist.Pie('.expenditure-chart', {
        series: [25, 25, 13, 12, 12, 13]
    }, {
        donut: true,
        donutWidth: 30,
        showLabel: false,
        donutSolid: true
    });

    new Chartist.Pie('.budget-year-chart', {
        series: [75, 25]
    }, {
        donut: true,
        donutWidth: 30,
        showLabel: false,
        donutSolid: true
    });

    //toggle ticket activity ticket.html
    $('.toggle-activity').on('click', function () {

        $(this).toggleClass('open');

        $('#ticket-activity').slideToggle();

        // used on tickets/ticket as the timeline results was always hidden.
        if ($('.ticket-updates').length) {
       $('.ticket-updates').toggle();
        }

    });

    //toggle record activity
    $('.toggle-record-activity').on('click', function () {

        $(this).toggleClass('open');

        $('.ticket-updates').slideToggle();
    });

    //toggle ticket details
    $('.toggle-details').on('click', function () {

        $(this).toggleClass('open');

        $('#ticket-details').slideToggle();

    });

    //toggle ticket documents
    $('.toggle-documents').on('click', function () {

        $(this).toggleClass('open');

        $('#ticket-documents').slideToggle();

    });

    //toggle voting project.html
    $('.toggle-voting').on('click', function () {

        $(this).toggleClass('open');

        $('#toggle-voting').slideToggle();

    });

    // toggle record activity
    $('.toggle-records').on('click', function () {
        $(this).toggleClass('open');
        $('.record-action-items').slideToggle();
    });

    // budget-actual > budget_card
    $('.budget-maintenance').on('click', function () {


        $(this).toggleClass('open');

        $(this).closest('.budget-card').find('.repair-costs').slideToggle();

    })


    // Modal instance
    $('.show-modal').on('click', function () {

        // get modal and show
        $('#main-modal').show();
    });

    $('.modal-content .close').on('click', function () {
        $('#main-modal').hide();
    });

    // check global scope for modal

    let modal = document.getElementById('main-modal');
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
