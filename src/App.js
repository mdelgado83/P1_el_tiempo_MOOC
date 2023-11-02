import { useState } from "react";


// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
// import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./App.css";

import Header from "./Header";
import Resultados from "./Resultados";
import CONFIG from "./config/config";
import { mock1 } from "./constants/mock";

function App() {
  const [latitud, setLatitud] = useState(CONFIG.default_lat);
  const [longitud, setLongitud] = useState(CONFIG.default_lon);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);

  const USE_SERVER = CONFIG.use_server;
  const callServer = async () => {
    console.log("CLIK");
    if (USE_SERVER) {
      let queryParams;
      queryParams = "?appid=" + CONFIG.api_key + "&lat=" + latitud + "&lon=" + longitud;
      try {
        let queryParams;
        queryParams = "?appid=" + CONFIG.api_key + "&lat=" + latitud + "&lon=" + longitud;
        const response = await fetch(`${CONFIG.server_url}${queryParams}`);
        if (response.status === 200) {
          const data = await response.json();
          setItems(data);
        } else  {
          setError({ error: { description: response.status } });
        }
      } catch (error) {
        console.log(error);
        setError({ error: { description: error.message } });
      }
    } else {
      setItems(mock1);
    }

  };
  return (
    <div className="container">
      <Header />
      <div className="row justify-content-center">
        <div className="col-2 text-center ">
          <h2 id="titulo">El tiempo</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-2">
          <label htmlFor="latitud" className="form-label">Latitud</label>
          <input type="number" className="form-control" id="latitud" value={latitud} onChange={(e) => setLatitud(e.target.value)} />
        </div>
        <div className="col-2">
          <label htmlFor="longitud" className="form-label">Longitud</label>
          <input type="number" className="form-control" id="longitud" value={longitud} onChange={(e) => setLongitud(e.target.value)} />
        </div>
      </div>
      <div className="row justify-content-center mt-3">
        <div className="col-1">
          <button type="button" id="buscar" onClick={() => callServer()} className="btn btn-primary">Buscar</button>
        </div>
      </div>
      {error && <div id="error">Error</div>}
      {items && <Resultados numitems={CONFIG.num_items} items={items} />}
    </div>
  );
}

export default App;
