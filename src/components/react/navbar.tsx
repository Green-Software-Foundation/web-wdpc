import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

const NavigationComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navigationItems = [
    { href: "#overview", label: "Overview" },
    { href: "#why-matters", label: "Why WDPC Matters" },
    { href: "#architecture-vision", label: "Explore" },
    { href: "#resources", label: "Resources" },
    { href: "#directory", label: "Directory" },
    { href: "#get-involved", label: "Get Involved" },
  ];

  return (
    <div className="flex items-center">
      {/* Desktop navigation */}
      <div className="hidden lg:block">
        <NavigationMenu className="flex justify-center">
          <NavigationMenuList className="flex flex-wrap">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink href={item.href} className={navigationMenuTriggerStyle()}>
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile hamburger menu */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="p-2 text-gray-darker">
              <Menu className="size-2" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <nav className="mt-16 flex flex-col gap-2 p-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-2 py-2 text-2xl font-semibold text-primary-darker"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavigationComponent;
