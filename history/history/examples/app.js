(function () {
	// add new interactives here
	var interactives = {
		quizlet: {
			type: "quizlet"
		},
		icons: {
			type: "icons",
			json: "../src/json/pollution.json"
		},
		recipe: {
			type: "recipe",
			json: "../src/json/recipe.json"
		},
		photoExplorer: {
			type: "photoExplorer",
			json: "../src/json/lupo-comic.json"
		},
		textBox: {
			type: "textBox",
			header: "Elit Ligula Adipiscing",
			image: "",
			json: "../src/json/text-box-example.json",
			color: "#CCC"
		},
		qAndA: {
			type: "qAndA",
			color: "#171C53",
			height: "425",
			hoverBg: "../src/images/white-paint-background.png",
			title: "Types of anxiety",
			background: "../src/images/paint-background.png",
			json: "../src/json/anxiety.json"
		},
		guessingGame: {
			type: "guessingGame",
			json: "../src/json/scavengar-hunt.json"
		},
		profile: {
			type: "profile",
			color: "#4089b3",
			allLink: "",
			allText: "",
			json: "../src/json/burnham.json"
		},
		lineGraph: {
			type: "lineGraph",
			json: "../src/json/suicide-rate.json"
		},
		choropleth: {
			type: "choropleth",
			usm: "../src/json/choropleth.json"
		},
		slideshow: {
			type: "slideshow",
			width: "full",
			title: "Coral Bleaching",
			color: "#67A0B6",
			json: "../src/json/coral-bleaching.json"
		},
		bullets: {
			type: "bullets",
			color: "#4089b3",
			title: "How institutions can build trust",
			json: "../src/json/building-trust.json"
		},
		faqs: {
			type: "faqs",
			menuImage: "../src/images/cn-white-temple.svg",
			json: "../src/json/temple-info.json"
		},
		navigational: {
			type: "navigational",
			json: "../src/json/religion-bills.json"
		},
		list: {
			type: "list",
			src: "../src/json/music-venues-short.json"
		},
		timeline: {
			type: "timeline",
			src: "../src/json/ancestry-1.json",
			color: "green",
			title: "The Early Years",
			height: "635"
		}
	}
	var hash = window.location.hash.replace('#', '');
	var elem = document.querySelector('div.interactive');
	var interactive = interactives[hash];
	if (!interactive) {
		document.getElementById('wrapper').innerHTML = '<h1>Ummm...</h1><p>We couldn\'t find that interactive!</p>';
	} else {
		for (var x = 0; x < Object.keys(interactive).length; x++) {
			var key = Object.keys(interactive)[x];
			var data = interactive[key];
			elem.setAttribute('data-' + key, data);
		}
		Newsroom.init();
	}
})();