
'use client'

import { ScrollArea } from "./scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { Button } from "./button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card"
import { Input } from "./input"
import {useChat } from 'ai/react'

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api:  '/api/chat',

  })
   return (
      <Card className="w-[440px]"> 
          <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel AI SDK to produce the chat bot.</CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full pr-4">
            { messages.map(message => {
              return (
                  <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                  {message.role === 'user' && (
                     <Avatar>
                     <AvatarFallback>Kl</AvatarFallback>
                    <AvatarImage src="https://github.com/klemeragm.png" />
                </Avatar>
              )}
              
              {message.role === 'assistant' && (
                <Avatar>
                <AvatarFallback>RS</AvatarFallback>
                <AvatarImage src="https://github.com/github.png" />
              </Avatar>
              )}
              
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700">
                  {message.role === 'user'? 'Usuário' : 'AI' }:
                </span>
              {message.content }
              </p>
            </div>
            )
          }) } 
         </ScrollArea>  
        </CardContent>
          <CardFooter>
            <form className="w-full flex gap-2" onSubmit={handleSubmit}>
              <Input placeholder="How can I help you?" value={input} onChange={handleInputChange} />
              <Button type="submit">Send</Button>
            </form>
          </CardFooter>
      </Card>
    )
}