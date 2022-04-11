<template>
    <div>
        <div class="flex justify-between mx-7">
        <MainMenu />
        </div>

        <div class="flex flex-col items-center mt-24 mb-12">
            <h1 class="text-darkbeige text-3xl mt-12 mb-2 font-semibold">사이드 메뉴 추가</h1>
            <div class="bg-beige w-60 h-2 mb-8"></div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/side1.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">주먹밥</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/side2.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">치킨마요컵밥</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/side3.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">순대</h3>
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/side4.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">흑미치즈볼</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/side5.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">순살양념치킨</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/side6.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">순살치킨</h3>
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/side7.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">어묵탕</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/side8.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">튀김</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/side9.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">아란치니</h3>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <div class="flex justify-center mb-24">
            <NuxtLink to="/check">
            <button class="border-beige border-4 text-darkbeige text-lg rounded-full px-8 py-2">주문하기</button>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
            activeTab: 0
        }
      },
      methods: {
          setActiveTab(){
              let _this = this;
              _this.activeTab = 1;
          }
      }
    }
</script>