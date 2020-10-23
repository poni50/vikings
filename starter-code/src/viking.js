// Soldier
class Soldier {
    health;
    strength;

    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {

    name;

    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health <= 0) {
            return this.name + " has died in act of combat";
        } else {
            return this.name + " has received " + damage + " points of damage";
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage) {
        this.health -= damage;

        if (this.health <= 0) {
            return "A Saxon has died in combat";
        } else {
            return "A Saxon has received " + damage + " points of damage";
        }
    }
}

// War
class War {
    vikingArmy;
    saxonArmy;

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }

    randomCharFromArray(items) {
        return Math.floor(Math.random() * items.length);
    }

    vikingAttack() {
        let saxonIndex = this.randomCharFromArray(this.saxonArmy);

        let result = this.saxonArmy[saxonIndex].receiveDamage(this.vikingArmy[this.randomCharFromArray(this.vikingArmy)].strength);
        if (result == "A Saxon has died in combat") {
            this.saxonArmy.splice(saxonIndex, 1);
        }

        return result;
    }
    saxonAttack() {

        let vikingIndex = this.randomCharFromArray(this.vikingArmy);

        let result = this.vikingArmy[vikingIndex].receiveDamage(this.saxonArmy[this.randomCharFromArray(this.saxonArmy)].strength);
        if (result == this.vikingArmy[vikingIndex].name + " has died in act of combat") {
            this.vikingArmy.splice(vikingIndex, 1);
        }

        return result;
    }
    showStatus() {
        if (this.vikingArmy.length == 0) {
            return "Saxons have fought for their lives and survive another day...";
        }

        if (this.saxonArmy.length == 0) {
            return "Vikings have won the war of the century!";
        }

        return "Vikings and Saxons are still in the thick of battle.";
    }
}