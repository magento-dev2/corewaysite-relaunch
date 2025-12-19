import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAG Chatbot - AI Document Intelligence | Coreway Solution",
  description:
    "Transform your PDFs into intelligent conversational assistants. Ask questions, extract insights, and get instant answers using advanced Retrieval Augmented Generation (RAG) technology.",
  keywords: [
    "RAG chatbot",
    "AI document processing",
    "PDF chatbot",
    "document intelligence",
    "conversational AI",
    "GPT-4",
    "vector database",
    "semantic search",
  ],
  openGraph: {
    title: "RAG Chatbot - AI Document Intelligence | Coreway Solution",
    description:
      "Transform your PDFs into intelligent conversational assistants with advanced RAG technology.",
    images: ["/assets/agent/rag_chatbot.png"],
  },
};

export default function RAGChatbotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
