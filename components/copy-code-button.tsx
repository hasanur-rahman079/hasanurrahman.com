"use client";

import { useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

interface CopyCodeButtonProps {
  code: string;
}

const COPY_FEEDBACK_DURATION = 2000;

export function CopyCodeButton({ code }: CopyCodeButtonProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_FEEDBACK_DURATION);
    } catch {
      // Silently handle clipboard errors
    }
  };

  return (
    <button
      aria-label={copied ? "Copied!" : "Copy code"}
      className="absolute top-2 right-3 flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 bg-neutral-700 text-neutral-300 transition-colors hover:bg-neutral-300 hover:text-neutral-700 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-300"
      onClick={copyToClipboard}
      title={copied ? "Copied!" : "Copy code"}
      type="button"
    >
      {copied ? (
        <FiCheck className="h-4 w-4 text-green-500" />
      ) : (
        <FiCopy className="h-4 w-4" />
      )}
    </button>
  );
}
