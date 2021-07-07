$(function () { 

    $(".section1").on("click", function (e) {
        e.preventDefault();
        const href = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(href).offset().top }, 1000);
      });

})

    