import languages from "../languages";

export default function MainButton({ selected, onSelect }) {
    return (
        <div className="d-flex gap-2 justify-content-center pt-3">
            {languages.map((item) => (
                <button
                    type="button"
                    key={item.id}
                    id={item.id}
                    onClick={() => onSelect(item.id)}
                    className={selected === item.id ? "btn btn-warning" : "btn btn-primary"}
                >
                    {item.title}
                </button>
            ))}

        </div>
    );
}