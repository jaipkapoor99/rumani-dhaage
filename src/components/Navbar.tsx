import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link to="/" className="text-xl font-bold" style={{ color: '#A91B4D' }}>
        Rumani Dhaage
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <nav className="grid gap-4 text-lg mt-8">
            <Link to="/" className="p-2 hover:bg-gray-100 rounded">Products</Link>
            <Link to="/about" className="p-2 hover:bg-gray-100 rounded">About Us</Link>
            <Link to="/contact" className="p-2 hover:bg-gray-100 rounded">Contact Us</Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
