<template>
    <section class="hero is-fullheight-with-navbar is-white">
        <div class="hero-body">
            <ItemForm title="Add a new item" isNew="true" @cancel="$router.go(-1)" />
        </div>
    </section>
</template>
<script>
import ItemForm from './ItemForm'
export default {
    components: {
        ItemForm
    }
}
</script>