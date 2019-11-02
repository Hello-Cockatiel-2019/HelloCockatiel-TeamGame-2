const nongSpawner = function (gs){
    const x = Phaser.Math.Between(0, 600);
    const y = Phaser.Math.Between(0, 900);
    let hp = Phaser.Math.Between(2, 10); //ค.เร็ว สุ่มน้อง velocity
    const enemy = gs.physics.add.sprite(x, y, 'enemy')
        .setScale(0.1).setInteractive()
    enemy.setVelocity(100, 200).setBounce(0.9)
    enemy.setCollideWorldBounds(true)

    enemy.on('pointerdown', function (pointer) {
        this.setTint(0xff0000)
        hp--
        if (hp === 0) {
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
}

export default nongSpawner;