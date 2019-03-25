/* leny/uses
 *
 * /src/components/content/box.js - Content Box Component
 *
 * coded by leny@flatLand!
 * started at 20/03/2019
 */

import React from "react";

import {css} from "@pwops/emotion-css";
import {rem, important, rgba, percent, translateX} from "@pwops/core";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    BCG_COLOR,
    ALT_COLOR,
    ALT_HOVER_COLOR,
    MQ_SMALL_DESKTOP,
} from "../../core/constants";
import {mq} from "../../core/utils";

const styles = {
    container: css({
        position: "relative",
        background: BCG_COLOR,
        padding: [rem(2), rem(2), rem(1)],
    }),
    content: css({
        position: "relative",
        zIndex: 200,
    }),
    title: css({
        margin: [0, "auto", rem(1.6)],
        fontSize: rem(2.6),
    }),
    icon: css({
        absolute: ["auto", "auto", rem(1.6), percent(50)],
        display: "block",
        margin: [0, "auto", rem(2)],
        size: important(rem(7.2)),
        color: rgba(0, 0, 0, 0.1),
        transform: translateX(percent(-50)),
        ...mq(MQ_SMALL_DESKTOP, {
            size: important(rem(25)),
            color: rgba(0, 0, 0, 0.05),
            bottom: 0,
        }),
    }),
    text: css({
        fontSize: rem(1.8),
        a: {
            color: ALT_COLOR,
            textDecoration: "none",
            cursor: "pointer",
            transition: ["color", ".25s", "ease-in-out"],
            "&:hover": {color: ALT_HOVER_COLOR},
        },
        hr: {
            border: 0,
            size: [percent(25), rem(0.1)],
            margin: [0, "auto", rem(1)],
            background: "silver",
        },
    }),
};

export default ({className, frontmatter: {icon, title} = {}, html}) => {
    let $title, $icon;

    if (title) {
        $title = <h2 css={styles.title}>{title}</h2>;
    }

    if (icon) {
        $icon = <FontAwesomeIcon css={styles.icon} icon={icon} />;
    }

    return (
        <div css={styles.container} className={className}>
            {$icon}
            <div css={styles.content}>
                {$title}
                <div
                    css={styles.text}
                    dangerouslySetInnerHTML={{__html: html}}
                />
            </div>
        </div>
    );
};
