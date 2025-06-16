
import React from 'react';
import { Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex items-start gap-3 ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Avatar */}
      <div className={`flex-shrink-0 p-2 rounded-full ${
        message.isUser 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
          : 'bg-gray-200 text-gray-600'
      }`}>
        {message.isUser ? <User size={16} /> : <Bot size={16} />}
      </div>

      {/* Message Content */}
      <div className={`flex flex-col max-w-xs lg:max-w-md ${
        message.isUser ? 'items-end' : 'items-start'
      }`}>
        <div className={`px-4 py-2 rounded-2xl shadow-sm ${
          message.isUser
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm'
            : 'bg-white text-gray-800 border rounded-bl-sm'
        }`}>
          <p className="text-sm leading-relaxed">{message.text}</p>
        </div>
        <span className="text-xs text-gray-500 mt-1 px-2">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </div>
  );
};

export default MessageBubble;
