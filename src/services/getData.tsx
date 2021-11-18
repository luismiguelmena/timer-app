import axios from 'axios'

const getTotalTime = async ():Promise<any> => {
    try {
      const url = 'https://time-backend.herokuapp.com/';
      return await axios.get(url);
    } catch (error) {
      console.log("ERROR", error)
      return error
      
    }
  }

export default getTotalTime