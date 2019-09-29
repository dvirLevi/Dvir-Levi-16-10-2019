

let callServer = {
    url: 'http://dataservice.accuweather.com/',
    getAutoComplete(cityName){
         return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(this.url + `locations/v1/cities/autocomplete?apikey=PHeKHGjsoPqKjsjrgBLnJKdilXM1H98D&q=${cityName}`);
                const json = await response.json();
                resolve(json)
            } catch (err) {
                reject(err)
            }
        })
    }
}

export default callServer