let about = document.querySelector("#about");
let layer = document.querySelector(".layer");
let close = document.querySelector(".layer div button");


about.addEventListener("click",
    function(event) {
        event.preventDefault();
            setTimeout(function() {
                layer.style.display = "flex";
            }, 1000);
    });

close.addEventListener("click",
    function(event) {
        event.preventDefault();
        layer.style.display = "none";
    });

                                 //home//
let career = document.querySelector("#career")


career.addEventListener("click", function(event) {
    event.preventDefault();

    let destination = career.href;

    setTimeout(function() {
        window.location.href = destination;
    }, 1000);
});

                                    //view gallery//
let button2 = document.querySelector("#button2");
let gallery = document.querySelector("#gallery");
console.log(button2);
console.log(gallery);
            let pictures = [
                "1793438527338.jpg",
                "1793438554656.jpg",
                "1793438636020.jpg",
                "1793438660586.jpg",
                "1793438819266.jpg",
                "1793438847145.jpg",
                "1793438863084.jpg",
                "1793438972956.jpg",
                "1793439018167.jpg",
                "lkjhgfda.jpg",
            ];
            button2.addEventListener("click", 
                function() {
                    console.log("button clicked");
                    gallery.style.display = "grid";
                    console.log(gallery.style.disply);
                    pictures.forEach(function(photo) {

                        let img = document.createElement("img");
                        img.src = photo;
                        gallery.appendChild(img);
                    });
                });

                                          //find a turf//
let findaturf = document.querySelector(".findaturf");
let findaturfbutton = document.querySelector(".findaturfbutton");
let button1 = document.querySelector(".button1");

button1.addEventListener("click",
        function() {
            findaturf.style.display = "block";
        }
    );

findaturfbutton.addEventListener("click",
        function() {
            findaturf.style.display = "none";
        }
    );


                                //book now//

let booknow = document.querySelector(".booknow");
let booknowbutton = document.querySelector(".booknowbutton");
let headerbut = document.querySelector(".headerbut");

headerbut.addEventListener("click",
        function() {
            booknow.style.display = "block";
        }
    );

booknowbutton.addEventListener("click",
        function() {
            booknow.style.display = "none";
        }
    );
                                  //view all turfs//

/*let allturf = document.querySelector("#allturf");
let cards = document.querySelector(".cards");
console.log(cards);
allturf.addEventListener("click",
        function(event) {
            event.preventDefault();

            cards.classList.add("highlight");
        });*/