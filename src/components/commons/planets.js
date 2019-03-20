/* leny/uses
 *
 * /src/components/commons/planets.js - Planets (canvas) Component
 *
 * coded by leny@flatLand!
 * started at 19/03/2019
 */

import React, {useRef, useEffect, useState} from "react";

import {PLANETS_COLORS} from "../../core/constants";
import getColorState from "colortransition";

export default ({
    animate = true,
    bgColor = PLANETS_COLORS[0][0],
    fgColor = PLANETS_COLORS[0][1],
}) => {
    const canvas = useRef(null);
    const planets = useRef([]);
    const colors = useRef({bg: bgColor, fg: fgColor});
    const animated = useRef(animate);
    const transition = useRef(false);
    const transitionStep = useRef(0);
    const [ctx, setCtx] = useState(null);
    const [size, setSize] = useState(null);
    const [ready, setReady] = useState(false);

    const generatePlanets = ({w, h}) => {
        const large = w / 3;
        const big = w / 10;
        const mid = w / 20;
        const small = w / 50;
        const mini = w / 100;
        const micro = w / 200;
        const dot = w / 500;

        let _planets = [
            large,
            big,
            mid,
            mid,
            small,
            small,
            small,
            mini,
            mini,
            mini,
            micro,
            micro,
            micro,
            micro,
            micro,
            dot,
            dot,
            dot,
            dot,
            dot,
            dot,
            dot,
            dot,
            dot,
            dot,
        ].map(i => {
            const point = {
                x: Math.random() * (w - 0.1) + 0.1,
                y: Math.random() * (h - 0.1) + 0.1,
            };

            return {
                radius: Math.random() * (i * 1.2 - i * 0.8) + i * 0.8,
                origin: point,
                position: point,
                direction: Math.random() * Math.PI * 2,
            };
        });

        _planets.sort(() => Math.random() - 0.5);

        return _planets;
    };

    const draw = () =>
        planets.current.forEach(({radius, position: {x, y}}) => {
            ctx.beginPath();
            ctx.fillStyle = radius > 5 ? colors.current.bg : colors.current.fg;
            ctx.strokeStyle = colors.current.fg;
            ctx.lineWidth = 2;
            ctx.arc(x, y, radius, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
        });

    const update = () => {
        if (!animated.current) {
            return;
        }
        ctx.fillStyle = colors.current.bg;
        ctx.fillRect(0, 0, size.w, size.h);
        planets.current = planets.current.map(
            ({radius, origin, position, direction}) => {
                const change =
                    Math.sqrt(
                        (position.x - origin.x) ** 2 +
                            (position.y - origin.y) ** 2,
                    ) > Math.abs(100 - radius);

                return {
                    radius,
                    origin: change ? position : origin,
                    position: {
                        x:
                            position.x +
                            Math.sin(direction) /
                                Math.ceil(Math.random() * radius * 2) /
                                2.5,
                        y:
                            position.y +
                            Math.cos(direction) /
                                Math.ceil(Math.random() * radius * 2) /
                                2.5,
                    },
                    direction: change
                        ? Math.random() * (Math.PI * 2)
                        : direction,
                };
            },
        );
        draw();
        if (transition.current) {
            transitionStep.current += 1;
            if (transitionStep.current <= 100) {
                colors.current = {
                    bg: getColorState(
                        colors.current.bg,
                        transition.current.bg,
                        transitionStep.current,
                    ),
                    fg: getColorState(
                        colors.current.fg,
                        transition.current.fg,
                        transitionStep.current,
                    ),
                };
            } else {
                transition.current = false;
            }
        }
        window.requestAnimationFrame(update);
    };

    useEffect(() => {
        console.warn(`useEffect(ready: ${ready}, animate: ${animate})`);
        if (!ready) {
            let w, h, context;

            w = canvas.current.width;
            h = canvas.current.height;
            context = canvas.current.getContext("2d");

            setSize({w, h});
            setCtx(context);
            colors.current = {bg: bgColor, fg: fgColor};
            planets.current = generatePlanets({w, h});

            context.fillStyle = bgColor;
            context.fillRect(0, 0, w, h);

            setReady(true);
        } else {
            draw();
            animated.current && update();
        }
    }, [ready]);

    useEffect(() => {
        console.warn(
            `useEffect(ready: ${ready}, bgColor: ${bgColor}, fgColor: ${fgColor})`,
        );
        if (ready) {
            if (animated.current) {
                transition.current = {bg: bgColor, fg: fgColor};
                transitionStep.current = 0;
            } else {
                colors.current = {bg: bgColor, fg: fgColor};
                ctx.fillStyle = bgColor;
                ctx.fillRect(0, 0, size.w, size.h);
                draw();
            }
        }
    }, [bgColor, fgColor]);

    useEffect(() => {
        console.warn(`useEffect(animate: ${animate})`);
        if (ready) {
            (animated.current = animate) && update();
        }
    }, [animate]);

    console.warn(
        `Planets(animate: ${animate}, bgColor: ${bgColor}, fgColor: ${fgColor})`,
    );

    return <canvas width={"1920"} height={"1080"} ref={canvas} />;
};
