/* leny/uses
 *
 * /src/components/header/header.js - Header Component
 *
 * coded by leny@flatLand!
 * started at 20/03/2019
 */

import React from "react";

import {css} from "@pwops/emotion-css";
import {rem, percent, linearGradient, rgba} from "@pwops/core";
import {mq} from "../../core/utils";

import {BCG_COLOR, MQ_SMALL_DESKTOP} from "../../core/constants";

import Title from "../svg/title";

const styles = {
    container: css({
        flexRow: ["flex-start", "center"],
        background: BCG_COLOR,
        padding: [0, rem(2)],
        position: "relative",
        "&::after": {
            content: `""`,
            absolute: [percent(100), 0, 0, 0],
            height: rem(2),
            background: linearGradient(rgba(0, 0, 0, 0.5), "transparent"),
        },
    }),
    icon: css({
        height: rem(2.5),
        ...mq(MQ_SMALL_DESKTOP, {
            height: rem(3.6),
        }),
    }),
};

export default ({className}) => {
    return (
        <header css={styles.container} className={className}>
            <h1>
                <Title css={styles.icon} title={"leny/uses"} />
            </h1>
        </header>
    );
};
