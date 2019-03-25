/* leny/uses
 *
 * /gatsby-config.js - Gatsby main configuration file
 *
 * coded by leny@flatLand!
 * started at 19/03/2019
 */

module.exports = {
    pathPrefix: "/uses",
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/data`,
                name: "markdown-pages",
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-emotion`,
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
