/* Information about this package */
Package.describe({
    // Short two-sentence summary.
    summary: "Piwik tracking for Meteor.",
    // Version number.
    version: "0.3.1",
    // Optional.  Default is package directory name.
    name: "vjrj:piwik",
    documentation: 'README.md',

    git: 'https://github.com/vjrj/piwik'
});

/* This defines your actual package */
Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use([
       'ecmascript',
       'check'
    ]);

    var both = ["client", "server"];

    api.addFiles(['client/piwik.js'], ['client']);
    api.addFiles(['server/piwik.js'], ['server']);
});

/* This lets you use npm packages in your package*/
Npm.depends({
    "piwik-tracker": "1.0.0"
});
