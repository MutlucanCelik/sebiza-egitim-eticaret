<template>
  <header class="px-8 py-5">
    <div class="top flex justify-between">
        <img src="@/assets/img/logo.png" alt="">
        <div class="flex gap-5">
            <span class="mdi mdi-magnify text-2xl"></span>
            <span class="mdi mdi-account-outline text-2xl"></span>
            <div class="relative">
                <span class="mdi mdi-heart-outline text-2xl"></span>
                <span class="absolute top-[-.4rem] right-[-.4rem] w-5 h-5 inline-block bg-black text-white rounded-full text-[0.7rem] flex justify-center items-center">
                    0
                </span>
            </div>
            <div class="relative">
                <span class="mdi mdi-cart-outline text-2xl"></span>
                <span class="absolute top-[-.4rem] right-[-.4rem] w-5 h-5 inline-block bg-black text-white rounded-full text-[0.7rem] flex justify-center items-center">
                    0
                </span>
            </div>
        </div>
    </div>
    <nav class="bootom py-4">
        <ul class="flex justify-between text-sm font-medium tracking-wider">
            <li>
                <a class="nav__link" href="">KAMPANYALAR</a>
            </li>
            <li>
                <a class="nav__link" href="">YENİ GELENLER</a>
            </li>
            <li>
                <a class="nav__link" href="">ÜST GİYİM</a>
            </li>
            <li>
                <a class="nav__link" href="">ALT GİYİM</a>
            </li>
            <li>
                <a class="nav__link" href="">DIŞ GİYİM</a>
            </li>
            <li>
                <a class="nav__link" href="">ALT ÜST TAKIM</a>
            </li>
            <li>
                <a class="nav__link" href="">AKSESUAR</a>
            </li>
            <li>
                <a class="nav__link" href="">AYAKKABI & TERLİK</a>
            </li>
            <li>
                <a class="nav__link" href="">KOMBİN</a>
            </li>
            <li>
                <a class="nav__link" href="">SEPETTE NET %32 İNDİRİM !</a>
            </li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {

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
</style>