import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { VoiceChat } from "./components/VoiceChat";
import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

function App() {
  const [avatarAnimation, setAvatarAnimation] = useState("Idle");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleStartTalking = () => {
    setAvatarAnimation("Talking");
  };

  const handleStopTalking = () => {
    setAvatarAnimation("Idle");
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience avatarAnimation={avatarAnimation} />
      </Canvas>

      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 z-20"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat interface */}
      {isChatOpen && (
        <div className="fixed right-8 bottom-28 w-96 bg-white rounded-lg shadow-xl z-20">
          <VoiceChat
            onStartTalking={handleStartTalking}
            onStopTalking={handleStopTalking}
            onClose={toggleChat}
          />
        </div>
      )}
    </div>
  );
}

export default App;