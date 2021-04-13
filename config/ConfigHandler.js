let fs = require("fs");
let path = require("path");

let readJsonFile = function (filePath) {
    if(!fs.existsSync(path.resolve(filePath))) {
        console.log(`File ${filePath} does not exist.`);
        process.exit(1);
    }

    let config = path.resolve(filePath);

    let jsonData = "";
    try {
        jsonData = String(fs.readFileSync(config));
    } catch (e) {
        console.log(`Cannot read file ${filePath}: ${e}`);
        process.exit(1);
    }

    if(isValidJson(jsonData))
        return JSON.parse(jsonData);

    console.log(`File ${filePath} contains invalid JSON. Stopping...`);
    process.exit(1);
}

let getConfig = function () {
    return readJsonFile('config.json');
}

let getTerminalConfig = function () {
    let conf = getConfig();
    return readJsonFile(conf.TERMINAL_CONFIG_FILE_PATH);
}

let updateTerminalConfig = function (content) {
    if(!isValidJson(content)) {
        console.log("Attempted to save invalid JSON to the Terminal config file. Stopping...");
        process.exit(1);
    }

    try {
        fs.writeFileSync(getConfig().TERMINAL_CONFIG_FILE_PATH, content);
    } catch (e) {
        console.log(`Could not write to the Terminal config file: ${e}`);
        process.exit(1);
    }
}

let isValidJson = function(obj){
    try {
        JSON.parse(obj);
    }
    catch (e){
        console.log(e);
        return false;
    }
    return true;
};

module.exports = {
    getConfig, getTerminalConfig, updateTerminalConfig
}
