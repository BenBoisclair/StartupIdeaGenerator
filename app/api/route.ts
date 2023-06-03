import { NextRequest, NextResponse } from "next/server";

import { OpenAI } from "langchain/llms/openai"
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";



const model = new OpenAI({
    modelName: 'gpt-3.5-turbo',
    openAIApiKey: process.env.OPENAI_API_KEY as string,
})

const template = `You are a startup generator. You will be generating a startup based on the INFORMATION given by the user. The INFORMATION you will be provided with will be INDUSTRY, GENDER, INCOME, OCCUPATION, and COUNTRY. INDUSTRY will be the startup industries the user is interested in. GENDER, INCOME, OCCUPATION, and COUNTRY will be the information of the customer for the startup. You will also be given a OUTPUT TEMPLATE. Follow this template exactly and format your answer in the same way. [NEXT STEPS] is the next tasks that the user will have to do to make the startup such as research, validation, and timeline. INCOME is in baht. The problem you select should be less common, and the solution has to be innovative. Make sure to include some technology as part of the solution. Return in MARKUP.

OUTPUT TEMPLATE
Startup Name: [NAME]
Problem: [PROBLEM]
Solution: [SOLUTION]
Market: [MARKET]
Next Steps: [NEXT STEPS]

INFORMATION
INDUSTRY: {industry}
GENDER: {gender}
INCOME: {income}
OCCUPATION: {occupation}
COUNTRY: {country}

Startup:
`;

export async function POST(req: NextRequest, res: NextResponse) {
    const { industry, gender, income, occupation, country } = await req.json()
    
    const formatter = new PromptTemplate({
        template: template,
        inputVariables: ["industry", "gender", "income", "occupation", "country"]
    })
    
    const formattedPrompt = await formatter.format({
        industry,
        gender,
        income,
        occupation,
        country
    })

    const chain = new LLMChain({ llm: model, prompt: formatter });

    const response = await chain.call({
        industry,
        gender,
        income,
        occupation,
        country
    });
    
    console.log(response)

    return NextResponse.json({ startup: response }, { status: 200 })
    
    // return new Response(JSON.stringify({ startup: response }))
}