basic.forever(function () {
    basic.showString("TEMP: ")
    basic.showNumber(Environment_IoT.temperature(DHT11Type.DHT11_temperature_C, DigitalPin.P0))
    basic.showString("Humi: ")
    basic.showNumber(Environment_IoT.temperature(DHT11Type.DHT11_humidity, DigitalPin.P0))
})
