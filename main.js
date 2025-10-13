// ========================================================
// 🎮 GAME STATE VARIABLES
// ========================================================
// -- Player Stats
let currentHealth = 100;
let maxHealth = 100;
let currentXP = 0;
let currentLevel = 1;
let perks = 0; 
let requiredXP = 100;
let playerDamage = 1;
let minDamage = 1;
let maxDamage = 10;
let heal = 10;
let active = 1;
let concentrationFactor = 1; 

const electricitySfx = document.querySelector("#electricity-sfx");

const maxVoltageUpgrade = document.querySelector("#max-voltage-upgrade");
const maxVoltageCost = document.querySelector("#max-voltage-cost");
const maxVoltageMagnitude = document.querySelector("#max-voltage-magnitude");

let maxVoltagePerksCost = 5;
let addedVoltage = 0;


const ghostButton = document.querySelector("#ghost-button");
let ghostDamageFactor = 1;
let ghostPurchased = false;


let perkCost = 100;

let goldValue = 0;
let knightQuantity = 0;

const drPerks = document.querySelector("#dr-perks");
const drMagnitude = document.querySelector("#dr-magnitude");

let drCost = 1;


let damageResistance = 1;

let baseEnemyDamage = 1;


const drButton = document.querySelector("#dr-button");
const drLabel = document.querySelector("#dr-label");




// -- Enemy Stats
let enemyDamage = 1 * damageResistance



let enemyCurrentHealth = 10;
let enemyMaxHealth = 10;

// -- Voltage System Variables
let voltage = 100;
let maxVoltage = 100;
let voltageSpeed = 1000;
let voltageLevel = 1;

// -- Intervals & Factors
let xpInterval;
let hpInterval;
let voltageInterval;
let enemyInterval;
let xpIntervalFactor = 0;
let xpFactor;
let randomXP;
let healthFactor = 0;

// -- Purchased Upgrades
let purchasedXP = false;
let purchasedHP = false;

// -- Percentages
let XPPercentage;
let HPPercentage;
let EnemyHPPercentage;

// ========================================================
// 🧍 PLAYER / ENEMY UI ELEMENTS
// ========================================================
// -- Player UI
const hp = document.querySelector("#hp");
const healthBar = document.querySelector("#health-bar");
const healthContainer = document.querySelector("#health-container");
const playerDamageLabel = document.querySelector("#player-damage");

// -- Enemy UI
const enemyHP = document.querySelector("#enemy-hp");
const enemyHealthBar = document.querySelector("#enemy-health-bar");
const enemyHealthContainer = document.querySelector("#enemy-health-container");

// -- XP / Level UI
const XPPoints = document.querySelector("#xp-points");
const XPLabel = document.querySelector("#XP");
const level = document.querySelector("#level");
const perk = document.querySelector("#perk");
const requiredXPLabel = document.querySelector("#required-xp");

// ========================================================
// 🔘 BUTTONS
// ========================================================
// -- Player Actions
const attack = document.querySelector("#attack");
const healButton = document.querySelector("#heal");

// -- Automation
const autoXP = document.querySelector("#auto-xp");
const autoHP = document.querySelector("#regenerate-hp");

// ========================================================
// 🛠 UPGRADES
// ========================================================
// -- General Upgrades
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
const defenseUpgrades = document.querySelector("#defense-upgrades");
const defenseTable = document.querySelector("#defense-table");
const corruptionTable = document.querySelector("#corruption-table");
const corruptionUpgrades = document.querySelector("#corruption-upgrades");

// -- Army / Knights
const recruitKnight = document.querySelector("#recruit-knight");
const perksRequiredLabel = document.querySelector("#perks-required");
const knightsMagnitude = document.querySelector("#knights-magnitude");
const knightsDisplay = document.querySelector("#knights-display");
const armyTable = document.querySelector("#army-table");
const armyUpgrades = document.querySelector("#army-upgrades");
const armyDps = document.querySelector("#army-damage");

// ========================================================
// ⚡ VOLTAGE SYSTEM
// ========================================================
const voltageBar = document.querySelector("#voltage-bar");
const voltageText = document.querySelector("#voltage-text");


const concentrationButton = document.querySelector("#concentration-button");
// ========================================================
// 🧩 MISC ELEMENTS
// ========================================================
// -- Health / Power
const healCost = document.querySelector("#heal-cost");
const healPower = document.querySelector("#heal-power");
const maxDamageLabel = document.querySelector("#max-damage");

// -- Misc
const mrBox = document.querySelector("#box");
const stealHP = document.querySelector("#steal-hp");
const charge = document.querySelector("#charge");
const freeze = document.querySelector("#freeze");
const devConsole = document.querySelector("#dev-console");
const levelUpButton = document.querySelector("#level-up-button");

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



// ========================================================
// 🔢 ENEMY LIST ARRAY
// ========================================================

const enemyList = [
  "RAT",
  "BAT",
  "SPIDER",
  "SNAKE",
  "LIZARD",
  "CAT",
  "DOG",
  "FERALCAT",
  "COUGAR",
  "HYENA",
  "SCORPION",
  "CRAB",
  "CROW",
  "IMP",
  "KOBOLD",
  "GOBLIN",
  "TROLL",
  "OGRE",
  "STONEGOLEM",
  "IRONOGRE",
  "SHADOWCAT",
  "FIREBAT",
  "ICEWOLF",
  "VENOMSCORPION",
  "SPIKERAT",
  "RAZORBAT",
  "SHIVERWOLF",
  "BLOODWYRM",
  "PHOENIX",
  "WYRM",
  "DRAGON",
  "DARKWRAITH",
  "VAMPIRE",
  "REVENANT",
  "BEHEMOTH",
  "HELLFIRE",
  "NIGHTDEMON",
  "VOIDDRAGON",
  "FROSTLEVIATHAN",
  "BLAZEKRAKEN",
  "TITAN",
  "COLOSSUS",
  "NIGHTFANG",
  "LEVIATHAN",
  "SPECTER",
  "ABYSS",
  "OMNIS",
  "APEX",
  "SINGULARITY",
  "EMBERCAT",
  "ICEPYTHON",
  "FIREHYENA",
  "STORMCOUGAR",
  "CRAGCRAB",
  "SKYFERALCAT",
  "IRONCROW",
  "STONEGOBLIN",
  "HELLKOBOLD",
  "DARKTROLL",
  "VOLCANOOGRE",
  "FROSTWYRM",
  "BLOODPHOENIX",
  "INFERNODRAGON",
  "NIGHTWRAITH",
  "OMNISPECTER",
  "APEXLEVIATHAN",
  "SINGULARITYBEHEMOTH",
  "ABYSSKRAKEN",
  "VOIDNIGHTFANG",
  "COSMOSREVENANT",
  "HELLFANG",
  "FIREBEAST",
  "ICEBEAST",
  "THUNDERBEAST",
  "SHADOWBEAST",
  "VOIDBEAST",
  "NIGHTBEAST",
  "APEXBEAST",
  "ULTIMABEAST",
  "CELESTIALDRAGON",
  "VOIDTITAN",
  "INFERNOTITAN",
  "ETHERWYRM",
  "COSMOSTITAN",
  "OBLIVIONBEAST",
  "ETERNALDRAGON",
  "SINGULARITYTITAN",
  "OMEGA",
  "NULL",
  "SINGULARITY"
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





function enemyDead() {
swordSlash.currentTime = 0;
    	swordSlash.play();

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
	goldValue += Math.floor(enemyMaxHealth * currentLevel - playerDamage);
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


upgrades.addEventListener("click", function() {
    if(upgradesGui.style.display === "none") {upgradesGui.style.display = "block"}

    else if(upgradesGui.style.display === "block") {upgradesGui.style.display = "none"}

});

healthUpgrades.addEventListener("click", function() {
    if(healthTable.style.display === "none") {
        healthTable.style.display = "block";

	voltageUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";
	damageUpgrades.style.display = "none";   
	armyUpgrades.style.display = "none";  
	defenseUpgrades.style.display = "none";
	corruptionUpgrades.style.display = "none";
    }

    else if(healthTable.style.display === "block") {
        healthTable.style.display = "none";

	voltageUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";
	damageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
    }
    
});

voltageUpgrades.addEventListener("click", function() {
    if(voltageTable.style.display === "none") {
        voltageTable.style.display = "block";

	healthUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";
	damageUpgrades.style.display = "none";  
	armyUpgrades.style.display = "none";  
	defenseUpgrades.style.display = "none"; 
	corruptionUpgrades.style.display = "none";
    }

    else if(voltageTable.style.display === "block") {
        voltageTable.style.display = "none";

	healthUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";
	damageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
    }
    
});

damageUpgrades.addEventListener("click", function() {
    if(damageTable.style.display === "none") {
        damageTable.style.display = "block";

	healthUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";   
	armyUpgrades.style.display = "none";  	
	defenseUpgrades.style.display = "none";
	corruptionUpgrades.style.display = "none";
    }

    else if(damageTable.style.display === "block") {
        damageTable.style.display = "none";

	healthUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";	
	armyUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
    }
    
});

xpUpgrades.addEventListener("click", function() {
    if(xpTable.style.display === "none") {
        xpTable.style.display = "block";

	healthUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";
	damageUpgrades.style.display = "none";  
	armyUpgrades.style.display = "none";
	defenseUpgrades.style.display = "none";	   
	corruptionUpgrades.style.display = "none";
	
    }

    else if(xpTable.style.display === "block") {
        xpTable.style.display = "none";

	healthUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";
	damageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
    }
    
});

//Army Upgrades open table

armyUpgrades.addEventListener("click", function() {
    if(armyTable.style.display === "none") {
        armyTable.style.display = "block";
    

        healthUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";
	damageUpgrades.style.display = "none";
 	xpUpgrades.style.display = "none";
	defenseUpgrades.style.display = "none";
	corruptionUpgrades.style.display = "none";

    }

    else if(armyTable.style.display === "block"){
        armyTable.style.display = "none";

        healthUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";
	damageUpgrades.style.display = "block";
 	xpUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
        
    }
    

});

defenseUpgrades.addEventListener("click", function() {
    if(defenseTable.style.display === "none"){
        defenseTable.style.display = "block";

	healthUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";	
	damageUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";
	armyUpgrades.style.display = "none";
	corruptionUpgrades.style.display = "none";
	
    }
    
    else if(defenseTable.style.display === "block"){
        defenseTable.style.display = "none";

	healthUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";	
	damageUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
	corruptionUpgrades.style.display = "block";
    }   

});

//Open corruption Table
corruptionUpgrades.addEventListener("click", function() {
    if(corruptionTable.style.display === "none"){
        corruptionTable.style.display = "block";

	healthUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";	
	damageUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";
	armyUpgrades.style.display = "none";
	defenseUpgrades.style.display = "none";
	
    }
    
    else if(corruptionTable.style.display === "block"){
        corruptionTable.style.display = "none";

	healthUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";	
	damageUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
	defenseUpgrades.style.display = "block";
    }   

});





function updateHealthValues() {
    	HPPercentage = (currentHealth/maxHealth) * 100;
	currentHealth = Math.round(currentHealth);
    	hp.textContent = "HP: " + currentHealth + "/" + maxHealth;
    	healthBar.style.width = HPPercentage + "%";
}

function updateEnemyHealthValues() {
    	enemyHPPercentage = (enemyCurrentHealth/enemyMaxHealth) * 100;
	enemyHP.textContent = enemyList[currentLevel-1] + " HP: " + enemyCurrentHealth + "/" + enemyMaxHealth;
    	enemyHealthBar.style.width = enemyHPPercentage + "%";
}

function updateXPValues() {
        XPPercentage = (currentXP/requiredXP) * 100;
	XPPoints.style.width = XPPercentage + "%";
	XPLabel.textContent = "XP: " + currentXP + "/" + requiredXP;
}

function updatePerks() {perk.textContent = "Perks: " + perks;}

function updateVoltageValues() {
        voltagePercentage = (voltage/maxVoltage) * 100;
        voltageBar.style.width = voltagePercentage + "%";
        voltageText.textContent = "Voltage: " + voltage + "/" + maxVoltage;

}

// Level UP button
levelUpButton.addEventListener("click", function() {
    // Check if player has enough XP
    if (currentXP >= requiredXP) {
	active = 1;
        levelUpButton.style.display = "none";
        levelUpSfx.play();

	enemyMaxHealth += (currentLevel * currentLevel);
	enemyDamage += (currentLevel);
	baseEnemyDamage += (currentLevel);
	maxHealth += 1;
	updateHealthValues();
	maxDamageLabel.textContent = "|Enemy DPS: " + enemyDamage + "|";
	
	enemyAttack();
	enemyCurrentHealth = enemyMaxHealth;
	updateEnemyHealthValues();

        currentXP = 0;
        currentLevel += 1;
        maxDamage += 3;
	perks += currentLevel ;
	perk.textContent = "|Perks: " + perks + "|";
        level.textContent = "|Level: " + currentLevel + "|";

	updateXPValues();

	requiredXP += 250 + enemyMaxHealth;
	requiredXPLabel.textContent = "|Required XP: " + requiredXP + "|";

        previousEnemyDamage = enemyDamage

        enemyDamage = 0;
	
	enemyHealthBar.style.background = "linear-gradient(to right, #a0e9ff, #70d6ff, #ccefff, #ffffff)";

        setTimeout(function() {
            enemyDamage = previousEnemyDamage;
	    enemyHealthBar.style.background = "linear-gradient(to left, green, black)";

	  
        
        
        }, 10000)


        if (currentHealth / maxHealth <= 0.5) {
            currentHealth = Math.floor(maxHealth * 0.75);
        }

        displayLabel.style.opacity = 1;
        displayLabel.textContent = "Level Up!";
        displayLabel.style.background = "linear-gradient(to bottom, yellow, orange)";

        // Hide the display label after 3 seconds
        setTimeout(function() {
            displayLabel.style.opacity = 0;
        }, 3000);
    }
});


//UPDATES TEXT OF THE HEALTH BAR
hp.textContent = "HP: " + currentHealth + "/" + maxHealth;



//LOSES HEALTH  BUT GAINS XP WHEN U PRESS ATTACK
attack.addEventListener("click", function() {




    currentXP += concentrationFactor * active;
    if(currentXP <= requiredXP) updateXPValues();

    if(currentXP > requiredXP) {
        currentXP = requiredXP;
	updateXPValues();
 
    }


    if(enemyCurrentHealth - playerDamage > 0) {
        enemyCurrentHealth -= playerDamage;
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

// HEALS UPON CLICK
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
    	hp.textContent = "HP: " + currentHealth + "/" + maxHealth;
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
        hp.textContent = "HP: " + currentHealth + "/" + maxHealth;
    }





});

let upgradesOpen = false;

//OPENS UPGRADE MENU
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

//MAX HEALTH UPGRADE
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

//HEAL UPGRADE
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

//AUTO XP UPGRADE//
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



// AUTO HARVESTS XP POINTS - 1 XP PER SEC
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

//AUTO HP UPGRADE//
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

// AUTO REGENERATES HP POINTS - 1 HP PER SEC
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
    	    hp.textContent = "HP: " + currentHealth + "/" + maxHealth;
    	    healthBar.style.width = HPPercentage + "%";
	    

        }, 1000);



    }

};

let fromLeft = 500;


// VOLTAGE BOOST UPGRADE
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

//REFILL HEALTH UPGRADE
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

const deathJokes = [
  "You died before you even got started. Truly committed to failure.",
  "Still in starter gear and already a disaster. Nice.",
  "You died so fast the tutorial didn't even load.",
  "Stepped outside and instantly regretted it. Classic rookie move.",
  "That was a perfect example of what not to do. Thanks for showing us.",
  "You had one job: survive. You failed spectacularly.",
  "Almost made it past the first trap. Almost.",
  "You fell for that? Even the rats are shaking their heads.",
  "Congrats! You earned a free dirt nap.",
  "My toaster could've dodged that. And it's not even plugged in.",
  "Epic fail. Here's some sarcastic applause.",
  "Went downhill faster than a wheelbarrow full of regrets.",
  "You're basically a walking warning sign.",
  "Defeat suits you. Like a lead jumpsuit two sizes too small.",
  "Legend? More like loading screen.",
  "You tried. Kind of. Not really.",
  "Even the scavengers are laughing. They eat trash for fun.",
  "Analyzing... Error: Tactical thinking not found.",
  "That was so bad, even the glitches are embarrassed.",
  "If failure were cash, you'd be rich.",
  "You died so fast, your logbook just says 'Oops'.",
  "NOOO! You had it! Chosen one fail!",
  "So close... then tripped over your ego.",
  "Hope lasted a second. Then you buried it.",
  "Made it here... just to lose to a rusty pipe.",
  "This was your moment. Then destiny's dumpster caught you."
];

const reincarnationIntros = [
  "Back again! You're now a slightly confused houseplant. Try not to wilt.",
  "Welcome back! You're a pigeon with trust issues.",
  "Rebooting your soul... now you're a sock behind the dryer.",
  "You're a traffic cone now. People ignore you, but you're still in the way.",
  "Next life: vending machine that eats coins.",
  "Reborn as a snail with anxiety. Good luck out there.",
  "Respawned as a haunted toaster. Burn it all.",
  "You're a cloud that only rains at weddings.",
  "Now a confused squirrel in a roundabout. May the odds be in your favor.",
  "You're a novelty mug nobody wants to drink from.",
  "Welcome back! You're a broken umbrella in a windstorm.",
  "Motivational poster in a dentist's office. Inspiring... sort of.",
  "You're a sock puppet with unresolved trauma.",
  "Now a tumbleweed in a ghost town. Symbolic.",
  "Reborn as a forgotten password. Mysterious and useless.",
  "You're a rubber duck in lava. Float with dignity.",
  "Confused GPS voice. Turn left into disappointment.",
  "A fridge magnet shaped like a banana. No one knows why.",
  "Paperclip that keeps asking if you need help.",
  "Wind chime in a hurricane. Musical chaos awaits.",
  "Half-eaten sandwich in a lunchbox apocalypse. Yum.",
  "Broken pencil in a test. Symbolic failure.",
  "Novelty doorbell that only plays sad trombone.",
  "Sock with no pair and too much ambition.",
  "Confused emoji. Sums it up."
];

// ========================================================
// 🔊 ENDING / DEATH SOUNDS ARRAY
// ========================================================
let endingSounds = [zombieAttack, deadRobot, deadWalking, wolfHowling, dramaticEnding, creepyWoman, beheading];

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
	        alert(deathJokes[currentLevel - 1]);
	        alert(reincarnationIntros[currentLevel-1]);

                location.reload();
            }, 5000);

        }
 
        else{
            currentHealth -= enemyDamage;
	    updateHealthValues();
        }


    },1000);


}

enemyAttack();

//ATTACK UPGRADE
upgradeDamage.addEventListener("click", function() {
    if(perks >= 1) {

    	purchaseSkill.currentTime = 0;
    	purchaseSkill.play();

        perks -= 1;
        playerDamage += 1 * ghostDamageFactor;
	updatePerks();
	playerDamageLabel.textContent = "|Player Damage: " + playerDamage + "|";
	upgradeDamageMagnitude.textContent = "- " + playerDamage + " HP";
        
   
    }

});


//VAMPIRISM UPGRADE
stealHP.addEventListener("click", function() {
    if(perks >= 1) {
        perks-= 1;

    	purchaseSkill.currentTime = 0;
    	purchaseSkill.play();

        perk.textContent = "Perks: " + perks;
        healthFactor += 1;
	stealHpMagnitude.textContent = "Absorbs: " + healthFactor + " HP";
    }

});


//RECHARGE VOLTAGE
charge.addEventListener("click", function() {
    voltage += 1;
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

freeze.addEventListener("click", function() {
    if(voltage >= maxVoltage) {
	voltage = 0;
        previousEnemyDamage = enemyDamage

        enemyDamage = 0;
	
	enemyHealthBar.style.background = "linear-gradient(to right, #a0e9ff, #70d6ff, #ccefff, #ffffff)";

        setTimeout(function() {
            enemyDamage = previousEnemyDamage;
	    enemyHealthBar.style.background = "linear-gradient(to left, green, black)";

	  
        
        
        }, 10000)
    }

});



//MR BOXXY WOXXY

document.addEventListener("keydown", function(event) {
    key = event.key;

    if(key === "ArrowLeft") {fromLeft -= 5}
    if(key === "ArrowRight") {fromLeft += 5}

    mrBox.style.left = fromLeft + "px";

});


//DEV COMMANDS

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



// KNIGHT FUNCTION
function knightAttack() {
    armyDamage += 1;
    clearInterval(knightInterval);
    knightInterval = setInterval(function() {
	enemyCurrentHealth -= armyDamage;
	updateEnemyHealthValues();


	if(enemyCurrentHealth <= 0) {
	    enemyCurrentHealth = enemyMaxHealth;
	    updateEnemyHealthValues();
	    enemyDead();
	
        }
	

    }, 1000);


}


// RECRUIT KNIGHT


recruitKnight.addEventListener("click", function() {
    if(perks >= knightsPerksRequired ) {
        perks -= knightsPerksRequired;

    	purchaseSkill.currentTime = 0;
    	purchaseSkill.play();

        knightsPerksRequired += 5 * currentLevel;
	knightQuantity += 1;
	let armyTextDamage = armyDamage + 1;
	armyDps.textContent = "|Army DPS: " + armyTextDamage + "|";
	knightsDisplay.textContent = "Army Size: " + "⚔️" + " x" + knightQuantity;

	updatePerks();
	knightAttack();

	perksRequiredLabel.textContent = knightsPerksRequired;
	knightsMagnitude.textContent = knightQuantity + " Knights"; 
        
	
	
    }



});

buyPerk.addEventListener("click", function() {
    if(goldValue >= perkCost) {
        goldValue -= perkCost;
        perks += 1;
	perkCost += Math.floor((requiredXP/2) + 100);
        
        gold.textContent = "Gold: " + goldValue;
	buyPerk.textContent = "Buy Perk: " + perkCost + " Gold";
        updatePerks();
    }
    

});


drCost = 10;

drButton.addEventListener("click", function() {
    if(perks >= drCost) {
        purchaseSkill.currentTime = 0;
        purchaseSkill.play();

        perks -= drCost;
	drCost *= 3;
	drCost -= 15;
	damageResistance += 5;
	
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

concentrationButton.addEventListener("click", function() {
    if(perks >= concentrationPerks) {
        perks -= concentrationPerks;
	concentrationFactor += 1;
	concentrationPerksLabel.textContent = concentrationPerks;
	concentrationMagnitude.textContent = "+" + concentrationFactor + " XP/Hit";


	updatePerks();
    }

});

const ghostMagnitude = document.querySelector("#ghost-magnitude");


ghostButton.addEventListener("click", function() {
    if(!ghostPurchased && playerDamage >= 2) {
 
    ghostWhisper.play();
    
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

