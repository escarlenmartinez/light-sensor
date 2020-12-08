while (true) {
    console.log("light level:" + input.lightLevel())
    if (input.lightLevel() > 70) {
        light.clear()
    } else if (input.lightLevel() < 70) {
        light.setAll(light.rgb(0, 0, 255))
    }
    
}
