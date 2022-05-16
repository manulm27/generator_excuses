window.addEventListener("load", function(){

	let who = ['El perro','Mi abuela','Su tortuga','Mi pajaro'];
	let what = ['come','molesta','lo aplasta','lo rompe'];
	let when = ['antes de clase','justo a tiempo','cuando termine','durante el almuerzo','mientras oraba'];

	function generate_word(arr, num){
		var word;
		var random = Math.random()
		if(random < num){
			random = 0
		}else{
			random = Math.floor(random*arr.length)
		}
		for(var i = 0; i <= random; i++){
			word = arr[i]
		}
		return word
	}

	function onLoad(){
		var excuse = generate_word(who, 0.3)+" "+generate_word(what,0.3)+" "+generate_word(when, 0.2);
		var text = document.querySelector('#excuse')
		text.innerHTML = excuse
	};

	document.querySelector('#generator').addEventListener("click", function(){
		onLoad();
	});

})
