import axios from 'axios'

const getTotalTime = async ():Promise<any> => {
    try {
      const url = 'http://localhost:4000/';
      return await axios.get(url);
    } catch (error) {
      console.log("ERROR", error)
      return error
      
    }
  }

export default getTotalTime