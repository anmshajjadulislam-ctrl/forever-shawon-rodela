/* ==========================================
   FOREVER SHAWON & RODELA
   COMPLETE JAVASCRIPT
========================================== */


// ==========================================
// 1. SMOOTH SCROLLING
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ==========================================
// 2. SCROLL REVEAL ANIMATION
// ==========================================

const revealElements = document.querySelectorAll(
    ".intro, .memories, .memory-card, .letter, .letter-box, .distance-section, .surprise-section"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.10
    });

    revealElements.forEach(function(element) {

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(function(element) {

        element.classList.add("visible");

    });

}


// ==========================================
// 3. FLOATING HEART ANIMATION
// ==========================================

function createFloatingHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    const heartSymbols = ["❤️", "💕", "💗", "💖", "💜"];

    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (12 + Math.random() * 15) + "px";

    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(function() {

        heart.remove();

    }, 12000);

}


// Create hearts periodically

setInterval(function() {

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

        createFloatingHeart();

    }

}, 1400);


// ==========================================
// 4. PHOTO VIEWER
// ==========================================

function openPhoto(photo) {

    const viewer = document.getElementById("photoViewer");

    const expandedPhoto = document.getElementById("expandedPhoto");

    if (!viewer || !expandedPhoto) return;

    expandedPhoto.src = photo.src;

    viewer.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closePhoto() {

    const viewer = document.getElementById("photoViewer");

    if (!viewer) return;

    viewer.classList.remove("active");

    document.body.style.overflow = "auto";

}


// ==========================================
// 5. LOVE SURPRISE POPUP
// ==========================================

function openLoveSurprise() {

    const popup = document.getElementById("loveSurprisePopup");

    if (!popup) return;

    popup.classList.add("active");

    document.body.style.overflow = "hidden";

    createSurpriseHearts();

}


function closeLoveSurprise() {

    const popup = document.getElementById("loveSurprisePopup");

    if (!popup) return;

    popup.classList.remove("active");

    document.body.style.overflow = "auto";

}


// ==========================================
// 6. SURPRISE HEART EFFECT
// ==========================================

function createSurpriseHearts() {

    const symbols = ["❤️", "💕", "💗", "💖", "✨"];

    for (let i = 0; i < 22; i++) {

        const heart = document.createElement("div");

        heart.className = "surprise-particle";

        heart.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.animationDelay = Math.random() * 2 + "s";

        heart.style.fontSize = (15 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        setTimeout(function() {

            heart.remove();

        }, 6000);

    }

}


// ==========================================
// 7. CLOSE POPUPS BY CLICKING OUTSIDE
// ==========================================

const surprisePopup = document.getElementById("loveSurprisePopup");

if (surprisePopup) {

    surprisePopup.addEventListener("click", function(event) {

        if (event.target === surprisePopup) {

            closeLoveSurprise();

        }

    });

}


const photoViewer = document.getElementById("photoViewer");

if (photoViewer) {

    photoViewer.addEventListener("click", function(event) {

        if (event.target === photoViewer) {

            closePhoto();

        }

    });

}


// ==========================================
// 8. ESCAPE KEY
// ==========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePhoto();

        closeLoveSurprise();

    }

});


// ==========================================
// 9. COPYRIGHT YEAR
// ==========================================

const copyrightYear = document.getElementById("copyrightYear");

if (copyrightYear) {

    copyrightYear.textContent = new Date().getFullYear();

}


// ==========================================
// 10. WEBSITE READY
// ==========================================

console.log("Forever Shawon & Rodela Website Loaded ❤️");

console.log("Love Surprise Animation Ready 💌");