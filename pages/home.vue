<template>
    <div>
        <div class="flex justify-between mx-7">
        <MainMenu />
        </div>
        <div class="flex flex-col justify-center items-center mx-36">
            <h1 class="text-darkbeige text-3xl mt-24 mb-2 font-semibold">두끼</h1>
            <div class="bg-beige w-24 h-2 mb-8"></div>
            <div class="flex flex-col justify-center items-center">
                <div class="mx-8 w-1/2">
                    <img src="~/assets/images/homeimg.png">
                </div>
                <div class="mx-8 my-10 w-1/2">
                    <p class="text-xl leading-relaxed">사람들은 항상 1등을 기억합니다. 다수의 모방 업체들이 생겨나고 있지만, 1등의 전략을 따라해서는 1등을 이길 수 없습니다. 두끼는 앞으로도 업계를 선도하고, 나아가서는 한국을 대표하는 프랜차이즈 기업이 되도록 최선을 다하겠습니다.</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center mx-36">
            <h1 class="text-darkbeige text-3xl mt-12 mb-2 font-semibold">매장 사진</h1>
            <div class="bg-beige w-36 h-2 mb-8"></div>
            <div class="flex flex-row justify-center mb-20 w-2/3 ml-12">
                <div class="w-11/12">
                    <img src="~/assets/images/storeimg1.png">
                </div>
                <div class="flex flex-col justify-center items-center">
                    <div class="mb-6 w-5/6">
                        <img src="~/assets/images/storeimg2.png">
                    </div>
                    <div class="mt-6 w-5/6">
                        <img src="~/assets/images/storeimg3.png">
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center mb-24">
            <NuxtLink to="/menu">
            <button class="border-beige border-4 text-darkbeige text-lg rounded-full px-8 py-2">메뉴 보기</button>
            </NuxtLink>
        </div>

    </div>
</template>