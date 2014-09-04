OneeChan
====

Maximum rice for 4chan X. Originally developed by [seaweedchan](https://github.com/seaweedchan), this fork adds compability with various forks and more custom options.


##[Install](https://nebukazar.github.io/OneeChan/builds/OneeChan.user.js)


#### Install instructions

- Firefox: Requires the Greasemonkey addon. Click the Install link above.

- Chrome: Requires the Tampermonkey extension. Click the Install link above. You can also download a [.crx here](https://nebukazar.github.io/OneeChan/builds/OneeChan.crx) if you're using Chromium or are not using Windows. Drag&drop into the extensions page to install.


#### Compatibility with 4chan X forks and others:
(Updated 2014-06-10)

- [ccd0](https://github.com/ccd0/4chan-x) /// `Compatible` (Recommended)
- [MayhemYDG](https://github.com/MayhemYDG/4chan-x) /// `Compatible`
- [ihavenoface](https://github.com/ihavenoface/4chan-x) /// `Compatible`
- [loadletter](https://github.com/loadletter/4chan-x) /// `Compatible`
- [inline](https://boards.4chan.org/) /// `No`

Make sure you select your fork version in `Compatibility`. Enabling Quick Reply and Persistent QR is recommended for maximum compatibility. I can't promise everything will work with every fork.


#### Troubleshooting

- If you have any problems, try first resetting your 4chan X and OneeChan settings and restarting your browser

- Check if it's not a 4chan X issue first, OneeChan mostly deals with stylesheets not site functionality

- Something doesn't work let me know in the [Issues](https://github.com/Nebukazar/OneeChan/issues) page

- Please refer to the [Wiki](https://github.com/Nebukazar/OneeChan/wiki).


#### Known Issues

- OneeChan's settings icon sometimes doesn't render on Chrome
- Post menu breaks with fit replies enabled in MayhemYDG forks


#### Development & Contribution

[![devDependency Status](https://david-dm.org/Nebukazar/OneeChan/dev-status.svg)](https://david-dm.org/Nebukazar/OneeChan#info=devDependencies)

#### Get started

- Install [node.js](http://nodejs.org/).
- Install [Grunt's CLI](http://gruntjs.com/) with `npm install -g grunt-cli`.
- Clone OneeChan.
- `cd` into it.
- Install/Update OneeChan dependencies with `npm install`.

#### Build

- Build with `grunt`.

#### Release

- Update the version with `grunt patch`, `grunt minor` or `grunt major`.
- Release with `grunt release`.

Note: this is only used to release new OneeChan versions, and is **not** needed or wanted in pull requests.

#### Contribute

- Edit the sources.
- Open a pull request  to merge branch.


##### See also:

- [Windows 7 Ricing Reference](http://nanami-tan.info/)
- [Ruri Gokou Homepage](https://github.com/gokoururi/homepage)
