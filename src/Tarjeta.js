export default function Tarjeta(props) {

    return (
        <>
            <p className="text-center">{
                new Date(props.dt * 1000).toLocaleDateString()
            }</p>
            <p>
                <img className="tiempoimg center-block d-block mx-auto" src={process.env.PUBLIC_URL + "/" + props.icono + "@2x.png"} />
            </p>
            <p className="text-center">Temperatura: {(props.temp - 273).toFixed(2)}ºC</p>
            <p className="text-center">Humedad: {props.humidity}%</p>
            <p className="text-center">Viento: {props.wind_speed} km/h</p>
        </>
    );
}