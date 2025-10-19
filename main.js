// ========================================================
// 🎮 GAME STATE VARIABLES
// ========================================================
let goldMultiplier = 1;
let executionFactor = 0;

let storyLevel = 1;
let mosquitoFactor = 0;
let enemyDamageSum;
let enemyDamageNegation;

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
let reflectedDamage = 0;

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

let fireballBought = false;
let fireballDamage = 5;

let soulPactFactor = 0;

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
let antibodiesFactor = 10;
let boughtSellSoul = false;
storyLevel = currentLevel;

let currentEnemyDamage;
let currentDamageResistance;


let luckyDipPerkCost = 5;
let luckyDipPressed = false;
// ------------------- PURCHASED UPGRADES --------------
let purchasedXP = false;
let purchasedHP = false;

// ------------------- PERCENTAGES ----------------------
let XPPercentage;
let HPPercentage;
let EnemyHPPercentage;


//GUARDIAN ANGEL UPGRADE
let guardianRequiredPerks = 2;
let guardianChance = 0;
let guardianFactor = 1;

let presentPlayerDamage;

let mageInterval;
let mageFuryActivated = false;

let nearDeathExperienceSpecialUsed = false;
let shieldWallSpecialUsed = false;
let markedForDeathSpecialUsed = false;
let mageFurySpecialUsed = false;

let bloodthirstyRequiredPerks = 8;
let bloodthirstyFactor = 0;

let criticalDamageRequiredPerks = 5;
let criticalDamageFactor = 2;

let criticalChanceRequiredPerks = 5;
let criticalChanceFactor = 1;
let criticalHit = 2;

let playerName = "";
let upgradesOpen = false;
let totalHealth = 0;

let eyeForEyeRequiredPerks = 1;
let eyeForEyeFactor = 0
let eyeForEyePercentage = 0;

let mosquitoRequiredPerks = 15;
let nearDeathActive  = false;
let markedForDeathActive = false;
let shieldWallActivated = false;
let luckyDipBought = false;

let realEstateRequiredPerks = 1;
let realEstateInterval;
let incomeFactor = 0;

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

const devilLaugh = document.querySelector("#devil-laugh");
const armourPowerUp = document.querySelector("#armour-powerup");
const vikingPower = document.querySelector("#viking-power")
const assassinPower = document.querySelector("#assassin-power");
const magePower = document.querySelector("#mage-power");
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

const vampirismPerksRequired = document.querySelector("#vampire-perks-required");

const antibodiesUpgrade = document.querySelector("#antibodies-upgrade");
const antibodiesMagnitude = document.querySelector("#antibodies-magnitude");
const antibodiesPerksRequired = document.querySelector("#antibodies-perk-cost");

const hpRegenPerksRequired = document.querySelector("#hp-regen-perks-cost");

const sellSoulUpgrade = document.querySelector("#sell-soul");
const sellSoulMagnitude = document.querySelector("#sell-soul-magnitude");

const luckyDipButton = document.querySelector("#lucky-dip");
const luckyDipLabel = document.querySelector("#lucky-dip-label");
const luckyDipSpellUpgrade = document.querySelector("#lucky-dip-spell-upgrade");
const luckyDipMagnitude = document.querySelector("#lucky-dip-magnitude");

const mageFury = document.querySelector("#mage-fury");
const shieldWall = document.querySelector("#shield-wall");

const markedForDeath = document.querySelector("#marked-for-death");
const critLabel = document.querySelector("#crit-label");

const nearDeathExperience = document.querySelector("#near-death-experience");

const mosquitoUpgrade = document.querySelector("#mosquito");
const mosquitoPerksRequired = document.querySelector("#mosquito-perks-required");
const mosquitoMagnitude = document.querySelector("#mosquito-magnitude");

const eyeForEyeUpgrade = document.querySelector("#eye-for-eye-upgrade");
const eyeForEyePerksRequired = document.querySelector("#eye-for-eye-perks-cost");
const eyeForEyeMagnitude = document.querySelector("#eye-for-eye-magnitude");

const voltageRegenPerksRequired = document.querySelector("#voltage-regen-perks-required");

const bloodthirstyUpgrade = document.querySelector("#bloodthirsty-upgrade");
const bloodthirstyPerksRequired = document.querySelector("#bloodthirsty-perks-required");
const bloodthirstyMagnitude = document.querySelector("#bloodthirsty-magnitude");

const criticalDamageUpgrade = document.querySelector("#critical-damage-upgrade");
const criticalDamageMagnitude = document.querySelector("#critical-damage-magnitude");
const criticalDamagePerksCost = document.querySelector("#critical-damage-perks-cost");

const criticalHitUpgrade = document.querySelector("#critical-hit-upgrade");
const criticalHitMagnitude = document.querySelector("#critical-hit-magnitude");
const criticalHitPerksCost = document.querySelector("#critical-hit-perks-cost");

const realEstateUpgrade = document.querySelector("#real-estate-upgrade");
const realEstatePerksRequired = document.querySelector("#real-estate-perks-required");
const realEstateMagnitude = document.querySelector("#real-estate-magnitude");


swordKill.volume = 0.5;
criticalSfx.volume = 0.3;


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





// ========================================================
// 🎬INTRO🎬 #INTRO
// ========================================================

introDecision = prompt(`
Welcome to the Game! Would you like to skip the intro?
[1] ⚡ Skip the lame intro — let's get to the action!
[2] 🖊️ No way — I'm naming my legend!
[3] 🎲 Fate's call — roll the dice!
[4] 😏 A 'game'? Please… this is amateur hour.
`)

function level1Story() {
    alert("Your eyes awaken. You are lying in a bedroom within an abandoned mansion. Before you can do anything you hear the annoying squeak of rats tearing through the floorboard....theres a knife in the bedside table! Take it and slaughter those parasites!");
    level1decision = prompt
(`[1] 🥹 Aww… tiny fluffballs? Kinda cute, I guess.  
[2] 😱 NOPE! Rats! I’m outta here!  
[3] 🏃‍♂️ Can I just sprint away like a sane person?!  
[4] 🩸 Ohhh yes… time to make these little pests regret existing!`);

    if(level1decision === "1") {
	alert("Aww how cute. The little cutie blushed like strawberrys as you complimented his nose. Thanks for making him feel special wecials!");
	alert("The Rat appreciates your compliment and decides to go easy on you!");
	alert("Enemy MaxHealth decreased by 5pts!");
	enemyMaxHealth -= 5;
	enemyCurrentHealth -= 5;
	updateEnemyHealthValues();
    }

    else if(level1decision === "2") {
        alert("Don't be shy now. Mr rat is just hungry...you understand right? Here's a helmet to make you feel safer!");
	alert("Health Increased by +5!");
	currentHealth += 10;
	maxHealth += 10;
	updateHealthValues();
    }

    else if(level1decision === "3") {
        alert("You attempt to run away like a coward...but you get bit in the leg causing an infection to develop!");
	alert("Health decreased by 5 pts!")
	currentHealth -= 5;
	maxHealth -= 5;
	updateHealthValues();
    }

    else if(level1decision === "4") {
        alert("Now thats what we call a brave fighter...come on.. i wanna see those rats squished like pancakes!");
	alert("Max Voltage + 5");
	maxVoltage += 5;
	updateVoltageValues();
    }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function startIntro() {
    alert("The Light fades and shadows of the past envy you. One step into the unknown, and the age of humans fades. The dark ages rise again… and you are alone.");
    alert("You have no idea who you are...who are you...tell us..");
    playerName = prompt("Enter your forgotten name...");
    alert("Welcome " + playerName + "!");
    let playerClass = prompt
(`Choose a class to determine your fate:
1] Assassin 🥷
Quick and deadly, but fragile. One wrong move could spell disaster!
HP: 100
Voltage: 85
Damage: 9

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
	voltage = 85;
	maxVoltage = 85;
	playerDamage = 9;

	markedForDeath.style.display = "inline";
	
	updateHealthValues();
	updateVoltageValues();
	playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage;

alert(`🥷Assassin Stats🥷
Health: 100
Voltage: 85
Damage: 9 
Special Ability: 🥷Marked For Death🥷 - Critical Chance improved by 25% for 15 seconds!`);
	level1Story();

    }

    else if(playerClass === "2") {
        alert("Mage Selected"); 
	
	currentHealth = 75;
	maxHealth = 75;
	voltage = 200;
	maxVoltage = 200;
	playerDamage = 1;

	mageFury.style.display = "inline";
	
	updateHealthValues();
	updateVoltageValues();
	playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage;

alert(`🔮Mage Stats🔮 
Health: 75
Damage: 1
Voltage: 200
Special Ability: 🔮Sorceror's Fury🔮 - Rapidly regenerate Voltage for a short period of time.`);
	level1Story();
    }

    else if(playerClass === "3") {
	alert("Viking Selected");

	currentHealth = 500;
	maxHealth = 500;
	voltage = 40;
	maxVoltage = 40;
	playerDamage = 5;
	
	updateHealthValues();
	updateVoltageValues();
	playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage;

	nearDeathExperience.style.display = "inline";

alert(`🪓Viking Stats🪓 
Health: 500
Voltage: 40
Damage: 5 
Special Ability: 🪓Near Death Experience🪓 - Completely Restores Health upon use!`);
	level1Story();
    }


    else if(playerClass === "4") {
        alert("Knight Selected!");
	shieldWall.style.display = "inline";
	
alert(`⚔️Knight Stats⚔️ 
Health: 250
Damage: 2 
Voltage: 100
Special Ability: 🛡️Shield Wall🛡️ - Incoming damage is reduced by 25% for a brief period
`)
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
// ========================================================
// ☠️ Enemy Dies ☠️ #ENEMY-DEATH
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

        healthFactor = Math.ceil((enemyMaxHealth * vampirismPercentage));
	console.log(healthFactor);

	currentHealth += healthFactor;
	updateEnemyHealthValues();

	currentXP += randomXP * active; 
	xpEarnt += randomXP * active;



	//🪙GOLD ADDED HERE!🪙
	goldValue += Math.floor(enemyMaxHealth * goldMultiplier);
	goldEarnt += Math.floor(enemyMaxHealth * goldMultiplier);

	gold.textContent = "Gold: " + goldValue.toLocaleString();


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
// 🛠️SHOW UPGRADE TABLES🛠️ #UPGRADE-TABLES
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

//🕷️SPELL TABLE🕷️
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

//💸INCOME TABLE💸
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
// 🛠️FUNCTIONS🛠️ #FUNCTIONS
// ========================================================
//🎯CRITICAL CHANCE FUNCTION🎯
criticalHitUpgrade.addEventListener("click", function() {
    if(perks >= criticalChanceRequiredPerks) {
	purchaseSkill.currentTime = 0;
	purchaseSkill.play();
        perks -= criticalChanceRequiredPerks;

	criticalChanceRequiredPerks += 3;
	updatePerks();
	
	criticalChanceFactor += 1;
	critLabel.textContent = "Crit Chance: " + criticalChanceFactor + " %";
	
	criticalHitPerksCost.textContent = criticalChanceRequiredPerks;
	criticalHitMagnitude.textContent = criticalChanceFactor + " %";
    }
});

//💥CRITICAL DAMAGE FUNCTION💥
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

//🕊️GUARDIAN ANGEL FUNCTION🕊️
function guardianRoll() {
let guardianNumber = Math.floor(Math.random() * 1000 + 1);
    if(guardianNumber <= guardianChance) {
        guardianFactor = 0;
    }

    else{
        guardianFactor = 1;
    }
}

//💀EXECUTION FUNCTION💀
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

//🩸BLOODTHIRSTY FUNCTION🩸
function bloodthirstyFunction() {
    purchaseSkill.currentTime = 0;
    purchaseSkill.play();

    bloodthirstyFactor += 1;
    bloodthirstyPerksRequired.textContent = bloodthirstyRequiredPerks;
    bloodthirstyMagnitude.textContent = "+ " + bloodthirstyFactor + " HP";
}
//💲REAL ESTATE FUNCTION💲
function realEstateFunction() {
    incomeFactor += 1;
    purchaseSkill.currentTime = 0;	
    purchaseSkill.play();
    realEstatePerksRequired.textContent = realEstateRequiredPerks;
    realEstateMagnitude.textContent = "+ " + incomeFactor + "/Sec";
    clearInterval(realEstateInterval);

realEstateInterval = setInterval(function() {
    goldValue += incomeFactor;
    gold.textContent = "Gold: " + goldValue.toLocaleString();   
},1000);
}
// ========================================================
// ⚡UPDATE RESOURCES/STATUS⚡#UPDATE STATS
// ========================================================
//💖HEALTH UPDATES💖								                
function updateHealthValues() {
    	HPPercentage = (currentHealth/maxHealth) * 100;
	currentHealth = Math.round(currentHealth);
    	hp.textContent = playerName.toUpperCase() + " HP: " + currentHealth.toLocaleString() + "/" + maxHealth.toLocaleString();
    	healthBar.style.width = HPPercentage + "%";

if(currentHealth === Infinity) {
    hp.textContent = playerName.toUpperCase() + " HP: " + " ∞";
}

else if(currentHealth === -Infinity) {
    hp.textContent = playerName.toUpperCase() + " HP: " + " -∞";
}

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

//🧟ENEMY HEALTH UPDATES🧟
function updateEnemyHealthValues() {
    	enemyHPPercentage = (enemyCurrentHealth/enemyMaxHealth) * 100;
    	enemyHealthBar.style.width = enemyHPPercentage + "%";
	if(enemyCurrentHealth === Infinity) {
	    enemyHP.textContent = enemyList[storyLevel-1] + " HP: " + "∞";
	}
	else{
	    enemyHP.textContent = enemyList[storyLevel-1] + " HP: " + Math.floor(enemyCurrentHealth.toLocaleString()) + "/" + enemyMaxHealth.toLocaleString();
	}
}

//✨XP UPDATES✨
function updateXPValues() {
        XPPercentage = (currentXP/requiredXP) * 100;
	XPPoints.style.width = XPPercentage + "%";
	XPLabel.textContent = "XP: " + currentXP.toLocaleString() + "/" + requiredXP.toLocaleString();
	if(currentXP === Infinity) {
            XPLabel.textContent = "XP: " + "∞";    
        }
	else if(currentXP === -Infinity) {
            XPLabel.textContent = "XP: " + "-∞";    
        }
}
//🧠SKILL POINT UPDATES🧠
function updatePerks() {perk.textContent = "|" + "Skill Points: " + perks.toLocaleString() + "|";}

function updateVoltageValues() {
        voltagePercentage = (voltage/maxVoltage) * 100;
        voltageBar.style.width = voltagePercentage + "%";
        voltageText.textContent = "Voltage: " + voltage.toLocaleString() + "/" + maxVoltage.toLocaleString();
	if(voltage === Infinity) {
            voltageText.textContent = "Voltage: " + "∞";
        }
	else if(voltage === -Infinity) {
            voltageText.textContent = "Voltage: " + "-∞";
        }
}


// ========================================================
// 📖LEVEL 2 STORY📖 #LEVEL-2-STORY
// ========================================================
function level2Story() {
    alert("After surviving the swarm of " + enemyList[storyLevel - 1].toLowerCase() + "s" + ", your confidence grows… but so does the danger around you.");
    alert("You have a few moments to prepare before moving forward. How will you increase your chances of surviving what's ahead?");
 
   let decision2 = prompt(`
[1] 🔪 Give your knife a spa day
[2] 🔒 Peek at the wall safe — are you feeling lucky?
[3] 🔥 Crank up the fire — sizzle time
[4] 📰 Flip the newspaper — what's going on in the world today?
`);

if(decision2 === "1"){
        alert("You sharpern your knife making the blade slightly more powerful gaining +1 damage");
	playerDamage += 1;
	playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage;

	alert("A wave of " + enemyList[storyLevel].toLowerCase() + "s" + " bursts through the window, drawn by the scent of your last fight. Grip your sharpened knife—it's about to get wild!");
    }

    else if(decision2 === "2") {
	pin = prompt
(`Enter Pin
_ _ _ _`)
	if(pin === "1234") {
  	    alert("You successfully guessed the pin and found some rubies, a pen, an old hat and a box of diamonds!")
	    alert("+ 3500 Gold!");
	    goldValue += 3000;
	    gold.textContent = "Gold: " + goldValue.toLocaleString();
        }

	else{
            alert("You tried to hack the safe but you had no luck guessing the password. Good try though!")
	    alert("You tired yourself out! -10 Max Voltage!")
	    maxVoltage -= 10;
	    updateVoltageValues();

	    alert("A swarm of " + enemyList[storyLevel].toLowerCase() + "s " + "glide through the living room door and surround you! Forget the safe, forget everything! Grab your knife   and fight, they’re after your blood!");
        }
    }

    else if(decision2 === "3") {
        alert("You use a match to light the fireplace creating a cosy atmosphere in this gloomy mansion");
	alert("The fire makes enemies more frightened! -5 enemy HP")
	enemyMaxHealth -= 5;
	alert("A swarm of " + enemyList[storyLevel].toLowerCase() + "s " + "approach you from the distance and looks like they don't like the look of the fire. They avoid it. Use it in your favour!")
    }

    else if(decision2 === "4") {
        alert("You sit down on the sofa reading the newspaper 'Zombie Headlines' you learnt a new defensive combat tactic increasing your damage resistance by 2 %!");
	damageResistance += 2;
	drLabel.textContent = "DR: " + damageResistance + "%";

	alert("After you got distracted practising the dodge technique a swarm of " + enemyList[storyLevel].toLowerCase() + "s " + "storm through the open window biting at ur neck!") 

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

    else{
        alert("You missed an opportunity!");
	alert("-1 Damage");
	playerDamage -= 1;
	playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage;
    }

}

// ========================================================
// 📖LEVEL 3 STORY📖 #LEVEL-3-STORY
// ========================================================
function level3Story() {
	alert("You reach the courtyard… a maze of webs and shadows. Giant " + enemyList[storyLevel].toLowerCase() + "s " + "block every exit, forcing you to face them before escape.");
	alert("Despite the panic, a lucky coin falls from the eerie sky. You have the chance to double your gold or lose it all. What will you do?")
	let decisions3 = prompt(`
[1] 🪙 Flip the coin
[2] 🚶‍♂️ Leave it for the next fool
[3] ✋ Keep the coin
[4] 💥 Smash the coin
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
		    gold.textContent = "Gold: " + goldValue.toLocaleString();
		    alert("Duplication Success!");
                }

		else if(hot === "T") {
		    alert("Muhahaha! You lose! Taking your money!");
		    alert("Zombies take your gold away");
		    goldValue = 0;
		    gold.textContent = "Gold: " + goldValue.toLocaleString();
		    alert("Bankrupt Success!");
                }
            }

	    else if(coinFlip === 1) {
		alert("Tails");

		if(hot === "H") {
		    alert("Muhahaha! You lose! Taking your money!");
		    alert("Zombies take your gold away");
		    goldValue = 0;
		    gold.textContent = "Gold: " + goldValue.toLocaleString();
		    alert("Bankrupt Success!");
                }

		else if(hot === "T") {
		    alert("Damn! You won! Doubling your cash now!");
		    alert("Duplicating " + goldValue + " gold. Please stand by")
		    goldValue *= 2;
		    gold.textContent = "Gold: " + goldValue.toLocaleString();

		    alert("Duplication Success!");
		    
                }
            }

        }

	else if (decisions3 === "2") {
            alert("You decide not to gamble your gold. Sad times you could have been rich.")

	    alert("Caution! " + enemyList[storyLevel].toLowerCase() + "s" + " surround the maze that you are in. They are 4 times the size of you but don't worry...not like their skin is made of iron anyway. Destroy them!")
        }

	else if(decisions3 === "3") {
	    alert("You slide the coin down your pocket! It's only a coin but you never know. May bring you good luck!");
	    alert("+ 1 Gold");	
	    goldValue += 1;
	    gold.textContent = "Gold: " + goldValue.toLocaleString();

	    alert("After putting a coin in your pocket, the spiders smell you out and block all exits. The only way out is to kill the Queen and her brothers. Grab that knife and stab them where it hurts!")
        }

	else if (decisions3 === "4") {
            alert("You destroy the coin using your knife! Preventing others from gaining fortune or losing it!")
	    alert("A blessing descends from the heavens! All gold looted from enemies is now 10% greater!");
	    goldFactor += 0.1;

	    alert("Caution! " + enemyList[storyLevel].toLowerCase() + "s" + " Giant Spiders now surround you. Their fangs are poisonous but their skin is pathetic. Find their weakness and destroy them before you become their new breeding ground. Yuck!")
        }
}


// ========================================================
// 📖LEVEL 4 STORY📖 #LEVEL-4-STORY
// ========================================================
function level4Story() {
	alert("You kill the last " + enemyList[storyLevel-1].toLowerCase() + " causing the others to flee in distress");
	alert("Now which way is out?")
	let decision4 = prompt("Direction: left/right/stay");
	if(decision4 === "left"){
	    alert("You found the exit! A " + enemyList[storyLevel].toLowerCase() + " ambushes you outside the maze. Keep an eye on your health and destroy that thing!")
        }

	else if(decision4 === "right") {
	    alert("You got lost further in the maze causing you to get hungry and tired. -20 HP and -10 V");
	    currentHealth -= 20;
	    voltage -= 10;
	    alert("A " + enemyList[storyLevel].toLowerCase() + " finds your lost soul, ignore how weak you are right now and grab that pathetic knife of yours to kill the " + enemyList[storyLevel].toLowerCase() + " before it kills you!");
        
        }

	else if(decision4 === "stay") {
	    alert("You catch your breath and recharge. +50 Voltage flows through your veins!");
	    voltage += 50;
	    updateVoltageValues();
	        
	    alert("As you are taking a sip from your bottle you notice a black slivering shadow approach you from behind.")
	    alert("You dodge out the way and grab your knife out. Looks like the " + enemyList[storyLevel].toLowerCase() + " of the labyrinth has arrived")
        }	
}

// ========================================================
// 📖LEVEL 5 STORY📖 #LEVEL-5-STORY
// ========================================================
function level5Story() {
	alert("You finish the " + enemyList[storyLevel - 1].toLowerCase() +  " with a precise, throbbing stab to its great yellow eye!");
	alert("Looking around, the area is clear. You decide to find the nearest settlement to uncover what's going on.");
	alert("Before you embark on the long journey, a mysterious opportunity appears—you may make a single wish! Choose wisely…");

	let decisions5 = prompt(`
[1] 💖Double Health
[2] 💥Double Damage
[3] ⚡Double Max Voltage
`);

	if (decisions5 === "1") {
	    alert("Your skin hardens and transforms into impenetrable rock!");
	    maxHealth *= 2;
	    updateHealthValues();
	    alert("Max Health doubled!");

	    alert("Suddenly, a dark-grey " + enemyList[storyLevel].toLowerCase() + " ambushes you in the forest. The shadows are thick, so you set a tree ablaze to illuminate the area. Let's see if your rock-like hide can save you…");

	} else if (decisions5 === "2") {
	    alert("Your weapon fuses with the venom of death itself!");
	    playerDamage *= 2;
	    playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage + "|";
	    alert("You now deal twice as much damage!");

	    alert("A bright-green " + enemyList[storyLevel].toLowerCase() + " ambushes you in the forest. It's almost pitch-dark, so you light a torch and place it on a tree. Let's see if your venomous weapon strikes true…");

	} else if (decisions5 === "3") {
	    alert("A surge of energy courses through your body, electrifying every vein!");
	    maxVoltage *= 2;
	    alert("Voltage capacity doubled!");

	    alert("A giant " + enemyList[storyLevel].toLowerCase() + "s" + " ambushes you in the forest. The darkness is nearly complete, but your super-charged battery powers your flashlight. Time to see if raw energy can illuminate your victory…");
	}
}

// ========================================================
// 📖LEVEL 6 STORY📖 #LEVEL-6-STORY
// ========================================================
function level6Story() {
	alert("With the " + enemyList[storyLevel-1].toLowerCase() + " slain, you press onwards. From the distance you notice faint flickering lights...could it be a settlement?");
	alert("You approach the lights, but suddenly a friendly zombie lumbers out of the forest clutching a rusty revolver.")
	alert("He tilts his head and gives you the most adorable puppy eyes… 'russian roulette' he mutters..\nWhat do you do?");

	decision6 = prompt(`
[1] 🔥 Enter the game.
[2] 🙃  Agree — force him to move first.
[3] 🔫 Disarm him — steal the gun.
[4] 🩸 Make a blood offering to spare yourself.
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
		gold.textContent = "Gold: " + goldValue.toLocaleString();
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

// ========================================================
// 📖LEVEL 7 STORY📖 #LEVEL-7-STORY
// ========================================================
function level7Story() {
    alert("You arrive at a small town in chaos—flames burn, steel clashes, and in the center stands a giant, shimmering portal. Guarding it is a massive, menacing " + enemyList[storyLevel].toLowerCase() + " , swatting down anyone who dares approach. Townsfolk try to reach the portal, but all fall before its fearsome presence");
    alert("Whilst you have the advantage of suprise, you plan your move before you act.");

    let level7Prompt = prompt(
`Your next move awaits:  
[1] ⚔️ Storm in, blades aflame!  
[2] 🙏Whisper a prayer to the developer, beseeching fortune.  
[3] 🏰Loot the armory for a legendary suit of armor.  
[4]💰 Pay for reinforcements to join your fight!`
    );

    if (level7Prompt === "1") {
        alert("You go full berserk, hacking and slashing everything in sight! And just like that—SNAP! Your weapon explodes against futuristic alien armor… yeah, we’re in trouble now");
        playerDamage /= 2;
        playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage;

        let level7Prompt2 = prompt(
`Oops...what now?
[1] Chuck it away and use one of your dead foes' weapon
[2] Pay the local blacksmith to quickly repair it for a cost of 3000 gold`
        );

        if (level7Prompt2 === "1") {
            alert("You pick up a bloody sword and use it in your fight against the giant " + enemyList[currentLevel].toLowerCase());
            alert("Damage decreased by 50%");
            playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage;
        }

        else if (level7Prompt2 === "2") {
            if (goldValue >= 3000) {
                goldValue -= 3000;
                gold.textContent = "Gold: " + gold.value.toLocaleString();
                alert("You pay the blacksmith, coins clattering everywhere, and he smirks, offering you a ridiculously powerful sword. Just holding it, you can already feel the chaos it would unleash!");
                alert("Damage x2");
                playerDamage *= 4;
                playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage;


            }

            else {
                alert("Did you forget how bankrupt you were? There's no way you can afford the repairs!");
                alert("You pick up a bloody sword and use it in your fight against the giant " + enemyList[storyLevel].toLowerCase());
                alert("Damage decreased by 50%");
                playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage;
            }
        }
    }



    else if (level7Prompt === "2") {
       alert("You whisper a prayer to the almighty God of Programming. He smirks and injects 3 bonus Skill Points into your veins. Go on… make 'em count (or break the game, your call).")
       alert("+3 Skill Points!");
       perks += 3;
       updatePerks();
    }

    else if (level7Prompt === "3") {
	alert("You hurl a rock through the window and squeeze inside the armory. Your eyes land on a gleaming suit of knight’s armor thats hanging on the wall...way too tempting to resist, you snatch it up for yourself!");
	alert("Damage Resistance increased by +5%");
	damageResistance += 4;
	damageResistanceFunction();   
    }

    else if (level7Prompt === "4") {
        goldValue -= 1000;
	alert(" Mercenaries arrive, weapons clashing and boots pounding! They teach you lethal tricks to strike the enemy's weak spots!");
	alert("Enemy Max Health permenantly decreased by -20");
	enemyMaxHealth -= 20;
	updateEnemyHealthValues();
    }
}
// ========================================================
// 📖LEVEL 8 STORY📖 #LEVEL-8-STORY
// ========================================================
function level8Story() {
    alert("After annihalting the vincinity with your deadly strikes, the portal guardian is now dead and you are free to enter another dimension! This is the next step to figuring out why you are in this timeline and why time is collapsing on itself...")

    let level8StoryPrompt = prompt
(`You have the option to travel back in time...would you like to proceed?
[1] Yes
[2] Continue Story
`)
    if(level8StoryPrompt === "1") {
        alert("...");
alert("...");
alert("Light swallows you whole. Your consciousness peels apart as time folds in on itself, dragging your mind backward through everything you’ve ever been.");
alert("You see flashes—forests crawling with lizards… snarling dogs… swirling portals… blood on your hands… a rat torn apart… spiders closing in… voices screaming for help… bodies falling… static… buzzing… reality tearing itself in half…");
    startIntro();  
	storyLevel = 0;
	enemyCurrentHealth = currentLevel * 10;;
	enemyMaxHealth = currentLevel * 10;
	enemyDamage = currentLevel;

    }

    else if(level8StoryPrompt ==="2"){
        alert("You walk towards the bright light and your body gets sucked in transporting your soul to another realm of time...");
	alert("After a dizzying series of twists and turns, you plummet through the sky and crash into a shimmering pool of water. Around you, lush tropical greenery stretches as far as the eye can see. Towering trees sway gently above, rivers sparkle as they meander peacefully, and before you, the world of the dinosaurs comes alive.!")

	alert("In the distance, a shimmering oasis appears, bathed in golden sunlight. As you approach, your eyes fall upon a perfectly ripe, crimson apple hanging from a twisted, ancient tree. Its skin glistens like it holds a world of secrets, promising a sweet reward after hours of relentless struggle. Your stomach growls, your hands tremble with anticipation… you’ve earned this taste of paradise.");
	
let level8StoryPrompt2 = prompt
(`Juicy temptations....what to do...?
[1] 🍎Bite the apple and taste it's power!
[2] 🚶‍♂️Leave the apple alone...for now
`)

if(level8StoryPrompt2 === "1") {
    alert(" You crunch on the juicy apple! Knowledge explodes through your veins and leveling up feels instant… but the apple bites back! You've aged 20 years, losing 10 max HP and voltage. Power never comes free!");
    alert("Your journey accelerates! Leveling up now demands 500 less XP — feel the surge of unstoppable power!")    
    alert("From the shadows behind the ancient trees, a low growl rises. You sense the ground shake beneath unseen feet… brace yourself, chaos is about to strike!");

    requiredXP -= 500;
    maxHealth -= 10;
    maxVoltage -= 10;

    updateHealthValues();
    updateVoltageValues();
    updateXPValues();
}

else if(level8StoryPrompt2 === "2") {
    alert("You walk away from the apple never knowing what it's potential could have been...");
    alert("You hear something creep out from behind one of the trees, get ready...");
}
    }
}

// ========================================================
// 📖TIMELINES LIST📖 #TIMELINES-LIST
// ========================================================
timelines = [level2Story, level3Story, level4Story, level5Story, level6Story, level7Story, level8Story,
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

// ========================================================
// 🎉LEVEL UP FUNCTION🎉 #LEVEL-UP-FUNCTION
// ========================================================
function levelUpFunction() {
updateHealthValues();
	displayEnemy.textContent = enemyEmojis[storyLevel];

	nearDeathExperienceSpecialUsed = false;
	shieldWallSpecialUsed = false;
	markedForDeathSpecialUsed = false;
	mageFurySpecialUsed = false;

	
	timelines[storyLevel-1]();
	
	active = 1;
        levelUpButton.style.display = "none";
        levelUpSfx.play();

	enemyMaxHealth += (storyLevel * storyLevel );
	console.log("Enemy Current Health = currentLevel * currentLevel = " + enemyCurrentHealth);
	enemyDamage += (storyLevel);
	baseEnemyDamage += (storyLevel);
	console.log(enemyDamage);
	maxHealth += antibodiesFactor;
	voltage = maxVoltage += soulPactFactor;
	currentHealth = maxHealth;  

	
	updateHealthValues();
	updateVoltageValues();
	maxDamageLabel.textContent = "|Enemy DPS: " + enemyDamage + "|";
	
	enemyAttack();
	enemyCurrentHealth = enemyMaxHealth;
	updateEnemyHealthValues();

        currentXP = 0;
        currentLevel += 1;
	storyLevel += 1;
        maxDamage += 3;
	perks += storyLevel ;
	perksEarnt += storyLevel;
	perk.textContent = "|Skill Points: " + perks + "|";
        level.textContent = "|Level: " + currentLevel + "|";

	enemyHP.textContent = enemyList[storyLevel-1].toUpperCase() + " HP" + ": " + enemyCurrentHealth + "/" + enemyMaxHealth;
	console.log("Story Level: " + storyLevel);

	updateXPValues();

	requiredXP += 250;

        previousEnemyDamage = enemyDamage

        enemyDamage = 0;
	
	enemyHealthBar.style.background = "linear-gradient(to right, #a0e9ff, #70d6ff, #ccefff, #ffffff)";
	displayEnemy.textContent = enemyEmojis[storyLevel-1];


        setTimeout(function() {
            enemyDamage = previousEnemyDamage;
	    enemyHealthBar.style.background = "linear-gradient(to top, darkred, orange)";

	  
        
        
        }, 5000)

        displayLabel.style.opacity = 1;
        displayLabel.textContent = "Level Up!";
        displayLabel.style.background = "linear-gradient(to bottom, yellow, orange)";

        // Hide the display label after 3 seconds
        setTimeout(function() {
            displayLabel.style.opacity = 0;
        }, 3000);
}


// Level UP button//															//LEVEL UP BUTTON//
levelUpButton.addEventListener("click", function() {
    // Check if player has enough XP
    if(currentXP >= requiredXP) {
        levelUpFunction();    
    }
});




// ========================================================
// 🗡️ATTACK BUTTON🗡️ #ATTACK-BUTTON
// ========================================================
//LOSES HEALTH  BUT GAINS XP WHEN U PRESS ATTACK//											//ATTACK BUTTON//
displayEnemy.addEventListener("click", function() {

currentHealth += mosquitoFactor;
updateHealthValues;

	executionRoll();
        timesAttacked += 1;

	criticalWheel = Math.floor(Math.random() * 100 + 1);

	if(criticalWheel <= criticalChanceFactor) {
	    criticalSfx.currentTime = 0;
	    criticalSfx.play();

	    maxHealth += bloodthirstyFactor;
	    updateHealthValues();

	    
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

// ========================================================
// 🗡️ATTACK BUTTON🗡️ #ATTACK-BUTTON
// ========================================================
//ATTACK BUTTON//														       	//ATTACK BUTTON//
attack.addEventListener("click", function() {
currentHealth += mosquitoFactor;
updateHealthValues;
	
	executionRoll();
    	timesAttacked += 1;

	criticalWheel = Math.floor(Math.random() * 100 + 1);

	if(criticalWheel <= criticalChanceFactor) {
	    criticalSfx.currentTime = 0;
	    criticalSfx.play();

	    maxHealth += bloodthirstyFactor;
	    updateHealthValues();

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





// ========================================================
// ❤️‍🩹HEAL BUTTON❤️‍🩹 #HEAL-BUTTON
// ========================================================														     //HEAL BUTTON//
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


//MAX HEALTH UPGRADE//														      //MAX HEALTH UPGRADE//
maxHealthUpgrade.addEventListener("click", function() {
    if(perks >= 1) {
        perks -= 1;
    maxHealth += 25;
    totalHealth += 25;

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

function healUpgradeFunction() {
    heal += 5;
    totalHeal += 5;

    purchaseSkill.currentTime = 0;
    purchaseSkill.play();


    healPower.textContent = "|Heal Power: " + heal + " HP " + "|";
    perk.textContent = "Perks: " + perks;
    healUpgradeMagnitude.textContent = "+ " + totalHeal + " HP";

}

//HEAL UPGRADE//															//HEAL UPGRADE//
healUpgrade.addEventListener("click", function() {
    if(perks >= 1) {
        perks -= 1;
	healUpgradeFunction();
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
	    updateVoltageValues();

        }



	
	else{
           voltage = maxVoltage;
	   updateVoltageValues();
        }

    }, voltageSpeed);

}

runVoltageLoop();

let xpPerksRequired = 2;
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

	
        updatePerks();
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

let hpRegenRequiredPerks = 2;

//AUTO HP UPGRADE//															 //AUTO HP UPGRADE//
autoHP.addEventListener("click", function() {
    if(perks >= hpRegenRequiredPerks) {
        purchasedXP = true;
        perks -= hpRegenRequiredPerks;
	hpRegenRequiredPerks += 1;

    	purchaseSkill.currentTime = 0;
    	purchaseSkill.play();

    autoMineHP();
    hpRegenPerksRequired.textContent = hpRegenRequiredPerks;

	

    perk.textContent = "Perks: " + perks;

   
    }

});

let hpRegen = 0;
let regenActive = 1;

// AUTO REGENERATES HP POINTS//														   //AUTO REGEN HP//
function autoMineHP() {
    hpRegen += 1;
    regenerateHpMagnitude.textContent = "+ " + hpRegen + "/s";
    clearInterval(hpInterval);
    
    if(currentHealth + hpRegen <= maxHealth){
        hpInterval = setInterval(function() {
	    
            if(currentHealth + hpRegen >= maxHealth) {
                regenActive = 0;
		currentHealth = maxHealth;
            }

	    else regenActive = 1;
             

            currentHealth += hpRegen * regenActive;
	   

	    updateHealthValues();
	    

        }, 1000);



    }

};

let fromLeft = 500;
let voltageRequiredPerks = 2;
function voltageRegenerationFunction() {
      	purchaseSkill.currentTime = 0;
	purchaseSkill.play();  
	voltageLevel += 1;
        runVoltageLoop();
	perk.textContent = "Perks: " + perks;
	voltageRegenPerksRequired.textContent = voltageRequiredPerks;
	voltageUpgradeMagnitude.textContent = "+ " + voltageLevel + " v/s";
	if(voltage >= maxVoltage) voltage = maxVoltage;
	updateVoltageValues();

}



// VOLTAGE BOOST UPGRADE//	
													   //VOLTAGE BOOST//
voltageUpgrade.addEventListener("click", function() {
    if(perks >= voltageRequiredPerks){
        perks -= voltageRequiredPerks
	voltageRequiredPerks += 5;


	voltageRegenerationFunction();       
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
	    enemyCurrentHealth -= reflectedDamage
	    if(enemyCurrentHealth <= 0) {
	        enemyDead();
	    }

	    updateHealthValues();
	    updateEnemyHealthValues();
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

vampirismPercentage = 0;
vampirismInteger = 0;
vampirismRequiredPerks = 4;

//VAMPIRISM UPGRADE//														       //VAMPIRISM UPGRADE//
stealHP.addEventListener("click", function() {
    if(perks >= vampirismRequiredPerks) {
        perks-= vampirismRequiredPerks;
	vampirismRequiredPerks += 1;

	vampirismPercentage += 0.01;
	vampirismInteger += 1;

    	purchaseSkill.currentTime = 0;
    	purchaseSkill.play();

        perk.textContent = "Perks: " + perks;

	vampirismPerksRequired.textContent = vampirismRequiredPerks;
	stealHpMagnitude.textContent = "Absorbs: " + (vampirismInteger) + "%" + " HP";
	console.log(healthFactor);
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

let freezeActive = false;

//FREEZE BUTTON																   //FREEZE BUTTON//
freeze.addEventListener("click", function() {
    if(voltage >= maxVoltage/2 && !freezeActive) {
	freezeActive = true;
	voltage -= Math.floor(maxVoltage/2);
	iceSfx.play();
        previousEnemyDamage = enemyDamage
	freeze.style.filter = "brightness(25%) grayscale(100%)";

        enemyDamage = 0;
	
	enemyHealthBar.style.background = "linear-gradient(to right, #a0e9ff, #70d6ff, #ccefff, #ffffff)";

        setTimeout(function() {
            enemyDamage = previousEnemyDamage;
	    enemyHealthBar.style.background = "linear-gradient(to top, darkred, orange)";
	    freezeActive = false;
	    freeze.style.filter = "brightness(100%) grayscale(0%)";


	  
           
        
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


let checkOpacity;
//DEV COMMANDS	

														    //DEV COMMANDS//

devConsole.addEventListener("keydown", function(event) {

    if(event.key === "Enter") {
        if(devConsole.value === "hack perks") {
	    electricitySfx.play();
            perks += 10000;
            updatePerks();
        }

        if(devConsole.value === "hack health") {
            maxHealth = Infinity;
        }

        if(devConsole.value === "hack level") {
	    levelUpFunction();
        }

        if(devConsole.value === "death") {
	    currentHealth = -Infinity;
            updateHealthValues();
        }
    }
    

});

let knightsPerksRequired = 2;
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
	




        knightsPerksRequired += 2;
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
	perkCost += Math.floor((requiredXP/2) + (playerDamage * 25));
        
        gold.textContent = "Gold: " + goldValue.toLocaleString();
	buyPerk.textContent = "Buy Skill Point: " + perkCost + " Gold";
        updatePerks();
    }
    

});


drCost = 1;

function damageResistanceFunction() {
	
	purchaseSkill.currentTime = 0;
	purchaseSkill.play();
	damageResistance += 3;
	drDecimal = 1 - (damageResistance/100);

	newEnemyDamage = enemyDamage * drDecimal;
	newEnemyDamage = Math.ceil(newEnemyDamage);
	enemyDamage = newEnemyDamage;
	
	drLabel.textContent = "DR: " + damageResistance + " %";
	maxDamageLabel.textContent = "|" + "Enemy DPS: " + newEnemyDamage;


	drPerks.textContent = drCost	
	drMagnitude.textContent = damageResistance + " %";
	
	updatePerks();
}

//DAMAGE RESISTANCE UPGRADE												       //DAMAGE RESISTANCE UPGRADE//
drButton.addEventListener("click", function() {
    if(perks >= drCost) {
        perks -= drCost;
	drCost += 3;
	damageResistanceFunction();
	
    }


});

const concentrationMagnitude = document.querySelector("#concentration-magnitude")
const concentrationPerksLabel = document.querySelector("#concentration-perks");
let concentrationPerks = 1;

//CONCENTRATION UPGRADE														   //CONCENTRATION UPGRADE//
concentrationButton.addEventListener("click", function() {
    if(perks >= concentrationPerks) {
	purchaseSkill.currentTime = 0;
	purchaseSkill.play();
        perks -= concentrationPerks;
	concentrationPerks += 1;

	concentrationFactor += 3;
	concentrationPerksLabel.textContent = concentrationPerks;
	concentrationMagnitude.textContent = "+" + concentrationFactor + " XP/Hit";


	updatePerks();
    }

});

const ghostMagnitude = document.querySelector("#ghost-magnitude");

//GHOST UPGRADE																    GHOST UPGRADE//
ghostButton.addEventListener("click", function() {
    if(!ghostPurchased && currentLevel >= 4) {
 
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
	
	purchaseSkill.currentTime = 0;
	purchaseSkill.play();
	
	
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
	
	iceSfx.currentTime = 0;
	iceSfx.play();
	displayLabel.textContent = "Game Paused";
	displayLabel.style.opacity = 1;
    
	


	paused = true;
	presentHealth = currentHealth;
	presentVoltage = voltage;
	presentKnightDamage = knightDamage;
	presentPlayerDamage = playerDamage;
	presentRequiredXP = requiredXP;
	presentCurrentXP = currentXP;
	presentEnemyHP = enemyCurrentHealth;


	enemyCurrentHealth = Infinity
	voltage = -Infinity;
	knightDamage = -Infinity;
	playerDamage = 0;
	requiredXP = Infinity;
	currentXP = -Infinity;
	currentHealth = Infinity;	

	updateHealthValues();
	updateVoltageValues();
	updateXPValues();
	updateEnemyHealthValues();
	playerDamageLabel.textContent = "|" + "Player Damage: " + playerDamage + "|";

    }
    
    else{
	displayLabel.textContent = "Game Resumed!";
	displayLabel.style.opacity = 1;
        paused = false;
	currentHealth = presentHealth;
	voltage = presentVoltage;
	knightDamage = presentKnightDamage;
	playerDamage = presentPlayerDamage;
	requiredXP = presentRequiredXP;
	currentXP = presentCurrentXP;
	enemyCurrentHealth = presentEnemyHP;

	if(boughtSellSoul) {
	    voltage = -Infinity;
	}


	updateHealthValues();
	updateVoltageValues();
	updateXPValues();
	updateEnemyHealthValues();


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


function guardianFunction() {
    purchaseSkill.play();
    guardianChance += 5;
    guardianAngelPerksCost.textContent = guardianRequiredPerks;
    guardianAngelMagnitude.textContent = guardianChance/10 + "%";
}



guardianAngelUpgrade.addEventListener("click", function() {
    if(perks >= guardianRequiredPerks) {
        perks-= guardianRequiredPerks;

	purchaseSkill.currentTime = 0;
	purchaseSkill.play();
	guardianRequiredPerks += 2;
	guardianFunction();
	
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
         enemyCurrentHealth -= fireballDamage;

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


function fireballFunction() {

     if(luckyDipPressed && fireballBought) {
	alert("Fireball already unlocked! Increasing fireball Damage by + 10!");
	fireballDamage += 10;
     }


     fireballBought = true;
     purchaseSkill.currentTime = 0;
     purchaseSkill.play();
     perks -= 3;
     fireball.style.display = "inline";
     fireballMagnitude.textContent = "Fireball Unlocked!";



}



fireballUpgrade.addEventListener("click",function() {
    if(perks >= 3 && !fireballBought) {
	fireballFunction();
	updatePerks();
    }

});

let superNovaRequiredPerks = 3
superNova.addEventListener("click", function() {
    if(perks >= superNovaRequiredPerks) {
        perks-= superNovaRequiredPerks;

	purchaseSkill.currentTime = 0;
	purchaseSkill.play();

        fireballDps += 1;
        superNovaRequiredPerks += 5;
        superNovaPerksRequired.textContent = superNovaRequiredPerks;
        superNovaMagnitude.textContent = fireballDps + " DPS";

	updatePerks();      
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
	purchaseSkill.currentTime = 0;
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

	purchaseSkill.currentTime = 0;
	purchaseSkill.play();

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



function executionFunction() {
    purchaseSkill.currentTime = 0;
    purchaseSkill.play();
    executionFactor += 1;
    executionPerksRequired.textContent = executionRequiredPerks;
    executionMagnitude.textContent = executionFactor/4 + " %";
}


executionRequiredPerks = 2;

executionUpgrade.addEventListener("click", function() {
    if(perks >= executionRequiredPerks) {
        perks -= executionRequiredPerks;
	executionRequiredPerks += 6;
	executionFunction();
	updatePerks();
    }
});

let antibodiesRequiredPerks = 2;

antibodiesUpgrade.addEventListener("click", function() {
    if(perks >= antibodiesRequiredPerks);
        perks -= antibodiesRequiredPerks;
	purchaseSkill.currentTime = 0;
	purchaseSkill.play();
	antibodiesRequiredPerks += 6;
	antibodiesFactor += 5;

	antibodiesPerksRequired.textContent = antibodiesRequiredPerks;
	antibodiesMagnitude.textContent = "+" + antibodiesFactor + " HP";
	
	
        
});

function sellSoulFunction() {
       if(!boughtSellSoul) {
           boughtSellSoul = true; 
	   soulPactFactor = -Infinity;
           alert("As the ritual tears your soul from your flesh, your divine power plunges into the infernal abyss... Spells fail, your voltage collapses to negative infinity, and yet your  body feels unbreakable. You are near-immortal, but at a devilish cost.");
	      alert(
`Max Health X5
Voltage Depleted`)

           healButton.style.display = "none"; 
           charge.style.display = "none";
           freeze.style.display = "none";
           adrenaline.style.display = "none";
           fireballUpgrade.style.display = "none";
       
           devilLaugh.play();
           maxHealth *= 5;
           currentHealth = maxHealth;
           presentHealth = maxHealth;
           voltage = -Infinity;
           updateHealthValues();
           updateVoltageValues();
           sellSoulMagnitude.textContent = "Soul Pact Activated";
       }

       else{
           if(luckyDipPressed) {
   	       alert("You have already Unlocked Soul Pact so instead max health increased by +75!");
		purchaseSkill.currentTime = 0;
		purchaseSkill.play();
	       maxHealth += 75;
	       currentHealth += 75;
	       updateHealthValues();
	       luckyDipPressed = false;
	   }
       }

}


sellSoulUpgrade.addEventListener("click", function() {
    if(currentLevel >= 7 && !boughtSellSoul) {
	sellSoulFunction();
    }
})



let randomUpgrades = [sellSoulFunction, executionFunction, fireballFunction, guardianFunction, damageResistanceFunction, voltageRegenerationFunction, healUpgradeFunction]


luckyDipButton.addEventListener("click", function(){
    if(perks >= luckyDipPerkCost) {
	alert("🎲Rolling Dice🎲");
		
        perks -= luckyDipPerkCost;
	luckyDipPerkCost += 3;
	luckyDipPressed = true;
	
	let randomUpgradeSelection = Math.floor(Math.random() * randomUpgrades.length);

	if(randomUpgradeSelection === 0 && !boughtSellSoul) alert("😈Initiating Soul Pact!😈");

else if(randomUpgradeSelection === 1) {
    alert(
`💀Execution Skill Upgraded!💀
${(executionFactor+1)/4} % chance of causing an instant death!`
);

}

else if(randomUpgradeSelection === 2 && !fireballBought){
alert(
`🔥FireBall Skill Upgraded!🔥
You can now cast Fireballs, dealing 5 base damage and setting enemies ablaze for 1 HP per second over 10 seconds.`
);

}

else if(randomUpgradeSelection === 3){
alert(
`🕊️Guardian Skill Upgraded!🕊️
${(guardianFactor+1)/2} % chance of absorbing all damage from an enemy attack`
);
}

else if(randomUpgradeSelection === 4) {
alert(
`🛡️Damage Resistance Upgrade!🛡️
Damage Resistance increased to ${damageResistance + 3} %`
);
}

else if(randomUpgradeSelection === 5) {
purchaseSkill.play();
alert(
`⚡Voltage Regeneration Upgraded!`
);

}

else if(randomUpgradeSelection === 6) {
alert(
`❤️ Your healing power rises by +5 ❤️`
);

}


	updatePerks();

	console.log(randomUpgradeSelection);
	
	randomUpgrades[randomUpgradeSelection]();
	luckyDipLabel.textContent = "|" + "Lucky Dip Cost: " + luckyDipPerkCost;
	
	
    }
});


// ========================================================
// 🎲LUCKY DIP UPGRADE #LUCKY-DIP-UPGRADE🎲
// ========================================================
luckyDipSpellUpgrade.addEventListener("click", function() {
    if(perks >= 1 && !luckyDipBought) {
	luckyDipBought = true;
	alert("You’ve unlocked the Gift of Fate! Spend skill points on these gift boxes to receive a completely random upgrade. The skill point cost increases only for Lucky Dips, not for individual skills.")
	purchaseSkill.currentTime = 0;
	purchaseSkill.play();

        perks -= 1;
	luckyDipButton.style.display = "inline";
	luckyDipMagnitude.textContent = "Gift of Fate Unlocked!";
	updatePerks();
    }
});

checkHeal = setInterval(function() {
	if(voltage >= 25) {
	    healButton.style.filter = "brightness(100%) grayscale(0%)";
	}
	if(voltage < 25){
	    healButton.style.filter = "brightness(25%) grayscale(100%)";
	}
	if(voltage >= 30) {
            fireball.style.filter = "brightness(100%) grayscale(0%)";
        }
	if(voltage < 30) {
	    fireball.style.filter = "brightness(25%) grayscale(100%)";
        }

	if(voltage >= 50) {
            adrenaline.style.filter = "brightness(100%) grayscale(0%)";
        }
	if(voltage < 50) {
	    adrenaline.style.filter = "brightness(25%) grayscale(100%)";
        }

	if(voltage / maxVoltage >= 0.5 && !freezeActive) {
            freeze.style.filter = "brightness(100%) grayscale(0%)";
        }
	if(voltage / maxVoltage  < 0.5) {
	    freeze.style.filter = "brightness(25%) grayscale(100%)";
        }


	if(perks >= luckyDipPerkCost) {
            luckyDipButton.style.filter = "brightness(100%) grayscale(0%)";
        }
	if(perks <= luckyDipPerkCost) {
	    luckyDipButton.style.filter = "brightness(25%) grayscale(100%)";
        }
	
	if(mageFuryActivated | mageFurySpecialUsed) {
            mageFury.style.filter = "brightness(25%) grayscale(100%)";      
        }

	if(!mageFuryActivated && mageFurySpecialUsed) {
            mageFury.style.filter = "brightness(100%) grayscale(0%)";      
        }

	if(shieldWallActivated | shieldWallSpecialUsed) {
            shieldWall.style.filter = "brightness(25%) grayscale(100%)";      
        }

	if(!shieldWallActivated && !shieldWallSpecialUsed) {
            shieldWall.style.filter = "brightness(100%) grayscale(0%)";      
        }

	if(markedForDeathActive | markedForDeathSpecialUsed) {
            markedForDeath.style.filter = "brightness(25%) grayscale(100%)";      
        }

	if(!markedForDeathActive && !markedForDeathSpecialUsed) {
            markedForDeath.style.filter = "brightness(100%) grayscale(0%)";      
        }

	if(nearDeathExperienceSpecialUsed) {
            nearDeathExperience.style.filter = "brightness(25%) grayscale(100%)";      
        }

	if(!nearDeathExperienceSpecialUsed) {
            nearDeathExperience.style.filter = "brightness(100%) grayscale(0%)";      
        }	
}, 100);
// ========================================================
//🔮MAGE FURY UPGRADE🔮 #MAGE-FURY-UPGRADE #SPECIAL-ABILITY
// ========================================================
mageFury.addEventListener("click", function() {
    if(!mageFuryActivated && !mageFurySpecialUsed) {
	mageFuryActivated = true;
	mageFurySpecialUsed = true;

	magePower.play();
displayLabel.textContent = "🔮Sorcerers Fury Activated!🔮";
	displayLabel.style.opacity = 1;
	displayLabel.style.background = "linear-gradient(to top, purple, blue)";
	displayLabel.style.color = "white";

        mageInterval = setInterval(function() {
            voltage += 1;
	    if(voltage >= maxVoltage) voltage = maxVoltage;
	    updateVoltageValues();
        },100)  
	
        setTimeout(function() {
            clearInterval(mageInterval);
	    mageFuryActivated = false;	
        }, 15000);    
    }
});
// ========================================================
//🛡️SHIELD WALL UPGRADE🛡️ #SHIELD-WALL-UPGRADE
// ========================================================
shieldWall.addEventListener("click", function() {
    if(!shieldWallActivated && !shieldWallSpecialUsed){
	shieldWallSpecialUsed = true;
	armourPowerUp.play();

	currentEnemyDamage = enemyDamage;
	currentDamageResistance = damageResistance;

	displayLabel.textContent = "🛡️Shield Wall Activated!🛡️"
	displayLabel.style.background = "linear-gradient(to top , silver, darkgrey, grey, black)";
	displayLabel.style.color = "black";
	displayLabel.style.opacity  = 1;

        damageResistance += 40;   

	drDecimal = 1 - (damageResistance/100);

	newEnemyDamage = currentEnemyDamage * drDecimal;
	newEnemyDamage = Math.ceil(newEnemyDamage);
	enemyDamage = newEnemyDamage;
	
	drLabel.textContent = "DR: " + damageResistance + " %";
	maxDamageLabel.textContent = "|" + "Enemy DPS: " + newEnemyDamage;


	drPerks.textContent = drCost	
	drMagnitude.textContent = damageResistance + " %";

        setTimeout(function() {
		damageResistance -= 40;
		drDecimal = 1 - (damageResistance/100);

		newEnemyDamage = currentEnemyDamage * drDecimal
		newEnemyDamage = Math.ceil(newEnemyDamage);
		enemyDamage = newEnemyDamage;

		drLabel.textContent = "DR: " + damageResistance + " %";
		maxDamageLabel.textContent = "|" + "Enemy DPS: " + newEnemyDamage;

    }, 15000); 
    }
});
// ========================================================
//💀MARKED FOR DEATH UPGRADE💀 #MARKED-FOR-DEATH-UPGRADE
// ========================================================
markedForDeath.addEventListener("click", function() {
    if(!markedForDeathActive && !markedForDeathSpecialUsed) {
	markedForDeathActive = true;
	markedForDeathSpecialUsed = true;
	assassinPower.play();

        criticalChanceFactor += 25;
	critLabel.textContent = "Crit Chance: " + criticalChanceFactor + " %";

displayLabel.textContent =
`🥷Marked for Death Active!🥷
+25% Crit Chance for 15 secs!`

	displayLabel.style.opacity = 1;
	displayLabel.style.background = "linear-gradient(to top, purple, black)";
	displayLabel.style.color = "white";

	setTimeout(function() {
            criticalChanceFactor -= 25;
	    displayLabel.style.opacity = 0;
	    markedForDeathActive = false;
	    critLabel.textContent = "Crit Chance: " + criticalChanceFactor + " %";

        },15000);
    }
});
// ========================================================
//🪦NEAR DEATH EXPERIENCE🪦 #NEAR-DEATH-EXPERIENCE-UPGRADE
// ========================================================
nearDeathExperience.addEventListener("click", function() {
    if(!nearDeathExperienceSpecialUsed) {
	nearDeathExperienceSpecialUsed = true;
	vikingPower.play();
        currentHealth = maxHealth;
        updateHealthValues();

displayLabel.textContent =
`🪓Near-Death Experience Activated!🪓
Health fully restored`

	displayLabel.style.opacity = 1;
	displayLabel.style.color = "white";
	displayLabel.style.background = "linear-gradient(to top, red, silver)";
    }
});
// ========================================================
//🦟 MOSQUITO UPGRADE🦟 #MOSQUITO-UPGRADE
// ========================================================
mosquitoUpgrade.addEventListener("click", function() {
    if(perks >= mosquitoRequiredPerks){
	purchaseSkill.currentTime = 0;
	purchaseSkill.play();
	perks -= mosquitoRequiredPerks;
	mosquitoRequiredPerks += 15;

	mosquitoFactor += 1;

	mosquitoPerksRequired.textContent = mosquitoRequiredPerks;
	mosquitoMagnitude.textContent = "+ " + mosquitoFactor + " HP";

	
    }
});
// ========================================================
// 👁️EYE FOR EYE UPGRADE👁️ #EYE-FOR-EYE
// ========================================================
eyeForEyeUpgrade.addEventListener("click", function() {
    if(perks >= eyeForEyeRequiredPerks) {
        perks -= eyeForEyeRequiredPerks;
	eyeForEyeRequiredPerks += 1;
	purchaseSkill.currentTime = 0;
	purchaseSkill.play();

	eyeForEyeFactor += 0.02;
	eyeForEyePercentage += 2;
	
	reflectedDamage = eyeForEyeFactor * enemyDamage;
	       
	eyeForEyePerksRequired.textContent = eyeForEyeRequiredPerks;
	eyeForEyeMagnitude.textContent = eyeForEyePercentage + " %";
	
    }
});
// ========================================================
// 🩸BLOODTHIRSTY UPGRADE🩸 #BLOODTHIRSTY-UPGRADE
// ========================================================
bloodthirstyUpgrade.addEventListener("click", function() {
    if(perks >= bloodthirstyRequiredPerks);
        perks -= bloodthirstyRequiredPerks;
	bloodthirstyRequiredPerks += 8;
	bloodthirstyFunction();
});
// ========================================================
// 💲REAL ESTATE UPGRADE #REAL-ESTATE-UPGRADE💲
// ========================================================
realEstateUpgrade.addEventListener("click", function() {
    if(perks >= realEstateRequiredPerks) {
        perks -= realEstateRequiredPerks;
	realEstateFunction();	
	updatePerks();
    }
});
