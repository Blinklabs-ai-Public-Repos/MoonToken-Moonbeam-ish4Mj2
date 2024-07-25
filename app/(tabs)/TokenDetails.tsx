import React from "react";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { MarkdownText } from "@/components/MarkdownText";

import config from "@/uiconfig.json";

const TokenDetails = () => {
  const { tokenDetails } = config.project;
  return (
    <div className="flex flex-col gap-4 p-4">
      <MarkdownText
        className="p-2 prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 animate-fade-in-up"
        remarkPlugins={[remarkGfm, remarkMath]}
        components={{
          div({ children }) {
            return <div>{children}</div>;
          },
          h1({ children }) {
            return <h1 className="text-[32px] font-bold">{children}</h1>;
          },
          h2({ children }) {
            return <h2 className="text-2xl font-bold">{children}</h2>;
          },
          h3({ children }) {
            return <h3 className="text-lg font-bold">{children}</h3>;
          },
          h4({ children }) {
            return <h4 className="text-base font-bold">{children}</h4>;
          },
          h5({ children }) {
            return <h5 className="text-sm font-bold">{children}</h5>;
          },
          h6({ children }) {
            return <h6 className="text-xs font-bold">{children}</h6>;
          },
          p({ children }) {
            return <p className="text-base">{children}</p>;
          },
          ol({ children }) {
            return <ol className="list-decimal pl-4 mb-2">{children}</ol>;
          },
          ul({ children }) {
            return <ol className="list-disc pl-4 mb-2">{children}</ol>;
          },
          li({ children }) {
            return <li className="mb-1 text-base">{children}</li>;
          },
        }}
      >
        {tokenDetails}
      </MarkdownText>
    </div>
  );
};

export default TokenDetails;
