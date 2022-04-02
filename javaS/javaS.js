window.addEventListener('DOMContentLoaded', function () {
// ____________________ anchors__________________
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function(c) {
c.preventDefault();
const blockID = anchor.getAttribute('href');
document.querySelector('' + blockID).scrollIntoView({
behavior: "smooth",
block: "start",
});
  });
};


// _____________________ burger ________________________

document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__list-burger').classList.toggle('header__list-burger-active')
});

document.querySelector('.header__btn-close').addEventListener('click', function () {
    document.querySelector('.header__list-burger').classList.toggle('header__list-burger-active')

});

document.querySelectorAll(".header__link-item").forEach(item => {
  item.addEventListener("click", function() {

    document.querySelector('.header__list-burger').classList.toggle('header__list-burger-active');

    document.querySelector('.body').classList.toggle('body-stop')
});
})

// ______________________ tablet-search ___________________
document.querySelector('.header__search-tablet-btn').addEventListener('click', function () {
  document.querySelector('.header__search-tablet-container').classList.add('header-search-tablet-container-active')
});

document.querySelector('.header__search-tablet-btn').addEventListener('click', function () {
  document.querySelector('.header__search-tablet-btn').classList.add('header-search-tablet-btn-hid')
});

// _______________________________ stop body _________________________
document.querySelector('.header__burger').addEventListener('click', function () {
  document.querySelector('.body').classList.add('body-stop')
});

document.querySelector('.header__btn-close').addEventListener('click', function () {
  document.querySelector('.body').classList.toggle('body-stop')
});

//----

document.querySelector('.header__search-tablet-close').addEventListener('click', function () {
  document.querySelector('.header__search-tablet-container').classList.toggle('header-search-tablet-container-active')
});

document.querySelector('.header__search-tablet-close').addEventListener('click', function () {
  document.querySelector('.header__search-tablet-btn').classList.toggle('header-search-tablet-btn-hid')
});

//------------------------------------------------------------------------------------------

// _____________________ executor ________________________

let btnArr;

document.querySelectorAll('.header__lower-list-btn').forEach(e => {
    e.addEventListener('click', e => {
        const btnAr = e.currentTarget.dataset.btnarr;

 //---------------------- 
        document.querySelectorAll('.header__lower-arrow').forEach(e => {
        if (!document.querySelector(`[data-arrow=${btnAr}]`).classList.contains('op')) {
            e.classList.remove('lower-arrow-active');
            e.classList.remove('op');
          document.querySelector(`[data-arrow=${btnAr}]`).classList.add('lower-arrow-active');
          btnArr = setTimeout(() => {
            document.querySelector(`[data-arrow=${btnAr}]`).classList.add('op');
          }, 0);
        }

// ---------------------
        if (document.querySelector(`[data-arrow=${btnAr}]`).classList.contains('op')) {
            clearTimeout(btnArr);
            document.querySelector(`[data-arrow=${btnAr}]`).classList.remove('lower-arrow-active');
            btnArr = setTimeout(() => {
                document.querySelector(`[data-arrow=${btnAr}]`).classList.remove('op');
              }, 0);
        }
        });
    });
});

// ___________
//------------------------------------------------------------------------------------------

let intervalId;

document.querySelectorAll('.header__lower-list-btn').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;

 //---------------------- 
        document.querySelectorAll('.header__lower-list-executor').forEach(e => {
        if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
            e.classList.remove('header__lower-list-executor-active');
            e.classList.remove('open');
          document.querySelector(`[data-target=${menu}]`).classList.add('header__lower-list-executor-active');
        intervalId = setTimeout(() => {
            document.querySelector(`[data-target=${menu}]`).classList.add('open');
          }, 0);
        }

// ---------------------
        if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
            clearTimeout(intervalId);
            document.querySelector(`[data-target=${menu}]`).classList.remove('header__lower-list-executor-active');
            intervalId = setTimeout(() => {
                document.querySelector(`[data-target=${menu}]`).classList.remove('open');
              }, 0);
        }
//----------------------- 
        // window.onclick = e => {
        //     if (e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
        //         return;
        //     } else {
        //         document.querySelector(`[data-target=${menu}]`).classList.remove('header__lower-list-executor-active');
        //         document.querySelector(`[data-target=${menu}]`).classList.remove('open');
               
        //     }
        // }
        });
    });
});

//------------------------------------------------------------------------------------------

    //_______________select
// Pass single element 
const element = document.querySelector('#gallery__art');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    valueComparer: (value1, value2) => {
        return value1 === value2;
      },
      sorter: (value1, value2) => {
        return value1 === value2;
      },
});
// // -_-_-_-_
// const multiDefault = () => {
//     const elements = document.querySelectorAll('.header__lower-select-mod');
//     elements.forEach(el => {
//         const choices = new Choices(el, {
//             searchEnabled: false,
//             itemSelectText: '',
//         });
//     });
// }

// multiDefault ();

//_____

// ___________________________________Swiper-gallery
var swiper = new Swiper('.gallery__swiper', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 40,
    speed: 700,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },

    breakpoints: {
    1700: {
      spaceBetween: 40,
    },

    1255: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },

    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 37,
    },

    310: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    
    },

  });
  //_____
//_____modal
const btns = document.querySelectorAll('.gallery__description-button');
const modal = document.querySelector('.modal');
const modalItem = document.querySelectorAll('.modal__gallery-item');
const btnClose = document.querySelectorAll('.modal__close');

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');

		modalItem.forEach((el) => {
			el.classList.remove('modal-gallery-item-active');
		});

    document.querySelector('.body').classList.add('body-stop')

		document.querySelector(`[data-target="${path}"]`).classList.add('modal-gallery-item-active');
		modal.classList.add('modal-active');
	});
});
// ---
  btnClose.forEach((el) => {
    el.addEventListener('click', function()  {
  
      modalItem.forEach((el) => {
        el.classList.remove('modal-gallery-item-active');
      });
  
      document.querySelector('.body').classList.toggle('body-stop')
      modal.classList.remove('modal-active');
    });
  });

 
//------------------------------------------------------------------------------------------

  // _______________________ accordion_______
  $( function() {
    $( "#accordion" ).accordion({
      collapsible: true,
      heightStyle: "content"
    });
  } );
  //------------------------------------------------------------------------------------------

  // ________________________ tab-accordion________
  document.querySelectorAll('.catalog__artist-btn').forEach(function(tab) {
    tab.addEventListener('click', function(event) {
const path = event.currentTarget.dataset.path;

document.querySelectorAll('.catalog__artist-btn').forEach(function (outlineBtn) {
  outlineBtn.classList.remove('artist-btn-active')});
  event.currentTarget.classList.add('artist-btn-active');

document.querySelectorAll('.catalog__description-item').forEach(function(tabContent) {
  tabContent.classList.remove('description-item-active')
});
document.querySelector(`[data-target="${path}"]`).classList.add('description-item-active');
    });
  });
//------------------------------------------------------------------------------------------

// ________________________ event__swiper

  var swiper = new Swiper('.event__swiper', {
    // Optional parameters
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    speed: 600,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.event__next',
      prevEl: '.event__prev',
    },

    breakpoints: {
      1700: {
        spaceBetween: 50,
      },  

      769: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 25,
      },

      550: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 31,
      },
  
      110: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      }
      },
  });
  //------------------------------------------------------------------------------------------

    // _____________________projects-swiper
    var swiper = new Swiper('.projects__swiper', {
      // Optional parameters
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      speed: 700,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.projects__next',
        prevEl: '.projects__prev',
      },

      breakpoints: {
        80000: {
          speed: 700,
        },

        1700: {
          spaceBetween: 50,
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
    
        1440: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
        },
    
        769: {
          spaceBetween: 50,
          slidesPerView: 2,
          slidesPerGroup: 2,
        },

        520: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 35,
        },
    
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0,
        }
        },
    });
  
    // ______________________ projects-tooltip

  tippy('.projects__tooltip', {
    position: 'top',
    duration: 500,
    arrow: true,
    trigger: 'click',
    theme: 'purple',
  });

    //------------------------------------------------------------------------------------------
//     ________________________________________ form / JustValidate

    const validation = new JustValidate('.address__call');

validation
  .addField('#name', [
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'не менее 2 символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Не более 30 символов',
    },

    {
    rule: 'required',
    value: true,
    errorMessage: 'Введите имя',
  },

  // ____
  ])

  .addField('#tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: 'Уажите номер телефона',
    },

    {
      rule: 'number',
      value: 'format 999-999-9999',
      errorMessage: 'Недопустимый формат',
    },

    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'Неверный номер',
    },

    {
      rule: 'maxLength',
      value: 12,
      errorMessage: 'Неверный номер',
    },
  ])

      //------------------------------------------------------------------------------------------
      // _______________________________map
      // Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);

    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат https://yandex.ru/map-constructor/location-tool/.
            center: [55.758505880294415,37.60108313558187],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            // controls: [''],
            zoom: 15,
        });

// _____
        // Создание геообъекта с типом точка (метка).
        
        var myPlacemark = new ymaps.Placemark([55.758505880294415,37.60108313558187], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/address__map-icon.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [-3, -3]
      });
      // Размещение геообъекта на карте.
      myMap.geoObjects.add(myPlacemark); 

      // Deleted
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('geolocationControl');
      myMap.controls.remove('rulerControl');
      myMap.controls.remove('fullscreenControl');
//______
  }
  //------------------------------------------------------------------------------------------


// ------------------ end -------------------
});