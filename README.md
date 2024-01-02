This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

And use of [VERCEL AI SDK](https://sdk.vercel.ai/docs/guides/providers/openai) documentation to help create this project. 

Nice to have the [OPENAI KEYS](https://platform.openai.com/account/api-keys) of OPENAI (if you desire) to test and modify the prompt. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

##Docker 
<p>
<p>Build locally:</p>

  ```bash
  docker build -t chatgpt-ui .
  docker run -e OPEN_API_KEY=xxxxxx -p 3000:3000 chatgpt-ui
  ```  
```bash
docker run -e OPENAI_API_KEY=xxxxxxxx -p 3000:3000 ghcr.io/klemeragm/chat-ai:npm
```

#Ruuning Locally
##1. Clone Repo 

<code>git clone https://github.com/klemeragm/chat-ai.git</code>


##2. Install Dependencies 
  ```bash
  npm i
  ```
##3. Clone Repo

<p>Create a .env.local file in the root of the repo with your OpenAI API Key:</p>
```bash
  OPENAI_API_KEY=YOUR_KEY
```

<p>You can set OPENAI_API_HOST where access to the official OpenAI host is restricted or unavailable, allowing users to configure an alternative host for their specific needs.

Additionally, if you have multiple OpenAI Organizations, you can set OPENAI_ORGANIZATION to specify one.
</p>

##4. Clone Repo
<code>npm run dev</code>


#Open the project 

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
