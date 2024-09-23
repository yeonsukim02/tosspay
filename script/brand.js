const b_name_wrap= new Swiper(".b_name_wrap",{
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
        nextEl: '.swiper-button-next', // 다음 슬라이드로 이동하는 버튼
        prevEl: '.swiper-button-prev', // 이전 슬라이드로 이동하는 버튼
    },
    pagination: {
		el: ".swiper-pagination",   //페이징 태그 클래스 설정 
		type: 'progressbar',
    },
})
const pick_product_wrap= new Swiper(".pick_product_wrap",{
    slidesPerView: 4.5,
    spaceBetween: 40,
    autoplay:{delay:2000},
    loop:true,
})

