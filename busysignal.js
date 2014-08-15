// Copyright (c) 2014 Andrew Rodgers, Andrew McPherson, and Jake Brown. All rights reserved.
// MIT license

function isBusy() {

   
}


function isAway() {


}


function isAvailable() {


}

var state = true;

function toggleLight()
{
	console.log("!!");
	
	$("button").click(function()
	{
		state = !state;
		
		jQuery.ajax({
			type: "PUT",
			url: "http://10.0.0.180/api/newdeveloper/lights/3/state",
			data: JSON.stringify({
				on: state
			}),
			processData: false
		})
		.then(function(data)
		{
			console.log(JSON.stringify(data, undefined, 2));
		});
	});
}