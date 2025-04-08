import languages from "../languages";

export default function MainButton({ selected, onSelect }) {
    return (
        <div>
            {languages.map((item) => (
                <button type="button"
                    onClick={() => onSelect(item)}
                    className={selected === item ? "btn btn-warning" : "btn btn-primary"}
                >
                    {item.title}
                </button>
            ))}

        </div>
    );
}