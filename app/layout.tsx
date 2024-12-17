"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { type ReactNode } from "react";
import { baseSepolia } from "viem/chains";
import { createConfig, http, WagmiProvider } from "wagmi";
import { coinbaseWallet } from "wagmi/connectors";
import { structuralSharing } from "wagmi/query";

const config = createConfig({
  chains: [baseSepolia],
  connectors: [coinbaseWallet()],
  transports: { [baseSepolia.id]: http() },
});
const queryClient = new QueryClient({ defaultOptions: { queries: { structuralSharing } } });

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
      </body>
    </html>
  );
}
