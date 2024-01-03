<template>
  <form class="w-full max-w-lg" @submit.prevent="getFormData">
    <span v-for="error in errors">{{ error }}</span>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Nombre (s)*
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          name="name" id="grid-first-name" type="text" placeholder="Nombre" v-model="newDataEmployee.name">
        <p v-if="errors.name" class="text-red-500 text-xs italic">Por favor llene el campo.</p>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Apellido paterno*
        </label>
        <input name="firstLastname"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name" type="text" placeholder="Apellido paterno" v-model="newDataEmployee.firstLastname">
        <p v-if="errors.firstLastname" class="text-red-500 text-xs italic">Por favor llene el campo.</p>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Apellido materno*
        </label>
        <input name="secondLastname"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name" type="text" min="18" placeholder="Apellido materno"
          v-model="newDataEmployee.secondLastname">
        <p v-if="errors.secondLastname" class="text-red-500 text-xs italic">Por favor llene el campo.</p>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Edad*
        </label>
        <input name="age"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name" type="number" placeholder="Edad" min="18" v-model="newDataEmployee.age">
        <p v-if="errors.age" class="text-red-500 text-xs italic">Por favor llene el campo.</p>
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Salario*
        </label>
        <input name="salary"
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name" type="number" placeholder="Salario" v-model="newDataEmployee.salary">
        <p v-if="errors.salary" class="text-red-500 text-xs italic">Por favor llene el campo.</p>
      </div>
    </div>
    <div class="flex justify-center gap-2">
      <button
        class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        @click='$emit("close")' type="button">Cancelar</button>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        type="submit">Crear colaborador</button>
    </div>
  </form>
</template>
  
<script>
export default {
  name: "Form",
  props: ["employee"],

  data() {
    return {
      newDataEmployee: { name: '', firstLastname: '', secondLastname: '', age: '', salary: '' },
      errors: [],
      name: ''
    }
  },
  methods: {

    getFormData(ev) {
      const newEmployee = Object.fromEntries(new FormData(ev.target).entries())
      console.log(newEmployee, new FormData(ev.target))
      if (newEmployee?.name?.length > 0 && newEmployee?.firstLastname?.length > 0 && newEmployee?.secondLastname?.length > 0 && newEmployee?.age?.length > 0 && newEmployee?.salary?.length > 0) {
        this.$emit('newEmployee', { employee_name: `${newEmpaloyee?.name} ${newEmployee?.firstLastname} ${newEmployee?.secondLastname}`, employee_age: newEmployee?.age, employee_salary: newEmployee?.salary })
      }
      if (newEmployee?.name?.trim() === "") {
        this.errors.push({ name: { message: "Ingresar nombre" } })
      }
      if (newEmployee?.firstLastname?.trim() === "") {
        this.errors.push("Ingresar apellido paterno")
      }
      if (newEmployee?.secondLastname?.trim() === "") {
        this.errors.push("Ingresar apellido materno")
      }
      if (newEmployee?.age?.trim() === "") {
        this.errors.push("Ingresar edad")
      }
      if (newEmployee?.salary?.trim() === "") {
        this.errors.push("Ingresar salario")
      }
    }
  }
}
</script>
 