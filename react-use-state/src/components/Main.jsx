import { useState } from "react";
import MainButton from "./MainButton";
import Description from "./Description";
import languages from "../languages.js";

export default function Main() {
    const [selected, setSelected] = useState(languages.id);

    return (
        <main>
            <div>
                <MainButton
                    selected={selected}
                    onSelected={setSelected}
                />
            </div>
            <div>
                <Description
                    selected={selected}
                />
            </div>
        </main>
    );
}