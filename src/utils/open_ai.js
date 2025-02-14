import OpenAI from "openai/index.mjs";
import { OPENAI_API_KEY } from "./constants";


const client = new OpenAI({
    apiKey: OPENAI_API_KEY, // This is the default and can be omitted
    dangerouslyAllowBrowser: true
  });


export default client;