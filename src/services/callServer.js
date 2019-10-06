
let callServer = {
    url: 'https://dataservice.accuweather.com/',
    getAutoComplete(cityName){
         return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(this.url + `locations/v1/cities/autocomplete?apikey=87AnaxK8xBv6zhNz5JjUwQMK0n63NeAU&q=${cityName}`);
                const json = await response.json();
                resolve(json)
            } catch (err) {
                reject(err)
            }
        })
    },
    getDaysOfDaily(citykey){
        return new Promise(async (resolve, reject) => {
           try {
               const response = await fetch(this.url + `forecasts/v1/daily/5day/${citykey}?apikey=%0987AnaxK8xBv6zhNz5JjUwQMK0n63NeAU&metric=true`);
               const json = await response.json();
               resolve(json)
           } catch (err) {
               reject(err)
           }
       })
   },
   getCurrent(citykey){
    return new Promise(async (resolve, reject) => {
       try {
           const response = await fetch(this.url + `/currentconditions/v1/${citykey}?apikey=%0987AnaxK8xBv6zhNz5JjUwQMK0n63NeAU`);
           const json = await response.json();
           resolve(json)
       } catch (err) {
           reject(err)
       }
   })
},
}

export default callServer