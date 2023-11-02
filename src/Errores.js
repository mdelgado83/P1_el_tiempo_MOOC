export default function Errores(props) {

    return (
        <div className="row justify-content-center mt-3">
            <div className="col-6 text-center">
                <h3 id="error">Error {props.estado + " " + props.description}</h3>
            </div>
        </div>
    );
}