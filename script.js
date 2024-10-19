 
         document.addEventListener("DOMContentLoaded", function () {
             const backToTopButton = document.getElementById("back-to-top");

             window.onscroll = function () {
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                    backToTopButton.style.display = "block";
                } else {
                    backToTopButton.style.display = "none";
                }
            };

             backToTopButton.onclick = function (event) {
                event.preventDefault(); 
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"  
                });
            };
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 50) {
                $('.navbar').addClass('scrolled');
            } else {
                $('.navbar').removeClass('scrolled');
            }
        });
 