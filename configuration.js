const path = require("path");
const app_root = path.dirname(__dirname); 

module.exports = {
        PORT: parseInt(process.env['PORT']) || 8080,
        HISTORY_DIR: process.env['WBO_HISTORY_DIR'] || path.join(app_root, "server-data"),
       WEBROOT: process.env['WBO_WEBROOT'] || path.join(app_root, "client-data"),
    SAVE_INTERVAL: parseInt(process.env['WBO_SAVE_INTERVAL']) || 1000 * 2, 

    MAX_SAVE_DELAY: parseInt(process.env['WBO_MAX_SAVE_DELAY']) || 1000 * 60, 
    MAX_ITEM_COUNT: parseInt(process.env['WBO_MAX_ITEM_COUNT']) || 32768,

    MAX_CHILDREN: parseInt(process.env['WBO_MAX_CHILDREN']) || 192,

    MAX_BOARD_SIZE: parseInt(process.env['WBO_MAX_BOARD_SIZE']) || 65536,

    MAX_EMIT_COUNT: parseInt(process.env['WBO_MAX_EMIT_COUNT']) || 192,

    MAX_EMIT_COUNT_PERIOD: parseInt(process.env['WBO_MAX_EMIT_COUNT_PERIOD']) || 4096,

    BLOCKED_TOOLS: (process.env['WBO_BLOCKED_TOOLS'] || "").split(','),
};
