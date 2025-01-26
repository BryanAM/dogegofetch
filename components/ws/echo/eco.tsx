import {
  Card,
  CardFooter,
  CardHeader,
  CardContent,
} from "@/components/ui/card";

export default function WSEcho() {
  return (
    <section className="center m-auto h-full max-w-lg p-1">
      <Card className="flex h-full w-full flex-col">
        <CardHeader className="bg-secondary">header</CardHeader>
        <CardContent className="flex-grow">content</CardContent>
        <CardFooter className="border-t-2 p-8">Footer</CardFooter>
      </Card>
    </section>
  );
}
