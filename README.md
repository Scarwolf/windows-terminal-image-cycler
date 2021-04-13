# Windows Terminal Image Cycler

This tool allows you to cycle through a predefined set of images and update your Windows Terminal config file to change the background image.

### How to use
Copy ``config.example.json`` to ``config.json``.

Adapt ``config.json`` according to your needs.
```
{
    "TERMINAL_CONFIG_FILE_PATH": "C:\\Users\\PoTTii\\AppData\\Local\\Packages\\Microsoft.WindowsTerminal_8wekyb3d8bbwe\\LocalState\\settings.json",
    "IMAGE_PATHS": [
        "C:/Users/PoTTii/Pictures/Terminal/deer.jpg",
        "C:/Users/PoTTii/Pictures/Terminal/synthwave-8k-qt-1920x1080.jpg",
        "C:/Users/PoTTii/Pictures/Terminal/astronaut-jellyfish-space-digital-art-uhdpaper.com-hd-1071.jpg"
    ],
    "INTERVAL": 20000
}
```

* ``TERMINAL_CONFIG_FILE_PATH`` The path to your Windows Terminal config file
* ``IMAGE_PATHS`` An Array of paths to images that should be cycled through
* ``INTERVAL`` The interval in milliseconds

Start using ``node app.js``.