import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type JobStoryProps = {
  id: string;
};

type JobStory = {
  id: string;
  by: string;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

export default async function JobStory(props: JobStoryProps) {
  const { id } = props;
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
  );

  const jobStory: JobStory = await res.json();
  const time = new Date(jobStory.time * 1000).toLocaleTimeString();
  const date = new Date(jobStory.time * 1000).toLocaleDateString();
  console.log(jobStory);
  return (
    <Card className="relative">
      <CardHeader className="p-2">
        <CardTitle className="text-md">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="before:absolute before:inset-0 before:content-[''] hover:before:rounded-lg hover:before:ring-2 hover:before:ring-black focus:outline-none focus:before:rounded-lg focus:before:ring-2 focus:before:ring-black"
            href={`${jobStory.url}`}
          >
            {jobStory.title}
          </Link>
        </CardTitle>
        <CardDescription> By: {jobStory.by}</CardDescription>
      </CardHeader>
      <CardContent className="p-2">
        <span>
          {date}
          {"・"}
          {time}
        </span>
      </CardContent>
    </Card>
  );
}
