/* leny/uses
 *
 * /src/core/with-tooltip.js - Implement tooltip in components
 *
 * coded by leny@flatLand!
 * started at 21/03/2019
 */

import {useState} from "react";
import {
    translateX,
    translateY,
    percent,
    s,
    cubicBezier,
    rem,
    attr,
} from "@pwops/core";

import {MAIN_COLOR, BCG_COLOR} from "./constants";

export const styles = {
    position: "relative",
    "&::before, &::after": {
        visibility: "hidden",
        opacity: 0,
        pointerEvents: "none",
        transition: ["all", s(0.15), cubicBezier(0.5, 1, 0.25, 1)],
        zIndex: 1,
    },
    "&::before": {
        absolute: ["auto", "auto", percent(100), percent(50)],
        padding: [rem(0.5), rem(1.5)],
        minWidth: rem(12),
        whiteSpace: "nowrap",
        borderRadius: rem(0.3),
        background: MAIN_COLOR,
        color: BCG_COLOR,
        content: attr("data-tooltip"),
        textAlign: "center",
        fontSize: rem(1.4),
        lineHeight: 1.2,
        marginBottom: rem(0.5),
        transform: translateX(percent(-50)),
    },
    "&::after": {
        absolute: ["auto", "auto", percent(100), percent(50)],
        border: [rem(0.8), "solid", "transparent"],
        width: 0,
        content: `""`,
        fontSize: 0,
        lineHeight: 0,
        transform: translateX(percent(-50)),
        borderTop: [rem(0.8), "solid", MAIN_COLOR],
        borderBottom: "none",
    },
    "&[data-tooltip]:hover::before, &[data-tooltip]:hover::after": {
        visibility: "visible",
        opacity: 1,
        transform: [translateX(percent(-50)), translateY(rem(-0.5))],
    },
};

export default tooltip => {
    const [isHovered, setHovered] = useState(false);

    if (!tooltip) {
        return {};
    }

    return {
        title: isHovered ? "" : tooltip,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        "data-tooltip": tooltip,
    };
};
