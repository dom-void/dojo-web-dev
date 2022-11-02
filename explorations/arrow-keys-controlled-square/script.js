const div = document.querySelector('div');

const step = 50;

const slideRight = () => {
    div.style.left = (Number(div.style.left.replace('px', ''))) + step + 'px';
}

const slideLeft = () => {
    div.style.left = (Number(div.style.left.replace('px', ''))) - step + 'px';
}

const slideUp = () => {
    div.style.top = (Number(div.style.top.replace('px', ''))) - step + 'px';
}

const slideDown = () => {
    div.style.top = (Number(div.style.top.replace('px', ''))) + step + 'px';
}

document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (Number(div.style.left.replace('px', '')) > 50 && evt.key == 'ArrowLeft') {
        slideLeft();
    }
    if (Number(div.style.top.replace('px', '')) > 50 && evt.key == 'ArrowUp') {
        slideUp();
    }
    if (Number(div.style.left.replace('px', '')) < window.innerWidth - 150 && evt.key == 'ArrowRight') {
        slideRight();
    }
    if (Number(div.style.top.replace('px', '')) < window.innerHeight - 150 && evt.key == 'ArrowDown') {
        slideDown();
    }
};