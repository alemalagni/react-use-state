import languages from "../languages";

export default function Description({ selected }) {
    const title = languages[selected].title;
    const description = languages[selected].description;

    return (
        <div className="border mt-4 ms-3 me-3 rounded-2 p-1">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}