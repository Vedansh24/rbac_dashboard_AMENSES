import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, Shield, Users, BarChart3, Lock, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
        
        <div className="mx-auto w-full max-w-6xl flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent shadow-md">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">RBAC Dashboard</p>
              <p className="text-xs text-muted-foreground">Role-Based Access Control</p>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/user/login">
              <Button variant="outline" size="sm">
                User Login
              </Button>
            </Link>
            <Link to="/vendor/login">
              <Button variant="outline" size="sm">
                Vendor Login
              </Button>
            </Link>
            {/* <Link to="/admin/login">
              <Button size="sm">
                Admin Login
              </Button>
            </Link> */}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Enterprise-Grade
              </span>
              <br />
              Access Control System
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Secure, scalable, and intuitive role-based access control dashboard built with modern web technologies. 
              Manage users, vendors, and administrators with precision and ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/user/signup">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started as User
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/vendor/signup">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  Join as Vendor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Powerful Features for Every Role
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our RBAC system provides tailored experiences for users, vendors, and administrators 
                with comprehensive dashboard analytics and secure access management.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* User Portal Features */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">User Portal</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Personal dashboard with analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Interactive data visualization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span>Real-time performance metrics</span>
                  </li>
                </ul>
              </div>

              {/* Vendor Portal Features */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <BarChart3 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold">Vendor Portal</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Advanced business analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Revenue tracking tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Customer insights dashboard</span>
                  </li>
                </ul>
              </div>

              {/* Admin Portal Features */}
              <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                    <Lock className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-xl font-semibold">Admin Portal</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Complete system control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>User management tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Security monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8">Built with Modern Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <LayoutDashboard className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium">React 18</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium">Redux Toolkit</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <span className="text-sm font-medium">Recharts</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                  <Shield className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold">RBAC Dashboard</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Enterprise-grade role-based access control system built with modern web technologies 
                for secure and scalable user management.
              </p>
              <p className="text-sm text-muted-foreground">
                © 2026 Vedansh. All rights reserved. #AMENSES_INNVOTATION
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Access</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/user/login" className="text-muted-foreground hover:text-primary transition-colors">
                    User Login
                  </Link>
                </li>
                <li>
                  <Link to="/vendor/login" className="text-muted-foreground hover:text-primary transition-colors">
                    Vendor Login
                  </Link>
                </li>
                {/* <li>
                  <Link to="/admin/login" className="text-muted-foreground hover:text-primary transition-colors">
                    Admin Login
                  </Link>
                </li> */}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Built with using React, TypeScript, and modern web standards
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
