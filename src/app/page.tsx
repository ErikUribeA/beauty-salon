import { Button } from "@mui/joy"
import { Scissors } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-blue-100 flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2">
          <Scissors className="h-8 w-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Beauty Salon</h1>
        </div>
        <Link href="/login"><Button variant="outlined">Login</Button></Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Services</h2>
        <Button size="lg" className="w-full max-w-xs">
          Add Service
        </Button>
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 text-center text-gray-600">
        <p>&copy; 2024 Beauty Salon. All rights reserved.</p>
      </footer>
    </div>
  )
}