"use client";

import React from "react";
import { useConnect } from "wagmi";

export default function Home() {
  const {
    data,
    connect,
    connectors: [connector],
  } = useConnect();
  return (
    <main style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <pre>{data?.accounts.join("\n")}</pre>
      <button
        disabled={!connector}
        onClick={() => {
          connect({ connector });
        }}
      >
        connect
      </button>
    </main>
  );
}
