const brand_name_wrap= new Swiper(".brand_name_wrap",{
    slidesPerView: 12,
    spaceBetween: 40,
    autoplay:{delay:2000},
    loop:true,
})
const best_product_wrap= new Swiper(".best_product_wrap",{
    slidesPerView: 4,
    spaceBetween: 5,
    autoplay:{delay:3000},
    loop:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
		el: ".swiper-pagination",
		type: 'progressbar',
        innerWidth: '100px',
        outerWidth: '1400px',
    },
})
const pick_product_wrap= new Swiper(".pick_product_wrap",{
    slidesPerView: 4.5,
    spaceBetween: 40,
    autoplay:{delay:2000},
    loop:true,
})

