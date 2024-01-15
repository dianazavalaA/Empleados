<template>
    <div class="relative">
        <button class="relative" @click="displayActions = !displayActions" @blur="displayActions = false">
            <img src="/assets/dots.svg" alt="dots" />
        </button>
        <div class="absolute p-2 shadow border bg-white right-0 z-10"
            :class="{ flex: displayActions, hidden: !displayActions }">
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