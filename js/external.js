$(document).ready(function() {
    var modalButtons = document.querySelectorAll(".modal-button");
    var modals = document.querySelectorAll(".modal");
    var closeButtons = document.getElementsByClassName("close");

    for (var i = 0; i < modalButtons.length; i++) {
        modalButtons[i].onclick = function() {
            var modalId = this.getAttribute("href"); // Get the value of href attribute
            var modal = document.querySelector(modalId);
            modal.style.display = "block";
        };
    }

    for (var j = 0; j < closeButtons.length; j++) {
        closeButtons[j].onclick = function() {
            for (var k = 0; k < modals.length; k++) {
                if (modals[k].style !== undefined) {
                    modals[k].style.display = "none";
                }
            }
        };
    }

    window.onclick = function(event) {
        if (event.target.classList.contains("modal")) {
            for (var k = 0; k < modals.length; k++) {
                if (modals[k].style !== undefined) {
                    modals[k].style.display = "none";
                }
            }
        }
    };

    $("#toggle").click(function() {
        $(this).toggleClass("active");
        $("#overlay").toggleClass("open");
    });

    $(".menu ul li a").click(function() {
        $("#toggle").removeClass("active");
        $("#overlay").removeClass("open");
    });

    $('.menu ul li a[href^="#"]').on("click", function(e) {
        e.preventDefault();
        var hash = this.hash;
        var target = $(hash);
        $("html, body").stop().animate({
            scrollTop: target.offset().top - 85
        }, 1000, "swing", function() {});
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $("#dynamic").addClass("newClass");
        } else {
            $("#dynamic").removeClass("newClass");
        }
    });
});
