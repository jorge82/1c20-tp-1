import time

from flask import Flask

TIMEOUT = 5
FACTORIAL = 2000
app = Flask(__name__)

@app.route("/")
def hello():
  return "Hello World!"

@app.route("/ping")
def ping():
  return "ping"

@app.route("/timeout")
def timeout():
  time.sleep(TIMEOUT)
  return "timeout"

@app.route("/intensivo")
def cpuIntensive():
  x = 1
  timeLimit = time.time() + 5 #five seconds from now
  for i in range(1, FACTORIAL):
    x *= i
  return "intensivo"

if (__name__ == "__main__"):
  app.run()