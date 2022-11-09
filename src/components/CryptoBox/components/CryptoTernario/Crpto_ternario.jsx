import "./Crpto_ternario.styles.css";

const Crpto_ternario = ({
  name,
  priceUsd,
  volumeUsd24Hr,
  symbol,
  changePercent24Hr,
}) => {
  const getColor = (value) => {
    if (value > 0) return "colorGreen";
    return "colorRed";
  };

  const funcRetur = () => {
    console.log("sdfds");
    const cañlculo = 2 + 2;
    return (
      <>
        <div></div>
        <span></span>
      </>
    );
  };

  const funcSinRetur = () => (
    <>
      <div></div>
      <span></span>
    </>
  );

  return (
    <div className="criptos_02">
      <div className="cripto_name">
        <h2>{name}</h2>
      </div>
      <div className="cripto_precio">
        <span>Simbolo:</span>
        <span>{parseFloat(symbol).toFixed(4)}</span>
      </div>
      <div className="cripto_precio">
        <span>Precio:</span>
        <span>{parseFloat(priceUsd).toFixed(4)}</span>
      </div>
      <div className="cripto_precio">
        <span>volumeUsd24Hr:</span>
        <span>{parseFloat(volumeUsd24Hr).toFixed(4)}</span>
      </div>
      <div className="cripto_precio">
        <span>Cambio24h:</span>
        {/* <h4 className={getColor(parseFloat(changePercent24Hr))}>
          {parseFloat(changePercent24Hr).toFixed(4)}
        
        </h4> */}
        <span
          className={
            parseFloat(changePercent24Hr) > 0 ? "colorGreen" : "colorRed"
          }
        >
          {parseFloat(changePercent24Hr).toFixed(4)}%
        </span>
      </div>
    </div>
  );
};

export default Crpto_ternario;
