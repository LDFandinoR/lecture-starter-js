import controls from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
    return new Promise(resolve => {
        // resolve the promise with the winner when fight is over
        
    });
}

export function getDamage(attacker, defender) {
    const damage = getHitPower(attacker) - getBlockPower(defender)
    if (damage > 0) {
        return damage
    } else {return 0}
    // return damage
}

export function getHitPower(fighter) {
    const criticalHitChance = getRandomFloatFromRange(1, 2);
    const hitPower = fighter.attack * criticalHitChance;
    // return hit power
    return hitPower
}

export function getBlockPower(fighter) {
    const dodgeChance = getRandomFloatFromRange(1, 2);
    const blockPower = fighter.defense * dodgeChance;
    // return block power
    return blockPower
}
