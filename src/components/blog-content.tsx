import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type BlogContentProps = {
  content: string;
};

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="blog-content text-gray-900 dark:text-white/90 leading-relaxed space-y-4">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold mt-10 mb-4 text-gray-950 dark:text-white">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-xl font-semibold mt-8 mb-3 text-gray-950 dark:text-white">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-base leading-8">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc pl-6 space-y-2 my-4">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 space-y-2 my-4">{children}</ol>
          ),
          li: ({ children }) => <li className="leading-7">{children}</li>,
          strong: ({ children }) => (
            <strong className="font-semibold text-gray-950 dark:text-white">
              {children}
            </strong>
          ),
          code: ({ children }) => (
            <code className="bg-gray-200 dark:bg-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm">
              {children}
            </pre>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-300 dark:border-gray-600 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-left font-semibold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
              {children}
            </td>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-blue-600 dark:text-blue-400 underline underline-offset-2"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
        }}
      >
        {content.trim()}
      </ReactMarkdown>
    </div>
  );
}
