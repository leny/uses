/* leny/uses
 *
 * /src/components/commons/planets.js - Planets (canvas) Component
 *
 * coded by leny@flatLand!
 * started at 19/03/2019
 */

import React, {useRef, useEffect} from "react";

import {PLANETS_COLORS} from "../../core/constants";

// TODO: extract draw & animate from useEffect, call requestframe depending on a state boolean

export default ({
    bgColor = PLANETS_COLORS[0][0],
    fgColor = PLANETS_COLORS[0][1],
}) => {
    const canvas = useRef(null);

    useEffect(() => {
        const w = canvas.current.width;
        const h = canvas.current.height;
        const ctx = canvas.current.getContext("2d");

        const large = w / 3;
        const big = w / 10;
        const mid = w / 20;
        const small = w / 50;
        const mini = w / 100;
        const micro = w / 200;
        const dot = w / 500;

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, w, h);

        let planets = [
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
                size: Math.random() * (i * 1.2 - i * 0.8) + i * 0.8,
                origin: point,
                position: point,
                direction: Math.random() * Math.PI * 2,
            };
        });

        planets.sort(() => Math.random() - 0.5);

        const draw = () =>
            planets.forEach(({size, position: {x, y}}) => {
                ctx.beginPath();
                ctx.fillStyle = size > 5 ? bgColor : fgColor;
                ctx.strokeStyle = fgColor;
                ctx.lineWidth = 2;
                ctx.arc(x, y, size, 0, Math.PI * 2, true);
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
            });

        const animate = () => {
            ctx.fillStyle = bgColor;
            ctx.fillRect(0, 0, w, h);
            planets = planets.map(({size, origin, position, direction}) => {
                const change =
                    Math.sqrt(
                        (position.x - origin.x) ** 2 +
                            (position.y - origin.y) ** 2,
                    ) > Math.abs(100 - size);

                return {
                    size,
                    origin: change ? position : origin,
                    position: {
                        x:
                            position.x +
                            Math.sin(direction) /
                                Math.ceil(Math.random() * size * 2) /
                                2.5,
                        y:
                            position.y +
                            Math.cos(direction) /
                                Math.ceil(Math.random() * size * 2) /
                                2.5,
                    },
                    direction: change
                        ? Math.random() * (Math.PI * 2)
                        : direction,
                };
            });
            draw();
            window.requestAnimationFrame(animate);
        };

        draw();
        animate();
    }, [bgColor, fgColor]);

    return <canvas width={"1920"} height={"1080"} ref={canvas} />;
};
