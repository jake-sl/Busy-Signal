// Copyright (c) 2014 Andrew Rodgers, Andrew McPherson, and Jake Brown. All rights reserved.
// MIT license

$(document).ready(function()
{
	$("#busy").click(function()
	{
		toggleLight(25500);
	});
	
	$("#away").click(function()
	{
		toggleLight(46920);
	});
	
	$("#available").click(function()
	{
		toggleLight(65535);
	});
});

function toggleLight(color)
{
	jQuery.ajax({
		type: "PUT",
		url: "http://10.0.0.180/api/newdeveloper/lights/3/state",
		data: JSON.stringify({
			on: true,
			hue: color
		}),
		processData: false
	})
	.then(function(data)
	{
		console.log(JSON.stringify(data, undefined, 2));
	});
}