TODO LIST 
=========
General
-------
* Can we put Liquid / Jekyll tags into templates and pre-process them? Maybe better to pull variables into centralised object passed to template....

* ** IMPORTANT ** Headless Tests -> Write new permission request handing!!!

* ** IMPORTANT ** Recent Items -> Multiple accounts!!!

* ** IMPORTANT ** Loading Spinner for 'Get Help' - can be slow sometimes!
* ** IMPORTANT ** Clean up Service Worker Console Logs (e.g. Service Worker Registered)
* ** IMPORTANT ** Handle State for each app, for full page redirects, callable from Main Module and rehydratable from there.

* Match slashed and unslashed urls to service worker cache (e.g. "https://educ.io/view/" and "https://educ.io/view") <-- Needs a re-work of the sw-cache

* Animated Logo -- Via Javascript?

* ** BUG ** -> Order of Dev / Multiple IMPORT Scripts is dependent on loading times - needs to be declarative? E.g. XLSX AND JSZIP on debug only

* More Sophisticated Analytics use....link on actions? onclick="ga('send', 'event', 'Jumbotron actions', 'Download', 'Download 4.0.0-beta');" [https://support.google.com/analytics/answer/1033068] and [https://developers.google.com/analytics/devguides/collection/analyticsjs/events]

* Supply oauth keys are part of the URL.... STARTED but not complete <= Should hide the URL after successfull set? | Also JWT Token for Folders?

* Increase timeout on scope increase login? Or check promise completion....as a delay can mean modals are not fired???

* Material Design menu display animations

* Filters => Populate filter boxes on parameterised views.

Datatable
---------
* Filter Date / Dates in columns -> Use a range as well? Earliest to latest with filter xxx days/months/years each side of selected value?

Auth
----

Picker
------
* Picker can be difficult if third party cookies or referral headers are blocked .....

Router
------
* ** IMPROVEMENT ** Long running routes, have immediate busy status (Working?) - use as an option in the route specification (saves having to do in route handling code?)

Apps
----
* ** BUG ** Chromium on Ubuntu - no Local DB for recent documents etc? <-- DONE

* ** BUG ** Autosize text field does not work properly on Firefox <-- DONE

* ** IMPORTANT ** Cached called to userinfo to improve time-to-work?

* ** IMPORTANT ** Router and subsequent anchor routes -> how do we handle duplicates?

* ** IMPORTANT ** Debug Feedback on Failed Template Compiles - which one is being compiled at point of failure?

* Clean Up Filters HTML to just go up to parent > .data-identifier <-- IMPORTANT

* LONG RUNNING / RECURSIVE Tasks -> Need to be cancellable? If a route out command is issued ... maybe a web worker in the background
* Success / Failure response in Busy Loader? E.g. Animate to cross if it fails?i

* Email - Consider moving to MJML - https://github.com/mjmlio/mjml ... although might strip out templating tags?

Mobile
------
* ** IMPORTANT ** Full Page Lazy Scope Load may break app flow (need state object to pass back to app?) - also should test for scope before initiating flow?

* ** IMPORTANT ** Incognito Mode on IOS fails on sign-in (issue with LocalForage again?) -> Issue on IOS 10.3 but not on 11? 11 seems to fix the Local Storage problem. Cookie problems on IOS?

* Command clicks in header menu must close menu. Thought this was the case so perhaps a bug rather than a lack of functionality. This also screws up height measuring for scrolls.
* Top nav menu wastes space on mobile. Can it be shifted to sticky on mobile devices only with bootstrap? Maybe a media query if nothing else works.
* Horizontal scroll is broken on a mobile device - don't use it, or at least default to a flexbox fit algorithm then push 'grid' view into a menu - should probably be the global default because it's a pain everywhere.
* Freeze should measure the viewport width before doing anything because 2-3 columns screws the view. Should maybe just fix the headers?

Display
-------

Tag-A-Doc
---------
* Visual feedback whilst logging in?

SaaD
----
* Refresh Mechanism - used Version number of file on Open / Create, increment for each write action

Docket
------
* ** CLEANUP ** Rescale Analysis graph horizontally on screen resize ...

* ** IMPROVEMENT ** Add Tabular / Matrix View of Tags / Projects and Duration Totals (one column per-calendar month)

* ** IMPROVEMENT ** Add Timer Start (+ stop) to each item, allowing timed work

* ** IMPROVEMENT ** Add multiple dates for items (+ next to date picker field?) - to save having to create and duplicate ???

* ** CLEANUP ** Remove Legacy Archive Code (update Database Module too)


* ** IMPROVEMENT | CLEANUP ** Go through Events / Classes to pull into new module, with longer 'get' periods to avoid making events calls whenever moving between views / focus dates


* ** IMPROVEMENT ** Add multiple dates for items (+ next to date picker field?) - to save having to create and duplicate ???

* ** IMPROVEMENT | MOBILE ** Re-Ordering Items by touch... (how???)

Tiles
-----

Cover
-----

Grades
------

View
----
* ** IMPROVEMENT ** Detect and render columns containing markdown (with icon at the column top - markdown icon)
* ** BUG ** Mechanism for detecting date columns currently not working - e.g. Pages
* Turn off advanced table display for fewer filtered rows?
	+ Important to help deal with flickers
* Pass Date column information to readonly view
* ** IMPORTANT ** 'Bottom' header overlay
* Refresh should just refresh data, not overwrite filters, column visibilities and headers
* ** BUG ** Why does the border thicken on freeze? .... (Something to do with Flex)
* ** BUG ** Column names can sometimes still get out of sync?! Arghhh :)
* Linking...
* ** IMPORTANT ** Column Filters (Type)
* ** IMPORTANT ** Do we need to save view definitions? e.g. .view files / mime-type = application/x.educ-io.view <++ YES
  + Implement Save Route Handler
* Write Flexbox-based Fit Algorithm
  + Categorised data to 'pills' for display?
* Freeze should measure the viewport width before doing anything because 2-3 columns screws the view. Should maybe just fix the headers?
* Vertical Only Freeze should work better (e.g. not screw with table row cell heights?);
* Handle Merged Cells and merged ranges.
* Table Module -> Line 40 Can sometimes evaluate to NULL, on short tables particularly --> var node = nodes[Math.floor(nodes.length / 2)]; <++ IMPORTANT // Happens with very 'tall' cells.
* Numerical Filter implies re-sort?

Merge
-----


Folders
-------
* ** BUG ** Search Results Dialog now empty??

* ** IMPROVEMENT ** Can we get the owner domain of a team drive from examining ownership permissions on it or the files within it?

* ** FEATURE ** - Batch Clone to multiple folders: https://www.cloudconnectcommunity.com/ccc/ls/community/g-suite/post/4860149603500032

* Use new format MODAL form returns (once Data is stable ... activate by including Data helper in App Build)
  + Update validate method on App callers to accept object, rather than value array
  + Update _return methods on App callers to accept object, rather than value array

Reflect
-------
* ** FEATURE ** Custom Icons for Reflect Files <-- Seems to be a bit of an issue! CAN Override in Folders App though...

* ** FEATURE ** Upgrade form with latest definition? On load? By hash?

* ** FEATURE ** Target Loading from Previous Reports

* ** FEATURE ** Share on first save

* ** FEATURE ** Complete Email from Signer for pre-shared reports

* ** IMPROVEMENT ** Verify in Analysis should also recalculate summary / meta field values.

* ** IMPROVEMENT ** Replace DeepClone with our own version (better handling of Regexes) | With DEBUG tests

* ** IMPROVEMENT ** Create form -> Should lead to 'show form' pathway, with button for return to edit (same as edit but without state file)

* ** FEATURE ** Target Analysis - for individual (e.g. me) and cohort. Look at target completion over time in a tabular format (sparklines?)

* ** FEATURE ** Targets - need field / control for marking targets as being done - also interface for loading from previous reports of the same form (drop-down select, reverse selected with all previous reports?). Should load from last (meta to column/span) report of the same form type, that is completed. Then give option for changing to other report (picker?) and rolling over targets etc.

* ** FEATURE ** Evidence tracker creation - should prompt for select form/s and then scale (obviously skip if form only contains one evidence/scale field!). Then load all evidence from there. Future form updates should automatically update tracker as it will be tagged with the form name/code.
	
  
* ** TESTING ** Fields / Data - write test for toggle button on textual input (both interaction and persistence)


Publish
-------

Survey
------

* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 

Complete
--------
* ** BUG ** On Complete - an invalid share email address kills the completion process, need to handle gracefully <-- DONE
* ** IMPROVEMENT ** Edit - Cancel should not trigger refresh <-- DONE
* ** IMPROVEMENT ** Open in Drive menu links for Reports and Forms <-- DONE
* ** FEATURE ** Test Group Share <-- DONE
* ** BUG ** Dynamic List Option Generation for sub-templates (e.g. evidence in field_responses) <-- DONE
  - How does this work with hydrated data? Should options be save into form data?
* ** IMPROVEMENT ** Periodic Refresh (shorter time periods for shared dockets) - is it possible to get changes since a certain point and integrate those? <-- DONE
  Update SaaD with file version. <-- DONE
* ** BUG ** Used shared notify module to give error feedback <-- DONE
* ** BUG ** Recursive Template Hydration <-- DONE
* ** FEATURE ** Multiple Scale Associations for Targets (dialog?) <-- DONE
* ** FEATURE ** field_complex field type should have tagged scale associated with it <-- DONE
* ** BUG ** field_complex field type needs to have required check (currently ignored) <-- DONE
* ** IMPROVEMENT ** Add NO PROJECT Row to Projects View <-- DONE
* ** IMPROVEMENT ** Add Title Prepend to window.document.title <-- DONE
* ** IMPROVEMENT ** Project Status aross shared database sheets (and multiple sheet overview, together with clickable links to open each one - like an overview view)
 - Include Projects / Tags / Months hours and durations counts <-- DONE
* ** BUG ** Small width (mobile) statistics on tagged item list doesn't work well ... <-- DONE
* ** IMPROVEMENT ** @ in tag name for assignments? Different colour (gradient background) and bold etc <-- DONE
* ** IMPROVEMENT ** create.report.{{id}} route should prompt to re-use existing report if one is already open (e.g. not completed) <-- DONE
* ** BUG ** Check for enter / submit handlers of Reflect forms <-- DONE
* ** BUG ** Pressing TODAY shortcut on Analysis page jumps back to weekly but without updating state! <-- DONE
* ** IMPROVEMENT ** Put out route for Docket Files ... <-- DONE
* ** IMPROVEMENT ** Tag Search - Project Statistics, improve look of overall (graphics / colour) <-- DONE
* ** IMPROVEMENT ** Analysis Graph Legend (text looks rubbish) <-- DONE
* ** IMPROVEMENT ** Aalysis Graph Height / Responsive
  - Partly done, need to rejig mid-screen size layout and also centre tags on small screen <-- DONE
* ** VISUAL ** Modals calling modals result in flash of background cover - can this be improved?
  Sort of fixed. CSS transitions can resolve the showing of the modals, but on close the previous modal is only triggered when the old one is gone, making the modal background flash out. <-- DONE
* ** BUG ** Multi Modal - bug with Z-index (need to suspend / reactivate modal?) <-- DONE
* ** IMPROVEMENT ** Kanban - should have forward/back dates in config? <-- DONE
* ** BUG ** - Move generates two copies???? Double hookup event somewhere? <-- DONE
* ** IMPROVEMENT ** Kanban - item buttons (contextual according to status?) <-- DONE
* ** FEATURE ** KanBan style task management - using STATUS field? <-- DONE
* ** IMPROVEMENT ** Module separation <-- DONE
* ** IMPROVEMENT ** Filtered / Suggested Tags when editing <-- DONE
* ** IMPROVEMENT ** Add multiple regex parsing support in create dialog <-- DONE
* ** TEST ** SaaD Test - create / edit / delete last item (e.g. after end of sheet) | double check that Sheet Check is working properly. <-- DONE
* ** IMPROVEMENT ** Duplicate Item for Other date....e.g. for mobile ease of entry <-- DONE
* ** IMPROVEMENT ** Handle clash on updates / delete <-- DONE
	-> User notification of issues // Should be toast rather than banner <-- DONE
  -> Need to roll-back UI updates <-- DONE
* ** IMPROVEMENT ** Visual feedback on new item creation! / Use Item Template for display of updated item! <-- DONE
* ** IMPROVEMENT ** Add Hours Parsed Box into new item creation dialog <-- DONE
* ** IMPROVEMENT ** When completing an task in item edit mode - also update the details according to text box <-- DONE
* ** IMPROVEMENT ** Change Button Status (Success / Failure) Display to Flex for Center Alignment <-- DONE
* ** BUG ** Delete item can lead to subsequent hash failures on changes. <-- Bring in new SaaD version / Likely to do with order, and removing an item first <-- DONE
* ** IMPROVEMENT ** Padding Top of an Item when it wraps on normal (non-small) view... <-- DONE
* ** IMPROVEMENT ** Change Item Display Mode to Flex <-- DONE
* ** IMPROVEMENT ** Tooltips on Dialogs (e.g. click on project or tag, particularly times etc) <-- DONE
* ** FEATURE ** Task Stats / Aggregated 'Projects' using tags (hash?) <== DONE
* ** FEATURE ** Preferences Dialog <-- DONE
* ** FEATURE ** Default View <-- DONE
* ** PERFORMANCE ** Remove fadeToggle / fadeOut code from datatable.js and filters.html (template) - replace with CSS opacity animations or bootstrap collapse (then move all apps to JQUERY slim) <-- DONE
* ** BUGS ** Check saved analysis opens properly from Google Drive, and that create analysis DayJs error has gone! <-- DONE
* ** FEATURE ** Move item to different day by drag <-- DONE
	ITEM Hash function has to include reference to FROM (otherwise it won't know to save) <-- DONE
  NEED to delineate between draggable elements (e.g. timed to another day!) and non-dropable elements (like timed) ... e.g. can't drop non-timed above timed <-- DONE
* ** BUG ** Turn swipe to touch only? <-- DONE
* ** FEATURE ** TBC tag should have special colouring! <-- DONE
* ** IMPORTANT ** Loader/Spinner contained within element <-- DONE
* ** FEATURE ** Icons on RECENT items (form / report etc) <-- DONE
* ** IMPROVEMENT ** Indication that forms are still being loaded on app start <-- DONE
* Filter - Contextual Show / Hide | Hook into Show/Hide Filters <-- DONE
* ** FEATURE ** Email link from 'missing' link on Analysis page <-- DONE
* ** FEATURE ** Analysis - upload list of expected users? Save analysis query together with expected list? Maybe option to view via weekly, monthly, quarterly, yearly - on dropdown button at top (menus getting clogged) <-- DONE
* ** FEATURE ** On analysis page, need to have the option to go through in bulk and compute signature validity. Button in top command cluster? <-- DONE
* ** FEATURE ** Disable menus by state (e.g. Report menu disabled while working with a form) <-- DONE
* ** BUG ** Table filter on production version returns inconsistent results <-- DONE
* ** BUG ** Table filter doesn't work on context <-- DONE
* ** BUG ** After table filter - popovers not triggered <-- DONE
* ** FEATURE ** Add further column (e.g. group) for volunteering analysis reports <-- DONE
* ** BUG ** Drive Link after save does not appear for report (first save only) <-- DONE
* ** FEATURE ** Table header / title display <-- DONE
* Need to do the OAuth Google Acceptance Form for new scopes <-- DONE
* ** FEATURE ** Google Classroom Deadline Overlay <-- DONE
* Overlay events from Google Calendar <--DONE
* Faster Add on Mobile Dialogs - perhaps pinch action to confirm, or buttons at the top too? <-- DONE
* ** BUG ** Exclude IPv4 Addresses from Time regex to stop them being wrongly interpreted <-- DONE
* ** BUG ** Email addresses for signing can get a little screwy on certain custom volunteering reports - need to check and resolve. <-- DONE
* ** BUG ** Textarea auto-filling from Data helper (\n in field value seems to add a tab in as well as a line break...) <-- DONE
* ** DOCUMENTATION ** Finish all instructions, write guide and tutorials <-- DONE
* ** DOCUMENTATION ** More clarity on send / complete instructions about how the report and associated evidence files will be shared. <-- DONE
* ** BUG ** Cancel out of create form dialog gives error prompt <-- DONE
* ** IMPROVEMENT ** Gmail 'badge action' for signing form <-- NOT GOING TO WORK :(
* ** IMPROVEMENT ** Plain text email version - need a DOC template <-- DONE
* ** BUG ** When sending a url to create a report on a specific form - falls back to create dialog because forms are not completely loaded. Needs a promise resolution to fix! Maybe await promise resolution? <-- DONE
* Fields / Data - check toggle button rehydrates properly (doesn't for false values) <-- DONE
* Alternative Lesson Obvs Form (new field types? link to document in text field / help) <-- DONE
* Link group field to destination email? - could do just with an email address and a regex extraction? <-- DONE
* **Gracefully handle** send/share error when user does not have a Google account <-- DONE
* Send success (and failure) toast notification, including link to email if possible? <-- DONE
* Neaten up Google Sheet Analysis output <-- DONE
* Handle similar but different names on summary analysis <-- DONE
* Have total / average columns on Analysis summary, informed by field type (numeric values on radio/scale fields) and __meta tag <-- DONE
* ** BUG ** Should __extends be promulagated through to saved report (thought not...) <-- DONE
* Optional **Modal** to filter Analysis by date after picking the form/s - would inform the Drive Search query before passing data to Analysis module. <-- DONE
* ** BUG ** Extend breaks Analysis Detail View -> should only expand on final cell? <-- DONE
* ** BUG ** Completed shows up as empty object on Analysis Detail (should be blank) <-- DONE
* Move XLSX generation to DataTable? + parameterised data split as separate function (useful for other apps) <-- DONE
* ** BUG ** Interactions Data test can fail with exception without triggering a test failure! <-- DONE
* ** IMPORTANT ** Feedback on successful save? Or failure. <-- DONE
* ** BUG ** Analysis of empty forms? E.g. Lesson Observation <-- DONE
* Lesson Observation Form <-- DONE
* ** IMPORTANT ** Optional Gradings against standards <-- DONE
* Accordian ALL on Form <-- DONE
* ** BUG ** Residual Picker iFrame (should it be removed?) - causes exception in HTML2Canvas <-- DONE
* Thumbnail / Content Hint for Form (render?) <-- DONE
* **BUG** Visual Bug with Action Buttons as window width is reduced (don't wrap properly) <-- DONE
* **BUG** Field Order for responsive form fields (e.g. span) can change, breaking signing! <-- DONE
* **BUG** Button Clicks / Button text on responsive form fields (e.g. span) <-- DONE
* ** IMPORTANT ** Should have anchor links using smooth scroll to different parts of the forms, to make navigation of the form easier! <-- DONE
* ** IMPORTANT ** Escape EMAIL Regex for forms... ???? / Issue with capture groups... <-- DONE
* ** BUG ** Span field doesn't correctly wire up period duration after load <-- DONE
* ** IMPORTANT ** Logo for Verified OAuth Apps (awaiting Google?) <-- DONE
  -> https://stackoverflow.com/questions/44138213/google-oauth-consent-screen-not-showing-app-logo-and-name/44167549#44167549
  -> Re-submit form apparently!
* Change UI Buttons (Save, Complete etc) for Report / Form <-- DONE
* ** NEW FIELD ** Range Field - https://getbootstrap.com/docs/4.3/components/forms/#range <-- DONE
* ** BUG ** Sorting on an initially hidden column re-hides it! <== DONE
* ** BUG ** Import doesn't clear state (e.g. FILE / COMMENTS) properly. <-- DONE
* Import doesn't then have option to save to Google Drive (editable?) <-- DONE
* ** BUG ** Cancel from form editing dialog -> Exception <-- DONE
* ** IMPORTANT ** Save, Send & Complete Instructions / About <-- DONE
* ** IMPORTANT ** Including Save buttons at the end of Reflect Forms by cloning menu items from NAV (with imports etc) <-- DONE
* ** BUG ** Button Sizes inconsistent (Text vs Icon buttons) on Mobile / IOS & Picker problems on IOS <-- DONE
* ** IMPORTANT ** Enable Auto-Prefixer for CSS Build <-- DONE
* ** BUG ** - Click and Drag overrrides text box select handling when editing a Docket Item. <-- DONE
* Make Durations field type <== DONE
* Loader for triggered code loads (e.g. on navigate) <-- DONE
* Offer save direct to Google Drive for Exporting (with share by link option) <-- DONE
* ** IMPORTANT ** Evidence Check Boxes not being toggled (Re-Hydrate) <-- DONE
* ** IMPORTANT ** Re-Hydrate Functionality <-- DONE
* 'Save' Screenshot does not work with dynamic / loaded Stylesheets -> Fixed in Version 1.0.0 but not on CDN-JS <-- DONE
* ** IMPORTANT ** >1 Evidence Items not outputted in JSON (De-Hydrate) <-- DONE
* Check Spreadsheet API Permission for logging! Is this covered by drive permission? YES <-- DONE
* DNT for testing code... <-- DONE
* Keypress - Enter on Password Input Dialogs <-- DONE
* Export Password-Protected / Encrypted Spreadsheets <-- DONE
* Drag / Drop re-ordering <== DONE
	-> Dragging & Dropping <-- DONE
  -> Button Re-Ordering (maybe just for small screens?) <-- DONE
  -> Persist Changes back to Spreadsheet <-- DONE
* Ghost / Zombie Tasks <-- DONE
* Handle AM/PM as timed events <-- DONE
* Router File Open/Load support for Properties Filtering <-- DONE
* Filter for correctly returned doc type on picker (recent shows al,hl types?) <-- DONE
* Keyboard Shortcuts in Folders App <== DONE
* Router should include key-press shortcut handling! Would be neater to handle state tests that way! Also handle swipes / touch events. <-- DONE
* Swap Route function to register routes, with more concise checking of arguments to stop matching in data strings. <== DONE
* ** IMPORTANT ** Failed 'Recent' App load (e.g. newly deleted folder) --> Remove from Recent List <== DONE
* ** BUG ** Field_SPAN Weeks run from Sunday -> Sunday <-- DONE
* FIELD_SPAN template should use full width and bring button controls into append group on XL <-- DONE
* Move FIELD_SPAN template to use control_button template instead of button rendering itself? <-- DONE
* Put loader in TextBox when loading from Google Doc, to indicate progress / action <-- DONE
* ** BUG ** Support loading from text doc as well as Google Doc! <-- DONE
* ** BUG ** Weird visual bug with background transparent on optional (?) Complex Data Type field, e.g. Targets on Reflect Form [Grammarly Issue! Important CSS Stlye doesn't override local style...] <-- DONE
* Input group for evidence, including merge split button <-- DONE
* ** IMPORTANT ** Drop down button groups <-- DONE
* ** IMPORTANT ** Google Logo on Login button - looks like it has inherited some CSS for top padding... <-- DONE
* Add Tags to events
	-> Added UI element <-- DONE
  -> Check Button is there for SMALL UI <-- DONE
  -> Action Handler and Dialog <-- DONE
* Reload (r) doesn't reset the date to today (e.g. reloads to a previous point in the past!) <-- DONE
* Regex Match for times has whitespace matched at the beginning. <-- DONE
* Scroll it item edit <-- DONE
* Magic All Day timed value <-- DONE
* Small Screen View - Move editing item buttons to below <-- DONE
* ** BUG ** 2018 (e.g.) at the end of a due date is parsed as a time! Need to alter time regex to exclude <-- DONE
* Sort Due ? Overdue items first <-- DONE
* Due By Dates parsing <-- DONE
* ** IMPORTANT ** Log in check should also disable / loader the main get start button (for mobile usage to indicate something is happening!) <-- DONE
* Keyboard shortcuts and swipes need to deactivate when not logged in / logged out <-- DONE
* ** IMPORTANT ** Move Individual App-specific CSS to separate scss files (as per-Docket) <-- DONE
* ** IMPORTANT / BUG ** Visual Position / cover of busy spinner when scroll is offset looks weird and needs sorting. <-- DONE
* After a clear config - wrong buttons displayed (state) ... <-- DONE
* Archive Dialog and Process <-- DONE
* Time sorting of events on a single day (time early -> late) <-- DONE
* Version number on Nav bar title (App Name) <-- DONE
* ** IMPORTANT ** Handle Deleted Data File after loading config (button visiblity states) <-- DONE
* ** BUG ** Log out should clear loki DB <-- DONE
* Check Blank Lines bug? <-- Decrease row counter when deleting an item.... need to update row counts after item deleted. <== DONE
* Write Instructions & Guide <== DONE
* Jump to date option <== DONE
* Need to check heights on the scroll back hack (e.g. tablet size...) <== DONE
* Touch events should apply to whole screen <== DONE
* Scroll to should only apply on smaller screens (annoying on tablet landscape) <== DONE
* Safe Updates to underlying Sheet (check positional and hash) <== DONE
* Experiment with dash border lines below items <== DONE
* Update FROM Date <-- DONE
* Add / Update / Delete actions for Sheet DB <-- DONE
* Search from focus date if available <-- DONE
* List view should include date <-- DONE
* Visual BUG - Support Icon too wide when logged on / readme screen buttons are vertically stacked <-- DONE
* Re-order home screen on phone sizes, to put Apps button above the fold <-- DONE
* ** IMPORTANT ** Search Process and results display <-- DONE
* List view of items filtered by tags <-- DONE
* Confirm deletion of items
* ** IMPORTANT ** Remove TIME column from data and creation, check everything still works! <-- DONE
* Version DB Schema <-- DONE
* Differential Tag colours <--DONE
* ** BUG ** Artifacting top layer tooltips on items - and annoying on mobile! <-- DONE
* Tags -> Badges on Display <== DONE
* Edit Task Item text -> trigger extraction of time <-- DONE
* Keyboard shortcuts in Popovers {:.kb-shortcut} <-- DONE
* ** IMPORTANT ** Debug Only / Pre-Release Flag for hiding menu items in production <-- DONE
* Edit existing items <-- DONE
* Datetime picker to respect highlight colour <--DONE
* Date Picker on New Task Dialog <-- DONE
* Create new Task button/s <-- DONE
* Markdown formatting <-- DONE
* Bind forward / backward / today keyboard shortcuts! <-- DONE
* Status on Load Spinner <-- DONE
* Switch off display versions for non published apps on Change <-- DONE
* ** BUG ** Hidden columns become visible again once another tab is loaded, but not switched to. <-- DONE
* ** IMPORTANT ** Make Split Template generic, and have imported menus as opposed to recreate? <--DONE
* ** IMPORTANT ** Buttons for Public / Readme Apps should be explicit in their loading imports, not rely on click throughs (pop up blocking etc)? <-- DONE
* Integrate new date picker -- need to sort buttons! <-- DONE
* ** IMPORTANT ** Write test to check for low device storage....and flash up warning! <-- DONE
* ** IMPORTANT ** Make sitemap for Search Engine Submission <-- DONE
* ** Visual Bug ** - Learn More button is larger on mobile. <-- DONE
* ** BUG ** Thumbnail problems are back! <-- Or maybe not? <-- NOT AN ISSUE
* Fixed Section Scrolling on home page with Scrollify (https://projects.lukehaas.me/scrollify)? <-- DONE
* ** IMPORTANT ** Has value / has no value column filter <-- DONE
* ** BUG ** Inverted Filter doesn't work - fix before push release. <-- DONE
* Resizer gets lost after updating headers <== DONE
* Resizer isn't correct, as the nav tabs are not visible at the point it fires <== DONE
* Include Headers Functionality ... awaiting cleaning up of View Code. <== DONE
* When changing headers, respect current tab selection (data or columns) <== DONE
* Table -> Height locked with scroll <== DONE
* ** BUG ** Cancel on Pickers... <== DONE
* ** BUG ** Line 205 of Fields Helper relies on Template Engine which is not there....consider moving back to a MODULE or passing through template function (context issues) <== DONE
* ** BUG ** Line 247 of Fields Helper shouldn't be an interation, as it's implied? <== DONE
* Release version of App, issue with meta_rows.html file -> Line 5 <== DONE
* ** BUG ** Title of Google Drive picker for Load Text Box isn't correct. <== DONE
* ** BUG ** Sparse Date Columns not recognised as such .... <== DONE
* ** IMPORTANT ** Create Data object to handle form serialisation etc <== DONE
* ** IMPORTANT ** Change loader to load tab on shown, initially, rather than preload. <== DONE
* ** IMPORTANT ** State handling for toggling menu items <== DONE
* Time between Load and Display (still busy?) <== DONE
* Increase / Decrease Column Headers <== DONE
* Clock Icon for Date Columns <-- DONE
* ** BUG ** Date Formats <-- DONE
* Auto-hide hidden columns (from original sheet) <-- DONE
* ** BUG ** Subsequent Open Route has null target element (or rather, non-existent target element) :) <-- DONE
* ** BUG ** Opening instructions from the guide means you can't dismiss the modal (Maybe because sign-in has not completed?) | Caused by the target/container being async cleared after successfull logon, which leads to a race condition between that an the instructions show, so the instructions gets cleared as well (but reference held, so re-attached to the DOM without click events) SOLVED by switching container to: target: $("body") for initial MODALS <-- DONE
* ** BUG ** Data Table Filter doesn't work (Capitalisation of property names...) <-- DONE
* ** IMPORTANT ** -> Move Sheets Line 15 -> Functionality in Sheet Module <== DONE
* ** BUG ** Recent Items -> Which are Team Drives -> Fail to Open <-- DONE
* Include instructions about Exporting only exporting values rather than formulas or formats. <-- DONE
* ** IMPORTANT ** Clear process instructions? Visual? <- App Guides <-- DONE
* ** IMPORTANT ** Tutorials CSS on Guides isn't perfect... <-- DONE
* ** BUG ** Cancelling out of team drive selector leads to perpetual spinner. <-- DONE
* ** BUG ** No team drives in selector should either cause informational message or no selector <-- DONE
* Anchor offsets for sticky headers <-- DONE
* FEATURE : Audit Search Results for Sharing <-- DONE
* BUG : Set second 'focus' click to remove thumbnail popover <-- DONE
* CODE : Swap table from expanding to fixed with flex wrapping for custom properties and long ids -> Also vertically centre row content. <-- DONE
* FEATURE : Add batches to Convert <-- DONE
* FEATURE : Auto-Size Log Spreadsheet Columns <-- DONE
* CODE : Move convert to new 'stepping' method (have to include batches / need two levels of batches, one parallel etc - to avoid blowing the stack) <-- DONE
* CODE : State Save needs updating for new fields <-- DONE
* CODE : Make dialog save handler generic second order function -> E.g. actions: [{text : "Save", handler : (values) <-- DONE
* FEATURE : Accept Route in with File ID and Tag Value (from Tag-A-Doc for Reviewed) <-- DONE
* ** BUG ** : Tally misreports top level folder when tallying below it (in badges, just shows the direct children) <-- DONE
* FEATURE : Convert Single Item -> Click on Type, populate source MimeType (give output mime type options?) <-- DONE
* CODE : Convert Tally to use: _processCollection(_cloneItems, id, results => _.reject(results, item => ಠ_ಠ.Google.folders.is(item.mimeType))) <-- DONE
* CODE : Convert Star, Delete to use: _processCollection(_cloneItems, id, results => _.reject(results, item => ಠ_ಠ.Google.folders.is(item.mimeType))) <-- DONE
* FEATURE ** IMPORTANT ** Allow properties to be AND / OR <-- DONE
* ** BUG ** After refresh click (should be a menu item?) - ERROR - Requesting Selected Google Drive Folder Error: Duplicate key for property id: <== DONE
* FEATURE : Wildcard Mime Searches
* ** BUG ** Should paths (in searches) be relative to searched from root? Would be better for cloning. No - better handled in cloning method <-- DONE
* ** IMPORTANT ** FEATURE: Copy from Team Drive [feature](https://www.cloudconnect.goog/thread/21004) for Folders <-- DONE
  + Get Full Path Details for Search Results <-- DONE
  + Write 'Batcher' to minimise API calls for paths (timed and numbered?) <-- Not sure it's possible with searching by IDs <-- DONE
  + Sync isn't really sync - but pick up where left off? - should be assumed or ticked by default? <-- DONE
* FEATURE : Get Path by clicking on row in search? <-- NOT NEEDED
* ** BUG ** Tag Progress - last item not visually updated (if it is a folder...) <-- DONE
* FEATURE : Remove Tag option in tagging interface <-- DONE
* ** IMPORTANT ** FEATURE : Add Padlock to input controls on modal dialog to prevent shortcuts from overwriting them <-- DONE
* ** IMPORTANT ** IMPROVEMENT : Convert and Delete etc should operate on column filtered views (need to hook back after update mechanism) <-- DONE
* Should ಠ_ಠ.google be renamed to ಠ_ಠ.Google for consistency? <-- DONE
* Contrite Penguin 404 Page <== DONE
* ** BUG ** Pop-Up block on un-authorised Apps from button or menu item (rather than sign-in buttton) -> Check full page fallback. (Including on requesting extra scopes, e.g. View) <== DONE
* ** IMPORTANT ** Migrate View / Folders / Reflect to new Router <-- DONE
* ** IMPORTANT ** Default Router Code for Apps? <-- DONE
* ** IMPORTANT ** ** BUG ** Timeout race promise on network needs to be cancelled on successful resolution of call. <-- DONE
* Background colour highlighting for review doesn't go away when reviews are added / removed. <-- DONE
* Busy Feedback on Search Requests for Paths (can be long for certain types of GD scenarios). <-- CAPPED AT 1000
* Add All to Google Docs shortcuts on Search <-- DONE
* Add Name Search <-- DONE
* Use NULL Parents to infer route and pre-check basic search on just MIME Types <-- DONE
* ** BUG ** - Search drive root for MimeType with 'Search Whole Drive' does not function properly - Bug in Paths Promise <-- DONE
* Ellipsis Animation looks slightly wrong... <-- DONE
* ** BUG ** -> ARROW functions in return object (e.g. View)??? <-- DONE
* ** BUG ** - Locate on Tally for long tasks is broken?? <-- DONE
* Highlight rows for out-of-date reviews in red? <-- DONE
* Use Events to track recusive folder searching progress (display to user) <-- DONE
* Position of sorted icon sometimes clashes with expanding handles? <-- DONE
* Remove .map / .filter etc calls so that polyfills can be removed in favour of using Underscore. <== DONE
* ** IMPORTANT ** Token Expiration and Pop-Up? <- Depends on what triggers the flow? -- Comes back to state handling <-- DONE
* ** IMPORTANT ** Retries (in network.js) takes too long when handling security (401) errors <-- DONE
* ** BUG ** -> Token refresh (especially on folders) -> not triggering refresh properly <-- DONE
* ** BUG ** -> Sign Out does not return to un-auth state in Folders or Reflect <-- DONE
* ** IMPORTANT ** Visual Feedback for Sign-In Process <-- DONE
* ** IMPORTANT ** Clean up Page Titles -> too much duplication on XL page sizes. <-- DONE
* Remove extrenuous wording on help dialog after successfull check <-- DONE
* Make help dialog textarea resizable <-- DONE
* ** IMPORTANT ** 401 on API requests <== DONE
* App Guides need an 'open app' button <-- DONE
* ** IMPORTANT ** Move menu tooltips to RHS/LHS for larger screens (responsive breakpoints?) <== DONE
* ** BUG ** -> Menus on guides ... shouldn't be there. <-- DONE
* Occasional 404s on File Image Previews (notably, maybe exclusively, Google Formats) <-- DONE
* Tally could parse out parents and persist 'map' of folder sizes (useful when navigating through)? <-- DONE
* Update Scroll Position on Large List Conversions - e.g. follow progress. <-- DONE
* BUG -> Tally badges cause wrapping. <-- DONE
* ** IMPORTANT ** Tally should break down file / folder counts by MimeType? <-- DONE
* Links to ISSUE trackers for APPS and EXTENSIONS ?? <-- DONE
* Use TRUE as magic value in Tags (don't display) <== DONE
* ** IMPORTANT ** Make JS Request calls for SW cacheable resources with integrity flags if available <-- DONE
* Basic Search -> Parents of files not in cache (fetch?) <== DONE
* Add search for files with same tags icon to tags badge <== DONE
* Shortcut searching for certain types of searches that don't need function filters? (e.g. recurse and mimetype and simple property from Drive Root?) - Need to work back from ID to root <== DONE
* Make folders more visually obvious for clicking <== DONE
* Clean up Dialogs with Shortcut buttons (templating!) <== DONE
* Properties-based Search? Add presence and complex searchs (e.g. for reviews) <== DONE
* Autosize search boxes <-- DONE
* Update Search shortcut buttons <-- DONE
* ID Column visible on search results by default? Bug? <-- DONE
* Close button on results <== DONE
* Add / Remove Stars from Files <== DONE
* Add option to remove hide completely from column filter LINE 510 in Datatable.js <== DONE
* Adding expanding column to left of existing one results in weird behaviour! | ONLY on collapsed: true <== DONE
* LHS +/- hiding needs two clicks | ONLY on second to last column <-- DONE
* +/- positioning bug for some columns? <== DONE
* Add Review property tags <-- DONE
* Make columns hidable <- Bug at the moment <-- DONE
* Add / Remove Tags (Custom Properties) from Files <== DONE
* ** CLEAR Ticks on re-convert ** <-- DONE
* ** IMPORTANT ** Tutorial Pages <-- DONE
* Replace calls to _formatBytes with formatBytes Template Handler <-- DONE
* ** IMPORTANT ** Save Conversion Definition <-- DONE
* ** IMPORTANT ** Download Files from filtered rows results doesn't seem to be hooked up! <-- DONE
* Only add folders (by Mime Type) to recent list <-- DONE
* ** IMPORTANT ** Google Crawl Fetch rendering nothing. <-- DONE

* View Drive UI Integration = Folders Files / mime-type = .view <-- DONE
  application/x.educ-io.view
  application/x.educ-io.view-definition
  
* Folders Drive UI Integration = Folders Files / mime-type = .folders <-- DONE
  application/x.educ-io.folders-convert
  
* Occasional Problems with Picker... <-- Seems to be related to scopes. Have added https://www.googleapis.com/auth/drive.readonly and that has cleared it up? <==DONE
* ** IMPORTANT ** Mirror To Folder <-- DONE
* ** IMPORTANT ** Highlight currently processing row (spinner and......) <-- DONE
* ** IMPORTANT ** Getting Help Instructions and Process <-- DONE
* Accessibility Checks <-- DONE
* Export -> Select Single, Multiple or All Tabs for export (need a custom template for this) <-- DONE
* ** IMPORTANT ** Branding License <-- DONE
* Scripts should have [aria-hidden="true"] on them? <-- DONE
* Integrate new Bootstrap Beta <-- DONE
* Add Item doesn't reset size of textarea <-- DONE
* Occasional min sizing of TEXTAREA to 50px on smaller screens? <-- DONE
* Picker seems to have problems overlaying card for Report Form? <-- DONE
* Upload Control from Menu (for exported report) -> Use upload dialog (IMPORT) <-- DONE
* Clean Up Display.Busy for simplified calling <-- DONE
* Screenshot / Snapshot not working properly from button at bottom of form. <-- DONE
* Guides functionality for Apps <-- DONE
* ** IMPORTANT ** 'Get Help' Pages and Services <-- DONE
* Add scss mixins functionality <-- DONE
* Regex to extract Email Address from person fields (with various types of surrounding brackets) <-- DONE
* ** IMPORTANT ** Thumbnail of Saved Report / Form -> Uploaded with file to Google Drive <== DONE
* Load Text from Doc for Textual Control <-- DONE
* ** IMPORTANT ** De-Hydrate Functionality <-- DONE
* Recently Saved Reports <== DONE
* Should everything be written as sheets or JSON? .reflect files? With output to spreadsheet? How does this impact analytics? <== DONE

* Drive UI Integration = Reflect Files / mime-type = .reflect <-- DONE
  application/x.educ-io.reflect-scale
  application/x.educ-io.reflect-form
  application/x.educ-io.reflect-report
  application/x.educ-io.reflect-review
  
* File Upload to Google Drive (File From Evidence Menu) <-- DONE
* URL for Evidence <-- DONE
* Paper / Offline for Evidence <-- DONE
* Evidence List should close aspects/standard when a new one is selected <-- DONE
* Field Span <-- DONE
* Manual Selection for Processing Results (tick boxes?) <-- DONE
* Can we save as PDF directly in the same folder as the Google Doc / Sheet etc is in? What about from a link directly from Google Drive - does that give the parent folder info as well as the File ID? (NO IT DOESN'T) <-- DONE
* Put App Logos in Menu <-- DONE
* After Sign-In ... Recent Breaks? ERROR - Recent Items Failure DOMException: Failed to execute 'transaction' on 'IDBDatabase': The database connection is closing. (index):3687 <-- DONE
* List App as Drive Handling App / Shortcut <-- https://www.googleapis.com/auth/drive.install (https://developers.google.com/drive/v3/web/integrate-open)
* Handle remove app from Google account, e.g. delete local hello data... <== DONE
* ** IMPORTANT ** * Sign out doesn't route back to initial text in REFLECT App? <-- SEEMS TO HAPPEN SOMETIMES on VIEW as well? <== DONE
* ** IMPORTANT ** Gracefully handle increasing Google Scopes (e.g. jump up to email, full drive access etc) | Lazy Permission Requests.... <-- Pass a function to the Google API that returns a promise to increase scopes, and a checker (request scope?) <== DONE
* Vertical Freeze only <== DONE
* API Scopes (urls) don't wrap on scopes page, meaning page width exceeds header width ... <== DONE
* Move Export Selection to Dialog Box (rather than menu items) -> Or series of Options Dialogs (better documentation support?) <== DONE
* Test page for Javascript / Browser Features! <= DONE
* Invalid dates popping through into App when no cell content <= DONE
* Test new Excel .xls BIFF5 & BIFF8 outputs. Issues with newest output. <== DONE
    REPLACE:
`     var __toBuffer = function(bufs) { var x = []; for(var i = 0; i < bufs[0].length; ++i) { x.push.apply(x, bufs[0][i]); } return x; };   `
`     var je=function(e){var r=[];for(var t=0;t<e[0].length;++t){r.push.apply(r,e[0][t])}return r};   `
    WITH:
`     var __toBuffer = function(bufs) { return [].concat.apply([], bufs[0]); };   `
`     var je=function(e){return [].concat.apply([], e[0])};  `
* Add Material Icons to Pages <-- DONE
* Default Button for Textual Field <-- DONE
* Add Fonts to Credits page.... <-- DONE
* Generic Output Evidence Picker <-- DONE
* Comprehensive Teachers' Standards Evidence Picker <-- DONE
* Basic Reflect Report Form <-- DONE
* Make all re-usable form components sizable (with large option) <-- DONE
* Don't forget resizable CSS & Code <-- DONE
* Added Material Icon Support <-- DONE
* Table Module -> 'Flickering Bug' on Table Sroll to End on Occasional Sheets <-- DONE
* Scroll Bars are still buggy in Chrome <-- DONE
* Hidden-First Visibiity on 'View' needs to be hidden <-- DONE
* Added Performance Flag <-- DONE
* Should we remove entirely blank columns???? <-- DONE
* Deal with NaN - Undefined in size handling! <-- DONE
* SEARCH and CONVERT Instructions... <-- DONE
* FOLDERS -> Fill in app authorisation form -- https://support.google.com/code/contact/oauth_app_verification && https://support.google.com/cloud/answer/7454865 <-- DONE
* Add Team Drive Open Button <-- DONE
* Test Conversion in Team Drives. <-- DONE
* Gracefully handle authentication errors: <== DONE
* Check Get Started Button on Folders - Does it work from Un-Auth? <-- Pop-Up Blocker on Incognito tab. But button + script does work? <-- DONE
* VIEW -> Fill in app authorisation form -- https://support.google.com/code/contact/oauth_app_verification && https://support.google.com/cloud/answer/7454865 <-- SUBMITTED
* Add Markdown as an output format. <-- DONE
* [object Object] Parsing Weirdness on View HEADERS if blank cells. <-- DONE
* Export Bug on Table Chain ... <-- DONE
* Jump out link to View for Spreadsheets? <== PUT IT IN THE TYPE COLUMN? <-- DONE
* Bug on Spreadsheet Conversion Logs -> SeemsJust to create 4? Also - should be turned off if batch size is set to 0? <-- DONE
* Can we do an in-place MimeType change? <-- DONE
* Search and Remove -> Cleaning Up! <-- DONE
* Handle 204 Status Gracefully <-- DONE
* Clear Buttons on Search <-- DONE
* Add Size to output rows. <-- DONE
* Team Drive Support <-- DONE
* Rename Instructions -> Help // Add Short Name for folding down at below LG <-- DONE
* START VIEW LAYOUT ISN'T right on .md sized screen <-- DONE
* Collapse App Title on < LARGE display <-- DONE
* Catch Promise Errors in tally, continue but mark the data as suspect? <== DONE
* Remove Item from List <== DONE
* Suppress 'preview' on remove click. <== DONE
* Attach Statistics to Loki objects to persist filters. <-- DONE
* EMPTY Folders <-- DONE
* Parallelize Files / Folders with batches <-- DONE
* File / Folder Count <-- DONE
* Search Result Statistics in 'Alert' style dialog <-- DONE
* Shift Console.time to Flags Module (Debug Perf) <-- DONE
* Write Instructions for 'Folders' <-- DONE
* Extend highlight= instead of anchor links into about pages etc? <-- DONE
* Write Requirements <-- DONE
* Write Support <-- DONE
* ON UPDATE, need to force a refresh! <-- DONE
* Future and Past Filters? Are they working?? ... need to deal with the numerical values here? <-- DONE
* Handle no-App-route situation <-- DONE
* Version Update Details aren't correct (as it's cached!) ... need to fix <-- DONE
* Sign-Out should clear the 'protect' flag for jump out links <-- DONE
* Breadcrumbs for Navigation <== DONE
* Back <-> Forward Navigation for Folder Loading? <== DONE
* Close Search Results <== DONE
* Need to have a state property attached to menu items in the app yaml file. Some commands (e.g. Open) don't need to be navigated back to, whereas others (e.g. Freeze) make sense to turn off on back. Some (e.g. Toggles) will go into the back stack straight away? Others might be one removed e.g. Back takes you to the last state rather than 'undoing' an action? <== DONE
* Do anchor tags always work? E.g. Folders on Changes and Scopes? <-- DONE (a different way)
* Single Letter Icon is partially hidden on mobile (maybe z-index?). Only on App page though.... <--// DONE
* Where to put the link to the scopes? <--// DONE
* Add Folder Features <--// DONE
* Write Security Policy & Cookie Policy <--// DONE
* Provide standardised DNT Support? <--// DONE
* CHANGES page 404's even with SW loaded???? -- NOT ALL PAGES seem to be cached? <--// DONE
* Write Permissions showing Pages, including details of why the permissions are needed. <--// DONE
* Write Readme <--// DONE
* Style and tweak copyright notice <--// DONE
* Instantiate Popper in 'Normal' Pages? <--// DONE
* Move bulk of YAML config from __page__ to template? <--// DONE
* Markdownify Lead Paragraph but add lead class in? <--// DONE
* New Version Available - trailing dash??? <--// DONE
* CHANGES page should have improved layout for app versions??? <--# DONE
* Open Source CREDITS Page -- pulled from apps? <--// DONE
* Need to handle event on load - parse original anchor fragment <--# DONE
* Put in retry loop (3 times?) for conversion result save <--# DONE
* BUG: Proceed --> Click on Educ Logo to go back to main page breaks (goes to undefined!) <--# DONE
* Does version alert still work??? <--# DONE
* File IDs need to be changed in search results. <--# DONE
* Searches in tabs? Tied to a Search module??? <--# DONE
* Hide NOW doesn't work on visibility (assume field / index mismatch???) <--# DONE
* Check if _ _ class property makes it through to rows. <--# DONE
* Overflow isn't hidden on Folders View???? <--# DONE
* Vertical Scroll Borked .. was sr-only class issue? <== DONE
* Put Search Children Input on Search Dialog (default ticked) <-- DONE
* Searches on Modified Rows clear the classes - maybe we should make those changes to the data source as well? <-- DONE
* Sort on Type <-- DONE
* BUG: After Filter on table, data toggles are lost??? <-- DONE
* Name for Folders loaded via the 'LOAD' method? <-- DONE
* Authentication Error during Conversion Process - WHY? And how to cope with it? -> HTTP / 401 error. Need to _pause_ and get new token? <-- DONE, but still delay?
* Error on File Conversion logs WRONG File INDEX Number to console <-- DONE
* Move Filtered Table Code to Generic (including sorting, filtering & visibilities). <-- DONE
* Makes filtering Data Set into Module (dataset) <--- IMPORTANT <-- DONE
* NOT Ignoring $RECYCLE.BIN when it should be?????? <== DONE
* Spreadsheet Log out of conversion process (successes and failures) <== DONE
* Make a smaller loader that can fit within a table row element!  <== DONE
* Signout to clear only app recents, not global <== DONE
* Change educ namespace variable where it is still _ to ಠ _ ಠ <== DONE
* GOING BETWEEN APPS RESULTS IN 401 on Auth call. Need to 'rename' the provider in the main.js code -> Hello: including the name of the app so that auth keys are stored differently for each app on the site? <== DONE
* Display Files / Folders once the Folder is open (in a tab?) <== DONE
* Display Search Results <== DONE
* If we include FOLDERS in our return MIMEs on search, how do we express that in our includes? MIME then filter? <== DONE
* Search Options in Dialog <== DONE
* SPLIT OAuth Credentials, per App <-- DONE
* Add Timeout Backoff on API Calls in Google <-- DONE
* BUG: Button on Landing Page only works once <== DONE
* Write Auth'ed Landing Page [Process] <== DONE
* Write instructions, including further filter instructions <== DONE
* Write Public Landing Page [Features] <== DONE
* Changelog Page <== DONE
* Need to handle event on load - parse original anchor fragment or querystring? <== DONE
* Add Refresh Current Sheet (like SHIFT-CLICK) <== DONE
* BUG: Toggle Column Visibility at the end... <-- DONE
* BUG: Restore Hidden Column <-- DONE
* Parse Generated Link <-- DONE
* Link Shortener API Interfacing - https://developers.google.com/url-shortener/v1/ <-- DONE
* Remove Recent Command Handler <-- DONE
* Add Link generation including QR Code = https://chart.googleapis.com/chart?cht=qr&chs=540x540&chl=http://www.google.com&choe=UTF-8 <-- DONE
* Recents for Files / Part way done with LOAD route / Maybe Card on AUTH view? <-- DONE
* Show/Hide Column Selector dodgy on mobile (scroll and dropdowns) <-- DONE, was Bootstrap bug resolved in 4.0.0-beta
* Sheet Tab Headers should wrap? <- DONE
* Filter boxes are too wide on a small device. Need to stack them up rather than inline them on small screens. <-- DONE
* Tooltips are annoying after a while. Should hang around once then leave? <-- DONE
* BUG: Handle Router Directive before App Route broken <-- DONE
* BUG: Collapse Menu (Mobile) on Click <-- DONE
* Frozen Rows / Columns <-- DONE
* BUG: If you set an 'collapsed' column back to visible, it doesn't show <-- DONE
* Scroll doesn't respect classes on tr>td (they get lost in scroll transition) <-- DONE
* Adjust Headers to Frozen Row Count
* > / now filter future / past?
* DETACH rather than hide header columns on _updateHeaders <-- DONE
* Hide now means indexing doesn't work... <-- DONE
* Hide / Show Visibility Columns <-- DONE
* Exports correctly for default (hide headers) <-- DONE
* BUG? Collapse Forms hide scrollbars when hidden! <-- DONE
* BUG? Fixed-Table doesn't work properly with vertical scroll (maybe related to above?) <-- DONE
* BUG: Shift table scroller to instance, not global <-- DONE
* Add Export Filtered Code <-- ADD HEADINGS in first line (not properties) <-- DONE
* Shift click to refresh <-- DONE
* Maybe filters should get Delete Crosses to remove them? <-- DONE
* Add Restore to Defaults <-- DONE
* c.hiddenByUser to be hidden initially <-- DONE
* Font Sizing for fixed width? <-- DONE
* Clear Filters / Sorts & Visibilities <-- DONE
* Restructure View JS <-- DONE
* Clean Array Rows? <-- DONE
* CLear widths on reload. <-- DONE
* Update Router to handle sub-commands (hash = command.subcommand) <-- DONE
* Move Auth flow trigger for commands into Main Module <-- DONE
* Commands requiring Authentication (e.g. Open on View) should trigger auth-flow <-- DONE but currently handled on a per app basis.
* Should second level commands (e.g. export on view) be inactive until they are 'possible'? How to declaratively encode this in terms of state? <-- DONE
* Instructions should overlay (?) the page rather than interupting app flow <-- DONE (Modal)
* Gracefully handle the .map issue for injected async/fetched CSS <-- Relative path at end of Bootstrap CSS (e.g. /*# sourceMappingURL=bootstrap.min.css.map */) <-- DONE
* Add Icon/s to Google Console App <-- DONE
* Slow Collapse Hide (Table re-render?) <-- Shifted to Fade (better performance)
* Sometimes there is a form submit(????) on Enter in Filter box on View <-- DONE
* Put filter as title over thead / th <-- DONE
* Handle Complex Header Options <-- DONE
* Visibility panel (templated) <-- DONE
* Tooltips for Visibility / Sort Control <-- DONE
* Inversion Option for Filters <-- DONE
* Better Operator / Filter Instructions in View <-- DONE
* Handle Operaters in View Filter <-- DONE
* Large Table Render & Filter/Sort Performance <-- Currently Clusterize
* Hide placeholder / un-published apps from Menu / Sitemap <-- DONE
* Make Google JSAPI Part of the Picker Process in Google_API Module -- This needs to be in the controller module, hook up Async script load event to promise resolve for 'no-cors' requests. <-- DONE
* Namespace whole App within single window variable to prevent variable bleed <-- DONE
* Minify Scripts? <-- DONE
* Get to 100 on PageSpeed Insights for all pages! <-- DONE apart from annoying Google Scripts! (Just analytics to go!)
* DEBUG flag to avoid registering Service Worker (for performance testing) <-- DONE
* Improve Font Handling <-- DONE
* Progressive Render Experience / Sort out CSS loading for consistent visual performance - e.g. not glitchy load display! <-- DONE
* Can update alert appear without a forced refresh? <-- Resolved with 5-sec delayed call
* Why does Upgrade Alert Sometimes Appear then get hidden! <-- Resolved
* Loader Screwing Up under CPU load??? Ironically. <-- Fixed with simplified loader
* Set no-cors on Fetch for Service Worker / particular Google JSAPI
* Structure Async Loading of Resources, including polyfills for IOS etc
* Convert APP Metadata to Arrays rather than split comma arrays
* Visual Sizing BUG with Loader (overspills?)
* Handle data load on tab show event, rather than click
* Update spinner to do highlight colour shades
* Can we upload an HTML file to Google Drive and convert it to a Doc for sharing etc? <-- YES
* Restructure SASS files
* Add Async / Defer to Imported Scripts
* Update Environment Variable to set debug/minimised JS versions, and analytics
* Move Docs to Compiled Page to Improve Speed / Caching
* Move Loader to Template / CSS

ᕕ( ᐛ )ᕗ JD - 2019-06-12