import {
    nongSpawner,
    nongSheepSpawner
} from "../utils/Spawner"

import damageCalculator from "../utils/Damage"
import inventory from "../utils/Inventory"
import {default as qest} from "../utils/Quest";

let enemy, sheep
let bg, pointerdown,info,timer,text
let keeper, menu, shop, quest,main ,Ricefilde
let killMonster, collectEgg, collectWool, collectMilk;

class GameScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'GameScene'
        })
    }

    preload() {
        this.load.image('bg', 'images/GameplayBG.png')
        this.load.spritesheet('enemy', 'images/enemy.png', { frameWidth: 582, frameHeight: 691 })
        this.load.image('sheep','images/sheep.png')
        this.load.image('milk','images/milk.png')
        this.load.image('keeper','images/keeper.png')
        this.load.image('menu','images/Menu.png')
        this.load.image('shop','images/Shop.png')
        this.load.image('quest','images/Quest.png')
        this.load.image('main','images/MaintainSign.png')
        this.load.image('Ricefilde','images/Ricefilde.png')
        
    }

    create() {
        bg = this.add.image(0, 0, 'bg').setOrigin(0,0).setScale(0.5)
        keeper = this.add.image(1800,200, 'keeper').setOrigin(0,0).setScale(2)
        quest = this.add.image(0,0, 'quest').setOrigin(0,0).setScale(2)
        main = this.add.image(500,0, 'main').setOrigin(0,0).setScale(2)
        shop = this.add.image(1900,0, 'shop').setOrigin(0,0).setScale(2)
        menu = this.add.image(2150,0, 'menu').setOrigin(0,0).setScale(0.5)
        Ricefilde = this.add.image(1600,1100, 'Ricefilde').setOrigin(0,0).setScale(2)
        // enemy = this.physics.add.sprite(250, 150, 'enemy').setScale(0.1).setInteractive()
        // enemy.setVelocity(100, 200).setBounce(0.9)
        // enemy.setCollideWorldBounds(true)
        // mySheep = spawner.nongSheepSpanwer(this);
        // console.group("sheep debugger")
        // setTimeout(() => nongSheepSpawner(this), 1000)
        // setTimeout(() => nongSheepSpawner(this), 2000)
        // console.groupEnd
        // nongSheepSpawner(this);
        // sheep = this.add.image(150,450,'sheep').setScale(0.2)

        //this.input.setDefaultCursor('url(images/Cursor.cur, pointer')
        

        // let i = 7
        // const nongInterval = setInterval(() => {
        //     console.warn("Spawned");
        //     nongSpawner(this)
        // },1000)
        // setTimeout(() => {
        //     console.warn("Cleared interval");
        //     clearInterval(nongInterval);
        // },5000)
        const sheeps = this.physics.add.group()
        //const enemys = this.physics.add.group()
        const spawnSheepEvent = this.time.addEvent({
            delay: 1000,
            callback: function(){
                const sheep = nongSheepSpawner(this);
                sheeps.add(sheep);
            },
            // callback: function(){
            //     let bullet = this.physics.add.image(bigfire.x, bigfire.y-50,'bullet')
            //     bullet.setScale(0.2).setSize(300,300)//.setOffset(-5,500)
            //     bullets.add(bullet)
            //     bullets.setVelocityY(-200)
            // },
            callbackScope: this,
                //loop: true,
                // paused: false,
            repeat: 2
        })
        const spawnEnemyEvent = this.time.addEvent({
            delay: 1000,
            callback: function(){
                const enemy = nongSpawner(this);
                this.physics.add.overlap(enemy, sheeps, this.hitEnemy);
            },
            callbackScope: this,
                //loop: true,
                // paused: false,
            repeat: 1
        })

        // const sprite = this.physics.add.image(400, 300, 'enemy')
        // .setVelocity(100, 200)
        // .setBounce(1, 1)
        // .setCollideWorldBounds(true)
        // .setGravityY(200)
        // .setScale(0.1)
        // .setSize(500,-500).setOffset(-20,600)

        // const group = this.physics.add.group();
        // group.add(this.physics.add.image(400, 300, 'sheep').setScale(0.2).setInteractive(({ cursor: 'url(images/leaf_cursor.cur), pointer' }))
        // .setSize(400,-400).setOffset(250,600));
        // Phaser.Actions.PlaceOnRectangle(group.getChildren(), new Phaser.Geom.Rectangle(84, 84, 616, 416));
    
        // group.refresh();
    
        // this.physics.add.overlap(sprite, group, function(){console.log("HIT!")});
 
        // enemy.on('pointerdown', function (pointer) {
        //     this.setTint(0xff0000)
        //     i--

        //     if (i === 0) {
        //         enemy.destroy()
        //         //enemy.input.off('pointerdown', ClickNuke)
        //     }
        //     else {
        //         enemy.setVelocity(Phaser.Math.Between(-300, 300), -600)
        //     }
        // })
        // enemy.on('pointerout', function (pointer) {
        //     this.clearTint()
        // })
        // enemy.on('pointerup', function (pointer) {
        //     this.clearTint()
        // })

        // for (let i = 0; i < 4; i++) {
        //     const x = Phaser.Math.Between(0, 600);
        //     const y = Phaser.Math.Between(0, 900);
        //     enemy = this.physics.add.sprite(x, y, 'enemy').setScale(0.1).setInteractive()
        //     enemy.setVelocity(100, 200).setBounce(0.9)
        //     enemy.setCollideWorldBounds(true)
        //     // enemy.on('pointerdown', function (pointer) {
        //     //     this.setTint(0xff0000)
        //     //     i--
    
        //     //     if (i === 0) {
        //     //         enemy.destroy()
        //     //         //enemy.input.off('pointerdown', ClickNuke)
        //     //     }
        //     //     else {
        //     //         enemy.setVelocity(Phaser.Math.Between(-300, 300), -600)
        //     //     }
        //     // })
        //     // enemy.on('pointerout', function (pointer) {
        //     //     this.clearTint()
        //     // })
        //     // enemy.on('pointerup', function (pointer) {
        //     //     this.clearTint()
        //     // })
        // }
        // this.physics.add.collider(enemys,sheeps,this.hitEnemy)
        //text
        
       // info = this.add.text(10, 10, '', { font: '48px Arial', fill: '#000000' })
        // const questNames = quests.reduce((arr, obj) => arr.push(obj.questName), []);
        // const questText = {
        //     killMonster: this.add.text(80, 330, '', { font: '36px Arial', fill: '#000000',lineSpacing: 50 })
        // }
        killMonster = this.add.text(80, 330, '', { font: '36px Arial', fill: '#000000',lineSpacing: 50 })
        collectEgg = this.add.text(80, 380, '', { font: '36px Arial', fill: '#000000',lineSpacing: 50 })
        collectWool = this.add.text(80, 430, '', { font: '36px Arial', fill: '#000000',lineSpacing: 50 })
        collectMilk = this.add.text(80, 480, '', { font: '36px Arial', fill: '#000000',lineSpacing: 50 })
        //text = this.add.text(80, 330, '', { font: '36px Arial', fill: '#000000',lineSpacing: 50 })


    }

    hitEnemy(enemy,sheep){
        let touching = !sheep.body.touching.none;
        let wasTouching = !sheep.body.wasTouching.none;

        if (touching && !wasTouching){
            sheep.emit("enemyOverlap", {enemyName: "nong", invisibleTime: 3000});
        } else if (!touching && wasTouching) {
            sheep.emit("enemyOverlapEnd");
        }
    }

    endGame(allQuestStatus){
        return allQuestStatus.every(x => x);
    }

    allQuestStatus(quest){
        return quest.reduce((arr, obj) => arr.concat([obj.questStatus]), []);
    }
        update(delta, time)
        {   
            const {status: qs, quests: qests} = qest;
            const gameEnd = this.endGame(this.allQuestStatus(qests));
            // if ( timer === 0)
            // {
            //     return;
            // }
            //info.setText('Time: '  + '\nMilk: '+ inventory.items.milk)
            killMonster.setText('Kill monster : '+qs.killCount+'/'+5)
            collectEgg.setText('Collect egg : '+qs.eggCount+'/'+5)                      
            collectWool.setText('Collect wool : '+qs.woolCount+'/'+5)
            collectMilk.setText('Collect milk : '+qs.milkCount+'/'+5)
            if(gameEnd){
                console.log("The game has ended!");
            }
        }

}
    

    export default GameScene