<template>
    <div class="content-section">
        <section>
            <div class="hero is-dark is-medium">
                <div class="hero-body">
                    <div class="container" >
                        <h1 class="title has-text-centered is-unselectable">
                        Welcome!
                        </h1>
                        <h1 class="subtitle has-text-centered is-unselectable">
                        Your Dashboard
                        </h1>
                    </div>
                </div>
            </div>
            <div class="tabs is-centered">
                <ul v-if="$store.state.types && $store.state.types.length > 0">
                    <li v-for="(type, index) in $store.state.types"
                        :key="index"
                        :class="{ 'is-active' : $store.state.selectedType === index }"
                        @click="pickType(index)">
                        <a>{{ type }}</a>
                    </li>
                </ul>
            </div>
            <div class="tabs is-small is-toggle is-centered has-text-centered">
                <ul v-if="$store.state.filters && $store.state.filters.length > 0">
                    <li v-for="(filter, index) in $store.state.filters"
                        :key="index"
                        :class="{ 'is-active' : $store.state.selectedFilter === index }"
                        @click="pickFilter(index)">
                        <a>{{ filter }}</a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="section" v-if="$store.state.items && $store.state.items.length > 0">
            <Item
                v-for="(item, index) in $store.state.items"
                :name="item.name"
                :key="index"
                @open="openItemModal(item)"
                @delete="openDeleteModal(item)" />
        </section>
        <section class="section" v-else>
            <div class="notification is-white">
                <p class="has-text-centered is-unselectable">
                No Items to Show
                </p>
            </div>
        </section>
        <DeleteModal
            @close="closeDeleteModal()"
            :active="activeDeleteModal"
            :item="selectedItem"/>
        <ItemModal
            @close="closeItemModal()"
            :active="activeItemModal"
            :item="selectedItem"/>
    </div>
</template>
<script>
import ItemModal from './ItemModal'
import DeleteModal from './DeleteModal'
import Item from './Item'

export default {
    data: function () {
        return {
            selectedItem: {},
            activeItemModal: false,
            activeDeleteModal: false
        }
    },
    methods: {
        pickType (index) {
            this.$store.commit('setType', index)
            this.$store.dispatch('getItems')
        },
        pickFilter (index) {
            this.$store.commit('setFilter', index)
            this.$store.dispatch('getItems')
        },
        openDeleteModal (item) {
            this.activeDeleteModal = true
            this.selectedItem = item
        },
        closeDeleteModal () {
            this.activeDeleteModal = false
            this.selectedItem = {}
        },
        openItemModal(item) {
            this.activeItemModal = true
            this.selectedItem = item
        },
        closeItemModal () {
            this.activeItemModal = false
            this.selectedItem = {}
        }
    },
    components: {
        DeleteModal,
        ItemModal,
        Item
    }
}
</script>