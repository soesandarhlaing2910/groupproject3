// START HEADER SECTION


// For navabr
var getclosebtn = document.getElementsByClassName("close-btns");
// console.log(getclosebtn);
var getmenus =  document.getElementById("navs");
// console.log(getmenus);


var getnavbtns = document.getElementsByClassName("navbarbtns");
getnavbtns[0].addEventListener('click',function(){
	getmenus.style.display="block";
});


getclosebtn[0].addEventListener('click',function(){
	getmenus.style.display="none";

});

// END HEADER SECTION




// START NEW AND EVENTS SECTION

$(document).ready(function(){

		$("#lightslider").lightSlider({
		// auto: true,
		item: 3,
        loop: true,
        loop: true,
        slideMove: 1,
        slideMargin:30,
      	slideWidth:200,
        speed: 1000,

          responsive : [
            {
                breakpoint:990,
                settings: {
                    item:2,
                    slideMove:1,
                    slideMargin:30,
                  }
            },
            {
                breakpoint:770,
                settings: {
                    item:1,
                    slideMove:1
                  }
            }
        ]



    // });
	}).play(3000);

});


// END NEW AND EVENTS SECTION




// START FOOTER SECTION
let years = new Date();
// console.log(years.getFullYear());
document.getElementById("getyear").innerHTML = years.getFullYear();
 
// END FOOTER SECTION