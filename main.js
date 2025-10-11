// ========================================================
// 🎮 GAME VARIABLES
// ========================================================
let xpInterval;
let hpInterval;
let voltageInterval;
let enemyInterval;
let xpIntervalFactor = 0;

let enemyDamage = 1;

let voltageSpeed = 1000;
let voltageLevel = 1;

let purchasedXP = false;
let purchasedHP = false;

let xpFactor;
let randomXP;

let healthFactor = 0;

let currentHealth = 100;
let maxHealth = 100;
let currentXP = 0;
let currentLevel = 1;
let perks = 0; // 💎 GOD-TIER PERKS

let requiredXP = 100;
let voltage = 100;
let maxVoltage = 100;

let heal = 10;
let minDamage = 1;
let maxDamage = 10;

let XPPercentage;
let HPPercentage;

let EnemyHPPercentage;
let enemyCurrentHealth = 10;
let enemyMaxHealth = 10;

let playerDamage = 1;


// ========================================================
// 🧍 PLAYER / ENEMY UI ELEMENTS
// ========================================================
const hp = document.querySelector("#hp");
const healthBar = document.querySelector("#health-bar");
const healthContainer = document.querySelector("#health-container");
const playerDamageLabel = document.querySelector("#player-damage");

const enemyHP = document.querySelector("#enemy-hp");
const enemyHealthBar = document.querySelector("#enemy-health-bar");
const enemyHealthContainer = document.querySelector("#enemy-health-container");

const XPPoints = document.querySelector("#xp-points");
const XPLabel = document.querySelector("#XP");
const level = document.querySelector("#level");
const perk = document.querySelector("#perk");
const requiredXPLabel = document.querySelector("#required-xp");


// ========================================================
// 🔘 BUTTONS / ACTIONS
// ========================================================
const attack = document.querySelector("#attack");
const healButton = document.querySelector("#heal");
const autoXP = document.querySelector("#auto-xp");
const autoHP = document.querySelector("#regenerate-hp");


// ========================================================
// 🛠 UPGRADES
// ========================================================
const upgrades = document.querySelector("#upgrades");
const upgradesGUI = document.querySelector("#upgrades-gui");

const upgradeDamage = document.querySelector("#upgrade-damage");

const maxHealthUpgrade = document.querySelector("#max-health-upgrade");
const healUpgrade = document.querySelector("#heal-upgrade");
const refillHealthUpgrade = document.querySelector("#refill-health");
const voltageUpgrade = document.querySelector("#voltage-upgrade");
const zombieAttack = document.querySelector("#zombie-attack");


// ========================================================
// ⚡ VOLTAGE SYSTEM
// ========================================================
const voltageBar = document.querySelector("#voltage-bar");
const voltageText = document.querySelector("#voltage-text");


// ========================================================
// 🧩 MISC ELEMENTS
// ========================================================
const healCost = document.querySelector("#heal-cost");
const healPower = document.querySelector("#heal-power");
// const regenHP = document.querySelector("#heal-power"); // ❌ duplicate
const maxDamageLabel = document.querySelector("#max-damage");
const mrBox = document.querySelector("#box");

const stealHP = document.querySelector("#steal-hp");

const charge = document.querySelector("#charge");
const freeze = document.querySelector("#freeze");

const devConsole = document.querySelector("#dev-console");
const swordSlash = document.querySelector("#sword-slash");
swordSlash.volume = 0.2;

const levelUpSfx = document.querySelector("#level-up-sfx");
const displayLabel = document.querySelector("#display-label");

const armyTable = document.querySelector("#army-table");

// ========================================================
// 🔢 MAGNITUDE ELEMENTS (MOTIVATION BOOSTERS!)
// ========================================================
const refillHealthMagnitude = document.querySelector("#refill-health-magnitude");
const maxHealthMagnitude = document.querySelector("#max-health-magnitude");
const healUpgradeMagnitude = document.querySelector("#heal-upgrade-magnitude");
const regenerateHpMagnitude = document.querySelector("#regenerate-hp-magnitude");
const stealHpMagnitude = document.querySelector("#steal-hp-magnitude");

const autoXpMagnitude = document.querySelector("#auto-xp-magnitude");

const voltageUpgradeMagnitude = document.querySelector("#voltage-upgrade-magnitude");

const upgradeDamageMagnitude = document.querySelector("#upgrade-damage-magnitude");


const armyUpgrades = document.querySelector("#army-upgrades");


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
    }

    else if(healthTable.style.display === "block") {
        healthTable.style.display = "none";

	voltageUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";
	damageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
    }
    
});

voltageUpgrades.addEventListener("click", function() {
    if(voltageTable.style.display === "none") {
        voltageTable.style.display = "block";

	healthUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";
	damageUpgrades.style.display = "none";  
	armyUpgrades.style.display = "none";   
    }

    else if(voltageTable.style.display === "block") {
        voltageTable.style.display = "none";

	healthUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";
	damageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
    }
    
});

damageUpgrades.addEventListener("click", function() {
    if(damageTable.style.display === "none") {
        damageTable.style.display = "block";

	healthUpgrades.style.display = "none";
	xpUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";   
	armyUpgrades.style.display = "none";  
    }

    else if(damageTable.style.display === "block") {
        damageTable.style.display = "none";

	healthUpgrades.style.display = "block";
	xpUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";	
	armyUpgrades.style.display = "block";
    }
    
});

xpUpgrades.addEventListener("click", function() {
    if(xpTable.style.display === "none") {
        xpTable.style.display = "block";

	healthUpgrades.style.display = "none";
	voltageUpgrades.style.display = "none";
	damageUpgrades.style.display = "none";  
	armyUpgrades.style.display = "none";	   
    }

    else if(xpTable.style.display === "block") {
        xpTable.style.display = "none";

	healthUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";
	damageUpgrades.style.display = "block";
	armyUpgrades.style.display = "block";
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
    }

    else if(armyTable.style.display === "block"){
        armyTable.style.display = "none";

        healthUpgrades.style.display = "block";
	voltageUpgrades.style.display = "block";
	damageUpgrades.style.display = "block";
 	xpUpgrades.style.display = "block";
        
    }
    

});




function updateHealthValues() {
    	HPPercentage = (currentHealth/maxHealth) * 100;
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

//UPDATES TEXT OF THE HEALTH BAR
hp.textContent = "HP: " + currentHealth + "/" + maxHealth;



//LOSES HEALTH  BUT GAINS XP WHEN U PRESS ATTACK
attack.addEventListener("click", function() {



    currentXP += 1 * currentLevel;
    updateXPValues();


    if(enemyCurrentHealth - playerDamage > 0) {
        enemyCurrentHealth -= playerDamage;
	updateEnemyHealthValues();
    
    }

    else{

    	swordSlash.currentTime = 0;
    	swordSlash.play();
		
        enemyCurrentHealth = enemyMaxHealth;
	currentHealth += healthFactor;
	updateEnemyHealthValues();
	
	xpFactor = 50 + (currentLevel * 5)
        randomXP = Math.floor(Math.random() * xpFactor + 1)
	currentXP += randomXP; 
	updateXPValues();

        displayLabel.style.opacity = 1;
	displayLabel.style.background = "linear-gradient(to bottom, yellow, orange)";
	displayLabel.textContent = "Gained: " + randomXP + " XP";


       setTimeout(function() {
	   displayLabel.style.opacity = 0;
        
       }, 3000);
    }

    if(currentHealth >= maxHealth) currentHealth = maxHealth;








//CHECKS IF A NEW LEVEL HAS BEEN REACHED
    if(currentXP >= requiredXP) {
	levelUpSfx.play();

	displayLabel.style.opacity = 1;
	displayLabel.textContent = "Level Up!";
	displayLabel.style.background = "linear-gradient(to bottom, yellow, orange)";


	setTimeout(function() {
	    displayLabel.style.opacity = 0;
	    
      
        },3000)

	
	

	enemyMaxHealth += (currentLevel * 10 );
	enemyDamage += currentLevel;
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

	requiredXP += 150;
	requiredXPLabel.textContent = "|Required XP: " + requiredXP + "|";

	
    }
    

     








});

// HEALS UPON CLICK
healButton.addEventListener("click", function() {

    
    if(heal + currentHealth <= maxHealth && voltage >= 25) {
        currentHealth += heal;

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
const xpPerksRequiredText = document.querySelector("#xp-perks-required");

//AUTO XP UPGRADE//
autoXP.addEventListener("click", function() {
    if(perks >= xpPerksRequired) {
        perks -= xpPerksRequired;	
	xpPerksRequired += 1;
    autoMineXP();
    xpIntervalFactor += 1;
    autoXpMagnitude.textContent = "+ " + xpIntervalFactor + " XP/s";
    xpPerksRequiredText.textContent = xpPerksRequired;

	

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
    autoMineHP();
    autoHP.textContent = "OUT OF STOCK";

	

    perk.textContent = "Perks: " + perks;

   
    }

});

let hpRegen = 0;


// AUTO REGENERATES HP POINTS - 1 HP PER SEC
function autoMineHP() {
    hpRegen += 1;
    regenerateHpMagnitude.textContent = "+ " + hpRegen + "/s";

    
    if(!hpInterval && currentHealth <= maxHealth){
        hpInterval = setInterval(function() {
            currentHealth += 1;
	   

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
        voltageLevel += 1;
        perks -= 3;
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

//REFILL HEALTH UPGRADE
refillHealthUpgrade.addEventListener("click", function() {

    if(perks >= 3 && currentHealth < maxHealth) {
        perks -= 3;
	
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
    // Level 1 death – super brutal
    "Wow, you didnt even get out of those nappies of yours. Pff.",

    // Random deaths
    "Well... at least you did something with your life... kinda.",
    "Come on?? Really? Fine, here's a restart... sigh. Was hoping you'd do it this time but nahh.",
    "NOOO! NOOO! You had him! I... I DONT MESS THIS ONE UP!",
    "Oops! That was almost impressive. Almost.",
    "Seriously? You fell for that? Pathetic.",
    "Congrats! You discovered a new way to fail!",
    "You call that playing? My grandma could do better. And she's a cactus.",
    "Wow, epic fail! Did you even see that coming?",
    "Well, that escalated poorly.",
    "You're like a human tutorial on how NOT to play.",
    "Ah, the sweet smell of defeat... it's all you.",
    "Legend? More like lagend.",
    "You tried. Sort of. Maybe.",
    "I've seen NPCs with better reflexes than you.",
    "Recalculating your life choices... done. Try again."
];
                                                                                                  


function enemyAttack() {
    clearInterval(enemyInterval);

    enemyInterval = setInterval(function() {
        if(currentHealth <= 0) {
	    zombieAttack.play();
	    document.body.style.backgroundColor = "black";

	    currentHealth = 0;
	    clearInterval(enemyInterval);
            alert("You Have Died!");
	    alert(deathJokes[currentLevel - 1]);
		

            location.reload();
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
        perks -= 1;
        playerDamage += 1;
	updatePerks();
	playerDamageLabel.textContent = "|Player Damage: " + playerDamage + "|";
	upgradeDamageMagnitude.textContent = "- " + playerDamage + " HP";
        
   
    }

});


//VAMPIRISM UPGRADE
stealHP.addEventListener("click", function() {
    if(perks >= 1) {
        perks-= 1;
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
            perks += 1000;
            updatePerks();
        }

        if(devConsole.value === "hack health") {
            maxHealth += 1000;
            updateHealthValues();
        }

        if(devConsole.value === "hack level") {
            currentXP = requiredXP;
            updateXPValues();
        }

        if(devConsole.value === "death") {
	    currentHealth = 0;
            updateHealthValues();
        }
    }
    

});
















