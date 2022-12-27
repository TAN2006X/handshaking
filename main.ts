input.onButtonPressed(Button.A, function () {
    counter = 0
})
let counter = 0
basic.showIcon(IconNames.Heart)
counter = 0
basic.forever(function () {
    if (input.acceleration(Dimension.Y) > 100) {
        counter += 1
    } else {
        basic.showNumber(counter)
    }
})
