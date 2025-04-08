import MainButton from "./MainButton";
import languages from "../languages.js";

export default function Main() {
    return (
        <main>
            <div className="d-flex gap-2 justify-content-center pt-3">
                {languages.map((item) => (
                    <MainButton
                        title={item.title}
                    />
                ))}
            </div>
        </main>
    );
}