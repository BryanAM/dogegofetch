import JobStory from "./jobStory";

async function fetchJobIDs(): Promise<string[]> {
  try {
    const jobIDs = await fetch(
      "https://hacker-news.firebaseio.com/v0/jobstories.json",
      { cache: "no-store" },
    );
    return await jobIDs.json();
  } catch (err) {
    console.error("Error fetching job IDs from Hacker News:", err);
    return [];
  }
}

export default async function HackerNews() {
  const jobIDs: string[] = await fetchJobIDs();

  return (
    <section className="flex flex-col gap-2 overflow-y-scroll p-2">
      <h3 className="text-xl font-bold">Hacker News Jobs Board API</h3>
      {jobIDs.length > 0 ? (
        jobIDs.map((id: string) => <JobStory key={id} id={id} />)
      ) : (
        <div>No jobs found.</div>
      )}
    </section>
  );
}
