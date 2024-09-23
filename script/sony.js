const product_color_wrap= new Swiper(".product_color_wrap",{
    slidesPerView: 1,
    slidesPerShow: 1,
    
    navigation: {
        nextEl: '.product_color_wrap .swiper-button-next',
        prevEl: '.product_color_wrap .swiper-button-prev',
    /* 반드시 부모 태그(.op1) 추가해서 작성하기 */
    },
    loop:true,
})
const r_product_wrap= new Swiper(".r_product_wrap",{
    slidesPerView: 4.5,
    spaceBetween: 40,
    autoplay:{delay:4000},
    loop:true,
})
const s_story_wrap= new Swiper(".s_story_wrap",{
    slidesPerView: 3,
    spaceBetween: 70,
    autoplay:{delay:4000},
    loop:true,

})



