import { NextRequest, NextResponse } from "next/server";

import { OpenAI } from "langchain/llms/openai"


const GPT3 = new OpenAI({
    modelName: 'gpt-3.5-turbo',
    openAIApiKey: process.env.OPENAI_API_KEY as string,
})

export async function POST(request: NextRequest) {
    const { prompt } = await request.json()

    if (!prompt) {
        return new NextResponse(JSON.stringify({ error: 'Prompt Needed'}), {
            status: 401,
        })
    }

    






    return new Response(JSON.stringify({ prompt }))
}