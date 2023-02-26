//task 1-4 
//Create an ourTeam variable and add an object as a value. Add a name (add a name for the team),
//and a members (an array where the members and their details go) key to the object.

//In the members array, (the details of) each member is an object with following keys filled: name (string),
//birthday (object with three keys: year, month, day), location (object, keys: country, city), codingLevel (integer between 0 and 99).

//Create a favorites key (object) in each member's array.
//Add the favorite movies list from the solo project solutions to a favMovies key.
//Add the favorite books list from the solo project solutions to a favBooks key.
//Make sure your new objects contain every data from the solo project as a key.

//In the members array of the ourTeam variable, change the codingLevels type to an object
//which contains the numeric value of the coding knowledge and the seniority of the member.

let ourTeam={
	name:"Pink Panther",
	members:[
	{
		name:"Mihai Diaconu",
		birthday:{
			year:2002,
			month:"January",
			day:22
		},
		location:{
			country:"Romania",
			city:"Craiova"
		},
		codingLevel:20,
		favorites: {
			favBooks : [
				{
					title:"One-Punch Man", 
					author:"One", 
					year:2012, 
					isNewerThan2000:true,
					age: 11,
					characters:["Saitama","Genos","King","Garou","Blast"],
					review:"The most incredable battle manga."
				},
				{
					title:"Death Note", 
					author:"Tsugumi Ohba", 
					year:2003, 
					isNewerThan2000:true,
					age: 20, 
					characters:["Light Yagami","Ryuk","Misa Amane","L"],
					review:"Death Note is an engrossing, deliciously fun dark horror comedy, and one I could not put down. I eagerly await continuing in the adventures of Light and Ryuk in the remaining manga! Definitely recommended for those who don't mind a bit of morbidity with their humor."
				}
			],
				 favMovies:  [
					{
						title:"Avengers: Infinity War",
						year:2018,
						rating:8.4,
						description:"The Avengers must stop Thanos, an intergalactic warlord, from getting his hands on all the infinity stones.",
						directors:["Anthony Russo", "Joe Russo"],
						writers:["Stephen McFeely", "Christopher Markus"],
						stars:["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo", "Chris Evans", "Scarlett Johansson", "Benedict Cumberbatch", "Don Cheadle", "Tom Holland", "Chadwick Boseman", "Paul Bettany", "Elizabeth Olsen", "Anthony Mackie", "Sebastian Stan", "Tom Hiddleston"],
						genres:["Action", "Superhero", "Science fiction"],
						review:"My favorite superhero movie.It has a tone of action and it is very emotional."
					},
					{
						title:"Interstellar",
						year:2014,
						rating:8.6,
						description:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
						directors:"Christopher Nolan",
						writers:["Jonathan Nolan", "Christopher Nolan"],
						stars:["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
						genres:["Science fiction", "Adventure", "Drama"],
						review:"Time & space , these are two very important phenomrnon which kept humanity think for thousand of years  about this vast infinite universe and to find out its unapproachable interstellar destinations like solar system ,  milkyway , planets , blackholes ,etc. Highly talented great film maker Christopher  nolan has shown his  top class directorial skills by this great Sci fi saga "
					},
					{
						title:"Ready Player One",
						year:2018,
						rating:7.4,
						description:"James Halliday designs a virtual reality and hides the keys to his fortune in it for a worthy player to find after his death.",
						directors:"Steven Spielberg",
						writers:["Ernest Cline", "Zark Penn"],
						stars:["Tye Sheridan", "Olivia Cooke", "Ben Mendelsohn"],
						genres:["Action", "Science fiction", "Adventure"],
						review: "Steven Spielberg is always known for surprising audiences and he's back doing some crazy stuff with his latest movie and I consider myself unlucky to have missed a chance to watch it in theaters."
					},
					{
						title:"Spider-Man: Into the Spider-Verse",
						year:2018,
						rating:8.4,
						description:"After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man.",
						directors:["Peter Ramsey", "Bob Persichetti", "Rodney Rothman"],
						writers:["Phil Lord", "hristopher Miller", "David Callaham"],
						stars:["Shameik Moore", "Jake Johnson", "Chris Pine"],
						genres:["Action", "Children's film", "Comedy"],
						review: "This 2018 American computer-animated superhero film is one of the most solid animations which aren’t made by Disney or Pixar in a long, long time. Here’s my reasons for why this film deserves all the accolades it has received."
					}
					],
					favSongs:[
						{
							title:"Little Poor Me",
							artist:"Layto",
							genres:["Dance", "Electronic"],
							review: "Holy shit, the atmosphere this song gives off. It's badass, can't believe I'm just now coming across your stuff man. Sounds empowering as hell."
						},
						{
							title:"Late Bloomer",
							artist:"Unlike Pluto",
							genres:["Dance", "Electronic"],
							review: "The minute he started singing I knew I would love this song and I haven't stopped listening to it since."
						},
						{
							title:"Immunity",
							artist:"Dex Arson",
							genres:["Dance", "Electronic"],
							review:"Dex, what magical \"harry potter\", Dumbledore, Disneyland, lucky charms it's magically delicious song is this?",
						}
					]
		},
		colours:{
			primary:
			{
				red:1,
				green:255,
				blue:1,
	    	},
	    	secondary:
			{
				red:120,
				green:1,
				blue:255,
	    	},	
		},
	
	},
//Radu	
	{
		name:"Radu Norocea",
		birthday:{
			year:2000,
			month:"March",
			day:27
		},
		location:{
			country:"Romania",
			city:"Iasi"
		},
		codingLevel:3,
		favorites: {favBooks : [{

			title: "Fram",
			author: "Cezar Petrescu",
			year: 1931,
			isNewerThan2000: false,
			age:92,
			characters: ["Fram", "Ursoaica", "Rajah", "Petrus"],
			review: "This is one the best children book there are and it is justly famous in Romania - since its apparition in the early 1930's it, Fram has become almost a common noun there.The story of the playful and crowd favorite circus polar bear Fram and his fall into melancholia and refusal to perform followed by kids and their parents raising the money needed to send him back to the Arctic and then Fram's reintroduction to life among his kind is just the perfect children book and the illustration done by a famous Romanian painter just add to the power of this book."
		},
		{
			title: "20.000 de leghe sub mări",
				author: "Jules Verne",
				year: 1869,
				isNewerThan2000: false,
				age: 154,
				characters: ["Pierre Aronax", "Conseil", "Capitanul Nemo", "Capitanul Anderson"],
				review: "It a very interesting and well written book and if you love to read something that involves adventure than please definitely go ahead and read this Book."
		}],
				 favMovies:  [
					{
					title: "Vanilla Sky",
					year: 2001,
					rating: 6.9,
					description: "A self-indulgent and vain publishing magnate finds his privileged life upended after a vehicular accident with a resentful lover.",
					director: ["Cameron Crowe"],
					writers: ["Alejandro Amenabar", "Mateo Gil", "Cameron Crowe"],
					actors: ["Tom Cruise", "Penelope Cruz", "Cameron Diaz"],
					genres: ["fantasy", "mystery", "romance"],
					review: "A masterpiece! One of the most thought provoking, spiritual and hauntingly didactic movies I've ever watched. It touches you at a very deep level if you let it. The movie can be interpreted in a lot of ways but however you look at it, there are many parables that can be drawn. The movie is about consequences, free-will, the ephemeral nature of true love and the problem with wanting too much of a good thing, a dream-like world if you will. When we only dream and not live in the real world which is filled with both pleasure and pain, our make-belief world eventually rears its ugly head and gives us a reality check, which is exactly what David goes through in his warped lucid dream.Every action, however small, has consequences - if we take a step back and review our own life's timeline, we will probably realize that all the significant events started from something very little . I interpret this to mean that we can only have a true sense of life if there are ups and downs. We only learn to do better after making mistakes and experiencing some pain. The last lesson I got from the movie is that perfection does not exist and is a seductive illusory entity that sucks us in and depresses us. We should learn to unveil the masks we hide behind everyday and accept ourselves and our reality for there is beauty and hope even in our so-called ugly, problem laden lives. A must-watch!"
				},
				{
					title: "The Terminator",
					year: 1984,
					rating: 8.1,
					description: "A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity's future salvation.",
					director: ["James Cameron"],
					writers: ["James Cameron", "William Wisher", "Gale Anne Crud"],
					actors: ["Arnold Schwarzenegger", "Michael Biehn", "Linda Hamilton"],
					genres: ["action", "sf"],
					review: "The Terminator blew my mind the first time I watched it. It was so action-packed, intense, gory and overall exciting that I didn't realize when time flew by. The indie feel this film has can't be believed unless you watch it. For a film made on a low budget, it surely has a lot of merits and you can't easily ignore any of that. To make an action film with a chilling antagonist chasing after the good guys and disposing of anyone who stands in his way, without feeling a bit of remorse, is an uphill task especially when that character is played by an actor known better for playing heroes. Arnold Schwarzenegger, take a bow! The film is quite fast-paced and its mostly night-time setting is what intensifies the tension. And yeah, the film is filled to the core with action which is brutal, gory, raw, at times terrifying, and then some. Be it shootouts or car chases, The Terminator is a striking action masterpiece and its proving itself as one is a sight to behold. With a cast that manages to make you care for their characters, the film's list of positives just goes on to expand. Linda Hamilton manages to convince the viewer of her character's vulnerability and Michael Biehn's performance too ensures you root for his character. Even the supporting characters add something to the plot, which is commendable.This brutal sci-fi actioner is a dark masterpiece and also a fun popcorn entertainer at the same time. Being extremely violent and gory, it ensures kids aren't its primary audience, and instead guarantees unabashed fun for adults who enjoy action mixed with a futuristic element."
					},
				
				{
					title:"The Game",
					year: 1997,
					rating: 7.7,
					description: "After a wealthy San Francisco banker is given an opportunity to participate in a mysterious game, his life is turned upside down as he begins to question if it might really be a concealed conspiracy to destroy him.",
					director:["David Fincher"],
					writers:["Michael Ferris", "John Brancato"],
					actors:["Michael Douglas", "Sean Penn", " Deborah Kara Unger"],
					genres:["drama", "mystery"],
					review: "An ingenious plot direction that could only come from the mind of gifted director David Fincher(Love Is Strong by the Rolling Stones,Fight Club,Gone Girl). That 'White Rabbit' song by psychedelic rock band Jefferson Airplane fits perfectly in this mind-bending movie. Henceforth, 24 years later still inducing that hallucinogenic ki in Wachowski's The Matrix Resurrections. That movie poster w/the marionette perfectly adds up to both the figurative and literal theme of this classic. Creators-wise, the strings are like pulled by the master puppeteer/s of whom are the director/crew and the awesome cast, the marionette on the other hand, represents the film itself and us--Intense ! As how the story is. Throw in a brilliant cast lead by Deborah Kara Unger(Silent Hill's Dahlia Gillespie)Christine, Michael Douglas-Nick Van Orton,Sean Penn-Connie Van Orton,James Rebhorn(Carlito's Way,ID4),Armin Mueller-Stahl(Attack on Leningrad),Mark Boone Jr.(Memento,2Fast2Furious,30Days of Night),etc. And what you've got as a whole-Just by watching, rewatching this, is not only a bewildering experience, but an astonishing one as well. The pieces of the puzzle perfectly connote the suspenseful build-up of the narrative to the awestriking finale."
					},
				{
					title:"Red Notice",
					year: 2021,
					rating: 6.3,
					description: "An Interpol agent successfully tracks down the world's most wanted art thief, with help from a rival thief. But nothing is as it seems, as a series of double-crosses ensue.",
					director:["Rawson Marshall Thurber"],
					writers:["Rawson Marshall Thurber"],
					actors:["Dwayne Johnson", "Ryan Reynolds", "Gal Gadot"],
					genres:["action", "comedy"],
					review: "I love him when he talks like a broken doll. I actually love every character he plays, he's a very good actor who doesn't feel like he's playing a role, he's himself."
				}
				],
				favSongs:[{
					title:"Smack That", 
					artist:"Aron",
					genres:["Pop"],
					review: "No one, at any point, should want to hear Eminem in the club, any club, and this song is no exception."
				},
				{
					title:"Balenciaga",
					artist:"Petre Stefan",
					genres:["Trap"],
					review: "La prima ascultare nu m a spart albumu dar am invatat sa nu judec un album dupa doar o ascultare."
				},
				{
					title:"Nane",
					artist:"Asfalt",
					genres:["Rap"],
					review: "Singura piesa care imi place de la Nane cel nou,  am zis ca n o sa reuseasca niciodata să-mi rupă capu. Da cum sună piesa asta, s a terminat!Ce bass... ce flow.  TUN!"
				}
			]

			


			},
			colours:{primary:{
				red:99,
				green:67,
				blue:80,
			}
			,
			secondary:{
				red:21,
				green:15,
				blue:147,
			}
			}, 
			

		
    },



//Dragos	
{
	name:"Dragos Badilita",
	birthday:{
		year:1996,
		month:"January",
		day:11
	},
	location:{
		country:"Romania",
		city:"Iasi"
	},
	codingLevel:5,
	favorites:{favBooks : [
		{
		title:"Harry Potter and the Philosopher's Stone",
		author:"J. K. Rowling",
		 year:1997,
		 isNewerThan2000:false,
		 age:26,
		 characters: ["Harry Potter", "Vernon", "Rubeus Hagrid",  "Ollivander"],
		 review:"Harry Potter and the Philosopher's Stone' is definitely worth reading for an adult. While it was written as a children's book, it has outlived this label, and there are people of all ages who not only read these books but also engage in community"
	},
	{
		title:"Harry Potter and the Prisoner of Azkaban",
		author:"J. K. Rowling",
		year:1999,
		isNewerThan2000:false,
		age:24,
		characters: ["Harry Potter", "Dursleys", "Dementors", "Peter Pettigrew"],
	    review:"As a reader, “Harry Potter and The Prisoner of Azkaban”, could well possibly be my favourite book. It is also the best, in my opinion."
	
	}
	],
			 favMovies:  [
				{
				title:"The Shawshank Redemption",
				year:1994,
				raiting:9.2,
				description:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
				directors:"Frank Darabont",
				writers:"Stephen King",
				stars:["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
				genres: "Drama",
				review:"'The Shawshank Redemption' is not a depressing story, although I may have made it sound that way."
			},
			
			{
				title:"The Godfather ",
				year:1972,
				raiting:9,
				description:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
				directors:"Francis Ford Coppola",
				writers:"Mario Puzo",
				stars:["Stars Marlon", "BrandoAl Pacino", "James Caan"],
				genres:"Crime",
				review:"Overall, The Godfather is one of Hollywood's greatest critical and commercial successes that gets everything right; a gangster flick that is overflowing with life."
			},
			
			{
				title:"The Dark Knight",
				year:2008,
				raiting:8.2,
				description:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
				directors:"Christopher Nolan",
				writers:"Jonathan Nolan",
				stars:["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
				genres:"Action",
				review:"The Dark Knight lives up to it's hype and goes beyond it, this is the Batman movie that goes where no other Batman movie has gone before."
			},
			
			{
				title:"12 Angry Men ",
				year:1957,
				raiting:8.2,
				description:"The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
				directors:"Sidney Lumet",
				writers:"Reginald Rose",
				stars:["Henry Fonda", "Lee J. Cobb","Martin Balsam" ],
				genres:"Drama",
				review:"In my opinion, 12 Angry Men is the greatest film that has ever been created. A perfect example of less is more, the simplicity of the plot, the setting of the one room, and the acting talent of the 12 main cast members is enough to conquer the dramatic genre, and ensure that it remains a timeless classic."
			}
			],
			favSongs:[{
				title:"Blinding Lights",
				artist:"The Weeknd",
				genres:["Electronic", "Rock"],
				review:"Howard Brenton imagines Strindberg's inferno Jermyn Street theatre, London The Swedish dramatist's life is shown to echo his plays in a new production."
			},
			{
				title:"Mack The Knife",
				artist:"Bobby Darin",
				genres:["Jazz"],
				review:"There is a sense in which Brecht might have enjoyed 'Mack the Knife' Menahem Golan's film version of 'The Threepenny Opera' which Brecht wrote and Kurt Weill composed the songs for in 1929."
			},
			{
				title:"Shape Of You",
				artist:"Ed Sheeran",
				genres:["Pop"],
				review:"'Shape Of You' is perhaps the least revolutionary of the pair, but it is the most “Ed Sheeran.” After the long, heartbreaking absence of new music, his return to form is what triumphs. 'Shape Of You' taps into the success of Sheeran's last singles."
			}
		]
			
	
	},
	colours:{primary:{
		red:36,
		green:49,
		blue:80,
    
    },
    secondary:{
		red:24,
		green:60,
		blue:144,
    }
    },
	
},




//Endre	
	{
		name:"Endre Pop",
		birthday:{
			year:1999,
			month:"September",
			day:16
		},
		location:{
			country:"Romania",
			city:"Cluj"
		},
		codingLevel:10,
		favorites: {favBooks : [
			{
				title: "A Game of Trones",
				author: "George R.R. Martin",
				year: 1996,
				age: 27,
				isNewerThan2000: false,
				characters: ["Jon Snow", "Daenerys Targaryen", "Tyrion Lannister", "Khal Drogo"],
		        review:"This is a very good novel, full of twists and turns. It leaves you wanting more and move on to A Clash of Kings."
			},
			{
				title: "A Clash of Kings",
				author: "George R.R. Martin",
				year: 1998,
				age: 25,
				isNewerThan2000: false,
				characters: ["Cersei Lannister", "Robb Stark", "Jorah Mormont", "Brienne of Tarth"],
				review:"A Clash of Kings is a feast for grimdark fans, masterfully building upon the already strong foundation of A Game of Thrones while taking the story and characters to new heights."
			},
		],
				 favMovies: [
					{
						title : "The Hunger Games",
						year : 2012,
						rating :7.2,
						description : "Katniss Everdeen voluntarily takes her younger sister's place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.",
						director: "Gary Ross",
						writers: ["Gary Ross", "Suzanne Collins","Billy Ray"],
						stars:["Jennifer Lawrence","Josh Hutcherson","Liam Hemsworth"],
						genres: ["Action","Adventure","Sci-Fi"],
						review: "The Hunger Games is a very enjoyable futurist adventure, presented with a compelling, beady-eyed intensity."
					},
					{
						title: "Interstellar",
						year: 2014,
						rating: 8.6,
						description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
						director:"Christopher Nolan",
						writers:["Jonathan Nolan","Chistopher Nolan"],
						stars:["Matthew McConaughey","Anne Hathaway","Jessica Chastian"],
						genres:["Adventure","Drama","Sci-Fi"],
						review: "Mr. Nolan takes the universe and eternity itself as his subject and his canvas, brilliantly exploiting cinemas ability to shift backward and sideways in time (through flashbacks and cross cuts), even as it moves relentlessly forward."
					},
					{
						title: "Split",
						year: 2016,
						rating: 7.3,
						description: "Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.",
						director:"M. Night Shyamalan",
						writers: "M. Night Shyamalan",
						stars:["James McAvoy","Anya Taylor-Joy","Haley Lu Richardson"],
						genres:["Horror","Thriller"],
						review:"Split really is a movie for all sorts of personalities."
					},
					{
						title: "The Lord of the Rings: The Fellowship of the Ring",
						year: 2001,
						rating: 8.8,
						description: "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
						director: "Peter Jackson",
						writers:["J.R.R. Tolkien","Fran Walsh","Philippa Boyens"],
						stars:["Elijah Wood","Ian McKellen","Orlando Bloom"],
						genres:["Action","Adventure","Drama"],
						review: "It's an incredible movie experience."
					}
				],
				favSongs: [
					{
						title:"Bones",
						artist:"Imagine Dragons",
						genres:["Rock","Alternative","Indie"],
						review: "A bone chilling movie, with a kik for rock genre."
					},
					{
						title:"I'm Tired",
						artist:["Zendaya","Labrinth"],
						genres:["Pop"],
						review: "An acurate description of the depresion makes it a good thing."
					},
					{
						title:"Magnets",
						artist:["Lorde","Disclosure"],
						genres:["Dance","Electronic"],
						review: "Break-ups and more. Lorde makes it harder to understand."
					},
				]
		
				
		
			},
			colours: {
				primary: {
					red:1,
					green:128,
					blue:107,
				
				},	
			
				secondary: {
					red:128,
					green:1,
					blue:85,
				}
			},
			
			
    }
    ],
	moreStats: {
		averageHeight: "Our average height is: "+183.45+".",
		averageWeight: "Our average weight is: "+78+".",
		favoriteGames: [
			{
				mihai: {
					games: "Mihai's favourite games are: "+["God of War"," Doom Eternal."],
					food: "He's favourite food is Burrito."
				}
			},
			{
				endre: {
					games:"Endre's favourite games are: "+["Resident Evil Village"," Halo."],
					food: "He's favourite food is French Fries."
				}
			},
			{
				radu: {
					games:"Radu's favourite games are: "+["Little Nightmares"," WWE2k20."],
					food: "He's favourite food is Chinese Food."
				}
			},
			{
				dragos: {
					games:"Dragos's favourite games are: "+["Hungry Shark","Blockudoku."],
					food: "He's favourite food is Paella."
				}
			}
		]
	}
	
}


//task 5
//Add a new review key to each book, movie, and song object. As the value of these keys, each member must write why they like that book, movie,
//or song and why they recommend it. Also, remove the following keys and their values: the description keys of the movies, the isNewerThan2000 
//and age keys of the books.

for (let i = 0; i < ourTeam.members.length; i++) {
	for(let j = 0; j < ourTeam.members[i].favorites.favBooks.length; j++){
        delete ourTeam.members[i].favorites.favBooks[j].isNewerThan2000;
	    delete ourTeam.members[i].favorites.favBooks[j].age;	
    }
	for (let j = 0; j < ourTeam.members[i].favorites.favMovies.length; j++){
		delete ourTeam.members[i].favorites.favMovies[j].description;
	}
}


//task 6
//Calculate the average age (in an averageAge variable) and average coding level (into an averageCodingLevel).

let averageAge=0;
let averageCodingLevel=0;
let date = new Date();
let year = date.getFullYear();
console.log(date);
let validMemberNumber = ourTeam.members.length;
for(let i = 0; i < ourTeam.members.length; i++){
	if( year < ourTeam.members[i].birthday.year) {
		console.log("Anul nasterii nu e valid");
		validMemberNumber--;
	} else {
		averageAge += year-ourTeam.members[i].birthday.year;
	}
}
averageAge = averageAge/validMemberNumber;


validMemberNumber = ourTeam.members.length;
for(let i=0;i<ourTeam.members.length;i++){
	if(ourTeam.members[i].codingLevel >= 0 && ourTeam.members[i].codingLevel < 100 ) {
	averageCodingLevel+=ourTeam.members[i].codingLevel;
	} else {
		console.log("Numarul nu e valid");
		validMemberNumber--;
	}
}
averageCodingLevel=averageCodingLevel/validMemberNumber;


//task 7
//Find the youngest member (calculate it as a value of a youngestMember variable). 
//Important: you only have to compare the values of the year keys for each member. 
//If there are more than one members from the same year, you can decide which member is the youngest.

let youngestMember;
let max=1000;
for(let i=0;i<ourTeam.members.length;i++){
	if(max < ourTeam.members[i].birthday.year && ourTeam.members[i].birthday.year < year){
		max=ourTeam.members[i].birthday.year;
		youngestMember=ourTeam.members[i].name;
	} else {
		console.log("Anul nasterii nu este valid.");
	}
}


//task 8
//Find the oldest member (calculate it as a value of an oldestMember variable). 
//Important: you only have to compare the values of the year keys for each member. 
//If there are more than one members from the same year, you can decide which member is the oldest.

let oldestMember;
let min=3000;
for(let i=0;i<ourTeam.members.length;i++){
	if(min > ourTeam.members[i].birthday.year && ourTeam.members[i].birthday.year < year){
		min=ourTeam.members[i].birthday.year;
		oldestMember=ourTeam.members[i].name;
	} else {
		console.log("Anul nasterii nu este valid.");
	}
}


//task 9
//Find out if some people are from the same location.

let location= {};
for(let i=0;i<ourTeam.members.length;i++) {
	if (location[ourTeam.members[i].location.city] === undefined) {
		location[ourTeam.members[i].location.city] = [ourTeam.members[i].name];
	} else {
		location[ourTeam.members[i].location.city].push(ourTeam.members[i].name);
	}
}


//task 10
//Common music styles

let commonGenres = {};
for ( let i = 0; i < ourTeam.members.length; i++) {
	for ( let j = 0; j < ourTeam.members[i].favorites.favSongs.length; j++) {
		let genres= ourTeam.members[i].favorites.favSongs[j].genres
		for ( let k = 0; k < genres.length; k++) {
			if(commonGenres[genres[k]] === undefined) {
				commonGenres[genres[k]] = 1;
			} else {
				commonGenres[genres[k]]++;
			}
		}
	}
}
console.log(commonGenres);


let toExport;

try {
	//{ourTeam, averageAge, youngestMember, location, }
	toExport = [
		{ name: "ourTeam", content: ourTeam, type: "object" },
		{ name: "averageAge", content: averageAge, type: "number" },
		{ name: "averageCodingLevel", content: averageCodingLevel, type: "number" },
		{ name: "youngestMember", content: youngestMember, type: "string" },
		{ name: "oldestMember", content: oldestMember, type: "string" },
		{ name: "location", content: location, type: "object" },
		{ name: "commonGenres", content: commonGenres, type: "object" },
		{ name: "moreStats", content: ourTeam.moreStats, type: "object" }
	]

} catch (error) {
	toExport = { error: error.message }
}

export { toExport };
