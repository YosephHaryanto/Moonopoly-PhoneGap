function market()
{
	this.priceList[] = null;
	
	resources.forEach(function(e)
	{
		var a;
		a.name = e.name;
		a.buyingPrice = e.buyingPrice;
		a.sellingPrice = e.sellingPrice;
		priceList.push(a);
		
	});
	this.importStartTurn = 0;
	this.exportStartTurn = 0;
	this.length = 4;
	
	this.display = function (company) 
	{
		if (this.importStartTurn != 0)
		{
			this.importStartTurn = company.turn;
			return 0;
		}
		else if ( this.importStartTurn +length < company.turn) 
		{
			return 1;
			
		}
		else 
		{
			return 2;
		}
	}
	this.importResources = function (list[], moonBase)
	{
		list.forEach(function (e)
		{
			moonBase.storedResources.forEach (function (f)
			{
				if (e.name == f.name){
				f.amount += e.amount;
				break;
				}
			});
		});
	}
	
	this.exportResources = function (list[], moonBase,company)
	{
		list.forEach(function (e)
		{
			moonBase.storedResources.forEach (function (f)
			{
				if (e.name == f.name){
				f.amount -= e.amount;
				priceList.forEach(function (u){
					if ( u.name == e.name)
					{
						company.money += e.amount*u.selllingPrice;
						break;
					}
				});
				break;
			});
		});
	}
}