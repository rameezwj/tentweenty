import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

function News(){
	return(
		<div className="rw2 relative widthb90 py3 mx-auto df jcsb">
		  <div className="widthb50 df fdc jcsb aicc">
		    <div className="art_wrap">
		      <div className="widthb80 mx-auto art_info tac">
		        <span className="dib fs1 ttu label"> Travel </span>
		        <h2 className="mt1">
		          Louvre Abu Dhabi marks 4th anniversary with world class exhibitions, programming for all
		        </h2>
		        <p className="my2">
		          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel risus dignissim interdum.
		        </p>
		        <span className="db mb2"> U. R. Oliver </span>
		      </div>
		      <div className="art_img hv_mask">
		        <img src={img1} className="widthb100" />
		      </div>
		    </div>
		  </div>
		  <div className="widthb22">
		    <div className="art_wrap">
		      <div className="widthb100 art_info">
		        <span className="dib fs1 ttu label"> Dine </span>
		        <p className="my1">
		          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.
		        </p>
		        <span className="db mb3"> U. R. Oliver </span>
		      </div>
		    </div>

		    <div className="art_wrap">
		      <div className="widthb100 art_info">
		        <span className="dib fs1 ttu label"> Dine </span>
		        <p className="my1">
		          Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium lobortis.
		        </p>
		        <span className="db mb3"> U. R. Oliver </span>
		      </div>
		    </div>

		    <div className="art_wrap">
		      <div className="art_img mb1 hv_mask">
		        <img src={img2} className="widthb100" />
		      </div>
		      <div className="widthb100 art_info">
		        <span className="dib fs1 ttu label"> Open House </span>
		        <p className="my1">
		          Meals on wheels best food trucks
		          in the UAE
		        </p>
		        <span className="db mb3"> U. R. Oliver </span>
		      </div>
		    </div>
		  </div>
		  <div className="widthb22">
		    <div className="art_wrap">
		      <div className="art_img mb1 hv_mask">
		        <img src={img3} className="widthb100" />
		      </div>
		      <div className="widthb100 art_info">
		        <span className="dib fs1 ttu label"> Open House </span>
		        <p className="my1">
		          UAE: CBSE Term 1 exams begin tomorrow; important guidelines announced
		        </p>
		        <span className="db mb3"> U. R. Oliver </span>
		      </div>
		    </div>

		    <div className="art_wrap">
		      <div className="widthb100 art_info">
		        <span className="dib fs1 ttu label"> Dine </span>
		        <p className="my1">
		          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in odio vel.
		        </p>
		        <span className="db mb3"> U. R. Oliver </span>
		      </div>
		    </div>

		    <div className="art_wrap">
		      <div className="widthb100 art_info">
		        <span className="dib fs1 ttu label"> Dine </span>
		        <p className="my1">
		          Phasellus in odio vel risus dignissim interdum. Sed vulputate pretium lobortis.
		        </p>
		        <span className="db mb3"> U. R. Oliver </span>
		      </div>
		    </div>
		  </div>
		</div>
	)
}

export default News;