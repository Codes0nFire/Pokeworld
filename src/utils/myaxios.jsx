import axios from "axios";





let myinstance=axios.create({
    baseURL:"https://pokeapi.co/api/v2/"
})


export default myinstance