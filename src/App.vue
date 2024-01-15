<template>
    <div class="min-w-screen min-h-screen flex justify-center">
        <div class="container mx-auto">
            <div class="px-2">
                <h1 class="text-2xl">Listado de Colaboradores</h1>
            </div>
            <div class="flex-col">
                <div class="px-2 h-10 border-b-2 flex">
                    <router-link to="#colaboradores"
                        class="border-b-2 border-blue-500 -mb-[2px] max-width px-2 hover:opacity:75">Colaboradores</router-link>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

</script>
