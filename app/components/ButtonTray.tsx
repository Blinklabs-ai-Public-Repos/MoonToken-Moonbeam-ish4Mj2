import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/buttons/button";
import { LINKS } from "@/constants/common";

const ButtonTray = () => {
  return (
    <div className="flex items-center gap-2">
      <Button className="font-bold" disabled={true} variant={"secondary"}>
        <Link href={LINKS.UNISWAP} target="_blank_">
          Buy on Uniswap
        </Link>
      </Button>
      <p className="font-bold text-inactive">(Coming soon!)</p>
    </div>
  );
};

export default ButtonTray;
