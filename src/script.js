(function() {
    var defaultConfig = {
        ":: Main Rice": ["header", ""],
        "Left Margin": [
            5, "Change the size of the left margin.", [{
                name: "Large",
                value: 65
            }, {
                name: "Medium",
                value: 25
            }, {
                name: "Small",
                value: 5
            }, {
                name: "None",
                value: 0
            }, {
                name: "Custom",
                value: 999
            }], true
        ],
        "Custom Left Margin": [
            0, "Left margin custom width (pixels).", "Left Margin", 999, true
        ],
        "Right Margin": [
            5, "Change the size of the right margin.", [{
                name: "Large",
                value: 65
            }, {
                name: "Medium",
                value: 25
            }, {
                name: "Small",
                value: 5
            }, {
                name: "None",
                value: 0
            }, {
                name: "Custom",
                value: 999
            }], true
        ],
        "Custom Right Margin": [
            0, "Custom width of border or outline of highlighted posts (pixels).", "Right Margin", 999, true
        ],
        "Fixed Thread Watcher": [true, "The thread watcher will not scroll with the page."],
        "Style Thread Stats": [false, "Makes the thread stats stand out more. Disable Updater and Stats in Header if using ccd0."],        
        "Rounded Corners": [false, "Styles replies, menus and the QR to have subtly rounded corners."],
        "Underline All Links": [false, "Underlines all the links."],
        "Show Banner": [true, "Toggle visibility of the banner.", null, true],
        "Reduce Banner Opacity": [false, "Reduce the opacity of the banner for easier viewing.", "Show Banner", true, true],
        "Show Board Name": [true, "Toggle visibility of the board name."],
        "Show Reply to Thread Button": [false, "Toggle visibility of the Start a Thread / Reply to Thread button."],
        "Show Checkboxes": [false, "Hides checkboxes and deleteform to be replaced by 4chan X menus. Refresh to apply."],
        "Show Blotter": [false, "Toggle visibility of the 4chan news blotter."],
        "Show 4chan Ads": [false, "Opts into 4chan\'s banner ads.", null, true],
        "Show Top Ad": [true, "Show the top 4chan banner ad.", "Show 4chan Ads", true, true],
        "Show Middle Ad": [true, "Show the middle 4chan banner ad.", "Show 4chan Ads", true, true],
        "Show Bottom Ad": [true, "Show the bottom 4chan banner ad.", "Show 4chan Ads", true, true],
        "Reduce Ad Opacity": [false, "Reduce the opacity of Ads until hover for easier viewing.", "Show 4chan Ads", true, true],
        "Show Navigation Links": [true, "Toggle visibility of the navigation links at the top and bottom of the threads.", null, true],
        "Show Top Links": [true, "Toggle visibility of the top navigation links.", "Show Navigation Links", true, true],
        "Show Bottom Links": [true, "Toggle visibility of the bottom navigation links.", "Show Navigation Links", true, true],
        "Show Previous/Next buttons": [false, "Shows the Previous / Next buttons in page navigation mode."],
        ":: Header": ["header", ""],
        "Show Header Background Gradient": [true, "Gives the header bar a gradient background."],
        "Show Header Shadow": [true, "Gives the header a drop shadow."],
        "Highlight Current Board": [true, "Gives the current board link a bottom highlight border."],
        ":: Sidebar": ["header", ""],
        "Sidebar Position": [
            1, "Change the position of the sidebar.", [{
                name: "Right",
                value: 1
            }, {
                name: "Left",
                value: 2
            }, {
                name: "Disabled",
                value: 3
            }], true
        ],
        "Disable In Catalog View": [false, "Disables the Sidebar when viewing the catalog. Native catalog only."],
        "SS-like Sidebar": [true, "Darkens the Sidebar and adds a border like 4chan Style Script."],
        "Minimal Sidebar": [false, "Shrinks the sidebar and disables the banner."],
        ":: Mascots": ["header", ""],
        "Hide Mascots in Catalog": [false, "Hides the mascot when viewing the catalog."],
        "Mascots Overlap Posts": [true, "Mascots will render above posts and threads."],
        "Reduce Mascot Opacity": [false, "Reduces the opacity of the mascots until hover. Warning: Overrides pointer events."],
        "Grayscale Mascots": [false, "Desaturates mascots."],
        ":: Replies": ["header", ""],
        "Fit Width": [true, "Replies stretch to the width of the entire page."],
        "Show Reply Header": [true, "Shows replies header background and line border."],
        "Show Post Info On Hover": [false, "Shows post number and file info on hover only."],
        "Show File Info": [true, "Hides the filename, dimensions and size info."],
        "Underline QuoteLinks": [false, "Underlines quotelinks only."],
        "Indent OP": [false, "Indents the OP instead of touching the screen."],
        "Allow Wrapping Around OP": [false, "Allow for replies to wrap around the OP instead of being forced onto their own line."],
        "Recolor Even Replies": [false, "Makes every other post a darker color. Not compatible with Quote Threading."],
        "Reduce Thumbnail Opacity": [false, "Reduces opacity of the thumbnails."],
        "Backlink Icons": [true, "Use icons for backlinks instead of text."],
        "Backlinks on Bottom": [false, "Move backlinks to the bottom right of the replies."],
        "Borders": [
            2, "Changes which sides of replies have borders.", [{
                name: "Normal (4chan default)",
                value: 1
            }, {
                name: "On all sides",
                value: 2
            }, {
                name: "None",
                value: 3
            }]
        ],
        "Margin Between Replies": ['', "Change the size of the spacing in between replies.", [{
            name: "Very Large",
            value: 15
        }, {
            name: "Large",
            value: 8
        }, {
            name: "Normal (4chan default)",
            value: ''
        }, {
            name: "Minimal",
            value: -2
        }, {
            name: "None",
            value: -4
        }, {
            name: "Overlapping Borders",
            value: -5
        }]],
        "Post Message Margin": [
            2, "Change the size of the margin around the post message.", [{
                name: "Small",
                value: 1
            }, {
                name: "Normal",
                value: 2
            }, {
                name: "Large",
                value: 3
            }]
        ],
        ":: Highlighting": ["header", ""],
        "Decoration Style": [
            0, "Changes the highlight decoration of posts.", [{
                name: "None",
                value: 0
            }, {
                name: "Border",
                value: 1
            }, {
                name: "Outline",
                value: 2
            }, {
                name: "Separator",
                value: 3
            }]
        ],
        "Decoration Width": [
            1, "Changes decoration width of highlighted posts.", [{
                name: "Large",
                value: 6
            }, {
                name: "Medium",
                value: 3
            }, {
                name: "Small",
                value: 1
            }, {
                name: "Custom",
                value: 999
            }], true
        ],
        "Custom Decoration Width": [
            0, "Enter a custom width for the decoration (pixels).", "Decoration Width", 999, true
        ],
        "Highlight Style": [
            "solid", "Changes style of post highlight.", [{
                name: "Dashed",
                value: "dashed"
            }, {
                name: "Dotted",
                value: "dotted"
            }, {
                name: "Double",
                value: "double"
            }, {
                name: "Solid",
                value: "solid"
            }]
        ],
        ":: Quick Reply": ["header", ""],
        "Autohide Style": [
            3, "Changes the style of the quick reply hiding. Enable Autohide QR in 4chan X.", [{
                name: "Normal",
                value: 1
            }, {
                name: "Vertical Tabbed",
                value: 2
            }, {
                name: "Fade",
                value: 3
            }]
        ],
        "Transparent QR": [false, "Reduces opacity of the QR box."],
        "Remove Background": [false, "Removes the QR background."],
        "Remove Controls": [false, "Removes the QR controls and checkbox."],
        "Expanding Form Inputs": [false, "Makes certain form elements expand on focus."],
        ":: Fonts": ["header", ""],
        "Font Family": [
            "sans-serif", "Set the default font family.", [{
                name: "Default",
                value: "sans-serif"
            }, {
                name: "Monospace",
                value: "monospace"
            }, {
                name: "Ubuntu",
                value: "Ubuntu"
            }, {
                name: "Consolas",
                value: "Consolas"
            }, {
                name: "Droid Sans",
                value: "Droid Sans"
            }, {
                name: "Segoe UI",
                value: "Segoe UI"
            }, {
                name: "Calibri",
                value: "Calibri"
            }, {
                name: "Arial",
                value: "Arial"
            }, {
                name: "Lucida Grande",
                value: "Lucida Grande"
            }, {
                name: "Helvetica",
                value: "Helvetica"
            }]
        ],
        "Font Size": [13, "Set the general size of text (Pixels). Min: 10px, Max: 18px"],
        "Bitmap Font": [false, "Check this if you are using a bitmap font."],
        ":: Compatibility": ["header", ""],
        "Version Fix": [
            1, "Applies CSS fixes for different forks. Default is for seaweed/ccd0 forks. Make sure you enable QR and Persistent QR for maximum compatibility.", [{
                name: "Default",
                value: 1
            }, {
                name: "ihavenoface",
                value: 2
            }, {
                name: "loadletter",
                value: 3
            }], true
        ],
        "Themes": [],
        "Hidden Themes": [],
        "Selected Theme": 4,
        "NSFW Theme": 4,
        "Selected Mascots": [37,41],
        "Mascots": [],
        "Hidden Mascots": []
    },
        MAX_FONT_SIZE = 18,
        MIN_FONT_SIZE = 10,
        NAME = "OneeChan",
        NAMESPACE = "OneeChan.",
        VERSION = "<%= version %>",
        CHANGELOG = "https://github.com/nebukazar/OneeChan/blob/master/CHANGELOG.md",
        inputImages = "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAgCAYAAAAv8DnQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAP9JREFUOMvV0CFLQ2EYxfHfrtdiURgbmCxOmFPBJgZZ0CQD0Q+goFkwabWIyWIWFgwmy7Qp7DPI3GD7ACZlYLNcy31ljG0aDHrSy3N43nOef6ZULBiifczEQ8wV7OAtGmBO4wgfOI2whsXUnMAJ8rhCJ8IxDpHDHpZwixqM5XPZBBtYxioauEgjRLjBI2bRxTneQ6EYCS4xiTu89DbONJrtP88hwnV64hm28YRqyPsFDkmSGKUYFubnsqignM7rqDWa7dcAqoLdnsXwrgZQ5QG/l8MVIxX1ZPar/lUyUOsv+aMzv+0Qw3OrM4VNrKfzB9yXioVu6LDVx+EA4/+Gwycw/Uz36O07WwAAAABJRU5ErkJggg==",
        fontListSWF = "https://ahodesuka.github.com/FontList.swf",
        themeInputs =
            [{
            dName: "Reply Background",
            name: "mainColor",
            property: "background-color"
        }, {
            dName: "Reply Border",
            name: "brderColor",
            property: "border-color"
        }, {
            dName: "Input Background",
            name: "inputColor",
            property: "background-color"
        }, {
            dName: "Input Border",
            name: "inputbColor",
            property: "border-color"
        }, {
            dName: "Header Background",
            name: "headerBGColor",
            property: "background-color"
        }, {
            dName: "Header Text",
            name: "headerColor",
            property: "color"
        }, {
            dName: "Board Title",
            name: "boardColor",
            property: "color"
        }, {
            dName: "Body Background",
            name: "bgColor",
            property: "background-color"
        }, {
            dName: "Text",
            name: "textColor",
            property: "color"
        }, {
            dName: "Backlink",
            name: "blinkColor",
            property: "color"
        }, {
            dName: "Header Link",
            name: "headerLColor",
            property: "color"
        }, {
            dName: "Header Link Hover",
            name: "headerLHColor",
            property: "color"
        }, {
            dName: "Link",
            name: "linkColor",
            property: "color"
        }, {
            dName: "Link Hover",
            name: "linkHColor",
            property: "color"
        }, {
            dName: "Quotelinks",
            name: "qlColor",
            property: "color"
        }, {
            dName: "Name",
            name: "nameColor",
            property: "color"
        }, {
            dName: "Tripcode",
            name: "tripColor",
            property: "color"
        }, {
            dName: "Subject",
            name: "titleColor",
            property: "color"
        }, {
            dName: "Greentext",
            name: "quoteColor",
            property: "color"
        }, {
            dName: "Unread Line",
            name: "unreadColor",
            property: "color"
        }, {
            dName: "Highlighting",
            name: "postHLColor",
            property: "color"
        }, {
            dName: "Posts Quoting You",
            name: "quotesYouHLColor",
            property: "color"
        }, {
            dName: "Own Posts",
            name: "ownPostHLColor",
            property: "color"
        }, {
            dName: "Highlighted Threads",
            name: "threadHLColor",
            property: "color"
        }, {
            dName: "Highlighted Reply BG",
            name: "replybgHLColor",
            property: "background"
        }, {
            dName: "Reply Selection",
            name: "replyslctColor",
            property: "outline"
        }],
        $lib, $SS;
    if (!Array.isArray)
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === "[object Array]";
        };
    Number.prototype.toHexStr = function() {
        var s = "",
            v;
        for (var i = 7; i >= 0; i--) {
            v = (this >>> (i * 4)) & 0xf;
            s += v.toString(16);
        }
        return s;
    };
    /* STYLE SCRIPT LIBRARY */
    /* More or less based off jQuery */
    $lib = window.$ = function(selector, root) {
        return this instanceof $lib ?
            this.init(selector, root) : new $lib(selector, root);
    };
    /* From 4chan X, unchainable */
    /* https://github.com/seaweedchan/4chan-x/blob/master/LICENSE */
    /* https://github.com/ccd0/4chan-x/blob/master/LICENSE */
    $.asap = function(test, cb) {
        if (test()) {
            return cb();
        } else {
            return setTimeout($.asap, 25, test, cb);
        }
    };
    E = function(text) {
        return (text + '').replace(/[&"'<>]/g, function(x) {
            return {
                '&': '&amp;',
                "'": '&#039;',
                '"': '&quot;',
                '<': '&lt;',
                '>': '&gt;'
            }[x];
        });
    },
    $lib.prototype = {
        constructor: $lib,
        elems: [],
        length: function() {
            return this.elems.length;
        },
    /* CONSTRUCTOR */
        init: function(selector, root) {
            if (selector == null || selector == undefined) return this;

            if (selector.constructor === $lib) return selector;
            else if (typeof selector === "string") {
                var root = root || document;
                var tagCheck = /^<(\w+)([^>]*)>(.*)$/.exec(selector); // No closing tag for root node.

                if (root.constructor === $lib)
                    root = root.get();

                if (tagCheck) {
                    var tag = document.createElement(tagCheck[1]);

                    if (tagCheck[2]) {
                        var attribs, atRegEx = /(\w+)=((?:"(?:[^"]+)"|'(?:[^']+)'|(?:\w+)))/g;
                        while ((attribs = atRegEx.exec(tagCheck[2])) != null) {
                            var val = attribs[2];
                            if ((val[0] == '"' || val[0] === "'") && val[0] == val[val.length - 1])
                                val = val.substr(1, val.length - 2)

                            tag.setAttribute(attribs[1], val);
                        }
                    }

                    tag.innerHTML = tagCheck[3];

                    this.elems = [tag];
                } else if (/^#[\w-]+$/.test(selector) && root == document) {
                    var el;

                    if ((el = document.getElementById(selector.substr(1))) != null)
                        this.elems = [el];
                } else {
                    var results = root.querySelectorAll(selector);
                    this.elems = Array.prototype.slice.call(results);
                }
            } else if (selector.nodeType)
                this.elems = [selector];
            else if (Array.isArray(selector))
                this.elems = Array.prototype.slice.call(selector);

            return this;
        },

        /* DOM NODE RETRIEVAL */
        clone: function() {
            var ret = [];

            this.each(function() {
                ret.push(this.cloneNode(true));
            });

            return new $lib(ret);
        },
        elements: function() {
            if (!this.hasSingleEl())
                return this;

            this.elems = Array.prototype.slice.call(this.elems[0].elements);

            return this;
        },
        get: function(index) {
            if (index == undefined && this.elems.length === 1)
                return this.elems[0];
            else if (index == undefined && !this.hasSingleEl())
                return this.elems;

            return this.elems[index];
        },

        /* DOM MANIPULATION */
        prepend: function(el) {
            if (el.constructor === $lib)
                el = el.get();

            return this.each(function() {
                this.insertBefore(el, this.firstChild);
            });
        },
        append: function(el) {
            if (el.constructor === $lib)
                el = el.get();

            return this.each(function() {
                this.appendChild(el);
            });
        },
        before: function(el) {
            if (el.constructor === $lib)
                el = el.get();

            return this.each(function() {
                this.parentNode.insertBefore(el, this);
            });
        },
        after: function(el) {
            if (el.constructor === $lib)
                el = el.get();

            return this.each(function() {
                if (this.nextSibling != null)
                    this.parentNode.insertBefore(el, this.nextSibling);
                else if (this.parentNode != null)
                    this.parentNode.appendChild(el);
            });
        },
        replace: function(el) {
            return this.each(function() {
                $(this).before(el).remove();
            });
        },
        html: function(html) {
            if (html == undefined)
                return this.elems[0].innerHTML;

            return this.each(function() {
                this.innerHTML = html;
            });
        },
        text: function(text) {
            if (this.length() === 0)
                return;

            if (text == undefined)
                return this.elems[0].textContent;

            return this.each(function() {
                this.textContent = text;
            });
        },
        appendText: function(text) {
            return this.each(function() {
                this.textContent += text;
            });
        },
        attr: function(name, val) {
            if (val == undefined)
                if (!this.hasSingleEl())
                    return this;
                else
                    return this.elems[0].getAttribute(name);
                else
            if (val === "")
                return this.each(function() {
                    this.removeAttribute(name);
                });

            return this.each(function() {
                this.setAttribute(name, val);
            });
        },
        disabled: function(bDisabled) {
            if (bDisabled == undefined)
                return this.elems[0].disabled;

            return this.each(function() {
                this.disabled = bDisabled;
            });
        },
        toggle: function(bHidden) {
            return this.each(function() {
                var $this = $(this);

                if (bHidden == undefined)
                    bHidden = !($this.attr("disabled") === "true");

                $this.attr("hidden", bHidden || "");
            });
        },
        hide: function() {
            return this.toggle(true);
        },
        show: function() {
            return this.toggle(false);
        },
        val: function(val) {
            if (val == undefined) {
                var el = this.elems[0];

                if (el == undefined)
                    return false;

                switch (el.type) {
                    case "checkbox":
                    case "radio":
                        return el.checked == true;
                    default:
                        if (/^\d+$/.test(el.value))
                            return parseInt(el.value);
                        return el.value;
                }
            }

            return this.each(function() {
                switch (this.type) {
                    case "checkbox":
                    case "radio":
                        this.checked = val;
                        break;
                    default:
                        this.value = val;
                        break;
                }
            });
        },
        checked: function(state) {
            return this.each(function() {
                this.checked = state;
            });
        },
        addClass: function(classNames) {
            return this.each(function() {
                classNames = classNames.split(" ");
                for (var j = 0, jMAX = classNames.length; j < jMAX; j++)
                    if (!$(this).hasClass(classNames[j]))
                        this.className += (this.className ? " " : "") + classNames[j];
            });
        },
        hasClass: function(className) {
            if (!this.hasSingleEl() || this.elems[0].className == undefined)
                return false;

            var regx = new RegExp("\\b" + className + "\\b");

            return regx.test(this.elems[0].className);
        },
        removeClass: function(classNames) {
            return this.each(function() {
                classNames = classNames.split(" ");
                for (var j = 0, jMAX = classNames.length; j < jMAX; j++)
                    if ($(this).hasClass(classNames[j])) {
                        var cclassNames = this.className.split(" ");
                        this.className = "";

                        for (var k = 0, kMAX = cclassNames.length; k < kMAX; k++)
                            if (classNames[j] !== cclassNames[k])
                                this.className += (this.className ? " " : "") + cclassNames[k];
                    }
            });
        },
        toggleClass: function(classNames) {
            return this.each(function() {
                classNames = classNames.split(" ");
                for (var j = 0, jMAX = classNames.length; j < jMAX; j++)
                    if (!$(this).hasClass(classNames[j]))
                        $(this).addClass(classNames[j]);
                    else
                        $(this).removeClass(classNames[j]);
            });
        },
        optionClass: function(optionName, optionValue, className) {
            return this.each(function() {
                if ($SS.conf[optionName] === optionValue && !$(this).hasClass(className))
                    $(this).addClass(className);
                else if ($SS.conf[optionName] !== optionValue && $(this).hasClass(className))
                    $(this).removeClass(className);
                else
                    return
            });
        },
        remove: function() {
            return this.each(function() {
                this.parentNode.removeChild(this);
            });
        },
        /* DOM TRAVERSING */
        parent: function() {
            if (!this.hasSingleEl()) return this;

            return new $lib(this.elems[0].parentNode);
        },
        children: function(selector) {
            if (!this.hasSingleEl())
                return this;
            else if (selector == null)
                selector = "*";

            return new $lib(selector, this.elems[0]);
        },
        nextSibling: function(selector) {
            if (!this.hasSingleEl() ? true : this.elems[0].nextSibling == null)
                return new $lib(null);

            if (selector != undefined) {
                var t, m = new $lib(selector, this.elems[0].parentNode),
                    s = this.elems[0].parentNode.childNodes;

                for (var i = s.length - 1; i >= 0; --i) {
                    if (s[i] === this.elems[0] && t == undefined) // end and no matching siblings
                        return new $lib(null);
                    else if (s[i] === this.elems[0] && t != undefined) // end and matched sibling
                        return new $lib(t);
                    else if (m.elems.indexOf(s[i]) !== -1) // this element matches the selector
                        t = s[i];
                }
            }

            return new $lib(this.elems[0].nextSibling);
        },
        previousSibling: function(selector) {
            if (!this.hasSingleEl() ? true : this.elems[0].previousSibling == null)
                return new $lib(null);

            if (selector != undefined) {
                var t, m = new $lib(selector, this.elems[0].parentNode),
                    s = this.elems[0].parentNode.childNodes;

                for (var i = 0, MAX = s.length; i < MAX; ++i) {
                    if (s[i] === this.elems[0] && t == undefined)
                        return new $lib(null);
                    else if (s[i] === this.elems[0] && t != undefined)
                        return new $lib(t);
                    else if (m.elems.indexOf(s[i]) !== -1)
                        t = s[i];
                }
            }

            return new $lib(this.elems[0].previousSibling);
        },

        /* EVENT METHODS */
        bind: function(type, listener) {
            return this.each(function() {
                this.addEventListener(type, listener, false);
            });
        },
        unbind: function(type, listener) {
            return this.each(function() {
                this.removeEventListener(type, listener, false);
            });
        },
        fire: function(evnt) {
            var ev = document.createEvent("HTMLEvents");

            return this.each(function() {
                ev.initEvent(evnt, true, true);
                this.dispatchEvent(ev);
            });
        },
        blur: function() {
            return this.each(function() {
                this.blur();
            });
        },
        click: function() {
            return this.each(function() {
                this.click();
            });
        },
        scrollIntoView: function(alignWithTop) {
            return this.each(function() {
                this.scrollIntoView(alignWithTop);
            });
        },
        /* HELPER METHODS */
        delay: function(func, time) {
            return this.each(function() {
                var $this = this;
                setTimeout(function() {
                    func.call($this);
                }, time);
            });
        },
        each: function(func, args) {
            if (args != null && !Array.isArray(args))
                args = [args];

            for (var i = 0, MAX = this.elems.length; i < MAX; ++i)
                func.apply(this.elems[i], args || [i]);

            return this;
        },
        exists: function() {
            return this.elems.length > 0;
        },
        hasSingleEl: function() {
            return this.elems.length === 1;
        },
        riceCheck: function() {
            return this.each(function() {
                var click = function(e) {
                    e.preventDefault();
                    this.previousSibling.click();
                };
                if (this.isRiced) return;
                else if (this.nextSibling != undefined && this.nextSibling.className === "riceCheck")
                    return $(this.nextSibling).bind("click", click);

                var div = $("<div class=riceCheck>").bind("click", click);
                $(this).hide().after(div);

                return this.isRiced = true;
            });
        },
        jsColor: function() {
            return this.each(function() {
                this.color = new $SS.jscolor.color(this);
            });
        }
    };
    /* END STYLE SCRIPT LIBRARY */

    /* STYLE SCRIPT CLASSES & METHODS */
    $SS = {
        browser: {},
        DOMLoaded: function(reload) {
            $SS.classes.init();

            var div;
            if (reload !== true) {
                $SS.options.init();
                $(document).bind("QRDialogCreation", $SS.QRDialogCreationHandler).bind("OpenSettings", $SS.NodeInsertionHandler).bind("ThreadUpdate", $SS.NodeInsertionHandler);

                var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
                var observer = new MutationObserver(function(mutations) {
                    var i, j, MAX, _MAX, nodes;

                    for (i = 0, MAX = mutations.length; i < MAX; ++i) {
                        nodes = mutations[i].addedNodes;

                        for (j = 0, _MAX = nodes.length; i < _MAX; ++i)
                            if (nodes[j].nodeType !== 3)
                                $("input[type=checkbox]", nodes[j]).riceCheck();
                    }
                });

                observer.observe(document, {
                    childList: true,
                    subtree: true
                });

                if ((!(html = $("*[xmlns]")).exists()) && (!(ctxmenu = $("#ctxmenu-main").exists())))
                    if ((link = $("link[title][rel='stylesheet']")).exists())
                        link.each(function() {
                            $(this).attr("href", "");
                        });

                if ((div = $("#globalMessage *[style]")).exists())
                    div.each(function() {
                        $(this).attr("style", "");
                    });

                if ((div = $(".closeIcon")).exists()) {
                    div.text("x");
                };

                if ($SS.location.home) {
                    $("html").attr("style", "background: " + $SS.theme.bgColor.hex + " !important;");
                }

                // 4chan ads being added with JS
                if (!$SS.conf["Show Top Ad"]) {
                    $(".topad.center").remove();
                    $(".aboveMidAd.center").remove();
                } else if (!$SS.conf["Show Middle Ad"]) {
                    $(".middlead.center").remove();
                } else if (!$SS.conf["Show Bottom Ad"]) {
                    $(".bottomad.center").remove();
                }

                // things that need to change after 4chan X loads.
                setTimeout(function() {
                    if (!$SS.QRhandled && (div = $("#qr")).exists())
                        $SS.QRDialogCreationHandler({
                            target: div
                        });
                });

            }

            $SS.insertMascot();
            $SS.pages.init();
            $SS.riceInputs.init();

        },
        init: function(reload) {
            if (!reload) {
                if (/^about:neterror/.test(document.documentURI)) return;
                localStorage["4chan-settings"] = "{ \"disableAll\" : true, \"dropDownNav\": false }";

                var m_VERSION;
                $SS.browser.webkit = /AppleWebKit/.test(navigator.userAgent);
                $SS.browser.gecko = /Gecko\//.test(navigator.userAgent);
                $SS.location = $SS.getLocation();

                if ((m_VERSION = $SS.Config.get("VERSION")) !== VERSION) {
                // Signal that OneeChan has updated
                    var detail = {
                        type: 'info',
                        content: NAME + ' has been updated to version ' + VERSION + '.',
                        lifetime: 15
                    };
                    if (typeof cloneInto === 'function') {
                        detail = cloneInto(detail, document.defaultView);
                    }
                    var event = new CustomEvent('CreateNotification', {
                        bubbles: true,
                        detail: detail
                    });
                    setTimeout(function() {
                        document.dispatchEvent(event);
                    }, 25);
                // Correct selected theme/mascot after updating
                // and the number defaults has changed.                    
                    var ntMascots = $SS.Mascots.defaults.length, // new total
                        ntThemes = $SS.Themes.defaults.length,
                        otMascots = $SS.Config.get("Total Mascots"), // old total
                        otThemes = $SS.Config.get("Total Themes"),
                        sMascots = $SS.Config.get("Selected Mascots"),
                        sTheme = $SS.Config.get("Selected Theme");

                    if (otMascots !== ntMascots && otMascots != undefined) {
                        var mDiff = ntMascots - otMascots;

                        for (var i = 0, MAX = sMascots.length; i < MAX; ++i)
                            if (sMascots[i] < otMascots) break;
                            else sMascots[i] += mDiff;

                        $SS.Config.set("Selected Mascots", sMascots);
                    }

                    if (otThemes !== ntThemes && otThemes != undefined && sTheme >= otThemes) {
                        sTheme += ntThemes - otThemes;
                        $SS.Config.set("Selected Theme", sTheme);
                    }

                    $SS.Config.set("VERSION", VERSION);
                    $SS.Config.set("Total Mascots", ntMascots);
                    $SS.Config.set("Total Themes", ntThemes);
                }
            }

            $SS.Config.init();
            $SS.Themes.init();
            $SS.Mascots.init();

            if (reload) {
                $SS.insertCSS();
                $SS.DOMLoaded(true);
            } else {
                $.asap((function() {
                    return $("link[rel=stylesheet]", document.head).exists();
                }), $SS.insertCSS);
                if (/complete|interactive/.test(document.readyState))
                    $SS.DOMLoaded();
                else
                    $(document).bind("DOMContentLoaded", $SS.DOMLoaded);
            }

        },

        /* STYLING & DOM */
        insertCSS: function() {
            var css,
                reload = $("#ch4SS").exists();

            if (reload || $("link[rel=stylesheet]", document.head).exists())
                $(document).unbind("DOMNodeInserted", $SS.insertCSS);
            else return;

            css = "<%= grunt.file.read('tmp/style.min.css').replace(/\\(^\")/g, '') %>";

            if (reload)
                $("#ch4SS").text(css);
            else
                $(document.head).append($("<style type='text/css' id=ch4SS>").text(css));
        },
        insertMascot: function() {
            if ($SS.conf["Hide Mascots in Catalog"] && $SS.location.catalog) {
                return;
            } else if ($SS.conf["Hide Mascots in Catalog"] && $(".catalog-mode").exists()) {
                return;
            }

            var createMascot = $("<div id=mascot><img src=" + ($SS.mascot.img.get() !== "none " ? $SS.mascot.img.get() : "") + ">");

            if ((div = $("#mascot")).exists()) {
                div.replace(createMascot);
            } else {
                $(document.body).append(createMascot);
            }
        },
        QRDialogCreationHandler: function(e) {
            var qr = e.target;

            $("input[type=checkbox]", qr).riceCheck();

            $SS.QRhandled = true;
        },
        NodeInsertionHandler: function(e) {
            var settings = e.target;
            $("input[type=checkbox]", settings).riceCheck();
        },
        /* CONFIG */
        Config: {
            hasGM: typeof GM_deleteValue !== "undefined",
            init: function() {
                var parseVal = function(key, val) {
                    if (/^(Selected|Hidden)+\s(Mascots|Themes?)+$/.test(key)) {
                        if (key === "Selected Theme")
                            return parseInt(val);
                        else if (key === "NSFW Theme")
                            return parseInt(val);
                        else if (key === "Selected Mascots" && val === 0)
                            return 0;

                        for (var i = 0, MAX = val.length, ret = []; i < MAX; ++i)
                            ret[i] = parseInt(val[i]);

                        return ret;
                    }

                    return (Array.isArray(val) && typeof val[0] !== "object") ? val[0] : val;
                };

                $SS.conf = [];
                $SS.exportOptions = {};

                for (var key in defaultConfig) {
                    $SS.conf[key] = parseVal(key, this.get(key));
                    if (!(/^(Hidden|Themes|Selected Mascots|::)/.test(key))) {
                        $SS.exportOptions[key] = $SS.conf[key];
                    };
                };
                $SS.conf["Margin Left"] = $SS.conf["Left Margin"] !== 999 ? $SS.conf["Left Margin"] : $SS.conf["Custom Left Margin"];
                $SS.conf["Margin Right"] = $SS.conf["Right Margin"] !== 999 ? $SS.conf["Right Margin"] : $SS.conf["Custom Right Margin"];
                $SS.conf["Margin Post Message"] = $SS.conf["Post Message Margin"] === 1 ? "4px 16px" : ($SS.conf["Post Message Margin"] === 3 ? "20px 40px" : "");
                $SS.conf["Width Decoration"] = $SS.conf["Decoration Width"] !== 999 ? $SS.conf["Decoration Width"] : $SS.conf["Custom Decoration Width"];
            },
            get: function(name) {
                var val = this.hasGM ?
                    GM_getValue(NAMESPACE + name) :
                    localStorage.getItem(NAMESPACE + name);

                if (val != undefined)
                    return JSON.parse(val);

                return defaultConfig[name];
            },
            set: function(name, val) {
                name = NAMESPACE + name;

                if (typeof val !== "number")
                    val = JSON.stringify(val);

                return this.hasGM ?
                    GM_setValue(name, val) :
                    localStorage.removeItem(name, val),
                localStorage.setItem(name, val);
            }
        },

        /* OPTIONS */
        options: {
            saveAndClose: false,
            init: function() {
                $(document).bind("keydown", $SS.options.keydown);

                var a = $("<span class='shortcut brackets-wrap'><a id='OneeChanLink' title='OneeChan Settings' class='fa fa-gears' href='javascript:;'>OneeChan</a></span>").bind("click", $SS.options.show); /* seaweedchan */
                    b = $("<span><a id='OneeChanLink' title='OneeChan Settings' class='fa fa-gears' href='javascript:;'></a> / </span>").bind("click", $SS.options.show); /* MayhemYDG */
                    c = $("<span id='OneeChanLink'> [<a title='OneeChan Settings' href='javascript:;'>OneeChan</a>]&nbsp;</span>").bind("click", $SS.options.show); /* loadletter */
                $.asap(function() {
                    return $(".fourchan-x #shortcuts, .fourchan_x, .is_catalog").exists();
                }, function() {
                    $(".fourchan-x").exists() ? $(".shortcut.brackets-wrap:last-of-type").before(a) && $("#shortcuts.brackets-wrap").append(b) : $("#boardNavDesktop").append(c);
                });

            },
            show: function() {
                if ($("#overlay").exists())
                    $SS.options.close();
                else {
                    var overlay = $("<div id=overlay>").bind("click", $SS.options.close),
                        tOptions = $("<div id='oneechan-options' class=dialog>").bind("click", function(e) {
                            return e.stopPropagation();
                        }),
                        optionsHTML = "<ul id=options-tabs>" +
                            "<li class='tab-item'><label class='tab-label selected' for=main-select>Main</label></li>" +
                            "<li class='tab-item'><label class='tab-label' for=themes-select>Themes</label></li>" +
                            "<li class='tab-item'><label class='tab-label' for=mascots-select>Mascots</label></li>" +
                            "</ul><div id=options-container><input type=radio class=tab-select name=tab-select id=main-select hidden checked><div id='main-section' class='options-section'>" +
                            "<p class='buttons-container'>" +
                            "<a class='options-button' title='Export your settings as JSON.' name=Export>Export</a><a class='options-button' id='import-settings'><input type=file class='import-input' riced=true accept='application/json'>Import</a><a class='options-button' title='Reset OneeChan settings.' name=resetSettings>Reset</a>" +
                            "<span id=oneechan-version><span>OneeChan</span> v" + VERSION + "<span class=link-delim> | </span>" +
                            "<a href='https://github.com/Nebukazar/OneeChan/wiki' id=changelog-link target='_blank' title='Learn about OneeChan.'>Wiki</a><span class=link-delim> | </span>" +
                            "<a href='https://github.com/Nebukazar/OneeChan/blob/master/CHANGELOG.md' id=changelog-link target='_blank' title='Read the changelog.'>Changelog</a><span class=link-delim> | </span>" +
                            "<a href='https://github.com/Nebukazar/OneeChan/blob/master/CONTRIBUTING.md#reporting-bugs-and-suggestions' id=issues-link target='_blank' title='Report an issue.'>Issues</a></p>",
                        key, val, des;

                    for (key in defaultConfig) {
                        if (/^(Selected|Hidden)+\s(Mascots|Themes?)+$/.test(key))
                            continue;

                        val = $SS.conf[key];
                        des = defaultConfig[key][1];

                        if ((defaultConfig[key][4] === true) && (key === "Custom Left Margin")) {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML += "<span class='option suboption " + id + "' title=\"" + des + "\"" +
                                (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span class='option-title'>" + key +
                                "</span><input name='Custom Left Margin' type=text value=" + $SS.conf["Custom Left Margin"] + "px></span>";
                        } else if ((defaultConfig[key][4] === true) && (key === "Custom Right Margin")) {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML += "<span class='option suboption " + id + "' title=\"" + des + "\"" +
                                (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span class='option-title'>" + key +
                                "</span><input name='Custom Right Margin' type=text value=" + $SS.conf["Custom Right Margin"] + "px></span>";
                        } else if ((defaultConfig[key][4] === true) && (key === "Custom Decoration Width")) {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML += "<span class='option suboption " + id + "' title=\"" + des + "\"" +
                                (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span class='option-title'>" + key +
                                "</span><input name='Custom Decoration Width' type=text value=" + $SS.conf["Custom Decoration Width"] + "px></span>";
                        } else if (val === "header") {
                            optionsHTML += "<label class='option header'><span class='option-title'>" + key + "</span></label>";
                        } else if (defaultConfig[key][4] === true) // sub-option
                        {
                            var pVal = $SS.conf[defaultConfig[key][2]];
                            id = defaultConfig[key][2].replace(/\s/g, "_") + defaultConfig[key][3];
                            optionsHTML += "<label class='option suboption " + id + "' title=\"" + des + "\"" +
                                (pVal != defaultConfig[key][3] ? "hidden" : "") + "><span class='option-title'>" + key +
                                "</span><input" + (val ? " checked" : "") + " name='" + key + "' type=checkbox></label>";
                        } else if (Array.isArray(defaultConfig[key][2])) // select
                        {
                            var opts = key === "Font Family" ? $SS.fontList || defaultConfig[key][2] : defaultConfig[key][2],
                                cFonts = [];
                            optionsHTML += "<label class=option title=\"" + des + "\"><span class='option-title'>" + key + (key === "Font Family" ? " (<a name=loadSysFonts title='Load fonts from system. Requires flash from external site to run.'>" + ($SS.fontList ? "loaded!" : "load") + "</a>)" : "") + "</span>" +
                                "<select name='" + key + "'" + (defaultConfig[key][3] === true ? " has-suboption" : "") + ">";

                             for (var i = 0, MAX = opts.length; i < MAX; ++i) {
                                var name, value;

                                if (typeof opts[i] === "object") {
                                    name = opts[i].name;
                                    value = opts[i].value;
                                } else
                                    name = value = opts[i];

                                if (key === "Font Family") cFonts.push(value);

                                optionsHTML += "<option" + (key === "Font Family" ? " style=\"font-family:" + $SS.formatFont(value) + "!important\"" : "") +
                                    " value='" + value + "'" + (value == val ? " selected" : "") + ">" + name + "</option>";
                            }

                            if (key === "Font Family" && cFonts.indexOf($SS.conf["Font Family"]) == -1)
                                optionsHTML += "<option style=\"font-family:" + $SS.formatFont($SS.conf["Font Family"]) + "!important\" value='" + $SS.conf["Font Family"] + "' selected>" + $SS.conf["Font Family"] + "</option>";

                            optionsHTML += "</select></label>";
                        } else if (key === "Font Size") {
                            optionsHTML += "<label class='option visible' title=\"" + des + "\"><span class='option-title'>" + key + "</span>" +
                                "<input type=text name='Font Size' value=" + $SS.conf["Font Size"] + "px></label>";
                        } else if (key === "Themes") {
                            optionsHTML += "</div><input type=radio class=tab-select name=tab-select class=tab-select  id=themes-select hidden><div id='themes-section' class='options-section'>";
                        } else if (key === "Mascots") {
                            optionsHTML += "</div><input type=radio class=tab-select name=tab-select id=mascots-select hidden><div id='mascot-section' class='options-section'>";
                        } else // checkbox
                            optionsHTML += "<label class=option title=\"" + des + "\"><span class='option-title'>" + key + "</span><input" + (val ? " checked" : "") +
                                " name='" + key + "' " + (defaultConfig[key][3] === true ? " has-suboption" : "") + " type=checkbox></label>";
                    }

                    optionsHTML += "</div></div><div class='options-close'><a class='options-button' name=save>Save</a><a class='options-button' name=cancel>Cancel</a></div>";
                    tOptions.html(optionsHTML);
                    overlay.append(tOptions);

                    $(".import-input", tOptions).bind("change", function() {
                        var file = this.files[0],
                            reader = new FileReader(),
                            key, imported, val;
                        if (this.files[0].name.match(/\.json$/) == null) {
                            alert('Only JSON files are accepted!');
                            return;
                        }
                        else if (!confirm('Your current settings will be entirely overwritten, are you sure?')) {
                            return;
                        }
                        reader.onload = (function(tFile) {
                            return function(e) {
                                try {
                                    imported = JSON.parse(e.target.result);
                                } catch (err) {
                                    alert("Invalid settings file!");
                                    return;
                                }

                                for (key in imported) {
                                    val = imported[key];
                                    $SS.Config.set(key, val);
                                }

                                if (confirm('Import successful. Refresh now?')) {
                                    return window.location.reload();
                                }

                            }
                        })(file);

                        reader.readAsText(file);
                    });
                    $("a[name=Export]", tOptions).bind("click", function() {
                        if ($("a[download]", tOptions).exists())
                            return;
                        var exportalert = $("<a class='options-button'download='OneeChan v" + VERSION + " Settings.json' href='data:application/json," + encodeURIComponent(JSON.stringify($SS.exportOptions, null, 2)) + "'>Save me!").bind("click", $SS.options.close);
                        return $(this).replace(exportalert);
                    });
                    // Reset settings
                    $("a[name=resetSettings]", tOptions).bind("click", function() {
                        var confirmReset = confirm('Your current OneeChan settings will be wiped, are you sure?');
                        if (confirmReset) {
                            if (typeof GM_deleteValue !== "undefined") {
                                var keys = GM_listValues();
                                for (var i=0, key=null; key=keys[i]; i++) {
                                GM_deleteValue(key);
                            }}
                            else if ($SS.browser.webkit) {
                            Object.keys(localStorage).forEach(function(key) {
                            if (/^(?:OneeChan)/.test(key)) {
                                    localStorage.removeItem(key);
                                }
                            })}
                            alert('Your OneeChan settings have been reset. Reloading.');
                            return window.location.reload();
                        } else return;
                    });
                    // options window
                    $(".tab-label", tOptions).bind("click", function(e) {
                        if ($(this).hasClass("selected")) return;

                        $(".tab-label.selected").removeClass("selected");
                        $(this).addClass("selected");
                    });
                    $("[has-suboption]", tOptions).bind("change", function() {
                        var id = this.name.replace(/\s/g, "_") + $(this).val(),
                            sub = $("." + id);

                        if (sub.exists())
                            sub.each(function() {
                                $(this).show();
                            });
                        else
                            $("[class*='" + this.name.replace(/\s/g, "_") + "']").each(function() {
                                    $(this).hide();
                                });
                    });
                    $("a[name=save]", tOptions).bind("click", function() {
                        $SS.options.saveAndClose = true;
                        $SS.options.save();
                        $SS.options.saveAndClose = false;
                    });
                    $("a[name=cancel]", tOptions).bind("click", $SS.options.close);

                    // main tab
                    $("input[name='Font Size']", tOptions).bind("keydown", function(e) {
                        var val = parseInt($(this).val()),
                            bitmap = $(this).parent().nextSibling().children("input[name='Bitmap Font']").val();

                        if (e.keyCode === 38 && (val < MAX_FONT_SIZE || bitmap))
                            $(this).val(++val + "px");
                        else if (e.keyCode === 40 && (val > MIN_FONT_SIZE || bitmap))
                            $(this).val(--val + "px");
                    });
                    if (!$SS.fontList)
                        $("a[name=loadSysFonts]", tOptions).bind("click", $SS.options.loadSystemFonts);

                    // themes tab
                    $SS.options.createThemesTab(tOptions);

                    // mascots tab
                    $SS.options.createMascotsTab(tOptions);

                    return $(document.body).append(overlay);
                }
            },
            createThemesTab: function(tOptions) {
                var themes = $("#themes-section", tOptions).html(""),
                    p = $("<p class='buttons-container'>");

                p.append($("<a class='options-button' name=addTheme title='Create a new theme.'>Create", tOptions).bind("click", $SS.options.showTheme));
                p.append($("<a class='options-button' href='https://github.com/Nebukazar/OneeChan/wiki/Custom-Themes' title='Learn more about custom themes and download new ones.' target='_blank'>Custom Themes"));
                p.append($("<div id='import-link' title='Import a new theme (.json) file.'>").append($("<input type=file class='import-input' riced=true>")
                    .bind("change", function() {
                        var file = this.files[0],
                            reader = new FileReader(),
                            val, first, valid = true,
                            theme, div, index, imported;

                        reader.onload = (function(tFile) {
                            return function(e) {
                                try {
                                    theme = JSON.parse(e.target.result);
                                } catch (err) {
                                    alert("Invalid theme file!");
                                    return;
                                }

                                /* Check if this is an OneeChan v5 file, do nothing if so */
                                if (theme["headerColor"] !== undefined) {}

                                /* Old OneeChan */
                                else if (theme["navOp"] !== undefined) {
                                    theme.unreadColor = theme["jlinkColor"];
                                    theme.headerColor = theme["textColor"];
                                    theme.headerBGColor = theme["mainColor"];
                                    theme.headerLColor = theme["linkColor"];
                                    theme.headerLHColor = theme["linkHColor"];
                                    theme.boardColor = theme["textColor"];
                                }

                                /* 4chan Style Script */
                                else if (theme["timeColor"] !== undefined) {
                                    theme.replyOp = "1.0";
                                    theme.navOp = "0.9";
                                    theme.unreadColor = theme["jlinkColor"];
                                    theme.headerColor = theme["textColor"];
                                    theme.headerBGColor = theme["mainColor"];
                                    theme.headerLColor = theme["linkColor"];
                                    theme.headerLHColor = theme["linkHColor"];
                                    theme.boardColor = theme["textColor"];
                                    theme.bgImg = $SS.validImageURL(theme["bgImg"]) ? theme["bgImg"] : false;
                                }

                                /* Appchan X */
                                else if (theme["Theme"] !== undefined) {
                                    theme.name = theme["Theme"];
                                    theme.authorName = theme["Author"];
                                    theme.authorTrip = theme["Author Tripcode"];
                                    theme.replyOp = "1.0";
                                    theme.navOp = "0.9";
                                    theme.bgImg = theme["Background Image"];
                                    theme.mainColor = $SS.colorToHex(theme["Reply Background"]);
                                    theme.textColor = $SS.colorToHex(theme["Text"]);
                                    theme.linkColor = $SS.colorToHex(theme["Links"]);
                                    theme.linkHColor = $SS.colorToHex(theme["Hovered Links"]);
                                    theme.headerColor = $SS.colorToHex(theme["Text"]);
                                    theme.headerBGColor = $SS.colorToHex(theme["Navigation Background"]);
                                    theme.headerLColor = $SS.colorToHex(theme["Navigation Links"]);
                                    theme.headerLHColor = $SS.colorToHex(theme["Hovered Navigation Links"]);
                                    theme.boardColor = $SS.colorToHex(theme["Board Title"]);
                                    theme.brderColor = $SS.colorToHex(theme["Reply Border"]);
                                    theme.inputColor = $SS.colorToHex(theme["Input Background"]);
                                    theme.inputbColor = $SS.colorToHex(theme["Input Border"]);
                                    theme.bgColor = $SS.colorToHex(theme["Background Color"]);
                                    theme.blinkColor = $SS.colorToHex(theme["Backlinks"]);
                                    theme.unreadColor = $SS.colorToHex(theme["Links"]);
                                    theme.nameColor = $SS.colorToHex(theme["Names"]);
                                    theme.tripColor = $SS.colorToHex(theme["Tripcodes"]);
                                    theme.titleColor = $SS.colorToHex(theme["Subjects"]);
                                    theme.quoteColor = $SS.colorToHex(theme["Greentext"]);
                                    theme.qlColor = $SS.colorToHex(theme["Quotelinks"]);
                                    theme.replybgHLColor = $SS.colorToHex(theme["Highlighted Reply Background"]);
                                    theme.replyslctColor = $SS.colorToHex(theme["Highlighted Reply Background"]);
                                    theme.customCSS = theme["Custom CSS"];
                                }

                                /* Can't be exported from the main scripts, so toss an error */
                                else {
                                    alert("Invalid theme file!");
                                    return;
                                }

                                index = $SS.conf["Themes"].push(theme);
                                theme = new $SS.Theme(--index);
                                div = theme.preview();
                                $("#overlay #themes-section").append(div);
                                div.fire("click").scrollIntoView(true);
                            }
                        })(file);

                        reader.readAsText(file);
                    })).append($("<span class='options-button'>Import")));
                p.append($("<a class='options-button' name=restoreThemes title='Restore hidden default themes'>Restore", tOptions)
                    .bind("click", function() {
                        $SS.conf["Hidden Themes"] = [];
                        $("#themes-section>div[hidden]").show();
                    })
                );

                if ($SS.conf["Hidden Themes"].length === 0)
                    $("a[name=restoreThemes]", p).hide();

                themes.append(p);

                for (var i = 0, MAX = $SS.conf["Themes"].length, tTheme; i < MAX; ++i) {
                    tTheme = new $SS.Theme(i);
                    themes.append(tTheme.preview());
                }
            },
            createMascotsTab: function(tOptions) {
                var mascots = $("#mascot-section", tOptions).html(""),
                    p = $("<p class='buttons-container'>");

                p.append($("<a class='options-button' name=addMascot title='Add a new mascot.'>Add", tOptions).bind("click", $SS.options.showMascot));
                p.append($("<a class='options-button' href='http://appchan.booru.org/' title='Get more mascots. Possibly NSFW.' target='_blank'>More Mascots"));
                p.append($("<a class='options-button' name=restoreMascots title='Restore hidden default mascots'>Restore", tOptions)
                    .bind("click", function() {
                        $SS.conf["Hidden Mascots"] = [];
                        $("#mascot-section>div[hidden]").show();
                    })
                );

                if ($SS.conf["Hidden Mascots"].length === 0)
                    $("a[name=restoreMascots]", p).hide();

                p.append($("<a class='options-button' name=selectAll>Select All", tOptions)
                    .bind("click", function() {
                        $("#mascot-section>div:not([hidden])").each(function() {
                            $(this).addClass("selected")
                        });
                    }));
                p.append($("<a class='options-button' name=selectNone>Select None", tOptions)
                    .bind("click", function() {
                        $("#mascot-section>div").each(function() {
                            $(this).removeClass("selected")
                        });
                    }));

                mascots.append(p);

                for (var i = 0, MAX = $SS.conf["Mascots"].length, tMascot; i < MAX; ++i) {
                    tMascot = new $SS.Mascot(i);
                    mascots.append(tMascot.preview());
                }
            },
            close: function() {
                return $("#overlay").remove();
            },
            keydown: function(e) {
                if (e.ctrlKey && e.keyCode === 79) {
                    e.preventDefault();
                    e.stopPropagation();
                    $SS.options.show();
                }
            },
            loadSystemFonts: function(evt) {
                var loadFontBTN = $(evt.target),
                    getFontMessage;
                $(document.head).append($('<script type="text/javascript">' +
                    "function populateFontList(fontArr)" +
                    "{" +
                    "var fontList = [];" +
                    "for (var key in fontArr)" +
                    "fontList.push(fontArr[key]);" +
                    "window.postMessage(fontList, '*');" +
                    "}"));
                window.addEventListener("message", getFontMessage = function(e) {
                    $SS.fontList = e.data;
                    var fontSelect = $("<select name='Font Family'>");

                    for (var i = 0, MAX = $SS.fontList.length; i < MAX; ++i) {
                        var name, value;
                        name = value = $SS.fontList[i];

                        fontSelect.append($("<option" + " style=\"font-family:" + $SS.formatFont(value) + "!important\"" +
                            " value='" + value + "'" + (value == $SS.conf["Font Family"] ? " selected=true" : "") + ">" + name));
                    }

                    $("select[name='Font Family']").before(fontSelect).remove();

                    $("#fontListSWF").remove();
                    window.removeEventListener("message", getFontMessage);
                    loadFontBTN.text("loaded!").unbind("click", $SS.options.loadSystemFonts);
                }, false);

                $(document.body).append($("<div id=fontListSWF hidden><object type='application/x-shockwave-flash'" +
                    " data='" + fontListSWF + "'><param name=allowScriptAccess value=always></object>"));
                return loadFontBTN.text("loading...");
            },
            save: function() {
                var div = $("#oneechan-options"),
                    themes = [],
                    mascots = [],
                    selectedMascots = [],
                    nsfwTheme,
                    selectedTheme;

                // Save main
                $("#oneechan-options input[name]:not(.tab-select), #oneechan-options select").each(function() {
                    var name = $(this).attr("name"),
                        val = $(this).val();

                    if (name === "Font Size") {
                        val = parseInt(val);

                        if (!$("input[name='Bitmap Font']", div).val())
                            val = Math.max(Math.min(val, MAX_FONT_SIZE), MIN_FONT_SIZE);
                    } else if (name === "Custom Right Margin") {
                        val = parseInt(val);
                    } else if (name === "Custom Left Margin") {
                        val = parseInt(val);
                    } else if (name === "Custom Decoration Width") {
                        val = parseInt(val);
                    }

                    $SS.Config.set($(this).attr("name"), val);
                });

                // Save Themes
                $("#oneechan-options #themes-section>div").each(function(index) {
                    var oldIndex = parseInt(this.id.substr(5));
                    if (!$SS.conf["Themes"][oldIndex].default)
                        themes.push($SS.conf["Themes"][oldIndex]);
                });

                selectedTheme = (selectedTheme = $("#oneechan-options #themes-section>div.selected")).exists() ?
                    parseInt(selectedTheme.attr("id").substr(5)) : 0;

                nsfwTheme = (nsfwTheme = $("#oneechan-options #themes-section>div.nsfw")).exists() ?
                    parseInt(nsfwTheme.attr("id").substr(5)) : 0;

                $SS.Config.set("Themes", themes);
                $SS.Config.set("Selected Theme", selectedTheme);
                $SS.Config.set("NSFW Theme", nsfwTheme);
                $SS.Config.set("Hidden Themes", $SS.conf["Hidden Themes"]);

                // Save Mascots
                $("#oneechan-options #mascot-section>div").each(function(index) {
                    var oldIndex = parseInt(this.id.substr(6));
                    if ($(this).hasClass("selected"))
                        selectedMascots.push(index);

                    if (!$SS.conf["Mascots"][oldIndex].default)
                        mascots.push($SS.conf["Mascots"][oldIndex]);
                });

                $SS.Config.set("Mascots", mascots);
                $SS.Config.set("Selected Mascots", selectedMascots);
                $SS.Config.set("Hidden Mascots", $SS.conf["Hidden Mascots"]);

                if ($SS.options.saveAndClose)
                    $SS.options.close();

                return $SS.init(true);
            },
            showTheme: function(tIndex) {
                var div, overlay;

                if (typeof tIndex === "number") {
                    var bEdit = true,
                        tEdit = $SS.conf["Themes"][tIndex],
                        RPA, themeR, themePY, themePX, themeA;

                    if (tEdit.bgImg && tEdit.bgRPA) {
                        RPA = tEdit.bgRPA.split(" ");
                        themeR = RPA[0];
                        themePY = RPA[1];
                        themePX = RPA[2];
                        themeA = RPA[3];
                    }
                }

                div = $("<div id='add-theme' class='dialog'>");

                var innerHTML = "<label>" +
                    "<span class='option-title'>Theme Name:</span><input type=text name=name value='" + (bEdit ? tEdit.name : "") + "'>" +
                    "</label><label>" +
                    "<span class='option-title'>Author Name:</span><input type=text name=authorName value='" + (bEdit ? (tEdit.authorName !== undefined ? tEdit.authorName : "") : "") + "'>" +
                    "</label><label>" +
                    "<span class='option-title'>Author Tripcode:</span><input type=text name=authorTrip value='" + (bEdit ? (tEdit.authorTrip !== undefined ? tEdit.authorTrip : "") : "") + "'>" +
                    "</label><label>" +
                    "<span class='option-title'>BG Image:</span><input type=text name=bgImg value=" + (bEdit ? ($SS.validImageURL(tEdit.bgImg) ? tEdit.bgImg + "" : ($SS.validBase64(tEdit.bgImg) ? tEdit.bgImg : "")) : "") + "></label><label>" +
                    "<span class='option-title'>BG Repeat:</span><select name=bgR>" +
                    "<option" + (bEdit && themeR === "no-repeat" ? " selected" : "") + ">no-repeat</option>" +
                    "<option" + (bEdit && themeR === "repeat" ? " selected" : "") + ">repeat</option>" +
                    "<option" + (bEdit && themeR === "repeat-x" ? " selected" : "") + ">repeat-x</option>" +
                    "<option" + (bEdit && themeR === "repeat-y" ? " selected" : "") + ">repeat-y</option>" +
                    "</select></label><label>" +
                    "<span class='option-title'>BG Attachment:</span><select name=bgA>" +
                    "<option" + (bEdit && themeA === "fixed" ? " selected" : "") + ">fixed</option>" +
                    "<option" + (bEdit && themeA === "scroll" ? " selected" : "") + ">scroll</option>" +
                    "</select></label><label>" +
                    "<span class='option-title'>BG Position-X:</span><select name=bgPX>" +
                    "<option" + (bEdit && themePX === "left" ? " selected" : "") + ">left</option>" +
                    "<option" + (bEdit && themePX === "center" ? " selected" : "") + ">center</option>" +
                    "<option" + (bEdit && themePX === "right" ? " selected" : "") + ">right</option>" +
                    "</select></label><label>" +
                    "<span class='option-title'>BG Position-Y:</span><select name=bgPY>" +
                    "<option" + (bEdit && themePY === "top" ? " selected" : "") + ">top</option>" +
                    "<option" + (bEdit && themePY === "center" ? " selected" : "") + ">center</option>" +
                    "<option" + (bEdit && themePY === "bottom" ? " selected" : "") + ">bottom</option>" +
                    "</select></label><label>" +
                    "<span class='option-title'>Reply Opacity:</span><input type=text name=replyOp value='" + (bEdit ? tEdit.replyOp : "1.0") + "'></label><label>" +
                    "<span class='option-title'>Header Opacity:</span><input type=text name=navOp value='" + (bEdit ? tEdit.navOp : "0.9") + "'>" +
                    "</label>";

                for (var i = 0, MAX = themeInputs.length; i < MAX; ++i)
                    innerHTML += "<label><span class='option-title'>" + themeInputs[i].dName + ":</span>" +
                        "<input type=text class=jsColor name=" + themeInputs[i].name + " value=" + (bEdit ? tEdit[themeInputs[i].name] : "") + "></label>";

                innerHTML += "<label id=customCSS><span class='option-title'>Custom CSS:</span><textarea name=customCSS>" + (bEdit ? tEdit.customCSS || "" : "") + "</textarea>" +
                    "</label><div>" +
                    "<a class='options-button' name=export>Export</a>" +
                    "<a class='options-button' name=" + (bEdit ? "edit" : "add") + ">Save</a><a class='options-button' name=cancel>Cancel</a></div>";

                div.html(innerHTML);
                $(".jsColor", div).jsColor();

                overlay = $("<div id=overlay2>").append(div);

                $("a[name=export]", div).bind("click", function() {
                    var theme = $SS.options.addTheme(tIndex, true);
                    if ($("a[download]", div).exists())
                        return;
                    var exportalert = $("<a class='options-button'download='" + theme.name + ".json' href='data:application/json," + encodeURIComponent(JSON.stringify(theme)) + "'>Save me!");
                    return $(this).replace(exportalert);
                });

                if (bEdit) {
                    $("a[name=edit]", div).bind("click", function() {
                        $SS.options.addTheme(tIndex);
                        $("#overlay").removeClass("previewing");
                    });
                    $("#overlay").addClass("previewing");
                } else {
                    $("a[name=add]", div).bind("click", $SS.options.addTheme);
                    $("#overlay").addClass("previewing");
                }

                $("a[name=cancel]", div).bind("click", function() {
                    $("#overlay").removeClass("previewing");
                    $("#overlay2").remove();
                });

                if (bEdit)
                    $("input,textarea,select", div).bind("change", tEdit.mHandler = function() {
                        tEdit.modified = true;
                        $("input,textarea,select", $("#addTheme")).unbind("change", tEdit.mHandler);
                    });

                return $(document.body).append(overlay);
            },
            addTheme: function(tIndex, exp) {
                var overlay = $("#overlay2"),
                    tTheme  = {},
                    makeRPA = function() {
                        var RPA = [];

                        RPA.push($("select[name=bgR]",  overlay).val());
                        RPA.push($("select[name=bgPY]", overlay).val());
                        RPA.push($("select[name=bgPX]", overlay).val());
                        RPA.push($("select[name=bgA]",  overlay).val());

                        return RPA.join(" ");
                    },
                    bEdit = typeof tIndex === "number",
                    tEdit = bEdit ? $SS.conf["Themes"][tIndex] : null,
                    error = false,
                    div;

                if (!exp && bEdit && !tEdit.modified)
                    return overlay.remove();

                $("input[type=text],textarea", overlay).each(function() {
                    var val;

                    if (this.name === "bgImg") {
                        var b64 = $("input[name=customIMGB64]", overlay);
                            val = b64.exists() ? decodeURIComponent(b64.val()) : this.value;

                        if (val !== "" && !$SS.validImageURL(val) && !$SS.validBase64(val)) {
                            error = true;
                            return alert("Not a valid image URL/base64!");
                        }

                        val = $SS.cleanBase64(val);

                    } else if (this.name === "name") {
                        val = this.value;

                        if (bEdit && tEdit.default && tEdit.name === val)
                            val += " [Modded]"
                    } else
                        val = this.value;

                    if (val !== "")
                        tTheme[this.name] = val;
                });

                if (error) return;

                if (tTheme.bgImg)
                    tTheme.bgRPA = makeRPA();

                if (exp) return tTheme;

                if (bEdit && !tEdit.default) {
                    $SS.conf["Themes"][tIndex] = tTheme;
                    tTheme = new $SS.Theme(tIndex);
                    div = $("#theme" + tIndex, $("#overlay"));

                    div.replace(tTheme.preview());
                } else {
                    tTheme.author = "You";
                    tIndex = $SS.conf["Themes"].push(tTheme);
                    tTheme = new $SS.Theme(--tIndex);
                    div = tTheme.preview();

                    $("#overlay #themes-section").append(div);
                }

                div.fire("click").scrollIntoView(true);

                $("#overlay").removeClass("previewing");
                return overlay.remove();
            },
            deleteTheme: function(tIndex) {
                if ($SS.conf["Themes"][tIndex].default && 
                    $SS.conf["Hidden Themes"].push(tIndex) === 1)
                    $("#themes-section a[name=restoreThemes]").show();

                return $SS.conf["Themes"][tIndex].default ?
                    $("#theme" + tIndex).removeClass("selected").hide() : $("#theme" + tIndex).remove();
            },
            showMascot: function(mIndex) {
                var div, overlay, preview;

                if (typeof mIndex === "number")
                    var bEdit = true,
                        mEdit = $SS.conf["Mascots"][mIndex];

                if (bEdit && $SS.validImageURL(mEdit.img)) {
                    preview = $("<div id=mascotprev>").html((bEdit && ($SS.validImageURL(mEdit.img)) ? "<img src='" + mEdit.img + "' " +
                        "style='width: " + (mEdit.width !== undefined ? mEdit.width : "auto") + " !important; height: " + (mEdit.height !== undefined ? mEdit.height : "auto") + " !important; margin-bottom: " + (mEdit.offset !== undefined ? mEdit.offset : 0) + "px !important; margin-" + ($SS.conf["Sidebar Position"] === 2 ? "left" : "right") + ": " + (mEdit.hoffset !== undefined ? mEdit.hoffset : 0) + "px !important;" + (bEdit && (mEdit.flip && mEdit.flip !== undefined) ? "transform: scaleX(-1); -webkit-transform: scaleX(-1);" : "") + "'>" : ""));
                } else if (bEdit && $SS.validBase64(mEdit.img)) {
                    preview = $("<div id=mascotprev>").html((bEdit && ($SS.validBase64(mEdit.img)) ? "<img src='data:image/png;base64," + mEdit.img + "' " +
                        "style='width: " + (mEdit.width !== undefined ? mEdit.width : "auto") + " !important; height: " + (mEdit.height !== undefined ? mEdit.height : "auto") + " !important; margin-bottom: " + (mEdit.offset !== undefined ? mEdit.offset : 0) + "px !important; margin-" + ($SS.conf["Sidebar Position"] === 2 ? "left" : "right") + ": " + (mEdit.hoffset !== undefined ? mEdit.hoffset : 0) + "px !important;" + (bEdit && (mEdit.flip && mEdit.flip !== undefined) ? "transform: scaleX(-1); -webkit-transform: scaleX(-1);" : "") + "'>" : ""));
                };

                div = $("<div id='add-mascot' class='dialog'>").html("<label class='add-mascot-label' title='Set the name of the mascot'><span class='option-title'>Mascot Name:</span>" +
                    "<input class='mascot-input mascot-name' type=text name=mName value='" + (bEdit && mEdit.name !== undefined ? mEdit.name : "Chinese Girl Cartoon") + "'></label>" +
                    "<label class='add-mascot-label'><span class='option-title' title='URL of the mascot. HTTPS links are recommended.'>Image URL:</span><input class='mascot-input image' type=text name=customIMG value='" +
                    (bEdit ? ($SS.validImageURL(mEdit.img) || $SS.validBase64(mEdit.img) ? mEdit.img + "'" : "'") : "'") +
                    "></label>" +
                    "<label class='add-mascot-label' title='Set the height. Use auto for the full size.'><span class='option-title'>Height:</span>" +
                    "<input class='mascot-input height' type=text name=mHeight value='" + (bEdit && mEdit.height !== undefined ? mEdit.height : "auto") + "'></label>" +
                    "<label class='add-mascot-label' title='Set the width. Use 300px to fit to sidebar, or auto for the full size.'><span class='option-title'>Width:</span>" +
                    "<input class='mascot-input width' type=text name=mWidth value='" + (bEdit && mEdit.width !== undefined ? mEdit.width : "auto") + "'></label>" +
                    "<label class='add-mascot-label' title='Set the vertical offset. A negative number will push the image down.'><span class='option-title'>Vertical Offset:</span>" +
                    "<input class='mascot-input offset' type=text name=mOffset value='" + (bEdit && mEdit.offset !== undefined ? mEdit.offset : 0) + "px'></label>" +
                    "<label class='add-mascot-label' title='Set the horizontal offset. A positive number will push the image away from the side.'><span class='option-title'>Horizontal Offset:</span>" +
                    "<input class='mascot-input hoffset' type=text name=mHOffset value='" + (bEdit && mEdit.hoffset !== undefined ? mEdit.hoffset : 0) + "px'></label>" +
                    "<label class='add-mascot-label' title='Flip the mascot image horizontally'><span class='option-title'>Flip Image:</span>" +
                    "<input type=checkbox name=mFlip" + (bEdit && (mEdit.flip && mEdit.flip !== undefined) ? " checked" : "") + "></label>" +
                    "<label class='add-mascot-label' title='List of boards to display this mascot on, seperated by commas. Example: a,c,g,v,jp'><span class='option-title'>Boards:</span>" +
                    "<input class='mascot-input mascot-boards' type=text name=mBoards placeholder='Example: a,c,g,v,jp' value='" + (bEdit && mEdit.boards ? mEdit.boards : "") + "'></label>" +
                    "<div id='mascot-buttons-container'>" +
                    "<a class=options-button name=apply " + (bEdit ? "" : "hidden") + " title='Save and Preview'>Apply</a><a class='options-button' name=" + (bEdit ? "edit" : "add") + " title='Save and Close'>Save</a><a class='options-button' name=cancel title='Cancel'>Cancel</a></div></div>");

                overlay = $("<div id=overlay2>");
                $("input[type=checkbox]", div).riceCheck();

                if (bEdit) {
                    $("a[name=edit]", div).bind("click", function() {
                        $SS.options.addMascot(mIndex);
                    });
                    $("a[name=apply]", div).bind("click", function() {
                        $SS.options.editMascot(mIndex);
                    });
                    $(document.body).append(preview);
                    $("#overlay").addClass("previewing");
                    $("#mascot").addClass("previewing");
                } else
                    $("a[name=add]", div).bind("click", $SS.options.addMascot);

                $("a[name=cancel]", div).bind("click", function() {
                    div.remove();
                    overlay.remove();
                    preview.remove();
                    $("#mascot").removeClass("previewing");
                    $("#overlay").removeClass("previewing");
                });

                $(document.body).append(div);
                $(document.body).append(overlay);
            },
            addMascot: function(mIndex) {
                var overlay = $("#overlay2"),
                    mascotAdd = $("#add-mascot"),
                    preview = $("#mascotprev"),
                    bSetPos, cIMG, cOffset, cHOffset, cName, cWidth, cHeight, cFlip, tMascot, bDefault;

                cIMG     = decodeURIComponent($("input[name=customIMGB64]", mascotAdd).val() || $("input[name=customIMG]", mascotAdd).val());
                cOffset  = parseInt($("input[name=mOffset]", mascotAdd).val());
                cHOffset = parseInt($("input[name=mHOffset]", mascotAdd).val());
                cName    = $("input[name=mName]", mascotAdd).val();
                cFlip    = $("input[name=mFlip]", mascotAdd).val();
                cWidth   = $("input[name=mWidth]", mascotAdd).val();
                cHeight  = $("input[name=mHeight]", mascotAdd).val();
                cBoards  = $("input[name=mBoards]", mascotAdd).val();

                if (!$SS.validImageURL(cIMG) && !$SS.validBase64(cIMG))
                    return alert("Not a valid image URL/base64!");

                cIMG     = $SS.cleanBase64(cIMG);
                bDefault = $SS.conf["Mascots"][mIndex] != undefined && $SS.conf["Mascots"][mIndex].default;

                if (typeof mIndex === "number" && !bDefault) {
                    $SS.conf["Mascots"][mIndex].img = cIMG;
                    $SS.conf["Mascots"][mIndex].flip = cFlip;

                    if (cBoards !== "")
                        $SS.conf["Mascots"][mIndex].boards = cBoards;
                    else
                        delete $SS.conf["Mascots"][mIndex].boards;

                    $SS.conf["Mascots"][mIndex].offset = cOffset;
                    $SS.conf["Mascots"][mIndex].hoffset = cHOffset;
                    $SS.conf["Mascots"][mIndex].name = cName;
                    $SS.conf["Mascots"][mIndex].width = cWidth;
                    $SS.conf["Mascots"][mIndex].height = cHeight;

                    tMascot = new $SS.Image(cIMG);
                    $("#mascot" + mIndex).attr("style", "background: url('" + tMascot.get() + "')");
                } else {
                    var tMascot = {
                        img: cIMG,
                        flip: cFlip,
                        boards: (cBoards === "" ? undefined : cBoards)
                    };

                    tMascot.offset = cOffset;
                    tMascot.hoffset = cHOffset;
                    tMascot.name = cName;
                    tMascot.width = cWidth;
                    tMascot.height = cHeight;

                    if (bDefault)
                        $SS.options.deleteMascot(mIndex);

                    mIndex = $SS.conf["Mascots"].push(tMascot);
                    tMascot = new $SS.Mascot(--mIndex).preview();
                    $("#mascot-section").append(tMascot);
                    tMascot.fire("click").scrollIntoView(true);
                }

                $("#overlay").removeClass("previewing");
                $("#mascot").removeClass("previewing");

                preview.remove();
                mascotAdd.remove();
                return overlay.remove();
            },
            editMascot: function(mIndex) {
                var overlay = $("#overlay2"),
                    mascotAdd = $("#add-mascot"),
                    preview = $("#mascotprev"),
                    bSetPos, cIMG, cOffset, cHOffset, cName, cWidth, cHeight, cFlip, tMascot, bDefault;

                cIMG     = decodeURIComponent($("input[name=customIMGB64]", mascotAdd).val() || $("input[name=customIMG]", mascotAdd).val());
                cOffset  = parseInt($("input[name=mOffset]", mascotAdd).val());
                cHOffset = parseInt($("input[name=mHOffset]", mascotAdd).val());
                cName    = $("input[name=mName]", mascotAdd).val();
                cFlip    = $("input[name=mFlip]", mascotAdd).val();
                cWidth   = $("input[name=mWidth]", mascotAdd).val();
                cHeight  = $("input[name=mHeight]", mascotAdd).val();
                cBoards  = $("input[name=mBoards]", mascotAdd).val();

                if (!$SS.validImageURL(cIMG) && !$SS.validBase64(cIMG))
                    return alert("Not a valid image URL/base64!");

                bDefault = $SS.conf["Mascots"][mIndex] != undefined && $SS.conf["Mascots"][mIndex];

                if (typeof mIndex === "number" && !bDefault) {
                    $SS.conf["Mascots"][mIndex].img = cIMG;
                    $SS.conf["Mascots"][mIndex].flip = cFlip;

                    if (cBoards !== "")
                        $SS.conf["Mascots"][mIndex].boards = cBoards;
                    else
                        delete $SS.conf["Mascots"][mIndex].boards;

                    $SS.conf["Mascots"][mIndex].offset = cOffset;
                    $SS.conf["Mascots"][mIndex].hoffset = cHOffset;
                    $SS.conf["Mascots"][mIndex].name = cName;
                    $SS.conf["Mascots"][mIndex].width = cWidth;
                    $SS.conf["Mascots"][mIndex].height = cHeight;

                    tMascot = new $SS.Image(cIMG);
                    $("#mascot" + mIndex).attr("style", "background: url('" + tMascot.get() + "')");
                } else {
                    var tMascot = {
                        img: cIMG,
                        flip: cFlip,
                        boards: (cBoards === "" ? undefined : cBoards)
                    };

                    tMascot.offset = cOffset;
                    tMascot.hoffset = cHOffset;
                    tMascot.name = cName;
                    tMascot.width = cWidth;
                    tMascot.height = cHeight;

                    if (bDefault)
                        $SS.options.deleteMascot(mIndex);

                    mIndex = $SS.conf["Mascots"].push(tMascot);
                    tMascot = new $SS.Mascot(--mIndex).preview();
                    $("#mascot-section").append(tMascot);
                    tMascot.fire("click").scrollIntoView(true);
                }

                preview.remove();
                mascotAdd.remove();
                overlay.remove();

                return $SS.options.showMascot($SS.conf["Mascots"].length - 1);
            },
            deleteMascot: function(mIndex) {
                if ($SS.conf["Mascots"][mIndex].default &&
                    $SS.conf["Hidden Mascots"].push(mIndex) === 1)
                    $("#mascot-section a[name=restoreMascots]").show();

                return $SS.conf["Mascots"][mIndex].default ?
                    $("#mascot" + mIndex).removeClass("selected").hide() : $("#mascot" + mIndex).remove();
            }
        },

        /* THEMES */
        Themes: {
            defaults: [{
                name: "Vimyanized Dark",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "090d0f",
                mainColor: "0d1114",
                brderColor: "0b1316",
                inputColor: "090d0f",
                inputbColor: "0d1114",
                blinkColor: "4797cc",
                unreadColor: "4270b2",
                linkColor: "53bdb1",
                linkHColor: "3090b5",
                qlColor: "53bdb1",
                nameColor: "d63e34",
                quoteColor: "96c83b",
                textColor: "f8f8f8",
                tripColor: "d4b63c",
                titleColor: "b88cd1",
                headerColor: "f8f8f8",
                headerLColor: "53bdb1",
                headerLHColor: "3090b5",
                headerBGColor: "0d1114",
                boardColor: "f8f8f8",
                postHLColor: "d4b63c",
                quotesYouHLColor: "d4b63c",
                ownPostHLColor: "d4b63c",
                threadHLColor: "b88cd1",
                replybgHLColor: "090d10",
                replyslctColor: "d4b63c"
            }, {
                name: "Muted",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "ffffff",
                mainColor: "f5f2e9",
                brderColor: "dddddd",
                inputColor: "ffffff",
                inputbColor: "dddddd",
                blinkColor: "bc312a",
                unreadColor: "bc312a",
                linkColor: "bc312a",
                linkHColor: "8e2220",
                qlColor: "bc312a",
                nameColor: "2c64a0",
                quoteColor: "789922",
                textColor: "393735",
                tripColor: "cc6563",
                titleColor: "111111",
                headerColor: "393735",
                headerLColor: "bc312a",
                headerLHColor: "8e2220",
                headerBGColor: "f5f2e9",
                boardColor: "bc312a",
                postHLColor: "cc6563",
                quotesYouHLColor: "2c64a0",
                ownPostHLColor: "cc6563",
                threadHLColor: "111111",
                replybgHLColor: "d9d6cd",
                replyslctColor: "cc6563"
            }, {
                name: "Surf", //Inspired by Blue Tone
                authorName: "Nebukazar",
                authorTrip: "!/Am.NeBUqQ",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "1.0",
                mainColor: "242424",
                brderColor: "242424",
                inputColor: "1b1b1b",
                inputbColor: "252525",
                headerBGColor: "242424",
                headerColor: "ffffff",
                boardColor: "ffffff",
                bgColor: "1b1b1b",
                textColor: "ffffff",
                blinkColor: "20548f",
                headerLColor: "20548f",
                headerLHColor: "ffffff",
                linkColor: "808080",
                linkHColor: "ffffff",
                qlColor: "808080",
                nameColor: "20548f",
                tripColor: "808080",
                titleColor: "808080",
                quoteColor: "07992d",
                unreadColor: "ffffff",
                postHLColor: "292929",
                quotesYouHLColor: "ffffff",
                ownPostHLColor: "ffffff",
                threadHLColor: "808080",
                replybgHLColor: "121212",
                replyslctColor: "ffffff"
            }, {
                name: "Stilig",
                authorName: "Myson",
                authorTrip: "!RiDeag.gG.",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "ffffff",
                brderColor: "ebebeb",
                inputColor: "ffffff",
                inputbColor: "dedede",
                headerBGColor: "3d444e",
                headerColor: "ffffff",
                boardColor: "999999",
                bgColor: "f2f2f2",
                textColor: "717171",
                blinkColor: "999999",
                unreadColor: "999999",
                headerLColor: "babcbe",
                headerLHColor: "999999",
                linkColor: "999999",
                linkHColor: "5f5f65",
                qlColor: "999999",
                nameColor: "49637d",
                tripColor: "5f5f65",
                titleColor: "7a7f88",
                quoteColor: "009933",
                postHLColor: "5f5f65",
                quotesYouHLColor: "ff4a3e",
                ownPostHLColor: "5f5f65",
                threadHLColor: "7a7f88",
                replybgHLColor: "e6e6e6",
                replyslctColor: "5f5f65",
                customCSS: ".reply {box-shadow: -1px 1px 1px rgba(0,0,0,.08);}"
            }, {
                name: "Minimalistic Mayhem",
                authorName: "Mayhem",
                authorTrip: "!MayhemxaEo",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "191919",
                mainColor: "222222",
                brderColor: "292929",
                inputColor: "222222",
                inputbColor: "151515",
                blinkColor: "897399",
                unreadColor: "897399",
                linkColor: "897399",
                linkHColor: "c617e6",
                qlColor: "897399",
                nameColor: "a34443",
                quoteColor: "8ba446",
                textColor: "bbbbbb",
                tripColor: "96562c",
                titleColor: "987d3e",
                headerColor: "bbbbbb",
                headerLColor: "897399",
                headerLHColor: "c617e6",
                headerBGColor: "222222",
                boardColor: "bbbbbb",
                postHLColor: "96562c",
                quotesYouHLColor: "96562c",
                ownPostHLColor: "96562c",
                threadHLColor: "987d3e",
                replybgHLColor: "141414",
                replyslctColor: "96562c"
            }, {
                name: "Blackboard",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "0a0d1c",
                mainColor: "0c1021",
                brderColor: "0e1228",
                inputColor: "0c1021",
                inputbColor: "080b16",
                blinkColor: "54b12e",
                unreadColor: "8da6ce",
                linkColor: "fbde2d",
                linkHColor: "4b65cc",
                qlColor: "fbde2d",
                nameColor: "8da6ce",
                quoteColor: "9acf08",
                textColor: "f8f8f8",
                tripColor: "ff6400",
                titleColor: "ff6400",
                headerColor: "f8f8f8",
                headerLColor: "fbde2d",
                headerLHColor: "4b65cc",
                headerBGColor: "0c1021",
                boardColor: "f8f8f8",
                postHLColor: "ff6400",
                quotesYouHLColor: "ff6400",
                ownPostHLColor: "ff6400",
                threadHLColor: "ff6400",
                replybgHLColor: "080c1d",
                replyslctColor: "ff6400"
            }, {
                name: "Dark Flat",
                authorName: "ahodesuka",
                authorTrip: "!.pC/AHOKAg",
                "default": true,
                bgImg: "R0lGODlhAwADAIAAAB0dHRkZGSH5BADoAwAALAAAAAADAAMAAAIDDG5YADs=",
                bgRPA: "repeat top left fixed",
                replyOp: "1.0",
                navOp: "0.9",
                bgRPA: "repeat top left fixed",
                bgColor: "1C1D1E",
                mainColor: "232425",
                brderColor: "292a2b",
                inputColor: "18191a",
                inputbColor: "121314",
                blinkColor: "6f99b4",
                unreadColor: "ac9bb0",
                linkColor: "ac9bb0",
                linkHColor: "6f99b4",
                qlColor: "ac9bb0",
                nameColor: "a8c6d9",
                quoteColor: "b3c45e",
                textColor: "dddddd",
                tripColor: "d4c095",
                titleColor: "9390c9",
                headerColor: "dddddd",
                headerLColor: "ac9bb0",
                headerLHColor: "6f99b4",
                headerBGColor: "232425",
                boardColor: "dddddd",
                postHLColor: "d4c095",
                quotesYouHLColor: "d4c095",
                ownPostHLColor: "d4c095",
                threadHLColor: "9390c9",
                replybgHLColor: "171919",
                replyslctColor: "d4c095"
            }, {
                name: "Yukimura",
                authorName: "the real",
                authorTrip: "!eKISSUy3/c",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "1b1b1b",
                brderColor: "191919",
                inputColor: "1b1b1b",
                inputbColor: "1b1b1b",
                headerBGColor: "1b1b1b",
                headerColor: "e3c2b3",
                boardColor: "e3c2b3",
                bgColor: "171717",
                textColor: "e3c2b3",
                blinkColor: "5c433c",
                headerLColor: "e96a81",
                headerLHColor: "e96a81",
                linkColor: "e96a81",
                linkHColor: "e96a81",
                qlColor: "e96a81",
                nameColor: "e96a81",
                tripColor: "5c433c",
                titleColor: "5c433c",
                quoteColor: "b3c45e",
                unreadColor: "5c433c",
                postHLColor: "5c433c",
                quotesYouHLColor: "d63e34",
                ownPostHLColor: "5c433c",
                threadHLColor: "5c433c",
                replybgHLColor: "0d0d0d",
                replyslctColor: "5c433c"
            }, {
                name: "Photons + Odin",
                authorName: "John",
                authorTrip: "!Hu6tDS8lls",
                "default": true, 
                bgImg: "R0lGODlhAwADAIAAAB0dHRkZGSH5BADoAwAALAAAAAADAAMAAAIDDG5YADs=",
                bgRPA: "repeat top left fixed",
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "1a1a1a",
                brderColor: "1f1f1f",
                inputColor: "18191a",
                inputbColor: "121314",
                headerBGColor: "1a1a1a",
                headerColor: "dddddd",
                boardColor: "dddddd",
                bgColor: "202020",
                textColor: "dddddd",
                blinkColor: "c72d41",
                headerLColor: "737f88",
                headerLHColor: "4f585d",
                linkColor: "737f88",
                linkHColor: "4f585d",
                qlColor: "737f88",
                nameColor: "0099bc",
                tripColor: "ff0085",
                titleColor: "ffa600",
                quoteColor: "85c600",
                unreadColor: "446a6d",
                postHLColor: "ff0085",
                quotesYouHLColor: "ff0085",
                ownPostHLColor: "ff0085",
                threadHLColor: "ffa600",
                replybgHLColor: "0d0d0d",
                replyslctColor: "ff0085"
            }, {
                name: "Photon",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "eeeeee",
                mainColor: "dddddd",
                brderColor: "c4c4c4",
                inputColor: "ffffff",
                inputbColor: "cccccc",
                blinkColor: "111111",
                unreadColor: "ff6600",
                linkColor: "ff6600",
                linkHColor: "ff3300",
                qlColor: "ff6600",
                nameColor: "004a99",
                quoteColor: "789922",
                textColor: "333333",
                tripColor: "ff3300",
                titleColor: "002244",
                headerColor: "333333",
                headerLColor: "ff6600",
                headerLHColor: "ff3300",
                headerBGColor: "dddddd",
                boardColor: "004a99",
                postHLColor: "ff3300",
                quotesYouHLColor: "004a99",
                ownPostHLColor: "ff3300",
                threadHLColor: "002244",
                replybgHLColor: "c4c4c4",
                replyslctColor: "ff3300"
            }, {
                name: "Original Minimalistic Mayhem",
                authorName: "Mayhem",
                authorTrip: "!MayhemxaEo",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "191919",
                mainColor: "333333",
                brderColor: "111111",
                inputColor: "222222",
                inputbColor: "151515",
                blinkColor: "559c7a",
                unreadColor: "559c7a",
                linkColor: "559c7a",
                linkHColor: "c7de1a",
                qlColor: "559c7a",
                nameColor: "2e88a6",
                quoteColor: "8ba446",
                textColor: "dddddd",
                tripColor: "8c5d2a",
                titleColor: "486273",
                headerColor: "dddddd",
                headerLColor: "559c7a",
                headerLHColor: "c7de1a",
                headerBGColor: "333333",
                boardColor: "dddddd",
                postHLColor: "8c5d2a",
                quotesYouHLColor: "8c5d2a",
                ownPostHLColor: "8c5d2a",
                threadHLColor: "486273",
                replybgHLColor: "25262a",
                replyslctColor: "8c5d2a"
            }, {
                name: "Tomorrow",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "1d1f21",
                mainColor: "282a2e",
                brderColor: "373b41",
                inputColor: "282a2e",
                inputbColor: "1d1f21",
                blinkColor: "5f89ac",
                unreadColor: "81a2be",
                linkColor: "81a2be",
                linkHColor: "cc6666",
                qlColor: "81a2be",
                nameColor: "81a2be",
                quoteColor: "b5bd68",
                textColor: "c5c8c6",
                tripColor: "8abeb7",
                titleColor: "b294bb",
                headerColor: "c5c8c6",
                headerLColor: "81a2be",
                headerLHColor: "cc6666",
                headerBGColor: "282a2e",
                boardColor: "c5c8c6",
                postHLColor: "8abeb7",
                quotesYouHLColor: "8abeb7",
                ownPostHLColor: "8abeb7",
                threadHLColor: "b294bb",
                replybgHLColor: "24262a",
                replyslctColor: "8abeb7",
                customCSS: "span.postNum.desktop > a {\ncolor: #c5c8c6 !important\n}\nspan.postNum.desktop > a:hover {\ncolor: #81a2be !important\n}"
            }, {
                name: "Yotsuba",
                authorName: "moot",
                authorTrip: "!Εр8рui8Vw2",
                "default": true,
                bgImg: "iVBORw0KGgoAAAANSUhEUgAAAAEAAADICAIAAACmkByiAAAAWElEQVR4AaWSwQ3AIAwDbfbfpdt0nKrPUp3QCfHgkfjsCMh47mskmU5HGvbmuuh9dVce8M4it/SfMZglGeZx/ccyu/Vsv4/N29f331AY5Bi3+hdo4A92+wXvCwR9mXztrAAAAABJRU5ErkJggg==",
                bgRPA: "repeat-x top center scroll",
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "ffffee",
                mainColor: "f0e0d6",
                brderColor: "d9bFb7",
                inputColor: "ffffff",
                inputbColor: "aaaaaa",
                blinkColor: "800000",
                unreadColor: "000080",
                linkColor: "0000ee",
                linkHColor: "dd0000",
                qlColor: "000080",
                nameColor: "117743",
                quoteColor: "789922",
                textColor: "800000",
                tripColor: "228854",
                titleColor: "cc1105",
                headerColor: "800000",
                headerLColor: "800000",
                headerLHColor: "dd0000",
                headerBGColor: "f0e0d6",
                boardColor: "800000",
                postHLColor: "228854",
                quotesYouHLColor: "dd0000",
                ownPostHLColor: "228854",
                threadHLColor: "dd0000",
                replybgHLColor: "d6bad0",
                replyslctColor: "228854",
                customCSS: "span.postNum.desktop > a {\ncolor: #800000 !important\n}\nspan.postNum.desktop > a:hover {\ncolor: #dd0000 !important\n}\n.menu-button {\ncolor: #800000 !important\n}"
            }, {
                name: "Yotsuba B",
                authorName: "moot",
                authorTrip: "!Εр8рui8Vw2",
                "default": true,
                bgImg: "iVBORw0KGgoAAAANSUhEUgAAAAEAAADICAIAAACmkByiAAAASUlEQVR4AcWRuQ0AIBDDzuy/HAVrMAM9slCorqAJziNgrj2qSg/cGhHnjPqDDPxOfYiebwFj+XobeLGI7p39fW1/Ib58d55Bwh3x9wRv6r75UwAAAABJRU5ErkJggg==",
                bgRPA: "repeat-x top center scroll",
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "eef2ff",
                mainColor: "d6daf0",
                brderColor: "b7c5d9",
                inputColor: "ffffff",
                inputbColor: "aaaaaa",
                blinkColor: "34345c",
                unreadColor: "34345C",
                linkColor: "34345c",
                linkHColor: "dd0000",
                qlColor: "dd0000",
                nameColor: "117743",
                quoteColor: "789922",
                textColor: "000000",
                tripColor: "228854",
                titleColor: "0f0c5d",
                headerColor: "34345c",
                headerLColor: "34345c",
                headerLHColor: "dd0000",
                headerBGColor: "d6daf0",
                boardColor: "af0a0f",
                postHLColor: "228854",
                quotesYouHLColor: "228854",
                ownPostHLColor: "228854",
                threadHLColor: "dd0000",
                replybgHLColor: "d6bad0",
                replyslctColor: "228854",
                customCSS: "span.postNum.desktop > a {\ncolor: #000000 !important\n}\nspan.postNum.desktop > a:hover {\ncolor: #dd0000 !important\n}"
            }, {
                name: "Yotsuba Purple",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "f8f3fe",
                mainColor: "eeddff",
                brderColor: "cab7d9",
                inputColor: "ffffff",
                inputbColor: "cab7d9",
                blinkColor: "000000",
                unreadColor: "962594",
                linkColor: "962594",
                linkHColor: "b22caa",
                qlColor: "b22caa",
                nameColor: "591177",
                quoteColor: "789922",
                textColor: "000000",
                tripColor: "b22caa",
                titleColor: "0f0c5d",
                headerColor: "000000",
                headerLColor: "962594",
                headerLHColor: "b22caa",
                headerBGColor: "eeddff",
                boardColor: "591177",
                postHLColor: "b22caa",
                quotesYouHLColor: "d63e34",
                ownPostHLColor: "b22caa",
                threadHLColor: "0f0c5d",
                replybgHLColor: "b7aac4",
                replyslctColor: "b22caa"
            }, {
                name: "安心院なじみ",
                authorName: "ahodesuka",
                authorTrip: "!.pC/AHOKAg",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "ffffff",
                mainColor: "efefef",
                brderColor: "d6d6d6",
                inputColor: "cccccc",
                inputbColor: "bbbbbb",
                blinkColor: "f5871f",
                unreadColor: "bf8040",
                linkColor: "bf8040",
                linkHColor: "bf8040",
                qlColor: "bf8040",
                nameColor: "2b80c2",
                quoteColor: "718c00",
                textColor: "4d4d4c",
                tripColor: "3e999f",
                titleColor: "4d4d4d",
                headerColor: "4d4d4c",
                headerLColor: "bf8040",
                headerLHColor: "bf8040",
                headerBGColor: "efefef",
                boardColor: "4d4d4c",
                postHLColor: "3e999f",
                quotesYouHLColor: "3e999f",
                ownPostHLColor: "3e999f",
                threadHLColor: "4d4d4d",
                replybgHLColor: "c7c7c7",
                replyslctColor: "3e999f"
            }, {
                name: "Solarized Dark", // http://ethanschoonover.com/solarized
                authorName: "ubuntufriend",
                authorTrip: "!UbuntuBReY!!iizPaxgtRk3",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "073642",
                mainColor: "032b36",
                brderColor: "133942",
                inputColor: "073642",
                inputbColor: "0d272e",
                blinkColor: "4f5f8f",
                unreadColor: "696fc0",
                linkColor: "696bba",
                linkHColor: "d33682",
                qlColor: "696bba",
                nameColor: "586e75",
                quoteColor: "859900",
                textColor: "93a1a1",
                tripColor: "2aa198",
                titleColor: "bec2c4",
                headerColor: "93a1a1",
                headerLColor: "696bba",
                headerLHColor: "d33682",
                headerBGColor: "032b36",
                boardColor: "93a1a1",
                postHLColor: "2aa198",
                quotesYouHLColor: "2aa198",
                ownPostHLColor: "2aa198",
                threadHLColor: "bec2c4",
                replybgHLColor: "073642",
                replyslctColor: "2aa198"
            }, {
                name: "4chan Rewired Modded", // Originally by !K.WeEabo0o, modded by ahoka
                authorName: "ahodesuka",
                authorTrip: "!.pC/AHOKAg",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "f4f4f4",
                mainColor: "efefef",
                brderColor: "d4d4d4",
                inputColor: "e4e4e4",
                inputbColor: "cccccc",
                blinkColor: "bf7f3f",
                unreadColor: "bf7f3f",
                linkColor: "bf7f3f",
                linkHColor: "d33682",
                nameColor: "4c4c4c",
                quoteColor: "6b7a1e",
                textColor: "4c4c4c",
                tripColor: "bf7f3f",
                titleColor: "4c4c4c",
                headerColor: "4c4c4c",
                headerLColor: "bf7f3f",
                headerLHColor: "d33682",
                headerBGColor: "efefef",
                boardColor: "4c4c4c",
                postHLColor: "bf7f3f",
                quotesYouHLColor: "d63e34",
                ownPostHLColor: "bf7f3f",
                threadHLColor: "4c4c4c",
                replybgHLColor: "c7c7c7",
                replyslctColor: "bf7f3f"
            }, {
                name: "4chan Dark Upgrade",
                authorName: "ahodesuka",
                authorTrip: "!.pC/AHOKAg",
                "default": true,
                bgImg: "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",
                bgRPA: "repeat top left fixed",
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "191919",
                mainColor: "303030",
                brderColor: "3a3a3a",
                inputColor: "2f2f2f",
                inputbColor: "0f0f0f",
                blinkColor: "cccccc",
                unreadColor: "cccccc",
                linkColor: "dddddd",
                linkHColor: "eeeeee",
                qlColor: "dddddd",
                nameColor: "ffffff",
                quoteColor: "63995b",
                textColor: "ffffff",
                tripColor: "a7dce7",
                titleColor: "999999",
                headerColor: "ffffff",
                headerLColor: "dddddd",
                headerLHColor: "eeeeee",
                headerBGColor: "333333",
                boardColor: "ffffff",
                postHLColor: "a7dce7",
                quotesYouHLColor: "a7dce7",
                ownPostHLColor: "a7dce7",
                threadHLColor: "999999",
                replybgHLColor: "999999",
                replyslctColor: "a7dce7",
                customCSS: "#delform {\nbackground:rgba(22,22,22,.8)!important;\nborder:0!important;\npadding:1px!important;\nbox-shadow:rgba(0,0,0,.8) 0 0 10px;\n}\ndiv.reply.post {\nbackground-image: url('data:image/gif;base64,R0lGODdhCQAJAIgAADMzMysrKywAAAAACQAJAAACDwxgeMrZF5Jckz1UXaYQFgA7') !important;\nborder-bottom: #1f1f1f !important;\n}\n.thread:not(.stub){\nbackground:0!important\n}\na:not([href='javascript:;']){\ntext-shadow:#0f0f0f 0 1px;\n}"
            }, {
                name: "Yasashii",
                authorName: "Nebukazar",
                authorTrip: "!/Am.NeBUqQ",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "f8f8f8",
                brderColor: "f8f8f8",
                inputColor: "f8f8f8",
                inputbColor: "be7375",
                headerBGColor: "a6586f",
                headerColor: "f8f8f8",
                boardColor: "a6586f",
                bgColor: "ebebeb",
                textColor: "5b5c5c",
                blinkColor: "656599",
                headerLColor: "ebebeb",
                headerLHColor: "656599",
                linkColor: "b78087",
                linkHColor: "c8ab78",
                qlColor: "b78087",
                nameColor: "be7375",
                tripColor: "656599",
                titleColor: "b87d6e",
                quoteColor: "7eba6c",
                unreadColor: "f8f8f8",
                postHLColor: "9875a3",
                quotesYouHLColor: "656599",
                ownPostHLColor: "9875a3",
                threadHLColor: "b87d6e",
                replybgHLColor: "eaeaea",
                replyslctColor: "9875a3"
            }, {
                name: "AppChan", // Originally by Zixaphir @ http://userstyles.org/styles/54149/appchan
                authorName: "Zixaphir",
                authorTrip: "!M.........",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "2c2c2c",
                mainColor: "333333",
                brderColor: "333333",
                inputColor: "333333",
                inputbColor: "2c2c2c",
                blinkColor: "4f5f8f",
                unreadColor: "6688aa",
                linkColor: "6688aa",
                linkHColor: "6688aa",
                qlColor: "6688aa",
                nameColor: "aaaaaa",
                quoteColor: "789922",
                textColor: "aaaaaa",
                tripColor: "aaaaaa",
                titleColor: "aaaaaa",
                headerColor: "aaaaaa",
                headerLColor: "6688aa",
                headerLHColor: "6688aa",
                headerBGColor: "333333",
                boardColor: "aaaaaa",
                postHLColor: "aaaaaa",
                quotesYouHLColor: "aaaaaa",
                ownPostHLColor: "aaaaaa",
                threadHLColor: "aaaaaa",
                replybgHLColor: "282828",
                replyslctColor: "aaaaaa"
            }, {
                name: "Zenburned",
                authorName: "lazy",
                authorTrip: "!HONKYn7h1.",
                "default": true,
                bgImg: false,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "3f3f3f",
                mainColor: "575757",
                brderColor: "5e5e5e",
                inputColor: "454545",
                inputbColor: "888888",
                blinkColor: "dca3a3",
                unreadColor: "93b3a3",
                linkColor: "efdcbc",
                linkHColor: "f8f893",
                qlColor: "efdcbc",
                nameColor: "c0bed1",
                quoteColor: "7f9f7f",
                textColor: "dcdccc",
                tripColor: "8cd0d3",
                titleColor: "aaaaaa",
                headerColor: "dcdccc",
                headerLColor: "efdcbc",
                headerLHColor: "f8f893",
                headerBGColor: "575757",
                boardColor: "dcdccc",
                postHLColor: "8cd0d3",
                quotesYouHLColor: "8cd0d3",
                ownPostHLColor: "8cd0d3",
                threadHLColor: "aaaaaa",
                replybgHLColor: "494949",
                replyslctColor: "8cd0d3"
            }, {
                name: "Monokai",
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "20211c",
                mainColor: "272822",
                brderColor: "2d2e27",
                inputColor: "20211c",
                inputbColor: "171713",
                blinkColor: "f92672",
                unreadColor: "e2db74",
                linkColor: "e2db74",
                linkHColor: "ae81ff",
                qlColor: "e2db74",
                nameColor: "5ac0cc",
                quoteColor: "a2cc28",
                textColor: "f8f8f2",
                tripColor: "fa8220",
                titleColor: "ae81ff",
                headerColor: "f8f8f2",
                headerLColor: "e2db74",
                headerLHColor: "ae81ff",
                headerBGColor: "272822",
                boardColor: "f8f8f2",
                postHLColor: "fa8220",
                quotesYouHLColor: "fa8220",
                ownPostHLColor: "fa8220",
                threadHLColor: "ae81ff",
                replybgHLColor: "23241e",
                replyslctColor: "fa8220"
            }, {
                name: "Ao ni sarasu", // based on jaygeegeegee's http://userstyles.org/styles/75602/last-fm-kind-of-blue
                authorName: "Seaweed",
                authorTrip: "!!lq+3fff+/ev",
                "default": true,
                replyOp: "1.0",
                navOp: "0.9",
                bgColor: "e9eced",
                mainColor: "e3e7e8",
                brderColor: "cccccc",
                inputColor: "e9eced",
                inputbColor: "cccccc",
                blinkColor: "477085",
                unreadColor: "477085",
                linkColor: "477085",
                linkHColor: "5d6678",
                qlColor: "477085",
                nameColor: "4c4c4c",
                quoteColor: "6b7a1e",
                textColor: "4c4c4c",
                tripColor: "5d6678",
                titleColor: "617d6f",
                headerColor: "4c4c4c",
                headerLColor: "477085",
                headerLHColor: "5d6678",
                headerBGColor: "e3e7e8",
                boardColor: "477085",
                postHLColor: "5d6678",
                quotesYouHLColor: "d63e34",
                ownPostHLColor: "5d6678",
                threadHLColor: "617d6f",
                replybgHLColor: "d5dada",
                replyslctColor: "5d6678"
            }, {
                name:"Blue Tone",
                authorName: "Leagle",
                authorTrip: "!YoGiiH6Oi.",
                "default": true,
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "222222",
                brderColor: "222222",
                inputColor: "18191a",
                inputbColor: "121314",
                headerBGColor: "1b1b1b",
                headerColor: "dddddd",
                boardColor: "dddddd",
                bgColor: "1b1b1b",
                textColor: "a0a0a0",
                blinkColor: "3296c8",
                headerLColor: "3296c8",
                headerLHColor: "dddddd",
                linkColor: "a0a0a0",
                linkHColor: "dddddd",
                qlColor: "3296c8",
                nameColor: "dddddd",
                tripColor: "dddddd",
                titleColor: "a0a0a0",
                quoteColor: "009933",
                unreadColor: "3296c8",
                postHLColor: "ffffff",
                quotesYouHLColor: "ffffff",
                ownPostHLColor: "ffffff",
                threadHLColor: "a0a0a0",
                replybgHLColor: "141414",
                replyslctColor: "ffffff",
                customCSS: "body{\nbackground: rgba(19,19,19,1);\n}\n.boardBanner .boardTitle {\ntext-shadow: 0 0 3px #a0a0a0 !important;\nletter-spacing: 0px !important;\npadding-top: 30px !important;\n}\n#delform {\n padding: 0px 2px !important;\n background: rgba(19,19,19,1);\n}"
            }, {
                name: "Cold Snap",
                authorName: "Kori",
                authorTrip: "!STRaW/KORI",
                "default": true,
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "fcfcfc",
                brderColor: "ebebeb",
                inputColor: "ffffff",
                inputbColor: "ffffff",
                headerBGColor: "ffffff",
                headerColor: "aaaaaa",
                boardColor: "6699cc",
                bgColor: "ffffff",
                textColor: "232323",
                blinkColor: "6699cc",
                headerLColor: "aaaaaa",
                headerLHColor: "6699cc",
                linkColor: "6699cc",
                linkHColor: "6699cc",
                qlColor: "6699cc",
                nameColor: "aaaaaa",
                tripColor: "476b8f",
                titleColor: "909090",
                quoteColor: "83bf57",
                unreadColor: "6699cc",
                postHLColor: "476b8f",
                quotesYouHLColor: "476b8f",
                ownPostHLColor: "476b8f",
                threadHLColor: "909090",
                replybgHLColor: "eeeeee",
                replyslctColor: "476b8f"
            }, {
                name: "Midnight Caek",
                authorName: "Zixaphir",
                authorTrip: "!M.........",
                "default": true,
                replyOp: "1.0",
                navOp: "0.9",
                mainColor: "1c1c1c",
                brderColor: "1c1c1c",
                inputColor: "1c1c1c",
                inputbColor: "1c1c1c",
                headerBGColor: "101010",
                headerColor: "909090",
                boardColor: "909090",
                bgColor: "101010",
                textColor: "909090",
                blinkColor: "424247",
                headerLColor: "909090",
                headerLHColor: "47475b",
                linkColor: "57577b",
                linkHColor: "47475b",
                qlColor: "57577b",
                nameColor: "7c2d2d",
                tripColor: "3e7157",
                titleColor: "aaaaaa",
                quoteColor: "71793e",
                unreadColor: "57577b",
                postHLColor: "ffffff",
                quotesYouHLColor: "7c2d2d",
                ownPostHLColor: "ffffff",
                threadHLColor: "aaaaaa",
                replybgHLColor: "0e0e0e",
                replyslctColor: "ffffff"
            }],

            init: function() {
                $SS.conf["Themes"] = Array.isArray($SS.conf["Themes"]) ?
                    this.defaults.concat($SS.conf["Themes"]) : this.defaults.slice(0);

                var i = $SS.location.nsfw ?
                    $SS.conf["NSFW Theme"] : $SS.conf["Selected Theme"],
                    tIndex = $SS.conf["Themes"][i] ? i : 0;

                $SS.theme = new $SS.Theme(tIndex); // Set the active theme.
            }
        },

        /* MASCOTS */
        Mascots: {
            defaults: [{
                img: "https://i.minus.com/izqpjDX9Z88Pk.png",
                "default": true,
                name: "Akaza Akari"
            }, {
                img: "https://i.minus.com/iIoEVlv6PpsZt.png",
                "default": true,
                name: "Akemi Homura"
            }, {
                img: "https://i.minus.com/iiEOIF7u05fIr.png",
                "default": true,
                name: "Akiyama Mio"
            }, {
                img: "https://i.minus.com/iboIUPbZAbNRiz.png",
                "default": true,
                name: "Ali Baba"
            }, {
                img: "https://i.minus.com/iEUQuwYOAisYj.png",
                "default": true,
                name: "Asuka Shikinami Langley"
            }, {
                img: "https://i.minus.com/iSZ06ZxrcqAKq.png",
                "default": true,
                name: "Cirno"
            }, {
                img: "https://i.minus.com/ibc2GhW4AW6tYy.png",
                "default": true,
                name: "Fubuki Atsuya"
            }, {
                img: "https://i.minus.com/ibhc1YdPCHjxb5.png",
                "default": true,
                name: "Gasai Yuno",
                height: "460px",
                hoffset: "40"
            }, {
                img: "https://i.minus.com/i9Evu9dyvok4G.png",
                "default": true,
                name: "Hatsune Miku"
            }, {
                img: "https://i.minus.com/idk1cr4HEhd9C.png",
                "default": true,
                name: "Hirasawa Yui"
            }, {
                img: "https://i.minus.com/icUNNyRQKumPz.png",
                "default": true,
                name: "Hitagi Senjougahara"
            }, {
                img: "https://i.minus.com/ibzqKJMq4z8Ket.png",
                "default": true,
                name: "Horo",
                hoffset: "20"
            }, {
                img: "https://i.minus.com/i7mSclzUH2SvV.png",
                "default": true,
                name: "Inga",
                width: "301px"
            }, {
                img: "https://i.minus.com/ioMltWNYUWeJ3.png",
                "default": true,
                name: "Iwakura Lain"
            }, {
                img: "https://i.minus.com/ihhgWi5dADZKx.png",
                "default": true,
                name: "Kagami Taiga"
            }, {
                img: "https://i.minus.com/ihT7VyaKy8vc9.png",
                "default": true,
                name: "Kaguya Houraisan",
                hoffset: "-40"
            }, {
                img: "https://i.minus.com/iben2goxAmh7aV.png",
                "default": true,
                name: "Kaname Madoka",
                hoffset: "25"
            }, {
                img: "https://i.minus.com/i7q6aOuUqqA9F.png",
                "default": true,
                name: "Kikuchi Makoto",
                hoffset: "20"
            }, {
                img: "https://i.minus.com/igbibpeTcWQIS.png",
                "default": true,
                name: "Kirino x Kariya",
                hoffset: "1"
            }, {
                img: "https://i7.minus.com/iRBpkeBt5JaS9.png",
                "default": true,
                name: "Kirisame Marisa"
            }, {
                img: "https://i.minus.com/ibjWUbaN1zNYpS.png",
                "default": true,
                name: "Kisaragi Chihaya",
                width: "306px"
            }, {
                img: "https://i2.minus.com/ikPgsoC0DBeuP.png",
                "default": true,
                name: "Kousaka Kirino"
            }, {
                img: "https://i.minus.com/isjF5qP3d2D9l.png",
                "default": true,
                name: "Kurisu Makise"
            }, {
                img: "https://i.minus.com/jyPdnejQOGn2E.png",
                "default": true,
                name: "Kuriyama Mirai",
            }, {
                img: "https://i.minus.com/iwp3zHABdUZn9.png",
                "default": true,
                name: "Kuroko no Basuke",
                hoffset: "25"
            }, {
                img: "https://i.minus.com/iMjBajUZWU1Hr.png",
                "default": true,
                name: "Kusanagi Motoko"
            }, {
                img: "https://i.minus.com/ibwkO6nLTS8aQW.png",
                "default": true,
                name: "Mashiro Shiina"
            }, {
                img: "https://i.minus.com/ibffmPDhETXdA3.png",
                "default": true,
                name: "Mayoi Hachikuji"
            }, {
                img: "https://i.minus.com/iHnv6bBdH3ElF.png",
                "default": true,
                name: "Megurine Luka"
            }, {
                img: "https://i5.minus.com/iDDCg5RKMKZvi.png",
                "default": true,
                name: "Mikasa Ackerman"
            }, {
                img: "https://i.minus.com/irUUuK1WcX8X8.png",
                "default": true,
                name: "Miyamoto Konatsu"
            }, {
                img: "https://i.minus.com/ieZPtyTynlwBK.png",
                "default": true,
                name: "Mokou",
                height: "450px"
            }, {
                img: "https://i.minus.com/ihc47WNDUvKIl.png",
                "default": true,
                name: "Morrigan Aensland",
                width: "300px"
            }, {
                img: "https://i.minus.com/ioWJ4fUbplPVt.png",
                "default": true,
                name: "Nagase Iori"
            }, {
                img: "https://i.minus.com/ibbIzKFszRwbP.png",
                "default": true,
                name: "Nagato Yuki",
                hoffset: "25"
            }, {
                img: "https://i.minus.com/ibq5GPuROVE41U.png",
                "default": true,
                name: "Nakano Azusa"
            }, {
                img: "https://i.minus.com/iBvqnYscczL3D.png",
                "default": true,
                name: "Patchouli Knowledge"
            }, {
                img: "https://i.minus.com/iZmUFk9hKgNGZ.png",
                "default": true,
                name: "Poko Fox"
            }, {
                img: "https://i.minus.com/ibv1F7XYxcFwt5.png",
                "default": true,
                name: "Purple Heart"
            }, {
                img: "https://i.minus.com/ibdeMvwnCdYqPX.png",
                "default": true,
                name: "Remilia Scarlet"
            }, {
                img: "https://i.minus.com/jb2Csry9nAEuKB.png",
                "default": true,
                name: "Rei Ayanami",
                width: "290px"
            }, {
                img: "https://i.minus.com/ibtZo1fdOk8NCB.png",
                "default": true,
                name: "Ruri Gokou",
                hoffset: "20"
            }, {
                img: "https://i.minus.com/ilYueyo9s91ex.png",
                "default": true,
                name: "Saber",
                height: "500px",
                hoffset: "25"
            }, {
                img: "https://i.minus.com/ibiMVDazHbvKg5.png",
                "default": true,
                name: "Saigyouji Yuyuko",
                width: "301px"
            }, {
                img: "https://i.minus.com/iASvr0zsZHBMm.png",
                "default": true,
                name: "Sakamoto-san",
                hoffset: "15"
            }, {
                img: "https://i.minus.com/izQNQ4akphZWn.png",
                "default": true,
                name: "Shana",
                hoffset: "25"
            }, {
                img: "https://i.minus.com/iSrVpiEk8XB7i.png",
                "default": true,
                name: "Solaire of Astora",
                height: "450px",
                hoffset: "50"
            }, {
                img: "https://i.minus.com/ibx465WCiRKMPD.png",
                "default": true,
                name: "Son Goku",
                width: "301px"
            }, {
                img: "https://i.minus.com/ir1jBydJsjYtX.png",
                "default": true,
                name: "Touwa Erio"
            }, {
                img: "https://i.minus.com/i2Fal4QJDcucB.png",
                "default": true,
                name: "Yin"
            }, {
                img: "https://i.minus.com/ibkuPHnJCOVF5y.png",
                "default": true,
                name: "Yoko Littner",
                height: "450px",
                hoffset: "25"
            }, {
                img: "https://i.minus.com/iboPx7pxI4QZcJ.png",
                "default": true,
                name: "Yukinoshita Yukino"
            }, {
                img: "https://i.minus.com/iGxFTTdgRFHPi.png",
                "default": true,
                name: "Yuuki Asuna"
            }, {
                img: "https://i.minus.com/i0v2fCxA6msfB.png",
                "default": true,
                name: "Yuzuki Yukari",
                hoffset: "10"
            }, {
                img: "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",
                "default": true,
                name: "Symbol 01",
                offset: "-20"
            }, {
                img: "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",
                "default": true,
                name: "Symbol 02"
            }, {
                img: "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",
                "default": true,
                name: "Symbol 03"
            }],

            init: function() {
                $SS.conf["Mascots"] = Array.isArray($SS.conf["Mascots"]) ?
                    this.defaults.concat($SS.conf["Mascots"]) : this.defaults.slice(0);

                var eMascot = [],
                    mIndex;

                if ($SS.conf["Selected Mascots"] === 0) {
                    eMascot = $SS.conf["Mascots"];
                    mIndex = Math.floor(Math.random() * eMascot.length);
                } else {
                    for (var i = 0, MAX = $SS.conf["Selected Mascots"].length, j; i < MAX; ++i) {
                        j = $SS.conf["Selected Mascots"][i];

                        if ($SS.conf["Mascots"][j].boards == undefined ||
                            $SS.conf["Mascots"][j].boards.split(",").indexOf($SS.location.board) !== -1)
                            eMascot.push(j);
                    }

                    if (eMascot.length === 0)
                        return $SS.mascot = new $SS.Mascot(-1);
                    else
                        mIndex = eMascot[Math.floor(Math.random() * eMascot.length)];
                }

                $SS.mascot = new $SS.Mascot(mIndex); // Set the active mascot.
            }
        },

        classes: {
            init: function() {
                /* Function arguments: ("Option Name", value, "class-name") */
                $("html").addClass("oneechan");
                $SS.theme.mainColor.isLight ? "" : $("html").addClass("isDark");
                $("html").optionClass("Fixed Thread Watcher", true, "fixed-watcher");
                $("html").optionClass("Underline QuoteLinks", true, "underline-quotes");
                $("html").optionClass("Underline All Links", false, "underline-disabled");
                $("html").optionClass("Style Thread Stats", true, "style-stats");
                $("html").optionClass("Rounded Corners", true, "rounded-corners");
                $("html").optionClass("Show Checkboxes", false, "hide-checkboxes");
                $("html").optionClass("Show Board Name", false, "hide-board-name");
                $("html").optionClass("Fit Width", true, "reply-fit-width");
                $("html").optionClass("Show Banner", false, "hide-banner");
                $("html").optionClass("Reduce Banner Opacity", true, "banner-opacity");
                $("html").optionClass("Show Post Info On Hover", true, "info-on-hover");
                $("html").optionClass("Show Reply to Thread Button", false, "hide-button");
                $("html").optionClass("Show Reply Header", true, "post-info");
                $("html").optionClass("Show File Info", false, "show-file-info");
                $("html").optionClass("Borders", 2, "borders-all");
                $("html").optionClass("Borders", 3, "borders-none");
                $("html").optionClass("Decoration Style", 1, "hl-border");
                $("html").optionClass("Decoration Style", 2, "hl-outline");
                $("html").optionClass("Decoration Style", 3, "hl-border-down");
                $("html").optionClass("Sidebar Position", 1, "right-sidebar");
                $("html").optionClass("Sidebar Position", 2, "left-sidebar");
                $("html").optionClass("Minimal Sidebar", true, "mini-sidebar");
                $("html").optionClass("Recolor Even Replies", true, "recolor-even");
                $("html").optionClass("Backlink Icons", true, "backlink-icon");
                $("html").optionClass("Backlinks on Bottom", true, "backlink-bottom");
                $("html").optionClass("Autohide Style", 2, "vertical-qr");
                $("html").optionClass("Autohide Style", 3, "fade-qr");
                $("html").optionClass("Transparent QR", true, "qr-opacity");
                $("html").optionClass("Remove Background", true, "qr-background");
                $("html").optionClass("Remove Controls", true, "qr-controls");
                $("html").optionClass("SS-like Sidebar", true, "ss-sidebar");
                $("html").optionClass("Indent OP", false, "force-indent");
                $("html").optionClass("Allow Wrapping Around OP", false, "force-wrapping");
                $("html").optionClass("Expanding Form Inputs", true, "expand-inputs");
                $("html").optionClass("Show Header Background Gradient", true, "header-gradient");
                $("html").optionClass("Show Header Shadow", false, "header-shadow");
                $("html").optionClass("Highlight Current Board", false, "header-highlight");
                $("html").optionClass("Show Blotter", false, "hide-blotter");
                $("html").optionClass("Show 4chan Ads", true, "show-ads");
                $("html").optionClass("Show Top Ad", false, "hide-top");
                $("html").optionClass("Show Middle Ad", false, "hide-middle");
                $("html").optionClass("Show Bottom Ad", false, "hide-bottom");
                $("html").optionClass("Show Navigation Links", false, "hide-navlinks");
                $("html").optionClass("Show Top Links", false, "hide-navlinktop");
                $("html").optionClass("Show Bottom Links", false, "hide-navlinkbot");
                $("html").optionClass("Show Previous/Next buttons", false, "hide-prevnext");
                $("html").optionClass("Reduce Ad Opacity", true, "ad-opacity");
                $("html").optionClass("Mascots Overlap Posts", false, "mascot-overlap");
                $("html").optionClass("Reduce Mascot Opacity", true, "mascot-opacity");
                $("html").optionClass("Grayscale Mascots", true, "mascot-grayscale");
                $("html").optionClass("Reduce Thumbnail Opacity", true, "thumb-opacity");
            }
        },

        pages: {
            hasInit: false,
            init: function() {
                if (this.hasInit) {
                    $("#pagesDrop").remove();
                    return this.hasInit = false;
                }
            }
        },
        riceInputs: {
            hasInit: false,
            init: function() {
                if (!this.hasInit) {
                    if ($SS.conf["Show Checkboxes"] && !$(".postInfo>.riceCheck").exists())
                        $("input[type=checkbox]").riceCheck();
                    return this.hasInit = true;
                } else if ($SS.conf["Show Checkboxes"] && $(".postInfo>.riceCheck").exists()) {
                    return this.hasInit = false;
                }
            }
        },
        jscolor: {
            getElementPos: function(e) {
                var e1 = e,
                    e2 = e;
                var x = 0,
                    y = 0;

                if (e1.offsetParent)
                    do {
                        x += e1.offsetLeft;
                        y += e1.offsetTop;
                    }
                    while (e1 = e1.offsetParent);

                while ((e2 = e2.parentNode) && e2.nodeName.toUpperCase() !== "BODY") {
                    x -= e2.scrollLeft;
                    y -= e2.scrollTop;
                }

                return [x, y];
            },
            getElementSize: function(e) {
                return [e.offsetWidth, e.offsetHeight];
            },
            getRelMousePos: function(e) {
                var x = 0,
                    y = 0;

                if (!e)
                    e = window.event;

                if (typeof e.offsetX === "number") {
                    x = e.offsetX;
                    y = e.offsetY;
                } else if (typeof e.layerX === "number") {
                    x = e.layerX;
                    y = e.layerY;
                }

                return {
                    x: x,
                    y: y
                };
            },
            getViewPos: function() {
                if (typeof window.pageYOffset === "number")
                    return [window.pageXOffset, window.pageYOffset];
                else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
                    return [document.body.scrollLeft, document.body.scrollTop];
                else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
                    return [document.documentElement.scrollLeft, document.documentElement.scrollTop];
                else
                    return [0, 0];
            },
            getViewSize: function() {
                if (typeof window.innerWidth === "number")
                    return [window.innerWidth, window.innerHeight];
                else if (document.body && (document.body.clientWidth || document.body.clientHeight))
                    return [document.body.clientWidth, document.body.clientHeight];
                else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight))
                    return [document.documentElement.clientWidth, document.documentElement.clientHeight];
                else
                    return [0, 0];
            },

            // TODO: remove this array.
            images: {
                pad: [181, 101],
                sld: [16, 101],
                cross: [15, 15],
                arrow: [7, 11]
            },

            color: function(target) {

                this.required = true; // refuse empty values?
                this.adjust = true; // adjust value to uniform notation?
                this.hash = false; // prefix color with # symbol?
                this.caps = false; // uppercase?
                this.slider = true; // show the value/saturation slider?
                this.valueElement = target; // value holder
                this.styleElement = target; // where to reflect current color
                this.onImmediateChange = null; // onchange callback (can be either string or function)
                this.hsv = [0, 0, 1]; // read-only  0-6, 0-1, 0-1
                this.rgb = [1, 1, 1]; // read-only  0-1, 0-1, 0-1

                this.pickerSmartPosition = true; // automatically adjust picker position when necessary
                this.pickerFace = 10; // px
                this.pickerFaceColor = "ThreeDFace"; // CSS color
                this.pickerBorder = 1; // px
                this.pickerBorderColor = "ThreeDHighlight ThreeDShadow ThreeDShadow ThreeDHighlight"; // CSS color
                this.pickerInset = 1; // px
                this.pickerInsetColor = "ThreeDShadow ThreeDHighlight ThreeDHighlight ThreeDShadow"; // CSS color
                this.pickerZIndex = 10000;

                this.hidePicker = function() {
                    if (isPickerOwner())
                        removePicker();
                };
                this.showPicker = function() {
                    if (!isPickerOwner()) {
                        var tp = $SS.jscolor.getElementPos(target); // target pos
                        var ts = $SS.jscolor.getElementSize(target); // target size
                        var ps = getPickerDims(this); // picker size
                        var a = 0,
                            b = 1,
                            c = 1;
                        var l = (ts[1] + ps[1]) / 2;

                        var pp =
                            [
                            tp[0],
                            tp[1] + ts[1]
                        ];

                        drawPicker(pp[0], pp[1]);
                    }
                };
                this.importColor = function() {
                    if (!valueElement) {
                        this.exportColor();
                    } else {
                        if (!this.adjust) {
                            if (!this.fromString(valueElement.value, leaveValue)) {
                                styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
                                styleElement.style.color = styleElement.jscStyle.color;
                                this.exportColor(leaveValue | leaveStyle);
                            }
                        } else if (!this.required && /^\s*$/.test(valueElement.value)) {
                            valueElement.value = "";
                            styleElement.style.backgroundColor = styleElement.jscStyle.backgroundColor;
                            styleElement.style.color = styleElement.jscStyle.color;
                            this.exportColor(leaveValue | leaveStyle);

                        } else if (!this.fromString(valueElement.value))
                            this.exportColor();
                    }
                };
                this.exportColor = function(flags) {
                    if (!(flags & leaveValue) && valueElement) {
                        var value = this.toString();

                        if (value[0] === "#")
                            value = value.substr(1);

                        valueElement.value = value;
                    }

                    if (!(flags & leaveStyle) && styleElement) {
                        styleElement.style.backgroundColor = "#" + this.toString();
                        styleElement.style.color =
                            0.213 * this.rgb[0] +
                            0.715 * this.rgb[1] +
                            0.072 * this.rgb[2] < 0.5 ? "#FFF" : "#000";
                    }

                    if (!(flags & leavePad) && isPickerOwner())
                        redrawPad();

                    if (!(flags & leaveSld) && isPickerOwner())
                        redrawSld();
                };
                this.fromHSV = function(h, s, v, flags) {
                    h < 0 && (h = 0) || h > 6 && (h = 6);
                    s < 0 && (s = 0) || s > 1 && (s = 1);
                    v < 0 && (v = 0) || v > 1 && (v = 1);

                    this.rgb = HSV_RGB(
                        h === null ? this.hsv[0] : (this.hsv[0] = h),
                        s === null ? this.hsv[1] : (this.hsv[1] = s),
                        v === null ? this.hsv[2] : (this.hsv[2] = v)
                    );

                    this.exportColor(flags);
                };
                this.fromRGB = function(r, g, b, flags) {
                    r < 0 && (r = 0) || r > 1 && (r = 1);
                    g < 0 && (g = 0) || g > 1 && (g = 1);
                    b < 0 && (b = 0) || b > 1 && (b = 1);

                    var hsv = RGB_HSV(
                        r === null ? this.rgb[0] : (this.rgb[0] = r),
                        g === null ? this.rgb[1] : (this.rgb[1] = g),
                        b === null ? this.rgb[2] : (this.rgb[2] = b)
                    );

                    if (hsv[0] !== null)
                        this.hsv[0] = hsv[0];

                    if (hsv[2] !== 0)
                        this.hsv[1] = hsv[1];

                    this.hsv[2] = hsv[2];
                    this.exportColor(flags);
                };
                this.fromString = function(hex, flags) {
                    var m = hex.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i);

                    if (!m) return false;
                    else {
                        if (m[1].length === 6)
                            this.fromRGB(
                                parseInt(m[1].substr(0, 2), 16) / 255,
                                parseInt(m[1].substr(2, 2), 16) / 255,
                                parseInt(m[1].substr(4, 2), 16) / 255,
                                flags);
                        else
                            this.fromRGB(
                                parseInt(m[1].charAt(0) + m[1].charAt(0), 16) / 255,
                                parseInt(m[1].charAt(1) + m[1].charAt(1), 16) / 255,
                                parseInt(m[1].charAt(2) + m[1].charAt(2), 16) / 255,
                                flags);

                        return true;
                    }
                };
                this.toString = function() {
                    return (
                        (0x100 | Math.round(255 * this.rgb[0])).toString(16).substr(1) +
                        (0x100 | Math.round(255 * this.rgb[1])).toString(16).substr(1) +
                        (0x100 | Math.round(255 * this.rgb[2])).toString(16).substr(1)
                    );
                };

                function RGB_HSV(r, g, b) {
                    var n = Math.min(Math.min(r, g), b);
                    var v = Math.max(Math.max(r, g), b);
                    var m = v - n;
                    if (m === 0) {
                        return [null, 0, v];
                    }
                    var h = r === n ? 3 + (b - g) / m : (g === n ? 5 + (r - b) / m : 1 + (g - r) / m);
                    return [h === 6 ? 0 : h, m / v, v];
                }

                function HSV_RGB(h, s, v) {
                    if (h === null) {
                        return [v, v, v];
                    }
                    var i = Math.floor(h);
                    var f = i % 2 ? h - i : 1 - (h - i);
                    var m = v * (1 - s);
                    var n = v * (1 - s * f);
                    switch (i) {
                        case 6:
                        case 0:
                            return [v, n, m];
                        case 1:
                            return [n, v, m];
                        case 2:
                            return [m, v, n];
                        case 3:
                            return [m, n, v];
                        case 4:
                            return [n, m, v];
                        case 5:
                            return [v, m, n];
                    }
                }

                function removePicker() {
                    delete $SS.jscolor.picker.owner;
                    window.removeEventListener("resize", removePicker, false);
                    target.blur();
                    document.getElementsByTagName("body")[0].removeChild($SS.jscolor.picker.boxB);
                }

                function drawPicker(x, y) {
                    if (!$SS.jscolor.picker) {
                        $SS.jscolor.picker = {
                            box: document.createElement("div"),
                            boxB: document.createElement("div"),
                            pad: document.createElement("div"),
                            padB: document.createElement("div"),
                            padM: document.createElement("div"),
                            sld: document.createElement("div"),
                            sldB: document.createElement("div"),
                            sldM: document.createElement("div")
                        };

                        for (var i = 0, segSize = 4; i < $SS.jscolor.images.sld[1]; i += segSize) {
                            var seg = document.createElement("div");
                            seg.style.height = segSize + "px";
                            seg.style.fontSize = "1px";
                            seg.style.lineHeight = "0";
                            $SS.jscolor.picker.sld.appendChild(seg);
                        }

                        $SS.jscolor.picker.sldB.appendChild($SS.jscolor.picker.sld);
                        $SS.jscolor.picker.box.appendChild($SS.jscolor.picker.sldB);
                        $SS.jscolor.picker.box.appendChild($SS.jscolor.picker.sldM);
                        $SS.jscolor.picker.padB.appendChild($SS.jscolor.picker.pad);
                        $SS.jscolor.picker.box.appendChild($SS.jscolor.picker.padB);
                        $SS.jscolor.picker.box.appendChild($SS.jscolor.picker.padM);
                        $SS.jscolor.picker.boxB.appendChild($SS.jscolor.picker.box);
                    }

                    var p = $SS.jscolor.picker;

                    // controls interaction
                    window.addEventListener("resize", removePicker, false);
                    p.box.onmouseup = p.box.onmouseout = function() {
                        target.focus();
                    };
                    p.box.onmousedown = function() {
                        abortBlur = true;
                    };
                    p.box.onmousemove = function(e) {
                        if (holdPad || holdSld) {
                            holdPad && setPad(e);
                            holdSld && setSld(e);

                            if (document.selection)
                                document.selection.empty();
                            else if (window.getSelection)
                                window.getSelection().removeAllRanges();

                            dispatchImmediateChange();
                        }
                    };
                    p.padM.onmouseup =
                        p.padM.onmouseout = function() {
                            if (holdPad) {
                                holdPad = false;
                                $(valueElement).fire("change");
                            }
                    };
                    p.padM.onmousedown = function(e) {
                        holdPad = true;
                        setPad(e);
                        dispatchImmediateChange();
                    };
                    p.sldM.onmouseup =
                        p.sldM.onmouseout = function() {
                            if (holdSld) {
                                holdSld = false;
                                $(valueElement).fire("change");
                            }
                    };
                    p.sldM.onmousedown = function(e) {
                        holdSld = true;
                        setSld(e);
                        dispatchImmediateChange();
                    };

                    // picker
                    var dims = getPickerDims(THIS);
                    p.box.style.width = dims[0] + "px";
                    p.box.style.height = dims[1] + "px";

                    /** MOVE TO CSS **/
                    // picker border
                    p.boxB.style.position = "fixed";
                    p.boxB.style.clear = "both";
                    p.boxB.style.left = x + "px";
                    p.boxB.style.top = y + "px";
                    p.boxB.style.zIndex = THIS.pickerZIndex;
                    p.boxB.style.border = THIS.pickerBorder + "px solid";
                    p.boxB.style.borderColor = THIS.pickerBorderColor;
                    p.boxB.style.background = THIS.pickerFaceColor;

                    // pad image
                    p.pad.style.width = $SS.jscolor.images.pad[0] + "px";
                    p.pad.style.height = $SS.jscolor.images.pad[1] + "px";

                    // pad border
                    p.padB.style.position = "absolute";
                    p.padB.style.left = THIS.pickerFace + "px";
                    p.padB.style.top = THIS.pickerFace + "px";
                    p.padB.style.border = THIS.pickerInset + "px solid";
                    p.padB.style.borderColor = THIS.pickerInsetColor;

                    // pad mouse area
                    p.padM.style.position = "absolute";
                    p.padM.style.left = "0";
                    p.padM.style.top = "0";
                    p.padM.style.width = THIS.pickerFace + 2 * THIS.pickerInset + $SS.jscolor.images.pad[0] + $SS.jscolor.images.arrow[0] + "px";
                    p.padM.style.height = p.box.style.height;
                    p.padM.style.cursor = "crosshair";

                    // slider image
                    p.sld.style.overflow = "hidden";
                    p.sld.style.width = $SS.jscolor.images.sld[0] + "px";
                    p.sld.style.height = $SS.jscolor.images.sld[1] + "px";

                    // slider border
                    p.sldB.style.display = THIS.slider ? "block" : "none";
                    p.sldB.style.position = "absolute";
                    p.sldB.style.right = THIS.pickerFace + "px";
                    p.sldB.style.top = THIS.pickerFace + "px";
                    p.sldB.style.border = THIS.pickerInset + "px solid";
                    p.sldB.style.borderColor = THIS.pickerInsetColor;

                    // slider mouse area
                    p.sldM.style.display = THIS.slider ? "block" : "none";
                    p.sldM.style.position = "absolute";
                    p.sldM.style.right = "0";
                    p.sldM.style.top = "0";
                    p.sldM.style.width = $SS.jscolor.images.sld[0] + $SS.jscolor.images.arrow[0] + THIS.pickerFace + 2 * THIS.pickerInset + "px";
                    p.sldM.style.height = p.box.style.height;
                    try {
                        p.sldM.style.cursor = "pointer";
                    } catch (eOldIE) {
                        p.sldM.style.cursor = "hand";
                    }

                    // load images in optimal order
                    p.padM.style.backgroundImage = "url('data:image/gif;base64,R0lGODlhDwAPAKEBAAAAAP///////////yH5BAEKAAIALAAAAAAPAA8AAAIklB8Qx53b4otSUWcvyiz4/4AeQJbmKY4p1HHapBlwPL/uVRsFADs=')";
                    p.padM.style.backgroundRepeat = "no-repeat";
                    p.sldM.style.backgroundImage = "url('data:image/gif;base64,R0lGODlhBwALAKECAAAAAP///6g8eKg8eCH5BAEKAAIALAAAAAAHAAsAAAITTIQYcLnsgGxvijrxqdQq6DRJAQA7')";
                    p.sldM.style.backgroundRepeat = "no-repeat";
                    p.pad.style.backgroundImage = "url('data:image/jpeg;base64,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')";
                    p.pad.style.backgroundRepeat = "no-repeat";
                    p.pad.style.backgroundPosition = "0 0";
                    /** UNTIL HERE **/

                    // place pointers
                    redrawPad();
                    redrawSld();

                    $SS.jscolor.picker.owner = THIS;
                    document.getElementsByTagName("body")[0].appendChild(p.boxB);
                }

                function getPickerDims(o) {
                    var dims =
                        [
                        2 * o.pickerInset + 2 * o.pickerFace + $SS.jscolor.images.pad[0] +
                        (o.slider ? 2 * o.pickerInset + 2 * $SS.jscolor.images.arrow[0] + $SS.jscolor.images.sld[0] : 0),
                        2 * o.pickerInset + 2 * o.pickerFace + $SS.jscolor.images.pad[1]
                    ];

                    return dims;
                }

                function redrawPad() {
                    // redraw the pad pointer
                    var yComponent = 1;
                    var x = Math.round((THIS.hsv[0] / 6) * ($SS.jscolor.images.pad[0] - 1));
                    var y = Math.round((1 - THIS.hsv[yComponent]) * ($SS.jscolor.images.pad[1] - 1));
                    $SS.jscolor.picker.padM.style.backgroundPosition =
                        (THIS.pickerFace + THIS.pickerInset + x - Math.floor($SS.jscolor.images.cross[0] / 2)) + "px " +
                        (THIS.pickerFace + THIS.pickerInset + y - Math.floor($SS.jscolor.images.cross[1] / 2)) + "px";

                    // redraw the slider image
                    var seg = $SS.jscolor.picker.sld.childNodes;

                    var rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 1);
                    for (var i = 0; i < seg.length; i += 1)
                        seg[i].style.backgroundColor = "rgb(" +
                            (rgb[0] * (1 - i / seg.length) * 100) + "%," +
                            (rgb[1] * (1 - i / seg.length) * 100) + "%," +
                            (rgb[2] * (1 - i / seg.length) * 100) + "%)";
                }

                function redrawSld() {
                    // redraw the slider pointer
                    var yComponent = 2;
                    var y = Math.round((1 - THIS.hsv[yComponent]) * ($SS.jscolor.images.sld[1] - 1));
                    $SS.jscolor.picker.sldM.style.backgroundPosition =
                        "0 " + (THIS.pickerFace + THIS.pickerInset + y - Math.floor($SS.jscolor.images.arrow[1] / 2)) + "px";
                }

                function isPickerOwner() {
                    return $SS.jscolor.picker && $SS.jscolor.picker.owner === THIS;
                }

                function blurTarget() {
                    if (valueElement === target)
                        THIS.importColor();

                    THIS.hidePicker();
                }

                function blurValue() {
                    if (valueElement !== target)
                        THIS.importColor();
                }

                function setPad(e) {
                    var mpos = $SS.jscolor.getRelMousePos(e);
                    var x = mpos.x - THIS.pickerFace - THIS.pickerInset;
                    var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
                    THIS.fromHSV(x * (6 / ($SS.jscolor.images.pad[0] - 1)), 1 - y / ($SS.jscolor.images.pad[1] - 1), null, leaveSld);
                }

                function setSld(e) {
                    var mpos = $SS.jscolor.getRelMousePos(e);
                    var y = mpos.y - THIS.pickerFace - THIS.pickerInset;
                    THIS.fromHSV(null, null, 1 - y / ($SS.jscolor.images.sld[1] - 1), leavePad);
                }

                function dispatchImmediateChange() {
                    if (THIS.onImmediateChange)
                        if (typeof THIS.onImmediateChange === "string")
                            eval(THIS.onImmediateChange);
                        else
                            THIS.onImmediateChange(THIS);
                }

                var THIS = this;
                var abortBlur = false;
                var valueElement = this.valueElement,
                    styleElement = this.styleElement;
                var holdPad = false,
                    holdSld = false;
                var leaveValue = 1 << 0,
                    leaveStyle = 1 << 1,
                    leavePad = 1 << 2,
                    leaveSld = 1 << 3;

                // target
                $(target).bind("focus", THIS.showPicker)
                    .bind("blur", function() {
                        if (!abortBlur)
                            window.setTimeout(function() {
                                abortBlur || blurTarget();
                                abortBlur = false;
                            });
                        else
                            abortBlur = false;
                    });

                // valueElement
                if (valueElement) {
                    var updateField = function() {
                        THIS.fromString(valueElement.value, leaveValue);
                        dispatchImmediateChange();
                    };
                    $(valueElement).bind("keyup", updateField)
                        .bind("input", updateField)
                        .bind("blur", blurValue)
                        .attr("autocomplete", "off");
                }

                // styleElement
                if (styleElement) {
                    styleElement.jscStyle = {
                        backgroundColor: styleElement.style.backgroundColor,
                        color: styleElement.style.color
                    };
                }

                this.importColor();
            }
        },

        /* STRUCTS */
        Color: function(hex, incHover) {
            this.hex = "#" + hex;
            this.private_rgb = $SS.RGBFromHex(hex);
            this.rgb = this.private_rgb.join(",");
            this.isLight = $SS.isLight(this.private_rgb);
            this.shiftRGB = function(shift, smart) {
                var rgb = this.private_rgb.slice(0);

                shift = smart ?
                    (this.isLight ? (shift < 0 ? shift : -shift) : Math.abs(shift)) : shift;

                rgb[0] = Math.min(Math.max(rgb[0] + shift, 0), 255);
                rgb[1] = Math.min(Math.max(rgb[1] + shift, 0), 255);
                rgb[2] = Math.min(Math.max(rgb[2] + shift, 0), 255);

                return rgb.join(",");
            };

            if (incHover)
                this.hover = this.shiftRGB(16, true);
        },
        colorToHex: function(color) {
            var digits, hex;

            if (color.substr(0, 1) === '#') {
                return color.slice(1, color.length);
            }
            if (digits = color.match(/(.*?)rgba?\((\d+), ?(\d+), ?(\d+)(.*?)\)/)) {
                hex = ((parseInt(digits[2], 10) << 16) | (parseInt(digits[3], 10) << 8) | (parseInt(digits[4], 10))).toString(16);
                while (hex.length < 6) {
                    hex = "0" + hex;
                }
                return hex;
            } else {
                return false;
            }
        },
        Image: function(img, RPA) {
            this.img = img;
            this.RPA = RPA;
            this.get = function() {
                if (!this.img) return "none ";

                var ret = "url('";
                if ($SS.validBase64(this.img))
                    ret = "data:image/" + $SS.typeofBase64(this.img) + ";base64," + this.img;
                else
                    ret = this.img;

                return (this.RPA !== undefined ? "url('" : "") + ret + (this.RPA !== undefined ? "')" + this.RPA : "");
            };
        },
        Mascot: function(index) {
            // no mascot
            if (index == -1) { 
                this.img = new $SS.Image(null);
                this.hidden = true;
                return;
            } else
                var mascot = $SS.conf["Mascots"][index];

            this.index = index;
            this.hidden = $SS.conf["Hidden Mascots"].indexOf(index) !== -1;
            this.default = mascot.default;
            this.flip = mascot.flip ? "scaleX(-1); -webkit-transform: scaleX(-1)" : "";
            this.img = new $SS.Image(mascot.img);
            this.offset = mascot.offset !== undefined ? mascot.offset : 0;
            this.hoffset = mascot.hoffset !== undefined ? mascot.hoffset : 0;
            this.name = mascot.name !== undefined ? mascot.name : "Chinese Girl Cartoon";
            this.width = mascot.width !== undefined ? mascot.width : "auto";
            this.height = mascot.height !== undefined ? mascot.height : "auto";
            this.boards = mascot.boards;
            this.enabled = $SS.conf["Selected Mascots"] === 0 || $SS.conf["Selected Mascots"].indexOf(index) !== -1;

            this.preview = function() {
                var div = $("<div " + (this.hidden ? "hidden=true " : "") +
                    "id=mascot" + this.index + " class=\'mascot-preview" + (this.enabled ? " selected" : "") +
                    "\' style=\"background: url(\'" + this.img.get() + "\')\">")
                    .html("<span class='mascot-buttons'><a class='mascot-link delete'>Delete</a><a class='mascot-link edit'>Edit</a><br><br><a class='mascot-link mascot-name'>" + this.name + "</a></span>");

                $(div).bind("click", function() {
                    $(this).toggleClass("selected");
                });

                $(".mascot-link.delete", div).bind("click", function(e) {
                    e.stopPropagation();
                    $SS.options.deleteMascot(index);
                });
                $(".mascot-link.edit", div).bind("click", function(e) {
                    e.stopPropagation();
                    $SS.options.showMascot(index);
                });

                return div;
            }
        },
        Theme: function(index) {
            var theme;

            if ((theme = $SS.conf["Themes"][index]) == undefined) {
                this.hidden = true;
                return;
            }

            this.index = index;
            this.hidden = $SS.conf["Hidden Themes"].indexOf(index) !== -1;
            this.name = theme.name;
            this.authorName = theme.authorName || "Anonymous";
            this.authorTrip = theme.authorTrip || "!..NoTrip..";
            this.default = theme.default;
            this.replyBrder = theme.replyBrder;
            this.bgImg = new $SS.Image(theme.bgImg, theme.bgRPA);
            this.replyOp = theme.replyOp;
            this.navOp = theme.navOp;
            this.bgColor = new $SS.Color(theme.bgColor);
            this.mainColor = new $SS.Color(theme.mainColor);
            this.brderColor = new $SS.Color(theme.brderColor);
            this.inputColor = new $SS.Color(theme.inputColor, true);
            this.inputbColor = new $SS.Color(theme.inputbColor);
            this.blinkColor = new $SS.Color(theme.blinkColor);
            this.unreadColor = new $SS.Color(theme.unreadColor);
            this.linkColor = new $SS.Color(theme.linkColor);
            this.linkHColor = new $SS.Color(theme.linkHColor);
            this.qlColor = new $SS.Color(theme.qlColor);
            this.nameColor = new $SS.Color(theme.nameColor);
            this.quoteColor = new $SS.Color(theme.quoteColor);
            this.textColor = new $SS.Color(theme.textColor);
            this.titleColor = new $SS.Color(theme.titleColor);
            this.tripColor = new $SS.Color(theme.tripColor);
            this.boardColor = new $SS.Color(theme.boardColor);
            this.headerColor = new $SS.Color(theme.headerColor);
            this.headerLColor = new $SS.Color(theme.headerLColor);
            this.headerLHColor = new $SS.Color(theme.headerLHColor);
            this.headerBGColor = new $SS.Color(theme.headerBGColor);
            this.headerbColor = new $SS.Color(theme.headerbColor);
            this.postHLColor = new $SS.Color(theme.postHLColor);
            this.quotesYouHLColor = new $SS.Color(theme.quotesYouHLColor);
            this.ownPostHLColor = new $SS.Color(theme.ownPostHLColor);
            this.threadHLColor = new $SS.Color(theme.threadHLColor);
            this.replybgHLColor = new $SS.Color(theme.replybgHLColor);
            this.replyslctColor = new $SS.Color(theme.replyslctColor);
            this.checkMark = new $SS.Image(inputImages, "no-repeat center " + (this.inputColor.isLight ? 0 : -8) + "px");
            this.radioCheck = new $SS.Image(inputImages, "no-repeat center " + (this.inputColor.isLight ? -16 : -24) + "px");
            this.codeBackground = (this.bgColor.isLight ? "255, 255, 255, 0.2" : "0, 0, 0, 0.2");
            this.codeBorder = (this.bgColor.isLight ? "204, 204, 204, 1.0" : "204, 204, 204, 0.1");
            this.dIcons = new $SS.Image(theme.dIcons);
            this.icons = {
                imgExpand: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.headerColor.rgb + ")' d='M25.545,23.328,17.918,15.623,25.534,8.007,27.391,9.864,29.649,1.436,21.222,3.694,23.058,5.53,15.455,13.134,7.942,5.543,9.809,3.696,1.393,1.394,3.608,9.833,5.456,8.005,12.98,15.608,5.465,23.123,3.609,21.268,1.351,29.695,9.779,27.438,7.941,25.6,15.443,18.098,23.057,25.791,21.19,27.638,29.606,29.939,27.393,21.5z'/></svg>",
                imgContract: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.headerColor.rgb + ")' d='M25.083,18.895l-8.428-2.259l2.258,8.428l1.838-1.837l7.053,7.053l2.476-2.476l-7.053-7.053L25.083,18.895zM5.542,11.731l8.428,2.258l-2.258-8.428L9.874,7.398L3.196,0.72L0.72,3.196l6.678,6.678L5.542,11.731zM7.589,20.935l-6.87,6.869l2.476,2.476l6.869-6.869l1.858,1.857l2.258-8.428l-8.428,2.258L7.589,20.935zM23.412,10.064l6.867-6.87l-2.476-2.476l-6.868,6.869l-1.856-1.856l-2.258,8.428l8.428-2.259L23.412,10.064z'/></svg>",
                menuIcon: "<svg viewBox='7 7 20 20' preserveAspectRatio='true' height='14' width='14' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.headerLColor.rgb + ")' d='M4.083,14H14V4.083H4.083V14zM17,4.083V14h9.917V4.083H17zM17,26.917h9.917v-9.918H17V26.917zM4.083,26.917H14v-9.918H4.083V26.917z'/></svg>",
                heart: "<svg viewBox='0 0 26 26' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.textColor.rgb + ")' d='M24.132,7.971c-2.203-2.205-5.916-2.098-8.25,0.235L15.5,8.588l-0.382-0.382c-2.334-2.333-6.047-2.44-8.25-0.235c-2.204,2.203-2.098,5.916,0.235,8.249l8.396,8.396l8.396-8.396C26.229,13.887,26.336,10.174,24.132,7.971z'/></svg>",
                star: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.textColor.rgb + ")' d='M14.615,4.928c0.487-0.986,1.284-0.986,1.771,0l2.249,4.554c0.486,0.986,1.775,1.923,2.864,2.081l5.024,0.73c1.089,0.158,1.335,0.916,0.547,1.684l-3.636,3.544c-0.788,0.769-1.28,2.283-1.095,3.368l0.859,5.004c0.186,1.085-0.459,1.553-1.433,1.041l-4.495-2.363c-0.974-0.512-2.567-0.512-3.541,0l-4.495,2.363c-0.974,0.512-1.618,0.044-1.432-1.041l0.858-5.004c0.186-1.085-0.307-2.6-1.094-3.368L3.93,13.977c-0.788-0.768-0.542-1.525,0.547-1.684l5.026-0.73c1.088-0.158,2.377-1.095,2.864-2.081L14.615,4.928z'/></svg>",
                backlink: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.blinkColor.rgb + ")' d='M12.981,9.073V6.817l-12.106,6.99l12.106,6.99v-2.422c3.285-0.002,9.052,0.28,9.052,2.269c0,2.78-6.023,4.263-6.023,4.263v2.132c0,0,13.53,0.463,13.53-9.823C29.54,9.134,17.952,8.831,12.981,9.073z'/></svg>",
                bubble: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.blinkColor.rgb + ")' d='M16,5.333c-7.732,0-14,4.701-14,10.5c0,1.982,0.741,3.833,2.016,5.414L2,25.667l5.613-1.441c2.339,1.317,5.237,2.107,8.387,2.107c7.732,0,14-4.701,14-10.5C30,10.034,23.732,5.333,16,5.333z'/></svg>",
                quickReply: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.headerColor.rgb + ")' d='M16,5.333c-7.732,0-14,4.701-14,10.5c0,1.982,0.741,3.833,2.016,5.414L2,25.667l5.613-1.441c2.339,1.317,5.237,2.107,8.387,2.107c7.732,0,14-4.701,14-10.5C30,10.034,23.732,5.333,16,5.333z'/></svg>",
                threadWatcher: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='20' width='20' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.headerColor.rgb + ")' d='M16,8.286C8.454,8.286,2.5,16,2.5,16s5.954,7.715,13.5,7.715c5.771,0,13.5-7.715,13.5-7.715S21.771,8.286,16,8.286zM16,20.807c-2.649,0-4.807-2.157-4.807-4.807s2.158-4.807,4.807-4.807s4.807,2.158,4.807,4.807S18.649,20.807,16,20.807zM16,13.194c-1.549,0-2.806,1.256-2.806,2.806c0,1.55,1.256,2.806,2.806,2.806c1.55,0,2.806-1.256,2.806-2.806C18.806,14.451,17.55,13.194,16,13.194z'/></svg>",
                threadClosed: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.headerColor.rgb + ")' d='M22.335,12.833V9.999h-0.001C22.333,6.501,19.498,3.666,16,3.666S9.666,6.502,9.666,10h0v2.833H7.375V25h17.25V12.833H22.335zM11.667,10C11.667,10,11.667,10,11.667,10c0-2.39,1.944-4.334,4.333-4.334c2.391,0,4.335,1.944,4.335,4.333c0,0,0,0,0,0v2.834h-8.668V10z'/></svg>",
                threadPinned: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.tripColor.rgb + ")' d='M16,3.5c-4.142,0-7.5,3.358-7.5,7.5c0,4.143,7.5,18.121,7.5,18.121S23.5,15.143,23.5,11C23.5,6.858,20.143,3.5,16,3.5z M16,14.584c-1.979,0-3.584-1.604-3.584-3.584S14.021,7.416,16,7.416S19.584,9.021,19.584,11S17.979,14.584,16,14.584z'/></svg>",
                threadArchived: "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.tripColor.rgb + ")' d='M15.5,3.029l-10.8,6.235L4.7,21.735L15.5,27.971l10.8-6.235V9.265L15.5,3.029zM24.988,10.599L16,15.789v10.378c0,0.275-0.225,0.5-0.5,0.5s-0.5-0.225-0.5-0.5V15.786l-8.987-5.188c-0.239-0.138-0.321-0.444-0.183-0.683c0.138-0.238,0.444-0.321,0.683-0.183l8.988,5.189l8.988-5.189c0.238-0.138,0.545-0.055,0.684,0.184C25.309,10.155,25.227,10.461,24.988,10.599z'/></svg>",
                menuButton:   "<svg viewBox='0 0 30 30' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.blinkColor.rgb + ")' d='M10.129,22.186 16.316,15.999 10.129,9.812 13.665,6.276 23.389,15.999 13.665,25.725z'/></svg>",
                downArrow: "<svg viewBox='7 4 29 27' preserveAspectRatio='true' height='16' width='16' xmlns='http://www.w3.org/2000/svg'>" +
                    "<path fill='rgb(" + this.tripColor.rgb + ")' d='M8.037,11.166L14.5,22.359c0.825,1.43,2.175,1.43,3,0l6.463-11.194c0.826-1.429,0.15-2.598-1.5-2.598H9.537C7.886,8.568,7.211,9.737,8.037,11.166z'/></svg>"
            };

            if (theme.customCSS) {
                try {
                    if (theme.customCSS[0] === "(")
                        theme.customCSS = "\"+".concat(theme.customCSS);
                    if (theme.customCSS[theme.customCSS.length - 1] === ")")
                        theme.customCSS += "+\"";

                    this.customCSS = eval($SS.trimLineBreaks(new String('"' + theme.customCSS.replace(/\"/g, "\\\"").replace(/\'/g, "\\\'") + '"')));
                } catch (e) {
                    alert("Error evaluating " + this.name + "'s theme.customCSS!\n" + e.message);
                    this.customCSS = theme.customCSS;
                }
            } else
                this.customCSS = "";

            this.preview = function() {
                var div = $("<div " + (this.hidden ? "hidden=true " : "") +
                    " id=theme" + this.index + " class=\'theme-preview " + (($SS.conf["Selected Theme"] == $SS.conf["NSFW Theme"]) && ($SS.conf["Selected Theme"] == this.index) ? "selected nsfw" : ($SS.conf["Selected Theme"] == this.index ? "selected " : "") + ($SS.conf["NSFW Theme"] == this.index ? "nsfw " : "")) + "\'>").html("<div class=reply " +
                    "style='background-color:" + this.mainColor.hex + "!important;border:1px solid " + this.brderColor.hex + "!important;color:" + this.textColor.hex + "!important'>" +
                    "<div class=riceCheck style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;box-shadow:rgba(" + this.mainColor.shiftRGB(64) + ",.3) 0 1px;'></div>" +
                    "<span style='color:" + this.titleColor.hex + "!important; font-weight: 700 !important'>" + this.name + "</span> " +
                    "<span style='color:" + this.nameColor.hex + "!important; font-weight: 700 !important'>" + this.authorName + "</span>" +
                    "<span style='color:" + this.tripColor.hex + "!important'> " + this.authorTrip + "</span>" +
                    "<time style='color:" + this.textColor.hex + "'> 20XX.01.01 12:00 </time>" +
                    "<a href='javascript:;' style='color:" + this.linkColor.hex + "!important' " +
                    "onmouseover='this.setAttribute(\"style\",\"color:" + this.linkHColor.hex + "!important\")' " +
                    "onmouseout='this.setAttribute(\"style\",\"color:" + this.linkColor.hex + "!important\")'>No.22772469</a>" +
                    "<br><blockquote><span style='color:" + this.quoteColor.hex + "'>>implying this isn't a post</span><br>Post content is right here.</blockquote>" +
                    "<p class='theme-buttons-container'>" +
                    "<a href='javascript:;' title='Sets the SFW theme.' style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;color:" + this.textColor.hex + "!important'>SFW</a>" +
                    "<a href='javascript:;' title='Sets the NSFW theme.' style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;color:" + this.textColor.hex + "!important'>NSFW</a>" +
                    "<a href='javascript:;' title=Edit style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;color:" + this.textColor.hex + "!important'>Edit</a>" +
                    "<a href='javascript:;' title=Delete style='background-color:" + this.inputColor.hex + "!important;border:1px solid " + this.inputbColor.hex + "!important;color:" + this.textColor.hex + "!important'>Delete</a></p>" +
                    "<h3 class='sfw-label notsafe'>NSFW</h3>" +
                    "<h3 class='sfw-label safe'>SFW</h3>" +
                    "<h3 class='sfw-label both'>SFW & NSFW</h3>" +
                    "</div>");

                $(div).bind("click", function() {
                    var $this = $(this);

                    if ($this.hasClass("selected nsfw")) return;

                    $this.parent().children(".selected").removeClass("selected");
                    $this.parent().children(".nsfw").removeClass("nsfw");
                    $this.addClass("selected nsfw");
                    $SS.options.save();
                });

                $("a[title='Sets the SFW theme.']", div).bind("click", function(e) {
                    e.stopPropagation();
                    var $this = $(this);
                    if ($this.hasClass("selected")) return;

                    $this.parent().parent().parent().parent().children(".selected").removeClass("selected");
                    $this.parent().parent().parent().addClass("selected");
                });

                $("a[title='Sets the NSFW theme.']", div).bind("click", function(e) {
                    e.stopPropagation();
                    var $this = $(this);
                    if ($this.hasClass("nsfw")) return;

                    $this.parent().parent().parent().parent().children(".nsfw").removeClass("nsfw");
                    $this.parent().parent().parent().addClass("nsfw");
                });
                $("a[title=Delete]", div).bind("click", function(e) {
                    e.stopPropagation();
                    $SS.options.deleteTheme(index);
                });
                $("a[title=Edit]", div).bind("click", function(e) {
                    e.stopPropagation();
                    $SS.options.showTheme(index);
                });

                return div;
            }
        },

        /* HELPER METHODS */
        formatFont: function(font) {
            if (font === "sans-serif" || font === "monospace")
                return font;

            return "'" + font + "'";
        },
        RGBFromHex: function(hex) {
            var rgb = [];
            hex = parseInt(hex, 16);

            rgb[0] = (hex >> 16) & 0xFF;
            rgb[1] = (hex >> 8) & 0xFF;
            rgb[2] = hex & 0xFF;

            return rgb;
        },
        isLight: function(rgb) {
            return rgb[0] + rgb[1] + rgb[2] >= 400;
        },
        trimLineBreaks: function(str) {
            return str.replace(/(\r\n|\r|\n)/gm, "");
        },
        cleanBase64: function(b64) {
            return b64.replace(/^(data:image\/(?:gif|jpe?g|png);base64,)(\r\n|\r|\n)?/gmi, "");
        },
        typeofBase64: function(b64) {
            switch (b64.substr(0, 8)) {
                case "PD94bWwg":
                    return "svg+xml";
                case "R0lGODlh":
                    return "gif";
                case "/9j/4AAQ":
                case "/9j/4QAY":
                    return "jpeg";
                case "iVBORw0K":
                default:
                    return "png";
            }
        },
        validBase64: function(b64) {
            return /^(?:data:image\/(?:gif|jpe?g|png);base64,)?(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{4})$/i.test(b64);
        },
        validImageURL: function(img) {
            return /^https?:\/\/.+$/i.test(img);
        },
        getLocation: function(url) {
            var obj;

            if (typeof url === "string") {
                obj = document.createElement("a");
                obj.href = location.protocol + "//" + url;
            } else
                obj = window.location;

            var pathname = obj.pathname.substr(1).split("/");

            return {
                sub: obj.hostname.split(".")[0],
                board: pathname[0],
                home: location.hostname === "www.4chan.org",
                nsfw: /^(b|d|e|f|gif|h|hr|r|s|t|u|wg|i|ic|r9k|hm|y|hc|pol|soc|lgbt)$/.test(pathname[0]),
                reply: pathname[1] === "thread",
                catalog: pathname[1] === "catalog",
                archive: pathname[1] === "archive"
            };
        }
    };
    /* END STYLE SCRIPT CLASSES */
    $SS.init();
})();
