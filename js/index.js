const container = document.querySelector(".container")
const hero__swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
  delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,
})

const gallery__content = document.querySelector(".gallery__block-right")
const gallery__swiper = new Swiper('.gallery__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,

  loop: true,
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },
});

$(".accordion").accordion({
  heightStyle: "content",
  active: 0
});

document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');
document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
tabsBtn.classList.remove('tabs-item--active')});

document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

const events = document.querySelector(".events__content")
const events__swiper = new Swiper('.events__swiper', {
  slidesPerView: 3,
  spaceBetween: 47,

  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.events__swiper-button-next',
  },
});

const projects = document.querySelector(".projects__content")
const projects__swiper = new Swiper('.projects__swiper', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,

  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },
});

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20,
      errorMessage: 'name is invalid'
    },
    tel: {
      required: true,
      errorMessage: 'tel is invalid',
      function: (name,value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
});

ymaps.ready(init);
  function init(){
    var myMap = new ymaps.Map("map", {
      center: [55.760, 37.615],
      zoom: 14.2
    });
    var myPlacemark = new ymaps.Placemark([55.759, 37.614419], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'images/map-icon.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
  };

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  allowHTML : true,
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
})

