const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

const {Board, Servo} = require("johnny-five");
const board = new Board();



app.get('/rotatePlastic', (req, res) => {
    res.send("Rotate 90!")
    servoOne()
})

app.get('/rotateRestafval', (req, res) => {
    res.send("Rotate 0!")
    servoTwo()
})

app.listen(3000, () => {
    console.log("Server has started and is listening on port 3000")
})

board.on("ready", () => {
  const servo = new Servo(10);

  // Add servo to REPL (optional)
  board.repl.inject({
    servo
  });



servoOne = () => {
    servo.to(180);
}

servoTwo = () => {    
    servo.to(90);
}
  


//   servo.sweep();
});
