const b_product_all = new Swiper(".b_product_all",{
    //direction:'vertical',
    //effect:'flip',
    /* direction과 effect는 동시 사용 안됨, fade cube flip cards */
    /* direction과 effect 둘 다 안적으면 기본값 */
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay:{delay:2000},
    loop:true, /* 3>1로 한방향으로 자연스럽게 변경 */
})
const c_product_all = new Swiper(".c_product_all",{
    //direction:'vertical',
    //effect:'flip',
    /* direction과 effect는 동시 사용 안됨, fade cube flip cards */
    /* direction과 effect 둘 다 안적으면 기본값 */
    slidesPerView: 4,
    spaceBetween: 20,
    autoplay:{delay:2000},
    loop:true, /* 3>1로 한방향으로 자연스럽게 변경 */
})