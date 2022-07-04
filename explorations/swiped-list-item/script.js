function handleStart(event) {
    event.target.dataset.x = Number(event.touches[0].pageX) + Number(event.target.dataset.move || 0)
};

function handleEnd(event) {
    if (event.target.dataset.move > 100) {
        event.target.dataset.move = 100;
    } else if (event.target.dataset.move < -100) {
        event.target.dataset.move = -100;
    } else {
        event.target.dataset.move = 0;
    }
    const swipes = document.querySelectorAll('.swipe') || [];
    swipes.forEach((item) => {
        if (item.querySelector('.con-text') === event.target) {
            return
        }
        item.querySelector('.con-text').dataset.move = 0;
        item.querySelector('.con-text').dataset.x = 0;
        anime({
            targets: item.querySelector('.con-text'),
            translateX: 0
        });
    });
    setTimeout(() => {
        anime({
            targets: event.target,
            translateX: -Number(event.target.dataset.move)
        });
    }, 1);
};

function handleTouchMove(event) {
    let moveX = Number(event.target.dataset.x) - event.touches[0].pageX;
    if (moveX > 130) {
        moveX = 130;
    }
    if (moveX < -130) {
        moveX = -130;
    }
    event.target.dataset.move = moveX;
    anime({
        targets: event.target,
        translateX: -Number(event.target.dataset.move),
        duration: 300
    });
};