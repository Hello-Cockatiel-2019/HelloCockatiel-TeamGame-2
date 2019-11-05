const damageCalculator = (object, damage) => {
    object.hp -= damage;
    if(object.hp <= 0){
        object.destroy();
    }


export default damageCalculator;