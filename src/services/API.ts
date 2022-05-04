import store from "@/store";
import axios, { AxiosError } from "axios";

const useAPI = async (url: string) => {
  try {
    const result = await axios.get(
      `https://new-cinema-api.herokuapp.com/${url}`
    );
    return result.data;
  } catch (error) {
    store.commit("updateError", (error as AxiosError).response?.data);
    throw error;
  }
};

export default useAPI;
