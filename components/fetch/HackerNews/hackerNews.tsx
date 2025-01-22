import JobStory from "./jobStory";

export default async function HackerNews() {
  let res;
  try {
    const jobIDs = await fetch(
      "https://hacker-news.firebaseio.com/v0/jobstories.json",
    );
    res = await jobIDs.json();
  } catch (err) {
    console.error(err);
  }

  return (
    <section className="flex max-h-80 flex-col gap-2 overflow-y-scroll p-2">
      <h3 className="text-xl font-bold">Hacker News Jobs Board API</h3>
      {res.map((id: string) => (
        <JobStory key={id} id={id} />
      ))}
    </section>
  );
}
