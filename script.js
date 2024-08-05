const starContainer = document.getElementById('stars');
const starCount = 50;

for (let i = 0; i < starCount; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    
    let size = Math.random() * 3 + 1 + 'px';
    let positionTop = Math.random() * 100 + 'vh';
    let positionLeft = Math.random() * 100 + 'vw';
    let animationDuration = Math.random() * 5 + 5 + 's';
    let animationDelay = Math.random() * 5 + 's';
    
    star.style.width = size;
    star.style.height = size;
    star.style.top = positionTop;
    star.style.left = positionLeft;
    star.style.animationDuration = animationDuration;
    star.style.animationDelay = animationDelay;
    
    starContainer.appendChild(star);
}
