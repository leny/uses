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

import Planets from "../components/commons/planets";
import {PLANETS_COLORS} from "../core/constants";

const styles = {wrapper: {}};

export default () => {
    const [index, setIndex] = useState(0);

    return (
        <div css={styles.wrapper}>
            <Helmet>
                <title>{"leny/uses"}</title>
            </Helmet>
            <GlobalStyles />
            <button type={"button"} onClick={() => setIndex(index ? 0 : 1)}>
                {"Change"}
            </button>
            <Planets
                animate
                bgColor={PLANETS_COLORS[index][0]}
                fgColor={PLANETS_COLORS[index][1]}
            />
        </div>
    );
};
