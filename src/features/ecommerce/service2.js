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
					<View style={styles.topView}>
						<View></View>
						<EditView style={{right:28, top:32, zIndex:1000}}><Edit source={require('../../../assets/add.png')}/></EditView>
					</View>
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
				<View style={styles.topView}>
						<TopText stle={{marginBottom:ww(20)}}>Posts</TopText>
						<EditView><Edit source={require('../../../assets/add.png')}/></EditView>
					</View>
				
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
						<EditView><Edit source={require('../../../assets/edit.png')}/></EditView>
					</View>
					<BottomText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dapibus a auctor sit sed auctor. 
						Faucibus odio maecenas facilisi orci. Aliquet porttitor in malesuada turpis tortor vitae ut volutpat. 
						Viverra tortor dignissim aliquam et augue eu et sed sociis.
					</BottomText>
				</CardView>

				<CardView>
					<View style={styles.topView}>
						<TopText>Location</TopText>
						<EditView><Edit source={require('../../../assets/edit.png')}/></EditView>
					</View>
					
					<BottomText>
						Lorem ipsum dolor sit amet, consectetur adipiscing
					</BottomText>
				</CardView>

				<CardView>
					<View style={styles.topView}>
						<TopText>Work History</TopText>
						<EditView><Edit source={require('../../../assets/edit.png')}/></EditView>
					</View>
					
					<BottomText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
						Euismod pellentesque vitae, id nibh id sem feugiat malesuada id. Facilisi sed lacus, amet.
					</BottomText>
				</CardView>

				<CardView>
					<View style={styles.topView}>
						<TopText>Skills</TopText>
						<EditView><Edit source={require('../../../assets/edit.png')}/></EditView>
					</View>
					
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
					<View style={styles.topView}>
						<TopText>License and Certifications</TopText>
						<EditView><Edit source={require('../../../assets/edit.png')}/></EditView>
					</View>
					
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
