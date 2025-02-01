namespace SpriteKind {
    export const UI = SpriteKind.create()
    export const COOL_UI = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    You.setVelocity(0, 0)
    tiles.placeOnRandomTile(sprite, assets.tile`myTile6`)
    You.vx = 15
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Touchy_ui == 1) {
        if (Button_pushy == 1) {
            Button_pushy = 0
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    You.setVelocity(0, 0)
    Song_state += 1
    if (Song == 1) {
        if (Song_state == 1) {
            tiles.setCurrentTilemap(tilemap`level6`)
            NOTES_NOWWWWWWWW()
        } else {
            if (Song_state == 2) {
                tiles.setCurrentTilemap(tilemap`level1`)
                NOTES_NOWWWWWWWW()
            }
        }
    }
    tiles.placeOnRandomTile(You, assets.tile`myTile0`)
    You.vx = 15
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.UI, function (sprite, otherSprite) {
    Button_pushy = 1
    Touchy_ui = 1
    All_done = 0
    pauseUntil(() => !(sprite.overlapsWith(otherSprite)))
    if (Button_pushy == 1) {
        info.changeLifeBy(-1)
    } else {
        sprites.destroy(otherSprite)
    }
    All_done = 1
})
function NOTES_NOWWWWWWWW () {
    Touchy_ui = 0
    Button_pushy = 0
    if (true) {
    	
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        Left = sprites.create(, SpriteKind.UI)
        tiles.placeOnRandomTile(Left, assets.tile`myTile2`)
        tiles.setTileAt(Left.tilemapLocation(), assets.tile`myTile`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        Right = sprites.create(, SpriteKind.UI)
        tiles.placeOnRandomTile(Right, assets.tile`myTile3`)
        tiles.setTileAt(Right.tilemapLocation(), assets.tile`myTile`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        Up = sprites.create(, SpriteKind.UI)
        tiles.placeOnRandomTile(Up, assets.tile`myTile5`)
        tiles.setTileAt(Up.tilemapLocation(), assets.tile`myTile`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        Down = sprites.create(, SpriteKind.UI)
        tiles.placeOnRandomTile(Down, assets.tile`myTile8`)
        tiles.setTileAt(Down.tilemapLocation(), assets.tile`myTile`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        You = sprites.create(, SpriteKind.Player)
        tiles.placeOnRandomTile(You, assets.tile`myTile4`)
        tiles.setTileAt(You.tilemapLocation(), assets.tile`myTile0`)
        You.vx = 15
        You.z = 1
    }
}
function BEGIN_RAPFEST () {
    Song = 1
    Song_state = 0
    level += 1
    if (level == 1) {
        sprites.destroyAllSpritesOfKind(SpriteKind.UI)
        tiles.setCurrentTilemap(tilemap`level2`)
        scene.setBackgroundImage()
        pause(500)
        animation.runImageAnimation(
        load_in,
        assets.animation`bigging hole`,
        100,
        false
        )
        pause(850)
        NOTES_NOWWWWWWWW()
        sprites.destroyAllSpritesOfKind(SpriteKind.COOL_UI)
    }
}
let Down: Sprite = null
let Up: Sprite = null
let Right: Sprite = null
let Left: Sprite = null
let All_done = 0
let Song = 0
let Song_state = 0
let Button_pushy = 0
let Touchy_ui = 0
let You: Sprite = null
let load_in: Sprite = null
let level = 0
let All_good = 0
scene.setBackgroundImage()
let title = sprites.create(, SpriteKind.UI)
title.setScale(2, ScaleAnchor.Middle)
title.setPosition(70, 40)
let title_option = sprites.create(, SpriteKind.UI)
title_option.setPosition(70, 100)
pauseUntil(() => controller.A.isPressed())
level = 0
load_in = sprites.create(assets.image`hole`, SpriteKind.COOL_UI)
load_in.setScale(10, ScaleAnchor.Middle)
animation.runImageAnimation(
load_in,
assets.animation`smollong hole`,
100,
false
)
pause(850)
BEGIN_RAPFEST()
