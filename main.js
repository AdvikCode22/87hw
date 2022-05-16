canvas = new fabric.Canvas("myCanvas")

ranger_x = 10
ranger_y = 50

ranger_width = 300
ranger_height = 700

rangerimg = ""

function updaterr(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        rangerimg = Img
        rangerimg.scaleToWidth(ranger_width)
        rangerimg.scaleToHeight(ranger_height)

        rangerimg.set({
            top: ranger_y , left: ranger_x
        });
        canvas.add(rangerimg)
    })
}

window.addEventListener("keydown" , my_keydown)

function my_keydown(e){
    keyPressed = e.keyCode

    if(keyPressed == "82"){
        updaterr("rr1.png")
    }

    if(keyPressed == "71"){
        updaterr("gr.png")
        ranger_x = 410
    }

    if(keyPressed == "89"){
        updaterr("yr.png")
        ranger_x = 660
    }

    if(keyPressed == "80"){
        updaterr("pr.png")
        ranger_x = 1000
    }

    if(keyPressed == "66"){
        updaterr("br.png")
        ranger_x = 1100
    }
}