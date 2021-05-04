radio.onReceivedValue(function (name, value) {
    if (0 == 0) {
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
        kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
    } else if (0 >= 0) {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Forward, 0)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Reverse, 0)
    } else {
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 0)
        kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 0)
    }
    if (0 >= 0) {
    	
    } else {
    	
    }
})
radio.setGroup(197)
kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor2)
kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
