(function () {
  window.onload = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    const drops = [];
    const audio = new Audio("../assets/audios/ambiance.mp3");

    function init() {
      playAudio();
      playAnimation();

      document.querySelectorAll(".social-link").forEach((link) => {
        link.addEventListener("mouseenter", () => {
          const audioSelect = new Audio("../assets/audios/select.mp3");

          audioSelect.volume = 0.25;
          audioSelect.play();
        });
      });
    }

    function playAudio() {
      audio.loop = true;
      audio.volume = 0.5;
      audio.play();
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
