
//VARIABLES
let xpInterval;
let hpInterval;

let voltageInterval;
let voltageSpeed = 1000;
let voltageLevel = 1;

let purchasedXP = false;
let purchasedHP = false;


let currentHealth = 100;
let maxHealth = 100;
let currentXP = 0;
let currentLevel = 1;
let perks = 0;

let requiredXP = 100;

let XPPercentage;
let HPPercentage;

let voltage = 100;
let maxVoltage = 100;

let heal = 20;

let minDamage = 1;
let maxDamage = 10;



//REFERENCING OUR ELEMENTS
const hp = document.querySelector("#hp");
const attack = document.querySelector("#attack");
const healthBar = document.querySelector("#health-bar");
const healthContainer = document.querySelector("#health-container");

const XPPoints = document.querySelector("#xp-points");
const XPLabel = document.querySelector("#XP");
const level = document.querySelector("#level");
const perk = document.querySelector("#perk");

const upgrades = document.querySelector("#upgrades");
const upgradesGUI = document.querySelector("#upgrades-gui");

const maxHealthUpgrade = document.querySelector("#max-health-upgrade");
const healUpgrade = document.querySelector("#heal-upgrade");

const voltageBar = document.querySelector("#voltage-bar");
const voltageText = document.querySelector("#voltage-text");

const healButton = document.querySelector("#heal");
const healCost = document.querySelector("#heal-cost");
const healPower = document.querySelector("#heal-power");

const regenHP = document.querySelector("#heal-power");

const armourUpgrade = document.querySelector("#armour-upgrade");
const maxDamageLabel = document.querySelector("#max-damage");

const autoXP = document.querySelector("#auto-xp");
const requiredXPLabel = document.querySelector("#required-xp");

const autoHP = document.querySelector("#regenerate-hp");

const mrBox = document.querySelector("#box");

const voltageUpgrade = document.querySelector("#voltage-upgrade");

//UPDATES TEXT OF THE HEALTH BAR
hp.textContent = "HP: " + currentHealth + "/" + maxHealth;


//LOSES HEALTH  BUT GAINS XP WHEN U PRESS ATTACK
attack.addEventListener("click", function(event) {
	event.preventDefault();
	

//CALCULATES RANDOM XP GAINED AND HP LOST
    randomDamage = Math.floor(Math.random() * maxDamage + minDamage);
    randomXP = Math.floor(Math.random() * 50 + 1)
    console.log(randomDamage);
    console.log(randomXP);


//UPDATES XP VALUES
    currentXP += randomXP;
    XPPercentage = (currentXP/requiredXP) * 100;
    XPPoints.style.width = XPPercentage + "%";
    XPLabel.textContent = "XP: " + currentXP + "/" + requiredXP;


//CHECKS IF A NEW LEVEL HAS BEEN REACHED
    if(randomXP + currentXP >= requiredXP) {
        currentXP = 0;
        currentLevel += 1;
        maxDamage += 3;
	perks += 1;
	perk.textContent = "|Perks: " + perks + "|";
        level.textContent = "|Level: " + currentLevel + "|";

        maxDamageLabel.textContent = "|Max Damage Taken: " + maxDamage + " HP" + "|";

        XPPercentage = (currentXP/requiredXP) * 100;
	XPPoints.style.width = XPPercentage + "%";
        requiredXP += 50;
	XPLabel.textContent = "XP: " + currentXP + "/" + requiredXP;

      
	requiredXPLabel.textContent = "|Required XP: " + requiredXP + "|";

	let width = parseInt(mrBox.style.width);
	let height = parseInt(mrBox.style.height);

	width = width + 10 + "px";
	height = height + 10 + "px";

	mrBox.style.width = width;
	mrBox.style.height = height;

	
    }
    
//UPDATES HP VALUES
    currentHealth -= randomDamage;
    if(currentHealth <= 0) {
        currentHealth = 0
        healthContainer.style.backgroundColor = "black";

        setTimeout(function() {
	    alert("You have died");
	    location.reload();

        }, 250);
     }

     else if(currentHealth <= 5) {
         alert("WARNING: YOU ARE NEAR DEATH!");
     



    }
     


    HPPercentage = (currentHealth/maxHealth) * 100;
    hp.textContent = "HP: " + currentHealth + "/" + maxHealth;
    healthBar.style.width = HPPercentage + "%";





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
    heal += 10;


    healPower.textContent = "|Heal Power: " + heal + " HP " + "|";
    perk.textContent = "Perks: " + perks;

   
    }

});

//ARMOUR UPGRADE
armourUpgrade.addEventListener("click", function() {
    if(perks >= 1) {
        perks -= 1;
    maxDamage -= 4;

    maxDamageLabel.textContent = "|Max Damage Taken: " + maxDamage + " HP" + "|";
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







//MR BOXXY WOXXY

document.addEventListener("keydown", function(event) {
    key = event.key;
    event.preventDefault();

    if(key === "ArrowLeft") {fromLeft -= 5}
    if(key === "ArrowRight") {fromLeft += 5}

    mrBox.style.left = fromLeft + "px";

});





