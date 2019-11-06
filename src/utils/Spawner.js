import inventory from './Inventory'
import damageCalculator from './Damage'
import quest from './Quest'

let sheepId=0;
// const {status, quests} = quest;

export const milk = function (gs){
    const x = Phaser.Math.Between(0, 600);
    const y = Phaser.Math.Between(0, 900);
    const milk = gs.physics.add.sprite(x, y, 'milk')
    milk.setScale(0.3).setInteractive()
    setTimeout(()=>milk.destroy(),10000)
    milk.on('pointerdown', function (pointer) {
        let inventoryMilk;
        inventory.wallet.money += 100;
        inventoryMilk = inventory.items.milk;
        inventoryMilk = inventoryMilk === undefined ? 1:inventoryMilk+1;
        inventory.items.milk = inventoryMilk;
        // try {
        //     inventory.items.milk.push("milk");
        // } catch(err){
        //     inventory.items.milk = 1
        // }
        console.log('Inventory')
        console.log(inventory)
        quest.quests[3].condition(++quest.status.milkCount);
        console.log(quest.quests[3])
        milk.destroy()

    })
}

export const nongSheepSpawner = function (gs){
    const x = Phaser.Math.Between(0, 600);
    const y = Phaser.Math.Between(0, 900);
    const sheep = gs.physics.add.sprite(x, y, 'sheep')
    sheep.setScale(0.2).setInteractive(({ cursor: 'url(images/leaf_cursor.cur), pointer' }))
    // sheep.setSize(400,-400).setOffset(250,600)
    sheep.id = sheepId++;
    sheep.hp = Phaser.Math.Between(3,10);
    sheep.hungryMeter = 0;
    //console.groupCollapsed(`Nong sheep no ${sheep.id}`)
    
    sheep.on('pointerdown', function (pointer) {
        this.setTint(0x00ff00)
        sheep.hungryMeter++
        if (sheep.hungryMeter === 10) {
            sheep.hungryMeter = 0
            console.log(`Nong sheep no ${sheep.id}: อิ่มแย้ว`);
            milk(gs)
        }
        else {
            console.log(`Nong sheep no ${sheep.id} `+
            `hungryMeter: ${sheep.hungryMeter}`)
        }
    })
    sheep.on('pointerout', function (pointer) {
        this.clearTint()
    })
    sheep.on('pointerup', function (pointer) {
        this.clearTint()
    })
    sheep.on("enemyOverlap", function(data) {
        const {enemyName, invisibleTime} = data;
        let damage = 0;
        this.setTint(0xff0000)
        switch(enemyName){
            case "nong":
                damage = 1;
                break;
            default:
                break;
        }
        damageCalculator(sheep, damage);
        setTimeout(() => {
            this.clearTint();
        }, invisibleTime)
    });
    sheep.on("enemyOverlapEnd", function() {
        this.clearTint()
    });
    console.groupEnd
    return sheep;
}

export const nongSpawner = function (gs){
    const x = Phaser.Math.Between(0, 600);
    const y = Phaser.Math.Between(0, 900);
    let hp = Phaser.Math.Between(2, 10); //ค่า HP
    const enemy = gs.physics.add.sprite(x, y, 'enemy')
        .setScale(0.1).setInteractive(({ cursor: 'url(images/sword.ani), pointer' }))
    enemy.setVelocity(100, 200).setBounce(0.9)
    enemy.setCollideWorldBounds(true)
    enemy.setSize(500,-500).setOffset(-20,600)
    
    enemy.on('pointerdown', function (pointer) {
        this.setTint(0xff0000)
        hp--
        if (hp === 0) {
            quest.status.killCount++;
            quest.quests[0].condition(++quest.status.killCount);
            enemy.destroy()
            //enemy.input.off('pointerdown', ClickNuke)
        }
        else {
            enemy.setVelocity(Phaser.Math.Between(-300, 300), -600)
        }
    })
    enemy.on('pointerout', function (pointer) {
        this.clearTint()
    })
    enemy.on('pointerup', function (pointer) {
        this.clearTint()
    })
    return enemy;
}

