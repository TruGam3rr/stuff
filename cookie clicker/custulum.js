/**
 * Sample Plugin for Crustulum
 * 
 * Adds more buttons.
 * 
 * Load this file and then load Crustulum
 *
 * Game.LoadMod('https://cdn.jsdelivr.net/gh/TruGam3rr/stuff@main/cookie%20clicker/custulum.js');
 */

if (typeof CrustulumPlugins !== 'object') CrustulumPlugins = {};

CrustulumPlugins['moreButtons'] = { // Functions don't need defined if they aren't used -- defined here for example only
    Init: () => { // Ran after Crustulum inits
    },
    Loaded: () => { // Ran after Crustulum is loaded but before Init() is called
    },
    Unloaded: () => { // Ran right before Crustulum unload finishes - only ran when the user clicks the unload button
    },
    Actions: { // Only ran when we call them
        moreSugarLumps: ()=>{
            Game.gainLumps(1000000);
        },
        moreCookies: ()=>{
            Game.cookies = Game.cookies * 2;
        },
        unlockAchievements: ()=>{
            Game.SetAllAchievs(1);
        },
    },
    Game: { // Ran when Crustulum runs them
        UpdateMenu: (fragment) => { 
            fragment.appendChild(Crustulum.Menu.subheading('Crustulum: More Buttons'));
            fragment.appendChild(Crustulum.Menu.actionButton('giveSugarLump','Give Sugar Lumps','Gives you 1 million sugar lumps.', Crustulum.Plugins['moreLumps'].Actions.moreSugarLumps));
            fragment.appendChild(Crustulum.Menu.actionButton('moreCookies','Multiply Cookies','Gives you 2x your current amount of cookies.', Crustulum.Plugins['moreCookies'].Actions.moreCookies));
            fragment.appendChild(Crustulum.Menu.actionButton('unlockAcheivs','Unlock Acheivements','Unlocks every single acheivement in the game.', Crustulum.Plugins['unlockAchievs'].Actions.unlockAchievs));
        },
    },
};

/* cSpell:ignore Crustulum */
