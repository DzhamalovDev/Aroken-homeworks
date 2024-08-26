(function () {
      // бургер
      document.addEventListener("click", burgerInit);

      function burgerInit(e) {
         const burgerIcon = e.target.closest(".burger-menu");
         const burgerNavLink = e.target.closest(".general__top-link");
   
         if (!burgerIcon && !burgerNavLink) return;
   
         if (document.documentElement.clientWidth > 1050) return;
   
         if (!document.body.classList.contains("body--opened-menu")) {
            document.body.classList.add("body--opened-menu");
         } else {
            document.body.classList.remove("body--opened-menu");
         }
      }
      //ссылка 
      

   // Слайдер-галерея
   new Swiper(".hero__mov-slider", {
      // If we need pagination
      pagination: {
         el: ".hero__mov-pagination",
         type: "fraction",
      },

      // Navigation arrows
      navigation: {
         nextEl: ".hero-button-next",
         prevEl: ".hero-button-prev",
      },
   });
   new Swiper(".hero__bottom-slider", {
      // If we need pagination
      pagination: {
         el: ".hero__bottom-pagination",
         type: "fraction",
      },

      // Navigation arrows
      navigation: {
         nextEl: ".hero__bottom-next",
         prevEl: ".hero__bottom-prev",
      },
   });
   
    // Слайде-отзывы

   new Swiper(".customer__slider", {
      // If we need pagination
      pagination: {
         el: ".customer__pagination",
         type: "fraction",
      },

      // Navigation arrows
      navigation: {
         nextEl: ".hero-button-next",
         prevEl: ".hero-button-prev",
      },
   });

   //  Табы

   document.querySelectorAll(".directions__list-item").forEach((item) => {
      item.addEventListener("click", function (e) {
         e.preventDefault();

         const id = e.target.getAttribute('href').replace('#', '')

         document.querySelectorAll(".directions__list-item")
            .forEach((child) =>
               child.classList.remove("general__top-link--active")
            );
            document.querySelectorAll(".tab__content")
            .forEach((child) =>
               child.classList.remove("tab__content--show")
            );

            item.classList.add('general__top-link--active')
            document.getElementById(id).classList.add('tab__content--show')


      });
   });
   document.querySelector('.directions__list-item').click()
    

   // Табы-2


   document.querySelectorAll(".our__projects-link").forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();

        const id = item.getAttribute('href').replace('#', '');

        document.querySelectorAll(".our__projects-link")
            .forEach((child) =>
                child.classList.remove("general__top-link--active")
            );
        document.querySelectorAll(".tab__content-projects")
            .forEach((child) =>
                child.classList.remove("tab__content-projects--show")
            );

        item.classList.add('general__top-link--active');
        document.getElementById(id).classList.add('tab__content-projects--show');
    });
});

document.querySelector('.our__projects-link').click();


   //Свайпер

   new Swiper('.gallery__swiper', {

     spaceBetween: 30,
     slidesPerView: 3.5,

     breakpoints:{

      319: {
         slidesPerView: 1.3,
         spaceBetween: 15,
      },
      451: {
         slidesPerView: 1.5,
         spaceBetween: 20,
      },
      501: {
         slidesPerView: 2,
         spaceBetween: 20,
      },
      801: {
         slidesPerView: 3,
         spaceBetween: 20,
      },
      1250:{
         spaceBetween: 20,
     slidesPerView: 3.3,
      }
     }
   });

   // Слайдер-отзыв 

   new Swiper('.customer__slider', {

      spaceBetween: 30,
      slidesPerView: 2,

      // Navigation arrows
      navigation: {
         nextEl: ".hero-button-next",
         prevEl: ".hero-button-prev",
      },
      breakpoints:{
         319:{
            slidesPerView: 1,
         },
         799:{
            slidesPerView: 1.2,
         },
         949:{
            slidesPerView: 1.8,
         },

         1099:{
            slidesPerView: 2,
         }
      }
    });

    // Слайдер-инстаграм

    new Swiper('.inst__swiper', {

      spaceBetween: 30,
      slidesPerView: 4,

      breakpoints:{
         301:{
            spaceBetween: 20,
            slidesPerView: 1.2,
         },
         350:{
            spaceBetween: 15,
            slidesPerView: 1.3,
         },
         401:{
            spaceBetween: 15,
            slidesPerView: 1.4,
         },
         450:{
            spaceBetween: 30,
            slidesPerView: 1.7,
         },
         500:{
            spaceBetween: 7,
            slidesPerView: 1.8,
         },
         550:{
            spaceBetween: 5,
            slidesPerView: 2,
         },
         600:{
            spaceBetween: 10,
            slidesPerView: 2.2,
         },
         650:{
            spaceBetween: 5,
            slidesPerView: 2.3,
         },
         700:{
            spaceBetween: 15,
            slidesPerView: 2.6,
         },
         750:{
            spaceBetween: 10,
            slidesPerView: 2.7,
         },
         803:{
            spaceBetween: 20,
            slidesPerView: 3,
         },

         899:{
            spaceBetween: 15,
            slidesPerView: 3.2,
         },
         920:{
            spaceBetween: 10,
            slidesPerView: 3.2,
         },
         950:{
            spaceBetween: 15,
            slidesPerView: 3.3,
         },
         1001:{
            spaceBetween: 20,
            slidesPerView: 3.7,
         },
         1110:{
            slidesPerView: 4,
         },
         1251:{
            slidesPerView: 4,
         },
        
      }
    });
})();
