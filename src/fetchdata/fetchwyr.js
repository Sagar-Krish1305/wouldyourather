import axios from "axios";
import { config } from "../config/config";

async function fetchwyrdata(){

    const options = {
      method: 'GET',
      url: 'https://would-you-rather.p.rapidapi.com/wyr/random',
      headers: {
        'X-RapidAPI-Key': config.xrapidapikey,
        'X-RapidAPI-Host': config.xrapidhost
      }
    };
    
    try {
        const response = await axios.request(options);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export default fetchwyrdata;