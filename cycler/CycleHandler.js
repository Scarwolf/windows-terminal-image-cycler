let configHandler = require('./../config/ConfigHandler');

let config = configHandler.getConfig();
let terminalConfig = configHandler.getTerminalConfig();

let imagePaths = config.IMAGE_PATHS;
let interval = config.INTERVAL;

let startCycling = function () {
    console.log("[Cycler] Cycling started.");
    console.log(`[Cycler] Images will change according to your interval of ${interval}.`);

    setInterval(() => {
        changeImage();
    }, interval);
}

let changeImage = function () {
    let nextImage = getNextImage(terminalConfig.profiles.defaults.backgroundImage);
    terminalConfig.profiles.defaults.backgroundImage = nextImage;
    configHandler.updateTerminalConfig(JSON.stringify(terminalConfig));
    console.log(`[Cycler] Changed image to ${nextImage}`);
}

let getNextImage = function (image) {
    let nextImagePos = getNextImagePosition(image);
    return imagesInCycle()[nextImagePos];
}

let imagesInCycle = function () {
    return Object.values(imagePaths);
}

let getImagePosition = function (image) {
    return imagesInCycle().indexOf(image);
}

let getNextImagePosition = function (image) {
    let index = getImagePosition(image);
    let isLast = (index + 1) === imagesInCycle().length;
    return (isLast || index === -1) ? 0 : index + 1;
}

module.exports = {
    startCycling
}