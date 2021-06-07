var image =  document.getElementById("imagen1");
var image2 =  document.getElementById("imagen2");
var image3 =  document.getElementById("imagen3");

            function changeImage()
            {
                if (image.getAttribute('src') == "img/ideas.png")
                {
                    image.src = "img/ideas-gif.gif";
                }
                else
                {
                    image.src = "img/ideas.png";
                }
            }

           function changeImage2() 
           {
        if (image2.getAttribute('src') == "img/phone.png")
                {
                    image2.src = "img/phone-gif.gif";
                }
                else
                {
                    image2.src = "img/phone.png";
                }
             }


 function changeImage3() {

        if (image3.getAttribute('src') == "img/rocket.png")
                {
                    image3.src = "img/rocket-gif.gif";
                }
                else
                {
                    image3.src = "img/rocket.png";
                }
              }