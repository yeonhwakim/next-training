import Image from "next/image";
import os from "os";

export default function Home() {
  console.log("서버!!");
  console.log(os.hostname());
  return <h1>홈페이지다!</h1>;
}
