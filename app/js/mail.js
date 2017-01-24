$(document).ready(function () {

    //E-mail Ajax Send
    $(".lv-order-form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $('.modal, .modal-backdrop').fadeOut();
            $(".answer_form").fadeIn();
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
                $(".answer_form").fadeOut();
            }, 2000);
        });
        return false;
    });

});
