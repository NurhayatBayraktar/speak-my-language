input.onButtonPressed(Button.A, function () {
    basic.showString("Bonjour")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Au revoir")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Merci")
    basic.showLeds(`
        . # . # .
        . # . # .
        # . . . #
        # . . . #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showIcon(IconNames.No)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
