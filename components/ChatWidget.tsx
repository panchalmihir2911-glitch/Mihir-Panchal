import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, Bot } from 'lucide-react';
import { sendMessageToGemini, initializeChat } from '../services/geminiService';
import { ChatMessage, MessageRole } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.MODEL, text: "Hi! I'm the Baguley MOT Assistant. Ask me about our services, opening times, or booking an MOT." }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasApiKey, setHasApiKey] = useState(false);

  useEffect(() => {
    const available = initializeChat();
    setHasApiKey(available);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
        scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: MessageRole.USER, text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsLoading(true);

    if (!hasApiKey) {
        // Fallback simulation if no API key
        setTimeout(() => {
            setMessages(prev => [...prev, { 
                role: MessageRole.MODEL, 
                text: "Our AI system is currently offline (API Key missing). Please call us at 0161 123 4567 for immediate assistance." 
            }]);
            setIsLoading(false);
        }, 1000);
        return;
    }

    try {
      const responseText = await sendMessageToGemini(userMsg.text);
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: MessageRole.MODEL, text: "Sorry, something went wrong. Please call us.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-2xl w-80 sm:w-96 mb-4 flex flex-col border border-gray-200 overflow-hidden transition-all duration-300 ease-in-out h-[500px]">
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-blue-400" />
              <div>
                <h3 className="font-semibold text-sm">Baguley Assistant</h3>
                <p className="text-xs text-slate-400">Usually replies instantly</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                    msg.role === MessageRole.USER
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-gray-200 shadow-sm rounded-bl-none'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-200">
                  <Loader2 size={16} className="animate-spin text-blue-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2 border border-slate-200 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about MOTs..."
                className="flex-1 bg-transparent border-none outline-none text-sm text-slate-700 placeholder-slate-400"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className={`p-1 rounded-full transition-colors ${
                  !inputValue.trim() ? 'text-slate-300' : 'text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Send size={18} />
              </button>
            </div>
            <div className="text-center mt-2">
                <p className="text-[10px] text-slate-400">AI can make mistakes. Contact us for urgent queries.</p>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? 'bg-slate-700' : 'bg-blue-600 hover:bg-blue-700'} text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center`}
        aria-label="Chat with us"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ChatWidget;