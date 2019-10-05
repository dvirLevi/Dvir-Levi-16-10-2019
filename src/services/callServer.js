

let callServer = {
    url: 'http://dataservice.accuweather.com/',
    getAutoComplete(cityName){
         return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(this.url + `locations/v1/cities/autocomplete?apikey=KlZerZuBoGYntAxHJRNz46XI3MkCff0q&q=${cityName}`);
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
               const response = await fetch(this.url + `forecasts/v1/daily/5day/${citykey}?apikey=%09KlZerZuBoGYntAxHJRNz46XI3MkCff0q&metric=true`);
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
           const response = await fetch(this.url + `/currentconditions/v1/${citykey}?apikey=%09KlZerZuBoGYntAxHJRNz46XI3MkCff0q`);
           const json = await response.json();
           resolve(json)
       } catch (err) {
           reject(err)
       }
   })
},
}

export default callServer