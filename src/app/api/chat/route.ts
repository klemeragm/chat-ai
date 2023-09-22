import OpenAI from 'openai';
//import { Configuration, OpenAIApi} from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
})

//const openai = new OpenAIApi(config)

//important: SET the runtime to edge
export const runtime = 'edge'

export async function POST(req: Request) {
  
//extract the text 'messages' from the body of the request
const { messages } = await req.json()

//Ask OpenAi stream with chat completion given the prompt
const response = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  stream: true,
  messages
})
// Convert the response to a readable stream
const stream = OpenAIStream(response)

//Respond with the stream
return new StreamingTextResponse(stream)
}