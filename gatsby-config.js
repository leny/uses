/* leny/uses
 *
 * /gatsby-config.js - Gatsby main configuration file
 *
 * coded by leny@flatLand!
 * started at 19/03/2019
 */

module.exports = {
    plugins: [
        {
            resolve: `gatsby-plugin-emotion`,
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Source Sans Pro`,
                        variants: [`400`, `600`],
                    },
                ],
            },
        },
    ],
};
