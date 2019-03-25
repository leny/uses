/* leny/uses
 *
 * /src/pages/index.js - Entry point page container
 *
 * coded by leny@flatLand!
 * started at 19/03/2019
 */

import React, {useState} from "react";
import {graphql, useStaticQuery} from "gatsby";

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

const SECTIONS = [
    {position: "left", index: 0, id: "devtools"},
    {position: "right", index: 1, id: "apps"},
    {position: "left", index: 2, id: "hardware"},
    {position: "right", index: 3, id: "mobile"},
    {position: "left", index: 4, id: "gear"},
];

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
    const {
        allMarkdownRemark: {edges},
    } = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            icon
                            title
                            section
                        }
                        html
                    }
                }
            }
        }
    `);

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

    const getNode = id =>
        edges.find(
            ({
                node: {
                    frontmatter: {section},
                },
            }) => section === id,
        ).node;

    return (
        <div css={styles.wrapper}>
            <Helmet>
                <title>{"leny/uses"}</title>
            </Helmet>
            <GlobalStyles />
            <ContentBox css={styles.boxIntro} html={getNode("intro").html} />
            <Header css={styles.header} />
            <Planets
                css={styles.planets}
                animate={
                    typeof window !== "undefined" &&
                    typeof document !== "undefined" &&
                    window.innerWidth >= 960 &&
                    document.location.hash !== "#static"
                }
                {...colors}
            />
            <div css={styles.content}>
                {SECTIONS.map(({position, index, id}) => (
                    <ContentSection
                        key={id}
                        position={position}
                        index={index}
                        onVisibilityChange={onVisibilityChange}>
                        <ContentBox {...getNode(id)} />
                    </ContentSection>
                ))}
            </div>
            <Footer />
        </div>
    );
};
