/* leny/uses
 *
 * /src/pages/index.js - Entry point page container
 *
 * coded by leny@flatLand!
 * started at 19/03/2019
 */

import React from "react";

import {Helmet} from "react-helmet";
import "../core/font-awesome";
import GlobalStyles from "../components/head/global-styles";
import {vw, vh, rem} from "@pwops/core";
import {css} from "@pwops/emotion-css";

import Header from "../components/header/header";
import Planets from "../components/commons/planets";
import ContentBox from "../components/content/box";

import {BCG_COLOR} from "../core/constants";

const styles = {
    wrapper: css({position: "relative"}),
    boxIntro: css({
        display: "block",
        position: "relative",
        background: BCG_COLOR,
        size: [vw(100), vh(50)],
        zIndex: 100,
    }),
    header: css({
        sticky: [0, "auto", "auto"],
        width: vw(100),
        zIndex: 200,
    }),
    planets: css({
        fixed: [0],
        size: [vw(100), vh(100)],
        objectFit: "cover",
        zIndex: 1,
    }),
    content: css({
        position: "relative",
        marginTop: vh(50),
        zIndex: 100,
    }),
    boxContent: css({
        width: vw(33),
        margin: [0, "auto", rem(15)],
    }),
};

export default () => {
    return (
        <div css={styles.wrapper}>
            <Helmet>
                <title>{"leny/uses"}</title>
            </Helmet>
            <GlobalStyles />
            <ContentBox css={styles.boxIntro} />
            <Header css={styles.header} />
            <Planets css={styles.planets} animate={true} />
            <div css={styles.content}>
                <ContentBox css={styles.boxContent} />
                <ContentBox css={styles.boxContent} />
                <ContentBox css={styles.boxContent} />
                <ContentBox css={styles.boxContent} />
                <ContentBox css={styles.boxContent} />
                <ContentBox css={styles.boxContent} />
                <ContentBox css={styles.boxContent} />
                <ContentBox css={styles.boxContent} />
                <ContentBox css={styles.boxContent} />
                <ContentBox css={styles.boxContent} />
            </div>
        </div>
    );
};
