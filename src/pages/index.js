/* leny/uses
 *
 * /src/pages/index.js - Entry point page container
 *
 * coded by leny@flatLand!
 * started at 19/03/2019
 */

import React, {useState} from "react";

import {Helmet} from "react-helmet";
import "../core/font-awesome";
import GlobalStyles from "../components/head/global-styles";
import {vw, vh} from "@pwops/core";
import {css} from "@pwops/emotion-css";
import {mq} from "../core/utils";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Planets from "../components/commons/planets";
import ContentSection from "../components/content/section";
import ContentBox from "../components/content/box";

import {BCG_COLOR, MQ_TABLET, PLANETS_COLORS} from "../core/constants";

const styles = {
    wrapper: css({position: "relative"}),
    boxIntro: css({
        display: "block",
        position: "relative",
        background: BCG_COLOR,
        minHeight: vh(50),
        zIndex: 100,
        ...mq(MQ_TABLET, {
            minHeight: vh(100 / 3),
        }),
    }),
    header: css({
        sticky: [0, "auto", "auto"],
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
};

export default () => {
    const [colors, setColors] = useState({
        bgColor: PLANETS_COLORS[0][0],
        fgColor: PLANETS_COLORS[0][1],
    });

    const onVisibilityChange = (index, isVisible) =>
        isVisible &&
        setColors({
            bgColor: PLANETS_COLORS[index][0],
            fgColor: PLANETS_COLORS[index][1],
        });

    return (
        <div css={styles.wrapper}>
            <Helmet>
                <title>{"leny/uses"}</title>
            </Helmet>
            <GlobalStyles />
            <ContentBox css={styles.boxIntro} />
            <Header css={styles.header} />
            <Planets
                css={styles.planets}
                animate={window.innerWidth >= 960}
                {...colors}
            />
            <div css={styles.content}>
                <ContentSection
                    position={"left"}
                    index={0}
                    onVisibilityChange={onVisibilityChange}>
                    <ContentBox
                        title={"Editor & Terminal / Dev Tools"}
                        icon={"code"}
                    />
                </ContentSection>
                <ContentSection
                    position={"right"}
                    index={1}
                    onVisibilityChange={onVisibilityChange}>
                    <ContentBox title={"Apps"} icon={"rocket"} />
                </ContentSection>
                <ContentSection
                    position={"left"}
                    index={2}
                    onVisibilityChange={onVisibilityChange}>
                    <ContentBox title={"Hardware"} icon={"keyboard"} />
                </ContentSection>
                <ContentSection
                    position={"right"}
                    index={3}
                    onVisibilityChange={onVisibilityChange}>
                    <ContentBox title={"Mobile"} icon={"mobile-alt"} />
                </ContentSection>
                <ContentSection
                    position={"left"}
                    index={4}
                    onVisibilityChange={onVisibilityChange}>
                    <ContentBox title={"Desk"} icon={"chair-office"} />
                </ContentSection>
                <ContentSection
                    position={"right"}
                    index={0}
                    onVisibilityChange={onVisibilityChange}>
                    <ContentBox title={"Gear"} icon={"backpack"} />
                </ContentSection>
            </div>
            <Footer />
        </div>
    );
};
