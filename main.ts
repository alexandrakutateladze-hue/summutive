
let lightThreshold = 100 // Adjust after calibration
let lightOnTime = 0
let lightState = false

basic.forever(function () {
    let lightLevel = input.lightLevel()
    if (lightLevel > lightThreshold) {
        if (!lightState) {
            // Light just turned on
            lightState = true
            basic.showIcon(IconNames.Happy)
        }
        // Count time in seconds
        lightOnTime += 1
    } else {
        if (lightState) {
            // Light just turned off
            lightState = false
            basic.showIcon(IconNames.Sad)
        }
    }
    basic.pause(1000) // 1 second interval
})


})
