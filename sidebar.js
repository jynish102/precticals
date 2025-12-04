const body = document.querySelector("body");
const sidebar = document.querySelector(".sidebar");
const toggle = document.querySelector(".toggle");
const modeSwitch = document.querySelector(".toggle-switch");
const modeText = document.querySelector(".mode-text");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

/* DARK MODE */
modeSwitch.addEventListener("click", (e) => {
    e.stopPropagation();
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
});


function openStoryUpload() {
    document.getElementById("storyInput").click();
}

document.getElementById("storyInput").addEventListener("change", function (event) {
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("storyPreview").innerHTML =
                `<img src="${e.target.result}" class="logo-avatar">`;
        };

        reader.readAsDataURL(file);
    }
});



document.querySelectorAll(".reelBox").forEach(reelBox => {

    const type = reelBox.dataset.type;
    const video = reelBox.querySelector(".reelVideo");
    const soundBtn = reelBox.querySelector(".soundBtn");
    const tapIndicator = reelBox.querySelector(".tap-indicator");

    /* ✅ PHOTO POST → REMOVE VIDEO FEATURES */
    if (type === "photo") {
        if (soundBtn) soundBtn.style.display = "none";
        if (tapIndicator) tapIndicator.style.display = "none";
        return;
    }

    /* ✅ SOUND TOGGLE */
    soundBtn.addEventListener("click", () => {
        video.muted = !video.muted;
        soundBtn.innerHTML = video.muted
            ? `<i class="bx bx-volume-mute"></i>`
            : `<i class="bx bx-volume-full"></i>`;
    });

    /* ✅ DOUBLE TAP TO PAUSE (NOT LIKE) */
    let lastTap = 0;
    video.addEventListener("click", () => {
        const now = new Date().getTime();
        if (now - lastTap < 300) {
            video.pause();
            tapIndicator.classList.add("show");

            setTimeout(() => {
                tapIndicator.classList.remove("show");
            }, 800);
        }
        lastTap = now;
    });

});









