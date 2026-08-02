$(document).ready(function() {

    $("#toggle-info-btn").click(function() {
        $("main .contact-info").slideToggle("slow");
    });

    $(".contact-form").mouseenter(function() {
        $("main .contact-info").fadeTo("fast", 0.5); 
    });

    $(".contact-form").mouseleave(function() {
        $("main .contact-info").fadeTo("fast", 1.0);
    });

});