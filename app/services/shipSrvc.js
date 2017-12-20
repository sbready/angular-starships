angular.module('starships').service('shipSrvc', function( $http ){

    let lastPage = 1;

    this.getStarships = ( page = lastPage ) => {
        lastPage = page;
        return $http.get(`https://swapi.co/api/starships/?page=${page}`)
            .then( res => {
                console.log(res);
                return res.data.results.map( ship => {
                    // https://swapi.co/api/starships/11/
                    let arr = ship.url.split('/');
                    ship.id = arr[arr.length - 2] * 1;
                    return ship
                })
            })
    }

    this.getStarship = (id) => {
        return $http.get(`https://swapi.co/api/starships/${id}`)
            .then( res => res.data )
    }

    this.getLastPage = () => {
        return lastPage;
    }
})