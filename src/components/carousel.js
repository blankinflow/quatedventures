import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../style/slider-animations.css';
import '../style/styles.css';
import CustomNavbar from '../components/CustomNavbar';


const content = [
	{
		title: 'नेपालमा अब भेटिन्छ',
		description:
		'Bhetincha.com is a business information portal where local businesses can list themselves so that general',
		button: 'Discover',
		image: require('../assets/homeadbanner.jpg'),
		user: 'Luan Gjokaj',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Khojnus Aba bhetincha',
		description:
		'बुवाको मुख हेर्ने दिन नजिकिदै छ । आफ्नो खुशी हाम्रो खुशीको लागि माया मारी संसार देखाउने बुवालाई उपहार स्वरुप के दिदै हुनुहुन्छ? उपहार यहाँ खोज्नुहोस्',
		button: 'Discover',
		image: require('../assets/homepage.png'),
		user: 'Erich Behrens',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Tapaiko Sathi Bhetincha',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
		button: 'Buy now',
		image: require('../assets/project.jpg'),
		user: 'Bruno Vizovskyy',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

const ImgSlider = () => (
	<div>
		<CustomNavbar/>
		<Slider
			autoplay="5000"
		className="slider-wrapper">
			{content.map((item, index) => (

				// const style = {
				// 	background:`url('/assets/${item.image}') no-repeat`
				// }

					<div
						key={index}
						className="slider-content"
						style ={{backgroundImage: `url(${item.image})`}}
					>

						<div className="inner">
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<button>{item.button}</button>
							{/* <img src={item.image} /> */}
						</div>
					</div>
			))}
			{/* <animateIn/>
			<animateOut/> */}
		</Slider>
	</div>
);
export default ImgSlider;
