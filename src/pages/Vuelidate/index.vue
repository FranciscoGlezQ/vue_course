<template>
    <div>
        <b-row>
            <b-col cols="6" class="offset-3">
                <h2>Formulario</h2>
                <MyForm @submit="submit">

                </MyForm>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import MyForm from "./MyForm";

    export default {
        components: {MyForm},
        methods: {
            submit(data){
                console.log("Hello from parent")
                console.log(data)
            }
        }
    }
</script>

