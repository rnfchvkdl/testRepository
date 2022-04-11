<template>
    <div>
        <div class="flex justify-between mx-7">
        <MainMenu />
        </div>

        <div class="mx-96 flex flex-col justify-center">
            <div>
                <h1 class="text-darkbeige text-3xl mt-24 mb-2 font-semibold">주문내역</h1>
                <div class="bg-beige w-36 h-2 mb-8"></div>
            </div>
            <div class="flex flex-row items-center justify-between">
                <div>
                    <h3 class="text-2xl mt-1 mb-3">두끼소스</h3>
                </div>
                <div>
                    <p class="text-lg mb-2">2,000원</p>
                </div>
            </div>
            <div class="flex flex-row items-center justify-between">
                <div>
                    <h3 class="text-2xl mt-1 mb-3">떡모소스</h3>
                </div>
                <div>
                    <p class="text-lg mb-2">2,000원</p>
                </div>
            </div>
            <div class="flex flex-row items-center justify-between">
                <div>
                    <h3 class="text-2xl mt-1 mb-3">부산소스</h3>
                </div>
                <div>
                    <p class="text-lg mb-2">2,000원</p>
                </div>
            </div>
            <div class="flex flex-row items-center justify-between">
                <div>
                    <h3 class="text-2xl mt-1 mb-3">동대문소스</h3>
                </div>
                <div>
                    <p class="text-lg mb-2">2,000원</p>
                </div>
            </div>
            <div class="flex flex-row items-center justify-between">
                <div>
                    <h3 class="text-2xl mt-1 mb-3">마늘소스</h3>
                </div>
                <div>
                    <p class="text-lg mb-2">2,000원</p>
                </div>
            </div>
            <div class="flex flex-row items-center justify-between">
                <div>
                    <h3 class="text-2xl mt-1 mb-3">즉떡소스</h3>
                </div>
                <div>
                    <p class="text-lg mb-2">2,000원</p>
                </div>
            </div>
            <div class="flex flex-row items-center justify-between">
                <div>
                    <h3 class="text-2xl mt-1 mb-3">짜증소스</h3>
                </div>
                <div>
                    <p class="text-lg mb-2">2,000원</p>
                </div>
            </div>
            <div class="flex flex-row items-center justify-between">
                <div>
                    <h3 class="text-2xl mt-1 mb-3">크림소스</h3>
                </div>
                <div>
                    <p class="text-lg mb-2">2,000원</p>
                </div>
            </div>
            <div class="flex flex-row items-center justify-between">
                <div>
                    <h3 class="text-2xl mt-1 mb-3">궁중소스</h3>
                </div>
                <div>
                    <p class="text-lg mb-2">2,000원</p>
                </div>
            </div>
        </div>

        <div class="flex justify-end pr-96 mt-12 mb-24">
            <NuxtLink to="/complete">
            <button class="border-beige border-4 text-darkbeige text-lg rounded-full px-8 py-2">완료</button>
            </NuxtLink>
        </div>
    </div>
</template>