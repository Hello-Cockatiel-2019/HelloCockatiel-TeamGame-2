let player
let soundOn
let soundOff
let target = new Phaser.Math.Vector2()
let debug
let distance
let distanceText
let bgMusic
let keys
let text

class GameScene extends Phaser.Scene{

    constructor(){
        super({
            key: 'GameScene'
        })
    }

    preload(){
        this.load.spritesheet('player', '../../images/player.png', { frameWidth: 95, frameHeight: 158})
        this.load.audio('bgSound', '../../audio/bgSound.wav')
        this.load.image('soundOn', '../../images/soundOn.png')
        this.load.image('soundOff', '../../images/soundOff.png')

    }
    
    create(){
        player = this.physics.add.sprite(300, 450, 'player')
        soundOn = this.add.image(500, 50, 'soundOn').setScale(0.1)
        soundOff = this.add.image(560, 50, 'soundOff').setScale(0.1)
        debug = this.add.graphics()

        // --> Create background sound (Completed?)
        // bgMusic = this.sound.play('bgSound', {
        //     loop: true
        // })

        // --> Create keys (Incompleted)
        keys = [
            'Press [ for Sound: On',
            'Press ] for Sound: Off'
        ]

        text = this.add.text(10, 50, keys, { font: '18px Courier', fill: '#00ff00' });
        if (this.sound.locked){
        text.setText('Click to start')

        this.sound.once('unlocked', function (){
            text.setText(keys)
        })
    }

        this.input.keyboard.on('keydown-[', function () {
            bgSound.resume()
        })
        this.input.keyboard.on('keydown-]', function () {
            bgSound.pause()
        })
    
        // --> Create Shop Menu (Incompleted)
        let shopText = this.add.text(10, 150, 'Shop').setFontFamily('Arial').setFontSize(48).setColor('#ffff00')
        shopText.setInteractive()
        let i = 0
        shopText.on('pointerdown', function () {
            if (i === 0)
            {
                // shopText.setText('Welcome To Shop!')
                this.scene.start('shop', 'shopScene')
            }
        }, this)

        let chooseText = this.add.text(10, 220, 'Please Choose Item You Want To Buy...').setFontFamily('Arial').setFontSize(18).setColor('#ffff00')
        chooseText.setInteractive()

        let item1 = this.add.text(10, 240, 'Item 1').setFontSize(18).setColor('#ffff00')
        item1.setInteractive()

        let item2 = this.add.text(100, 240, 'Item 2').setFontSize(18).setColor('#ffff00')
        item2.setInteractive()

        let item3 = this.add.text(190, 240, 'Item 3').setFontSize(18).setColor('#ffff00')
        item3.setInteractive()

        let buy = this.add.text(10, 265, 'You Brought Item').setFontFamily('Arial').setFontSize(18).setColor('#ffff00')
        buy.setInteractive()

        let gotItem = this.add.text(10, 290, 'You Got Item').setFontFamily('Arial').setFontSize(18).setColor('#ffff00')
        gotItem.setInteractive()

        let notEnough = this.add.text(10, 310, 'You Do Not Have Enough Money').setFontFamily('Arial').setFontSize(18).setColor('#ffff00')
        notEnough.setInteractive()

        let wantAgain = this.add.text(10, 360, 'Do You To Want To Buy Again?').setFontFamily('Arial').setFontSize(18).setColor('#ffff00')
        wantAgain.setInteractive()

    // --> Example for Using Scene
    //     this.add.text(10, 10, 'Press 1, 2 or 3', { font: '16px Courier', fill: '#00ff00' });

    //     this.input.keyboard.once('keyup_ONE', function () {

    //         this.scene.start('demo', { id: 0, image: 'acryl-bladerunner.png' });

    //     }, this);

    //     this.input.keyboard.once('keyup_TWO', function () {

    //         this.scene.start('demo', { id: 1, image: 'babar-phaleon-coco.png' });

    //     }, this);

    //     this.input.keyboard.once('keyup_THREE', function () {

    //         this.scene.start('demo', { id: 2, image: 'babar-pym-wait.png' });

    //     }, this);

    //     this.events.on('shutdown', this.shutdown, this);


        // --> Create Player Pointer (Completed)
        this.input.on('pointerdown',(pointer)=>{
            target.x = pointer.x
            target.y = pointer.y

            // Move at 200 px/s:
            this.physics.moveToObject(player, target, 200);

            debug.clear().lineStyle(1, 0x00ff00);
            debug.lineBetween(0, target.y, 800, target.y);
            debug.lineBetween(target.x, 0, target.x, 600);
        }, this)
        distanceText = this.add.text(10, 10, 'Click to set target', { fill: '#00ff00' })
        
        
    }
    // --> Example For Using Scene
    //,
    // shutdown: function ()
    // {
    //     //  We need to clear keyboard events, or they'll stack up when the Menu is re-run
    //     this.input.keyboard.shutdown();
    // }

    update(delta, time){
        // --> For Player Pointer (Completed)
        distance = Phaser.Math.Distance.Between(player.x, player.y, target.x, target.y);

        if (player.body.speed > 0){
            distanceText.setText('Distance: ' + distance);
    
            //  4 is our distance tolerance, i.e. how close the player can get to the target
            //  before it is considered as being there. The faster it moves, the more tolerance is required.
            if (distance < 4){
                player.body.reset(target.x, target.y);
            }
        }
    }

}
export default GameScene