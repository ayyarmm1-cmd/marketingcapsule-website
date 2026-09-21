import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

interface MessengerChatButtonProps {
  messengerUrl?: string;
}

export default function MessengerChatButton({
  messengerUrl = 'https://m.me/100064128399209',
}: MessengerChatButtonProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => window.open(messengerUrl, '_blank', 'noopener,noreferrer')}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
      style={{ background: 'var(--mc-primary)' }}
      aria-label="Chat with us on Messenger"
      title="Chat with us on Messenger"
    >
      <MessageCircle className="h-6 w-6 text-white" />
    </button>
  );
}
