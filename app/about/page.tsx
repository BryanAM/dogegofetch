import Image from "next/image";

import dog from "../../public/assets/shiba-inu-icon.svg";
import Link from "next/link";
export default function About() {
  return (
    <main>
      <h1>About Doge Go Fetch</h1>

      <h2>Built With</h2>

      <h2>Attributions</h2>
      <Image src={dog} alt="shiba inu" />
      <Link
        href="https://thenounproject.com/icon/shiba-inu-1603338/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Shiba Inu icon by Kelly Scruggs from Noun Project CC BY 3.0{" "}
      </Link>
    </main>
  );
}
