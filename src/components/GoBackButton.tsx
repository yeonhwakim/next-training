"use client";

import { useRouter } from "next/navigation";

export default function GoBackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push("/products");
      }}
    >
      제품 리스트로 이동
    </button>
  );
}
