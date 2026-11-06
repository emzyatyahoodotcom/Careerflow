                            //about//         
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

                             //TurfZone//
let TurfZone = document.querySelector("#TurfZone")
let destination = TurfZone.href;

TurfZone.addEventListener("click", function(event) {
    event.preventDefault();

    setTimeout(function() {
        window.location.href = destination;
    }, 1000);
});

                                //sign up//

let signup = document.querySelector(".signup");
let signupbutton = document.querySelector(".signupbutton");
let headerbut = document.querySelector(".headerbut");

headerbut.addEventListener("click",
        function() {
            signup.style.display = "block";
        }
    );

signupbutton.addEventListener("click",
        function() {
            signup.style.display = "none";
        }
    );

                               //#kurs//
let kurs = document.querySelector("#kurs");
let kursdiv = document.querySelectorAll(".topic");
let message = document.querySelector("#message");
let searchform = document.querySelector(".searchform");
let searchbutton = document.querySelector("#searchinput");
let searchactions = document.querySelectorAll(".searchaction");

searchactions.forEach(function(action) {
    action.addEventListener("click",
        function() {
            searchform.requestSubmit();
            
        });
});

searchform.addEventListener("submit", function(event) {
    event.preventDefault();
    let searchvalue = searchinput.value.trim().toLowerCase();
    let found = false;
    kursdiv.forEach(function(topic) {
        let topicname = topic.querySelector("h5").textContent.toLowerCase();
        if (topicname === searchvalue) {
            topic.style.display = "block";
            found = true;
        } else {
            topic.style.display = "none";
        }
    });
     
    if (found) {
        kurs.style.display = "block";
        message.textContent = "";
    } else {
        kurs.style.display = "none";
        message.textContent = searchvalue === ""
        ? "Please inter HTML, CSS or Javascript."
        : "No result found.";
    }
});