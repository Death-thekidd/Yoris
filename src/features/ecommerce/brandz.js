import React, {useState} from 'react';
import {View, SafeAreaView, Text, StyleSheet, TextInput, FlatList, Image, ScrollView, TouchableOpacity} from 'react-native';
import {products} from './list';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import {ww, wp} from '../../../responsive';



const TopText= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 900;
font-size: ${ww(18)}px;
margin-left: ${ww(15)}px;
letter-spacing: -0.333333px;
color: #FFFFFF;
`;



const BottomText= styled.Text`
width: ${wp(400)}%;

font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: ${ww(14)}px;
margin-left: ${ww(15)}px;
letter-spacing: -0.333333px;
color: #FFFFFF;
`;


const CardView= styled.View`
border-bottom-color:#C3AD60;
border-bottom-width:0.2px;
margin:${ww(10)}px ${ww(20)}px ${ww(10)}px ${ww(20)}px;
padding-bottom:${ww(20)}px;
`;



const BottomView= styled.View`
border-top-color:#C3AD60;
border-top-width:0.2px;
padding:${ww(10)}px ${ww(20)}px ${ww(10)}px ${ww(20)}px;
`;



const LicenseView= styled.View`
width: 100%;
height: ${ww(105)}px;
background: #181818;
border-radius: 15px;
flex-direction:row;
margin:${ww(5)}px 0 ${ww(5)}px 0;
`;



const License= styled.Image`
width: ${ww(90.35)}px;
height: ${ww(64)}px;
border-radius: 10px;
`;



const LicenseTopText= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: ${ww(14)}px;
letter-spacing: -0.333333px;
margin: ${ww(10)}px 0 0 ${ww(25)}px;
color: #E6E6E6;
`;



const LicenseBottomText= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: ${ww(12)}px;
letter-spacing: -0.333333px;

color: #E6E6E6;
`;



const LicenseButton= styled.TouchableOpacity`
width: ${ww(240)}px;
height: 24px;
background: #C3AD60;
opacity: 0.9;
border-radius: 15px;
align-items:center;
justify-content:center;
`;



const LicenseButtonText= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 10px;
letter-spacing: -0.333333px;

color: #000000;
`;



const BottomImg= styled.Image`
width: ${ww(50)}px;
height: ${ww(50)}px;
border-radius: 5px;
margin:0 ${ww(20)}px 0 0;
`;




const BrandName= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
letter-spacing: -0.333333px;

color: #FFFFFF;
`;




const BrandDescription= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 14px;
letter-spacing: -0.333333px;
color: #FFFFFF;
`;



const Link= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 15px;
text-align: center;
letter-spacing: -0.333333px;
text-decoration-line: underline;

color: #458DF9;
`;



const UploadButton= styled.TouchableOpacity`
width: 150px;
height: 30px;
background: #C3AD60;
border-radius: 15px;
align-items:center;
justify-content:center;
`;



const UploadText= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 12px;
text-align: center;
letter-spacing: -0.333333px;

color: #000000;
`;



const ServiceCard= styled.View`
	border-radius:20px;
	height: ${ww(128)}px;
	background: #181818;
	width: ${ww(360)}px;
	flexDirection:row;
	margin: ${ww(15)}px;
`;



const ServiceCardImage= styled.Image`
	width: ${ww(149.27)}px;
	height: ${ww(128)}px;
	border-top-left-radius:20px;
	border-bottom-left-radius:20px;
`;



const ServiceName= styled.Text`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
letter-spacing: -0.333333px;
text-align:center;
color: #FFFFFF;
`;




const ServiceDescription= styled.Text`
width: 178.9px;
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 12px;
letter-spacing: -0.333333px;
text-align:center;
color: #FFFFFF;
`;




const StatisticButton= styled.TouchableOpacity`
width: 131.71px;
height: 30px;
background: #C3AD60;
border-radius: 15px;
align-items:center;
justify-content:center;
margin-bottom: ${ww(10)}px;
`;








const StyledImage= styled.Image`
width: 42px;
height: 42px;
border-radius:50px;
margin: 0 20px 0 0;
`;

const PostText= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: ${ww(18)}px;
color: #FFFFFF;
padding:0;
margin:0;
`;

const Handle= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: #FFFFFF;
opacity: 0.5;
top:3px;
margin-left:2px;
`;

const UserName= styled.Text`
  
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 18px;
color: #FFFFFF;
`;

const Ham= styled.Image`
 width: 3.57px;
height: 15px;
`;

const Bread= styled.Image`
width: 107px;
height: 107px;
`;




const SkillView= styled.View`
width: 80px;
height: 24px;
background: #4E4E4E;
border-radius: 15px;
margin:10px;
align-items:center;
justify-content:center;
`;



const SkillText= styled.Text`
font-style: normal;
font-weight: 300;
font-size: 12px;
letter-spacing: -0.333333px;

color: #FFFFFF;
`;



const Edit= styled.Image`
width: 15px;
height: 15px;
z-index:10;
`;



const EditView= styled.View`
width: 25px;
height: 25px;
border-radius:50px;
border: 1px solid #888888;
align-items:center;
justify-content:center;
`;






const license = [
{image:require('../../../assets/license1.png'), name:'License/Certificate name', issuer:'Name of issuer', expiry:'Issue date and expiry date'},
{image:require('../../../assets/license2.png'), name:'License/Certificate name', issuer:'Name of issuer', expiry:'Issue date and expiry date'},
];
const intrests =[
{image:require('../assets/product1.png'), name:'Brand Name', description:'Lorem ipsum dolor, sit ahmet...'},
{image:require('../assets/product2.png'), name:'Brand Name', description:'Lorem ipsum dolor, sit ahmet...'},
{image:require('../assets/product3.png'), name:'Brand Name', description:'Lorem ipsum dolor, sit ahmet...'},
{image:require('../assets/product4.png'), name:'Brand Name', description:'Lorem ipsum dolor, sit ahmet...'},
];
const services =[
{image:require('../../../assets/service1.png'), name:'Service Name', description:'Description of the service provided', star:3},
{image:require('../../../assets/service2.png'), name:'Service Name', description:'Description of the service provided', star:3},
{image:require('../../../assets/service1.png'), name:'Service Name', description:'Description of the service provided', star:3},
];
const posts =[
{image:require('../assets/ad.png'), user:'User Name', handle:'handle', post:'So I came across this awesome brand that sells ankara bracelets and pendants, they looked really awesome!!!'},
{image:require('../assets/ad.png'), user:'User Name', handle:'handle', post:'So I came across this awesome brand that sells ankara bracelets and pendants, they looked really awesome!!!'},
{image:require('../assets/ad.png'), user:'User Name', handle:'handle', post:'So I came across this awesome brand that sells ankara bracelets and pendants, they looked really awesome!!!'},
{image:require('../assets/ad.png'), user:'User Name', handle:'handle', post:'So I came across this awesome brand that sells ankara bracelets and pendants, they looked really awesome!!!'},
];
const reviews =[
{image:require('../assets/ad.png'), user:'User Name', review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet elit quis aliquam nunc. ', star:3},
{image:require('../assets/ad.png'), user:'User Name', review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet elit quis aliquam nunc. ', star:3},
{image:require('../assets/ad.png'), user:'User Name', review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet elit quis aliquam nunc. ', star:3},
{image:require('../assets/ad.png'), user:'User Name', review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet elit quis aliquam nunc. ', star:3},
];
const skills =[{skill:'Skill'}, {skill:'Skill'}, {skill:'Skill'}, {skill:'Skill'}, {skill:'Skill'}];


export const Products=({navigation, route})=>{
	return(
		<View style={styles.products}>
				<FlatList
						data={products}
						numColumns={3}
						showsVerticalScrollIndicator={false}
						keyExtractor={(item, index)=>index.toString()}
						renderItem={({item, index})=>
							<View style={styles.imageVieww}>
							<TouchableOpacity onPress={()=>navigation.navigate('Ecommerce5', {image:item.image})} style={styles.imageView}>
								<Image source={item.image} style={styles.image} key={index}/>
								<Text style={styles.brandName}>Product Name</Text>
								<Text style={styles.km}>N0.00</Text>
							</TouchableOpacity>	
							</View>
						}
						/>

			</View>
		)
}



export const Services=()=>{
	const [star, setStar] = useState(3);
	const [ser, setSer] = useState(services);
	
	const handleStar1 = (aa)=>{
		ser[aa].star =  1;
		setSer([...ser]);
		console.log(ser);
	}
	const handleStar2 = (aa)=>{
		ser[aa].star = 2;
		setSer([...ser]);
	}
	const handleStar3 = (aa)=>{
		ser[aa].star = 3;
		setSer([...ser]);
	}
	const handleStar4 = (aa)=>{
		ser[aa].star = 4;
		setSer([...ser]);
	}
	const handleStar5 = (aa)=>{
		ser[aa].star = 5;
		setSer([...ser]);
	}

	
	return(
		<ScrollView style={{flex:1, backgroundColor:'#000000'}}>

			<View style={styles.serviceCard}>
				<View style={{flexDirection:'row'}}>
					<TopText>Website/Online Portfolio:</TopText><Link>Go to website</Link>
				</View>
				<UploadButton><UploadText>View/Upload Resume</UploadText></UploadButton>
			</View>

			<View style={styles.serviceCard2}>
					
				{
					ser.map((item, index)=>{
						return(
					<ServiceCard key={index}>
						<ServiceCardImage source={item.image}/>
						<View style={styles.serviceTexts}>
							<View style={styles.serviceText}>
								<ServiceName>{item.name}</ServiceName>
								<ServiceDescription>{item.description}</ServiceDescription>
							</View>
							<View>
								<View style={styles.stars}>
									{
										item.star >= 1 ?
										<TouchableOpacity onPress={()=>handleStar1(index)}><Icon name="star" color={'#EB8F00'} size={17} /></TouchableOpacity>
										:
										<TouchableOpacity onPress={()=>handleStar1(index)}><Icon name="star-outline" color={'#EB8F00'} size={17} /></TouchableOpacity>
									}

									{
										item.star >= 2 ?
										<TouchableOpacity onPress={()=>handleStar2(index)}><Icon name="star" color={'#EB8F00'} size={17} /></TouchableOpacity>
										:
										<TouchableOpacity onPress={()=>handleStar2(index)}><Icon name="star-outline" color={'#EB8F00'} size={17} /></TouchableOpacity>
									}

									{
										item.star >= 3 ?
										<TouchableOpacity onPress={()=>handleStar3(index)}><Icon name="star" color={'#EB8F00'} size={17} /></TouchableOpacity>
										:
										<TouchableOpacity onPress={()=>handleStar3(index)}><Icon name="star-outline" color={'#EB8F00'} size={17} /></TouchableOpacity>
									}

									{
										item.star >= 4 ?
										<TouchableOpacity onPress={()=>handleStar4(index)}><Icon name="star" color={'#EB8F00'} size={17} /></TouchableOpacity>
										:
										<TouchableOpacity onPress={()=>handleStar4(index)}><Icon name="star-outline" color={'#EB8F00'} size={17} /></TouchableOpacity>
									}

									{
										item.star >= 5 ?
										<TouchableOpacity onPress={()=>handleStar5(index)}><Icon name="star" color={'#EB8F00'} size={17} /></TouchableOpacity>
										:
										<TouchableOpacity onPress={()=>handleStar5(index)}><Icon name="star-outline" color={'#EB8F00'} size={17} /></TouchableOpacity>
									}
								</View>
								<StatisticButton><UploadText>View statistics</UploadText></StatisticButton>
							</View>
						</View>
				</ServiceCard>
						)
					})
				}
				
			</View>


			<View style={{margin:ww(20)}}>
				
				{
				posts.map((item, index)=>{
					return(
					

					<View style={styles1.row} key={index}>
							<View style={styles1.user}>
								<View style={{flexDirection:'row', alignItems:'flex-start'}}>
									<StyledImage source={item.image}/>
									<View style={styles1.ham}>
										<UserName>{item.user}</UserName>
										<Handle>@{item.handle}</Handle>
									</View>
								</View>
								<Ham source={require('../assets/ham.png')}/>
							</View>
								<View style={{marginLeft:62, bottom:15}}>
									<PostText>{item.post}</PostText>
								</View>

					</View>
					)
				})
			}
				
			</View>	

		</ScrollView>
		)
}












export const About=()=>{
	return(
			<ScrollView style={{backgroundColor:'#000000', flex:1}}>
				<CardView>
					<View style={styles.topView}>
						<TopText>Brand Description</TopText>
					</View>
					<BottomText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus a auctor sit sed auctor. 
						Faucibus odio maecenas facilisi orci. Aliquet porttitor in malesuada turpis tortor vitae ut volutpat. 
						Viverra tortor dignissim aliquam et augue eu et sed sociis.
					</BottomText>
				</CardView>

				<CardView>
					
					
					<BottomText>
						Lorem ipsum dolor sit amet, consectetur adipiscing
					</BottomText>
				</CardView>

				<CardView>
					
					
					<BottomText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Euismod pellentesque vitae, id nibh id sem feugiat malesuada id. Facilisi sed lacus, amet.
					</BottomText>
				</CardView>

				<CardView>
					
					
					<View style={styles.skills}>
					{
						skills.map((item, index)=>{
							return(
						<SkillView key={index}><SkillText>{item.skill}</SkillText></SkillView>
							)
						})
					}
					</View>
					
				</CardView>

				<CardView style={{borderBottomWidth:0}}>
					
					
					{
						license.map((item, index)=>{
							return(
							<LicenseView key={index}>
						<View style={{justifyContent:'center'}}><License source={item.image}/></View>
						<View style={styles.licenseTxt}>
							<LicenseTopText>{item.name}</LicenseTopText>
							<View>
								<View style={{marginLeft:ww(10)}}>

									<LicenseBottomText>{item.issuer}</LicenseBottomText>
									<LicenseBottomText>{item.expiry}</LicenseBottomText>
								</View>
								<LicenseButton><LicenseButtonText>View Certificate</LicenseButtonText></LicenseButton>
							</View>
						</View>
					</LicenseView>
							)
							
						})
					}
				
				</CardView>

				<BottomView>
					<TopText>Intrests</TopText>
					{
						intrests.map((item, index)=>{
							return(
								<View style={styles.bottomCard} key={index}>
						<BottomImg source={item.image}/>
						<View>
							<BrandName>{item.name}</BrandName>
							<BrandDescription>Product Description:</BrandDescription>
							<BrandDescription>{item.description}</BrandDescription>
						</View>
					</View>
							)
						})
					}
					
				</BottomView>
			</ScrollView>
		)
}



export const Reviews=()=>{
	const [rev, setRev] = useState(reviews);
	return(
		<ScrollView style={{flex:1, backgroundColor:'#000000'}}>
			{
				rev.map((item, index)=>{
					return(
					<View style={styles.row} key={index}>
							<View style={styles1.user}>
								<View style={{flexDirection:'row'}}>
									<StyledImage source={item.image}/>
									<UserName>{item.user}</UserName>
								</View>
								<View style={styles.stars}>
									{
										item.star >= 1 ?
										<Icon name="star" color={'#EB8F00'} size={16} />
										:
										<Icon name="star" color={'#4E4E4E'} size={16} />
									}

									{
										item.star >= 2 ?
										<Icon name="star" color={'#EB8F00'} size={16} />
										:
										<Icon name="star" color={'#4E4E4E'} size={16} />
									}

									{
										item.star >= 3 ?
										<Icon name="star" color={'#EB8F00'} size={16} />
										:
										<Icon name="star" color={'#4E4E4E'} size={16} />
									}

									{
										item.star >= 4 ?
										<Icon name="star" color={'#EB8F00'} size={16} />
										:
										<Icon name="star" color={'#4E4E4E'} size={16} />
									}

									{
										item.star >= 5 ?
										<Icon name="star" color={'#EB8F00'} size={16} />
										:
										<Icon name="star" color={'#4E4E4E'} size={16} />
									}
								</View>
							</View>
								<View style={{marginLeft:62, bottom:15}}>
									<PostText>{item.review}</PostText>
								</View>

					</View>
					)
				})
			}
		</ScrollView>
		)
}








const styles = StyleSheet.create({
	
	brandName:{
		fontSize:17, 
		fontWeight:'400', 
		fontFamily:'Roboto', 
		color:'#fff', 
		fontSize:10,
		textAlign:'center',
	},
	km:{
		color:'#4E4E4E', 
		fontFamily:'Roboto',
		fontSize:10,
		textAlign:'center',

	},
	
	image:{
		height:60,
		width:60,
		margin:20,
		borderRadius:17
	},
	
	imageVieww:{
		alignItems:'center',
		justifyContent:'center',
		margin:10,
		padding:0
	},
	
	products:{
		flex:1, 
		backgroundColor:'#000000', 
		justifyContent:'center',
		alignItems:'center'
	},
	licenseTxt:{
		justifyContent:'space-between'
	},
	bottomCard:{
		flexDirection:'row',
		margin:ww(15)
	},
	serviceCard:{
		alignItems:'center',
		margin:ww(15)
	},
	serviceCard2:{
		alignItems:'center',
		borderTopWidth: 0.2,
		borderTopColor: '#C3AD60',
		borderBottomWidth: 0.2,
		borderBottomColor: '#C3AD60',
	},
	serviceTexts:{
		alignItems:'center',
		justifyContent:'space-between'
	},
	serviceText:{
		alignItems:'center'
	},
	stars:{
		flexDirection:'row',
		justifyContent:'space-between',
		alignItems:'flex-start',
		margin:ww(10),
		marginBottom:ww(5)
	},
	row:{
		marginLeft:ww(15),
		marginRight:ww(15),
		paddingTop:ww(15),
		
	},
	skills:{
		flexDirection:'row',
		flexWrap:'wrap',
		justifyContent:'center'
	},
	topView:{
		flexDirection:'row',
		width:'100%',
		alignItems:'center',
		justifyContent:'space-between',
		marginBottom:ww(10),
	}


})


const styles1 = StyleSheet.create({
	container:{
		flex:1, 
		backgroundColor:'#000000',
	},
	row:{
		marginLeft:ww(15),
		marginRight:ww(15),
		paddingTop:ww(15),
		borderTopWidth: 0.2,
		borderTopColor: '#C3AD60',
		
	},
	user:{
		flexDirection:'row',
		justifyContent:'space-between',
		width: '100%'
	},
	ham:{
		flexDirection:'row',
		alignItems:'flex-start',
		height:45
	},
})