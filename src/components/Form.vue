<template>
  <validation-observer v-slot="{ invalid }">
    <form class="w-full max-w-md" @submit.prevent="getFormData">
      <span v-for="error in errors">{{ error }}</span>
      <div class="flex flex-col -mx-3 mb-6">
        <div class="relative">
          <h2 class="block tracking-wide text-gray-700 text-xl font-bold mb-6 px-3">Crear colaboradores</h2>
          <button class="absolute right-0 top-0" @click='$emit("close")' type="button"><img
              src="/assets/closeSmall.svg" /></button>
        </div>

        <validation-provider name="name" rules="required" v-slot="{ invalid, errors, validated }">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-gray-700 text-xg mb-2" for="grid-first-name">
              Nombre (s) <span class="text-red-500">*</span>
            </label>
            <input v-bind:class="{ 'border-red-500': validated && invalid }"
              class="appearance-none block w-full bg-white-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              name="firstName" id="grid-first-name" type="text" placeholder="Solo nombre(s)"
              v-model="newDataEmployee.firstName">
            <p v-for="error in errors" class="text-red-500 text-xs italic">{{ error }}</p>
          </div>
        </validation-provider>

        <validation-provider name="firstLastname" rules="required" v-slot="{ invalid, errors, validated }">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-gray-700 text-xg mb-2" for="grid-first-name">
              Apellido paterno <span class="text-red-500">*</span>
            </label>
            <input v-bind:class="{ 'border-red-500': validated && invalid }" name="lastName"
              class="appearance-none block w-full bg-white-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name" type="text" placeholder="Ingresa el primer apellido"
              v-model="newDataEmployee.lastName">
            <p v-for="error in errors" class="text-red-500 text-xg italic">{{ error }}</p>
          </div>
        </validation-provider>


        <validation-provider name="secondLastname" rules="required" v-slot="{ invalid, errors, validated }">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-gray-700 text-xg mb-2" for="grid-first-name">
              Apellido materno <span class="text-red-500">*</span>
            </label>
            <input v-bind:class="{ 'border-red-500': validated && invalid }" name="maidenName"
              class="appearance-none block w-full bg-white-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name" type="text" min="18" placeholder="Ingresa segundo apellido"
              v-model="newDataEmployee.maidenName">
            <p v-for="error in errors" class="text-red-500 text-xs italic">{{ error }}</p>
          </div>
        </validation-provider>


        <validation-provider name="age" rules="required|minmax:18,70|integer" v-slot="{ invalid, errors, visited }">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-gray-700 text-xg mb-2" for="grid-first-name">
              Edad <span class="text-red-500">*</span>
            </label>
            <input v-bind:class="{ 'border-red-500': visited && invalid }" name="age"
              class="appearance-none block w-full bg-white-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name" type="number" placeholder="Ingresa la edad" v-model="newDataEmployee.age">
            <p v-for="error in errors" class="text-red-500 text-xs italic">{{ error }}</p>
          </div>
        </validation-provider>

        <validation-provider name="weight" rules="required" v-slot="{ invalid, errors, validated }">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-gray-700 text-xg mb-2" for="grid-first-name">
              Peso <span class="text-red-500">*</span>
            </label>
            <input v-bind:class="{ 'border-red-500': validated && invalid }" name="weight"
              class="appearance-none block w-full bg-white-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name" type="text" placeholder="Ingresa el peso" v-model="newDataEmployee.weight">
            <p v-for="error in errors" class="text-red-500 text-xs italic">{{ error }}</p>
          </div>
        </validation-provider>

        <validation-provider name="height" rules="required" v-slot="{ invalid, errors, validated }">
          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block tracking-wide text-gray-700 text-xg mb-2" for="grid-first-name">
              Altura <span class="text-red-500">*</span>
            </label>
            <input v-bind:class="{ 'border-red-500': validated && invalid }" name="height"
              class="appearance-none block w-full bg-white-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name" type="number" placeholder="Ingresa el altura" v-model="newDataEmployee.height">
            <p v-for="error in errors" class="text-red-500 text-xs italic">{{ error }}</p>
          </div>
        </validation-provider>

      </div>
      <div class="flex justify-center gap-2">
        <button
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          @click='$emit("close")' type="button">Cancelar</button>
        <button :class="{ 'cursor-not-allowed opacity-75': invalid }"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          type="submit">Crear colaborador</button>
      </div>
    </form>
  </validation-observer>
</template>
  
<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, integer } from 'vee-validate/dist/rules';


extend('required', {
  ...required,
  message: 'Se requiere llenar este campo'
});

extend('integer', {
  ...integer,
  message: 'Se requiere un número entero'
});

extend('minmax', {
  validate: (value, { min, max }) => {
    const age = parseInt(value, 10);

    if (isNaN(age)) {
      return false;
    }

    return age >= min && age <= max;
  },
  params: ['min', 'max'],
  message: 'La edad debe estar entre 18 y 70 años.',

});

export default {
  name: "Form",
  props: ["employee"],

  components: {
    ValidationProvider,
    ValidationObserver
  },


  data() {
    return {
      newDataEmployee: { firstName: '', lastName: '', maidenName: '', age: '', weight: '', height: '' },
      errors: [],
      name: ''
    }
  },
  methods: {

    getFormData(ev) {
      const newEmployee = Object.fromEntries(new FormData(ev.target).entries())
      console.log(newEmployee, new FormData(ev.target))
      if (newEmployee?.firstName?.length > 0 && newEmployee?.lastName?.length > 0 && newEmployee?.maidenName?.length > 0 && newEmployee?.age?.length > 0 && newEmployee?.weight?.length > 0 && newEmployee?.height?.length > 0) {
        this.$emit('newEmployee', { firstName: newEmployee?.firstName, lastName: newEmployee?.lastName, maidenName: newEmployee?.maidenName, age: newEmployee?.age, weight: newEmployee?.weight, height: newEmployee?.height })
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
      if (newEmployee?.weight?.trim() === "") {
        this.errors.push("Ingresar peso")
      }
      if (newEmployee?.height?.trim() === "") {
        this.errors.push("Ingresar altura")
      }
    }
  }
}
</script>
 