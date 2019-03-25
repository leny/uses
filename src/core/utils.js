/* leny/uses
 *
 * /src/core/utils.js - Misc utils
 *
 * coded by leny@flatLand!
 * started at 21/03/2019
 */

export const mq = (query, props = {}) => ({
    [`@media(${query})`]: props,
});

export const guardedWindow = () => {
    return typeof window !== "undefined" ? window : {};
};

export const guardedDocument = () => {
    return typeof document !== "undefined" ? document : {};
};
