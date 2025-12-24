
// -----------------------------
// 🎵 Musique de Noël automatique
// -----------------------------
window.addEventListener('load', () => {
    const audio = document.createElement('audio');
    audio.src = 'musique_noel.mp3'; // Mets ton fichier MP3 ici
    audio.loop = true;
    audio.autoplay = true;
    audio.volume = 0.2; // volume doux
    document.body.appendChild(audio);
});

// -----------------------------
// ❄️ Neige animée
// -----------------------------
function createSnow() {
    const snowContainer = document.createElement('div');
    snowContainer.classList.add('snow-container');
    document.body.appendChild(snowContainer);

    for (let i = 0; i < 50; i++) {
        const flake = document.createElement('div');
        flake.classList.add('snowflake');
        flake.style.left = Math.random() * window.innerWidth + 'px';
        flake.style.animationDuration = 3 + Math.random() * 3 + 's';
        flake.style.opacity = Math.random();
        flake.style.fontSize = (10 + Math.random() * 20) + 'px';
        flake.innerText = '❄️';
        snowContainer.appendChild(flake);
    }
}
createSnow();

// -----------------------------
// ✨ Effets spéciaux selon le membre
// -----------------------------
const currentURL = window.location.href;

if(currentURL.includes('anaya.html')) {
    // 🎶 K-POP : fond rose/bleu + titre qui clignote
    document.body.style.background = 'linear-gradient(to bottom, #ffc0cb, #add8e6)';
    const title = document.querySelector('h1');
    if(title) {
        setInterval(() => {
            title.style.color = title.style.color === 'pink' ? 'blue' : 'pink';
        }, 500);
    }
}

if(currentURL.includes('papa')) {
    // ⚽ Football : fond vert + ballons qui tombent
    document.body.style.background = 'linear-gradient(to bottom, #a8e6a1, #70c070)';
    for(let i = 0; i < 20; i++){
        const ball = document.createElement('div');
        ball.innerText = '⚽';
        ball.style.position = 'absolute';
        ball.style.left = Math.random()*window.innerWidth+'px';
        ball.style.top = Math.random()*-500+'px';
        ball.style.fontSize = '30px';
        ball.style.animation = 'fall 5s linear infinite';
        document.body.appendChild(ball);
    }
}

if(currentURL.includes('maman')) {
    // 💖 Cœurs pastel pour Maman
    document.body.style.background = 'linear-gradient(to bottom, #fff0f5, #e6f7ff)';
    for(let i=0;i<30;i++){
        const heart = document.createElement('div');
        heart.innerText = '💝';
        heart.style.position = 'absolute';
        heart.style.left = Math.random()*window.innerWidth+'px';
        heart.style.top = Math.random()*-500+'px';
        heart.style.fontSize = '20px';
        heart.style.animation = 'fall 6s linear infinite';
        document.body.appendChild(heart);
    }
}

if(currentURL.includes('mattheo.html')) {
    // 🌟 Étoiles scintillantes pour Mattheo
    document.body.style.background = 'linear-gradient(to bottom, #dcefff, #bcdcff)';
    for(let i=0;i<40;i++){
        const star = document.createElement('div');
        star.innerText = '⭐';
        star.style.position = 'absolute';
        star.style.left = Math.random()*window.innerWidth+'px';
        star.style.top = Math.random()*-500+'px';
        star.style.fontSize = '15px';
        star.style.animation = 'fall 4s linear infinite';
        document.body.appendChild(star);
    }
}

// -----------------------------
// ❄️ Animations chute (pour neige et effets)
const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
    0% {transform: translateY(0);}
    100% {transform: translateY(100vh);}
}
.snow-container { position: fixed; top:0; left:0; width:100%; height:100%; pointer-events:none; }
.snowflake { position: absolute; top:0; }
`;
document.head.appendChild(style);

