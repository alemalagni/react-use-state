import languages from "../languages";

export default function MainButton({ selected, onSelect }) {
    return (
        <div>
            {languages.map((item) => (
                <button type="button"
                    key={item.id}
                    onClick={() => onSelect(item.id)}
                    className={selected === item.id ? "btn btn-warning" : "btn btn-primary"}
                >
                    {item.title}
                </button>
            ))}

        </div>
    );
}