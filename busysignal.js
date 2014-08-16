// Copyright (c) 2014 Andrew Rodgers, Andrew McPherson, and Jake Brown. All rights reserved.
// MIT license

var busyness = 0;

$(document).ready(function()
{
	$("#busy").click(function()
	{
		setColor(65535);
	});
	
	$("#away").click(function()
	{
		setColor(46920);
	});
	
	$("#available").click(function()
	{
		setColor(25500);
	});
});

function setBrightness(brightness)
{
	if(this.brightness != brightness)
	{
		jQuery.ajax({
			type: "PUT",
			url: "http://10.0.0.180/api/newdeveloper/lights/3/state",
			data: JSON.stringify({
				on: true,
				bri: brightness,
				transitiontime: 30
			}),
			processData: false
		})
		.then(function(data)
		{
			console.log(JSON.stringify(data, undefined, 2));
		});

		this.brightness = brightness;
	}
}

function setColor(color)
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