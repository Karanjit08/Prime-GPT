import OpenAI from "openai/index.mjs";



const client = new OpenAI({
    // apiKey: OPENAI_API_KEY, // This is the default and can be omitted
    dangerouslyAllowBrowser: true
  });


export default client;