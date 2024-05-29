let care = 1;
let outlet = 1;
let help = 1;

var showCare = setInterval(petCare, 10);
function petCare(){
    care++;
    document.querySelector("#number1").innerHTML = care;
    if (care == 3500){
        clearInterval(showCare);
    }
}

var outletCount = setInterval(outLet, 10);
function outLet(){
    outlet++;
    document.querySelector("#number2").innerHTML = outlet;
    if (outlet == 900){
        clearInterval(outletCount);
    }
}

var petHelp = setInterval(petHelpCount, 10);
function petHelpCount(){
    help++;
    document.querySelector("#number3").innerHTML = help;
    if (help == 2000){
        clearInterval(petHelp);
    }
}

// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({
//       loop: true,
//       margin: 10,
//       dots: true,
//       items: 1,
//       nav: false,
//       autoplay: true,
//       autoplaySpeed: 1000,
//       smartSpeed: 1500,
//       autoplayHoverPause: true,
//       responsiveClass: true,
//       responsive: {
//         0: {
//           items: 1,
//           nav: false,
//         },
//         600: {
//           items: 1,
//           nav: false,
//         },
//         1000: {
//           items: 1,
//           nav: false,
//           loop: false,
//         },
//       },
//     });
//   });

// $('.testimonial').slick({
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   });


// const toggleBtn = document.getElementsByClassName('navbar-toggle')[0];
// const navbarLinks = document.getElementsByClassName('navbar-links');
// toggleBtn.addEventListener('click', function(){
//     for(var i = 0; i<navbarLinks.length; i++)
//     navbarLinks[i].classList.toggle('activeClass');
    
// });
