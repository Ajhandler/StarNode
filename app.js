var http =  require("http");

function printMessage(info){
	console.log(info)
}

function printError(error){
	console.log(error.message)
}
randomNumber = Math.floor((Math.random() * 10) + 1)
userInput = process.argv[2];

var req = http.get("http://swapi.co/api/"+ userInput + "/"+ randomNumber +"/", function(res){
	var body = " ";

	res.on('data', function (chunk){
	body += chunk;
	});
	res.on('end',function(){
		if(res.statusCode === 200){
			try{
				var result = JSON.parse(body);
				printMessage(result)
			} catch(error){
				printError(error)
			}
		} else {
			printError({message: "there was no info for that person!"})
		}
	})
});
