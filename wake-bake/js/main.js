(function () {
   // Бургер

   document.addEventListener("click", burgerInit);

   function burgerInit(e) {
      const burgerIcon = e.target.closest(".burger__icon");
      const burgerNavLink = e.target.closest(".nav__link");

      if (!burgerIcon && !burgerNavLink) return;

      if (document.documentElement.clientWidth > 900) return;

      if (!document.body.classList.contains("body--opened-menu")) {
         document.body.classList.add("body--opened-menu");
      } else {
         document.body.classList.remove("body--opened-menu");
      }
   }
   // Модалка
   const modal = document.querySelector(".modal");
   const modalButton = document.querySelector(".about__img-button");

   modalButton.addEventListener("click", openModal);
   modal.addEventListener("click", closeModal);

   function openModal(e) {
      e.preventDefault();
      document.body.classList.toggle("modal--opened-menu");
   }

   function closeModal(e) {
      e.preventDefault();

      const target = e.target;

      if (
         target.closest(".modal__cancel") ||
         target.classList.contains("modal")
      ) {
         document.body.classList.remove("modal--opened-menu");
      }
   }

   // Табы

   const tabControls = document.querySelector(".tab__controls");

   tabControls.addEventListener("click", toggleTab);

   function toggleTab(e) {
      const tabControl = e.target.closest(".tab__controls-item");

      if (!tabControl) return;

      e.preventDefault();
      if (tabControl.classList.contains("tab__controls-item--active")) return;

      const tabContentID = tabControl.getAttribute("href");
      const tabContent = document.querySelector(tabContentID);
      const activeControl = document.querySelector(
         ".tab__controls-item--active"
      );
      const activeContent = document.querySelector(".tab-content--show");

      activeContent.classList.remove("tab-content--show");
      activeControl.classList.remove("tab__controls-item--active");

      tabContent.classList.add("tab-content--show");
      tabControl.classList.add("tab__controls-item--active");
   }
   //Аккордеон

   const accordionLists = document.querySelectorAll(".accordion__list");

   accordionLists.forEach((el) => {
      el.addEventListener("click", (e) => {
         const accordionlist = e.currentTarget;
         const accordionOpenedItem = accordionlist.querySelector(
            ".accordion__list-item--opened"
         );
         const accordionOpenedContent = accordionlist.querySelector(
            ".accordion__list-item--opened .accordion-list__content"
         );
         const accordionControl = e.target.closest(".accordion__list-control");
         if (!accordionControl) return;

         const accordionItem = accordionControl.parentElement;
         const accordionContent = accordionControl.nextElementSibling;

         if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove(
               "accordion__list-item--opened"
            );
            accordionOpenedContent.style.maxHeight = null;
         }

         accordionItem.classList.toggle("accordion__list-item--opened");
         if (accordionItem.classList.contains("accordion__list-item--opened")) {
            accordionContent.style.maxHeight =
               accordionContent.scrollHeight + "px";
         } else {
            accordionContent.style.maxHeight = null;
         }
      });
   });
   // Слайдер-галерея
   new Swiper(".gallery__slider", {
      spaceBetween: 15,
      slidesPerView: 1.5,

      // If we need pagination
      pagination: {
         el: ".gallery__pagination",
         type: "fraction",
      },

      // Navigation arrows
      navigation: {
         nextEl: ".gallery__button-next",
         prevEl: ".gallery__button-prev",
      },
      breakpoints: {
         // when window width is >= 640px
         601: {
            spaceBetween: 32,
            slidesPerView: 2,
         },
         801: {
            spaceBetween: 32,
         },
         1101: {
            slidesPerView: 4,
         },
      },
   });
   //Слайдер-отзывы

   new Swiper(".reviews__slider", {
      spaceBetween: 0,
      slidesPerView: 1,
      centeredSlides: true,

      navigation: {
         prevEl: ".reviews__prev",
         nextEl: ".reviews__next",
      },

      scrollbar: {
         el: ".swiper-scrollbar",
         draggable: true,
      },
      breakpoints: {
         // when window width is >= 640px

         901: {
            slidesPerView: 1.5,
         },
         1201: {
            slidesPerView: 2.1,
         },
      },
   });

   const telInputs = document.querySelectorAll('input[type="tel"]')
   const im = new Inputmask('+7 (999) 999 99-99')
   im.mask(telInputs )
})();
