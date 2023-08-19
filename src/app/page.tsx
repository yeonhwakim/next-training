import Counter from "@/components/counter";
import os from "os";

export default function Home() {
  console.log("서버!!");
  console.log(os.hostname());

  return (
    <>
      <h1>홈페이지다! 버전2</h1>
      <Counter />
    </>
  );
}
