	// Example ID
	// var discord_id = "YOUR_ID";
	// Credits: ♡Lisa~#0004 & Roka#1337
	// Mostly written and Rewritten by ♡Lisa~#0004
	// also replace #spotify with Class ID
	// and remove Game if you dont need it Duh.
	// Documentation: https://github.com/phineas/lanyard

	// For this to Work please join on https://discord.gg/UrXF2cfJ7F

	var discord_id = "yourID";

	function stats() {

	    $.getJSON("https://api.lanyard.rest/v1/users/" + discord_id, (data) => {
	        data = data.data;
	        data2 = data.activities[0]; // defaulting on first activity
	        data3 = data.activities; // having this just to be sure
	        if (data.listening_to_spotify) {
	            $("#spotify").html(`<h1 class="nowplay">Listening to on Spotify</h1>
				<a class="data" target="_blank" href="https://open.spotify.com/track/${data.spotify.track_id}"><b>${data.spotify.song}</b> 
				<b>by <i>${data.spotify.artist}</i></b></a>`);
	        } else {
	            $("#spotify").html("Not playing...")
	        }
	        if (data2.type === undefined || data2.type == 2 || data3.length == 0 || data2.type == 4) {
                if(data3[1] == undefined) {
                    $("#game").html('<h1 class="nowplay2">Not playing...</h1>');
                    return;
                }
	            data2 = data3[1]
	        }
	        $("#game").html(`<h1 class="nowplay2">Playing:</h1><p class="data" Playing at the Moment</h1><b>${data2.name}</b> 
				<b><i>${data2.details}</i>\n <i>${data2.state}</i></b>`);
	    })
	}
	stats();
	setInterval(stats, 10000);