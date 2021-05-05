radio.onReceivedValue(function (name, value) {
    if (name == "p_1" && value == 0) {
    	
    } else if (name == "p_1" && value > 0) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, value)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, value)
    } else if (name == "p_1" && value < 0) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, value)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, value)
    } else {
    	
    }
    if (name == "p_2" && value == 0) {
    	
    } else if (name == "p_2" && value > 0) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, value)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, value)
    } else if (name == "p_2" && value < 0) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, value)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, value)
    } else {
    	
    }
})
kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 100)
radio.setGroup(197)
kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
