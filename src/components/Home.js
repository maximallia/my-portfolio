import React from "react";
import image from "../Turk_AirBalloon.JPG"


export default function Home(){
    return (
        <main>
            <img src={image} alt="Air Balloon" className="absolute oject-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-8 lg:pt-64 px-8">
                <h1 className="text-3xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
                    Hello!你好!
                <br/>I'm Daniel Ying! 
                </h1>
            </section>
        </main>
    )
}