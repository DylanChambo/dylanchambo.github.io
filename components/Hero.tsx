import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import styles from "./Hero.module.scss";


type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, i'm Dylan Chamberlain",
            "Computer System's Engineer"
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className={styles.container}>
            <BackgroundCircles />
            <img 
                className={styles.image}
                src="dylan.png"
                alt=""
            />
            <div className={styles.text}>
                <h1>
                    <span>{text}</span>
                    <Cursor cursorColor="#F7AB0A"/>
                </h1>
            </div>
        </div>
    )
}