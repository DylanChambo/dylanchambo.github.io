import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles/BackgroundCircles";
// @ts-ignore
import styles, { accent } from "./Hero.module.scss";
import Image from "next/image";
import Section from "../Section/Section";


type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, i'm Dylan Chamberlain!",
            "I study Engineering at the University of Auckland.",
        ],
        loop: true,
        delaySpeed: 3000,
        typeSpeed: 100,
    });

    return (
        <Section id="hero">
            <BackgroundCircles />
            <Image
                width={1000}
                height={1000} 
                className={styles.image}
                src="/dylan.png"
                alt=""
            />
            <div className={styles.text}>
                <h2 className={styles.subheader}>Software & Computer Engineer</h2>
                <h1 className={styles.typewriter}>
                    <span>{text}</span>
                    <Cursor cursorColor={accent}/>
                </h1>

                <div>
                    <Link href="#about">
                        <button className={styles.button}>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className={styles.button}>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className={styles.button}>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className={styles.button}>Projects</button>
                    </Link>
                </div>
            </div>
        </Section>
    )
}