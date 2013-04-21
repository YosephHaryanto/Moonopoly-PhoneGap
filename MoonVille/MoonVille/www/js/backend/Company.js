function Company (name, difficulty, money)
{
	this.name = name;
	this.difficulty = difficulty;
	this.money = money;
	this.researchPoint = 0;
	this.researchLabSize = 0;
	this.reputation = 0;	
	this.turn=1;
	this.moonBase=[];
	var prt = this;
	moonBases.forEach(function (e) {
	    var temp = new MoonBase(e.name, e.solarRate, e.maxBuilding, prt);
		prt.moonBase.push(temp);
	}); 
	
	this.play = function ()
	{
		for (i = 0; i < prt.moonBase.length; i++)
		{
			for (j = 0; j < prt.moonBase[i].builtBuildings.length; j++)
			{
				var x = prt.moonBase[i].builtBuildings[j];
				if (x.status == "on")
				{
					x.outputResources.forEach(function (e)
					{
						prt.moonBase[i].storedResources.forEach (function (f)
						{
							if (e.name == f.name){
									f.amount += e.amount;
							}
						});
					});

					var enoughResources = true;
					for(var k = 0; k < x.inputResources.length; k++){
						var e = x.inputResources[k];
						for(var l = 0; l < prt.moonBase[i].storedResources.length; l++){
							var f = prt.moonBase[i].storedResources[l];
							if(e.name == f.name){
								if(f.amount < e.amount){
									enoughResources = false;
									l = prt.moonBase[i].storedResources.length;
								}
							}
						}
						if(!enoughResources) k = x.inputResources.length;
					}

					if(enoughResources){
						for(var k = 0; k < x.inputResources.length; k++){
							var e = x.inputResources[k];
							for(var l = 0; l < prt.moonBase[i].storedResources.length; l++){
								var f = prt.moonBase[i].storedResources[l];
								if(e.name == f.name){
									f.amount -= e.amount;
								}
							}
							if(!enoughResources) k = x.inputResources.length;
						}
					} else {
						x.status = "off";
						//add to newly off machine
					}
				}
				
			}
		}
		turn++;
	} 
}