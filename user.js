user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // for enable userChrome/userContent
user_pref("svg.context-properties.content.enabled", true); // for svg
user_pref("layout.css.color-mix.enabled", true); // for color-mix
user_pref("browser.theme.unified-color-scheme", true); // keep webpages in sync with the toolbar theme

// * Available preferences

user_pref("userChrome.ui-chrome-refresh", true);

// * Color themes, use only one
user_pref("userChrome.theme-chrome-refresh", true);
// user_pref("userChrome.theme-default", true);
// user_pref("userChrome.theme-material", true);
user_pref("userChrome.theme-default", false);
user_pref("userChrome.theme-material", false);

// * Force enable control animation, because by default respects the user animation disable preference.
// * (Not required if you do not disable animation)
// user_pref("userChrome.ui-force-animation", true);

// * Make the URL bar more compact by reducing its height
// user_pref("userChrome.ui-compact-url-bar", true);

// * Hide menu icons
// user_pref("userChrome.ui-no-menu-icons", true);
