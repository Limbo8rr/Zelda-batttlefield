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
    mySprite.setKind(SpriteKind.up)
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
    mySprite.setKind(SpriteKind.left)
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
    mySprite.setKind(SpriteKind.right)
    sword = 1
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
    mySprite.setKind(SpriteKind.down)
    sword = 2
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
let scartin: Sprite = null
let wizrobes: Sprite = null
let fire_ball: Sprite = null
let firer_splare: Sprite = null
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
game.onUpdateInterval(5000, function () {
    firer_splare = sprites.create(assets.image`fire dragon`, SpriteKind.fire_dragon)
    fire_ball = sprites.createProjectileFromSprite(img`
        . 2 . . . . . . . . . . . . 2 2 
        . . 2 . . . 2 2 2 2 2 2 2 . 2 . 
        . . . 2 2 2 2 4 4 2 4 4 2 2 . . 
        . . . 2 2 4 4 4 4 4 4 4 4 2 . . 
        2 . 2 2 4 4 4 4 f 4 4 f 4 4 2 . 
        2 2 2 4 4 4 4 4 4 4 4 4 4 4 2 . 
        2 2 2 4 f 4 4 4 4 4 4 4 4 4 2 2 
        2 2 2 4 4 4 f 4 4 4 f 4 4 4 4 2 
        . 2 2 4 4 4 4 4 4 4 4 4 f 4 4 2 
        . 2 2 2 4 4 4 4 4 4 4 4 4 4 4 2 
        . . . 2 4 4 f 4 4 f 4 4 4 4 4 2 
        . . . 2 4 4 4 4 4 4 4 4 4 4 2 2 
        . . . . 2 2 4 4 4 4 4 f 4 2 2 . 
        . . . 2 2 2 2 2 4 4 4 2 2 2 2 . 
        . 2 2 2 . . . . 2 2 2 2 . . . 2 
        . . . 2 . . . . . . . . . . . . 
        `, firer_splare, 50, 50)
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
    scartin = sprites.create(img`
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 d 1 d 1 d 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 d 1 . . . . . 
        . . . . d 1 d d d 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 1 . . . . . 
        . . . . . 1 1 1 d 1 . . . . . . 
        . . . d 1 1 1 1 1 1 1 d . . . . 
        . . d . 1 1 d 1 d 1 1 . 1 . . . 
        . 1 . . 1 1 1 1 1 1 1 . . 1 . . 
        . 1 . . 1 d 1 1 d 1 d . . d . . 
        . . . . 1 1 1 1 1 1 d . . . . . 
        . . . . d . . . . . 1 . . . . . 
        . . . . 1 . . . . . d . . . . . 
        . . . . d . . . . . 1 . . . . . 
        . . d 1 1 . . . . . d 1 d . . . 
        `, SpriteKind.mumly)
    fire_ball.follow(mySprite, 40)
    scartin.follow(mySprite, 60)
})
