import MainButton from "./MainButton";
import languages from "../languages.js";

export default function Main() {
    return (
        <main>
            {languages.map((item) => (
                <MainButton
                    title={item.title}
                />
            ))}
        </main>
    );
}