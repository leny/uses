/* leny/uses
 *
 * /src/components/content/box.js - Content Box Component
 *
 * coded by leny@flatLand!
 * started at 20/03/2019
 */

import React from "react";

import {css} from "@pwops/emotion-css";
import {rem} from "@pwops/core";

import {BCG_COLOR} from "../../core/constants";

const styles = {
    container: css({
        background: BCG_COLOR,
        padding: [rem(1), rem(2), 0],
    }),
    title: css({}),
    icon: css({}),
};

export default ({className, title = "No title"}) => {
    return (
        <section css={styles.container} className={className}>
            <h2 css={styles.title}>{title}</h2>
            <p>
                {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tempor nulla. Proin vitae condimentum neque. Nullam lobortis in tellus quis commodo. Nullam aliquam ligula eu neque volutpat elementum. Aliquam erat volutpat. Proin sed porttitor sapien, at porta nisi. Aenean eleifend vel lectus at lobortis. Duis non libero non lorem viverra accumsan. Nam ac risus eu sem rhoncus iaculis sit amet eu nisl. Nulla eros risus, egestas in tristique vel, luctus vitae libero. Pellentesque convallis risus sit amet sem rutrum laoreet."
                }
            </p>
            <p>
                {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tempor nulla. Proin vitae condimentum neque. Nullam lobortis in tellus quis commodo. Nullam aliquam ligula eu neque volutpat elementum. Aliquam erat volutpat. Proin sed porttitor sapien, at porta nisi. Aenean eleifend vel lectus at lobortis. Duis non libero non lorem viverra accumsan. Nam ac risus eu sem rhoncus iaculis sit amet eu nisl. Nulla eros risus, egestas in tristique vel, luctus vitae libero. Pellentesque convallis risus sit amet sem rutrum laoreet."
                }
            </p>
            <p>
                {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel tempor nulla. Proin vitae condimentum neque. Nullam lobortis in tellus quis commodo. Nullam aliquam ligula eu neque volutpat elementum. Aliquam erat volutpat. Proin sed porttitor sapien, at porta nisi. Aenean eleifend vel lectus at lobortis. Duis non libero non lorem viverra accumsan. Nam ac risus eu sem rhoncus iaculis sit amet eu nisl. Nulla eros risus, egestas in tristique vel, luctus vitae libero. Pellentesque convallis risus sit amet sem rutrum laoreet."
                }
            </p>
        </section>
    );
};
