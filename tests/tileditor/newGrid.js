<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Tile Editor</title>
        <style>
            .flex-container{
                display: flex;
                flex-direction: row;
            }
            .item-menu{
                align-content: center;
                margin:30px;

            }
            .button{
                background-color:#f44336;; /* Green */
                border: none;
                color: white;
                padding: 32px 32px 32px 32px;
                margin: 20px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
            }

        </style>
    </head>
    <body>
        <div><h1 style="text-align: center;">Tile Editor</h1></div>
        <!-- <input type="file" id="myFile"> -->
        <div class="flex-container">
        <div>
            <canvas id="main" width= 1100.037 height=470.476 style="background-color: white;"></canvas>
        </div>
        <div class = "item-menu">
            <h3 style="text-align: center;">Menu</h3>
            <div class="buttons">
                <a href="#" class ="button" onclick ="select()">Item 1</a>
                <a href="#" class ="button">Item 2</a>
                <a href="#" class ="button">Item 3</a>
                <a href="#" class ="button">Item 4</a>
                <a href="#" class ="button">Item 5</a>
                <a href="#" class ="button">Item 6</a>
            </div>
        </div>
        </div>
    </body>
    <script>
        function draw(){
            var drawing = document.getElementById('main')
            var con = drawing.getContext("2d")
            var map = document.getElementById("myFile")
            con.drawImage(map, 0, 0, 0, 0)
        }
        function select(){

            let monkey = await loadImage(
          "/" + require("./Code-Monkey.png").default
        );

        }
        async function loadImage(src) {
            let img = new Image();
            img.src = src;
            return new Promise((res, rej) => {
                img.onload = () => {
                res(img);
                };
            });
        }
    </script>
</html>