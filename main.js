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

let fireballBought = false;
let fireballDamage = 5;

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
let guardianRequiredPerks = 7;
let guardianChance = 0;
let guardianFactor = 1;

let presentPlayerDamage;

let mageInterval;
let mageFuryActivated = false;

let specialUsed = false;

