
import {
    nongSpawner,
    nongSheepSpawner
} from "../utils/Spawner"


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
        console.group("sheep debugger")
        setTimeout(() => nongSheepSpawner(this), 1000)
        setTimeout(() => nongSheepSpawner(this), 2000)
        console.groupEnd
        // nongSheepSpawner(this);
        // sheep = this.add.image(150,450,'sheep').setScale(0.2)

        //this.input.setDefaultCursor('url(images/Cursor.cur, pointer')
        

        // let i = 7
        const nongInterval = setInterval(() => {
            console.warn("Spawned");
            nongSpawner(this)
        },1000)
        setTimeout(() => {
            console.warn("Cleared interval");
            clearInterval(nongInterval);
        },5000)
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

        


        
        

    }
    

        update(delta, time)
        {
            
        }

}
    

    export default GameScene