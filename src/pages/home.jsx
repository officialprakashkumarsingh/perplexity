import { useState } from "react";
import { SearchMenu } from "../components/searchMenu";
import { ArrowRightArc } from "../components/svg";
import ChatInterface from "../components/ChatInterface";

export default function Home() {
  const [searchVal, setSearchVal] = useState("");
  const [showChat, setShowChat] = useState(false);

  const handleSearch = (query) => {
    setSearchVal(query);
    setShowChat(true);
  };

  const handleTopicClick = (topic) => {
    handleSearch(topic);
  };

  if (showChat) {
    return (
      <div className="w-full h-full">
        <div className="flex items-center justify-between p-4 border-b border-borderMain">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-superDuper rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <h1 className="text-xl font-semibold text-textMain">AhamAI</h1>
          </div>
          <button
            onClick={() => setShowChat(false)}
            className="px-4 py-2 text-sm text-textOff hover:text-textMain transition-colors"
          >
            New Chat
          </button>
        </div>
        <ChatInterface initialQuery={searchVal} />
      </div>
    );
  }

  return (
    <div className="homepage w-full h-full mx-auto max-w-screen-md md:px-lg px-md">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="w-12 h-12 bg-superDuper rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">A</span>
          </div>
          <h1 className="font-serif font-medium text-[2.5rem] text-textMain">AhamAI</h1>
        </div>
        <p className="text-textOff text-lg">What do you want to know?</p>
      </div>

      <div className="relative w-full mb-8">
        <div className="outline-none focus:outline-none focus:ring-borderMain font-sans flex items-center duration-200 transition-all bg-background border text-textMain border-borderMain focus:ring-1 placeholder-textOff shadow-sm rounded-xl text-base p-4">
          <textarea
            placeholder="Ask anything..."
            className="outline-none focus:outline-none w-full font-sans duration-200 transition-all caret-superDuper resize-none overflow-auto max-h-[50vh] selection:bg-superDuper selection:text-textMain bg-background focus:bg-background text-textMain placeholder-textOff rounded-xl text-base"
            autoComplete="off"
            spellCheck="false"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                if (searchVal.trim()) {
                  handleSearch(searchVal);
                }
              }
            }}
            rows={3}
          ></textarea>
        </div>
        <div className="absolute right-4 bottom-4">
          <button
            onClick={() => searchVal.trim() && handleSearch(searchVal)}
            className="bg-superDuper text-white p-2 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50"
            disabled={!searchVal.trim()}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <SearchMenu searchValue={searchVal} />
      </div>

      <div>
        <span className="try-asking-container">
          <ArrowRightArc />
          Try asking
        </span>
        <div className="search-topics">
          <span onClick={() => handleTopicClick("What is artificial intelligence?")}>What is artificial intelligence?</span>
          <span onClick={() => handleTopicClick("Explain quantum computing")}>Explain quantum computing</span>
          <span onClick={() => handleTopicClick("Best practices for React development")}>Best practices for React development</span>
          <span onClick={() => handleTopicClick("How to center a div in CSS")}>How to center a div in CSS</span>
          <span onClick={() => handleTopicClick("Python vs JavaScript comparison")}>Python vs JavaScript comparison</span>
          <span onClick={() => handleTopicClick("Latest trends in machine learning")}>Latest trends in machine learning</span>
          <span onClick={() => handleTopicClick("Explain blockchain technology")}>Explain blockchain technology</span>
        </div>
      </div>
    </div>
  );
}
