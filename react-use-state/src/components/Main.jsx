import MainButton from "./MainButton";
import languages from "../languages.js";

export default function Main() {
    return (
        <main>
            <div className="d-flex gap-1">
                {languages.map((item) => (
                    <MainButton
                        title={item.title}
                    />
                ))}
            </div>
        </main>
    );
}