var gamedata = {
	getFileSystem: function(successcb,failedcb){
		var that = this;
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, 
			function(fileSys){
				fileSys.root.getFile("saveddata.json",{create:true,exclusive:false}, successcb, failedcb);
			}, function(error){
				alert("FAILED ACCESS" + error.code);
			}
		);
	},
	save:{
		fire:function(){
			gamedata.getFileSystem(this.openSuccess, this.openFailed);
		},
		openSuccess:function(fileEntry){
			fileEntry.createWriter(gamedata.save.addData, function(error){alert("FAIL: TO MAKE WRITER" + errror.code);});
		},
		openFailed:function(){
			alert("FAILED TO OPEN SAVED DATA");
		},
		addData: function(writer){
			writer.onwriteend = function(evt){
				alert("WRITE FINISHED!");
			};
			writer.write("DATAB");
		}
	},
	load:{
		fire:function(){
			gamedata.getFileSystem(this.openSuccess, this.openFailed);
		},
		openSuccess:function(fileEntry){
			var that = this;
			 fileEntry.file(function(file){gamedata.load.readAsText(file);}, function(){alert("ERR1");});
		},
		openFailed:function(){
			alert("FAILED TO OPEN SAVED DATA");
		},
		readAsText:function(file){
			var reader = new FileReader();
			reader.onloadend = function(evt) {
				alert(evt.target.result);
			};
			reader.readAsText(file);
		}
	}
};


var construct = {

	build:function(idx,bldgname){
		if(comp.moonBase[idx].buildBuilding(bldgname) == 1){
			var buildingNo = comp.moonBase[idx].builtBuildings - 1;
			updateList(idx,bldgname, buildingNo);
		}
	}
};

function updateList(idx,bldgname, buildingNo){
	//alert(comp.moonBase[idx].builtBuildings.length);
	switch (idx){
		case 0: var target = "buildingListNorth";break;
		case 1: var target = "buildingListEq";break;
		case 2: var target = "buildingListSouth";break;		
	}

	$('#'+target).html("");

	for(var i = 0; i < comp.moonBase[idx].builtBuildings.length; i++){
		if(i > 0 && i % 3 == 0){
			//showNextBtn();
		}
		
		var single = comp.moonBase[idx].builtBuildings[i];
		
		switch (single.name){
			case "Moon Base": var img = "moon_base.png";break;
			case "Nuclear Plant": var img = "nuclear_plant.png";break;
			case "Propellant Factory": var img = "propellant_factory.png";break;
			case "Regolith Processor": var img = "regolith_processor.png";break;
			case "Robot Factory": var img = "robot_factory.png";break;
			case "Smelting Facility": var img = "smelting_facility.png";break;
			case "Solar Panel Array": var img = "solar_panel.png";break;
			case "Ice Mine": var img = "ice_mine.png";break;
			case "Electronic Factory": var img = "electronic_factory.png";break;
			case "Water Processor": var img = "water_processor.png";break;
		}

		var markup = "";
			markup += "<div class=\"singleBuilding textcenter\" id=\"eqbuild" + i + "\" onclick=\"$('#'+this.id).siblings().filter('.singleBuilding').fadeOut(1000);\">";
            markup += "<img class=\"buildingImage\" align=\"left\" src=\"asset/building/"+img+"\"/>";
			markup += "<div class=\"buildingDetail\">";
            markup += "<p>Name: "+single.name+"</p>";
            markup += "<p>Status: On</p>" + "</div></div>";

		$('#'+target).prepend(markup);

	}
	
}