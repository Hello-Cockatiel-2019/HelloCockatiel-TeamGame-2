import inventory from './Inventory'
import damageCalculator from './Damage'
import quest from './Quest'

let sheepId=0,cowId=0,chickId=0;
// const {status, quests} = quest;

const wool = function (gs){
    const x = Phaser.Math.Between(0, 600);
    const y = Phaser.Math.Between(0, 900);
    const wool = gs.physics.add.sprite(x, y, 'wool')
    wool.setScale(0.3).setInteractive()
    setTimeout(()=>wool.destroy(),10000)
    wool.on('pointerdown', function (pointer) {
        let inventoryWool;
        inventory.wallet.money += 100;
        inventoryWool = inventory.items.wool;
        inventoryWool = inventoryWool === undefined ? 1:inventoryWool+1;
        inventory.items.wool = inventoryWool;
        // try {
        //     inventory.items.milk.push("milk");
        // } catch(err){
        //     inventory.items.milk = 1
        // }
        console.log('Inventory')
        console.log(inventory)
        quest.quests[2].condition(++quest.status.woolCount);
        console.log(quest.quests[2])
        wool.destroy()

    })
}

const egg = function (gs){
    const x = Phaser.Math.Between(0, 600);
    const y = Phaser.Math.Between(0, 900);
    const egg = gs.physics.add.sprite(x, y, 'egg')
    egg.setScale(0.3).setInteractive()
    setTimeout(()=>egg.destroy(),10000)
    egg.on('pointerdown', function (pointer) {
        let inventoryEgg;
        inventory.wallet.money += 100;
        inventoryEgg = inventory.items.egg;
        inventoryEgg = inventoryEgg === undefined ? 1:inventoryEgg+1;
        inventory.items.egg = inventoryEgg;
        // try {
        //     inventory.items.milk.push("milk");
        // } catch(err){
        //     inventory.items.milk = 1
        // }
        console.log('Inventory')
        console.log(inventory)
        quest.quests[1].condition(++quest.status.eggCount);
        console.log(quest.quests[1])
        egg.destroy()

    })
}

const milk = function (gs){
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

export const nongCowSpawner = function (gs){
    const x = Phaser.Math.Between(0, 600);
    const y = Phaser.Math.Between(0, 900);
    const cow = gs.physics.add.sprite(x, y, 'cow')
    cow.setScale(0.2).setInteractive(({ cursor: 'url(images/leaf_cursor.cur), pointer' }))
    // sheep.setSize(400,-400).setOffset(250,600)
    cow.id = cowId++;
    cow.hp = Phaser.Math.Between(3,10);
    cow.hungryMeter = 0;
    cow.anims.play('cowAni',true)
    //console.groupCollapsed(`Nong sheep no ${sheep.id}`)
    
    cow.on('pointerdown', function (pointer) {
        this.setTint(0x00ff00)
        cow.hungryMeter++
        if (cow.hungryMeter === 1) {
            cow.hungryMeter = 0
            console.log(`Nong cow no ${cow.id}: อิ่มแย้ว`);
            milk(gs)
        }
        else {
            console.log(`Nong cow no ${cow.id} `+
            `hungryMeter: ${cow.hungryMeter}`)
        }
    })
    cow.on('pointerout', function (pointer) {
        this.clearTint()
    })
    cow.on('pointerup', function (pointer) {
        this.clearTint()
    })
    cow.on("enemyOverlap", function(data) {
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
        damageCalculator(cow, damage);
        setTimeout(() => {
            this.clearTint();
        }, invisibleTime)
    });
    cow.on("enemyOverlapEnd", function() {
        this.clearTint()
    });
    console.groupEnd
    return cow;
}

export const nongChickSpawner = function (gs){
    const x = Phaser.Math.Between(0, 600);
    const y = Phaser.Math.Between(0, 900);
    const chick = gs.physics.add.sprite(x, y, 'chick')
    chick.setScale(0.2).setInteractive(({ cursor: 'url(images/leaf_cursor.cur), pointer' }))
    // sheep.setSize(400,-400).setOffset(250,600)
    chick.id = chickId++;
    chick.hp = Phaser.Math.Between(3,10);
    chick.hungryMeter = 0;
    chick.anims.play('chickAni',true)
    //console.groupCollapsed(`Nong sheep no ${sheep.id}`)
    
    chick.on('pointerdown', function (pointer) {
        this.setTint(0x00ff00)
        chick.hungryMeter++
        if (chick.hungryMeter === 1) {
            chick.hungryMeter = 0
            console.log(`Nong chick no ${chick.id}: อิ่มแย้ว`);
            egg(gs)
        }
        else {
            console.log(`Nong chick no ${chick.id} `+
            `hungryMeter: ${chick.hungryMeter}`)
        }
    })
    chick.on('pointerout', function (pointer) {
        this.clearTint()
    })
    chick.on('pointerup', function (pointer) {
        this.clearTint()
    })
    chick.on("enemyOverlap", function(data) {
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
        damageCalculator(chick, damage);
        setTimeout(() => {
            this.clearTint();
        }, invisibleTime)
    });
    chick.on("enemyOverlapEnd", function() {
        this.clearTint()
    });
    console.groupEnd
    return chick;
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
    sheep.anims.play('sheepAni',true)
    //console.groupCollapsed(`Nong sheep no ${sheep.id}`)
    
    sheep.on('pointerdown', function (pointer) {
        this.setTint(0x00ff00)
        sheep.hungryMeter++
        if (sheep.hungryMeter === 1) {
            sheep.hungryMeter = 0
            console.log(`Nong sheep no ${sheep.id}: อิ่มแย้ว`);
            wool(gs)
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

