import { Layout } from "@/components/Layout";
import { Sale } from "@/components/Sale";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <Layout>
      <Sale />
    </Layout>
  );
}
