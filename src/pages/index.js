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

import Planets from "../components/commons/planets";

const styles = {wrapper: {}};

export default () => (
    <div css={styles.wrapper}>
        <Helmet>
            <title>{"leny/uses"}</title>
        </Helmet>
        <GlobalStyles />
        <Planets />
    </div>
);
