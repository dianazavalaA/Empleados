<template>
    <div class="flex flex-col -mx-3 mb-6">
        <div class="relative">
            <h2 class="block tracking-wide text-gray-700 text-xl font-bold mb-6 px-3">Eliminar colaborador</h2>
            <button class="absolute right-0 top-0" @click='$emit("close")' type="button"><img
                    src="/assets/closeSmall.svg" /></button>
        </div>
        <div>
            <div>
                <p>¿Estás seguro que quieres eliminar este empleado?</p>
                <p>{{ employee.firstName }} {{ employee.firstlastName }}</p>
            </div>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                @click="$emit('delete', employee.id)">Si, eliminar empleado</button>
            <button
                class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                @click="$emit('close')">Cancelar</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['employee']
} 
</script>