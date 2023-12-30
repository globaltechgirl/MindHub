document.querySelector(".menu-button").addEventListener("click", menu);
        function menu () {
            let userName = prompt("Hi there! What's your name?");
            if (userName.length > 0) {
                alert(
                    "Hello, " + userName + "! Welcome to 🧠Mind Hub."
                );
            } else {
                alert("Please enter your name to continue.");
            }
        };

        document.querySelector(".schedule-btn").addEventListener("click", schedule)
        function schedule () {
            let userInput = prompt("Can you share the challenges you're facing with your mental health?");
            userInput = userInput.toLowerCase();

            if (userInput === 'depression' || userInput === 'anxiety disorder' || userInput === 'bipolar disorder' || userInput === 'obsessive compulsive disorder' || userInput === 'Schizophrenia' || userInput === 'eating disorder') {
                alert(
                    "We acknowledge that you may be experiencing symptoms of " + userInput + ". We encourage you to schedule an appointment with one of our medical experts."
                );
            } else {
                alert("For more information and support, please check out Mind Hub.");
            }
        };

        var navbar = document.getElementById("navbar");
        var menu = document.getElementById("menu");

        window.onscroll = function() {
            if (window.pageYOffset >= menu.offsetTop) {
                navbar.classList.add("sticky");
                navbar.classList.remove("remove");
            } else {
                navbar.classList.remove("sticky");
            }
        };

        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 4,
            loop: true,
            loopedSlides: 4,
            spaceBetween: 15,
            centeredSlides: true,
            grabCursor: true,
            fadeEffect: {
            crossFade: true
            },
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        var typed = new Typed(".auto-input", {
            strings: [" ", "a Frontend Developer", "a Software Engineer", "Ofili Onyinye"],
            typeSpeed: 50,
            backSpeed: 150,
            startDelay: 500,
            loop: true
        });