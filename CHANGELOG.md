### v5.3.10
*2014-08-25*

- Remove `Style Emails as Links`
- Exlinks Icon small fix

### v5.3.9
*2014-08-19*

- Small changes
- Mod names will now appear in purple
- Removed TW options in preparation for the new 4chan X TW (v1.8.10)
- TW will still be fixed position

### v5.3.8
*2014-07-29*

- Fix issue #28

- Remove `Mascot Overlaps Posts`
- Remove `Expanded Images Cover QR`

### v5.3.7
*2014-07-27*

- Fix Github error inserting itself into the code

### v5.3.6
*2014-07-22*

- Mascot fixes
- Fix issue #25

### v5.3.5
*2014-06-26*

- Idem

### v5.3.4
*2014-06-26*

Fix:
- Reset Settings on Tampermonkey

Add:
- `Separator` option to Highlighting options

Change:
- `Show Post Info on Hover` so that it's easier to reach sauce
- You/Own posts highlighting style (disable in 4chan X as always)

### v5.3.3
*2014-06-17*

- Small fixes

**New:**
- `Show Post Info On Hover`

### v5.3.2
*2014-06-12*

- Bugfixes
- Changed icons
- Rewrote fail-safe and added option to disable

### v5.3.1
*2014-06-11*

- Fix `Remove Background` not working
- Fix captcha width in vertical QR mode

## v5.3.0
*2014-06-11*

- Added 3 new mascots
- Changed and cleaned up some mascots
- Added a fail-safe next to the search bar for when OneeChan settings button doesn't appear
- Changed how `Expanding Form Inputs` behaves so it doesn't break everything
- Fix mascot opacity not changing on hover when `Reduce Mascot Opacity` enabled
- Fix `Wrapping Around OP` / `Indent OP` interaction

**New:**
- `Hide Mascot in Catalog`

### v5.2.12
*2014-06-09*

- Changed some mascots, no one gets to be special
- QR box will now respond to the `Rounded Corners` option
- Fix a issue where a second checkbox would appear on the QR box after thread update
- Various MayhemYDG and loadletter fixes

**New:**
- `Indent OP`
- `Transparent QR`

### v5.2.11
*2014-05-30*

- Fix two mascots not having HTTPS links
- Fix menu items being centered in ihavenoface fork

**New:**
- loadletter fork compatibility
- `Mascot Overlaps Posts` menu option

### v5.2.10
*2014-05-29*

- Fix issue #18 where clicking apply would load the last mascot in the list (thanks to @Timpe)
- Updates for the recent 4chan X changes
- Minor margin fixes

- Fixed post menu not overlaying the post when `Fit Width` was enabled in MayhemYDG

### v5.2.9
*2014-05-11*

- Differentiate between index and thread margins
- Fix You/Own posts highlight not being tied to 4chan X options
- Justified preview text in the catalog

### v5.2.8
*2014-05-09*

- I knew I forgot someone in the mascots
- Fix TW sidebar in MayhemYDG
- Fix bottom margin when bottom header in MayhemYDG
- Fix TW borders not responding to `Borders` option


### v5.2.7
*2014-05-07*

- Mistakes were made but hopefully corrected
- Cleared up the menu
- Added 2 new themes
- Mascots will now render above the bottom header but still under the QR
- Changed Yuki Nagato mascot, we have enough guitars
- Removed Cirno Head (check "More Mascots" if you want it back)
- Added 3 more mascots
- Border for current board in Custom board navigation will now be colored according to theme as intended
- Fix ExLinks menu icon
- Fix Checkboxes
- Banner content will now properly react to the header position (auto-hide)
- Non-JSON Search bar expands on focus
- Cleaned up all the margin/padding hacks that were made over time, pages should be cleaner and more responsive
- Renamed `Style Post Info` to `Show Reply Header`
- Minor menu fixes

**New:**
- `Show Header Shadow` option
- `Show File Info` option
- `Highlight Current Board`
- `Thread Watcher`

Changes how the TW is pinned. As a sidebar or simply fixed by the user.

- `Compatibility` option

This option will apply CSS fixes depending on the fork you are using. Currently only MayhemYDG forks.


### v5.2.6
*2014-05-06*

- Fix for moot class changes
- Changes to highlight so it doesn't interfere with sideArrows and post hiding buttons
- Fixed J/K highlight color being tied to the wrong color setting
- Added a Very Large option to `Margin Between Replies` and increased the Large option from 6 to 8px
- More minor CSS fixes


### v5.2.5
*2014-05-05*

- Fixed right sidebar Thread Watcher
- Minor CSS fixes

### v5.2.4
*2014-05-02*

**Nebukazar**

- Lots of small syntax, redundancy and other CSS fixes, OneeChan should render just sliiiightly faster now
- Hid the new moot changes to the post form and all those ugly horizontal rules
- Fixed `Reset` not resetting anything on Firefox
- Fixed original post margin when nesting inline posts
- Fixed Cirno Head image
- Added a new color option for highlighting (`highlightColor`), this also gives color to J/K keybind
- `Custom Themes` button now links to an actual page on the wiki with instructions
- Removed `Secret Name Field` option

**New:**
- `Thread Watcher as a sidebar`

This will pin the TW as a sidebar depending on which side the SS Sidebar is placed, or default to left when the latter is disabled. This option uses a lot of roundabout ways to achieve and renders really slowly due to using multiple CSS3 selectors, you've been warned.

- `Remove Background` and `Remove Controls` in the Quick Reply options

**Tracerneo**

**New:**
- `Highlighting` options

Offers a wide range of post highlighting rice.


### v5.2.3
*2014-04-30*

**WARNING:** 
If you were using certain mascots before this version the extension could break.
See [Deleting the localStorage](https://github.com/Nebukazar/OneeChan/wiki/Deleting-the-localStorage) for a fix.

- Removed some ugly mascots, added some new ones
- Fixed certain mascots default positioning and height
- Removed the page break (`HR`) at the bottom of the thread in reply mode
- You/Own posts take color from Link Header color
- Fixed targeted posts not having a visible background to differentiate them from the other posts
- OneeChan settings icon should now appear on bottom header in MayhemYDG forks and doesn't hide the latter anymore
- Slightly increased margin between single threads
- Slightly increased margin at the bottom of the thread in reply mode
- Cleaned up the menu a bit

**New:**

- Added a `Reset` button to reset OneeChan settings
- Added a `More Mascots` button linking to Appchan booru for more mascots

### v5.2.2
*2014-04-25*

- Highlighted You/Own posts are now more noticeable when enabled in 4chan X
- OneeChan settings button should now appear on MayhemYDG forks, although compatibility is dodgy at best
- Reduced post highlighting border size as fixed in previous version

### v5.2.1
*2014-04-25*

- Fixed post highlighting (thanks @seanssel)
- Removed ```Show text board``` due to moot scrapping discussion boards (RIP)

**New:**
- ```Reduce Thumbnail Opacity```
- ```Underline QuoteLinks```

## v5.2.0
*2014-04-22*

- Fix stuff I broke (prev/next option, i.4cdn.org)
- Corrected margins for Add theme window
- Adjusted boardBanner in the Catalog

### v5.1.13
*2014-04-21*

- OneeChan will no longer apply on ```sys.4chan.org``` (report/auth window)
- Fix top margin when Show Ads is enabled
- Fix input borders and Themes color input backgrounds

### v5.1.12
*2014-04-21*

- HoverUI will now render over the QR box
- Remove the QR shadow to be more inline with the header

### v5.1.11
*2014-04-20*

- Fixed the QR box being hidden by the top header when OneeChan first starts
- Fixed input elements not having borders in Themes tab
- Reduced margins around fileThumb and fileInfo
- Default theme is now Yotsuba B (sigh)

### v5.1.10
*2014-04-20*

- Removed bottom property from mascots for not interacting with the header (thanks to @sikmo)
- Blotter now no longer displays when hidden instead of just being invisible

**New:**
- ```Show bottom Navigation Link``` allows to hide the bottom navigation in reply mode

### v5.1.9
*2014-04-20*

- Fix hiding navigation links in non-JSON hiding bottom pages

### v5.1.8
*2014-04-20*

- Fix hiding navigation links

### v5.1.7
*2014-04-20*

**Nebukazar**
- Fixes for the new 4chan html
- Removed banner reflection option for now as it was only causing problems

**New:**
- Added ```Show Navigation Links``` option

### v5.1.6
*2014-04-14*

**Nebukazar**
- Small board title fix in threads
- Changed default theme to 4chan Rewired
- Removed ```Show Navigation links as Icons```
- Starting to clean up the code and minifying

### v5.1.5
*2014-04-11*

- Fix Fonts.css
- Fix poor Ruri in mascots tab

### v5.1.4
*2014-04-11*

- Fix Chrome autoupdate after I borked it
- Chrome banner opacity should now be working correctly
- General CSS margin/padding changes to posts, post images and thread expansion
- Reduced the space taken by the Blotter when hidden in the options
- Default theme is now Photon
- Added some more mascots (taken from Appchan X <3)

**New:**
- ```Show Navigation links as Icons``` (still in beta, might need a rewrite)
- This option will turn navigation links at the top (catalog, search, filters) into icons

### v5.1.3
*2014-04-08*

**Nebukazar**
- Hidding the Blotter no longer cuts off the Banner/board title in the Sidebar
- Script doesn't play nice with Chromium 35+, Chrome stable (33) is recommended, updated the readme to reflect this

### v5.1.2
*2014-04-07*

**Nebukazar**
- Gave the bottom Catalog link some styling back to be more in line with the rest of navpages
- Fixed the Banner not interacting properly with the top header
- Fixed Banner reflection in Chrom* (doesn't play nice with "Reduce Banner Opacity")

**New:**
- Added option to show/hide Previous and Next buttons in Paged navigation mode

### v5.1.1
*2014-04-07*

**Nebukazar**
- Fixed vertical tabbed QR going all over the place on mouse hover (General.css)

## v5.1.0
*2014-04-07*

**Nebukazar**
- Added option to show/hide the news blotter

### v5.0.35
*2014-04-05*

**Nebukazar**
- Quick Reply (QR) is now able to move freely in the Sidebar (Sidebar.css)
- Fixed the Banner being hidden by the Header when "Bottom header" disabled

### v5.0.34
*2014-04-05*

### v5.0.33
*2014-04-04*

**Nebukazar**
- Removed Previous/Next buttons in bottom page navigation (css/Cleanup.css/.prev + .next)
- Fixed Catalog button style (not quite there yet)
- Added subtle URL link to the Github page in Menu (probably redundant)

### v5.0.32
*2014-04-04*

**Nebukazar**:
- Added Chrom* auto-updating
- Remove Update menu link because useless (see above)
- Minor CSS fix with bottom header hiding QR in "Vertical Tabbed" style
- Fixed bottom pages navigation buttons overlapping numbers (no idea how to fix the button style yet) 

- Added 3 new mascots (Purple Heart, Rei Ayanami, Motoko Kusanagi)

### v5.0.31
*2014-04-03*

**Nebukazar**:
- Fix QR being hidden by bottom header
- Fix Backlink-icons placement
- Fix OP post padding

### v5.0.27
*2014-01-10*

**seaweedchan**:
- Update for 4chan X v1.3.0

### v5.0.26
*2013-12-06*

**seaweedchan**:
- Fix fileText markup change that increased its font size

### v5.0.25
*2013-11-02*

**seaweedchan**:
- Fix missing text option for settings menu

### v5.0.24
*2013-09-21*

**seaweedchan**:
- Use button for OneeChan settings instead of menu link, due to Chrome 30 breaking menu API in 4chan X.

### v5.0.23
*2013-08-26*

**seaweedchan**:
- Add support for new gallery icon

### v5.0.22
*2013-08-19*

**seaweedchan**:
- Fix hiding banner

### v5.0.21
*2013-08-19*

**seaweedchan**:
- Fix issues with logo reflection in threads opened from index

### v5.0.20
*2013-08-16*

**seaweedchan**:
- Fix ability to change banners in thread opened from index

### v5.0.19
*2013-08-14*

**seaweedchan**:
- Small update for class change in latest 4chan X
- Fix for /p/ users

### v5.0.16
*2013-07-15*

**seaweedchan**:
- New option: `Style Emails as Links`. Enabled was the default behavior before.

### v5.0.15
*2013-07-15*

**seaweedchan**:
- Don't remove scroll-marker pointer events when header is hidden

### v5.0.14
*2013-07-15*

**seaweedchan**:
- Allow ads through `Show 4chan Ads` option. Can control which ads specifically to show, as well as reduce the opacity until hover.
- Fix bug where some elements under the header can't be clicked
- Fix bug where links in spoilers still showed
- Fix update URL in main options for Firefox users

### v5.0.13
*2013-07-01*

**seaweedchan**:
- Fix small issue with new mobile post form link showing up.

### v5.0.12
*2013-06-30*

**seaweedchan**:
- Hide moot's begging

### v5.0.11
*2013-06-17*

**seaweedchan**:
- Added `Post Message Margin` option. Setting this to `Small` is the equivalent of `Slim Replies` in old OneeChan
- Changed some font sizes to be larger when at fonts greater than 13px

### v5.0.10
*2013-06-02*

**seaweedchan**:
- Changed Marisa's mascot to a version with corrected eye colors. The old image can be found [here](https://i.minus.com/ibnxkA58kU3iWc.png).
- Fix forward reply hiding
- Dont color names with emails
- Fix quote coloring in spoilers

### v5.0.9
*2013-05-31*

**seaweedchan**:
- Fix issues with hidden replies (with stubs shown)

### v5.0.8
*2013-05-30*

**seaweedchan**:
- Make OneeChan respect fonts a little more

### v5.0.7
*2013-05-30*

**seaweedchan**:
- Added OneeChan document class
- Fixed Cleanup CSS affecting non-boards pages likes News and Report

### v5.0.6
*2013-05-30*

### v5.0.5
*2013-05-29*

**seaweedchan:**
- Renamed 氷 to Cold Snap as per author's request
- Added `Show Header Background Gradient` option
- Some more image expanding bug fixes
- Hopefully alleviate some possible flashing before 4chan X is loaded

### v5.0.4
*2013-05-28*

**seaweedchan**:
- Fix image expansion not showing with fit width
- Make backlink margins more consistent between replies and OPs
- Bump minimum requirement of 4chan X to 1.2.13 for Quote Threading users.
- Fix issue where inline posts have strange bottom margins

### v5.0.3
*2013-05-28*

**seaweedchan**:
- Small bug fixes

### v5.0.2
*2013-05-28*

**seaweedchan**:
- Fixed issues with quote threading

### v5.0.1
*2013-05-27*

**ayakashi**:
- Added 氷 theme

**seaweedchan**:
- Fix JSColor position
- Add Greentext preview
- Small bug fixes

## v5.0.0:
*2013-05-27*

- Almost complete rewrite of OneeChan for the v3-based rewrite of Seaweedchan's 4chan X.

Some changes:
- OneeChan settings are now accessed through the "Style Settings" link in the 4chan X header bar menu.
- New themes and mascots were added.
- Settings importing/exporting added.
- Exporting themes now give you a .JSON file instead of just text.
- Mascot options completely redone, now with an Appchan X-like preview.
- Smart Tripcode Hider changed to Secret Name Field with some adjustments
- Emoji and Custom Navigation are now gone, as 4chan X provides much better versions of these
