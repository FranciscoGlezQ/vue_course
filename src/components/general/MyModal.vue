<template>
    <div class="Modal">
        <div class="Modal__Container">
            <div class="border-bottom Modal__Header">
                <slot name="header">
                    Header
                </slot>
            </div>
            <div class="Modal__Body">
                <div v-for="item in items">
                    <slot :item="item" name="item">
                        {{ item }}
                        <hr>
                    </slot>
                </div>

<!--                <slot :localItems="localItems" name="body">-->
<!--                    <p>-->
<!--                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been-->
<!--                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley-->
<!--                        1960s with the release of Letraset sheets containing Lorem Ipsum passages,-->
<!--                        and more recently with desktop publishing software like Aldus PageMaker including versions of-->
<!--                        Lorem Ipsum.-->
<!--                    </p>-->
<!--                </slot>-->
            </div>
            <div class="Modal__Footer border-top pt-1">
                <slot name="footer">
                    <div class="btn btn-secondary" @click="$emit('hide')">
                        Cancel
                    </div>
                    <div class="btn btn-primary float-right" @click="$emit('hide')">
                        Hide
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['header', 'items'],
        data(){
            return {
                localItems: []
            }
        },
        mounted() {
            this.localItems = this.items
        }
    }
</script>

<style lang=scss scoped>
    .Modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;

        &__Container {
            background-color: white;
            width: 50%;
            height: 50%;
            padding: 20px;
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        &__Header {
            min-height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
        }


    }
</style>