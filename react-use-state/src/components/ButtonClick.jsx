export default function ButtonClick({ id, title }) {
    return (
        <div>
            <button id={id} type="button" className="btn btn-warning">{title}</button>
        </div>
    );
}