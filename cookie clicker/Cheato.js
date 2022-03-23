if(MyMod === undefined) var MyMod = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

MyMod.launch = function(){
	/**
	
	All the code you want to delay goes here
	Put "MyMod.isLoaded = 1;" somewhere within
	
	**/
}

if(!MyMod.isLoaded){
	if(CCSE && CCSE.isLoaded){
		MyMod.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(MyMod.launch);
	}
}
Game.customOptionsMenu.push(function(){
CCSE.AppendCollapsibleOptionsMenu("Cheato", Cheato.optionsMenu());
});



/* 
if(CCSE.ConfirmGameVersion(MyMod.name, MyMod.version, MyMod.GameVersion)) MyMod.init();
Game.customOptionsMenu.push(function(){
	CCSE.AppendCollapsibleOptionsMenu(MyMod.name, MyMod.getMenuString());
});
CCSE.ExportEditableSave();
CCSE.ImportEditableSave();
CCSE.NewUpgrade(name, desc, price, icon, buyFunction)
CCSE.NewHeavenlyUpgrade(name, desc, price, icon, posX, posY, parents, buyFunction)
CCSE.NewAchievement(name, desc, icon)
CCSE.NewBuilding(name, commonName, desc, icon, iconColumn, art, price, cps, buyFunction, foolObject, buildingSpecial)
CCSE.NewBuff(name, func)
var hStr = '<div class="listing">' + CCSE.MenuHelper.ActionButton("", "Unlock Hardcore Achievement") + '</div>';
*/
