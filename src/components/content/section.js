/* leny/uses
 *
 * /src/components/content/section.js - Content section component
 *
 * coded by leny@flatLand!
 * started at 21/03/2019
 */

import React, {useRef, useEffect} from "react";

import useVisibility from "react-intersection-visible-hook";

import {css} from "@pwops/emotion-css";
import {vw, vh, rem} from "@pwops/core";
import {mq} from "../../core/utils";

import {
    MQ_TABLET,
    MQ_SMALL_DESKTOP,
    MQ_MEDIUM_DESKTOP,
} from "../../core/constants";

export default ({className, children, position, index, onVisibilityChange}) => {
    const sectionRef = useRef(null);

    const styles = {
        container: css({
            marginBottom: vh(20),
            padding: rem(2),
            ...mq(MQ_TABLET, {
                width: vw((100 * 2) / 3),
                [`margin${position === "left" ? "Left" : "Right"}`]: "auto",
            }),
            ...mq(MQ_SMALL_DESKTOP, {
                paddingTop: vh(25),
                minHeight: vh(100),
            }),
            ...mq(MQ_MEDIUM_DESKTOP, {
                width: vw(50),

                [`margin${position !== "left" ? "Left" : "Right"}`]: vw(5),
            }),
        }),
    };

    const {isIntersecting: isVisible} = useVisibility(sectionRef);

    useEffect(() => {
        onVisibilityChange(index, isVisible);
    }, [isVisible]);

    return (
        <section
            css={styles.container}
            className={className}
            ref={sectionRef}
            data-visible={isVisible}>
            {children}
        </section>
    );
};
