radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    basic.showString("F")
    CtoF = input.temperature()
    F = CtoF * 1.8
    F = F + 32
    F = Math.round(F)
    radio.sendString("" + (F))
})
input.onButtonPressed(Button.A, function () {
    CtoF = input.temperature()
    F = CtoF * 1.8
    F = F + 32
    F = Math.round(F)
    basic.showString("" + (F))
    basic.showString("F")
    radio.sendNumber(F)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Ready!") {
        basic.showString("Ready!")
    } else {
        basic.showString(receivedString)
    }
})
let F = 0
let CtoF = 0
radio.setGroup(2)
radio.sendString("Init.")
basic.pause(2000)
radio.sendString("Ready!")
basic.forever(function () {
    if (input.lightLevel() > 100) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            . # # # .
            . . # . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            . # # # .
            . # # # .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            # . . . #
            . # # # .
            # # # # #
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else {
        if (input.lightLevel() < 100) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . . . . .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                # # # # .
                # # # # .
                # # # # .
                . . . . .
                `)
            basic.showLeds(`
                . . . . .
                # # # # .
                # # # # .
                # # # # .
                . # # # .
                `)
            basic.showLeds(`
                . # # # .
                # # # # .
                # # # # .
                # # # # .
                . # # # .
                `)
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                . # # # .
                `)
        }
    }
})
