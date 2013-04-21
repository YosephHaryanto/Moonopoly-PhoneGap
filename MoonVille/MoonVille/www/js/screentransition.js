var state = {
	loadMainMenu:function(idToHide){
		$('#btnNewGame').show();
		$('#btnContinueGame').show();
		$('#btnCredits').show();
		$('#btnNewGame').animate({"marginLeft": "-100%"}, 0);
		$('#btnContinueGame').animate({"marginLeft": "-100%"}, 0);
		$('#btnCredits').animate({"marginLeft": "-100%"}, 0);


		$('#screen_mainmenu').show();
		$('#btnNewGame').animate({"marginLeft": "0"}, 600, 'linear');
		$('#btnContinueGame').animate({"marginLeft": "0"}, 600, 'linear');
		$('#btnCredits').animate({"marginLeft": "0"}, 600, 'linear');

		if(idToHide != "")
			$('#'+idToHide).hide();
	},
	loadNewGame:function(idToHide){
		$('#btnNewGame').fadeOut(1000, function(){
			if(idToHide != "")
				$('#'+idToHide).hide();
			$('#screen_new').show()
		});
		$('#btnContinueGame').animate({"marginLeft": "-100%"}, 600, 'linear');
		$('#btnCredits').animate({"marginLeft": "-100%"}, 600, 'linear');
	},
	loadContinueGame:function(idToHide){

	$('#btnContinueGame').fadeOut(1000, function(){
			if(idToHide != "")
				$('#'+idToHide).hide();

			$('#screen_continue').show();
		});
		$('#btnNewGame').animate({"marginLeft": "-100%"}, 600, 'linear');
		$('#btnCredits').animate({"marginLeft": "-100%"}, 600, 'linear');
	},
	loadCredit:function(idToHide){
		$('#btnCredits').fadeOut(1000, function(){
			if(idToHide != "")
				$('#'+idToHide).hide();

			$('#screen_credits').show();
		});
		$('#btnNewGame').animate({"marginLeft": "-100%"}, 600, 'linear');
		$('#btnContinueGame').animate({"marginLeft": "-100%"}, 600, 'linear');
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
	loadTransportation:function(idToHide){
		if(idToHide != "")
			$('#'+idToHide).hide();

		$('#screen_sitetransportation').show();
	},
	loadResearch:function(idToHide){
		if(idToHide != "")
			$('#'+idToHide).hide();

		$('#screen_siteresearch').show();
	},
	loadProduction:function(idToHide){
		if(idToHide != "")
			$('#'+idToHide).hide();

		$('#screen_siteproduction').show();
	},
};