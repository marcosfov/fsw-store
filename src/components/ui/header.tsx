import { Button } from "@/components/ui/button";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

import { Card } from "./card";

const Header = () => {
  return (
    <Card className="flex justify-between p-[1.875rem] items-center">
      <Button variant="outline" size="icon">
        <MenuIcon />
      </Button>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW </span>Store
      </h1>

      <Button variant="outline" size="icon">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
