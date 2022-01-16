import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import balloon from "../Turk_AirBalloon.JPG";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}


export default function Home(){


    const[author, setAuthor, projectData, setProjectDate] = useState(null);

    useEffect(()=>{

        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage":image.asset->url
        }`).then((data)=> setAuthor(data[0]))
    }, []);

    if (!author) return <div>About Me is Loading...</div>

    return (
        <main className="relative ">
            <img src={balloon} alt="Air Balloon" className="absolute oject-cover h-full"/>
            <section className="relative flex justify-center min-h-screen pt-8 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Hello!
                你好!
                <br/>Welcome to my Portfolio!
                </h1>
            </section>

            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20 w-full">
                    {/*<img
                        src={urlFor(author.authorImage).url()}
                        className="rounded w-32 h-32 lg:w-60 lg:h-64 mr-8"
                            alt={author.name}
                    />*/}
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-200 mb-4">
                            About Me: {" "}
                            <span className="text-green-200">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent
                                blocks={author.bio}
                                projectId="4kpjjbxk"
                                dataset="production"
                            />
                        </div>
                    </div>
                </section>
            </div>

        </main>
    )
}