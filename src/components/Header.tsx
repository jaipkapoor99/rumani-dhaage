import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

export default function Header() {
  const location = useLocation()
  const isAdminRoute = location.pathname === "/admin"

  return (
    <header className="flex items-center justify-between p-4 bg-background">
      <Link to="/" className="text-2xl font-bold" style={{ color: "#A91B4D" }}>
        Rumani Dhaage
      </Link>
      {!isAdminRoute && (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className="grid gap-6 text-lg font-medium mt-8">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact Us
              </Link>
              <Link
                to="/admin"
                className="text-muted-foreground hover:text-foreground"
              >
                Admin
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      )}
    </header>
  )
}
