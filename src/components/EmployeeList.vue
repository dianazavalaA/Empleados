<template>
    <div>
        <div class="my-8 flex itms-center justify-between">
            <div class="relative">
                <div class="absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                    <img src="/assets/search.svg">
                </div>
                <input
                    class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-no-repeat bg-left bg-origin-content pl-10"
                    id="Search" type="text" v-model="search" placeholder="Buscar por nombre">
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                @click="showModal">Crear colaborador</button>
        </div>

        <div class="border ring-1 ring-opacity-75 ring-gray-400 rounded-xl overflow-hidden">
            <table class="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
                <thead class="text-gray-700o dark:bg-gray-700 dark:text-gray-400">
                    <tr class="border-b-2 border-gray-300 pb-2 mb-2 max-width">
                        <th class="px-2 w-10 text-center" scope="col"><input id="checkbox" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        </th>
                        <th scope="col" class="bg-no-repeat bg-right p-4 bg-origin-content"><span>Nombre</span>
                        </th>
                        <th scope="col" class="bg-no-repeat bg-right p-4 bg-origin-content w-48"
                            style="background-image: url('/assets/filter.svg')" @click="order('age')">
                            <span>Edad</span>
                        </th>
                        <th scope="col" class="bg-no-repeat bg-right p-4 bg-origin-content w-48"
                            style="background-image: url('/assets/filter.svg')">
                            <span>Peso</span>
                        </th>
                        <th scope="col" class="bg-no-repeat bg-right p-4 bg-origin-content w-48"
                            style="background-image: url('/assets/filter.svg')" @click="order('height')">
                            <span>Altura</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="text-sm">
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        v-for="employee in orderBy">
                        <td class="px-2 w-10 text-center py-2"> <input id="checkbox" type="checkbox"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 pl-2">
                            <label for="checkbox" class="sr-only">checkbox</label>
                        </td>
                        <td class="px-4">{{ employee.firstName }} {{ employee.lastName }} {{ employee.maidenName }}</td>
                        <td class="px-4 w-48">{{ employee.age }}</td>
                        <td class="px-4 w-48">{{ employee.weight }}</td>
                        <td class="px-4 w-48">{{ employee.height }}</td>
                        <td class="px-2 w-10 text-center py-2"><button><img src="/assets/dots.svg" alt="dots" /></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Modal :is-show="isShow">
            <Form v-if="isShow" @close="closeModal" @newEmployee="getdata" />
        </Modal>
        <Modal :is-show="isShowMod">
            <EditEmployees :employee="changeEmployee" v-if="isShowMod" />
        </Modal>
    </div>
</template>

<script>
import Modal from './Modal.vue'
import Form from './Form.vue'
import EditEmployees from './EditEmployees.vue'

export default {
    data() {
        return {
            employees: [],
            isShow: false,
            isForm: false,
            sortBy: { by: '', option: '' },
            search: "",
            errors: [],
            changeEmployee: [],
            isShowMod: false
        }
    },
    methods: {
        getEmployees(fn) {
            fetch('https://dummyjson.com/users')
                .then(response => response.json())
                .then(data => {
                    this.employees = data.users
                    console.log(typeof fn)
                    console.log(data)
                    if (typeof fn === 'function') {
                        fn()
                    }
                })
        },
        showModal() {
            this.isShow = true;
        },
        closeModal() {
            this.isShow = false;
        },
        showForm() {
            this.isForm = true;
        },
        getdata(ev) {
            console.log(ev);
            let newEmployee = this.addEmployee(ev)

            this.isShow = false
        },
        order(type) {
            console.log(this.sortBy);
            if (type === "age") {
                this.sortBy.by = "age"
                this.sortBy.option = this.sortBy.option === "asc" ? "desc" : "asc"
            }
            if (type === "height") {
                this.sortBy.by = "height"
                this.sortBy.option = this.sortBy.option === "asc" ? "desc" : "asc"
            }
        }, remove(id) {
            const employees = this.employees.filter(emp => emp.id !== id)
            this.employees = [...employees]
        },
        editEmployee(id) {
            this.changeEmployee = this.employees.find(emp => emp.id === id)
            this.isShowMod = true
        },
        addEmployee(newEmployee) {
            const requestOption = {
                body: JSON.stringify(newEmployee),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            }
            fetch('https://dummyjson.com/users/add', requestOption)
                .then(res => res.json())
                .then((data) => {
                    this.getEmployees(() => { this.employees.push(data) })
                    console.log(data)
                    this.$toast.open('Haz sido registrado con éxito')
                    return data
                })
        }
    },
    computed: {
        orderBy() {
            if (this.sortBy.by === "employee_salary" && this.sortBy.option === "asc") {
                return this.busquedaPorNombre.sort((a, b) => a.employee_salary - b.employee_salary)
            }

            if (this.sortBy.by === "employee_salary" && this.sortBy.option === "desc") {
                return this.busquedaPorNombre.sort((a, b) => b.employee_salary - a.employee_salary)
            }
            if (this.sortBy.by === "age" && this.sortBy.option === "desc") {
                return this.busquedaPorNombre.sort((a, b) => a.age - b.age)
            }

            if (this.sortBy.by === "age" && this.sortBy.option === "asc") {
                return this.busquedaPorNombre.sort((a, b) => b.age - a.age)
            }

            return this.busquedaPorNombre
        },

        busquedaPorNombre() {
            if (this.search === '') {
                return this.employees
            }
            return this.employees.filter(emp => emp.firstName.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
    mounted() {
        this.getEmployees()
    },
    components: { Modal, Form, Modal, EditEmployees }
}
</script>