import Profile from '../profile/Profile.js';

const Testimonial = (props)=>{

	let description = {
		label: 'Vladimir Putin',
		info: 'Meals on wheels best in the UAE'
	}

	return(
		<div className="widthb90 mx-auto">
		  <h1 className="sec_seperator tc2">
		  	1 row: 5 circles with bg
		  </h1>

		  <div className="profile_wrapper widthb100 py4 my3 df jcc aic">
		  	<Profile iprofile={description}/>
		  	<Profile iprofile={description}/>
		  	<Profile iprofile={description}/>
		  	<Profile iprofile={description}/>
		  	<Profile iprofile={description}/>
		  </div>
	  </div>
	)
}

export default Testimonial;