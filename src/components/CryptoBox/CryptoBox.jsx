import { useEffect, useState } from "react";
import Crpto_ternario from "./components/CryptoTernario/Crpto_ternario";
import "./CryptoBox.styles.css";

function CryptoBox() {
  const [cryptos, setCryptos] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      // fetch(`${API_URL}assets`)
      .then((resp) => resp.json())
      // axios
      // .get(`${API_URL}assets`)
      .then((data) => {
        setCryptos(data.data);
      })
      .catch(() => {
        console.error("La peticion fallo");
      });
  }, []);
  if (!cryptos) return <span>Cargando ...</span>;

  return (
    <>
      <div className="container">
        <div className="hojaCriptos_01">
          <h2>Hoja de Criptos</h2>
        </div>
        <div className="container_01">
          {cryptos.map(
            ({
              id,
              name,
              priceUsd,
              volumeUsd24Hr,
              symbol,
              changePercent24Hr,
            }) => {
              return (
                <Crpto_ternario
                  key={id}
                  name={name}
                  priceUsd={priceUsd}
                  volumeUsd24Hr={volumeUsd24Hr}
                  symbol={symbol}
                  changePercent24Hr={changePercent24Hr}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export default CryptoBox;
