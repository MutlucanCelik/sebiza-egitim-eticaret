<template>
  <section id="home_swiper">
    <swiper 
      id="swiper_home"
      :autoplay="{
        delay: 4000, 
        disableOnInteraction: false
      }" :pagination="true" :modules="homeModules"
      class="mySwiper"
      >
      <swiper-slide>
        <div>
          <img src="@/assets/img/slider1.jpg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img src="@/assets/img/slider2.jpg" alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div>
          <img src="@/assets/img/slider3.jpg" alt="">
        </div>
      </swiper-slide>
    </swiper>
  </section>
  <section id="discount_img" class="w-full aspect-[2/1] xl:h-[calc(100vh-10rem)] mt-5 md:mt-10 xl:mt-16">
    <img class="w-full h-full" src="@/assets/img/home-img1.jpg" alt="">
  </section>
  <section id="categories" class="flex flex-wrap justify-between gap-5 px-4 md:px-8 mt-8">
    <div class="h-32 w-full md:w-[calc(49.4%-.5rem)] relative">
      <img clas class="w-full h-full object-cover object-center" src="@/assets/img/advert-banner.jpg" alt="">
      <div class="category-img-card">
        <span>Yeni Geleneler</span>
      </div>
    </div>
    <div class="h-32 w-full md:w-[calc(49.4%-.5rem)] relative">
      <img clas class="w-full h-full object-cover object-center" src="@/assets/img/slider2.jpg" alt="">
      <div class="category-img-card">
        <span>Kombinler</span>
      </div>
    </div>
    <div class="h-32 w-full md:w-[calc(49.4%-.5rem)] relative">
      <img clas class="w-full h-full object-cover object-center" src="@/assets/img/slider3.jpg" alt="">
      <div class="category-img-card">
        <span>Çok Satanlar</span>
      </div>
    </div>
    <div class="h-32 w-full md:w-[calc(49.4%-.5rem)] relative">
      <img class="w-full h-full object-cover object-center" src="@/assets/img/slider1.jpg" alt="">
      <div class="category-img-card">
        <span>Aksesuarlar</span>
      </div>
    </div>
    <div class="h-32 w-full md:w-[calc(49.4%-.5rem)] relative">
      <img class="w-full h-full object-cover object-center" src="@/assets/img/slider2.jpg" alt="">
      <div class="category-img-card">
        <span>Alt Giyim</span>
      </div>
    </div>
    <div class="h-32 w-full md:w-[calc(49.4%-.5rem)] relative">
      <img class="w-full h-full object-cover object-center" src="@/assets/img/slider3.jpg" alt="">
      <div class="category-img-card">
        <span>Dış Giyim</span>
      </div>
    </div>
    <div class="h-32 w-full md:w-[calc(49.4%-.5rem)] relative">
      <img class="w-full h-full object-cover object-center" src="@/assets/img/slider1.jpg" alt="">
      <div class="category-img-card">
        <span>Üst Giyim</span>
      </div>
    </div>
    <div class="h-32 w-full md:w-[calc(49.4%-.5rem)] relative">
      <img class="w-full h-full object-cover object-center" src="@/assets/img/slider2.jpg" alt="">
      <div class="category-img-card">
        <span>Kampanyalar</span>
      </div>
    </div>
  
  </section>
  <section id="new_arrivals" class="my-12 px-12">
    <div class="flex gap-12 justify-center items-center">
      <div class="h-px w-[35%] bg-gray-800"></div>
      <h1 class="text-2xl font-bold text-gray-700 tracking-wider">Yeni Geleneler</h1>
      <div class="h-px w-[35%] bg-gray-800"></div>
    </div>
      <swiper
        id="swiper_new_arrivals"
        :navigation="true"
        :slidesPerView="5"
        :spaceBetween="30"
        :modules="newArrivalsModules"
        class="mySwiper swiper-new-arrivals mt-10"
      >
        <swiper-slide>
          <div class="w-full h-full bg-red-400">
            
          </div>
        </swiper-slide>

      </swiper>
  </section>

</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';

  import { Pagination,Autoplay,FreeMode,Navigation } from 'swiper/modules';
  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup(){



      return{
        homeModules: [Pagination,Autoplay],
        newArrivalsModules: [FreeMode,Navigation],
      }
    }

  }
</script>

<style>
#new_arrivals{
  height: 65vh;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal{
  top: 85%;
}
.swiper-pagination-bullet{
  border: 1px solid #333;
  background-color: transparent;
  width: 13px;
  height: 13px;
  opacity: 1;
}
.swiper-pagination-bullet-active{
  background-color: #333;
}
.category-img-card{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;
}
.category-img-card span{
  color: #fff;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 1.7rem;
}

@media only screen and (max-width:576px){
  .swiper-pagination.swiper-pagination-bullets.swiper-pagination-horizontal{
    top: 80%;
  }
  .swiper-pagination-bullet{
    width: 10px;
    height: 10px;
  }
}
</style>