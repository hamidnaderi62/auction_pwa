<template>

    <v-col cols="12"  >
        <router-link style="text-decoration: none; color: inherit;" :to="{ name : 'auction-detail-page' , params: { auction: auction }}"> 
            <v-card>
                <v-list-item three-line >
                    <v-list-item-content>
                        <v-list-item-title style="font-family:Vazir !important" class="text-h7 mb-1">
                            {{auction.title}}
                        </v-list-item-title>
                     
                        <v-list-item-subtitle style="font-family:Vazir !important">
                             قیمت پایه : 
                            {{auction.basePrice}}
                            تومان 
                        </v-list-item-subtitle>
                        <v-list-item-subtitle style="font-family:Vazir !important">
                             <v-icon>mdi-clock-time-three-outline</v-icon>
                            زمان باقیمانده :
                            {{calculateDateDiff()}}
                            روز
                        </v-list-item-subtitle>
                    </v-list-item-content>


                    <v-list-item-avatar
                        rounded
                        size="100"
                        color="grey"
                        
                    >
                    
                       <v-img :src="auction.image1"  ></v-img> 
                    </v-list-item-avatar>
                    </v-list-item>
            </v-card>  
        </router-link>
    </v-col> 


</template>

<script>
export default {

    props : ['auction'],
    methods : {
          calculateDateDiff() {
            return Math.floor(( new Date(this.auction.regDate).getTime() + this.auction.availableDays * 86400000 - Date.now()) /86400000)
        }
     },
    mounted(){
      this.calculateDateDiff();
    }
}
</script>
