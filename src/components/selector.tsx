"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export default function Selector() {
    const [game, setGame] = useState("genshin");
    const [uid, setUid] = useState("");
    const [color, setColor] = useColor("000000");
    const [attribute, setAttribute] = useState("ar");
    const [title, setTitle] = useState("");
    const [prefix, setPrefix] = useState("");
    const [style, setStyle] = useState("flat");
    const [url, setUrl] = useState("");

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        toast.success("Copied to clipboard");
    };

    const changeGame = () => {
        if (game === "genshin") {
            setGame("hsr");
            setAttribute("tl");
        } else {
            setGame("genshin");
            setAttribute("ar");
        }
    };

    const generateBadge = () => {
        const baseURL = "https://enkabadges-api.maamokun.workers.dev/";
        if (uid === "") {
            toast.error("Please enter your UID");
            return;
        }
        if (uid.length !== 9) {
            toast.error("UID must be 9 characters long");
            return;
        }

        let genUrl = `${baseURL}${game}/${uid}/${attribute}`;
        const colourCode = color.hex.replace("#", "");
        genUrl += `?colour=${colourCode}`;
        genUrl += `&style=${style}`;
        if (title !== "") genUrl += `&title=${title}`;
        if (prefix !== "") genUrl += `&prefix=${prefix}`;
        setUrl(genUrl);
    };

    return (
        <div className="card w-full max-w-md bg-blue-500 shadow-xl py-5 space-y-4 mx-4">
            <h1 className="text-xl md:text-2xl font-bold text-center">
                Select a game
            </h1>
            <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-3">
                <button
                    className="btn btn-accent disabled:btn-error w-full md:w-auto"
                    disabled={game === "genshin"}
                    onClick={() => changeGame()}
                >
                    Genshin Impact
                    <img
                        src="/genshin.webp"
                        alt="Genshin Impact"
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full ml-2"
                    />
                </button>
                <button
                    className="btn btn-accent disabled:btn-error w-full md:w-auto"
                    disabled={game === "hsr"}
                    onClick={() => changeGame()}
                >
                    Honkai: Star Rail
                    <img
                        src="/hsr.webp"
                        alt="Honkai: Star Rail"
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full ml-2"
                    />
                </button>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-center">
                Enter your UID
            </h1>
            <div className="flex flex-row justify-center px-4">
                <input
                    type="text"
                    placeholder="UID"
                    value={uid}
                    maxLength={9}
                    className="input input-bordered w-full"
                    onChange={(e) => setUid(e.target.value)}
                />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-center">
                Choose an attribute
            </h1>
            <div className="flex flex-row justify-center px-4">
                <select
                    className="select select-bordered w-full"
                    value={attribute}
                    onChange={(e) => setAttribute(e.target.value)}
                >
                    {game === "genshin" ? (
                        <>
                            <option value="ar">Adventure Rank</option>
                            <option value="wl">World Level</option>
                            <option value="achievements">Achievements</option>
                            <option value="abyss">Spiral Abyss Level</option>
                            <option value="theater">
                                Imaginarium Theater Act
                            </option>
                        </>
                    ) : (
                        <>
                            <option value="tl">Trailblaze Level</option>
                            <option value="eq">Equilibrium Level</option>
                            <option value="achievements">Achievements</option>
                            <option value="lcs">Light Cones</option>
                            <option value="characters">Characters</option>
                            <option value="relics">Relics</option>
                            <option value="su">Simulated Universe</option>
                        </>
                    )}
                </select>
            </div>
            <div className={"flex flex-row justify-center"}>
                <img
                    src={
                        "https://img.shields.io/badge/This%20is%20the%20title-This%20is%20the%20prefix-red"
                    }
                    alt={"Example"}
                    width={180}
                />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-center">
                Badge title
            </h1>
            <div className="flex flex-row justify-center px-4">
                <input
                    type="text"
                    placeholder="leave empty for default"
                    value={title}
                    maxLength={9}
                    className="input input-bordered w-full"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-center">
                Prefix
            </h1>
            <div className="flex flex-row justify-center px-4">
                <input
                    type="text"
                    placeholder="leave empty for default"
                    value={prefix}
                    maxLength={9}
                    className="input input-bordered w-full"
                    onChange={(e) => setPrefix(e.target.value)}
                />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-center">
                Pick a color for your badge
            </h1>
            <div className="flex flex-row justify-center px-4">
                <ColorPicker
                    color={color}
                    onChange={setColor}
                    hideInput={["rgb", "hsv"]}
                    hideAlpha
                    height={100}
                />
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-center">
                Choose a badge style
            </h1>
            <div
                className={
                    "flex flex-col justify-center items-center space-y-2"
                }
            >
                <img
                    src={
                        "https://img.shields.io/badge/this%20is-a_flat_badge-red?style=flat"
                    }
                    alt={"Flat"}
                    width={150}
                />
                <img
                    src={
                        "https://img.shields.io/badge/this%20is-a_flat_square_badge-red?style=flat-square"
                    }
                    alt={"Flat Square"}
                    width={150}
                />
                <img
                    src={
                        "https://img.shields.io/badge/this%20is-a_plastic_badge-red?style=plastic"
                    }
                    alt={"Plastic"}
                    width={150}
                />
                <img
                    src={
                        "https://img.shields.io/badge/this%20is-for_the_badge-red?style=for-the-badge"
                    }
                    alt={"For the badge"}
                    width={150}
                />
                <img
                    src={
                        "https://img.shields.io/badge/this%20is-a_social_badge-red?style=social"
                    }
                    alt={"Social"}
                    width={150}
                />
            </div>
            <div className="flex flex-row justify-center px-4">
                <select
                    className="select select-bordered w-full"
                    value={style}
                    onChange={(e) => setStyle(e.target.value)}
                >
                    <option value="flat">Flat</option>
                    <option value="flat-square">Flat Square</option>
                    <option value="plastic">Plastic</option>
                    <option value="for-the-badge">For the badge</option>
                    <option value="social">Social</option>
                </select>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-center">
                Generate your badge
            </h1>
            <div className="flex flex-row justify-center px-4">
                <button
                    className={"btn btn-accent w-1/2"}
                    onClick={generateBadge}
                >
                    Generate badge
                </button>
            </div>
            <div
                className="flex flex-col justify-center items-center space-y-4"
                hidden={url === ""}
            >
                <div className="flex flex-col justify-center items-center space-y-4">
                    {url !== "" && (
                        <>
                            <h1 className="text-xl md:text-2xl font-bold text-center">
                                Badge preview
                            </h1>
                            <img src={url} alt={"Badge"} width={150} />
                            <h1 className="text-xl md:text-2xl font-bold text-center">
                                Copy
                            </h1>
                            <button
                                className={"btn btn-accent min-w-full"}
                                onClick={() => copyToClipboard(url)}
                            >
                                URL
                            </button>
                            <button
                                className={"btn btn-accent min-w-full"}
                                onClick={() =>
                                    copyToClipboard(
                                        `![EnkaBadges Badge](${url})`,
                                    )
                                }
                            >
                                Markdown URL Embed
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
