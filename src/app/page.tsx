import { Header } from "@/components/layout/header"
import { Hero } from "@/components/main/hero"
import { Navigation } from "@/components/main/navigation"
import { PaymentForm } from "@/components/main/payment-form"
import { TeamMembers } from "@/components/main/team-members"
import { AuthenticationForm } from "@/components/main/authentication-form"
import { ComputeEnvironment } from "@/components/main/compute-environment"
import { ChatInterface } from "@/components/main/chat-interface"
import { Footer } from "@/components/layout/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <div className="border-t border-border">
        <Navigation />
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <PaymentForm />
            <div className="space-y-8">
              <TeamMembers />
              <AuthenticationForm />
            </div>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <ComputeEnvironment />
            <ChatInterface />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
