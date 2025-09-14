"use client";

import { CopyCodeButton } from "./copy-code-button";

interface PreProps {
  children: React.ReactNode;
  raw?: string;
}

// Function to extract text content from React elements
function extractTextFromChildren(children: React.ReactNode): string {
  if (typeof children === "string") {
    return children;
  }

  if (Array.isArray(children)) {
    return children.map(extractTextFromChildren).join("");
  }

  if (children && typeof children === "object" && "props" in children) {
    const element = children as React.ReactElement<{
      children?: React.ReactNode;
    }>;
    if (element.props?.children) {
      return extractTextFromChildren(element.props.children);
    }
  }

  return "";
}

export function Pre({ children, raw, ...props }: PreProps) {
  // Extract code content from children if raw is not provided
  const codeContent = raw || extractTextFromChildren(children);

  return (
    <div className="relative">
      <pre {...props}>{children}</pre>
      {codeContent && <CopyCodeButton code={codeContent} />}
    </div>
  );
}
