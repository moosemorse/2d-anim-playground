document.querySelectorAll(".block").forEach(container => {
    for (let i = 1; i <= 6; i++) {
        const img = document.createElement("img");
        img.src = `data/art${i}.png`;
        img.className = "layer";
        img.style.setProperty("--i", i);
        container.appendChild(img);
    }
});