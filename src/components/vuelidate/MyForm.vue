<template>
    <div>
        <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
            <label class="form__label">Name</label>
            <input class="form__input" v-model.trim="name" @input="setName($event.target.value)"/>
        </div>
        <div class="error" v-if="!$v.name.required">Field is required</div>
        <div class="error" v-if="!$v.name.minLength">Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
        <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
            <label class="form__label">Age</label>
            <input class="form__input" :value="age" @change="setAge($event.target.value)"/>
        </div>
        <div class="error" v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}} and {{$v.age.$params.between.max}}</div><span tabindex="0">Blur to see changes</span>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang=scss scoped>

</style>