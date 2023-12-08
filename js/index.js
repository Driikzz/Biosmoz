$(document).ready(function(){
    $('.parallax').parallax();
    $('.collapsible').collapsible();
    $('.autoplay').slick({
        arrows: true,
        prevArrow:"<a class='button-slider-header-prev hide-on-med-and-down'><i class='medium material-icons'>arrow_back</i></a>",
        nextArrow:" <a class='button-slider-header-next hide-on-med-and-down'><i class='medium material-icons'>arrow_forward</i></a>",
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable:false,
        infinite:true,
        pauseOnHover:false,
        pauseOnFocus:false,
        dots: true,
    });
    $('.single-item').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        arrows: false,
        dots: false,
        verticalSwiping: true,
        pauseOnHover:false,
        pauseOnFocus:false,
      });
      $('.dropdown-trigger1').dropdown({
        hover: true,
        constrainWidth: false,
        alignment: 'center',
        container: '.test',
        coverTrigger: false,
      });
      $('.dropdown-trigger2').dropdown({
        hover: true,
        constrainWidth: false,
        alignment: 'center',
        container: '.test',
        coverTrigger: false,
      });
      $('.sidenav').sidenav({
        draggable: true,
      });
  });

var accordions = document.getElementsByClassName("accordion");
for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click",function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}