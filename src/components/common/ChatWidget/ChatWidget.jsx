import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatWidget.module.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello there! I'm your wedding photography assistant. How can I help make your special day absolutely perfect? 💍",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const responses = {
        greeting: [
          "I'm so excited for your wedding! What specific aspect of photography would you like to know about? 📸",
          "Wedding planning is such a beautiful journey! How can I assist you today?",
          "Hello! Ready to create some magical memories? What would you like to know?"
        ],
        packages: "We offer three beautiful packages: Essential (perfect for intimate weddings), Premium (our most popular with 2 photographers), and Luxury (full weekend coverage). Which type of celebration are you planning?",
        pricing: "Our packages start at RS.12000. The average investment is RS.24000-RS.50000. Would you like me to help you find the perfect package for your budget?",
        booking: "We recommend booking 9-12 months in advance, especially for peak season (May-October). Would you like to check availability for your date?",
        destination: "Absolutely! We adore destination weddings and are passport-ready. We've captured love stories in over 15 countries! Where are you dreaming of getting married?",
        engagement: "Engagement sessions are a wonderful way to get comfortable in front of the camera! They're included in our Premium and Luxury packages.",
        default: "That's a fantastic question! For detailed information about our services or to see more photos, I recommend checking our portfolio or scheduling a consultation. Would you like me to help you with that?"
      };

      const msg = inputValue.toLowerCase();
      let reply;

      if (msg.includes('hi') || msg.includes('hello') || msg.includes('hey')) {
        reply = responses.greeting[Math.floor(Math.random() * responses.greeting.length)];
      } else if (msg.includes('package') || msg.includes('option')) {
        reply = responses.packages;
      } else if (msg.includes('price') || msg.includes('cost') || msg.includes('how much')) {
        reply = responses.pricing;
      } else if (msg.includes('book') || msg.includes('available') || msg.includes('date')) {
        reply = responses.booking;
      } else if (msg.includes('destination') || msg.includes('travel')) {
        reply = responses.destination;
      } else if (msg.includes('engagement') || msg.includes('pre-wedding')) {
        reply = responses.engagement;
      } else {
        reply = responses.default;
      }

      const botMessage = {
        id: messages.length + 2,
        text: reply,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      
      const errorMessage = {
        id: messages.length + 2,
        text: "I'm having trouble connecting right now. Please email us at info@eternalmoments.com or call (+977) 123-4567 for immediate assistance.",
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      };

      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [
    "What packages do you offer?",
    "How much does it cost?",
    "Do you do destination weddings?",
    "How far in advance should we book?",
    "Do you include engagement photos?"
  ];

  return (
    <div className={styles.chatWidget}>
      {/* Chat Toggle Button */}
      <motion.button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : (
          <>
            <MessageCircle size={24} />
            <Sparkles className={styles.sparkle} size={12} />
          </>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Chat Header */}
            <div className={styles.chatHeader}>
              <div className={styles.headerContent}>
                <div className={styles.botAvatar}>
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className={styles.headerTitle}>Wedding Assistant</h3>
                  <p className={styles.headerSubtitle}>Ask me anything! 💍</p>
                </div>
              </div>
              <motion.button
                className={styles.closeButton}
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Chat Messages */}
            <div className={styles.messagesContainer}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`${styles.message} ${
                    message.sender === 'user' ? styles.userMessage : styles.botMessage
                  } ${message.isError ? styles.errorMessage : ''}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={styles.messageAvatar}>
                    {message.sender === 'user' ? (
                      <User size={16} />
                    ) : (
                      <Bot size={16} />
                    )}
                  </div>
                  <div className={styles.messageContent}>
                    <p className={styles.messageText}>{message.text}</p>
                    <span className={styles.messageTime}>
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}
              
              {isLoading && (
                <div className={styles.loadingMessage}>
                  <div className={styles.typingIndicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span className={styles.typingText}>Thinking...</span>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            <div className={styles.suggestedQuestions}>
              <p className={styles.suggestedTitle}>Quick questions:</p>
              <div className={styles.questionsGrid}>
                {suggestedQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    className={styles.questionChip}
                    onClick={() => {
                      setInputValue(question);
                      setTimeout(() => {
                        document.querySelector(`.${styles.sendButton}`)?.click();
                      }, 100);
                    }}
                    disabled={isLoading}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {question}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Chat Input */}
            <form className={styles.inputContainer} onSubmit={handleSendMessage}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about packages, pricing, or wedding tips..."
                className={styles.chatInput}
                disabled={isLoading}
                aria-label="Type your message"
              />
              <motion.button
                type="submit"
                className={styles.sendButton}
                disabled={!inputValue.trim() || isLoading}
                aria-label="Send message"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
              </motion.button>
            </form>

            {/* Chat Footer */}
            <div className={styles.chatFooter}>
              <p className={styles.footerText}>
                AI-powered assistant • <span className={styles.highlight}>Real responses</span> •{' '}
                <button
                  className={styles.resetButton}
                  onClick={() => setMessages([messages[0]])}
                  aria-label="Reset conversation"
                >
                  Start over
                </button>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;