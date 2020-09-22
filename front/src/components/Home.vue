
<template>
    <div class="Home">

        <form @submit="formSubmit">
            <p>
                search city
                <input type="text" v-model="search">
            </p>
            <button class="btn btn-success">Submit</button>

        </form>

        <h1>{{ msg }}</h1>
        <h3>Please wait while data is loaded</h3>



        <!--<ul id="example-1">
            <li v-for="itm ,k in items" :key="itm.k">
                Temp: {{item}}
            </li>
        </ul>
-->

        <div class="chessboard">
            <ul v-for="item ,key in items" :key="item.key">
                <li id="example-1">
                    {{item.city}} <img src="https://www.metaweather.com/static/img/weather/png/64/s.png"/>
                    <b>Temperature</b>:{{item.consolidated_weather.the_temp}}
                    <b>Max temperature</b>:{{item.consolidated_weather.max_temp}}
                    <b>Min temperature</b>:{{item.consolidated_weather.min_temp}}
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import Weather from './Weather'

    export default {
        name: 'Home',
        components: {
            Weather
        },
        data () {
            return {
                msg: 'Welcome to Weather Casting',
                items : [],
                search :''
            }
        },

        created: function () {
            //const baseURI = 'api/weather.php?command=search&keyword[]=london&keyword[]=Berlin';
            const baseURI = 'api/weather.php?command=location&woeid[]=44418&woeid[]=638242&woeid[]=2344116&woeid[]=565346&woeid[]=560743&woeid[]=9807';

            this.$http.get(baseURI , {

              })
                .then((result) => {
                    let list=[];
                    this.items =  result.data;

                    console.log('this.items' ,this.items)

                })
            },

        methods: {
            formSubmit(e) {
                e.preventDefault();
                let search = this.search;


                this.$router.push({
                    name: 'Search',
                    params: { id: search }
                });

                //this.$router.push({ name: '/weather' })

                /*this.$http.get('http://localhost:8000/#/search/'+search, {

                })
                    .then(function (response) {
                    })
                    .catch(function (error) {
                    });*/
            }

        }
    }
</script>