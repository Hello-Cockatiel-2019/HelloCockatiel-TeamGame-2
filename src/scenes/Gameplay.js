let plant
let animal
let animalStatus
let animalComplete
let plantProduct
let animalProduct
let money
let quest
let farm
class GamePlay extends Phaser.Scene {
    constructor() {
        super({
            key: 'GamePlay'
        })
    }

    preload() {
    
    }

    create() {
        plant.setInteractive()
        plant.on('pointerdown', function () {
            plant = true
        })
        animal.setInteractive()
        animal.on('pointerdown', function () {
            animal = true
        })
        plantProduct.setInteractive()
        plantProduct.on('pointerdown', function () {
            plantProduct = true
        })
        animalProduct.setInteractive()
        animalProduct.on('pointerdown',function(){
            animalProduct = true
        })
        farm.setInteractive()
        farm.on('pointerdown',function(){
           farm = true
       })



    }

    update(delta, time) {

        if (plantProduct == quest) {
            money += 1;
            plantProduct -= 1;
        }
        if (animalProduct == quest) {
            money += 1;
            animalProduct -= 1;

        }
        if (clicked) {
            time += 1
            if (time1 == 60) {
                complete = true
                time1 = 0
                clicked = false
            }
        }
        if (clicked.plant || clicked.animal) {
            time += 1
            if (time1 == 30) {
                complete = true
                time1 = 0
                clicked = false
            }
        }
        if (clicked.plantProduct || clicked.animalProduct) {
            time += 1
            if (time1 == 30) {
                complete = true
                time1 = 0
                clicked = false
            }
        }
    }
}
export default GamePlay