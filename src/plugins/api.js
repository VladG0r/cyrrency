import axios from "axios";

export default {
  async get(url) {
    try {
      const response = await axios.get(url);
      if (response && response.status === 200 && response.data) {
        return { isSuccess: true, data: response.data };
      } else {
        return { isSuccess: false };
      }
    } catch (e) {
      console.log("ошибка");
      // дописать обработку ошибок
      return { isSuccess: false };
    }
  },
};
