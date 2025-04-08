export default function MainButton({ id, title }) {
    return (
        <div>
            <button id={id} type="button" className="btn btn-primary">{title}</button>
        </div>
    );
}