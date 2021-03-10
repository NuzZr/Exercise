//Nama : Wowor, Fanuel
//Array");
	//nomor 1

		let people = ["Greg", "Mary", "Devon", "James"];
		for(let i=0;i<people.length;i++)
		{
			console.log(people[i]);
		};

	//nomor 2
		people.forEach(function(item)
		{
			console.log(item);
		});
		
	//nomor 3
		people.shift(); 
		console.log(people);
	
	//nomor 4
		people.pop();
		console.log(people);
	
	//nomor 5
		people.unshift("Matt");
		console.log(people);
	
	//nomor 6
		people.push("Fanuel Wowor");
		console.log(people);
	
	//nomor 7
		for(let i=0;i<people.length;i++)
			{
				console.log(people[i]);
				if(people[i]==="Mary")
				{
					break;
				}
			}

	//nomor 8
		console.log(people.slice(2));

	//nomor 9
		let newArray = ["Greg", "Mary","Devon", "James"];
		newArray.splice(2,1,"Elizabeth","Artie");
		console.log(newArray);

	//nomor 10
		let withbob = people.concat("bob");
		console.log(withbob);

//Object
	let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
	};
		
		//nomor 1
			programming.languages.push("Go");
			console.log(programming);
		
		//nomor 2
			programming['difficulty'] = 7;
			console.log(programming);

		//nomor 3
			delete programming.jokes;
			console.log(programming);

		//nomor 4
			programming.isFun = true;
			console.log(programming);

		//nomor 5
			let newProgramming = programming.languages.map(function(item, index)
				{
					return index + "-" + item;
				});
				console.log(newProgramming);

		