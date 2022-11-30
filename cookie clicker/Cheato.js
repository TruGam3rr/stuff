/* tweaked clone of crustulum
Game.LoadMod('https://cdn.jsdelivr.net/gh/TruGam3rr/stuff@main/cookie%20clicker/Cheato.js');
*/
if (typeof Cheato !== 'undefined') {
    if (Cheato === null) {
        delete Cheato;
    } else throw new Error('Cheato already loaded.');
}
var Cheato = {
    OG: {}, // Original Game Data
    Game: { // Our overrides
        UpdateMenu: () => {
            Cheato.OG.UpdateMenu();
            if (Game.onMenu == 'prefs') {
                let fragment = document.createDocumentFragment();
                fragment.appendChild(Cheato.Menu.heading('Cheato Toggleables'));
                fragment.appendChild(Cheato.Menu.subheading('Auto Clickers'));
                fragment.appendChild(Cheato.Menu.toggleButton('autoClicker','Auto Click Big Cookie','Clicks the big cookie for you.'));
                fragment.appendChild(Cheato.Menu.toggleButton('autoGolden','Auto Click Golden Cookies','Clicks any golden cookies for you.'));
                fragment.appendChild(Cheato.Menu.toggleButton('autoReindeer','Auto Click Reindeer','Clicks on reindeer for you'));
                fragment.appendChild(Cheato.Menu.toggleButton('autoNews','Auto Click News','Clicks on the news ticker for you.'));
                fragment.appendChild(Cheato.Menu.subheading('Golden Cookies'));
                fragment.appendChild(Cheato.Menu.toggleButton('blockWrath','Block Wrath Cookies','Prevents wrath cookies from spawning.'));
                fragment.appendChild(Cheato.Menu.subheading('Infinite Stuff'));
                fragment.appendChild(Cheato.Menu.toggleButton('infiniteCookies','Infinite Cookies','Causes your cookies to constantly regenerate.'));
                fragment.appendChild(Cheato.Menu.toggleButton('infiniteMagic','Infinite Magic','Causes your Grimoire magic to recharge almost instantly'));
                fragment.appendChild(Cheato.Menu.toggleButton('infiniteSwaps','Infinite Swaps','Causes your Pantheon swaps to regenerate almost instantly.'));
                fragment.appendChild(Cheato.Menu.subheading('Mini-game Enhancers'));
                fragment.appendChild(Cheato.Menu.toggleButton('miracleSpells','Miracle Spell™','Grimoire spells will never fail.'));
                fragment.appendChild(Cheato.Menu.toggleButton('immortalPlants','Make Plants Immortal','Makes it so plants never wither. Does not affect weeds or fungi.'));
                fragment.appendChild(Cheato.Menu.toggleButton('neverWeeds','Never Weed™','Makes it so weeds never spawn on their own. You can still plant them and they still may spread.'));
                fragment.appendChild(Cheato.Menu.toggleButton('allGodsActive','Pantheon \'R Us','All Pantheon gods except for Cyclius will be active in slot one.'));
                fragment.appendChild(Cheato.Menu.toggleButton('allGodsSlotOne','Power Of The Gods','All Pantheon gods will behave as if they are in slot 1 regardless of which slot they are in.'));
                fragment.appendChild(Cheato.Menu.heading('Cheato Actions'));
                fragment.appendChild(Cheato.Menu.subheading('Spawning'));
                fragment.appendChild(Cheato.Menu.actionButton('spawnGolden','Spawn a Golden Cookie','Spawns a golden cookie.', Cheato.Actions.spawnGolden));
                fragment.appendChild(Cheato.Menu.actionButton('spawnGoldenFrenzy','Spawn a Frenzy Cookie','Spawns a golden cookie that will cause a frenzy.', Cheato.Actions.spawnGolden));
                fragment.appendChild(Cheato.Menu.actionButton('spawnGoldenDragonflight','Spawn a Dragonflight Cookie','Spawns a golden cookie that will cause a dragonflight.', Cheato.Actions.spawnGoldenDragonflight));
                fragment.appendChild(Cheato.Menu.actionButton('giveSugarLump','Give Sugar Lumps','Gives you 1,000,000 sugar lumps.', Cheato.Actions.giveSugarLump));
                fragment.appendChild(Cheato.Menu.actionButton('giveCookies','Give Cookies','Gives you the most cookies you can have without getting the cheated cookies achievement.', Cheato.Actions.giveCookies));
                fragment.appendChild(Cheato.Menu.subheading('Mini-games'));
                fragment.appendChild(Cheato.Menu.actionButton('refillMagic','Refill Magic','Refill all of your Grimoire\'s magic.', Cheato.Actions.refillMagic));
                fragment.appendChild(Cheato.Menu.actionButton('refillSwaps','Refill Swaps','Refill all of your Pantheon\'s swaps', Cheato.Actions.refillSwaps));
                fragment.appendChild(Cheato.Menu.subheading('Unlock Things'));
		fragment.appendChild(Cheato.Menu.actionButton('unlockAchievs','Unlock Acheivements','Unlocks all achievements.', Cheato.Actions.unlockAchievs));
                fragment.appendChild(Cheato.Menu.actionButton('unlockAllSeeds','Unlock Plant Seeds','Unlocks all the plant seeds for your Garden. Does not unlock weeds or fungi.', Cheato.Actions.unlockAllSeeds));
                fragment.appendChild(Cheato.Menu.actionButton('unlockAllWeedFungusSeeds','Unlock Weed and Fungi Seeds','Unlocks all the weed and fungus seeds for the Garden.', Cheato.Actions.unlockAllWeedFungusSeeds));
                fragment.appendChild(Cheato.Menu.actionButton('lockAllSeeds','Lock All Seeds','Locks all the seeds for the Garden except for the starting seed.', Cheato.Actions.lockAllSeeds));
                fragment.appendChild(Cheato.Menu.subheading('Misc'));
		fragment.appendChild(Cheato.Menu.actionButton('removeCheatedCookies','Remove Cheat Achievement','Remove \'Cheated cookies taste awful\' achievement', Cheato.Actions.removeCheatedCookies));
   		fragment.appendChild(Cheato.Menu.actionButton('ruinTheFun','Ruin The Fun','Ruins the fun by unlocking everything and giving you an absurd amount of cookies.', Cheato.Actions.ruinTheFun));


                // Unload Cheato button. Doesn't work if you loaded other add-ons first. We check only for Cookie Monster.
                if (typeof CM === 'undefined' || Cheato.cookieMonsterLoaded) fragment.appendChild(Cheato.Menu.actionButton('unloadCheato','Unload Cheato','Unloads Cheato and disabled all of it\'s features.', Cheato.Actions.unloadCheato));

                Cheato.PluginHooks.UpdateMenu(fragment);
        
                l('menu').childNodes[2].insertBefore(fragment, l('menu').childNodes[2].childNodes[l('menu').childNodes[2].childNodes.length - 1]);
            }
        },
    },
    Actions: { // Our action library
        spawnGolden: () => {
            Game.shimmerTypes.golden.time = Game.shimmerTypes.golden.maxTime;
        },
        spawnGoldenFrenzy: ()=>Cheato.Actions.spawnGoldenFixed('frenzy'),
        spawnGoldenDragonflight: ()=>Cheato.Actions.spawnGoldenFixed('dragonflight'),
        spawnGoldenFixed: (type) => {
            let newShimmer = new Game.shimmer('golden',{noWrath:true});
            newShimmer.dur = 10000;
            newShimmer.life = Math.ceil(Game.fps*newShimmer.dur);
            newShimmer.force = type;
            newShimmer.sizeMult = 2;
            return newShimmer;
        },
	unlockAchievs: ()=>Game.SetAllAchievs(1),
        removeCheatedCookies: ()=>Game.RemoveAchiev('Cheated cookies taste awful'),
	ruinTheFun: ()=>Game.RuinTheFun(1),
        refillMagic: ()=>{
            if (Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.magicM)
                Game.Objects['Wizard tower'].minigame.magic = Game.Objects['Wizard tower'].minigame.magicM;
        },
        refillSwaps: ()=>{
            if (Game.Objects['Temple'].minigameLoaded && Game.Objects['Temple'].minigame.gods) {
                Game.Objects['Temple'].minigame.swaps=3;
                Game.Objects['Temple'].minigame.swapT=Date.now();
                Game.Objects['Temple'].minigame.lastSwapT=0;
            }
        },
        giveSugarLump: ()=>{
            Game.gainLumps(1000000);
        },
        giveCookies: ()=>{
            Game.cookies += Game.cookiesEarned;
        },
        unlockAllSeeds: ()=>{
            if(Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants) {
                Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (plant.unlocked) return;
                    if (plant.weed || plant.fungus) return;
                    Game.Objects['Farm'].minigame.unlockSeed(plant);
                });
            }
        },
        unlockAllWeedFungusSeeds: ()=>{
            if(Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants) {
                Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (plant.unlocked) return;
                    if (!plant.weed && !plant.fungus) return;
                    Game.Objects['Farm'].minigame.unlockSeed(plant);
                });
            }
        },
        lockAllSeeds: ()=>{
            if(Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants) {
                Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (plant.unlocked) Game.Objects['Farm'].minigame.lockSeed(plant);
                });
                Game.Objects['Farm'].minigame.unlockSeed(Game.Objects['Farm'].minigame.plants['bakerWheat']);
            }
        },
        unloadCheato: ()=>{
            Object.keys(Cheato.ticks).forEach((tickThis) => {
                let tick = Cheato.ticks[tickThis];
                if (tick.intervalId) {
                    clearInterval(tick.intervalId);
                    tick.intervalId = 0;
                }
            });
            Cheato.Liberate.Game();
            Cheato.PluginHooks.UnloadPlugins();
            Game.UpdateMenu();
            setTimeout(() => Cheato = null, 100);
        },
    },
    ConfigDefaults: { // The default value for the configs
        'autoClicker': false,
        'autoGolden': false,
        'autoReindeer': false,
        'autoNews': false,
        'infiniteCookies': false,
        'infiniteMagic': false,
        'infiniteSwaps': false,
        'blockWrath': false,
        'immortalPlants': false,
        'neverWeeds': false,
        'miracleSpells': false,
        'allGodsActive': false,
        'allGodsSlotOne': false,
    },
    Config: {}, // User settings
    Init: () => { // Initialize the add-on.
        if (!Game || !Game.version || !Game.updateLog) {
            alert('The game isn\'t loaded yet or this isn\'t the game.');
            return;
        }
        Cheato.Hijack.Game();
        Cheato.loadConfig();
        Cheato.initTicks();
        Game.Win('Third-party');
        if (typeof CM === 'object' && typeof Queue !== 'undefined' && typeof jscolor !== 'undefined') Cheato.cookieMonsterLoaded = true;
        Cheato.PluginHooks.Init();
    },
    cookieMonsterLoaded: false,
    Menu: {
        toggleButton: (configParam, text, description) => {
            let div = document.createElement('div'), a = document.createElement('a'), label = document.createElement('label');
            if (!Cheato.getConfig(configParam)) a.className = 'option off';
            else a.className = 'option';
            a.id = `Cheato-${configParam}`;
            a.onclick = ()=>Cheato.toggleConfig(configParam);
            a.textContent = text;
            label.textContent = description;
            div.className = 'listing';
            div.appendChild(a);
            div.appendChild(label);
            return div;
        },
        actionButton: (configParam, text, description, action) => {
            let div = document.createElement('div'), a = document.createElement('a'), label = document.createElement('label');
            a.className = 'option';
            a.id = `Cheato-${configParam}`;
            a.onclick = action;
            a.textContent = text;
            label.textContent = description;
            div.className = 'listing';
            div.appendChild(a);
            div.appendChild(label);
            return div;
        },
        heading: (text) => {
            let heading = document.createElement('div');
            heading.className = 'title';
            heading.textContent = text;
            return heading;
        },
        subheading: (text) => {
            let subheading = Cheato.Menu.heading(text);
            subheading.style.fontSize = '17px';
            return subheading;
        },
    },
    saveConfig: () => {
        localStorage.setItem('Cheato', JSON.stringify(Cheato.Config));
    },
    loadConfig: () => {
        let config = localStorage.getItem('Cheato');
        if (config) {
            config = JSON.parse(config);
            Object.keys(config).forEach((key) => {
                Cheato.setConfig(key, config[key]);
            });
        }
    },
    getConfig: (configParam) => {
        if (typeof Cheato.Config[configParam] === 'undefined')
            return Cheato.ConfigDefaults[configParam];
        else return Cheato.Config[configParam];
    },
    setConfig: (configParam, configValue) => {
        if (configValue === Cheato.ConfigDefaults[configParam])
            delete Cheato.Config[configParam];
        else Cheato.Config[configParam] = configValue;
        Cheato.saveConfig();
        return Cheato.getConfig(configParam);
    },
    toggleConfig: (configParam) => {
        let val = Cheato.setConfig(configParam, !Cheato.getConfig(configParam));
        Cheato.updateMenuView(configParam);
        return val;
    },
    updateMenuView: (configParam) => {
        if (!Cheato.getConfig(configParam))
            l(`Cheato-${configParam}`).className = 'option off';
        else
            l(`Cheato-${configParam}`).className = 'option';
    },
    Liberate: {
        Game: () => {
            if (Cheato.OG.UpdateMenu) Game.UpdateMenu = Cheato.OG.UpdateMenu;
            if (Cheato.OG.shimmerPrototypeInit) Game.shimmer.prototype.init = function() {
                Game.shimmerTypes[this.type].initFunc(this);
            };
            if (Game.hasGod) Cheato.Liberate.hasGod();
            Cheato.Liberate.miniGames();
        },
        miniGames: () => {
            if(Game.Objects['Farm'].minigameLoaded && Game.Objects['Farm'].minigame.plants && Game.Objects['Farm'].minigame.soils) {
                if (Cheato.OG.gardenPlantsMortality) Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                    let plant = Game.Objects['Farm'].minigame.plants[plantName];
                    if (!plant.weed && !plant.fungus) Object.defineProperty(plant, 'immortal', {value:Cheato.OG.gardenPlantsMortality[plantName],configurable: true});
                });
        
                if (Cheato.OG.gardenSoilWeed) Object.keys(Game.Objects['Farm'].minigame.soils).forEach((soilName) => {
                    let soil = Game.Objects['Farm'].minigame.soils[soilName];
                    Object.defineProperty(soil, 'weedMult', {value:Cheato.OG.gardenSoilWeed[soilName],configurable: true});
                });
            }
            if(Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.getFailChance) {
                if (Cheato.OG.grimoireFailChance) Game.Objects['Wizard tower'].minigame.getFailChance = Cheato.OG.grimoireFailChance;
            }
        },
        hasGod: () => {
            if(Game.Objects['Temple'].minigameLoaded && Game.Objects['Temple'].minigame.gods && Cheato.OG.hasGod && Game.hasGod) Game.hasGod = Cheato.OG.hasGod;
            else delete Game.hasGod;
        },
    },
    Hijack: {
        Game: () => {
            if (!Cheato.OG.UpdateMenu) {
                Cheato.OG.UpdateMenu = Game.UpdateMenu;
                Game.UpdateMenu = Cheato.Game.UpdateMenu;
            }
            if (!Cheato.OG.shimmerPrototypeInit) {
                Cheato.OG.shimmerPrototypeInit = true;
                Game.shimmer.prototype.init = function() {
                    if (Cheato.getConfig('blockWrath')) {
                        this.forceObj = {'noWrath':true};
                        Game.shimmerTypes[this.type].initFunc(this);
                    } else {
                        Game.shimmerTypes[this.type].initFunc(this);
                    }
                }
            }
            if (!Cheato.OG.hasGod) Cheato.Hijack.hasGod();
        
            Cheato.Hijack.miniGames();
        },
        miniGames: () => {
            if (!Cheato) return;
            retry = false;
        
            if(!Game.Objects['Farm'].minigameLoaded || !Game.Objects['Farm'].minigame.plants || !Game.Objects['Farm'].minigame.soils) {
                retry = true;
            } else {
                if (!Cheato.OG.gardenPlantsMortality) {
                    Cheato.OG.gardenPlantsMortality = {};
                    Object.keys(Game.Objects['Farm'].minigame.plants).forEach((plantName) => {
                        let plant = Game.Objects['Farm'].minigame.plants[plantName];
                        if (!plant.weed && !plant.fungus) {
                            Cheato.OG.gardenPlantsMortality[plantName] = plant.immortal;
                            Object.defineProperty(plant, 'immortal', {get:()=>{return (Cheato.getConfig('immortalPlants')?true:Cheato.OG.gardenPlantsMortality[plantName])},configurable: true});
                        }
                    });
                }
        
                if (!Cheato.OG.gardenSoilWeed) {
                    Cheato.OG.gardenSoilWeed = {};
                    Object.keys(Game.Objects['Farm'].minigame.soils).forEach((soilName) => {
                        let soil = Game.Objects['Farm'].minigame.soils[soilName];
                        Cheato.OG.gardenSoilWeed[soilName] = soil.weedMult;
                        Object.defineProperty(soil, 'weedMult',{get:()=>{return (Cheato.getConfig('neverWeeds')?0:Cheato.OG.gardenSoilWeed[soilName])},configurable: true});
                    });
                }
            }
        
            if(!Game.Objects['Wizard tower'].minigameLoaded || !Game.Objects['Wizard tower'].minigame.getFailChance) {
                retry = true;
            } else {
                if (!Cheato.OG.grimoireFailChance) {
                    Cheato.OG.grimoireFailChance = Game.Objects['Wizard tower'].minigame.getFailChance;
                    Game.Objects['Wizard tower'].minigame.getFailChance = (spell)=>(Cheato.getConfig('miracleSpells')?0:Cheato.OG.grimoireFailChance(spell));
                }
            }
        
            if (retry) setTimeout(Cheato.Hijack.miniGames, 1000);
        },
        hasGod: () => {
            if (!Cheato) return;
            if(!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) {
                setTimeout(Cheato.Hijack.hasGod, 1000); // We keep running this until we get the real Game.hasGod()
            } else if (!Cheato.OG.hasGod && Game.hasGod) {
                Cheato.OG.hasGod = Game.hasGod;
            }
            Game.hasGod = function(what) {
                if (Cheato.getConfig('allGodsActive')) {
                    if (['ages'].includes(what)) return false; // Add gods to this if you want to skip them
                    return 1;
                } else if (Cheato.getConfig('allGodsSlotOne')) {
                    if(!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) return false; // Don't run if minigame isn't loaded (errors otherwise)
                    let god = Game.Objects['Temple'].minigame.gods[what];
                    for (let i=0;i<3;i++)
                        if (Game.Objects['Temple'].minigame.slot[i]==god.id) return 1;
                    return false;
                } else {
                    if (Cheato.OG.hasGod) return Cheato.OG.hasGod(what);
                    else return false;
                }
            }
        },
    },
    initTicks: () => {
        Object.keys(Cheato.ticks).forEach((tickThis) => {
            let tick = Cheato.ticks[tickThis];
            if (!tick.intervalId) tick.intervalId = setInterval(tick.onTick, tick.rate);
        });
    },
    ticks: {
        'autoClicker': {
            'intervalId': null,
            'rate': 50,
            'onTick': ()=>{
                if (!Cheato.getConfig('autoClicker')) return;
                Game.ClickCookie();
            },
        },
        'autoGolden': {
            'intervalId': null,
            'rate': 500,
            'onTick': ()=>{
                if (!Cheato.getConfig('autoGolden')) return;
                Game.shimmers.forEach(function(shimmer) {
                    if (shimmer.type == "golden") { shimmer.pop() }
                })
            },
        },
        'autoReindeer': {
            'intervalId': null,
            'rate': 500,
            'onTick': ()=>{
                if (!Cheato.getConfig('autoReindeer')) return;
                Game.shimmers.forEach(function(shimmer) {
                    if (shimmer.type == 'reindeer') { shimmer.pop() }
                })
            },
        },
        'autoNews': {
            'intervalId': null,
            'rate': 3000,
            'onTick': ()=>{
                if (!Cheato.getConfig('autoNews')) return;
                if (Game.TickerEffect && Game.TickerEffect.type == 'fortune') Game.tickerL.click();
            },
        },
        'infiniteCookies': {
            'intervalId': null,
            'rate': 100,
            'onTick': ()=>{
                if (!Cheato.getConfig('infiniteCookies')) return;
                Game.cookies = Game.cookiesEarned;
            },
        },
        'infiniteMagic': {
            'intervalId': null,
            'rate': 1000,
            'onTick': ()=>{
                if (!Cheato.getConfig('infiniteMagic')) return;
                if (Game.Objects['Wizard tower'].minigameLoaded && Game.Objects['Wizard tower'].minigame.magicM)
                    Game.Objects['Wizard tower'].minigame.magic = Game.Objects['Wizard tower'].minigame.magicM;
            },
        },
        'infiniteSwaps': {
            'intervalId': null,
            'rate': 1000,
            'onTick': ()=>{
                if (!Cheato.getConfig('infiniteSwaps')) return;
                if(!Game.Objects['Temple'].minigameLoaded || !Game.Objects['Temple'].minigame.gods) return;
                Game.Objects['Temple'].minigame.swaps=3;
                Game.Objects['Temple'].minigame.swapT=Date.now();
                Game.Objects['Temple'].minigame.lastSwapT=0;
            },
        },
    },
    PluginHooks: {
        Init: () => {
            Object.keys(Cheato.Plugins).forEach((key) => {
                let plugin = Cheato.Plugins[key];
                if (typeof plugin['Init'] === 'function') plugin['Init']();
            });
        },
        UnloadPlugins: () => {
            Object.keys(Cheato.Plugins).forEach((key) => {
                let plugin = Cheato.Plugins[key];
                if (typeof plugin['Unload'] === 'function') plugin['Unload']();
            });
        },
        UpdateMenu: (fragment) => {
            Object.keys(Cheato.Plugins).forEach((key) => {
                let plugin = Cheato.Plugins[key];
                if (typeof plugin['Game'] === 'object' && typeof plugin['Game']['UpdateMenu'] === 'function') plugin['Game']['UpdateMenu'](fragment);
            });
        },
    },
    Plugins: {}, // Plugins
};

// You can setup `CheatoPlugins` (object) with your custom plugins before loading this script
if (typeof CheatoPlugins === 'object') {
    Object.keys(CheatoPlugins).forEach((key) => {
        let plugin = CheatoPlugins[key];
        if (typeof plugin === 'object') {
            Cheato.Plugins[key] = plugin;
            if (typeof Cheato.Plugins[key]['Loaded'] === 'function') Cheato.Plugins[key].Loaded();
        } else if (typeof plugin === 'function') {
            Cheato.Plugins[key] = plugin;
            Cheato.Plugins[key]();
        }
    });
}

// Alternatively, you can set CheatoInit to false to prevent the Init and set up your plugins after loading the script, remember to call `Cheato.Init()` afterwards.
if (typeof CheatoInit === 'undefined' || CheatoInit) Cheato.Init();

/* cSpell:ignore Cheato, Toggleables, prefs, minigame, Mult, grimoire, grimoire's, grimoire\'s, Cyclius, dragonflight, Achiev, jscolor */
