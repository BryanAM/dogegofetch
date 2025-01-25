import JobStory from "./jobStory";

async function fetchJobIDs(): Promise<string[]> {
  try {
    const res = await fetch(
      "https://hacker-news.firebaseio.com/v0/jobstories.json",
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch job IDs: ${res.status} ${res.statusText}`,
      );
    }

    const jobIDs = await res.json();

    if (!Array.isArray(jobIDs)) {
      throw new Error("Invalid response: job IDs are not an array");
    }

    return jobIDs;
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
