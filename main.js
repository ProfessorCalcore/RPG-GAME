// ========== GAME VARIABLES ==========
let xpInterval;
let hpInterval;
let voltageInterval;
let enemyInterval;

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
let perks = 0;

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



// ========== PLAYER / ENEMY UI ==========
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


// ========== BUTTONS / ACTIONS ==========
const attack = document.querySelector("#attack");
const healButton = document.querySelector("#heal");
const autoXP = document.querySelector("#auto-xp");
const autoHP = document.querySelector("#regenerate-hp");


// ========== UPGRADES ==========
const upgrades = document.querySelector("#upgrades");
const upgradesGUI = document.querySelector("#upgrades-gui");
const upgradeDamage = document.querySelector("#upgrade-damage");

const maxHealthUpgrade = document.querySelector("#max-health-upgrade");
const healUpgrade = document.querySelector("#heal-upgrade");
const refillHealthUpgrade = document.querySelector("#refill-health");
const armourUpgrade = document.querySelector("#armour-upgrade");
const voltageUpgrade = document.querySelector("#voltage-upgrade");


// ========== VOLTAGE SYSTEM ==========
const voltageBar = document.querySelector("#voltage-bar");
const voltageText = document.querySelector("#voltage-text");


// ========== MISC ELEMENTS ==========
const healCost = document.querySelector("#heal-cost");
const healPower = document.querySelector("#heal-power");
const regenHP = document.querySelector("#heal-power"); // duplicate ref? maybe remove later
const maxDamageLabel = document.querySelector("#max-damage");
const mrBox = document.querySelector("#box");




function updateHealthValues() {
    	HPPercentage = (currentHealth/maxHealth) * 100;
    	hp.textContent = "HP: " + currentHealth + "/" + maxHealth;
    	healthBar.style.width = HPPercentage + "%";
}

function updateEnemyHealthValues() {
    	enemyHPPercentage = (enemyCurrentHealth/enemyMaxHealth) * 100;
    	enemyHP.textContent = "Enemy HP: " + enemyCurrentHealth + "/" + enemyMaxHealth;
    	enemyHealthBar.style.width = enemyHPPercentage + "%";
}

function updateXPValues() {
        XPPercentage = (currentXP/requiredXP) * 100;
	XPPoints.style.width = XPPercentage + "%";
	XPLabel.textContent = "XP: " + currentXP + "/" + requiredXP;
}

function updatePerks() {perk.textContent = "Perks: " + perks;}

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
		
        enemyCurrentHealth = enemyMaxHealth;
        currentHealth += 5
	currentHealth += healthFactor;
	updateEnemyHealthValues();
	
	xpFactor = 50 + (currentLevel * 5)
        randomXP = Math.floor(Math.random() * xpFactor + 1)
	currentXP += randomXP; 
	updateXPValues();
    }

    if(currentHealth >= maxHealth) currentHealth = maxHealth;









//CHECKS IF A NEW LEVEL HAS BEEN REACHED
    if(currentXP >= requiredXP) {
	
	enemyMaxHealth += 15;
	enemyDamage += 1;
	maxDamageLabel.textContent = "|Enemy DPS: " + enemyDamage + "|";
	
	enemyAttack();
	enemyCurrentHealth = enemyMaxHealth;
	updateEnemyHealthValues();


        currentXP = 0;
        currentLevel += 1;
        maxDamage += 3;
	perks += 3;
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

//MAX HEALTH UPGRADE
maxHealthUpgrade.addEventListener("click", function() {
    if(perks >= 1) {
        perks -= 1;
    maxHealth += 10;

    HPPercentage = (currentHealth/maxHealth) * 100;
    hp.textContent = "HP: " + currentHealth + "/" + maxHealth;
    healthBar.style.width = HPPercentage + "%";

    perk.textContent = "Perks: " + perks;

   
    }

});

//HEAL UPGRADE
healUpgrade.addEventListener("click", function() {
    if(perks >= 1) {
        perks -= 1;
    heal += 5;


    healPower.textContent = "|Heal Power: " + heal + " HP " + "|";
    perk.textContent = "Perks: " + perks;

   
    }

});

//ARMOUR UPGRADE
armourUpgrade.addEventListener("click", function() {
    if(perks >= 3) {
        perks -= 3;
    enemyDamage -=1;

    maxDamageLabel.textContent = "|Enemy DPS: " + enemyDamage + "|";
    perk.textContent = "Perks: " + perks;

   
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

        if(voltage < maxVoltage) {
            voltage += voltageLevel;
            voltagePercentage = (voltage/maxVoltage) * 100;
            voltageBar.style.width = voltagePercentage + "%";
            voltageText.textContent = "Voltage: " + voltage + "/" + maxVoltage;
        }

    }, voltageSpeed);

}

runVoltageLoop();



//AUTO XP UPGRADE//
autoXP.addEventListener("click", function() {
    if(perks >= 2 && !purchasedXP) {
        purchasedXP = true;
        perks -= 2;
    autoMineXP();
    autoXP.textContent = "OUT OF STOCK";

	

    perk.textContent = "Perks: " + perks;

   
    }

});


// AUTO HARVESTS XP POINTS - 1 XP PER SEC
function autoMineXP() {
    if(!xpInterval){
        xpInterval = setInterval(function() {
            currentXP += 1;
            XPPercentage = (currentXP/requiredXP) * 100;
	    XPPoints.style.width = XPPercentage + "%";
	    XPLabel.textContent = "XP: " + currentXP + "/" + requiredXP;
        }, 1000);

    }

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


// AUTO REGENERATES HP POINTS - 1 HP PER SEC
function autoMineHP() {
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
    if(perks >= 3){
        voltageLevel += 1;
        perks -= 3;
        runVoltageLoop();
	perk.textContent = "Perks: " + perks;
            
    }

});

//REFILL HEALTH UPGRADE
refillHealthUpgrade.addEventListener("click", function() {

    if(perks >= 3 && currentHealth < maxHealth) {
        perks -= 3;
        currentHealth = maxHealth;
        perk.textContent = "Perks: " + perks;
	updateHealthValues();

    
    }

});


function enemyAttack() {
    clearInterval(enemyInterval);

    enemyInterval = setInterval(function() {
        if(currentHealth <= 0) {
	    document.body.style.backgroundColor = "black";

	    currentHealth = 0;
	    clearInterval(enemyInterval);
            alert("You Have Died!");
            location.reload();
        }
 
        else{
            currentHealth -= enemyDamage;
	    updateHealthValues();
        }


    },1000);


}

enemyAttack();

upgradeDamage.addEventListener("click", function() {
    if(perks >= 1) {
        perks -= 1;
        playerDamage += 2;
	updatePerks();
	playerDamageLabel.textContent = "|Player Damage: " + playerDamage + "|";
        
   
    }

});



//MR BOXXY WOXXY

document.addEventListener("keydown", function(event) {
    key = event.key;
    event.preventDefault();

    if(key === "ArrowLeft") {fromLeft -= 5}
    if(key === "ArrowRight") {fromLeft += 5}

    mrBox.style.left = fromLeft + "px";

});









