<template>
    <div>
        <div class="flex justify-between mx-7">
        <MainMenu />
        </div>
        <div class="flex flex-col items-center mb-12">
            <h1 class="text-darkbeige text-3xl mt-24 mb-2 font-semibold">소스</h1>
            <div class="bg-beige w-24 h-2 mb-8"></div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <div>
                        <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                            <div>
                                <img src="~/assets/images/self_sauce1.png">
                            </div>
                            <div>
                                <h3 class="text-2xl mt-3 mb-2">두끼소스</h3>
                            </div>
                            <div class="flex flex-row justify-center">
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <div>
                        <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                            <div>
                                <img src="~/assets/images/self_sauce2.png">
                            </div>
                            <div>
                                <h3 class="text-2xl mt-3 mb-2">떡모소스</h3>
                            </div>
                            <div class="flex flex-row justify-center">
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <div>
                        <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                            <div>
                                <img src="~/assets/images/self_sauce8.png">
                            </div>
                            <div>
                                <h3 class="text-2xl mt-3 mb-2">부산소스</h3>
                            </div>
                            <div class="flex flex-row justify-center">
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <div>
                        <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                            <div>
                                <img src="~/assets/images/self_sauce4.png">
                            </div>
                            <div>
                                <h3 class="text-2xl mt-3 mb-2">동대문소스</h3>
                            </div>
                            <div class="flex flex-row justify-center">
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <div>
                        <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                            <div>
                                <img src="~/assets/images/self_sauce10.png">
                            </div>
                            <div>
                                <h3 class="text-2xl mt-3 mb-2">마늘소스</h3>
                            </div>
                            <div class="flex flex-row justify-center">
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <div>
                        <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                            <div>
                                <img src="~/assets/images/self_sauce3.png">
                            </div>
                            <div>
                                <h3 class="text-2xl mt-3 mb-2">즉떡소스</h3>
                            </div>
                            <div class="flex flex-row justify-center">
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/black.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <div>
                        <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                            <div>
                                <img src="~/assets/images/self_sauce6.png">
                            </div>
                            <div>
                                <h3 class="text-2xl mt-3 mb-2">짜장소스</h3>
                            </div>
                            <div class="flex flex-row justify-center">
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <div>
                        <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                            <div>
                                <img src="~/assets/images/self_sauce5.png">
                            </div>
                            <div>
                                <h3 class="text-2xl mt-3 mb-2">크림소스</h3>
                            </div>
                            <div class="flex flex-row justify-center">
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <div>
                        <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                            <div>
                                <img src="~/assets/images/self_sauce9.png">
                            </div>
                            <div>
                                <h3 class="text-2xl mt-3 mb-2">궁중소스</h3>
                            </div>
                            <div class="flex flex-row justify-center">
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                                <div>
                                    <img class="w-2/3" src="~/assets/images/gray.png">
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>


        <div class="flex flex-col items-center mb-12">
            <h1 class="text-darkbeige text-3xl mt-12 mb-2 font-semibold">떡</h1>
            <div class="bg-beige w-24 h-2 mb-8"></div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_dduk1.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">구멍쌀떡</h3>
                        </div>
                        <div>
                            <p>떡에 구멍이 있어 소스가 잘 베는 떡</p>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_dduk2.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">날씬쌀떡</h3>
                        </div>
                        <div>
                            <p class="pb-6">얇고 날씬한 모양의 쌀떡</p>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_dduk11.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">링쌀떡</h3>
                        </div>
                        <div>
                            <p class="pb-6">반지 모양의 쌀떡</p>
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_dduk5.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">한끼떡</h3>
                        </div>
                        <div>
                            <p>빨리익는 밀떡으로 둥근 면모양의 떡</p>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_dduk6.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">두끼떡</h3>
                        </div>
                        <div>
                            <p>빨리익는 밀떡으로 즉석떡볶이 전용 떡</p>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_dduk8.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">밀별대떡</h3>
                        </div>
                        <div>
                            <p>길고 굵은 밀떡으로 잘라먹는 재미가 있는 떡</p>
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_dduk13.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">납작밀떡</h3>
                        </div>
                        <div>
                            <p class="pb-6">납작하고 얇은 밀떡</p>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_dduk12.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">엄지밀떡</h3>
                        </div>
                        <div>
                            <p>엄지로 하나하나 떼어 만든 모양의 수제비 떡</p>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_dduk10.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">콘치즈떡</h3>
                        </div>
                        <div>
                            <p class="pb-6">콘치즈 필링이 들어가 있는 떡</p>
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img class="ml-4" src="~/assets/images/self_dduk14.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">치즈떡</h3>
                        </div>
                        <div>
                            <p class="pb-6">치즈 필링이 들어가 있는 떡</p>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img class="ml-4" src="~/assets/images/self_dduk15.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">고구마떡</h3>
                        </div>
                        <div>
                            <p class="pb-6">고구마 필링이 들어가 있는 떡</p>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        
        <div class="flex flex-col items-center mb-12">
            <h1 class="text-darkbeige text-3xl mt-12 mb-2 font-semibold">튀김</h1>
            <div class="bg-beige w-24 h-2 mb-8"></div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_fried3.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">닭가슴살 튀김</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_fried2.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">김말이 튀김</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_fried8.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">만두튀김</h3>
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_fried7.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">밤고구마 너겟</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_fried1.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">고구마 튀김</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_fried5.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">야채 튀김</h3>
                        </div>
                    </button>
                </div>
            </div>
        </div>


        <div class="flex flex-col items-center mb-12">
            <h1 class="text-3xl mt-12 mb-2 font-semibold">사리</h1>
            <div class="bg-beige w-24 h-2 mb-8"></div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_noodle1.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">라면</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_noodle2.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">쫄면</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_noodle5.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">중국당면</h3>
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_noodle8.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-9 mb-2">분모자 당면</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_noodle7.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">당면</h3>
                        </div>
                    </button>
                </div>
            </div>
        </div>


        <div class="flex flex-col items-center mb-12">
            <h1 class="text-darkbeige text-3xl mt-12 mb-2 font-semibold">토핑</h1>
            <div class="bg-beige w-24 h-2 mb-8"></div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_toping2.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">소시지</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_toping3.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">삶은계란</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_toping4.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">유부</h3>
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_toping5.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">순대</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_toping6.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">어묵</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_toping7.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">대파</h3>
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex flex-row my-10">
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_toping8.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">양배추</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_toping9.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">깻잎</h3>
                        </div>
                    </button>
                </div>
                <div class="flex flex-col items-center mx-6 w-72 p-5">
                    <button :class="{'initial': activeTab !== 1, 'is-active': activeTab === 1}" name="button" @click="setActiveTab">
                        <div>
                            <img src="~/assets/images/self_toping10.png">
                        </div>
                        <div>
                            <h3 class="text-2xl mt-3 mb-2">어묵면</h3>
                        </div>
                    </button>
                </div>
            </div>
        </div>


        <div class="flex justify-center mb-24">
            <NuxtLink to="/sidemenu">
            <button class="border-beige border-4 text-darkbeige text-lg rounded-full px-8 py-2">다음</button>
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