
document.querySelector('.btn-on').addEventListener('click', function () {
    let randNum = Math.floor(Math.random() * 8) + 1;
    document.querySelector('.bulb-img').src = `/img/bulb-on-${randNum}.png`;
})

document.querySelector('.btn-off').addEventListener('click', function () {
    document.querySelector('.bulb-img').src = "/img/bulb-off.png";
})
