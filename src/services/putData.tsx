import axios from "axios";

const putTime = (data: Object) =>
  new Promise((resolve, reject) => {
    const url = "https://time-backend.herokuapp.com/put";

    axios
      .put(url, { time: data })
      .then((res: Object) => {
        resolve(res);
      })
      .catch((err: Error) => {
        reject(err);
      });
  });

export default putTime;
