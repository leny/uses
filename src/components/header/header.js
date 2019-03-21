/* leny/uses
 *
 * /src/components/header/header.js - Header Component
 *
 * coded by leny@flatLand!
 * started at 20/03/2019
 */

import React from "react";

import {css} from "@pwops/emotion-css";
import {rem} from "@pwops/core";

import {BCG_COLOR} from "../../core/constants";

import Title from "../svg/title";

const styles = {
    container: css({
        flexColumn: ["flex-end", "flex-start"],
        background: BCG_COLOR,
        padding: [rem(1), rem(2), 0],
    }),
    title: css({}),
    icon: css({
        height: rem(5),
    }),
};

export default ({className}) => {
    return (
        <header css={styles.container} className={className}>
            <h1 css={styles.title}>
                <Title css={styles.icon} title={"leny/uses"} />
            </h1>
        </header>
    );
};
