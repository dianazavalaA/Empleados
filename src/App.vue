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
