/* leny/uses
 *
 * /gatsby-node.js - Gatsby node configuration file
 *
 * coded by leny@flatLand!
 * started at 25/03/2019
 */

exports.onCreateWebpackConfig = ({stage, loaders, actions}) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /react-intersection-visible-hook/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }
};
