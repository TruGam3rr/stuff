// made by me the github dude
if(Cheato === undefined) var Cheato = {};
if(typeof CCSE == 'undefined') Game.LoadMod('https://klattmose.github.io/CookieClicker/CCSE.js');

Cheato.launch = function(){
	Cheato.isLoaded=1;
	Game.customOptionsMenu.push(function(){
	CCSE.AppendCollapsibleOptionsMenu(Cheato.Menu, Cheato.optionsMenu());
	});
}

if(!Cheato.isLoaded){
	if(CCSE && CCSE.isLoaded){
		Cheato.launch();
	}
	else{
		if(!CCSE) var CCSE = {};
		if(!CCSE.postLoadHooks) CCSE.postLoadHooks = [];
		CCSE.postLoadHooks.push(Cheato.launch);
	}
}



// Game.LoadMod('https://raw.githubusercontent.com/TruGam3rr/stuff/main/cookie%20clicker/Cheato.js');
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
