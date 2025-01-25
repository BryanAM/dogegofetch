import Image from "next/image";

import dog from "../../public/assets/shiba-inu-icon.svg";
import Link from "next/link";
export default function About() {
  return (
    <main className="col-span-4 grid gap-4 lg:col-span-3">
      <div>
        <h1 className="text-3xl font-bold">About Doge Go Fetch</h1>
        <p>
          This weather application is a showcase of web APIs, asynchronous
          JavaScript, and real-world data fetching. Designed to be both
          functional and visually engaging, the app leverages the many APIs to
          display things from news, to daily temperature trends for selected
          locations. The project highlights my skills in integrating RESTful
          APIs, handling dynamic data with error resilience, and ensuring smooth
          user interaction.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold">Built With</h2>
        <ul>
          <li>
            <a
              className="hover:font-bold focus:font-bold"
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              NextJS
            </a>
          </li>
          <li>
            <a
              className="hover:font-bold focus:font-bold"
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              shadcn/ui
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold">API Tooling</h2>
        <ul>
          <li>
            <a
              className="hover:font-bold focus:font-bold"
              href="https://github.com/HackerNews/API"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hacker News API
            </a>
          </li>
          <li>
            <a
              className="hover:font-bold focus:font-bold"
              href="https://www.tomorrow.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tomorrow Weather API
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold">Other Attributions</h2>
        <Image src={dog} alt="shiba inu" />
        <Link
          href="https://thenounproject.com/icon/shiba-inu-1603338/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shiba Inu icon by Kelly Scruggs from Noun Project CC BY 3.0{" "}
        </Link>
      </div>
    </main>
  );
}
