namespace SpriteKind {
    export const shield = SpriteKind.create()
    export const attack = SpriteKind.create()
    export const right = SpriteKind.create()
    export const left = SpriteKind.create()
    export const up = SpriteKind.create()
    export const down = SpriteKind.create()
    export const fire_dragon = SpriteKind.create()
    export const blue_wizard_witch = SpriteKind.create()
    export const mumly = SpriteKind.create()
}
function moveSpriteAwayFromPlayer (newSprite: Sprite) {
    tiles.placeOnRandomTile(newSprite, sprites.dungeon.floorLight0)
    i = 0
    while (Math.sqrt((mySprite.x - newSprite.x) ** 2 + (mySprite.y - newSprite.y) ** 2) < 48) {
        tiles.placeOnRandomTile(newSprite, sprites.dungeon.floorLight0)
        i += 1
        if (i > 20) {
            break;
        }
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . 7 7 7 . . . . . . . . 
        . . . . 7 7 7 7 7 7 . . . . . . 
        . . . 7 7 7 7 7 7 7 . . . . . . 
        . . 7 7 7 7 7 7 7 7 7 . . . . . 
        . . d 7 7 7 7 7 7 7 d . . . . . 
        . . d 7 7 7 7 7 7 7 d . . . . . 
        . . d d 7 7 7 7 7 d d . . . . . 
        . . d d 7 7 7 7 d d . . . . . . 
        . . . d d 7 7 7 d . . . . . . . 
        . . . . d d 7 d d . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . f . f . . . . . . . . 
        . . . . f . . . f . . . . . . . 
        . . . f . . . . . f . . . . . . 
        `)
    sword = 3
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (sword == 1) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 7 7 . . . . . . . 
            . . . 7 7 f 7 7 7 7 . . . . . . 
            . . 7 7 7 7 f d d d . . . . . . 
            . . 7 7 7 7 d d d d . . . . . . 
            . 7 7 7 7 d f d f d . . . . . . 
            . 7 7 7 d d d d d d . . . . . . 
            . 7 7 d d d d d d d . . b . . . 
            . . . . d d d d d . . b 1 b . . 
            . . . . d d d d . . b 1 1 1 b . 
            . . . . . . f . . b 5 1 5 1 5 b 
            . . . . f f f f f b 1 5 1 5 1 b 
            . . . . . . f . . b 1 1 1 1 1 b 
            . . . . . f . f . . b b 1 b b . 
            . . . . f . . . f . . . b . . . 
            . . . f . . . . . f . . . . . . 
            `)
    } else if (sword == 4) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 7 7 7 7 . . . . . 
            . . . . . . 7 7 7 7 f 7 7 . . . 
            . . . . . . d d d f 7 7 7 7 . . 
            . . . . . . d d d d 7 7 7 7 . . 
            . . . . . . d f d f d 7 7 7 7 . 
            . . . . . . d d d d d d 7 7 7 . 
            . . . b . . d d d d d d d 7 7 . 
            . . b 1 b . . d d d d d . . . . 
            . b 1 1 1 b . . d d d d . . . . 
            b 5 1 5 1 5 b . . f . . . . . . 
            b 1 5 1 5 1 b f f f f f . . . . 
            b 1 1 1 1 1 b . . f . . . . . . 
            . b b 1 b b . . f . f . . . . . 
            . . . b . . . f . . . f . . . . 
            . . . . . . f . . . . . f . . . 
            `)
    } else if (sword == 3) {
        mySprite.setImage(img`
            . . . . . f f f . . . . . . . . 
            . . . . f 7 7 7 f f . . . . . . 
            . . . f 7 7 7 7 7 f . . . . . . 
            . . f 7 7 7 7 7 7 7 f . . . . . 
            . . d 7 7 7 7 7 7 7 d . . . . . 
            . . d 7 7 7 7 7 7 7 d . . . . . 
            . . d d 7 7 7 7 7 d d . . . . . 
            . . d d 7 7 7 7 d d . . . . . . 
            . . . d d 7 7 7 d . . . . . . . 
            . . . b d d 7 d d b . . . . . . 
            . . b b b b f b b b b . . . . . 
            . . . b f f f f f b . . . . . . 
            . . . b b b f b b b . . . . . . 
            . . . . b f b f b . . . . . . . 
            . . . . f b b b f . . . . . . . 
            . . . f . . b . . f . . . . . . 
            `)
    } else if (sword == 2) {
        mySprite.setImage(img`
            . . . . . . . 7 7 7 7 . . . . . 
            . . . . . . 7 7 7 7 7 7 7 . . . 
            . . . . . 7 7 7 d d d 7 7 . . . 
            . . . . 7 7 7 d d d d d 7 7 . . 
            . . . . 7 7 d d d d d d d 7 . . 
            . . . . 7 d d f d d f d d 7 . . 
            . . . . 7 d d d d d d d d . . . 
            . . . . . d d d d d d d . . . . 
            . . . . . d d d d d d d . . . . 
            . . . . . . . d d d d . . . . . 
            . . . . . . . b b b b b . . . . 
            . . . . . . b 1 5 1 5 1 b . . . 
            . . . . . . . b 1 5 1 b . . . . 
            . . . . . . . . b 1 b . . . . . 
            . . . . . . . f . b . f . . . . 
            . . . . . . f . . . . . f . . . 
            `)
    }
    timer.after(1000, function () {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 7 7 7 7 . . . . . . . 
            . . . 7 7 f 7 7 7 7 . . . . . . 
            . . 7 7 7 7 f d d d . . . . . . 
            . . 7 7 7 7 d d d d . . . . . . 
            . 7 7 7 7 d f d f d . . . . . . 
            . 7 7 7 d d d d d d . . . . . . 
            . 7 7 d d d d d d d . . . . . . 
            . . . . d d d d d . . . . . . . 
            . . . . d d d d . . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . f f f f f . . . . . . . 
            . . . . . . f . . . . . . . . . 
            . . . . . f . f . . . . . . . . 
            . . . . f . . . f . . . . . . . 
            . . . f . . . . . f . . . . . . 
            `)
        mySprite.setKind(SpriteKind.Player)
        controller.configureRepeatEventDefaults(500, 30)
    })
})
function createWizz_robes () {
    wizrobes = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 1 1 1 . . . . . . . 
        . . . 1 d d d d d 1 . . . . . . 
        . . 1 d 8 8 8 8 8 d 1 . . . . . 
        . . 1 d 8 8 8 8 8 8 d 1 . . . . 
        . 1 d 8 8 f 8 8 f 8 d 1 . . . . 
        1 d 8 8 8 8 8 8 8 8 8 d 1 . . . 
        1 d 8 8 8 8 8 8 8 8 8 d 1 1 1 1 
        1 d 8 8 8 8 8 8 8 8 6 d d d d d 
        . 1 d 8 8 8 8 8 6 6 6 d d 8 5 d 
        . 1 d 8 8 8 8 8 6 6 2 1 2 1 5 5 
        . . 1 d 8 8 8 8 6 6 6 6 8 d 5 d 
        . . 1 d 8 8 8 8 8 6 6 6 8 d 1 1 
        . 1 d 8 8 8 8 8 8 8 8 8 8 d 1 . 
        . 1 d 8 8 8 8 8 8 8 8 8 8 d 1 . 
        1 d 8 8 8 8 8 8 8 8 8 8 8 8 d 1 
        `, SpriteKind.blue_wizard_witch)
    wizrobes.setVelocity(randint(-50, 50), randint(-50, 50))
    wizrobes.setBounceOnWall(true)
    moveSpriteAwayFromPlayer(wizrobes)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 f 7 7 . . . 
        . . . . . . d d d f 7 7 7 7 . . 
        . . . . . . d d d d 7 7 7 7 . . 
        . . . . . . d f d f d 7 7 7 7 . 
        . . . . . . d d d d d d 7 7 7 . 
        . . . . . . d d d d d d d 7 7 . 
        . . . . . . . d d d d d . . . . 
        . . . . . . . . d d d d . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . f . f . . . . . 
        . . . . . . . f . . . f . . . . 
        . . . . . . f . . . . . f . . . 
        `)
    sword = 4
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . 7 7 f 7 7 7 7 . . . . . . 
        . . 7 7 7 7 f d d d . . . . . . 
        . . 7 7 7 7 d d d d . . . . . . 
        . 7 7 7 7 d f d f d . . . . . . 
        . 7 7 7 d d d d d d . . . . . . 
        . 7 7 d d d d d d d . . . . . . 
        . . . . d d d d d . . . . . . . 
        . . . . d d d d . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . f f f f f . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . f . f . . . . . . . . 
        . . . . f . . . f . . . . . . . 
        . . . f . . . . . f . . . . . . 
        `)
    sword = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 7 7 . . . 
        . . . . . 7 7 7 d d d 7 7 . . . 
        . . . . 7 7 7 d d d d d 7 7 . . 
        . . . . 7 7 d d d d d d d 7 . . 
        . . . . 7 d d f d d f d d 7 . . 
        . . . . 7 d d d d d d d d . . . 
        . . . . . d d d d d d d . . . . 
        . . . . . d d d d d d d . . . . 
        . . . . . . . d d d d . . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . f f f f f . . . . 
        . . . . . . . . . f . . . . . . 
        . . . . . . . . f . f . . . . . 
        . . . . . . . f . . . f . . . . 
        . . . . . . f . . . . . f . . . 
        `)
    sword = 2
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    createWizz_robes()
})
info.onLifeZero(function () {
    controller.moveSprite(mySprite, 0, 0)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 . . 
        . . . . . . . . . . 7 7 7 7 7 . 
        . . . . . . . . . 7 7 7 d d 7 7 
        f . . . f . . . . 7 7 d d d d 7 
        . f . f . . . . . d d f d f d d 
        . . f f f f f f f d d d d d d d 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 . . 
        . . . . . . . . . . 7 7 7 7 7 . 
        . . . . . . . . . 7 7 7 d d 7 7 
        f . . . f . . . . 7 f d f d f 7 
        . f . f . . . . . d d f d f d d 
        . . f f f f f f f d f d f d f d 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 7 7 7 . . 
        . . . . . . . . . . 7 7 7 7 7 . 
        . . . . . . . . . 7 7 7 d d 7 7 
        f . . . f . . . . 7 7 d d d d 7 
        . f . f . . . . . d f f d f f d 
        . . f f f f f f f d d d d d d d 
        `,img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 1 1 1 . 1 . . . 1 . 1 1 1 1 1 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        `,img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 1 1 1 1 1 1 1 . 1 1 1 1 1 1 1 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        `,img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 . 1 . 1 1 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    false
    )
    timer.after(2700, function () {
        game.over(false)
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.blue_wizard_witch, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    createWizz_robes()
    otherSprite.destroy()
})
let projectile: Sprite = null
let k = 0
let wizrobes: Sprite = null
let i = 0
let sword = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 . . . . . . . 
    . . . 7 7 f 7 7 7 7 . . . . . . 
    . . 7 7 7 7 f d d d . . . . . . 
    . . 7 7 7 7 d d d d . . . . . . 
    . 7 7 7 7 d f d f d . . . . . . 
    . 7 7 7 d d d d d d . . . . . . 
    . 7 7 d d d d d d d . . . . . . 
    . . . . d d d d d . . . . . . . 
    . . . . d d d d . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . f f f f f . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . f . f . . . . . . . . 
    . . . . f . . . f . . . . . . . 
    . . . f . . . . . f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
sword = 0
info.setLife(5)
for (let index = 0; index < 5; index++) {
    createWizz_robes()
}
game.onUpdateInterval(5000, function () {
	
})
game.onUpdateInterval(2000, function () {
    for (let value of sprites.allOfKind(SpriteKind.blue_wizard_witch)) {
        if (Math.percentChance(20)) {
            k = randint(1, 4)
            if (k == 1) {
                projectile = sprites.createProjectileFromSprite(assets.image`wizrobe_projectile_right`, value, 50, 0)
            } else if (k == 2) {
                projectile = sprites.createProjectileFromSprite(assets.image`wizrobe_projectile_left`, value, -50, 0)
            } else if (k == 3) {
                projectile = sprites.createProjectileFromSprite(assets.image`wizrobe_projectile_down`, value, 0, 50)
            } else {
                projectile = sprites.createProjectileFromSprite(assets.image`wizrobe_projectile_up`, value, 0, -50)
            }
        } else {
            value.setVelocity(randint(-50, 50), randint(-50, 50))
        }
    }
})
