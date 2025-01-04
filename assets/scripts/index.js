(function () {
  window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const drops = [];
    const ambience = document.getElementById("ambience");
    const audioSelect = document.getElementById("select");
    const audioSwitch = document.getElementById("audio-switch");
    let audioCanPlay = audioSwitch.getAttribute("data-can-play") === "true";

    function init() {
      try {
        playAnimation();

        audioSwitch.addEventListener("click", onSoundSwitchToogled);
        document.querySelectorAll(".social-link").forEach((link) => {
          link.addEventListener("mouseenter", onCocialMediaLinkHovered);
        });
      } catch (error) {
        console.error("An error occurred: ", error);
      }
    }

    function onSoundSwitchToogled() {
      audioCanPlay = !audioCanPlay;
      audioSwitch.setAttribute("data-can-play", audioCanPlay);

      if (audioCanPlay) {
        audioSwitch.querySelector("i").classList.remove("iconoir-sound-off");
        audioSwitch.querySelector("i").classList.add("iconoir-sound-high");
        ambience.muted = false;
        audioSelect.muted = false;
        ambience.play();
      } else {
        audioSwitch.querySelector("i").classList.remove("iconoir-sound-high");
        audioSwitch.querySelector("i").classList.add("iconoir-sound-off");
        ambience.muted = true;
        audioSwitch.muted = true;
      }
    }

    function onCocialMediaLinkHovered() {
      if (audioCanPlay) {
        audioSelect.currentTime = 0;
        audioSelect.play();
      }
    }

    function playAnimation() {
      for (let i = 0; i < 100; i++) {
        drops.push(createDrop());
      }

      animate();
    }

    function createDrop() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 1 + 1,
        speed: Math.random() * 1,
      };
    }

    function drawDrops() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = 0.25;

      drops.forEach((drop) => {
        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.stroke();
      });
    }

    function updateDrops() {
      drops.forEach((drop) => {
        drop.y += drop.speed;
        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      });
    }

    function animate() {
      drawDrops();
      updateDrops();
      requestAnimationFrame(animate);
    }

    init();
  };
})();
