import Tarjeta from "./Tarjeta";
export default function Resultados(props) {

    return <div id="resultados">
        <div className="row justify-content-center mt-3">
            <div className="col-3 text-center">
                <h5>Timezone: {props.items.timezone}
                    <br></br>
                    El tiempo los proximos dias sera:</h5>
            </div>
        </div>

        <div >
            <div className="row row-cols-4 justify-content-center mt-2" >
                {props.items.daily.map((item, index) => {
                    if (index < props.numitems) {
                        return (
                            <div className="col-2 border ms-5 rounded pt-2" key={index}>
                                <Tarjeta dt={item.dt} icono={item.weather[0].icon} temp={item.temp.day} humidity={item.humidity} wind_speed={item.wind_speed} />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    </div>
} 