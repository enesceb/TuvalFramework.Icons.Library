const manifest  = require('./manifest');
const appName = manifest.application.name;
const appIcon = manifest.application.icon;

module.exports = {
    id: appName,
    name: appName,
    application: "true",
    category: "General",
    icon: appIcon
}