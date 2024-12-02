import { useState } from "react";
import { toast } from "sonner";

export default function Selector() {
    const [game, setGame] = useState("genshin");

    return (
        <div className="card w-2/3 bg-base-300 shadow-xl">
            <div className="flex flex-row justify-center space-x-3">
                <button className="btn btn-info" disabled={game === "genshin"} onClick={() => setGame("genshin")}>
                    Genshin Impact
                    <img src="/genshin.webp" alt="Genshin Impact" className="w-10 h-10 rounded-full"/>
                </button>
                <button className="btn btn-info" disabled={game === "hsr"} onClick={() => setGame("hsr")}>
                    Honkai: Star Rail
                    <img src="/hsr.webp" alt="Honkai: Star Rail" className="w-10 h-10 rounded-full"/>
                </button>
            </div>
            <p>{game}</p>
        </div>
    );
}