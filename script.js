/* =========================================================
   GAJANAN MAHARAJ JYOTISH KARYALAY
   WEBSITE JAVASCRIPT
========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle =
    document.getElementById("menuToggle");

const mainNav =
    document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener(
        "click",
        () => {

            mainNav.classList.toggle("show");

        }
    );

}


/* ================= CLOSE MOBILE MENU ================= */

document.querySelectorAll(
    "#mainNav a"
).forEach(link => {

    link.addEventListener(
        "click",
        () => {

            if (mainNav) {

                mainNav.classList.remove("show");

            }

        }
    );

});


/* ================= FAQ ================= */

document.querySelectorAll(
    ".faq-question"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const item =
                button.parentElement;

            item.classList.toggle("open");

        }
    );

});


/* ================= FOOTER YEAR ================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ================= LANGUAGE ================= */

function changeLanguage(language) {

    localStorage.setItem(
        "gmk_language",
        language
    );

    if (language === "mr") {

        alert(
            "मराठी आवृत्ती लवकरच उपलब्ध केली जाईल."
        );

    }

    else if (language === "hi") {

        alert(
            "हिंदी संस्करण जल्द उपलब्ध किया जाएगा."
        );

    }

    else {

        window.location.reload();

    }

}


/* ================= SCROLL ANIMATION ================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


document.querySelectorAll(
    ".feature-card, .service-card"
).forEach(
    element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(25px)";

        element.style.transition =
            "opacity 0.7s ease, transform 0.7s ease";

        observer.observe(element);

    }
);
