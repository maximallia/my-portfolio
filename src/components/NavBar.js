import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink 
                        to ={"/"}
                        exact
                        className={ ({isActive}) =>
                            isActive ? "inflex-flex items-center py-3 px-3 my-6 text-red-200 hover:text-green-800 text-4xl font-bold cursive bg-red-700"
                            :
                            "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 text-4xl font-thin hover:text-green-800 cursive"
                            
                        }
                        >
                        Daniel Ying
                    </NavLink>
                    <NavLink
                        to ="/post"
                        className={({isActive})=>
                            isActive ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 text-3xl font-bold hover:text-green-800 cursive bg-red-700"
                            :
                            "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 text-3xl font-thin hover:text-green-800 cursive"
                            
                        }
                        >
                        Posts
                    </NavLink>
                    <NavLink
                        to ="/project"
                        activeStyle="text-red-100 bg-red-700"
                        className={({isActive}) =>
                            isActive ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 text-3xl font-bold hover:text-green-800 cursive bg-red-700"
                            :
                            "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 text-3xl font-thin hover:text-green-800 cursive"
                            
                        }
                        >
                        Projects
                    </NavLink>
                    <NavLink
                        to ="/about"
                        activeStyle="text-red-100 bg-red-700"
                        className={ ({isActive}) =>
                            isActive ? "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 text-3xl font-bold hover:text-green-800 cursive"
                            :
                            "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 text-3xl font-thin hover:text-green-800 cursive"
                            
                        }
                        >
                        About Me/Contact Info.
                    </NavLink>

                </nav>
                <div>
                    <SocialIcon
                    url="https://www.linkedin.com/in/daniel-ying-8529091a7/"
                    className="mr-4"
                    target = "_blank"
                    fgColor="#fff"
                    style={{height:75, width:75}}
                    />

                    <SocialIcon
                    url="https://github.com/maximallia"
                    className="mr-4"
                    target = "_blank"
                    bgColor="#000"
                    fgColor="#fff"
                    style={{height:75, width:75}}
                    />
                    

                </div>
            </div>

        </header>
    )
}