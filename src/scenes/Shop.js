let shopScene
class Shop extends Phaser.Scene{

    constructor(){
        super({
            key: 'Shop'
        })
    }

    preload (){
        this.load.image('shopScene', '../../images/shopScene.png')
    }

    create (){
        shopScene = this.add.image(300, 450, 'shopScene')
        this.add.text(10, 10, 'Click to Return', { font: '16px Courier', fill: '#00ff00' });

        this.input.once('pointerup', function () {

            this.scene.start('GameScene');

        }, this);
    }

    update (){

    }

}
export default Shop