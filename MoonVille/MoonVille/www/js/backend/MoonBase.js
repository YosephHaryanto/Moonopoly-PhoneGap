
function MoonBase(name, solarRate, maxBuilding, comp)
{
	
	this.name = name;
	this.storedResources = [];
	this.builtBuildings = [];
	this.usedPower = 0;
	this.maxPower = 10000;
	this.solarRate = solarRate;
	this.company = comp;
	this.remainingBuilding = maxBuilding;
	var prt = this;
	rs.forEach (function (e)
	{
	    var v = new Resources(e["-name"], 50);
	    prt.storedResources.push(v);
	});
	
	this.buildBuilding = function (buildingname)
	{
		if (prt.remainingBuilding > 0)
		{	
			
			var building = new BuildingType(buildingname);			
			if (((prt.maxPower - prt.usedPower) >= (Number(building.inputPower) - Number(building.outputPower))) && (prt.company.money >= Number(building.monetaryCost)))
			{
				var enoughResources = true;
				for(var i = 0; i < building.requiredResources.length; i++){
					var e = building.requiredResources[i];
					for(var j = 0; j < prt.storedResources.length; j++){
						var f = prt.storedResources[j];
						if(e["-name"] == f.name){
							if(f.amount < Number(e["-amount"])){
								enoughResources = false;
								j = prt.storedResources.length;
							}
						}
					}
					if(!enoughResources) i = building.requiredResources.length;
				}

				if(enoughResources){
					for(var i = 0; i < building.requiredResources.length; i++){
						var e = building.requiredResources[i];
						for(var j = 0; j < prt.storedResources.length; j++){
							var f = prt.storedResources[j];
							if(e["-name"] == f.name){
								f.amount -= Number(e["-amount"]);
							}
						}
						if(!enoughResources) i = building.requiredResources.length;
					}
					prt.usedPower += building.inputPower;
					prt.maxPower += building.outputPower;
					prt.remainingBuilding--;
					prt.builtBuildings.push(building);
					prt.company.money -= building.monetaryCost;
					return 1;
				} else {
					alerts("INSUFFICIENT RESOURCES");
					return -1;
					}
			}
			else
			{
				alerts("INSUFFICIENT POWER");
				//msg power ga cukup
				return -1;
			}
		}
		else //no slot
		{
			alerts("INSUFICCIENT SLOT");
			//msg cannot build again
			return -1;
		}
	}
	
	
	/* this.destroyBuilding = function ()
	{
		//destroy building
	} */
	
}