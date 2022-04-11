<template>
    <nav class="bg-beige w-full flex justify-between">
        <div class="flex flex-start pt-6 ml-24">
            <NuxtLink to="/home">
                <img src="~/assets/images/logo.png" alt="">
            </NuxtLink>
        </div>
        <div class="w-full flex justify-end pt-8 pb-8">
            <div class="mr-8">
                <NuxtLink class="text-lightbeige" to="/menu">주문</NuxtLink>
            </div>
            <div class="mr-8">
                <NuxtLink class="text-lightbeige" to="/login">
                    <img class="w-1/6" src="~/assets/images/login-02.png" alt="">
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>