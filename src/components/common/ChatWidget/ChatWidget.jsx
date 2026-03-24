import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatWidget.module.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true); // Added state
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
    if (e) e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setShowSuggestions(false); // Hide suggestions when any message is sent

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const responses = {
        greeting: ["I'm so excited for your wedding! What specific aspect of photography would you like to know about? 📸"],
        packages: "We offer three beautiful packages: Essential, Premium, and Luxury.",
        pricing: "Our packages start at RS.12000. Average investment is RS.24000-RS.50000.",
        booking: "We recommend booking 9-12 months in advance. Check availability?",
        destination: "Absolutely! We adore destination weddings and are passport-ready.",
        engagement: "Engagement sessions are included in our Premium and Luxury packages.",
        default: "That's a fantastic question! Would you like to schedule a consultation?"
      };

      const msg = inputValue.toLowerCase();
      let reply = responses.default;

      if (msg.includes('hi') || msg.includes('hello')) reply = responses.greeting[0];
      else if (msg.includes('package')) reply = responses.packages;
      else if (msg.includes('price') || msg.includes('cost')) reply = responses.pricing;
      else if (msg.includes('book')) reply = responses.booking;
      else if (msg.includes('destination')) reply = responses.destination;
      else if (msg.includes('engagement')) reply = responses.engagement;

      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: reply,
        sender: 'bot',
        timestamp: new Date()
      }]);
    } catch (error) {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: "Connection error. Please contact info@eternalmoments.com.",
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      }]);
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
      <motion.button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.chatWindow}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            <div className={styles.chatHeader}>
              <div className={styles.headerContent}>
                <div className={styles.botAvatar}><Bot size={20} /></div>
                <div>
                  <h3 className={styles.headerTitle}>Wedding Assistant</h3>
                  <p className={styles.headerSubtitle}>Ask me anything! 💍</p>
                </div>
              </div>
              <button className={styles.closeButton} onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>

            <div className={styles.messagesContainer}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`${styles.message} ${message.sender === 'user' ? styles.userMessage : styles.botMessage}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className={styles.messageAvatar}>
                    {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={styles.messageContent}>
                    <p className={styles.messageText}>{message.text}</p>
                    <span className={styles.messageTime}>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className={styles.loadingMessage}>
                  <div className={styles.typingIndicator}><span></span><span></span><span></span></div>
                  <span className={styles.typingText}>Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Added showSuggestions logic and fadeOut class */}
            <div className={`${styles.suggestedQuestions} ${!showSuggestions ? styles.fadeOut : ''}`}>
              <p className={styles.suggestedTitle}>Quick questions:</p>
              <div className={styles.questionsGrid}>
                {suggestedQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    className={styles.questionChip}
                    onClick={() => {
                      setInputValue(question);
                      // Trigger send logic after state updates
                      setTimeout(() => {
                        document.querySelector(`.${styles.sendButton}`)?.click();
                      }, 50);
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

            <form className={styles.inputContainer} onSubmit={handleSendMessage}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about packages..."
                className={styles.chatInput}
                disabled={isLoading}
              />
              <button type="submit" className={styles.sendButton} disabled={!inputValue.trim() || isLoading}>
                <Send size={20} />
              </button>
            </form>

            <div className={styles.chatFooter}>
              <p className={styles.footerText}>
                AI-powered assistant • <span className={styles.highlight}>Real responses</span> •{' '}
                <button
                  className={styles.resetButton}
                  onClick={() => {
                    setMessages([messages[0]]);
                    setShowSuggestions(true); // Reset suggestions visibility
                  }}
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