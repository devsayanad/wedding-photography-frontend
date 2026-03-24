import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ChatWidget.module.css';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true); // New state for fade logic
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

  // Unified send logic
  const processMessage = async (text) => {
    if (!text.trim() || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: text,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setShowSuggestions(false); // Hide suggestions on any interaction
    setInputValue('');
    setIsLoading(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const responses = {
        packages: "We offer three beautiful packages: Essential, Premium, and Luxury. Which type of celebration are you planning?",
        pricing: "Our packages start at RS.12000. The average investment is RS.24000-RS.50000.",
        booking: "We recommend booking 9-12 months in advance. Would you like to check availability?",
        destination: "Absolutely! We've captured love stories in over 15 countries!",
        engagement: "Engagement sessions are included in our Premium and Luxury packages.",
        default: "That's a fantastic question! For detailed info, I recommend scheduling a consultation."
      };

      const msg = text.toLowerCase();
      let reply = responses.default;
      if (msg.includes('package')) reply = responses.packages;
      else if (msg.includes('price') || msg.includes('cost')) reply = responses.pricing;
      else if (msg.includes('book') || msg.includes('date')) reply = responses.booking;
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
        text: "I'm having trouble connecting right now. Please email info@eternalmoments.com.",
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    processMessage(inputValue);
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
                  <p className={styles.headerSubtitle}>Online | Ask me anything!</p>
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
                  <div className={styles.messageContent}>
                    <p className={styles.messageText}>{message.text}</p>
                    <span className={styles.messageTime}>{message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </motion.div>
              ))}
              {isLoading && <div className={styles.loadingMessage}>Thinking...</div>}
              <div ref={messagesEndRef} />
            </div>

            {/* Fading Suggested Questions Container */}
            <div className={`${styles.suggestedQuestions} ${!showSuggestions ? styles.fadeOut : ''}`}>
              <p className={styles.suggestedTitle}>Quick questions:</p>
              <div className={styles.questionsGrid}>
                {suggestedQuestions.map((q, i) => (
                  <button key={i} className={styles.questionChip} onClick={() => processMessage(q)} disabled={isLoading}>
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <form className={styles.inputContainer} onSubmit={handleSendMessage}>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about packages or pricing..."
                className={styles.chatInput}
              />
              <button type="submit" className={styles.sendButton} disabled={!inputValue.trim() || isLoading}>
                <Send size={20} />
              </button>
            </form>

            <div className={styles.chatFooter}>
              <p className={styles.footerText}>
                AI Assistant • <button className={styles.resetButton} onClick={() => { setMessages([messages[0]]); setShowSuggestions(true); }}>Start over</button>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;