var tempdata = "";

var state = {	
	loadMainMenu:function(idToHide){
		//music.play("moonloop1");
		$('#btnNewGame').show();
		$('#btnContinueGame').show();
		$('#btnCredits').show();
		$('#btnNewGame').animate({"marginLeft": "-100%"}, 0);
		$('#btnContinueGame').animate({"marginLeft": "-100%"}, 0);
		$('#btnCredits').animate({"marginLeft": "-100%"}, 0);


		$('#screen_mainmenu').show();
		$('#btnNewGame').animate({"marginLeft": "0"}, 1000, 'easeOutQuart');
		$('#btnContinueGame').animate({"marginLeft": "0"}, 1000, 'easeOutQuart');
		$('#btnCredits').animate({"marginLeft": "0"}, 1000, 'easeOutQuart');

		if(idToHide != "")
			$('#'+idToHide).hide();
	},
	leaveNewGame:function(callback,hideID){
		$('#newcompanyform').animate({"height":"0px"},1000,function(){callback(hideID);});
	},
	loadNewGame:function(idToHide){
		$('#btnNewGame').fadeOut(1400, function(){
			if(idToHide != "")
				$('#'+idToHide).hide();
			$('#screen_new').show();
			$('#newcompanyform').animate({"height":"500px"},1000);
		});
		$('#btnContinueGame').animate({"marginLeft": "-100%"}, 1000, 'easeOutQuart');
		$('#btnCredits').animate({"marginLeft": "-100%"}, 1000, 'easeOutQuart');
	},

	loadContinueGame:function(idToHide){
		$('#btnContinueGame').fadeOut(1400, function(){
			if(idToHide != "")
				$('#'+idToHide).hide();

			$('#screen_continue').show();
		});
		$('#btnNewGame').animate({"marginLeft": "-100%"}, 1000, 'easeOutQuart');
		$('#btnCredits').animate({"marginLeft": "-100%"}, 1000, 'easeOutQuart');
	},
	loadCredit:function(idToHide){
		$('#btnCredits').fadeOut(1400, function(){
			if(idToHide != "")
				$('#'+idToHide).hide();

			$('#screen_credits').show();
		});
		$('#btnNewGame').animate({"marginLeft": "-100%"}, 1000, 'easeOutQuart');
		$('#btnContinueGame').animate({"marginLeft": "-100%"}, 1000, 'easeOutQuart');
	},
	loadProspect:function(idToHide){
		if(idToHide != "")
			$('#'+idToHide).hide();

		$('#screen_prospect').show();
	},
	loadDashboard:function(idToHide){
		if(idToHide != "")
			$('#'+idToHide).hide();

		$('#screen_dashboard').show();
	},
	loadNorthPole:function(idToHide){
		if(idToHide != "")
			$('#'+idToHide).hide();

		$('#screen_sitenorthpole').show();
		$('#screen_sitenorthpole').animate({"marginRight":"0"},1000,'easeOutQuart',function(){
			tempdata = document.getElementById('control_dashboard').innerHTML;
			document.getElementById('control_dashboard').innerHTML = "";});
	},
	leaveNorthPole:function(callback,idHide){
		
		$('#screen_sitenorthpole').animate({"marginRight":"-100%"},1000,'easeOutQuart',function(){
			callback(idHide);
			document.getElementById('control_dashboard').innerHTML = tempdata;
		});
		$('#buildingListNorth').children().filter('.singleBuilding').show();
		
	},
	loadEquator:function(idToHide){
		if(idToHide != "")
			$('#'+idToHide).hide();

		$('#screen_siteequator').show();
		$('#screen_siteequator').animate({"marginRight":"0"},1000,'easeOutQuart',function(){
			tempdata = document.getElementById('control_dashboard').innerHTML;
			document.getElementById('control_dashboard').innerHTML = "";});
	},
	leaveEquator:function(callback,idHide){
		$('#screen_siteequator').animate({"marginRight":"-100%"},1000,'easeOutQuart',function(){callback(idHide);document.getElementById('control_dashboard').innerHTML = tempdata;});
		$('#buildingListEq').children().filter('.singleBuilding').show();
	},
	loadSouthPole:function(idToHide){
		if(idToHide != "")
			$('#'+idToHide).hide();

		$('#screen_sitesouthpole').show();
		$('#screen_sitesouthpole').animate({"marginRight":"0"},1000,'easeOutQuart',function(){
			tempdata = document.getElementById('control_dashboard').innerHTML;
			document.getElementById('control_dashboard').innerHTML = "";});
	},
	leaveSouthPole:function(callback,idHide){
		$('#screen_sitesouthpole').animate({"marginRight":"-100%"},1000,'easeOutQuart',function(){callback(idHide);document.getElementById('control_dashboard').innerHTML = tempdata;});
		$('#buildingListSouth').children().filter('.singleBuilding').show();
	}
};