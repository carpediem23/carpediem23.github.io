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
        resizeCanvas();
        playAnimation();
        typewriterAnimation();

        audioSwitch.addEventListener("click", onSoundSwitchToogled);
        window.addEventListener("resize", resizeCanvas);
        document.querySelectorAll(".social-link").forEach((link) => {
          link.addEventListener("mouseenter", onCocialMediaLinkHovered);
        });
      } catch (error) {
        console.error("An error occurred: ", error);
      }
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function typewriterAnimation() {
      const element = document.getElementById("typewriter");
      element.style.visibility = "visible";
      const text = element.innerHTML;
      element.innerHTML = "";
      let index = 0;
      const interval = 2000 / text.length;

      function type() {
        if (index < text.length) {
          element.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, interval);
        }
      }

      type();
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
      for (let i = 0; i < 150; i++) {
        drops.push(createDrop());
      }

      animate();
    }

    function createDrop() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 1,
        speed: Math.random() * 2,
      };
    }

    function drawDrops() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0, 255, 0, 0.25)";
      ctx.font = "12px monospace";

      drops.forEach((drop) => {
        const text = String.fromCharCode(0x30a0 + Math.random() * 96);
        ctx.fillText(text, drop.x, drop.y);
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
