import axios from "axios";

const API_URL = "https://1c4309a3.ngrok.io";

const apiInstance = axios.create({ baseURL: API_URL });

async function postResource(base64) {
  try {
    const data = apiInstance.post("/", { base64 });
  } catch (e) {
    console.log(e);
  }
}

export { postResource };
