<template>
    <div class="container-fluid">
        <SlotExample>
            <div slot="title">
                custom title
            </div>
            <template slot="content">
                Custom content
            </template>
        </SlotExample>

        <div class="row">
            <div class="col-6 offset-6">
                <div class="btn btn-success" @click="showModal=true">
                    Show modal
                </div>
            </div>
        </div>
        <MyModal v-if="showModal"
                 @hide="showModal=false"
                 :header="'Texto'"
            :items="items">
            <template v-slot:item="data">
                <b>{{ data.item.a.toUpperCase() }}</b>: <small>{{ data.item.b.toUpperCase() }}</small>
            </template>
            <template slot="footer">
                 <div class="btn btn-success" @click="save">
                    My button in father
                </div>
            </template>
        </MyModal>
    </div>
</template>

<script>
    import SlotExample from "@/components/SlotExample";
    import MyModal from "@/components/general/MyModal";

    export default {
        components: {
            SlotExample,
            MyModal
        },
        data() {
            return {
                showModal: true,
                header: 'Hello from header',
                message: 'This is a message ready to be shown in your custom modal',
                items:[
                    { a: 'Title A', b: 'Title B' },
                    { a: 'Name A', b: 'Name B' }
                ]
            }
        },
        methods: {
            save(){
                // console.log("Hello from SlotPage.vue")
            }
        }
    };
</script>

<style></style>
