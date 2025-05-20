// 初始化粒子效果
const particlesJS = window.particlesJS;

particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { 
            value: 3, 
            random: { enable: true, min_value: 1, max_value: 5 } 
        },
        move: {
            direction: "none",
            enable: true,
            speed: 2,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" } }
    }
});

// 添加交互效果
document.querySelector('.animation-trigger').addEventListener('click', () => {
    alert('技術細節展開成功！此處可添加更多互動內容');
});
