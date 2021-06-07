var image =  document.getElementById("imagen1");
var image2 =  document.getElementById("imagen2");
var image3 =  document.getElementById("imagen3");

            function changeImage()
            {
                if (image.getAttribute('src') == "ideas.png")
                {
                    image.src = "ideas-gif.gif";
                }
                else
                {
                    image.src = "ideas.png";
                }
            }

           function changeImage2() 
           {
        if (image2.getAttribute('src') == "phone.png")
                {
                    image2.src = "phone-gif.gif";
                }
                else
                {
                    image2.src = "phone.png";
                }
             }


 function changeImage3() {

        if (image3.getAttribute('src') == "rocket.png")
                {
                    image3.src = "rocket-gif.gif";
                }
                else
                {
                    image3.src = "rocket.png";
                }
              }
