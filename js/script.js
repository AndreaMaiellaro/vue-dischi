var app = new Vue({
    el: '#root',
    data: {  
        cds: []   
    },
    methods: {
    },
    mounted() {
        axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((response) => {
                const result = response.data;
                console.log(result);
                this.cds = result.response;
            })
    }
}) 