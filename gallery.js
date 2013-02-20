enquire.register("screen and (min-width: 1024px)", {
	match: function(){
		console.log("uhhh");
		$('#gallery-brewers').cycle();
	},
	unmatch: function() {
		$('#gallery-brewers').cycle('destroy');
		$('#gallery-brewers img').attr('style', '');

	}
}).listen();

// adjust the selector below to match the id of your <figure> tag
$('#gallery-brewers').cycle();

