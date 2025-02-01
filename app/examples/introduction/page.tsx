"use client";

export default function Introduction() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Introduction</h1>
      <p className="text-muted-foreground">
        Web APIs integrated and built beautifully in NextJS and Shadcn/ui.
      </p>

      <p>
        This is <strong>NOT</strong> a full tutorial on how to integreate every
        web API, nor is it a robust approach to using fetch APIs. It is however
        an exercise to utilize opensource web APIs in an effor to integrate them
        into a component library.
      </p>

      <p className="font-bold">Why build this?</p>
      <p>
        The purpose and goal of this project is mainly for practice and
        improvement. Over the past several years of my development experience I
        only had the opportunity to work with certain types of web APIs due to
        client restrictinos. This small little app gives me the opportunity to
        test, playwith and try out a variety of web APIs and combine them with
        common Javascript patterns we might see in production.
      </p>

      <p>
        <i>
          There is no better way to learn, than to try, and to try is to learn.
        </i>
      </p>

      <p className="font-bold">Other Notes</p>
      <ol>
        <li className="ml-6 list-decimal">This is not an exhaustive list.</li>
        <li className="ml-6 list-decimal">
          For any suggestions or improvements create a PR.
        </li>
        <li className="ml-6 list-decimal">
          If you have a web API you want to see implemented create a issue.
        </li>
        <li className="ml-6 list-decimal">
          Any code on this web page is open and free to use without a license.
        </li>
        <li className="ml-6 list-decimal">
          Contact? Reach out via my website...{" "}
          <a
            href="https://bryan-aument.surge.sh"
            target="__blank"
            rel="noopener noreferrer"
            className="underline decoration-indigo-500 hover:font-bold"
          >
            Bryan Aument
          </a>
        </li>
      </ol>
    </section>
  );
}
