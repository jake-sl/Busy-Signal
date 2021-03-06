// Copyright (c) 2014 Andrew McPherson, Andrew Rodgers, and Jake Brown. All rights reserved.
// MIT license

	var lightIP = "10.0.0.180"
	var lightID = "3"
	var lightUser = "newdeveloper"
	var lightLocation = "http://"+lightIP+"/api/"+lightUser+"/lights/"+lightID+"/state";

$(document).ready(function()
{

	var busyness = 0;
	var brightness = {min: 100, max: 254};

	$(document).keyup(function()
	{
		busyness = Math.max(busyness, 5);
		setBrightness(brightness.max)
	});
	
	$(document).scroll(function()
	{
		busyness = Math.max(busyness, 2);
		setBrightness(brightness.max)
	});

	setInterval(function()
	{
		busyness -= 1;
		if(busyness <= 0)
			setBrightness(brightness.min);
	},
	0.5 * 1000)
	

	$("#busy").click(function()
	{
		setColor(65535);
	});

	$("#maxBrightness").change(function()
	{
		brightness.max = parseInt($(this).val());
		console.log(brightness.max);
		busyness = 3;
		setBrightness(brightness.max);
	});
	
	$("#busy").click(function()
	{
		setColor(65535);
	});

	$("#away").click(function()
	{
		setPowerState();
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
			url: lightLocation,
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
		url: lightLocation,
		data: JSON.stringify({
			on: true,
			hue: color,
			transitiontime: 30
		}),
		processData: false
	})
	.then(function(data)
	{
		//console.log(JSON.stringify(data, undefined, 2));
	});
}

function setPowerState()
{
	jQuery.ajax({
		type: "PUT",
		url: lightLocation,
		data: JSON.stringify({
			on: false
		}),
		processData: false
	})
	.then(function(data)
	{
		console.log(JSON.stringify(data, undefined, 2));
	});
}
