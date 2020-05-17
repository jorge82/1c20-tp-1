import time

from flask import Flask

TIMEOUT = 5
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
  startTime = time.time()
  while ((time.time() - startTime)*1000 <= 500):
    pass
  return "intensivo"

if (__name__ == "__main__"):
  app.run()