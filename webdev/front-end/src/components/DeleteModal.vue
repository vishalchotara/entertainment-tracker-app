<template>
    <section class="section" v-if="!!item && active">
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-content">
                <article class="message">
                    <div class="message-header">
                        <p class="is-unselectable">Delete this item?</p>
                        <button
                            class="delete"
                            aria-label="delete"></button>
                    </div>
                    <div class="message-body has-text-centered">
                        <p>{{ item.name }}</p>
                        <br/>
                        <div class="buttons is-centered">
                            <a class="button is-danger is-unselectable" @click.prevent="deleteItem()">Submit</a>
                            <a class="button is-dark is-unselectable" @click.prevent="$emit('close')">Cancel</a>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    props: {
        item: Object,
        active: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        deleteItem() {
            if (this.item._id != null) {
                this.$store.dispatch('deleteItem', this.item._id)
                this.$emit('close')
            }
        }
    }
}