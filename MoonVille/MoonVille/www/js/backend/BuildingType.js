function BuildingType (name){
		this.name = name;
		this.status = "on"; //on, off
		var prt = this;
		for(var i = 0; i < Buildings.length; i++){
			var e = Buildings[i];
			if(e["-name"] == name){
				if(e["requiredResources"]){
					if(e.requiredResources.resource["-name"]){
						var param = [];
						param.push(e.requiredResources.resource);
						prt.requiredResources = param;
					}
					else {
						prt.requiredResources = e.requiredResources.resource;
					}
				}
				else {
					prt.requiredResources = [];
				}
				prt.info = e["-info"];
				prt.monetaryCost = Number(e["-monetaryCost"]);
				prt.inputPower = Number(e["-inputPower"]);
				prt.outputPower = Number(e["-outputPower"]);
			}
		}
}