bluetooth.onBluetoothConnected(function () {
    basic.showString("C")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("r")
    basic.showIcon(IconNames.No)
    basic.clearScreen()
})
let Roll = 0
let Pitch = 0
bluetooth.startUartService()
basic.forever(function () {
    Pitch = input.rotation(Rotation.Pitch)
    Roll = input.rotation(Rotation.Roll)
    if (Pitch < -30) {
        bluetooth.uartWriteString("U")
        basic.showArrow(ArrowNames.North)
    } else if (Pitch > 30) {
        bluetooth.uartWriteString("D")
        basic.showArrow(ArrowNames.South)
    } else if (Roll < -30) {
        bluetooth.uartWriteString("L")
        basic.showArrow(ArrowNames.West)
    } else if (Roll > 30) {
        bluetooth.uartWriteString("R")
        basic.showArrow(ArrowNames.East)
    }
    basic.pause(150)
})
