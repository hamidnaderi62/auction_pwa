<template>

    <v-col cols="12" >
        <router-link style="text-decoration: none; color: inherit;" :to="{ name : item.link }"> 
            <v-card :color="item.color" dark >
                <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                    <v-card-title class="text-h5" v-text="item.title"></v-card-title>
                    <v-card-subtitle v-text="item.artist"></v-card-subtitle>
                </div>
                </div>
            </v-card>  
        </router-link>
    </v-col> 

</template>

<script>
export default {
    props : ['item'],
}
</script>
