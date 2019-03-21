/* leny/uses
 *
 * /src/components/footer/footer.js - Footer Component
 *
 * coded by leny@flatLand!
 * started at 21/03/2019
 */

import React from "react";

import {css} from "@pwops/emotion-css";
import {rem, linearGradient, rgba, important} from "@pwops/core";
import {mq} from "../../core/utils";

import {NBSP, BCG_COLOR, ALT_COLOR, MQ_TABLET} from "../../core/constants";

import Link from "../commons/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LINKS = [
    {url: "//github.com/leny", title: "GitHub", icon: "fab_github-alt"},
    {url: "//medium.com/@leny_be", title: "Medium", icon: "fab_medium-m"},
    {url: "//twitter.com/leny_be", title: "Twitter", icon: "fab_twitter"},
    {url: "//www.npmjs.com/~leny", title: "npm", icon: "fab_npm"},
    {
        url: "//be.linkedin.com/in/padelnatte",
        title: "linkedin",
        icon: "fab_linkedin",
    },
    {url: "//dribbble.com/leny", title: "Dribbble", icon: "fab_dribbble"},
    {
        url: "//instagram.com/lenymccormick",
        title: "Instagram",
        icon: "fab_instagram",
    },
];

const styles = {
    container: css({
        background: BCG_COLOR,
        padding: [rem(1), rem(2)],
        position: "relative",
        zIndex: 100,
        "&::before": {
            content: `""`,
            absolute: [rem(-2), 0, 0, 0],
            height: rem(2),
            background: linearGradient("transparent", rgba(0, 0, 0, 0.5)),
        },
        ...mq(MQ_TABLET, {
            flexRow: ["space-between", "center"],
        }),
    }),
    name: css({
        margin: [0, "auto", rem(1.6)],
        fontSize: rem(1.6),
        textAlign: "center",
        ...mq(MQ_TABLET, {flex: [1, 0, 0], margin: 0, textAlign: "left"}),
    }),
    socials: css({
        textAlign: "center",
        ...mq(MQ_TABLET, {flex: [1, 0, 0], textAlign: "right"}),
    }),
    link: css({
        margin: [0, rem(0.5)],
    }),
    icon: css({
        size: [important(rem(2.2))],
        ...mq(MQ_TABLET, {size: [important(rem(2.4))]}),
    }),
};

export default ({className}) => {
    return (
        <footer css={styles.container} className={className}>
            <p css={styles.name}>
                <Link href={"//leny.me"}>{"2019, leny.me"}</Link>
                {NBSP}
                {"(source code on"}
                {NBSP}
                <Link href={"//github.com/leny/uses"}>{"leny/use"}</Link>
                {")"}
            </p>
            <nav css={styles.socials}>
                {LINKS.map(({url, title, icon}) => (
                    <Link
                        key={title}
                        url={url}
                        tooltip={title}
                        css={styles.link}>
                        <FontAwesomeIcon
                            color={ALT_COLOR}
                            css={styles.icon}
                            icon={icon.includes("_") ? icon.split("_") : icon}
                        />
                    </Link>
                ))}
            </nav>
        </footer>
    );
};
