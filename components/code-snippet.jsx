import "server-only";

import fs from "fs";
import path from "path";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeSnippet = ({ relPath }) => {
  // Get the file path (adjust as needed)
  const filePath = path.join(process.cwd(), relPath);

  // Read file content as a string
  const fileContent = fs.readFileSync(filePath, "utf-8");

  return (
    <pre className="whitespace-pre-wrap rounded-md bg-muted p-4">
      <SyntaxHighlighter language="javascript" style={dracula}>
        {fileContent}
      </SyntaxHighlighter>
    </pre>
  );
};

export { CodeSnippet };
