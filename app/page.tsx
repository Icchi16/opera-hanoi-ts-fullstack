"use client";
import React, { useEffect } from "react";
import Waves from "node-waves";
import Title from "@/components/global/Title";
import UserModal from "@/components/modal/UserModal";

export default function Home() {
  useEffect(() => {
    Waves.init();
    Waves.attach(".waves");
  }, []);

  return (
    <div className="font-[family-name:var(--body)] text-main">
      <UserModal isOpen={true} />
      <main>
        This is main
        <Title>hello</Title>
      </main>
    </div>
  );
}
