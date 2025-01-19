jQuery(document).ready(function($) {
    // Activate Carousel
    $("#mainCarousel").carousel({
        interval: 4000
    });

    // Enable Carousel Indicators
    $(".item1").click(function(e) {
        e.preventDefault();
        $("#mainCarousel").carousel(0);
    });
    $(".item2").click(function(e) {
        e.preventDefault();
        $("#mainCarousel").carousel(1);
    });
    $(".item3").click(function(e) {
        e.preventDefault();
        $("#mainCarousel").carousel(2);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(e) {
        e.preventDefault();
        $("#mainCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(e) {
        e.preventDefault();
        $("#mainCarousel").carousel("next");
    });
    
    
    $('.carousel .carousel-caption').css('zoom', $('.carousel').width()/1250);
    
    
    $('.dropdown-menu').addClass('animated zoomIn');


    
    
    
});




// main carousel end
// business unit start
jQuery(document).ready(function($) {
  
    // Activate Carousel
    $("#businessUnitCarousel").carousel({
        interval: 4000,
        touch: true
    });

    // Enable Carousel Indicators
    $(".item1").click(function(e) {
        e.preventDefault();
        $("#businessUnitCarousel").carousel(0);
    });
    $(".item2").click(function(e) {
        e.preventDefault();
        $("#businessUnitCarousel").carousel(1);
    });
    $(".item3").click(function(e) {
        e.preventDefault();
        $("#businessUnitCarousel").carousel(2);
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(e) {
        e.preventDefault();
        $("#businessUnitCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(e) {
        e.preventDefault();
        $("#businessUnitCarousel").carousel("next");
    });
});

// Product carosoul
jQuery(document).ready(function($) {
    // Activate Carousel
    $("#productsCarousel").carousel({
        interval: 4000,
        touch: true
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(e) {
        e.preventDefault();
        $("#productsCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(e) {
        e.preventDefault();
        $("#productsCarousel").carousel("next");
    });
});
//awardsCarousel
jQuery(document).ready(function($) {
    // Activate Carousel
    $("#awardsCarousel").carousel({
        interval: 4000,
        touch: true
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(e) {
        e.preventDefault();
        $("#awardsCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(e) {
        e.preventDefault();
        $("#awardsCarousel").carousel("next");
    });
});
//clientsCarousel
jQuery(document).ready(function($) {
    // Activate Carousel
    $("#clientsCarousel").carousel({
        interval: 4000,
        touch: true
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(e) {
        e.preventDefault();
        $("#clientsCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(e) {
        e.preventDefault();
        $("#clientsCarousel").carousel("next");
    });
});
//companyOverviewCarousel
jQuery(document).ready(function($) {
    // Activate Carousel
    $("#companyOverviewCarousel").carousel({
        interval: 4000,
        touch: true
    });

    // Enable Carousel Controls
    $(".carousel-control-prev").click(function(e) {
        e.preventDefault();
        $("#companyOverviewCarousel").carousel("prev");
    });
    $(".carousel-control-next").click(function(e) {
        e.preventDefault();
        $("#companyOverviewCarousel").carousel("next");
    });
});



// ssg-agro-product-wise-carosel

jQuery(document).ready(function($) {
    // Activate Carousel
    $("#fishBusinessUnitCarousel").carousel({
        interval: 4000,
        touch: true
    });

    // Enable Carousel Controls
    $(".fish-carousel.carousel-control-prev").click(function(e) {
        e.preventDefault();
        $("#fishBusinessUnitCarousel").carousel("prev");
    });
    $(".fish-carousel.carousel-control-next").click(function(e) {
        e.preventDefault();
        $("#fishBusinessUnitCarousel").carousel("next");
    });
});

jQuery(document).ready(function($) {
    // Activate Carousel
    $("#fishScalBusinessUnitCarousel").carousel({
        interval: 4000,
        touch: true
    });

    // Enable Carousel Controls
    $(".fish-scales.carousel-control-prev").click(function(e) {
        e.preventDefault();
        $("#fishScalBusinessUnitCarousel").carousel("prev");
    });
    $(".fish-scales.carousel-control-next").click(function(e) {
        e.preventDefault();
        $("#fishScalBusinessUnitCarousel").carousel("next");
    });
});

jQuery(document).ready(function($) {
    // Activate Carousel
    $("#charcoalBusinessUnitCarousel").carousel({
        interval: 4000,
        touch: true
    }); 
    $(".charcoal.carousel-control-prev").click(function(e) {
        e.preventDefault();
        $("#charcoalBusinessUnitCarousel").carousel("prev");
    });
    $(".charcoal.carousel-control-next").click(function(e) {
        e.preventDefault();
        $("#charcoalBusinessUnitCarousel").carousel("next");
    });
});
jQuery(document).ready(function($) {
    // Activate Carousel
    $("#seedsBusinessUnitCarousel").carousel({
        interval: 4000,
        touch: true
    }); 
    $(".seeds.carousel-control-prev").click(function(e) {
        e.preventDefault();
        $("#seedsBusinessUnitCarousel").carousel("prev");
    });
    $(".seeds.carousel-control-next").click(function(e) {
        e.preventDefault();
        $("#seedsBusinessUnitCarousel").carousel("next");
    });
});

jQuery(document).ready(function($) {
    // Activate Carousel
    $("#potatoBusinessUnitCarousel").carousel({
        interval: 4000,
        touch: true
    }); 
    $(".potato.carousel-control-prev").click(function(e) {
        e.preventDefault();
        $("#potatoBusinessUnitCarousel").carousel("prev");
    });
    $(".potato.carousel-control-next").click(function(e) {
        e.preventDefault();
        $("#potatoBusinessUnitCarousel").carousel("next");
    });
});
// ssg-agro-product-wise-carosel

/// bootstrap fix
$(function() {
    var nua = navigator.userAgent;
    var isAndroid =
        nua.indexOf("Mozilla/5.0") > -1 &&
        nua.indexOf("Android ") > -1 &&
        nua.indexOf("AppleWebKit") > -1 &&
        nua.indexOf("Chrome") === -1;
    if (isAndroid) {
        $("select.form-control")
            .removeClass("form-control")
            .css("width", "100%");
    }
});

// mobile menu

jQuery(document).ready(function($) {
    $(".navbar-toggler").click(function() {
        $("#menu-column").toggleClass("fullwidth-mobile-menu");
    });
    $(".search-icon-top").click(function() {
        $(".search-input").toggle("slow");
    });
});

$(function() {
    // ------------------------------------------------------- //
    // Multi Level dropdowns
    // ------------------------------------------------------ //
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();

        $(this)
            .siblings()
            .toggleClass("show");

        if (!$(this)
            .next()
            .hasClass("show")
        ) {
            $(this)
                .parents(".dropdown-menu")
                .first()
                .find(".show")
                .removeClass("show");
        }
        $(this)
            .parents("li.nav-item.dropdown.show")
            .on("hidden.bs.dropdown", function(e) {
                $(".dropdown-submenu .show").removeClass("show");
            });
    });
});



function menuHover(evt, selector) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(selector).style.display = "block";
  evt.currentTarget.className += " active";
}


