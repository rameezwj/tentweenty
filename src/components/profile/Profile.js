import img4 from './img4.svg';

const Profile = (props)=>{
	const {label, info} = props.iprofile;
	// console.log(props.p);
	return(
		<div className="profile widthb17 px1 tac">
			<div className="hv_masks">
			  <img src={img4} className="widthb100" />
			</div>
			<div className="widthb100 art_info">
			  <span className="dib fs1-3 label my1"> {label} </span>
			  <p>
			  	{info}
			  </p>
			</div>
		</div>
	)
}

export default Profile;