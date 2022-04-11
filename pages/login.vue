<template>
    <div>
        <div class="flex justify-between mx-7">
        <MainMenu />
        </div>
        <div class="flex flex-col items-center mb-3">
            <h1 class="text-darkbeige text-3xl mt-24 mb-8 font-semibold">Log In</h1>
        </div>
        <div class="flex flex-col items-center">
            <div>
                <div class="flex flex-col justify-items-start mb-5">
                    <div class="mb-2">
                        <label class="text-darkbeige text-lg ml-2" for="email">이메일</label>
                    </div>
                    <div>
                        <input type="text" name="email" id="email" class="w-96 text-xl bg-white border border-darkbeige rounded-md border-solid border-2 w-full">
                    </div>
                    
                </div>
            </div>
            <div>
                <div class="flex flex-col justify-items-start mb-12">
                    <div class="mb-2">
                        <label class="text-darkbeige text-lg ml-2" for="pass">비밀번호</label>
                    </div>
                    <div>
                        <input type="password" name="password" id="pass" minlength="8" required class="w-96 text-xl bg-white border border-darkbeige rounded-md border-solid border-2 w-full">
                    </div>
                </div>
            </div>
            <div class="mb-6">
                <NuxtLink to="/order">
                    <button class="border-beige border-4 text-darkbeige text-lg rounded-full w-80 px-12 py-2">로그인</button>
                </NuxtLink>
            </div>
            <div>
                <NuxtLink to="/order">
                    <button class="border-beige border-4 text-darkbeige text-lg rounded-full w-80 px-12 py-2">계정 만들기</button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>