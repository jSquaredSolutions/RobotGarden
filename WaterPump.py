import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BCM)
GPIO.setup(21,GPIO.OUT)
print("Going HIgh")
GPIO.output(21,GPIO.HIGH)
print("Sleeping for 10")
time.sleep(10)
print("Going Low")
GPIO.output(21,GPIO.LOW)
time.sleep(20)
GPIO.cleanup()
