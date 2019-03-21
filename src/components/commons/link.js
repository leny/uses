/* leny/kourikoulom
 *
 * /src/components/commons/link.js - Link Component
 *
 * coded by leny@flatLand!
 * started at 08/03/2019
 */

import React from "react";
import {css} from "@pwops/emotion-css";

import {ALT_COLOR, ALT_HOVER_COLOR} from "../../core/constants";
import withTooltip, {styles as tooltipStyles} from "../../core/with-tooltip";

const styles = {
    container: css({
        color: ALT_COLOR,
        textDecoration: "none",
        cursor: "pointer",
        transition: ["color", ".25s", "ease-in-out"],
        "&:hover": {color: ALT_HOVER_COLOR},
        ...tooltipStyles,
    }),
};

export default ({className, children, url, tooltip = ""}) => {
    return (
        <a
            href={url}
            rel={"external"}
            target={"_new"}
            css={styles.container}
            className={className}
            {...withTooltip(tooltip)}>
            {children}
        </a>
    );
};
