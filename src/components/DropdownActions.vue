<template>
    <div>
        <button class="relative" :displayActions=@click = "true">
            <img src="/assets/dots.svg" alt="dots" />
        </button>
        <div class="absolute">
            <ul>
                <li> Editar </li>
                <li> Eliminar </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            displayActions: false
        }
    }
}
</script>