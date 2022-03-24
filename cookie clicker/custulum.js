/**
 * Sample Plugin for Crustulum
 * 
 * Adds a button to give you 1,000,000 sugar lumps at a time.
 * 
 * Load this file and then load Crustulum
 *
 * Game.LoadMod('https://cdn.jsdelivr.net/gh/TruGam3rr/stuff@main/cookie%20clicker/custulum.js');
 */

if (typeof CrustulumPlugins !== 'object') CrustulumPlugins = {};

CrustulumPlugins['moreLumps'] = { // Functions don't need defined if they aren't used -- defined here for example only
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
    },
    Game: { // Ran when Crustulum runs them
        UpdateMenu: (fragment) => { 
            fragment.appendChild(Crustulum.Menu.subheading('Crustulum: More Lumps Add-on'));
            fragment.appendChild(Crustulum.Menu.actionButton('giveSugarLump','Give Sugar Lump','Gives you a sugar limp.', Crustulum.Plugins['moreLumps'].Actions.moreSugarLumps));
        },
    },
};

/* cSpell:ignore Crustulum */
