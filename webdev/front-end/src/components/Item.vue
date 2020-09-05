<template>
    <div class="notification is-dark">
        <button class="delete" @click="$emit('delete')"></button>
        <p class="has-text-centered" @click="$emit('open')">{{ name }}</p>
    </div>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>