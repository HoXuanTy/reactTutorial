 function data(dataName){	
	switch(dataName){
		case "products":
			const products=[	
				{	
				detail: "DIGITAL CAMERA22",	
				image:"images/mayanh1.jpg",	
				name:"LUMIX DMC-G1"	
				},	
				{	
				detail: "DIGITAL CAMERA1",	
				image:"images/mayanh2.jpg",	
				name:"LUMIX DMC-G4"	
				},	
				{	
				detail: "DIGITAL CAMERA1",	
				image:"images/mayanh3.jpg",	
				name:"LUMIX DMC-G2"	
				}	
				,{	
				detail: "DIGITAL CAMERA1",	
				image:"images/mayanh2.jpg",	
				name:"LUMIX DMC-G3"	
				}	
				,{	
				detail: "DIGITAL CAMERA1",	
				image:"images/mayanh1.jpg",	
				name:"LUMIX DMC-G2"	
				}	
				];	
			return products;
			case"categories":
				const categories=[
					{	
						detail: "DIGITAL CAMERA22",	
						image:"images/mayanh1.jpg",	
						name:"categories LUMIX DMC-G1"	
						},	
						{	
						detail: "DIGITAL CAMERA1",	
						image:"images/mayanh2.jpg",	
						name:"LUMIX DMC-G4"	
						},	
						{	
						detail: "DIGITAL CAMERA1",	
						image:"images/mayanh3.jpg",	
						name:"LUMIX DMC-G2"	
						}	
						,{	
						detail: "DIGITAL CAMERA1",	
						image:"images/mayanh2.jpg",	
						name:"LUMIX DMC-G3"	
						}	
						,{	
						detail: "DIGITAL CAMERA1",	
						image:"images/mayanh1.jpg",	
						name:"LUMIX DMC-G2"	
						}
				]
				return categories;
	}
	
}
	export default data;