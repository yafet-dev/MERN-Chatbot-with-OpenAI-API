import { useRef, useState } from "react";
import { FiSend } from "react-icons/fi";

function ChatBoatContainer() {
  const textareaRef = useRef(null);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello, How can I help you today?" },
  ]);

  // Function to dynamically resize the textarea
  const handleInput = (e) => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset the height
      textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`; // Set new height, max 200px
    }
  };

  // Function to detect code vs text
  const isCode = (text) => {
    return text.includes("```"); // Treat messages wrapped in ``` as code
  };

  // Function to handle message submission
  const handleSendMessage = () => {
    const textarea = textareaRef.current;
    if (textarea && textarea.value.trim()) {
      const userMessage = textarea.value.trim();

      // Add the user message to the messages array
      setMessages([...messages, { sender: "user", text: userMessage }]);

      // Clear the textarea and reset its height
      textarea.value = "";
      textarea.style.height = "50px";
    }
  };

  return (
    <div className="min-h-screen w-full p-4 sm:p-12 bg-gradient-to-b flex flex-col items-center justify-center">
      {/* Chatbot Container */}
      <h2 className="my-4 sm:my-8 text-white text-center text-2xl sm:text-4xl font-semibold tracking-tighter">
        What can I help you today?
      </h2>
      <div className="w-full max-w-4xl h-full sm:h-[60vh] bg-transparent border border-gray-700 rounded-xl shadow-lg flex flex-col">
        {/* Header */}
        <div className="p-4 flex items-center gap-3 border-b border-gray-700">
          <img
            src="https://www.reshot.com/preview-assets/icons/VXA9UC5GBR/ai-research-VXA9UC5GBR.svg" // Replace with your chatbot logo
            alt="ChatBot"
            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full"
          />
          <div className="flex flex-col">
            <h2 className="text-white text-base sm:text-lg font-bold self-start">
              ChatBot
            </h2>
            <p className="text-gray-400 text-xs sm:text-sm">Ask me anything!</p>
          </div>
        </div>
        {/* Chat Messages */}
        <div className="flex px-4 sm:px-16 py-4 flex-col overflow-y-auto space-y-3 flex-grow">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`${
                message.sender === "bot"
                  ? "self-start bg-blue-800"
                  : "self-end bg-gray-600"
              } text-left text-white p-3 rounded-lg max-w-[80%] sm:max-w-[60%] ${
                isCode(message.text) ? "font-mono whitespace-pre-wrap" : ""
              }`}
            >
              {isCode(message.text)
                ? message.text.replace(/```/g, "") // Remove ``` for code blocks
                : message.text}
            </div>
          ))}
        </div>
        {/* Input Area */}
        <div className="p-4 flex gap-2 items-center">
          {/* Textarea */}
          <textarea
            ref={textareaRef}
            type="text"
            placeholder="Type your message..."
            className="flex-1 bg-transparent border border-gray-700 rounded-lg px-3 py-2 text-white focus:border-gray-500 focus:outline-none resize-none"
            onInput={handleInput}
            style={{ minHeight: "50px", maxHeight: "200px", overflowY: "auto" }}
          />
          {/* Send button */}
          <button
            className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-300"
            onClick={handleSendMessage}
          >
            <FiSend className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBoatContainer;
