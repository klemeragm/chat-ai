import { Chat } from "@/components/ui/Chat"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription,CardFooter,CardHeader,CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Car } from "lucide-react"

export default function Home() {
  return (
    <div className="flex  min0-h-screen bg-slte-50  itens-center justify-center">
      <Chat />
    </div>
  )
}