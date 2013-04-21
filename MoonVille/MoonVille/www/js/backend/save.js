function save(Company){
	var a = "";
	b = { "name": Company.name, 
	"difficulty":Company.difficulty,
	"money":Company.money,
	"researchPoint" : Company.researchPoint,
	"researchLabSize" : Company.researchLabSize,
	"reputation" : Company.reputation,
	"turn":Company.turn,
	"moonBase": Company.moonBase};
	a = JSON.stringify(b);
}