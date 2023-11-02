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
            <ul id="tiempo">
                {props.items.daily.map((item, index) => {
                    if (index < props.numitems) {
                        return <li key={index}>
                            <p>{
                                new Date(item.dt * 1000).toLocaleDateString()
                            }</p>
                            <img className="tiempoimg" src={process.env.PUBLIC_URL +"/" +item.weather[0].icon+"@2x.png"}  />
                        </li>
                    }
                })}
            </ul>
        </div>
    </div>
} 