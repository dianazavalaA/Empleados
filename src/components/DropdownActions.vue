<template>
    <div>
        <button class="relative" @click="displayActions = true">
            <img src="/assets/dots.svg" alt="dots" />
        </button>
        <div class="absolute p-2 shadow border none" :class="{ flex: displayActions === true }">
            <ul class="space-y-2">
                <li @click="edit"> Editar </li>
                <li @click="deleteUser"> Eliminar </li>
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
    },
    methods: {
        edit() {
            displayActions: false,
                this.$emit("edit", this.id)
        },
        deleteUser() {
            displayActions: false,
                this.$emit("delete", this.id)
        }
    },
    props: ['id']
}
</script>