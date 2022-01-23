import img7 from './img7.jpg';

function Featured(props) {
  const stylesHeader = {};
  
  return (
    <div className="widthb90 mx-auto">
      <h1 className="sec_seperator tc3">
        2 rows: 1 x 3
      </h1>
      <div className="py3 df jcsb">
        <div className="widthb60">
          <div className="art_img hv_mask">
            <img src={img7} />
          </div>
        </div>
        <div className="widthb35 df aic">
          <div className="widthb100 art_info">
            <span className="dib ttu label"> Travel </span>
            <h2 className="mt1">
              Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all
            </h2>
            <p className="my2">
              Exhin imlave asfear asfasas afsfeaarsa asfasfasf
              asfasfa ten cultable doice inverum
            </p>
            <span className="db mb2"> Cvita Doleschall </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

