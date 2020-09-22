<template>
    <div class="Weather">
        <h1>{{ msg }}</h1>


        <div class="chessboard">
            <ul v-for="item ,key in items" :key="item.key">
                <li id="example-1">
                    City :  {{item.title}} <br>
                    Location Type :  {{item.location_type}}<br>
                    woeid :  {{item.woeid}}<br>
                    Latitude/Longitude :  {{item.latt_long}}<br>
                </li>
            </ul>
        </div>
        <li v-if="!items.length">City data not found</li>

    </div>
</template>

<script>
    export default {
        name: 'Weather',
        data () {
            return {
                msg: 'Welcome to Weather Casting',
                search : this.$route.params.id,
                items : []

            }
        },

        created: function () {
            const baseURI = 'api/weather.php?command=search&keyword='+this.search;

            this.$http.get(baseURI , {

            })
                .then((result) => {
                    //this.items = result.data
                    //console.log('result.data' ,result.data['consolidated_weather'])
                    let list=[];
                    this.items =  result.data;
                    //console.log('this.items' ,this.items[0])

                    console.log('this.items' ,this.items)

                })
        },

    }
</script>