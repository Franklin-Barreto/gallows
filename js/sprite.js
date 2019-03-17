var createSprite = function (seletor) {

    var hasNext = function () {
        return current <= last;
    };

    var nextFrame = function () {
        moveFrame(frames[current], frames[++current]);
    };

    var moveFrame = function (from, to) {
        if (hasNext()) $element.removeClass(from).addClass(to);
    };

    let $element = $(seletor);
    let frames = getFrames(9);

    let current = 0;
    $element.addClass(current);
    let last = frames.length - 1;
    return { nextFrame: nextFrame };
};

function getFrames(size) {
    frames = [];
    for (let i = 1; i <= size; i++) {
        frames.push('frame' + i);
    }
    return frames;
}