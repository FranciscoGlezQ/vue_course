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
                <template v-else-if="!$v.form.email.email">
                    Email invalido
                </template>
                <template v-else>
                    Email no disponible
                </template>
            </b-form-invalid-feedback>
            <b-form-valid-feedback>
                Email correcto
            </b-form-valid-feedback>
        </b-form-group>
        <b-form-group label="Password">
            <b-form-input v-model="form.password" placeholder="Password" type="text"
                          @change="$v.form.password.$touch()"
                          :state="validate('password')"></b-form-input>
            <b-form-invalid-feedback>
                Este campo es requerido
            </b-form-invalid-feedback>
            <b-form-valid-feedback>
                Password correcto
            </b-form-valid-feedback>
        </b-form-group>

        <b-form-group label="Password">
            <b-form-input v-model="form.corfirmPassword" placeholder="Password" type="text"
                          @change="$v.form.corfirmPassword.$touch()"
                          :state="validate('corfirmPassword')"></b-form-input>
            <b-form-invalid-feedback>

                <template v-if="!$v.form.corfirmPassword.required">
                    Este campo es requerido
                </template>
                <template v-else>
                    Las contraseñas no coinciden
                </template>
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

    import {email, required, minLength} from "vuelidate/lib/validators";

    export default {
        name: 'MyForm',
        data() {
            return {
                isLoading: 'Test data',
                form: {
                    name: '',
                    email: '',
                    password: '',
                    corfirmPassword: ''
                }
            }
        },
        validations: {
            form: {
                name: {required},
                email: {
                    required,
                    email,
                    emailAvailable: checkEmailAvailable
                },
                password: {
                    required,
                    minLength: minLength(4)
                },
                corfirmPassword: {
                    required,
                    sameAs: function (value) {
                        return this.form.password === value;
                    }
                }
            }
        },
        methods: {
            validate(value) {
                const {$error, $dirty} = this.$v.form[value];
                return $dirty ? !$error : null;
            },
            submitForm() {
                this.$v.$touch();
                if (this.$v.$anyError) {
                    return console.error("Formulario invalido")
                }

                this.$emit("submit", this.form)
            },
            CreateUser() {
                this.$v.$touch();
                if (this.$v.$anyError) {
                    return console.error("Formulario invalido")
                }
                console.log("Sending to server")
            }
        },
        mounted() {
            console.log("Mounted myform")

        }
    }

    function checkEmailAvailable(value) {

        return new Promise((resolve, reject) => {
            if(email(value)){
                console.log(this)
                this.$axios.post("/checkEmail", {email: value})
                    .then(ans => {
                        if(ans.status === 200 && ans.data){
                            resolve(ans.data.available);
                        }
                        else {
                            resolve(false);
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        resolve(false);
                    })
            }
            else {
                resolve(false)
            }

        })
    }
</script>
