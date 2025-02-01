namespace SpriteKind {
    export const UI = SpriteKind.create()
    export const COOL_UI = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    You.setVelocity(0, 0)
    tiles.placeOnRandomTile(sprite, assets.tile`myTile6`)
    You.vx = 15
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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Touchy_ui == 1) {
        if (list[1] == 1) {
            list.removeAt(1)
            if (Button_pushy == 1) {
                Button_pushy = 0
            }
        }
    }
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
    if (Song == 1) {
        if (Song_state == 0) {
            list = [
            1,
            2,
            3,
            4
            ]
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        Left = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f f 2 f . . . . . . . 
            . . . f f f 2 2 f f f f f f f . 
            . f f f 2 2 2 2 2 2 2 2 2 2 f . 
            . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
            . f f f 2 2 2 2 2 2 2 2 2 2 f . 
            . . . f f f 2 2 f f f f f f f . 
            . . . . . f f 2 f . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.UI)
        tiles.placeOnRandomTile(Left, assets.tile`myTile2`)
        tiles.setTileAt(Left.tilemapLocation(), assets.tile`myTile`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        Right = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 7 f f . . . . . 
            . f f f f f f f 7 7 f f f . . . 
            . f 7 7 7 7 7 7 7 7 7 7 f f f . 
            . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f 7 7 7 7 7 7 7 7 7 7 f f f . 
            . f f f f f f f 7 7 f f f . . . 
            . . . . . . . f 7 f f . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.UI)
        tiles.placeOnRandomTile(Right, assets.tile`myTile3`)
        tiles.setTileAt(Right.tilemapLocation(), assets.tile`myTile`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        Up = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . f 8 f . . . . . . 
            . . . . . . f f 8 f f . . . . . 
            . . . . . . f 8 8 8 f . . . . . 
            . . . . . f f 8 8 8 f f . . . . 
            . . . . f f 8 8 8 8 8 f f . . . 
            . . . . f 8 8 8 8 8 8 8 f . . . 
            . . . . f f f 8 8 8 f f f . . . 
            . . . . . . f 8 8 8 f . . . . . 
            . . . . . . f 8 8 8 f . . . . . 
            . . . . . . f 8 8 8 f . . . . . 
            . . . . . . f 8 8 8 f . . . . . 
            . . . . . . f 8 8 8 f . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.UI)
        tiles.placeOnRandomTile(Up, assets.tile`myTile5`)
        tiles.setTileAt(Up.tilemapLocation(), assets.tile`myTile`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        Down = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f 3 3 3 f . . . . . 
            . . . . . . f 3 3 3 f . . . . . 
            . . . . . . f 3 3 3 f . . . . . 
            . . . . . . f 3 3 3 f . . . . . 
            . . . . . . f 3 3 3 f . . . . . 
            . . . . f f f 3 3 3 f f f . . . 
            . . . . f 3 3 3 3 3 3 3 f . . . 
            . . . . f f 3 3 3 3 3 f f . . . 
            . . . . . f f 3 3 3 f f . . . . 
            . . . . . . f 3 3 3 f . . . . . 
            . . . . . . f f 3 f f . . . . . 
            . . . . . . . f 3 f . . . . . . 
            . . . . . . . f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.UI)
        tiles.placeOnRandomTile(Down, assets.tile`myTile8`)
        tiles.setTileAt(Down.tilemapLocation(), assets.tile`myTile`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
        You = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            f 1 1 1 1 f f 1 1 1 f f 1 1 f . 
            f 1 1 1 1 f 1 1 1 1 f 1 1 1 f . 
            f 1 1 1 1 f f 1 1 1 f f 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 f 1 1 f f f 1 1 1 1 f . 
            f 1 1 1 1 f f 1 1 1 1 1 1 1 f . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . f 1 1 1 1 1 1 1 1 1 1 1 f . . 
            . . f f 1 1 1 1 1 1 1 f f . . . 
            . . . . f f f f f f f . . . . . 
            `, SpriteKind.Player)
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
        scene.setBackgroundImage(img`
            ddddbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbbbddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddbbbbbbbbbbbbbbbbbbdddddbbbbbb
            ddddbbbbbdddddbbbbbbbbbbbbbbbbbbbbbbddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddbbbbbb
            ddddbbbbbdddddbbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddd
            ddddbbbbbdddddbbbbbbbbbbbbbbbbbbbddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddddddddddddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddbbbbbbbbdddddddddddd
            dddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddbbbbbbbdddddbbbbbb
            dddddddddddddddddddddddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddbbbbbbdddddbbbbbb
            ddddbbbbbddddddbbbbbbbbbddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddddddddddddbbbbdddddbbbbbb
            ddddbbbbbddddddbbbbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777bbbddddddddddddbbdddddbbbbbb
            ddddbbbbbddddddbbbbbbddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777bbbbddddddddddddbdddddbbbbbb
            ddddbbbbbbdddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777bbbb77777dddddddddddddbbbbbb
            ddddbbbbbbdddddbbbddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbb777777dddddddddddddbbbbbb
            ddddbbbbbbdddddbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbbb7777777dddddddddddddbbbbbb
            ddddbbbbbbdddddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777bbbbbb77777777bbdddddddddddbbbbbb
            ddddbbbbbbdddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777bbbbbbb777777777bbbddddddddddddbbbb
            ddddbbbbbbddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbddddddddddddbb
            ddddbbbbbbddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbddddddddddddb
            ddddbbbbbddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbb777bbbbddddddddddd
            ddddbbbbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbbb777bbbbbdddddddddd
            ddddbbddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbbbb777bbbbbbbdddddddd
            ddddbdddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbbbbb777bbbbbbbbbdddddd
            dddddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbb777bbbbbbbbbbddddd
            dddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbb777bbbbbbbbbbbbddd
            ddddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbb777bbbbbbbbbbbbbbb
            ddddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbb777bbbbbbbbbbbbbbb
            dddddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbb777bbbbbbbbbbbbbbb
            dddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbbb777bbbbbbbbbbbbbbb
            ddddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbbbb777bbbbbbbbbbbbbbb
            ddddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbbbbb777bbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbbbbbbbbbbbbb777bbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777777bbbbbbbbbbbbbbbbbbbbbb77777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777bbbbb777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            7777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777777bbbbb777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            77777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb7777777777777bbbbbbbbbbbbbbbbbbbbbbb7777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            77777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbb7777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            777777777777777777777777777777777777777777777777bbbbbb7777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            77777777777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbb7777777777777777777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbb7777777777777777777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777777777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777777777777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb77777bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
            `)
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
let Button_pushy = 0
let list: number[] = []
let Touchy_ui = 0
let Song = 0
let Song_state = 0
let You: Sprite = null
let load_in: Sprite = null
let level = 0
let All_good = 0
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888888ffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888888888fff77777777fffffffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888f7777777777777777777777ffffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888888888f77777777777777777777777777777ff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888ff77777777777777777777777777777777ffff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888888ff77777777777777777777777777777777777777ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888f77777777777777777777777777777777777777777777fff888888888888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888888f777777777777777777777777777777777777777777777777ff8888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888f777777777777777777777777777777777777777777777777777ff88888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888888f77777777777777777777777777777777777777777777777777777fff88888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888f777777777777777777777777777777777777777777777777777777777ff888888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888f777777777777777777777777777777777777777777777777777777777777ff8888888888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888888f77777777777777777777777777777777777777777777777777777777777777f888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888888f7777777777777777777777777777777777777777777777777777777777777777f88888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888f777777777777777777777777777777777777777777777777777777777777777777ff888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888f77777777777777777777777777777777777777777777777777777777777777777777f88888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888f7777777777777777777777777777777777777777777777777777777777777777777777ff888888888888888888888888888888888888888888888888888888888888
    888888888888888888888888888f777777777777777777777777777777777777777777777777777777777777777777777777f88888888888888888888888888888888888888888888888888888888888
    88888888888888888888888888f77777777777777777777777777777777777777777777777777777777777777777777777777ff888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888f77777777777777777777777777777777777777777777777777777777777777777777777777777f88888888888888888888888888888888888888888888888888888888
    8888888888888888888888888f777777777777777777777777777777777777777777777777777777777777777777777777777777f8888888888888888888888888888888888888888888888888888888
    888888888888888888888888f77777777777777777777777777777777777777777777777777777777777777777777777777777777f888888888888888888888888888888888888888888888888888888
    888888888888888888888888f777777777777777777777777777777777777777777777777777777777777777777777777777777777f88888888888888888888888888888888888888888888888888888
    888888888888888888888888f7777777777777777777777777777777777777777777777777777777777777777777777777777777777f8888888888888888888888888888888888888888888888888888
    88888888888888888888888f77777777777777777777777777777777777777777777777777777777777777777777777777777777777f8888888888888888888888888888888888888888888888888888
    88888888888888888888888f777777777777777777777777777777777777777777777777777777777777777777777777777777777777f888888888888888888888888888888888888888888888888888
    88888888888888888888888f7777777777777777777777777777777777777777777777777777777777777777777777777777777777777f88888888888888888888888888888888888888888888888888
    8888888888888888888888f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777f88888888888888888888888888888888888888888888888888
    8888888888888888888888f777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f8888888888888888888888888888888888888888888888888
    888888888888888888888f7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f8888888888888888888888888888888888888888888888888
    888888888888888888888f7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f8888888888888888888888888888888888888888888888888
    888888888888888888888f77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777f888888888888888888888888888888888888888888888888
    88888888888888888888f777777fffff7777777777777777777777777777777777777777777777777777777777777777777777777777777f888888888888888888888888888888888888888888888888
    88888888888888888888f777fff77777ffffff77777777777777777777777777777777777777777777777777777777777777777777777777f88888888888888888888888888888888888888888888888
    88888888888888888888ffff77777777777777ffff7777777777777777777777777777777777777777777777777777777777777777777777f88888888888888888888888888888888888888888888888
    88888888888888888fff7777777777777777777777f777777777777777777777777777777777777777777777777777777777777777777777f88888888888888888888888888888888888888888888888
    888888888888888ff77777777777777777777777777ff77777777777777777777777777777777777777777777777777777777777777777777f8888888888888888888888888888888888888888888888
    8888888888888ff777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777777777777777f8888888888888888888888888888888888888888888888
    888888888888f777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777777777777f8888888888888888888888888888888888888888888888
    88888888888f77777777777777777777777777777777777f77777777777777777777777777777777777777777777777777777777777777777f8888888888888888888888888888888888888888888888
    8888888888f7777777777777777777777777777777777777ff7777777777777777777777777777777777777777777777777777777777777777f888888888888888888888888888888888888888888888
    888888888f7777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777777777f888888888888888888888888888888888888888888888
    88888888f777777777777777777777777777777777777777777f77777777777777777777777777777777777777777777777777777777777777f888888888888888888888888888888888888888888888
    8888888f77777777777777777777777777777777777777777777f77777777777777777777777777777777777777777777777777777777777777f88888888888888888888888888888888888888888888
    888888f7777777777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777777777f88888888888888888888888888888888888888888888
    888888f7777777777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777777777f88888888888888888888888888888888888888888888
    88888f777777777777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777777777f8888888888888888888888888888888888888888888
    8888f77777777777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777777f8888888888888888888888888888888888888888888
    8888f777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777777777777777777777f8888888888888888888888888888888888888888888
    888f77777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777777777777777777777f888888888888888888888888888888888888888888
    888f77777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777777777777777777777f888888888888888888888888888888888888888888
    88f7777777777777777777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777777f888888888888888888888888888888888888888888
    8f777777777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777777777777f888888888888888888888888888888888888ffffff
    8f7777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777777777777777777f8888888888888888888888888fffffffffff777777
    f77777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777777777777777777f8888888888888888fffffffff77777777777777777
    f777777777777777777777777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777f8888888888ffffff77777777777777777777777777
    f777777777777777777777777777777777777777777777777777777777777f7777777777777777777777777777777777777777777777777777777f8888ffffff77777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777777777777777ffffff77777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777777fffff77777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777777777777ff7777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777f7777777777777777777777777777777777777777777ff777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777f7777777777777777777777777777777777777777ff77777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777f77fff77777fff7777777777777777777777777ff7777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777f7f7777777777777777777777777777f7fff77777fff77777777777777777777777ff777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777f7fff77777fff777777777777777777777ff7777777777777777777777777777777fff777777fff7777777777777777
    777777777777777777777777777777777777f7777777777777777777777777777f7777777777777777777777777777777ff777777777777777777777777777777777fff777777fff7777777777777777
    777777777777777777777777777777777fff777777777777777777777777777777f7777777777777777777777777777ff77777777777777777777777777777777777fff777777fff7777777777777777
    777777777777777777777777777777777777777777777777777777777777777777f77777777777fff777777777777ff77777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777f77777777777fff7777777777ff7777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777f77777777777fff77777777ff777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777f7777fffffffff77777fff7777777777777777777777777777777777777777777777f77f777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777f7fffffffff777777ff77777777777777777777777777777777777777777777777777ff7777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777f7fffffffff7777ff7777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777fffffff77777ff777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777f777777777ff77777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777777777777777f7777777ff7777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777f77777f777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777f7777ff777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777777777777777777777f777ff7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777f7ff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777f7f77777777777777777777777777777777777777777ffffffffffffffffffffffffffffffffffffffff777777
    77777777777777777777777777777777777777777777777777777777777777777777777ff77777777777777777777777777777777777777777ffffffffffffffffffffffffffffffffffffb888f77777
    77777777777777777777777777777777777777777777777777777777777777777777777ff77777777777777777777777777777777777777777fdffddfffddffff88888888888888888888fb888f77777
    77777777777777777777777777777777777777777777777777777777777777777777777f777777777777777777777777777777777777777777ffddfddddffddff88888888888888888888fb8fff77777
    777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777fddddddddddddff88888888888888888888fbf11f77777
    777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777fdffddfffddffff88888888888888888888fbf11f77777
    777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777ffddfddddfdddff88888888888888888888fb8ff8f7777
    777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777fffffffffffffff88888888888888888888fb811f8f777
    777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777f999999999999ff88888888888888888888fbbbbbbf777
    777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777f99999ff99999ff88888888888888888888fbbbbbbf777
    777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777f9999f11f9999ff88888888888888888888fbbbbbbf777
    777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777f9999ff1f9999ff88888888888888888888fbbbbbbf777
    777777777777777777777777777777777777777777777777777777777777777777777777f77777777777777777777777777777777777777777f9fdf9ff99999fffffffff8888888888fffffffbbbf777
    777777777777777777777777777777777777777777777777777777777777777777777777f7777777777777fffffffffffffffffffffffffffff99f9f11f9999ffffffffff88888888fffffffffbbffff
    777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffffffffffffffff999ff11ff999ffffffffff88888888fffffffffbbffff
    77777777777777777777777777777777777777777777777777777777777777777ffffffffffffffffffffffffffffffffffffffffffffffffff99999ff99999ffffffffff88888888fffffffffffffff
    77777777777777777777777777777777777777777777777777777777777fffffffffffffffffffffffffffffddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffddddd
    7777777777777777777777777777777777777777777777777ffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddfffffffffdddffffffffffffffdddfffffffffdddddd
    777777777777777777777777777777777777777777777ffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddfffffffffdddffffffffffffffdddfffffffffdddddd
    77777777777777777777777777777777777777777ffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffffddddfffffffffffffddddfffffffffdddddd
    77777777777777777777777777777777777777fffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5555555dddddddddddfffffff5555555dddfffffffddddddd
    77777777777777777777777777777777777ffffffffffffddddddddddddddddddddddddddddddddd55555555ddddddddddddddd55555555555555555ddddddddddddd5555555555ddddddddddddddddd
    77777777777777777777777777777777fffffffffffdddddddddddddddddddddddddddddddddd55555555555ddddddddddddddd55555555555555555ddddddddddddd5555555555ddddddddddddddddd
    7777777777777777777777777777777fffffffffddddddddddddddddddddddddddddddddddd5555555555555ddddddddddddddd55555555555dd5555dddddddddddddddddddddddddddddddddddddddd
    7777777777777777777777777777777ffffffdddddddddddddddddddddddddddddddddddddd5555555dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
let title = sprites.create(img`
    ................................ff..........
    ...............................f11f.........
    ................................f11f........
    ..fff....f....................f..f1f........
    .f111f..f1f..................f1f..f.........
    f11ff....ff...................ff............
    f1f..........f...........ff..........f......
    f11ff....f..f1fff.....fff11f..f.....f1fff...
    .f111f..f1f.f1111f...f11111f.f1f....f1111f..
    ..fff1f.f1f.f11f11f..f11ff1f.f1f....f11f11f.
    ....f1f.f1f.f1f.f1f..f1f.f1f.f1f....f1f.f1f.
    ..fff1f.f1f.f1f.f1f..f1fff1f.f1f....f1f.f1f.
    .f111f..f1f.f1f.f1f..f11111f.f1f....f1f.f1f.
    ..fff....f...f...f....ff111f..f......f...f..
    .......................f11f.................
    .........ffffffffffffff111f.................
    ........f1111111111111111f..................
    .........ffffffffffffffff...................
    ............................................
    .................f.....................fff..
    ................f1f...................f111f.
    ...f....ff.......ff.............fff..f11ff..
    ..f1f...f1f....................f111f.f1f....
    ..f1ff..f1f......f..fff...fff.f1ff1f.f11ff..
    ..f111f.f11fff..f1f.f11f.f11f.f1111f..f111f.
    ..f1ff..f11111f.f1f.f11f.f11f.f11ff....fff1f
    ..f1f...f11ff1f.f1f..f11f11f..f1f........f1f
    ..f1ff..f1f.f1f.f1f..f11111f..f11ff....fff1f
    ..f111f.f1f.f1f.f1f...f11ff...f1111f..f111f.
    ...fff..ff...f...f.....ff......ffff....fff..
    `, SpriteKind.UI)
title.setScale(2, ScaleAnchor.Middle)
title.setPosition(70, 40)
let title_option = sprites.create(img`
    1111111111111111111111111111111111111111111111111111
    1feeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee1
    1feeeff444fffffffeeeeeeffffeefeeeeeeeeeeeeeeeeeeeee1
    1feee44444444444ffffffff44444f4effffeeffffffeeeeeee1
    1fef4444444444444444444444444f4ff444eeff44444ffeeee1
    1fef4444ffff444f44444444444444444444f444444444ffeee1
    1feef44f1111f4f1f444444444444444444f1f4444444444fee1
    1fef44f11fff44f1ff44444444444f44444f1ff444444444ffe1
    1fef44f1f44444f111f44444f444f1fff44f111f444444444fe1
    1fe444f1f44444f1ff4444ff1f44f1111f4f1ff4444444444ee1
    1fe4444f1fff44f1f4444f111f44f1fff44f1f4444444444fee1
    1fee4444f111f4f1f444f1ff1f44f1f4444f1f44444444fffee1
    1feef4444ff1f4f11ff4f1ff1f44f1f4444f11ff44444444eee1
    1feef444f111f4f1111fff11f1f44ff4444f1111f444444eeee1
    1feeff444fff444ffffff4fffffeff444444fffffff444ffeee1
    1feeefeff444efffffeefffeeeeeeff44ffeeeeeeeffffffeee1
    1fffeeeeffffeeeeeeeeeeeeeeeeeeefffeeeeeeeeffeeeeeee1
    1111111111111111111111111111111111111111111111111111
    `, SpriteKind.UI)
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
