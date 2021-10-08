var SLIDESHOW = (function () {
  var slideBanner = function () {
    var swiper_banner = new Swiper(".swiper-banner", {
      loop: true,

      pagination: {
        el: ".banner-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".banner-button-next",
        prevEl: ".banner-button-prev",
      },
      autoplay: {
        delay: 3000,
      },
    });
  };
  var slideCateHome = function () {
    var swiper_catehome = new Swiper(".list-cate-swiper", {
      //   loop: true,
      slidesPerView: 5,
      spaceBetween: 30,

      pagination: {
        el: ".swiper-cate-home",
        clickable: true,
      },
    });
  };
  var slideComment = function () {
    var swiper_comment = new Swiper(".swiper-user-comment", {
      //   loop: true,
      cssMode: true,
      navigation: {
        nextEl: ".comment-button-next",
        prevEl: ".comment-button-prev",
      },
      pagination: {
        el: ".comment-pagination",
        clickable: true,
      },
    });
  };
  var slideInstagram = function () {
    var swiper_instagram = new Swiper(".swiper-instagram", {
      //   loop: true,
      slidesPerView: 5,
      spaceBetween: 0,

      pagination: {
        el: ".instagram-pagination",
        clickable: true,
      },
    });
  };
  var slideUser = function () {
    var swiper_user = new Swiper(".swiper-user", {
      //   loop: true,
      slidesPerView: 4,
      spaceBetween: 0,

      pagination: {
        el: ".user-pagination",
        clickable: true,
      },
    });
  };
  return {
    _: function () {
      slideCateHome();
      slideBanner();
      slideComment();
      slideInstagram();
      slideUser();
    },
  };
})();
var WEBS = (function () {
  var backTop = function () {
    var backTop = $(".back-to-top");
    $(window).scroll(function (event) {
      if ($(this).scrollTop() > 500) {
        backTop.show(200);
      } else {
        backTop.hide(200);
      }
    });
    backTop.click(function (event) {
      $("html,body").animate({ scrollTop: 0 }, 300);
    });
  };
  var scrollHeader = function () {
    if ($(".header").length > 0) {
      var header = $(".header").height();
      var height = $(this).scrollTop();
      $(window).scroll(function () {
        var header = $(".header").height();
        var height = $(this).scrollTop();
        if (height > header) {
          $(".header").addClass("fixed");
        } else {
          $(".header").removeClass("fixed");
        }
      });
      if (height > header) {
        $(".header").addClass("fixed");
      } else {
        $(".header").removeClass("fixed");
      }
    }
  };
  return {
    _: function () {
      backTop();
      scrollHeader();
    },
  };
})();
var MENU = (function () {
  var menu = function () {
    if ($(document).width() <= 991) {
      $(".menu").find("ul>li>ul").hide();
      $(".menu")
        .find("ul li")
        .each(function () {
          if ($(this).find("ul>li").length > 0) {
            $(this).prepend(
              '<span class="show-menu__products"><i class="fa fa-angle-down"></i></span>'
            );
            $(this).addClass("active");
          }
        });
    }
    $(".menu")
      .find("li span")
      .click(function (event) {
        var ul = $(this).nextAll("ul");
        if (ul.is(":hidden") === true) {
          ul.slideDown(200);
        } else {
          ul.slideUp(200);
        }
      });
  };
  var openMenuMobile = function () {
    if ($(".nav-menu").length > 0) {
      $(".show_menu").click(function () {
        $(".header-body").addClass("active");
        $("body").addClass("overflow-hidden");
        $(".nav-menu").toggleClass("nav_active");
        $(".menu_container").toggleClass("active");
        $(".nav-menu").toggleClass("col_active");
        $(".bg-menu").toggleClass("active");
        $(".bg-menu").addClass("smooth");
        $(".nav-menu").addClass("smooth");
        $(".header-body").addClass("smooth");
      });
    }
  };
  var closeMenuMobile = function () {
    if ($(".nav-menu").length > 0) {
      $(".bg-menu").click(function () {
        $("body").removeClass("overflow-hidden");
        $(".nav-menu").removeClass("nav_active");
        $(".menu_container").removeClass("active");
        $(".nav-menu").removeClass("col_active");
        $(".bg-menu").removeClass("active");
        $(".header-body").removeClass("active");
      });
    }
  };
  var activeMenu = function () {
    var url = window.location.pathname;
    urlRegExp = new RegExp(url.replace(/\/$/, "") + "$");
    if (urlRegExp != "/$/") {
      $(".menu>ul>li>a").each(function () {
        if (urlRegExp.test(this.href.replace(/\/$/, ""))) {
          $(this).addClass("active");
          $(this).parents(".menu>ul>li").children("a").addClass("active");
        }
      });
    }
  };
  return {
    _: function () {
      activeMenu();
      menu();
      openMenuMobile();
      closeMenuMobile();
    },
  };
})();

$(document).ready(function () {
  $.ajaxSetup({
    data: {
      csrf_tech5s_name: $('meta[name="csrf-token"]').attr("content"),
    },
  });
  success = function (json) {
    console.log(1);
    if (json.code == 200) {
      toastr.success(json.message);
      setTimeout(function () {
        window.location.reload();
      }, 800);
    } else {
      toastr.error(json.message);
    }
  };
  MENU._();
  SLIDESHOW._();
  WEBS._();
});
$(document).ready(function(){
	// Add minus icon for collapse element which is open by default
	$(".collapse.show").each(function(){
		$(this).prev(".card-header").addClass("highlight");
	});
	
	// Highlight open collapsed element 
	$(".card-header .btn").click(function(){
		$(".card-header").not($(this).parents()).removeClass("highlight");
		$(this).parents(".card-header").toggleClass("highlight");
	});
});
