import React, {useEffect, useState} from "react";
import sanityClient from "../client.js";
import night from "../Turk_AirBalloon.JPG";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source);
}

export default function Contact(){

    const[contact, setContact] = useState(null);

    useEffect(()=>{

        sanityClient.fetch(`*[_type == "contact"]{
            name,
            bio,
        }`).then((data)=> setContact(data[0]))
    }, []);

    if (!contact) return <div>Contact is Loading...</div>

    return (
        <main className="relative ">
            <img src={night} alt="Air Balloon in Turkey" className="absolute oject-cover w-full h-full" />
            <div className="py-20 lg:pt-48 container mx-auto relative">
                <section className="bg-green-800 rounded shadow-2xl px-20 py-20">
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl text-green-200 mb-4">
                            My Contact Info: {" "}
                        </h1>
                        <div className="prose lg:prose-xl text-white">
                            <BlockContent
                                blocks={contact.bio}
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