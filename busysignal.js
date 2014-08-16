// Copyright (c) 2014 Andrew Rodgers, Andrew McPherson, and Jake Brown. All rights reserved.
// MIT license

$(document).ready(function()
{
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
		setColor(46920);
	});
	
	$("#available").click(function()
	{
		setColor(25500);
	});
});

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