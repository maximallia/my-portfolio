import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import night from "../Rutgers Night.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function About(){

    const[author, setAuthor] = useState(null);

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
            <img src={night} alt="Air Balloon in Turkey" className="absolute w-full h-full" />
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounded-lg shadow-2xl lg:flex p-20">
                    <img
                        src={urlFor(author.authorImage).url()}
                        className="rounded w-66 h-60 lg:w-56 lg:h-58 mr-8"
                        alt={author.name}
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-200 mb-4">
                            Hi! More Info About: {" "}
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