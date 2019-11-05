import {
    nongSpawner,
    nongSheepSpawner
} from "../utils/Spawner"

import "../utils/Damage"
import damageCalculator from "../utils/Damage"

let enemy, sheep
let bg, pointerdown

class GameScene extends Phaser.Scene {

    constructor() {
        super({
            key: 'GameScene'
        })
    }

    preload() {
        this.load.image('bg', 'images/backgroung.jpg')
        this.load.spritesheet('enemy', 'images/enemy.png', { frameWidth: 582, frameHeight: 691 })
        this.load.image('sheep','images/sheep.png')
        this.load.image('milk','images/milk.png')
        
    }

    create() {
        bg = this.add.image(300, 900, 'bg')
        
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
            repeat: 9
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

        update(delta, time)
        {
            
        }

}
    

    export default GameScene