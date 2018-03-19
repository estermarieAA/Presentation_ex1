var data;

function preload(){
	data = loadJSON("severalcolors.json");
}

function setup(){


	createCanvas(windowWidth,windowHeight);
	var colors=data.colors;

	for(var i=0; i<colors.length; i++){
		var x=20;
		var y=40;
		translate(x+40,y);
	text(colors[i].color,x,y);

	var code=colors[i].code;
	for( var j=0; j<code.length; j++){
		fill(data.colors[i].code[j])
		rect(x,y,20,20);
	}
	}

	//Efter min mening skulle loopet med j sørger for at firkanterne fik
	//forskellige farver, memn der kommer kun sort frem.
	//Hvis jeg manuelt kalder farven i draw kommer den frem.
	//Kan i regne det ud?

	//De nederste dele af dokumentet er også til fremlæggelse, jeg tager
	//den helt fra bunden og bygger så op i kompleksitet.
	
	// fill(data.colors[2].code)
	// rect(20,20,40,40)


	}

function draw(){

	fill(data.colors[2].code)
	rect(20,20,40,40)

}


// var col;
//
// function preload(){
// 	col=loadJSON("colors.json");
// }
//
// function setup() {
//
// 	createCanvas(windowWidth, windowHeight);
// 	background(255);
// }
//
// function draw() {
//
//
// 	fill(col.color);
// 	rect(windowWidth/2, windowHeight/2,100,100);
// 	textSize(50);
// 	text(col.name,windowWidth/2,windowHeight/2-50);
// 	text(col.type,windowWidth/2,windowHeight/2-10);
//
// }

// var col;
//
// function setup(){
// 	createCanvas(windowWidth,windowHeight);
// 	col={
// 		name:"red",
// 		type: "primary",
// 		col: color(255,0,0)
// 	}
//
// }
//
// function draw(){
// 	background(255);
//
// 	fill(col.col);
// 	rect(20,20,40,40);
// 	text(col.name, 20,20);
// 	text(col.type, 20, 70);
// }
