"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/css";

export default function Selector() {
    const [game, setGame] = useState("genshin");
    const [uid, setUid] = useState("");
    const [color, setColor] = useColor("000000");

    return (
        <div className="card w-1/2 bg-blue-500 shadow-xl py-5 space-y-4">
            <h1 className="text-2xl font-bold text-center">Select a game</h1>
            <div className="flex flex-row justify-center space-x-3">
                <button
                    className="btn btn-accent disabled:btn-error"
                    disabled={game === "genshin"}
                    onClick={() => setGame("genshin")}
                >
                    Genshin Impact
                    <img
                        src="/genshin.webp"
                        alt="Genshin Impact"
                        className="w-10 h-10 rounded-full"
                    />
                </button>
                <button
                    className="btn btn-accent disabled:btn-error"
                    disabled={game === "hsr"}
                    onClick={() => setGame("hsr")}
                >
                    Honkai: Star Rail
                    <img
                        src="/hsr.webp"
                        alt="Honkai: Star Rail"
                        className="w-10 h-10 rounded-full"
                    />
                </button>
            </div>
            <h1 className="text-2xl font-bold text-center">Enter your UID</h1>
            <div className="flex flex-row justify-center space-x-3">
                <input
                    type="text"
                    placeholder="UID"
                    value={uid}
                    maxLength={9}
                    className="input input-bordered w-full max-w-96 justify-center "
                    onChange={(e) => setUid(e.target.value)}
                />
            </div>
            <h1 className="text-2xl font-bold text-center">
                Pick a color for your badge
            </h1>
            <div className="flex flex-row justify-center space-x-3">
                <ColorPicker
                    color={color}
                    onChange={setColor}
                    hideInput={["rgb", "hsv"]}
                    hideAlpha
                    height={100}
                />
            </div>
        </div>
    );
}
