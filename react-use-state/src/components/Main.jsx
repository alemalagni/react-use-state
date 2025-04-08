import { useState } from "react";
import MainButton from "./MainButton";
import Description from "./Description";
import languages from "../languages.js";

export default function Main() {
    const [selected, setSelected] = useState(languages.id);

    return (
        <main>
            <div className="d-flex gap-2 justify-content-center pt-3">
                <MainButton
                    selected={selected}
                    onSelected={setSelected}
                />
            </div>
            <div>
                <Description
                    text={"prova"}
                />
            </div>
        </main>
    );
}