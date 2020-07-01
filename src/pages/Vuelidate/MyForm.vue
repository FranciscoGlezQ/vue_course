<template>
    <b-form @submit.prevent.stop="submitForm">
        <b-table responsive striped bordered outlined
        ></b-table>
        <b-form-group label="Nombre">
            <b-form-input v-model="form.name"
                          @change="$v.form.name.$touch()"
                          placeholder="Nombre"
                          :state="validate('name')"></b-form-input>
            <b-form-invalid-feedback>
                Este campo es requerido
            </b-form-invalid-feedback>
            <b-form-valid-feedback>
                Nombre correcto
            </b-form-valid-feedback>
        </b-form-group>
        <b-form-group label="Email">
            <b-form-input v-model="form.email" placeholder="Email"
                          @change="$v.form.email.$touch()"
                          :state="validate('email')"></b-form-input>
            <b-form-invalid-feedback>
                <template v-if="!$v.form.email.required">
                    Este campo es requerido
                </template>
                <template v-else>
                    Email invalido
                </template>
            </b-form-invalid-feedback>
            <b-form-valid-feedback>
                Email correcto
            </b-form-valid-feedback>
        </b-form-group>
        <b-form-group label="Password">
            <b-form-input v-model="form.password" placeholder="Password" type="password"
                          @change="$v.form.password.$touch()"
                          :state="validate('password')"></b-form-input>
            <b-form-invalid-feedback>
                Este campo es requerido
            </b-form-invalid-feedback>
            <b-form-valid-feedback>
                Password correcto
            </b-form-valid-feedback>
        </b-form-group>
        <slot name="action">
            <b-button variant="primary" class="float-right" @click="CreateUser">
                Submit
            </b-button>
        </slot>
    </b-form>
</template>
<script>
    import {email, minLength, required} from "vuelidate/lib/validators";

    export default {
        name: 'MyForm',
        data(){
            return {
                form: {
                    name: '',
                    email: '',
                    password: ''
                }
            }
        },
        validations: {
            form: {
                name: {required},
                email: {required, email},
                password: {
                    required,
                    minLength: minLength(4),
                }
            }
        },
        methods:{
            validate(value) {
                const {  $error, $dirty }  = this.$v.form[value];
                return $dirty ? !$error : null;
            },
            submitForm() {
                this.$v.$touch();
                if(this.$v.$anyError) {
                    return console.error("Formulario invalido")
                }

                this.$emit("submit", this.form)
            },
            CreateUser(){
                this.$v.$touch();
                if(this.$v.$anyError){
                    return console.error("Formulario invalido")
                }
                console.log("Sending to server")
            }
        }
    }
</script>
