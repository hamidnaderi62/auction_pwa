<template>

<div>
  <v-card
    max-width="400"
    class="mx-auto"
  >
    

      <v-container>
      <v-row dense>
            <AuctionItem v-for="auction in auctions" :key="auction.index" :item="auction"></AuctionItem>
 
      </v-row>
    </v-container>

  </v-card>

</div>
</template>

<script>
  import AuctionItem from '../components/AuctionItem.vue'
  export default {
    components : {
      AuctionItem,
    },
        data: () => ({
        auctions: [
          {
            code: '1001',
            title: 'دوچرخه کوهستان المپیا مدل summer سایز 26',
            desc: 'مناسب برای گروه سنی نوجوان، بزرگسال',
            featurs: 'سایز طوقه : 26 اینچ / جنس فریم : استیل / نوع دوچرخه : کوهستان / تعداد دنده : 21 عدد',
            basePrice: '8000000',
            image :'https://dkstatics-public.digikala.com/digikala-products/8eb176d3a230535115ae49c5253525321e682957_1636696519.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
            status :'Available',
            regDate :'2022-06-25',
            days :'10',
            personId :'61e90e5a2ae64416e4cfc1f9',
          },
           {
            code: '1002',
            title: 'دوچرخه کوهستان اولمپیا مدل سامر02 سایز26',
            desc: 'مناسب برای گروه سنی نوجوان، بزرگسال',
            featurs: 'سایز طوقه : 26 اینچ / جنس فریم : استیل / نوع دوچرخه : کوهستان / تعداد دنده : 21 عدد',
            basePrice: '5000000',
            image :'https://dkstatics-public.digikala.com/digikala-products/44c9e5605fc42ff433d025099cbf383f12edce4c_1639841215.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
            status :'Available',
            regDate :'2022-06-26',
            days :'12',
            personId :'61e90e5a2ae64416e4cfc1f9',
          },
           {
            code: '1003',
            title: 'دوچرخه شهری جاینت مدل Electra سایز 26',
            desc: 'مناسب برای گروه سنی نوجوان، بزرگسال',
            featurs: 'سایز طوقه : 26 اینچ / جنس فریم : استیل / نوع دوچرخه : کوهستان / تعداد دنده : 21 عدد',
            basePrice: '22000000',
            image :'https://dkstatics-public.digikala.com/digikala-products/a40a65c74974f988d269b76bd57ff3a4e04e7ad3_1642414614.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
            status :'Available',
            regDate :'2022-06-25',
            days :'5',
            personId :'61e90e5a2ae64416e4cfc1f9',
          },
           {
            code: '1004',
            title: 'دوچرخه کوهستان ویوا مدل ELEMENT',
            desc: 'مناسب برای گروه سنی نوجوان، بزرگسال',
            featurs: 'سایز طوقه : 26 اینچ / جنس فریم : استیل / نوع دوچرخه : کوهستان / تعداد دنده : 21 عدد',
            basePrice: '12000000',
            image :'https://dkstatics-public.digikala.com/digikala-products/aea89b2439b2bf252365d058c8caa4b07e93f22d_1644743203.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
            status :'Available',
            regDate :'2022-06-23',
            days :'14',
            personId :'61e90e5a2ae64416e4cfc1f9',
          },
          {
            code: '1005',
            title: 'دوچرخه شهری ویوا مدل travel',
            desc: 'مناسب برای گروه سنی نوجوان، بزرگسال',
            featurs: 'سایز طوقه : 26 اینچ / جنس فریم : استیل / نوع دوچرخه : کوهستان / تعداد دنده : 21 عدد',
            basePrice: '9500000',
            image :'https://dkstatics-public.digikala.com/digikala-products/b52f658dcbed2ed7430d60c18393eab3fd8df8b6_1645599078.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90',
            status :'Available',
            regDate :'2022-06-24',
            days :'13',
            personId :'61e90e5a2ae64416e4cfc1f9',
          },
        ],
      }),
      methods :{
          async  mounted(){
          
          }  
      }
  }

</script>