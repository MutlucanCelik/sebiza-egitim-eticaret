<template>
  <header>
    <img src="@/assets/img/advert-banner.jpg" alt="">
    <div class="py-5">
        <div class="flex justify-between px-8">
            <img src="@/assets/img/logo.png" alt="">
            <div class="flex items-center gap-5">
                <span @click="toggleNav" class="mdi mdi-menu text-3xl xl:hidden"></span>
                <span class="mdi mdi-magnify text-2xl hidden sm:block"></span>
                <span class="mdi mdi-account-outline text-2xl hidden sm:block"></span>
                <div class="relative hidden sm:block">
                    <span class="mdi mdi-heart-outline text-2xl"></span>
                    <span class="absolute top-[-.4rem] right-[-.4rem] w-5 h-5 inline-block bg-black text-white rounded-full text-[0.7rem] flex justify-center items-center">
                        0
                    </span>
                </div>
                <div class="relative hidden sm:block">
                    <span class="mdi mdi-cart-outline text-2xl"></span>
                    <span class="absolute top-[-.4rem] right-[-.4rem] w-5 h-5 inline-block bg-black text-white rounded-full text-[0.7rem] flex justify-center items-center">
                        0
                    </span>
                </div>
            </div>
        </div>
        <nav class="flex items-center relative xl:px-8">
            <ul class="mobil-menu w-full flex items-center justify-between text-sm font-medium tracking-wider relative">
                <li class="nav__list-item h-full">
                    <a class="nav__link" href="">KAMPANYALAR</a>
                    <div class="nav__inner-menu  flex justify-between absolute left-0 top-[100%] z-[999999] w-[calc(100vw-4.5rem)] p-12 border-t bg-white shadow">
                        <ul class="flex flex-col gap-8 text-[1.05rem] text-gray-600">
                            <li>
                                <a href="">
                                    %70'E VARAN İNDİRİM
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    3 ADET 599 TL
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    4 ADET 1199 TL
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    2. ÜRÜN 1 TL
                                </a>
                            </li>
                        </ul>
                        <ul class="flex flex-col gap-8 text-[1.05rem] text-gray-600">
                            <li>
                                <a href="">
                                    2 ADET 349 TL
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    10 ADET 599 TL
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    3 ADET 110 TL
                                </a>
                            </li>
                        </ul>
                        <img class="w-64 rounded" src="@/assets/img/image1.jpg" alt="">
                    </div>
                </li>
                <li class="nav__list-item h-full">
                    <a class="nav__link" href="">YENİ GELENLER</a>
                    <div class="nav__inner-menu flex justify-between absolute left-0 top-[100%] z-[999999] w-[calc(100vw-4.5rem)] p-12 border-t bg-white shadow">
                        <ul class="flex flex-col gap-8 text-[1.05rem] text-gray-600">
                            <li>
                                <a href="">
                                    %70'E VARAN İNDİRİM
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    3 ADET 599 TL
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    4 ADET 1199 TL
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    2. ÜRÜN 1 TL
                                </a>
                            </li>
                        </ul>
                        <ul class="flex flex-col gap-8 text-[1.05rem] text-gray-600">
                            <li>
                                <a href="">
                                   A
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    B
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    C
                                </a>
                            </li>
                        </ul>
                        <img class="w-64 rounded" src="@/assets/img/image1.jpg" alt="">
                    </div>
                </li>
                <li class="nav__list-item h-full"> 
                    <a class="nav__link" href="">ÜST GİYİM</a>
                    <div class="nav__inner-menu flex justify-between absolute left-0 top-[100%] z-[999999] w-[calc(100vw-4.5rem)] p-12 border-t bg-white shadow">
                        <ul class="flex flex-col gap-8 text-[1.05rem] text-gray-600">
                            <li>
                                <a href="">
                                    %70'E VARAN İNDİRİM
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    3 ADET 599 TL
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    4 ADET 1199 TL
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    2. ÜRÜN 1 TL
                                </a>
                            </li>
                        </ul>
                        <ul class="flex flex-col gap-8 text-[1.05rem] text-gray-600">
                            <li>
                                <a href="">
                                    2 ADET 349 TL
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    10 ADET 599 TL
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    3 ADET 110 TL
                                </a>
                            </li>
                        </ul>
                        <img class="w-64 rounded" src="@/assets/img/image1.jpg" alt="">
                    </div>
                </li>
                <li class="nav__list-item h-full">
                    <a class="nav__link" href="">ALT GİYİM</a>
                </li>
                <li class="nav__list-item h-full">
                    <a class="nav__link" href="">DIŞ GİYİM</a>
                </li>
                <li class="nav__list-item h-full">
                    <a class="nav__link" href="">ALT ÜST TAKIM</a>
                </li>
                <li class="nav__list-item h-full">
                    <a class="nav__link" href="">AKSESUAR</a>
                </li>
                <li class="nav__list-item h-full">
                    <a class="nav__link" href="">AYAKKABI & TERLİK</a>
                </li>
                <li class="nav__list-item h-full">
                    <a class="nav__link" href="">KOMBİN</a>
                </li>
                <li class="nav__list-item h-full">
                    <a class="nav__link" href="">SEPETTE NET %32 İNDİRİM !</a>
                </li>
            </ul>
        </nav>
    </div>
  </header>
</template>

<script>
export default {
    setup(){

        function toggleNav(){
            const mobilMenu = document.querySelector('.mobil-menu');
            mobilMenu.classList.toggle('open')
        }

        return{
            toggleNav
        }
    }
}
</script>

<style>
    .nav__link{
        position: relative;
    }

    .nav__link::after{
        content:'';
        width:0;
        height: 2px;
        background-color: #333;
        transition: all 0.3s;

        position: absolute;
        bottom: -0.3rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .nav__link:hover::after{
        width: 100%;
    }

    .nav__inner-menu{
        display: none !important;
    }
    .nav__list-item:hover  .nav__inner-menu{
        display: flex !important;
    }
    .nav__inner-menu:hover{
        display: block;
    }

    @media only screen and (max-width:1280px){

        .mobil-menu{
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 999999;
            
            flex-direction: column;
            background-color: #333;
            color: #fff;
            height: 0;
            overflow: hidden;
            transition: all 0.5;
        }
        .mobil-menu.open{
            height: 500px;
        }
        .mobil-menu li{
            width: 100%;
            text-align: center;
            padding: 1rem 0;
            border-bottom:1px solid rgb(51, 51, 51) ;
            box-shadow: 1px 1px 1px rgba(180, 178, 178, 0.1);
        }
    }
</style>