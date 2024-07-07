let sidebarWidth = -380;
$("header.home .side-bar").css({left: sidebarWidth})

$("header.home .side-bar .side-bar-links .side-bar-icon")
    .on("click", function() {
        $("header.home .side-bar")
            .animate({left: 0}, 600)
})
$("header.home .side-bar .side-bar-links .close-icon")
    .on("click", function() {
        $("header.home .side-bar")
            .animate({left: sidebarWidth}, 600)
})






$(".singer")
    .on("click", function() {
        $(this).next()
            .slideToggle();
    })



$(".seconds-down").ready(function() {
    let time = 60;
    setInterval(function() {
        time -= 1;
        $(".seconds-down").html(`<p class="m-5 fs-3 fw-medium"><span>${time}</span>s</p>`);
        if(time <= 0) {
            time = 60;
            $(".seconds-down").html(`<p class="m-5 fs-3 fw-medium"><span>${time}</span>s</p>`);
        }
    }, 1000);
});
$(".minute-down").ready(function() {
    let time = 60;
    setInterval(function() {
        time -= 1;
        $(".minute-down").html(`<p class="m-5 fs-3 fw-medium"><span>${time}</span>m</p>`);
        if(time <= 0) {
            time = 60;
            $(".minute-down").html(`<p class="m-5 fs-3 fw-medium"><span>${time}</span>m</p>`);
        }
    }, 1000*60);
});
$(".hour-down").ready(function() {
    let time = 24;
    setInterval(function() {
        time -= 1;
        $(".hour-down").html(`<p class="m-5 fs-3 fw-medium"><span>${time}</span>h</p>`);
        if(time <= 0) {
            time = 24;
            $(".hour-down").html(`<p class="m-5 fs-3 fw-medium"><span>${time}</span>h</p>`);
        }
    }, 1000*60*60);
});
$(".day-down").ready(function() {
    let time = 1001;
    setInterval(function() {
        time -= 1;
        $(".day-down").html(`<p class="m-5 fs-3 fw-medium">-<span>${time}</span>D`);
        if(time <= 0) {
            time = 1001;
            $(".day-down").html(`<p class="m-5 fs-3 fw-medium">-<span>${time}</span>D`);
        }
    }, 1000*60*60*24);
});


let countDown = 100;

$("textarea")
    .on("keydown", function() {
        let textareaLength = $("textarea").val().length;
        let lastNumber = countDown - textareaLength;    
        if (lastNumber > 0)
        {
            $(".count-down-result").html(`<span class="text-danger">${lastNumber}</span> Character Reamining`)
        } else
        {
            $(".count-down-result").text(`your available character finished`)
        }
    })

