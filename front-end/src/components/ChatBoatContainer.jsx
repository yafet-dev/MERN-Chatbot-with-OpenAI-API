import { FiSend } from "react-icons/fi";

function ChatBoatContainer() {
  return (
    <div className="h-screen w-full p-36 from-gray-900 to-gray-800 flex flex-col items-center justify-center">
      {/* Chatbot Container */}
      <h2 className="my-8 text-white text-center text-4xl font-semibold tracking-tighter">
        What can I help you today ?
      </h2>
      <div className="lg:w-full h-[100rem] bg-transparent border border-gray-700 rounded-xl shadow-lg flex flex-col">
        {/* Header */}
        <div className="p-4 flex items-center gap-3 border-b border-gray-700">
          <img
            src="https://www.reshot.com/preview-assets/icons/VXA9UC5GBR/ai-research-VXA9UC5GBR.svg" // Replace with your chatbot logo
            alt="ChatBot"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="text-white text-lg font-bold self-start">ChatBot</h2>
            <p className="text-gray-400 text-sm">Ask me anything!</p>
          </div>
        </div>
        {/* Chat Messages */}
        <div className="flex px-16 py-4 flex-col overflow-y-auto space-y-3 ">
          {/* Message example */}
          <div className="self-start bg-blue-800 text-left text-white p-3 rounded-lg max-w-[60%]">
            Hello, How can I help you today ?
          </div>
          <div className="self-end bg-gray-600 text-left text-white p-3 rounded-lg max-w-[60%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        {/* Input Area */}
        <div className="p-4 flex items-center gap-2">
          <textarea
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-gray-500 focus:outline-none"
          />
          <button className="bg-white text-black-100  p-2 rounded-lg hover:bg-gray-300">
            <FiSend className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBoatContainer;
