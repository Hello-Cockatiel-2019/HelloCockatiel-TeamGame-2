// --> Example For Using Class
let Demo = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Demo ()
    {
        Phaser.Scene.call(this, { key: 'demo' });
    },

    init: function (data)
    {
        console.log('init', data);

        this.imageID = data.id;
        this.imageFile = data.image;
    },

    preload: function ()
    {
        this.load.image('pic' + this.imageID, 'assets/pics/' + this.imageFile);
    },

    create: function ()
    {
        this.add.text(10, 10, 'Click to Return', { font: '16px Courier', fill: '#00ff00' });

        this.add.image(400, 300, 'pic' + this.imageID).setScale(2);

        this.input.once('pointerup', function () {

            this.scene.start('menu');

        }, this);
    }

})
