// ========================================================
// 🎮 GAME STATE VARIABLES
// ========================================================
let goldMultiplier = 1;
let executionFactor = 0;


// ------------------- PLAYER STATS ----------------------
let currentHealth = 250;
let maxHealth = 250;
let currentXP = 0;
let currentLevel = 1;
let perks = 0; 
let playerDamage = 2;
let minDamage = 1;
let maxDamage = 10;
let heal = 20;
let active = 1; 
let concentrationFactor = 1; 
let goldFactor = 1;
let requiredXP = 200;


let adrenalineFactor = 2;

//END STATS
let timesAttacked = 0;
let enemiesKilled = 0;
let perksEarnt = 0;
let goldEarnt = 0;
let xpEarnt = 0;

// Army / Recruit Stats
let goldValue = 0;
let knightQuantity = 0;

// Damage Resistance
let damageResistance = 1;

// Ghost / Special Effects
let ghostDamageFactor = 1;
let ghostPurchased = false;

// Dark Rituals / DR Perks
let drCost = 1;

// Perk Costs
let perkCost = 100;

// ------------------- ENEMY STATS ----------------------
let baseEnemyDamage = 1;
let enemyDamage = 1 * damageResistance;
let enemyCurrentHealth = 20;
let enemyMaxHealth = 20;

// ------------------- VOLTAGE SYSTEM -------------------
let voltage = 100;
let maxVoltage = 100;
let voltageSpeed = 1000;
let voltageLevel = 1;

// Max Voltage Upgrade
let maxVoltagePerksCost = 5;
let addedVoltage = 0;

// ------------------- INTERVALS & FACTORS -------------
let xpInterval;
let hpInterval;
let voltageInterval;
let enemyInterval;
let xpIntervalFactor = 0;
let xpFactor;
let randomXP;
let healthFactor = 0;

// ------------------- PURCHASED UPGRADES --------------
let purchasedXP = false;
let purchasedHP = false;

// ------------------- PERCENTAGES ----------------------
let XPPercentage;
let HPPercentage;
let EnemyHPPercentage;


//GUARDIAN ANGEL UPGRADE
let guardianRequiredPerks = 5;
let guardianChance = 0;
let guardianFactor = 1;

let presentPlayerDamage;


// ========================================================
// 🧍 PLAYER / ENEMY UI ELEMENTS
// ========================================================

// Player UI
const hp = document.querySelector("#hp");
const healthBar = document.querySelector("#health-bar");
const healthContainer = document.querySelector("#health-container");
const playerDamageLabel = document.querySelector("#player-damage");

// Enemy UI
const enemyHP = document.querySelector("#enemy-hp");
const enemyHealthBar = document.querySelector("#enemy-health-bar");
const enemyHealthContainer = document.querySelector("#enemy-health-container");

// XP / Level UI
const XPPoints = document.querySelector("#xp-points");
const XPLabel = document.querySelector("#XP");
const level = document.querySelector("#level");
const perk = document.querySelector("#perk");
const requiredXPLabel = document.querySelector("#required-xp");

// ========================================================
// 🔘 PLAYER ACTION BUTTONS
// ========================================================
const attack = document.querySelector("#attack");
const healButton = document.querySelector("#heal");

// Automation Buttons
const autoXP = document.querySelector("#auto-xp");
const autoHP = document.querySelector("#regenerate-hp");

// ========================================================
// 🛠 UPGRADES / SHOP
// ========================================================

// General Upgrades
const upgrades = document.querySelector("#upgrades");
const upgradesGUI = document.querySelector("#upgrades-gui");
const upgradeDamage = document.querySelector("#upgrade-damage");
const maxHealthUpgrade = document.querySelector("#max-health-upgrade");
const healUpgrade = document.querySelector("#heal-upgrade");
const refillHealthUpgrade = document.querySelector("#refill-health");
const voltageUpgrade = document.querySelector("#voltage-upgrade");
const requiredRefillPerks = document.querySelector("#required-refill-perks");
const gold = document.querySelector("#gold");
const buyPerk = document.querySelector("#buy-perk");

// Defense Upgrades
const defenseUpgrades = document.querySelector("#defense-upgrades");
const defenseTable = document.querySelector("#defense-table");

// Corruption Upgrades
const corruptionUpgrades = document.querySelector("#corruption-upgrades");
const corruptionTable = document.querySelector("#corruption-table");

// Army / Knights
const recruitKnight = document.querySelector("#recruit-knight");
const perksRequiredLabel = document.querySelector("#perks-required");
const knightsMagnitude = document.querySelector("#knights-magnitude");
const knightsDisplay = document.querySelector("#knights-display");
const armyTable = document.querySelector("#army-table");
const armyUpgrades = document.querySelector("#army-upgrades");
const armyDps = document.querySelector("#army-damage");

// Max Voltage Upgrade UI
const maxVoltageUpgrade = document.querySelector("#max-voltage-upgrade");
const maxVoltageCost = document.querySelector("#max-voltage-cost");
const maxVoltageMagnitude = document.querySelector("#max-voltage-magnitude");

// DR / Damage Resistance UI
const drPerks = document.querySelector("#dr-perks");
const drMagnitude = document.querySelector("#dr-magnitude");
const drButton = document.querySelector("#dr-button");
const drLabel = document.querySelector("#dr-label");

// Ghost Button
const ghostButton = document.querySelector("#ghost-button");

// ========================================================
// ⚡ VOLTAGE SYSTEM UI
// ========================================================
const voltageBar = document.querySelector("#voltage-bar");
const voltageText = document.querySelector("#voltage-text");
const concentrationButton = document.querySelector("#concentration-button");

// ========================================================
// 🧩 MISC / OTHER ELEMENTS
// ========================================================
const healCost = document.querySelector("#heal-cost");
const healPower = document.querySelector("#heal-power");
const maxDamageLabel = document.querySelector("#max-damage");

const mrBox = document.querySelector("#box");
const stealHP = document.querySelector("#steal-hp");
const charge = document.querySelector("#charge");
const freeze = document.querySelector("#freeze");
const devConsole = document.querySelector("#dev-console");
const levelUpButton = document.querySelector("#level-up-button");
const displayEnemy = document.querySelector("#display-enemy");

const guardianAngelUpgrade = document.querySelector("#guardian-angel-upgrade");
const guardianAngelMagnitude = document.querySelector("#guardian-angel-magnitude");
const guardianAngelPerksCost = document.querySelector("#guardian-angel-perks-cost");

const soldier = document.querySelector("#soldier");

// ========================================================
// 🔊 SOUND EFFECTS
// ========================================================
const swordSlash = document.querySelector("#sword-slash");
swordSlash.volume = 0.2;

const healSfx = document.querySelector("#heal-sfx");
const levelUpSfx = document.querySelector("#level-up-sfx");
const displayLabel = document.querySelector("#display-label");
const zombieAttack = document.querySelector("#zombie-attack");

const deadRobot = document.querySelector("#dead-robot");
const deadWalking = document.querySelector("#dead-walking");
const wolfHowling = document.querySelector("#wolf-howling");
const dramaticEnding = document.querySelector("#dramatic-ending");
const creepyWoman = document.querySelector("#creepy-woman");
const beheading = document.querySelector("#beheading");

const purchaseSkill = document.querySelector("#purchase-skill");
const ghostWhisper = document.querySelector("#ghost-whisper");
const knifeSfx = document.querySelector("#knife-sfx");
const revolverSfx = document.querySelector("#revolver-sfx");
const heartBeep = document.querySelector("#heart-beep");
const electricitySfx = document.querySelector("#electricity-sfx");
const criticalSfx = document.querySelector("#critical-sfx");
const swordKill = document.querySelector("#sword-kill");
const rage = document.querySelector("#rage");
const fireballSfx = document.querySelector("#fireball-sfx");
const iceSfx = document.querySelector("#ice-sfx");


// ========================================================
// 🔢 MAGNITUDE ELEMENTS (MOTIVATION BOOSTERS)
// ========================================================
const refillHealthMagnitude = document.querySelector("#refill-health-magnitude");
const maxHealthMagnitude = document.querySelector("#max-health-magnitude");
const healUpgradeMagnitude = document.querySelector("#heal-upgrade-magnitude");
const regenerateHpMagnitude = document.querySelector("#regenerate-hp-magnitude");
const stealHpMagnitude = document.querySelector("#steal-hp-magnitude");
const autoXpMagnitude = document.querySelector("#auto-xp-magnitude");
const voltageUpgradeMagnitude = document.querySelector("#voltage-upgrade-magnitude");
const upgradeDamageMagnitude = document.querySelector("#upgrade-damage-magnitude");

const fireball = document.querySelector("#fireball");
const flameAnimation = document.querySelector("#flame-animation");
const fireballUpgrade = document.querySelector("#fireball-upgrade");

const fireballMagnitude = document.querySelector("#fireball-magnitude");

const superNova = document.querySelector("#super-nova");
const superNovaPerksRequired = document.querySelector("#super-nova-perks-required")
const superNovaMagnitude = document.querySelector("#super-nova-magnitude");

const spellTable = document.querySelector("#spell-upgrades-table");
const spellUpgrades = document.querySelector("#spell-upgrades");

const adrenalineUpgrade = document.querySelector("#adrenaline-upgrade");
const adrenaline = document.querySelector("#adrenaline");
const adrenalineMagnitude = document.querySelector("#adrenaline-magnitude");

const freezeUpgrade = document.querySelector("#freeze-upgrade");
const freezeMagnitude = document.querySelector("#freeze-magnitude");

const noMercyUpgrade = document.querySelector("#no-mercy-upgrade");
const noMercyPerksRequired = document.querySelector("#no-mercy-perks-required");
const noMercyMagnitude = document.querySelector("#no-mercy-magnitude");

const incomeTable = document.querySelector("#income-table");
const incomeUpgrades = document.querySelector("#income-upgrades");

const luckyFingersUpgrade = document.querySelector("#lucky-fingers-upgrade");
const luckyFingersPerksRequired = document.querySelector("#lucky-fingers-perks-required");
const luckyFingersMagnitude = document.querySelector("#lucky-fingers-magnitude");

const shockwaveUpgrade = document.querySelector("#shockwave-upgrade");
const shockwavePerksRequired = document.querySelector("#shockwave-perks-required");
const shockwaveMagnitude = document.querySelector("#shockwave-magnitude");

const executionUpgrade = document.querySelector("#execution-upgrade");
const executionPerksRequired = document.querySelector("#execution-perks-required");
const executionMagnitude = document.querySelector("#execution-magnitude");
// ========================================================
// 🔢 ENEMY LIST ARRAY
// ========================================================

// enemyList condensed: remove exact duplicates
const enemyList = [
  "RAT","BAT","SPIDER","SNAKE","LIZARD","CAT","DOG","FERALCAT","COUGAR","HYENA",
  "SCORPION","CRAB","CROW","IMP","KOBOLD","GOBLIN","TROLL","OGRE","STONEGOLEM",
  "IRONOGRE","SHADOWCAT","FIREBAT","ICEWOLF","VENOMSCORPION","SPIKERAT","RAZORBAT",
  "SHIVERWOLF","BLOODWYRM","PHOENIX","WYRM","DRAGON","DARKWRAITH","VAMPIRE","REVENANT",
  "BEHEMOTH","HELLFIRE","NIGHTDEMON","VOIDDRAGON","FROSTLEVIATHAN","BLAZEKRAKEN",
  "TITAN","COLOSSUS","NIGHTFANG","LEVIATHAN","SPECTER","ABYSS","OMNIS","APEX",
  "SINGULARITY","EMBERCAT","ICEPYTHON","FIREHYENA","STORMCOUGAR","CRAGCRAB",
  "SKYFERALCAT","IRONCROW","STONEGOBLIN","HELLKOBOLD","DARKTROLL","VOLCANOOGRE",
  "FROSTWYRM","BLOODPHOENIX","INFERNODRAGON","NIGHTWRAITH","OMNISPECTER",
  "APEXLEVIATHAN","SINGULARITYBEHEMOTH","ABYSSKRAKEN","VOIDNIGHTFANG","COSMOSREVENANT",
  "HELLFANG","FIREBEAST","ICEBEAST","THUNDERBEAST","SHADOWBEAST","VOIDBEAST",
  "NIGHTBEAST","APEXBEAST","ULTIMABEAST","CELESTIALDRAGON","VOIDTITAN","INFERNOTITAN",
  "ETHERWYRM","COSMOSTITAN","OBLIVIONBEAST","ETERNALDRAGON","SINGULARITYTITAN",
  "OMEGA","NULL"
];

// soldierName condensed: remove repeated rank variants manually
const soldierName = [
  "Peasant 🧍","Drone 🤖","Wolf 🐺","Horse 🐴","Alien 👽","Goblin 🥷","Skeleton 💀",
  "Zombie 🧟","Bandit 🗡️","Archer 🏹","Swordsman ⚔️","Wizard 🪄","Apprentice Mage 🧙‍♂️",
  "Commander 🛡️","Prince 🤴","Princess 👸","Queen 👑","King 🤴👑","Demon 😈",
  "Berserker 🪓","Sniper 🎯","Dragon 🐉","Basilist 🐍","Tank 🛡️","Submarine 🛳️",
  "Jet-fighter ✈️","Witch 🧙‍♀️","Battleship 🚢","Vampire 🧛‍♂️","Necromancer 🪦",
  "Warlock 🔮","Phoenix 🔥🦅","Titan 🏋️‍♂️","Mech 🤖🦾","Leviathan 🐋","Archangel 😇"
];



// enemyEmojis condensed: remove duplicates
const enemyEmojis = [
  "🐀","🦇","🕷️","🐍","🦎","🐱","🐶","🐈‍⬛","🐆","🦡",
  "🦂","🦀","🐦","👹","👺","🗿","🔥🦇","❄️🐺","☠️🦂","🐀🗡️",
  "🦇🗡️","🐺❄️","🐍🩸","🦅🔥","🐉","👻","🧛","☠️","🐘","🔥💀",
  "😈","🐉🌌","❄️🐋","🔥🦑","🗿💪","⚫","🐱🔥","❄️🐍","🔥🦁","🌩️🐆"
];






//CODE FOR THE UPGRADES TABLES
const upgradesGui = document.querySelector("#upgrades-gui");

const healthUpgrades = document.querySelector("#health-upgrades");
const xpUpgrades = document.querySelector("#xp-upgrades");
const voltageUpgrades = document.querySelector("#voltage-upgrades");
const damageUpgrades = document.querySelector("#damage-upgrades");

const healthTable = document.querySelector("#health-table");
const voltageTable = document.querySelector("#voltage-table");
const damageTable = document.querySelector("#damage-table");
const xpTable = document.querySelector("#xp-table");



const criticalHitUpgrade = document.querySelector("#critical-hit-upgrade");
const criticalHitMagnitude = document.querySelector("#critical-hit-magnitude");
const criticalHitPerksCost = document.querySelector("#critical-hit-perks-cost");

let criticalChanceRequiredPerks = 5;
let criticalChanceFactor = 1;
let criticalHit = 2;

criticalHitUpgrade.addEventListener("click", function() {
    if(perks >= criticalChanceRequiredPerks) {
	purchaseSkill.currentTime = 0;
	purchaseSkill.play();
        perks -= criticalChanceRequiredPerks;

	criticalChanceRequiredPerks += 3;
	updatePerks();
	
	criticalChanceFactor += 1;
	
	criticalHitPerksCost.textContent = criticalChanceRequiredPerks;
	criticalHitMagnitude.textContent = criticalChanceFactor + " %";
    }
});


const criticalDamageUpgrade = document.querySelector("#critical-damage-upgrade");
const criticalDamageMagnitude = document.querySelector("#critical-damage-magnitude");
const criticalDamagePerksCost = document.querySelector("#critical-damage-perks-cost");

let criticalDamageRequiredPerks = 5;
let criticalDamageFactor = 2;

criticalDamageUpgrade.addEventListener("click", function() {
    if(perks >= criticalDamageRequiredPerks) {

	purchaseSkill.currentTime = 0;
	purchaseSkill.play();

        perks -= criticalDamageRequiredPerks;
	criticalDamageRequiredPerks += 8;
	updatePerks();

	criticalDamageFactor += 0.25;

	criticalDamagePerksCost.textContent = criticalDamageRequiredPerks;
	criticalDamageMagnitude.textContent = "x" + criticalDamageFactor;
    
        }


});

let playerName = "";


///////////////////////////////////////////////////////////////////////////////							          //INTRODUCTION//
//INTRO

introDecision = prompt(`
Welcome to the Game! Would you like to skip the intro?
[1] Yes - Skip this stupid intro!
[2] No - I wanna make my player name!
[3] Let Fate Decide!
[4] You call this a game? Pff..
`)

function level1Story() {
    alert("After going to bed in your cosy warm house. you wake up in an abandoned mansion in the dark ages...before you can do anything you hear the annoying squeak of rats tearing through the floorboard....theres a knife in the bedside table! Take it and slaughter those parasites!");
    level1decision = prompt
(`[1] Awww but they are adorable!
[2] Ahhhhhh! I'm terrified of rats!
[3] Can't I just run away?
[4] Can't wait to make them bleed!`);

    if(level1decision === "1") {
	alert("Aww how cute. The rats blushed like strawberrys as you complimented their cute noses. Thanks for making them feel special wecials!");
	alert("All enemies now have +10 max health!");
	enemyCurrentHealth += 10;
	enemyMaxHealth += 10;
	updateEnemyHealthValues();
    }

    else if(level1decision === "2") {
        alert("Don't be shy now. Mr rat wants to have a hug. Here's a helmet to make you feel safer!");
	alert("Health Increased by +10!");
	currentHealth += 10;
	maxHealth += 10;
	updateHealthValues();
    }

    else if(level1decision === "3") {
        alert("You attempt to run away like a coward...but you get bit in the leg reducing your max health by 10!");
	currentHealth -= 10;
	maxHealth -= 10;
	updateHealthValues();
    }

    else if(level1decision === "4") {
        alert("Now thats what we call a brave fighter...come on.. i wanna see those rats squished like pancakes!");
	alert("Max Voltage + 5");
	maxVoltage += 5;
	updateVoltageValues();
    }
}

function startIntro() {
    alert("A portal opens. The devil smirks. One step into the unknown, and the age of humans fades. The dark ages rise again… and you are alone.");
    alert("You have no idea who you are...who are you...tell us..");
    playerName = prompt("Enter your forgotten name...");
    alert("Welcome " + playerName + "!");
    let playerClass = prompt
(`Choose a class to determine your fate:
1] Assassin 🗡️
Quick and deadly, but fragile. One wrong move could spell disaster!
HP: 100
Voltage: 125
Damage: 12

[2] Mage 🔮
Masters of the arcane, but frail in close combat. Spells are your lifeline.
HP: 75
Voltage: 300
Damage: 1

[3] Viking 🪓
Armoured juggernauts with decent damage, but magic isn’t their strong suit.
HP: 500
Voltage: 40
Damage: 5

[4] Knight 🛡️
The balanced warrior. Reliable in every situation, the default starting class.
HP: 250
Voltage: 100
Damage: 2
Damage Resistance 5%`)

    if(playerClass === "1") {
        alert("Assassin Selected!");

	currentHealth = 100;
	maxHealth = 100;
	voltage = 125;
	maxVoltage = 125;
	playerDamage = 12;
	
	updateHealthValues();
	updateVoltageValues();
	playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage;

alert(`🗡️Assassin Stats🗡️ 
Health: 100
Voltage: 125
Damage: 12 `);
	level1Story();

    }

    else if(playerClass === "2") {
        alert("Mage Selected"); 
	
	currentHealth = 75;
	maxHealth = 75;
	voltage = 300;
	maxVoltage = 300;
	playerDamage = 1;
	voltageSpeed /= 2;
	
	updateHealthValues();
	updateVoltageValues();
	playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage;

alert(`🔮Mage Stats🔮 
Health: 75
Voltage: 300
Voltage Regeneration: 2 V/Sec
Damage: 1 `);
	level1Story();
    }

    else if(playerClass === "3") {
	alert("Viking Selected");

	currentHealth = 500;
	maxHealth = 500;
	voltageoltage = 40;
	maxVoltage = 40;
	playerDamage = 5;
	
	updateHealthValues();
	updateVoltageValues();
	playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage;

alert(`🪓Viking Stats🪓 
Health: 500
Voltage: 40
Damage: 5 `);
	level1Story();
    }


    else if(playerClass === "4") {
        alert("Knight Selected!");
	damageResistance += 5;

	drDecimal = 1 - (damageResistance/100);
	newEnemyDamage = baseEnemyDamage * drDecimal;
	newEnemyDamage = Math.floor(newEnemyDamage);
	enemyDamage = newEnemyDamage;	
	drLabel.textContent = "DR: " + damageResistance + " %";
	maxDamageLabel.textContent = "|" + "Enemy DPS: " + newEnemyDamage;
	drPerks.textContent = drCost	
	drMagnitude.textContent = damageResistance + " %";	
	drLabel.textContent = "DR: " + damageResistance + " %";	
	
alert(`⚔️Knight Stats⚔️ 
Health: 250
Voltage: 100
Damage: 2 
Damage Resistance: 5%`)
	level1Story();

    }



}

if(introDecision === "1") {
}

else if(introDecision === "2") {
    startIntro();
}

else if(introDecision === "3") {
    let diceRoll = Math.floor(Math.random() * 2);
    alert("Flipping coin...if it lands on heads your heading into the intro 😈")


    if(diceRoll) {
        alert("Heads🪙");
	startIntro();
    }

    else if(!diceRoll) {
        alert("Tails🪙");
    }
}

else if(introDecision === "4") {
    alert("Hmmm..that wasn't very nice. You know...I am god of this game! You can't just expect me to sit back in this comfy bed and watch people say how trash this game is. Do you really think you could get away with it! Huh. Well guess what. I got a trick up my sleeve!");
    alert("I summon you...to death!");
    alert("-999,999,999,999,999,999,999,999 HP");
    currentHealth = -Infinity; 
}






////////////////////////////////////////////////////////////////////////////////
swordKill.volume = 0.5;

// ========================================================
// ☠️ Enemy Dies ☠️																														//ENEMY DIES//
// ========================================================

function enemyDead() {
	swordKill.currentTime = 0;
    	swordKill.play();
	enemiesKilled += 1;


	displayEnemy.style.filter = "invert(100%)";


	setTimeout(function() {
	    displayEnemy.style.filter = "invert(0%)";

	
	}, 1000);

	xpFactor =  10 + (currentLevel * 10);
        randomXP = Math.floor(Math.random() * xpFactor + 1)

	if(currentXP + randomXP >= requiredXP) {
	    active = 0;
	    currentXP = requiredXP;
        }
	
        enemyCurrentHealth = enemyMaxHealth;
	currentHealth += healthFactor;
	updateEnemyHealthValues();

	currentXP += randomXP * active; 
	xpEarnt += randomXP * active;



	//🪙GOLD ADDED HERE!🪙
	goldValue += Math.floor(enemyMaxHealth * goldMultiplier);
	goldEarnt += Math.floor(enemyMaxHealth * goldMultiplier);

	gold.textContent = "Gold: " + goldValue;


	updateXPValues();

        displayLabel.style.color = "black";
        displayLabel.style.opacity = 1;
	displayLabel.style.background = "linear-gradient(to bottom, yellow, orange)";
	displayLabel.textContent = "+ " + randomXP + " XP";
	updateXPValues();
	
       setTimeout(function() {
	   displayLabel.style.opacity = 0;
	     
       }, 2000);
}

// ========================================================
// END
// ========================================================


// ========================================================
// 🛠️SHOW UPGRADE TABLES🛠️
// ========================================================								                //UPGRADE TABLES//

//🛠️UPGRADES BUTTON🛠️ - OPENS SKILL CLASSES
upgrades.addEventListener("click", function() {
    if(upgradesGui.style.display === "none") {upgradesGui.style.display = "block"}

    else if(upgradesGui.style.display === "block") {upgradesGui.style.display = "none"}

});

//💖HEALTH TABLE💖
healthUpgrades.addEventListener("click", function() {
    if(healthTable.style.display === "none") {
        healthTable.style.display = "block";

	voltageUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";
	damageUpgrades.style.display = "none";   
	armyUpgrades.style.display = "none";  
	defenseUpgrades.style.display = "none";
	corruptionUpgrades.style.display = "none";
	spellUpgrades.style.display = "none";
	incomeUpgrades.style.display = "none";


    }

    else if(healthTable.style.display === "block") {
        healthTable.style.display = "none";

	voltageUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";
	damageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
	spellUpgrades.style.display = "block";
	incomeUpgrades.style.display = "block";


    }
    
});

//⚡VOLTAGE TABLE⚡
voltageUpgrades.addEventListener("click", function() {
    if(voltageTable.style.display === "none") {
        voltageTable.style.display = "block";

	healthUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";
	damageUpgrades.style.display = "none";  
	armyUpgrades.style.display = "none";  
	defenseUpgrades.style.display = "none"; 
	corruptionUpgrades.style.display = "none";
	spellUpgrades.style.display = "none";
	incomeUpgrades.style.display = "none";


    }

    else if(voltageTable.style.display === "block") {
        voltageTable.style.display = "none";

	healthUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";
	damageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
	spellUpgrades.style.display = "block";
	incomeUpgrades.style.display = "block";


    }
    
});

//💥DAMAGE TABLE💥
damageUpgrades.addEventListener("click", function() {
    if(damageTable.style.display === "none") {
        damageTable.style.display = "block";

	healthUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";   
	armyUpgrades.style.display = "none";  	
	defenseUpgrades.style.display = "none";
	corruptionUpgrades.style.display = "none";
	spellUpgrades.style.display = "none";
	incomeUpgrades.style.display = "none";


    }

    else if(damageTable.style.display === "block") {
        damageTable.style.display = "none";

	healthUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";	
	armyUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
	spellUpgrades.style.display = "block";
	incomeUpgrades.style.display = "block";


    }
    
});


//💫XP TABLE💫
xpUpgrades.addEventListener("click", function() {
    if(xpTable.style.display === "none") {
        xpTable.style.display = "block";

	healthUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";
	damageUpgrades.style.display = "none";  
	armyUpgrades.style.display = "none";
	defenseUpgrades.style.display = "none";	   
	corruptionUpgrades.style.display = "none";
	spellUpgrades.style.display = "none";
	incomeUpgrades.style.display = "none";


    }

    else if(xpTable.style.display === "block") {
        xpTable.style.display = "none";

	healthUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";
	damageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
	spellUpgrades.style.display = "block";
	incomeUpgrades.style.display = "block";


    }
    
});

//🪖ARMY TABLE🪖
armyUpgrades.addEventListener("click", function() {
    if(armyTable.style.display === "none") {
        armyTable.style.display = "block";
    

        healthUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";
	damageUpgrades.style.display = "none";
 	xpUpgrades.style.display = "none";
	defenseUpgrades.style.display = "none";
	corruptionUpgrades.style.display = "none";
	spellUpgrades.style.display = "none";
	incomeUpgrades.style.display = "none";



    }

    else if(armyTable.style.display === "block"){
        armyTable.style.display = "none";

        healthUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";
	damageUpgrades.style.display = "block";
 	xpUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
	spellUpgrades.style.display = "block";
	incomeUpgrades.style.display = "block";


        
    }
    

});

//🛡️DEFENSE TABLE🛡️
defenseUpgrades.addEventListener("click", function() {
    if(defenseTable.style.display === "none"){
        defenseTable.style.display = "block";

	healthUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";	
	damageUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";
	armyUpgrades.style.display = "none";
	corruptionUpgrades.style.display = "none";
	spellUpgrades.style.display = "none";
	incomeUpgrades.style.display = "none";


	
    }
    
    else if(defenseTable.style.display === "block"){
        defenseTable.style.display = "none";

	healthUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";	
	damageUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
	spellUpgrades.style.display = "block";
	incomeUpgrades.style.display = "block";


    }   

});

//🕷️CORRUPTION TABLE🕷️
corruptionUpgrades.addEventListener("click", function() {
    if(corruptionTable.style.display === "none"){
        corruptionTable.style.display = "block";

	healthUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";	
	damageUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";
	armyUpgrades.style.display = "none";
	defenseUpgrades.style.display = "none";
	spellUpgrades.style.display = "none";
	incomeUpgrades.style.display = "none";


	
    }
    
    else if(corruptionTable.style.display === "block"){
        corruptionTable.style.display = "none";

	healthUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";	
	damageUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
	spellUpgrades.style.display = "block";
	incomeUpgrades.style.display = "block";

    }   

});

//🕷️Spell Table🕷️
spellUpgrades.addEventListener("click", function() {
    if(spellTable.style.display === "none"){
        spellTable.style.display = "block";

	healthUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";	
	damageUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";
	armyUpgrades.style.display = "none";
	defenseUpgrades.style.display = "none";
	corruptionUpgrades.style.display = "none";
	incomeUpgrades.style.display = "none";

	
    }
    
    else if(spellTable.style.display === "block"){
        spellTable.style.display = "none";

	healthUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";	
	damageUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
	incomeUpgrades.style.display = "block";

    }   

});

//Income Table
incomeUpgrades.addEventListener("click", function() {
    if(incomeTable.style.display === "none"){
        incomeTable.style.display = "block";

	healthUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";	
	damageUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";
	armyUpgrades.style.display = "none";
	defenseUpgrades.style.display = "none";
	corruptionUpgrades.style.display = "none";
	spellUpgrades.style.display = "none";
	
    }
    
    else if(incomeTable.style.display === "block"){
        incomeTable.style.display = "none";

	healthUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";	
	damageUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
	spellUpgrades.style.display = "block";
    }   

});

// ========================================================
// END
// ========================================================

//GUARDIAN ANGEL FUNCTION
function guardianRoll() {
    let guardianNumber = Math.floor(Math.random() * 1000 + 1);
    if(guardianNumber <= guardianChance) {
        guardianFactor = 0;
    }

    else{
        guardianFactor = 1;
    }
}

// EXECUTION FUNCTION
function executionRoll() {
    let executionNumber = Math.floor(Math.random() * 400 + 1);
    if(executionNumber <= executionFactor) {
	criticalSfx.currentTime = 0;
	criticalSfx.play()
        enemyDead();
	
	displayLabel.textContent = "Execution!"
	displayLabel.style.opacity = 1;
	displayLabel.style.backgroundColor = "darkred";
	displayLabel.style.color = "white";
	setTimeout(function() {
	    displayLabel.style.opacity = 0;
	}, 2000)
    }
}
// ========================================================
// ⚡UPDATE RESOURCES/STATUS⚡
// ========================================================								                //UPDATE RESOURCES//

function updateHealthValues() {
    	HPPercentage = (currentHealth/maxHealth) * 100;
	currentHealth = Math.round(currentHealth);
    	hp.textContent = playerName.toUpperCase() + " HP: " + currentHealth + "/" + maxHealth;
    	healthBar.style.width = HPPercentage + "%";

if (HPPercentage > 90) {
    healthBar.style.background = "linear-gradient(to bottom, #65ff00, #32cd32)";
    hp.style.color = "black";
} 
else if (HPPercentage > 65 && HPPercentage <= 85){
    healthBar.style.background = "linear-gradient(to bottom, #9dff00, #65ff00)";
    hp.style.color = "black";
} 
else if (HPPercentage > 50 && HPPercentage <= 65){
    healthBar.style.background = "linear-gradient(to bottom, #f6ff00, #9dff00)";
    hp.style.color = "black";
} 
else if (HPPercentage > 35 && HPPercentage <= 50){
    healthBar.style.background = "linear-gradient(to bottom, #ffbf00, #ffdd33)";
    hp.style.color = "white";
} 
else if (HPPercentage > 15 && HPPercentage <= 35){
    healthBar.style.background = "linear-gradient(to bottom, #ff7f00, #ffbf00)";
    hp.style.color = "white";
} 
else if (HPPercentage > 0 && HPPercentage <= 15){
    healthBar.style.background = "linear-gradient(to bottom, black, #ff0000)";
    hp.style.color = "white";
}

 
	
}

updateHealthValues();

function updateEnemyHealthValues() {
    	enemyHPPercentage = (enemyCurrentHealth/enemyMaxHealth) * 100;
	enemyHP.textContent = enemyList[currentLevel-1] + " HP: " + Math.floor(enemyCurrentHealth) + "/" + enemyMaxHealth;
    	enemyHealthBar.style.width = enemyHPPercentage + "%";
}

function updateXPValues() {
        XPPercentage = (currentXP/requiredXP) * 100;
	XPPoints.style.width = XPPercentage + "%";
	XPLabel.textContent = "XP: " + currentXP + "/" + requiredXP;
}

function updatePerks() {perk.textContent = "|" + "Skill Points: " + perks + "|";}

function updateVoltageValues() {
        voltagePercentage = (voltage/maxVoltage) * 100;
        voltageBar.style.width = voltagePercentage + "%";
        voltageText.textContent = "Voltage: " + voltage + "/" + maxVoltage;

}

//LEVEL 2 STORY
function level2Story() {
    alert("After surviving the swarm of " + enemyList[currentLevel - 1].toLowerCase() + "s" + ", your confidence grows… but so does the danger around you.");
    alert("You have a few moments to prepare before moving forward. How will you increase your chances of surviving what's ahead?");
 
   let decision2 = prompt(`
[1] Sharpern your dull knife
[2] Check the wall safe for contents
[3] Turn on the fire
[4] Read the newspaper
`);
    
    if(decision2 === "1"){
        alert("You sharpern your knife making the blade slightly more powerful gaining +1 damage");
	playerDamage += 1;
	playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage;

	alert("A wave of " + enemyList[currentLevel].toLowerCase() + "s" + " bursts through the window, drawn by the scent of your last fight. Grip your sharpened knife—it's about to get wild!");



    }

    else if(decision2 === "2") {
	pin = prompt
(`Enter Pin
_ _ _ _`)
	if(pin === "1234") {
  	    alert("You successfully guessed the pin and found some rubies, a pen, an old hat and a box of diamonds!")
	    alert("+ 3500 Gold!");
	    goldValue += 3000;
	    gold.textContent = "Gold: " + goldValue;
        }

	else{
            alert("You tried to hack the safe but you had no luck guessing the password. Good try though!")
	    alert("You tired yourself out! -10 Max Voltage!")
	    maxVoltage -= 10;
	    updateVoltageValues();

	    alert("A swarm of " + enemyList[currentLevel].toLowerCase() + "s " + "glide through the living room door and surround you! Forget the safe, forget everything! Grab your knife   and fight, they’re after your blood!");
        }


    }

    else if(decision2 === "3") {
        alert("You use a match to light the fireplace creating a cosy atmosphere in this gloomy mansion");
	alert("The fire makes enemies more frightened! -5 enemy HP")
	enemyMaxHealth -= 5;
	alert("A swarm of " + enemyList[currentLevel].toLowerCase() + "s " + "approach you from the distance and looks like they don't like the look of the fire. They avoid it. Use it in your favour!")
    }

    else if(decision2 === "4") {
        alert("You sit down on the sofa reading the newspaper 'Zombie Headlines' you learnt a new defensive combat tactic increasing your damage resistance by 2 %!");
	damageResistance += 2;
	drLabel.textContent = "DR: " + damageResistance + "%";

	alert("After you got distracted practising the dodge technique a swarm of " + enemyList[currentLevel].toLowerCase() + "s " + "storm through the open window biting at ur neck!") 

	alert("-15 HP! Blood dripping on the floor. Time for payback!");
	currentHealth -= 15;
	updateHealthValues();

	drDecimal = 1 - (damageResistance/100);

	newEnemyDamage = baseEnemyDamage * drDecimal;
	newEnemyDamage = Math.floor(newEnemyDamage);
	enemyDamage = newEnemyDamage;
	
	drLabel.textContent = "DR: " + damageResistance + " %";
	maxDamageLabel.textContent = "|" + "Enemy DPS: " + newEnemyDamage;


	
    }

}

function level3Story() {
	alert("You reach the courtyard… a maze of webs and shadows. Giant " + enemyList[currentLevel].toLowerCase() + "s " + "block every exit, forcing you to face them before escape.");
	alert("Despite the panic, a lucky coin falls from the eerie sky. You have the chance to double your gold or lose it all. What will you do?")
	let decisions3 = prompt(`
[1] Flip the coin
[2] Leave it for the next idiot
[3] Keep the coin
[4] Destroy the coin
`)
	if(decisions3 === "1") {
	    alert("You decide to flip the coin in the hope of doubling the weight of coins in your pocket!")
	    let hot = prompt("[H]Heads or [T]tails");
	    let coinFlip = Math.floor(Math.random() * 2);

	    if(coinFlip === 0) {
	        alert("Heads");

		if(hot === "H") {
		    alert("You won! Doubling your cash now!");
 		    alert("Duplicating " + goldValue + " gold. Please stand by");
		    goldValue *= 2;
		    gold.textContent = "Gold: " + goldValue;
		    alert("Duplication Success!");

                }

		else if(hot === "T") {
		    alert("Muhahaha! You lose! Taking your money!");
		    alert("Zombies take your gold away");
		    goldValue = 0;
		    gold.textContent = "Gold: " + goldValue;
		    alert("Bankrupt Success!");
                }
            }

	    else if(coinFlip === 1) {
		alert("Tails");

		if(hot === "H") {
		    alert("Muhahaha! You lose! Taking your money!");
		    alert("Zombies take your gold away");
		    goldValue = 0;
		    gold.textContent = "Gold: " + goldValue;
		    alert("Bankrupt Success!");
                }

		else if(hot === "T") {
		    alert("Damn! You won! Doubling your cash now!");
		    alert("Duplicating " + goldValue + " gold. Please stand by")
		    goldValue *= 2;
		    gold.textContent = "Gold: " + goldValue;

		    alert("Duplication Success!");
		    
                }
            }

        }

	else if (decisions3 === "2") {
            alert("You decide not to gamble your gold. Sad times you could have been rich.")

	    alert("Caution! " + enemyList[currentLevel].toLowerCase() + "s" + " surround the maze that you are in. They are 4 times the size of you but don't worry...not like their skin is made of iron anyway. Destroy them!")
        }

	else if(decisions3 === "3") {
	    alert("You slide the coin down your pocket! It's only a coin but you never know. May bring you good luck!");
	    alert("+ 1 Gold");	
	    goldValue += 1;
	    gold.textContent = "Gold: " + goldValue;

	    alert("After putting a coin in your pocket, the spiders smell you out and block all exits. The only way out is to kill the Queen and her brothers. Grab that knife and stab them where it hurts!")
        }

	else if (decisions3 === "4") {
            alert("You destroy the coin using your knife! Preventing others from gaining fortune or losing it!")
	    alert("A blessing descends from the heavens! All gold looted from enemies is now 10% greater!");
	    goldFactor += 0.1;

	    alert("Caution! " + enemyList[currentLevel].toLowerCase() + "s" + " Giant Spiders now surround you. Their fangs are poisonous but their skin is pathetic. Find their weakness and destroy them before you become their new breeding ground. Yuck!")
        }
}



function level4Story() {
	alert("You kill the last " + enemyList[currentLevel-1].toLowerCase() + " causing the others to flee in distress");
	alert("Now which way is out?")
	let decision4 = prompt("Direction: left/right/stay");
	if(decision4 === "left"){
	    alert("You found the exit! A " + enemyList[currentLevel].toLowerCase() + " ambushes you outside the maze. Keep an eye on your health and destroy that thing!")
        }

	else if(decision4 === "right") {
	    alert("You got lost further in the maze causing you to get hungry and tired. -20 HP and -10 V");
	    currentHealth -= 20;
	    voltage -= 10;
	    alert("A " + enemyList[currentLevel].toLowerCase() + " finds your lost soul, ignore how weak you are right now and grab that pathetic knife of yours to kill the " + enemyList[currentLevel].toLowerCase() + " before it kills you!");
        
        }

	else if(decision4 === "stay") {
	    alert("You catch your breath and recharge. +50 Voltage flows through your veins!");
	    voltage += 50;
	    updateVoltageValues();
	        
	    alert("As you are taking a sip from your bottle you notice a black slivering shadow approach you from behind.")
	    alert("You dodge out the way and grab your knife out. Looks like the " + enemyList[currentLevel].toLowerCase() + " of the labyrinth has arrived")
        }

	
	
}

function level5Story() {
	alert("You finish the " + enemyList[currentLevel - 1].toLowerCase() +  " with a precise, throbbing stab to its great yellow eye!");
	alert("Looking around, the area is clear. You decide to find the nearest settlement to uncover what's going on.");
	alert("Before you embark on the long journey, a mysterious opportunity appears—you may make a single wish! Choose wisely…");

	let decisions5 = prompt(`
[1] Double Health
[2] Double Damage
[3] Double Max Voltage
`);

	if (decisions5 === "1") {
	    alert("Your skin hardens and transforms into impenetrable rock!");
	    maxHealth *= 2;
	    updateHealthValues();
	    alert("Max Health doubled!");

	    alert("Suddenly, a dark-grey " + enemyList[currentLevel].toLowerCase() + " ambushes you in the forest. The shadows are thick, so you set a tree ablaze to illuminate the area. Let's see if your rock-like hide can save you…");

	} else if (decisions5 === "2") {
	    alert("Your weapon fuses with the venom of death itself!");
	    playerDamage *= 2;
	    playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage + "|";
	    alert("You now deal twice as much damage!");

	    alert("A bright-green " + enemyList[currentLevel].toLowerCase() + " ambushes you in the forest. It's almost pitch-dark, so you light a torch and place it on a tree. Let's see if your venomous weapon strikes true…");

	} else if (decisions5 === "3") {
	    alert("A surge of energy courses through your body, electrifying every vein!");
	    maxVoltage *= 2;
	    alert("Voltage capacity doubled!");

	    alert("A giant " + enemyList[currentLevel].toLowerCase() + "s" + " ambushes you in the forest. The darkness is nearly complete, but your super-charged battery powers your flashlight. Time to see if raw energy can illuminate your victory…");
	}
}

function level6Story() {
	alert("With the " + enemyList[currentLevel-1].toLowerCase() + " slain, you press onwards. From the distance you notice faint flickering lights...could it be a settlement?");
	alert("You approach the lights, but suddenly a friendly zombie lumbers out of the forest clutching a rusty revolver.")
	alert("He tilts his head and gives you the most adorable puppy eyes… 'russian roulette' he mutters..\nWhat do you do?");

	decision6 = prompt(`
[1] Play
[2] Play but ask him to go first
[3] Rob his gun
[4] Offer a blood sacrifice to avoid playing the game
`)

let chamber = Math.floor(Math.random() * 6 + 1);

	if(decision6 === "1") {
	    if(chamber === 1) {
		alert("You point the revolver at your head and fire...");
	        revolverSfx.play();
	        revolverSfx.play();
	        revolverSfx.play();


		currentHealth = 0;
	    }
	
	    else{
		alert("You point the revolver at ur head and fire...");
	        alert("Nothing Happens");
		alert("The zombie smiles and offers you 1000 gold for playing!")
		alert("+ 1000 gold");	
		goldValue += 1000;
		gold.textContent = "Gold: " + goldValue;
	    }
        }
	else if(decision6 === "2") {
	    if(chamber === 1) {
		alert("Zombie points the revolver at his head and fires...");
	        revolverSfx.play();
	        revolverSfx.play();
	        revolverSfx.play();
		setTimeout(function() {
		
		alert("The Zombie lies Dead");
		alert("Zombie Companion unlocked! The Zombie has joined your army! Dealing -3 HP/Sec");
		alert("+1 Zombie");
		knightQuantity += 1;
		armyTextDamage = armyDamage + 1;
		armyDps.textContent = "|Army DPS: " + armyTextDamage + "|";
		knightsDisplay.textContent = "Army Size: " + "⚔️" + " x" + knightQuantity;

		updatePerks();
		knightAttack();
		knightAttack();
		knightAttack();


		}, 2000);
	    }

	    else{
		alert("Zombie points the revolver at his head and fires...");
	        alert("Nothing happens");
		alert("Your turn...");
		
		let chamber2 = Math.floor(Math.random() * 6 + 1);
	        if(chamber2 === 1) {
		    alert("You point the revolver at your head and fire...");
	            revolverSfx.play();
	            revolverSfx.play();
	            revolverSfx.play();
		    currentHealth = 0;
		}

		else{
		    alert("You point the revolver at your head and fire...");
		    alert("Nothing Happens...you both survive...this time");
		    alert("You have unlocked adrenaline instincts! Your max health has been increased by 75 HP!");
		    maxHealth += 75;
		    updateHealthValues();
		}
	    
	
	    }
	}
	
	else if(decision6 === "3") {
	    alert("You attempt to grab his gun however the zombie has super fast reflexes");
	    alert("SOEIDDXI WUAAAAR XDIEEEAAAAAA")
	    revolverSfx.play();
	    setTimeout(function() {	
	        alert("You are dead");
		alert("Next time think twice before deciding to take a loaded gun from a random cannibal");
		location.reload();

	    }, 4000);
	    
	}

	else if(decision6 === "4") {
	    alert("You draw blood from your wrist and feed it to the zombie..he drops the revolver and heads back into the forest..");
	    alert("You suffer an infection! Your Max Health has been decreased by 30 pts!");
	    maxHealth -= 30;
	    currentHealth -= 30;
	    updateHealthValues();
	}








}


currentLevel = 1;

timelines = [level2Story, level3Story, level4Story, level5Story, level6Story, 

level2Story, level3Story, level4Story, level5Story, level6Story,
level2Story, level3Story, level4Story, level5Story, level6Story,
level2Story, level3Story, level4Story, level5Story, level6Story,
level2Story, level3Story, level4Story, level5Story, level6Story,
level2Story, level3Story, level4Story, level5Story, level6Story,
level2Story, level3Story, level4Story, level5Story, level6Story,
level2Story, level3Story, level4Story, level5Story, level6Story,
level2Story, level3Story, level4Story, level5Story, level6Story,
level2Story, level3Story, level4Story, level5Story, level6Story,
level2Story, level3Story, level4Story, level5Story, level6Story,
 ]

currentLevel = 1;

// Level UP button//															//LEVEL UP BUTTON//
levelUpButton.addEventListener("click", function() {
    // Check if player has enough XP
    if (currentXP >= requiredXP) {
	updateHealthValues();
	displayEnemy.textContent = enemyEmojis[currentLevel];



	
	timelines[currentLevel-1]();
	
	active = 1;
        levelUpButton.style.display = "none";
        levelUpSfx.play();

	enemyMaxHealth += (currentLevel * currentLevel);
	enemyDamage += (currentLevel);
	baseEnemyDamage += (currentLevel);
	maxHealth += 10;
	voltage = maxVoltage;
	currentHealth = maxHealth;

	updateHealthValues();
	updateVoltageValues();
	maxDamageLabel.textContent = "|Enemy DPS: " + enemyDamage + "|";
	
	enemyAttack();
	enemyCurrentHealth = enemyMaxHealth;
	updateEnemyHealthValues();

        currentXP = 0;
        currentLevel += 1;
        maxDamage += 3;
	perks += currentLevel ;
	perksEarnt += currentLevel;
	perk.textContent = "|Skill Points: " + perks + "|";
        level.textContent = "|Level: " + currentLevel + "|";

	updateXPValues();

	requiredXP += 250;
	requiredXPLabel.textContent = "|Required XP: " + requiredXP + "|";

        previousEnemyDamage = enemyDamage

        enemyDamage = 0;
	
	enemyHealthBar.style.background = "linear-gradient(to right, #a0e9ff, #70d6ff, #ccefff, #ffffff)";

        setTimeout(function() {
            enemyDamage = previousEnemyDamage;
	    enemyHealthBar.style.background = "linear-gradient(to top, darkred, orange)";

	  
        
        
        }, 10000)

        displayLabel.style.opacity = 1;
        displayLabel.textContent = "Level Up!";
        displayLabel.style.background = "linear-gradient(to bottom, yellow, orange)";

        // Hide the display label after 3 seconds
        setTimeout(function() {
            displayLabel.style.opacity = 0;
        }, 3000);
    }
});



criticalSfx.volume = 0.3;


//LOSES HEALTH  BUT GAINS XP WHEN U PRESS ATTACK//											//ATTACK BUTTON//
displayEnemy.addEventListener("click", function() {

	executionRoll();
        timesAttacked += 1;

	criticalWheel = Math.floor(Math.random() * 100 + 1);

	if(criticalWheel <= criticalChanceFactor) {
	    criticalSfx.currentTime = 0;
	    criticalSfx.play();

	    
	    enemyHealthBar.style.background = "linear-gradient(to right, orange, silver, white)";
	    setTimeout(function() {
	        enemyHealthBar.style.background = "linear-gradient(to top, darkred, orange)";
	    },200)
	    criticalHit = criticalDamageFactor;

	    displayLabel.textContent = "Critical Hit!";
	    displayLabel.style.background = "linear-gradient(to right, orange, silver, white)";
	    displayLabel.style.opacity = 1;
	
	    setTimeout(function() {
	        displayLabel.style.opacity = 0;

	    },2000);
    	}

	else{
    	    criticalHit = 1;
	}


    currentXP += concentrationFactor * active;
    xpEarnt += concentrationFactor * active;

    if(currentXP <= requiredXP) updateXPValues();

    if(currentXP > requiredXP) {
        currentXP = requiredXP;
	updateXPValues();
 
    }


    if(enemyCurrentHealth - playerDamage * criticalHit > 0) {
        enemyCurrentHealth -= playerDamage * criticalHit;
	updateEnemyHealthValues();
    
    }




    else{
        if(currentHealth >= maxHealth) currentHealth = maxHealth;
	enemyDead();
    }

        if(currentXP <= requiredXP) {
            active = 1;
	    updateXPValues();
	    levelUpButton.style.display = "none";
        
        }
	

        if(currentXP + randomXP * currentLevel > requiredXP) {
            currentXP = requiredXP;
	    updateXPValues;
	    active = 0;
	    levelUpButton.style.display = "block";

        }


    



    



    

     








});
//ATTACK BUTTON//														       	//ATTACK BUTTON//
attack.addEventListener("click", function() {
	
	executionRoll();
    	timesAttacked += 1;

	criticalWheel = Math.floor(Math.random() * 100 + 1);

	if(criticalWheel <= criticalChanceFactor) {
	    criticalSfx.currentTime = 0;
	    criticalSfx.play();
	    criticalHit = criticalDamageFactor;
	    enemyHealthBar.style.background = "linear-gradient(to right, orange, silver, white)";
	    setTimeout(function() {
	        enemyHealthBar.style.background = "linear-gradient(to top, darkred, orange)";
	    },200)

	    displayLabel.textContent = "Critical Hit!";
	    displayLabel.style.background = "linear-gradient(to right, orange, silver, white)";
	    displayLabel.style.opacity = 1;
	
	    setTimeout(function() {
	        displayLabel.style.opacity = 0;

	    },2000);
    	}

	else{
    	    criticalHit = 1;
	}


    currentXP += concentrationFactor * active;
    xpEarnt += concentrationFactor * active;

    if(currentXP <= requiredXP) updateXPValues();

    if(currentXP > requiredXP) {
        currentXP = requiredXP;
	updateXPValues();
 
    }


    if(enemyCurrentHealth - playerDamage * criticalHit > 0) {
        enemyCurrentHealth -= playerDamage * criticalHit;
	updateEnemyHealthValues();
    
    }




    else{
        if(currentHealth >= maxHealth) currentHealth = maxHealth;
	enemyDead();
    }

        if(currentXP <= requiredXP) {
            active = 1;
	    updateXPValues();
	    levelUpButton.style.display = "none";
        
        }
	

        if(currentXP + randomXP * currentLevel > requiredXP) {
            currentXP = requiredXP;
	    updateXPValues;
	    active = 0;
	    levelUpButton.style.display = "inline";

        }


    



    



    

     








});





// HEALS UPON CLICK//															     //HEAL BUTTON//
healButton.addEventListener("click", function() {


    
    if(heal + currentHealth <= maxHealth && voltage >= 25) {
        currentHealth += heal;

	healSfx.currentTime = 0;
	healSfx.play();

	displayLabel.textContent = "+ " + heal + " HP";
	displayLabel.style.color = "white";
	displayLabel.style.background = "linear-gradient(to left, red, red, red, black)";
	displayLabel.style.opacity = 1;


	setTimeout(function() {
 	    displayLabel.style.opacity = 0;
	    

        },2000);
	

        voltage -= 25;
        voltagePercentage = (voltage/maxVoltage) * 100;
        voltageBar.style.width = voltagePercentage + "%";
        voltageText.textContent = "Voltage: " + voltage + "/" + maxVoltage;

    	HPPercentage = (currentHealth/maxHealth) * 100;
    	hp.textContent = playerName.toUpperCase() + " HP: " + currentHealth + "/" + maxHealth;
    	healthBar.style.width = HPPercentage + "%";

    }

    else if(currentHealth >= maxHealth) {
	return;
    }

    else if(heal + currentHealth >= maxHealth && voltage >= 25) {
        currentHealth = maxHealth


	healSfx.currentTime = 0;
	healSfx.play();

	displayLabel.textContent = "+ " + heal + " HP";
	displayLabel.style.color = "white";
	displayLabel.style.background = "linear-gradient(to left, red, red, red, black)";
	displayLabel.style.opacity = 1;

	setTimeout(function() {
 	    displayLabel.style.opacity = 0;

        },2000);



	
        voltage -= 25;
        voltagePercentage = (voltage/maxVoltage) * 100;
        voltageBar.style.width = voltagePercentage + "%";
        voltageText.textContent = "Voltage: " + voltage + "/" + maxVoltage;

        
        healthBar.style.width = currentHealth + "%";
        hp.textContent = playerName.toUpperCase() + " HP: " + currentHealth + "/" + maxHealth;
    }





});

let upgradesOpen = false;

//OPENS UPGRADE MENU//														       //OPEN UPGRADE MENU//
upgrades.addEventListener("click",function() {
    if(!upgradesOpen) {
        upgradesGUI.style.display = "block";
        upgradesOpen = true;
    }
    
    else{
        upgradesGUI.style.display = "none";
        upgradesOpen = false;
          
    }
    

});

let totalHealth = 0;

//MAX HEALTH UPGRADE//														      //MAX HEALTH UPGRADE//
maxHealthUpgrade.addEventListener("click", function() {
    if(perks >= 1) {
        perks -= 1;
    maxHealth += 10;
    totalHealth += 10;

    purchaseSkill.currentTime = 0;
    purchaseSkill.play();

    let hpWidth = parseInt(healthContainer.style.width);
    hpWidth += 1;
    healthContainer.style.width = hpWidth + "px";
    updateHealthValues();
    

    HPPercentage = (currentHealth/maxHealth) * 100;
    hp.textContent = "HP: " + currentHealth + "/" + maxHealth;
    healthBar.style.width = HPPercentage + "%";

    perk.textContent = "Perks: " + perks;
    maxHealthMagnitude.textContent = "+ " + totalHealth + " HP";

   
    }

});

let totalHeal = 0;

//HEAL UPGRADE//															//HEAL UPGRADE//
healUpgrade.addEventListener("click", function() {
    if(perks >= 1) {
        perks -= 1;
    heal += 5;
    totalHeal += 5;

    purchaseSkill.currentTime = 0;
    purchaseSkill.play();


    healPower.textContent = "|Heal Power: " + heal + " HP " + "|";
    perk.textContent = "Perks: " + perks;
    healUpgradeMagnitude.textContent = "+ " + totalHeal + " HP";

   
    }

});



//INCREASES VOLTAGE PER SEC
//CHECK IF VOLTAGE HASNT REACHED ITS MAX VOLTAGE
//IF IT HASNT BEEN FILLED UP YET THEN WE ADD ONE TO THE VOLTAGE PER SECOND.
//ALONG WITH THAT WE UPDATE A BUNCH OF VALUES SO THE VISUALS ARE CONSISTENT WITH THE MATH.
// 1000 ON THE END INDICATES THIS FUNCTION OCCURS ONCE PER SECOND


//VOLTAGE LOOP//														            //VOLTAGE LOOP//														
function runVoltageLoop() {

    clearInterval(voltageInterval);
    voltageInterval = setInterval(function() {

        if(voltage + voltageLevel < maxVoltage) {
            voltage += voltageLevel;
            voltagePercentage = (voltage/maxVoltage) * 100;
            voltageBar.style.width = voltagePercentage + "%";
            voltageText.textContent = "Voltage: " + voltage + "/" + maxVoltage;
        }
	
	else{
           voltage = maxVoltage;
	   updateVoltageValues();
        }

    }, voltageSpeed);

}

runVoltageLoop();

let xpPerksRequired = 2;
const xpPerksCost = document.querySelector("#xp-perks-cost")
const xpPerksRequiredText = document.querySelector("#xp-perks-required");

//AUTO XP UPGRADE//															 //AUTO XP UPGRADE//
autoXP.addEventListener("click", function() {
    if(perks >= xpPerksRequired) {
        perks -= xpPerksRequired;

    	purchaseSkill.currentTime = 0;
    	purchaseSkill.play();
	
	xpPerksRequired += 1 * currentLevel;
    autoMineXP();
    xpIntervalFactor += 1;
    autoXpMagnitude.textContent = "+ " + xpIntervalFactor + " XP/s";
    xpPerksRequiredText.textContent = xpPerksRequired;
    xpPerksCost.textContent = xpPerksRequired;

	

    perk.textContent = "Perks: " + perks;
    updateXPValues();


   
    }

});



// AUTO HARVESTS XP POINTS//														    //AUTO MINE XP//
function autoMineXP() {
    clearInterval(xpInterval)
        xpInterval = setInterval(function() {
	    if(currentXP + xpIntervalFactor >= requiredXP) {
                currentXP = requiredXP;
		updateXPValues();
            }
	     
	 
	    else{
                currentXP += xpIntervalFactor;
	        updateXPValues();
            
            }




        }, 1000);

    

};

//AUTO HP UPGRADE//															 //AUTO HP UPGRADE//
autoHP.addEventListener("click", function() {
    if(perks >= 5 && !purchasedHP) {
        purchasedXP = true;
        perks -= 5;

    	purchaseSkill.currentTime = 0;
    	purchaseSkill.play();

    autoMineHP();
    autoHP.textContent = "OUT OF STOCK";

	

    perk.textContent = "Perks: " + perks;

   
    }

});

let hpRegen = 0;
let regenActive = 1;

// AUTO REGENERATES HP POINTS//														   //AUTO REGEN HP//
function autoMineHP() {
    hpRegen += 1
    regenerateHpMagnitude.textContent = "+ " + hpRegen + "/s";
    

    
    if(!hpInterval && currentHealth + hpRegen <= maxHealth){
        hpInterval = setInterval(function() {
	    
            if(currentHealth + hpRegen >= maxHealth) {
                regenActive = 0;
		currentHealth = maxHealth;
            }

	    else regenActive = 1;
             

            currentHealth += 1 * regenActive;
	   

    	    HPPercentage = (currentHealth/maxHealth) * 100;
    	    hp.textContent = playerName.toUpperCase() + " HP: " + currentHealth + "/" + maxHealth;
    	    healthBar.style.width = HPPercentage + "%";
	    

        }, 1000);



    }

};

let fromLeft = 500;


// VOLTAGE BOOST UPGRADE//														   //VOLTAGE BOOST//
voltageUpgrade.addEventListener("click", function() {
    if(perks >= 2){

	electricitySfx.currentTime = 0;
	electricitySfx.play();
	
        voltageLevel += 1;
        perks -= 2;
        runVoltageLoop();
	perk.textContent = "Perks: " + perks;
	voltageUpgradeMagnitude.textContent = "+ " + voltageLevel + " v/s";
	if(voltage >= maxVoltage) voltage = maxVoltage;
	updateVoltageValues();

	
            
    }

});

let usedRefill = 0;
let healthRestored;
let totalHealthRestored = 0;
let requiredRefillHealth = 3;

//REFILL HEALTH UPGRADE//													   //REFILL HEALTH UPGRADE//
refillHealthUpgrade.addEventListener("click", function() {

    if(perks >= requiredRefillHealth && currentHealth < maxHealth) {
        perks -= requiredRefillHealth;
	requiredRefillHealth *=2;
	requiredRefillPerks.textContent = requiredRefillHealth;

    	purchaseSkill.currentTime = 0;
    	purchaseSkill.play();
	
	healthRestored = maxHealth - currentHealth;
	totalHealthRestored += healthRestored;
	
        currentHealth = maxHealth;
        perk.textContent = "Perks: " + perks;
	updateHealthValues();
	usedRefill += 1;
	refillHealthMagnitude.textContent = totalHealthRestored + " HP";

    
    }

});



// ========================================================
// 🔊 ENDING / DEATH SOUNDS ARRAY
// ========================================================										  //DEATH FUNCTION//
let endingSounds = [zombieAttack, deadRobot, deadWalking, wolfHowling, dramaticEnding, creepyWoman, beheading, heartBeep];
let randomSfx;
                                                                                              


function enemyAttack() {
    clearInterval(enemyInterval);

    enemyInterval = setInterval(function() {
        if(currentHealth <= 0) {
	    randomSfx = Math.floor(Math.random() * endingSounds.length);
	    currentSound = endingSounds[randomSfx];
	    currentSound.play();
	    document.body.style.backgroundColor = "black";
	    document.body.style.zIndex = 100;
	
	    currentHealth = 0;
	    clearInterval(enemyInterval);
	 
	    setTimeout(function() {
                alert("You Have Died!");
alert(`
Game Stats:

Level Reached: ${currentLevel.toLocaleString()}
Enemies Slaughtered: ${enemiesKilled.toLocaleString()}
Blows Delivered: ${timesAttacked.toLocaleString()}
XP Earned: ${xpEarnt.toLocaleString()} XP
Perks Earned: ${perksEarnt.toLocaleString()}
Gold Earned: ${goldEarnt.toLocaleString()}

`);

                location.reload();
            }, 5000);

        }
 
        else{
	    guardianRoll();
            currentHealth -= enemyDamage * guardianFactor;
	    updateHealthValues();
        }


    },1000);


}

enemyAttack();

//ATTACK UPGRADE//														          //ATTACK UPGRADE//
upgradeDamage.addEventListener("click", function() {
    if(perks >= 1) {

    	purchaseSkill.currentTime = 0;
    	purchaseSkill.play();

        perks -= 1;
	
        playerDamage += 1 * ghostDamageFactor;
	if(presentPlayerDamage)presentPlayerDamage += 1;
	updatePerks();
	playerDamageLabel.textContent = "|Player Damage: " + playerDamage + "|";
	upgradeDamageMagnitude.textContent = "- " + playerDamage + " HP";
        
   
    }

});


//VAMPIRISM UPGRADE//														       //VAMPIRISM UPGRADE//
stealHP.addEventListener("click", function() {
    if(perks >= 1) {
        perks-= 1;

    	purchaseSkill.currentTime = 0;
    	purchaseSkill.play();

        perk.textContent = "Perks: " + perks;
        healthFactor += 2;
	stealHpMagnitude.textContent = "Absorbs: " + healthFactor + " HP";
    }

});


//RECHARGE VOLTAGE														        //RECHARGE VOLTAGE//
charge.addEventListener("click", function() {
    voltage += shockwaveFactor;
    enemyCurrentHealth += 1;
    currentXP -= 1;
    
    updateEnemyHealthValues();
    updateXPValues();
    
    if(voltage >= maxVoltage) voltage = maxVoltage;
    updateVoltageValues();

    if(enemyCurrentHealth >= enemyMaxHealth) enemyCurrentHealth = enemyMaxHealth;
    updateEnemyHealthValues();
    if(currentXP <= 0) currentXP = 0;
    updateXPValues();


});

//FREEZE BUTTON																   //FREEZE BUTTON//
freeze.addEventListener("click", function() {
    if(voltage >= maxVoltage/2) {
	voltage -= Math.floor(maxVoltage/2);
	iceSfx.play();
        previousEnemyDamage = enemyDamage

        enemyDamage = 0;
	
	enemyHealthBar.style.background = "linear-gradient(to right, #a0e9ff, #70d6ff, #ccefff, #ffffff)";

        setTimeout(function() {
            enemyDamage = previousEnemyDamage;
	    enemyHealthBar.style.background = "linear-gradient(to top, darkred, orange)";

	  
        
        
        }, 10000)
    }

});



//MR BOXXY WOXXY															  //MR BOXXY WOXXY//

document.addEventListener("keydown", function(event) {
    key = event.key;

    if(key === "ArrowLeft") {fromLeft -= 5}
    if(key === "ArrowRight") {fromLeft += 5}

    mrBox.style.left = fromLeft + "px";

});


//DEV COMMANDS																    //DEV COMMANDS//

devConsole.addEventListener("keydown", function(event) {

    if(event.key === "Enter") {
        if(devConsole.value === "hack perks") {
            perks += 1000000;
            updatePerks();
        }

        if(devConsole.value === "hack health") {
            maxHealth = Infinity;
        }

        if(devConsole.value === "hack level") {
            currentXP = requiredXP;
            updateXPValues();
        }

        if(devConsole.value === "death") {
	    currentHealth = -Infinity;
            updateHealthValues();
        }
    }
    

});

let knightsPerksRequired = 5;
let knightInterval;
let armyDamage = 0;

let knightDamage = 0;

// KNIGHT FUNCTION															//KNIGHT FUNCTION//
function knightAttack() {
    armyDamage += knightDamage;
    clearInterval(knightInterval);
    knightInterval = setInterval(function() {
	enemyCurrentHealth -= knightDamage;
	updateEnemyHealthValues();


	if(enemyCurrentHealth <= 0) {
	    enemyCurrentHealth = enemyMaxHealth;
	    updateEnemyHealthValues();
	    enemyDead();
	
        }
	

    }, 1000);


}

let difference = 0;
// RECRUIT KNIGHT															//RECRUIT KNIGHT//
let knightIncrementation = 1;
let index = 0;
recruitKnight.addEventListener("click", function() {
    if(perks >= knightsPerksRequired ) {	
        perks -= knightsPerksRequired;
	knightDamage += knightIncrementation;
	knightIncrementation += 1;

    	purchaseSkill.currentTime = 0;
    	purchaseSkill.play();
	
	
	previousKnightDamage = knightDamage
	

	soldier.textContent = "Adds 1 " + soldierName[index] + " to your army dealing " + "+ " + knightIncrementation +  " damage per second";
	recruitKnight.textContent = soldierName[index];
	index += 1;
	




        knightsPerksRequired += 3;
	knightQuantity += 1;
	armyTextDamage = knightDamage;
	armyDps.textContent = "|Army DPS: " + knightDamage + "|";
	knightsDisplay.textContent = "Army Size: " + "⚔️" + " x" + knightQuantity;

	updatePerks();
	knightAttack();
	knightAttack();


	perksRequiredLabel.textContent = knightsPerksRequired;
	knightsMagnitude.textContent = knightQuantity + " Companions"; 
        
	
	
    }



});

//BUY PERK UPGRADE		                                                                                                        //BUY PERK UPGRADE//														
buyPerk.addEventListener("click", function() {
    if(goldValue >= perkCost) {

    	purchaseSkill.currentTime = 0;
    	purchaseSkill.play();

        goldValue -= perkCost;
        perks += 1;
	perkCost += Math.floor((requiredXP/2) + 100);
        
        gold.textContent = "Gold: " + goldValue;
	buyPerk.textContent = "Buy Skill Point: " + perkCost + " Gold";
        updatePerks();
    }
    

});


drCost = 10;

//DAMAGE RESISTANCE UPGRADE												       //DAMAGE RESISTANCE UPGRADE//
drButton.addEventListener("click", function() {
    if(perks >= drCost) {
        purchaseSkill.currentTime = 0;
        purchaseSkill.play();

        perks -= drCost;
	drCost += 15;
	damageResistance += 1;
	
	drDecimal = 1 - (damageResistance/100);
	




	newEnemyDamage = baseEnemyDamage * drDecimal;
	newEnemyDamage = Math.floor(newEnemyDamage);
	enemyDamage = newEnemyDamage;
	
	drLabel.textContent = "DR: " + damageResistance + " %";
	maxDamageLabel.textContent = "|" + "Enemy DPS: " + newEnemyDamage;


	drPerks.textContent = drCost	
	drMagnitude.textContent = damageResistance + " %";
	
	updatePerks();
	
    }


});

const concentrationMagnitude = document.querySelector("#concentration-magnitude")
const concentrationPerksLabel = document.querySelector("#concentration-perks");
let concentrationPerks = 5;

//CONCENTRATION UPGRADE														   //CONCENTRATION UPGRADE//
concentrationButton.addEventListener("click", function() {
    if(perks >= concentrationPerks) {
	purchaseSkill.currentTime = 0;
	purchaseSkill.play();

	
        perks -= concentrationPerks;
	concentrationFactor += 1;
	concentrationPerksLabel.textContent = concentrationPerks;
	concentrationMagnitude.textContent = "+" + concentrationFactor + " XP/Hit";


	updatePerks();
    }

});

const ghostMagnitude = document.querySelector("#ghost-magnitude");

//GHOST UPGRADE																    GHOST UPGRADE//
ghostButton.addEventListener("click", function() {
    if(!ghostPurchased && playerDamage >= 4) {
 
    ghostWhisper.play();
    alert("💀 You become a ghost, your body gone forever. Your strikes are weaker, but blades and attacks barely touch you.");
    
    ghostPurchased = true;
    maxHealth *= 2;
    currentHealth = maxHealth;
    playerDamage /= 2;
    ghostDamageFactor = 0.5;
    ghostMagnitude.textContent = "Ghost Activated";
    

  
    updateHealthValues();
    playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage + "|";

    

    }

});




//MAX VOLTAGE UPGRADE														       MAX VOLTAGE UPGRADE//
maxVoltageUpgrade.addEventListener("click", function() {
    if(perks >= maxVoltagePerksCost) {
	
	electricitySfx.currentTime = 0;
	electricitySfx.play();
	
	
        perks-= maxVoltagePerksCost;
	maxVoltagePerksCost += 5;
	addedVoltage += 5;
	maxVoltageCost.textContent = maxVoltagePerksCost;
	maxVoltage += 5;
  	maxVoltageMagnitude.textContent = addedVoltage + " V";
	updateVoltageValues();
	updatePerks();
    
    }

});

const cloud1 = document.querySelector("#cloud1");
const cloud1Style = window.getComputedStyle(cloud1);

let left = parseInt(cloud1Style.left);
let windowWidth = window.innerWidth;



//MOVING CLOUD 														                      MOVING CLOUD//
function moveCloud1() {
    setInterval(function() {
	left += 2;

	if(left >= windowWidth) {
	    cloud1.style.transition = "none";
	    left = -120;
	    cloud1.style.left = left + "px";
	

	    cloud1.offsetWidth;	
	    cloud1.style.transition = "all 2s ease";

	}

	else{
	    cloud1.style.left = left + "px";

	}

    },1000);
}

moveCloud1();


//PAUSE BUTTON																      PAUSE BUTTON//

const pause = document.querySelector("#pause");
paused = false;


pause.addEventListener("click", function() {
    if(!paused) {
	let query = prompt

(`Game Paused!
Would you like to see the help menu whilst you are here?
[1] Yes please!
[2] Um...nah I'm good!
`)


        if(query === "1") {
alert(`
🎮 Welcome to Split-Seconds! 🎮
1️⃣ Attack Enemies ⚔️
- Click 🗡️ Attack to damage enemies.
- Your damage depends on your Player Damage stats.
- Watch Enemy HP to track damage.

2️⃣ Heal Yourself 💖
- Click ❤️‍🩹 Heal to restore HP.
- Check Heal Cost (voltage) before using.
- Upgrades like 💉Second Chance💉 and 💚Regeneration💚 make healing stronger.

3️⃣ Skills & Upgrades ✨
- Earn Skill Points when you level up.
- Spend them on 🛡️Defence Upgrades🛡️, 💥Damage Upgrades💥, ⚡Voltage Upgrades⚡, etc.
- Some upgrades enhance stats, some unlock fun abilities (Guardian Angel, Vampirism, etc.).

4️⃣ Army / Knights 🪖
- Recruit soldiers via 🪖 Army Upgrades 🪖.
- Each soldier adds DPS (damage per second).
- Cycling soldier types gives stronger units.
- Track Army Size and Army DPS for power.

5️⃣ Voltage System ⚡
- Voltage builds over time. You can improve your voltage stats via Voltage Upgrades
- Upgrades like ⚡Fluxify⚡ increase regeneration or max voltage.
- Spend voltage for abilities or boosts.

6️⃣ Pause Button ⏸️ 
- Click Pause to enter god mode: ∞ HP, ∞ Voltage.
- This gives you time to take a peek at upgrades. No rush.
- You will notice this gives you crazy high health. This is only temporary. It saves you from dying!
- You can also use the pause button to come back to this menu.
- Whilst frozen in God-Mode, you cannot do anything useful.

7️⃣ Dev Console 💻
- This console was intended for developer use. Ignore it! You are not hacking my game..good luck trying though!

💡 Tips for Beginners
- Focus on healing upgrades and voltage upgrades to maximise your protection against enemy attacks!
- You don't have to level up as soon as the prompt shows...spend time earning gold if the level is too challenging!
- Pick your classes wisely, different classes have different starting attributes!
- You get to pick a lot of choices in this game. Take your time to choose the one that will help you!




`);
	}
	


	paused = true;
	presentHealth = currentHealth;
	presentVoltage = voltage;
	presentKnightDamage = knightDamage;
	presentPlayerDamage = playerDamage;
	presentRequiredXP = requiredXP;
	presentCurrentXP = currentXP;


	
	currentHealth = Infinity;
	voltage = -Infinity;
	knightDamage = -Infinity;
	playerDamage = 0;
	requiredXP = Infinity;
	currentXP = -Infinity;

	updateHealthValues();
	updateVoltageValues();
	updateXPValues();
	playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage + "|";

    }
    
    else{
	alert("Game Resumed!");
        paused = false;
	currentHealth = presentHealth;
	voltage = presentVoltage;
	knightDamage = presentKnightDamage;
	playerDamage = presentPlayerDamage;
	requiredXP = presentRequiredXP;
	currentXP = presentCurrentXP;

	updateHealthValues();
	updateVoltageValues();
	updateXPValues();

	playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage + "|";

    }


});


const refresh = document.querySelector("#refresh");

refresh.addEventListener("click", function() {
    location.reload();
});





function guardianRoll() {
    let guardianNumber = Math.floor(Math.random() * 1000 + 1);
    if(guardianNumber <= guardianChance) {
        guardianFactor = 0;
    }

    else{
        guardianFactor = 1;
    }
}

guardianAngelUpgrade.addEventListener("click", function() {
    if(perks >= guardianRequiredPerks) {
        perks-= guardianRequiredPerks;
	guardianRequiredPerks += 10;
	guardianChance += 5;
	guardianAngelPerksCost.textContent = guardianRequiredPerks;
	guardianAngelMagnitude.textContent = guardianChance/10 + "%";

	updatePerks();
    }
});

let activatedFireball = false;

let fireballDps = 1;

fireball.addEventListener("click", function() {
    if(voltage >= 30 && !activatedFireball) {

	activatedFireball = true;
	fireballSfx.currentTime = 0;
	fireballSfx.play();

	voltage -= 30;
	flameAnimation.style.display = "inline";
         enemyCurrentHealth -= 5;

	if(enemyCurrentHealth >= 0) {
  	    enemyDead();
        }

	updateEnemyHealthValues();
         updateVoltageValues();

	fireActive = setInterval(function() {
	    enemyCurrentHealth -= fireballDps;
	    updateEnemyHealthValues();
	    if(enemyCurrentHealth <= 0) enemyDead();
	},1000);

	setTimeout(function() {
	    clearInterval(fireActive);   
	    activatedFireball = false;
	    flameAnimation.style.display = "none";
	}, 10000);

    }
});






let fireballBought = false;
fireballUpgrade.addEventListener("click",function() {
    if(perks >= 3 && !fireballBought) {
 
        fireballBought = true;
        purchaseSkill.currentTime = 0;
        purchaseSkill.play();
        perks -= 3;
        fireball.style.display = "inline";

        fireballMagnitude.textContent = "Fireball Unlocked!";
    }

});

let superNovaRequiredPerks = 3
superNova.addEventListener("click", function() {
    if(perks >= superNovaRequiredPerks) {
        perks-= superNovaRequiredPerks;
        fireballDps += 1;
        superNovaRequiredPerks += 5;
        superNovaPerksRequired.textContent = superNovaRequiredPerks;
        superNovaMagnitude.textContent = fireballDps + " DPS";      
    }

});

let currentDamage;
let adrenalineActivated = false;

adrenaline.addEventListener("click", function() {
    if(voltage >= 50 && !adrenalineActivated) {
	adrenalineActivated = true;

	displayLabel.textContent = "!ADRENALINE ACTIVATED!"
	displayLabel.style.opacity = 1;
	displayLabel.style.background = "linear-gradient(to top, red, black)";
	displayLabel.style.color = "white";


	voltage -= 50;
	rage.play();
        currentDamage = playerDamage;
	playerDamage *= adrenalineFactor;
	playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage + "|";
	setTimeout(function() {
	    playerDamage = currentDamage;
	    playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage + "|";
	    adrenalineActivated = false;
	    displayLabel.style.opacity = 0;
	    
	}, 10000);    
    }
});


adrenalineUpgrade.addEventListener("click", function() {
    if(perks >= 5) {
        perks -= 5;
	purchaseSkill.play();
	adrenaline.style.display = "inline";
	adrenalineMagnitude.textContent = "Adrenaline Unlocked!";
	updatePerks();

    }
});

freezeUpgrade.addEventListener("click", function() {
    if(perks >= 5) {
	purchaseSkill.currentTime = 0;
        purchaseSkill.play();
	perks -= 5;
	freeze.style.display = "inline";
    }
});

let noMercyRequiredPerks = 5;

noMercyUpgrade.addEventListener("click", function() {
    if(perks >= noMercyRequiredPerks) {
        perks-= noMercyRequiredPerks;

	adrenalineFactor += 0.5;
	
	noMercyRequiredPerks += 5;
	noMercyPerksRequired.textContent = noMercyRequiredPerks;
	noMercyMagnitude.textContent = "x" + adrenalineFactor;

	updatePerks();
    }
})

let luckyFingersRequiredPerks = 1;

luckyFingersUpgrade.addEventListener("click", function() {
    if(perks >= luckyFingersRequiredPerks) {
	perks-= luckyFingersRequiredPerks;

	purchaseSkill.currentTime = 0;
	purchaseSkill.play();

	luckyFingersRequiredPerks += 3;
	
	goldMultiplier += 0.25;

	luckyFingersPerksRequired.textContent = luckyFingersRequiredPerks;
	luckyFingersMagnitude.textContent = "x" + goldMultiplier;

	updatePerks();
	
    }
});

let shockwaveFactor = 1;
let shockwaveRequiredPerks = 4;

shockwaveUpgrade.addEventListener("click", function() {
    if(perks >= shockwaveRequiredPerks) {
	electricitySfx.currentTime = 0;
	electricitySfx.play();

	perks -= shockwaveRequiredPerks;
	shockwaveRequiredPerks *= 2;
	shockwaveFactor += 1;

	shockwavePerksRequired.textContent = shockwaveRequiredPerks;
	shockwaveMagnitude.textContent = "+" + shockwaveFactor + " V";
    }

});








executionRequiredPerks = 2;

executionUpgrade.addEventListener("click", function() {
    if(perks >= executionRequiredPerks) {
        perks -= executionRequiredPerks;

	purchaseSkill.currentTime = 0;
	purchaseSkill.play();

	executionRequiredPerks += 6;
	executionFactor += 1;
	
	executionPerksRequired.textContent = executionRequiredPerks;
	executionMagnitude.textContent = executionFactor/4 + " %";
	
	
    }
});

