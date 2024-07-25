"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { CHAINS } from "@/constants/chains";
import { LINKS } from "@/constants/common";
import useWallet from "@/hooks/wallet/useWallet";
import config from "@/uiconfig.json";

import { Button } from "./button";

const ChainButton = () => {
  const [currentChainId, setCurrentChainId] = useState<number>(0);
  const { address } = useWallet();
  const { switchChain } = useWallet();
  const chainInfo = CHAINS[currentChainId as keyof typeof CHAINS];

  const onSwitchChain = async () => {
    try {
      await switchChain(config.chainId.toString(16));
      setCurrentChainId(config.chainId);
    } catch (error) {
      console.log({ error });
    }
  };

  if (window) {
    if (window.ethereum) {
      window.ethereum.on("chainChanged", (chainId: string) => {
        setCurrentChainId(parseInt(chainId, 16));
      });
    } else {
      return (
        <Link href={LINKS.METAMASK} target="_blank_">
          <Button className="text-white font-semibold">Install Metamask</Button>
        </Link>
      );
    }
  }

  if (!address) {
    return null;
  }

  return (
    <Button
      className="bg-secondary text-white flex gap-2 items-center px-4 py-2 rounded-md"
      onClick={onSwitchChain}
    >
      {currentChainId === config.chainId ? (
        <>
          <Image
            src={chainInfo.logoUrl}
            width={24}
            height={24}
            alt="chain-logo"
            className="rounded-full"
          />
          <p className={"font-semibold"}>{chainInfo.name}</p>
        </>
      ) : (
        <p className={"font-semibold"}>Switch Chain</p>
      )}
    </Button>
  );
};

export default ChainButton;
