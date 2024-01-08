<template>
    <div class="min-w-screen min-h-screen flex justify-center">
        <div class="container mx-auto">
            <div class="px-2">
                <h1 class="text-2xl">Listado de Colaboradores</h1>
            </div>
            <div class="flex-col">
                <div class="px-2 h-10 border-b-2 flex">
                    <a class="border-b-2 border-blue-500 -mb-[2px] max-width">Colaboradores</a>
                </div>
                <div class="my-8 flex itms-center justify-between">
                    <div class="relative">
                        <div class="absolute inset-y-0 flex items-center pl-3 pointer-events-none"><img
                                src="/assets/search.svg"></div>
                        <input
                            class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-no-repeat bg-left bg-origin-content pl-10"
                            id="Search" type="text" v-model="search" placeholder="Buscar por nombre">
                    </div>
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                        @click="showModal">Crear colaborador</button>
                </div>

                <div class="border ring-1 ring-opacity-75 ring-gray-400 rounded-xl overflow-hidden">
                    <table class="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
                        <thead class="text-gray-700o dark:bg-gray-700 dark:text-gray-400">
                            <tr class="border-b-2 border-gray-300 pb-2 mb-2 max-width">
                                <th class="px-2 w-10 text-center" scope="col"><input id="checkbox" type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                </th>
                                <th scope="col" class="bg-no-repeat bg-right p-4 bg-origin-content"
                                    style="background-image: url('/assets/filter.svg')"><span>Nombre</span>
                                </th>
                                <th scope="col" class="bg-no-repeat bg-right p-4 bg-origin-content"
                                    style="background-image: url('/assets/filter.svg')" @click="order('employee_age')">
                                    <span>Edad</span>
                                </th>
                                <th scope="col" class="bg-no-repeat bg-right p-4 bg-origin-content"
                                    style="background-image: url('/assets/filter.svg')" @click="order('employee_salary')">
                                    <span>Salario</span>
                                </th>
                                <th class="px-2 w-10 text-center" scope="col p-4"></th>
                            </tr>
                        </thead>
                        <tbody class="text-sm">
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                v-for="employee in orderBy">
                                <td class="px-2 w-10 text-center py-2"> <input id="checkbox" type="checkbox"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 pl-2">
                                    <label for="checkbox" class="sr-only">checkbox</label>
                                </td>
                                <td class="py-2">{{ employee.employee_name }}</td>
                                <td class="py-2">{{ employee.employee_age }}</td>
                                <td class="py-2">{{ employee.employee_salary }}</td>
                                <td class="px-2 w-10 text-center py-2"><button><img src="/assets/dots.svg"
                                            alt="dots" /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
        <Modal :is-show="isShow">
            <Form @close="closeModal" @newEmployee="getdata" />
        </Modal>
    </div>
</template>

<script>
import Modal from './components/Modal.vue'
import Form from './components/Form.vue'
export default {
    data() {
        return {
            employees: [],
            isShow: false,
            isForm: false,
            sortBy: { by: '', option: '' },
            search: "",
            errors: []
        }
    },
    methods: {
        getEmployees() {
            fetch('/employees.json')
                .then(response => response.json())
                .then(data => {
                    this.employees = data.data
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
            this.employees.push(ev)
            this.isShow = false
        },
        order(type) {
            console.log(this.sortBy);
            if (type === "employee_salary") {
                this.sortBy.by = "employee_salary"
                this.sortBy.option = this.sortBy.option === "asc" ? "desc" : "asc"
            }
            if (type === "employee_age") {
                this.sortBy.by = "employee_age"
                this.sortBy.option = this.sortBy.option === "asc" ? "desc" : "asc"
            }
        }, remove(id) {
            const employees = this.employees.filter(emp => emp.id !== id)
            this.employees = [...employees]
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
            if (this.sortBy.by === "employee_age" && this.sortBy.option === "desc") {
                return this.busquedaPorNombre.sort((a, b) => a.employee_age - b.employee_age)
            }

            if (this.sortBy.by === "employee_age" && this.sortBy.option === "asc") {
                return this.busquedaPorNombre.sort((a, b) => b.employee_age - a.employee_age)
            }

            return this.busquedaPorNombre
        },

        busquedaPorNombre() {
            if (this.search === '') {
                return this.employees
            }
            return this.employees.filter(emp => emp.employee_name.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
    mounted() {
        this.getEmployees()
    },
    components: { Modal, Form }
}
</script>
