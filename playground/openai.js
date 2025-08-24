import 'dotenv/config';
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const stream = await openai.responses.create({
    model: "gpt-3.5-turbo",
    input: "Write a poem about the sea.",
    temperature: 0.7,
    max_output_tokens: 250,
    stream: true
});

for await (const event of stream) {
    if (event.delta) {
        process.stdout.write(event.delta);
    }
}

/*openai.responses.create({
    model: "gpt-3.5-turbo",
    input: "Write a poem about the sea.",
    temperature: 0.7,
    max_output_tokens: 250,
    stream: true
}).then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
});*/