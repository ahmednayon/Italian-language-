// Audio Management for Italian Learning Platform

const audioCache = {};

// Initialize Web Speech API
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'it-IT';

function playAudio(category, item) {
  // This function will play audio pronunciation
  // In a production app, you would use actual audio files
  // For demonstration, we'll use Web Speech API
  
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Create a simple tone as placeholder
  oscillator.frequency.value = 400;
  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.5);
  
  // In production, load actual Italian pronunciation audio files
  console.log(`Playing audio for ${category}: ${item}`);
}

function startListening() {
  recognition.start();
  console.log('Listening for Italian speech...');
}

function stopListening() {
  recognition.stop();
}

recognition.onresult = function(event) {
  let transcript = '';
  for (let i = event.resultIndex; i < event.results.length; i++) {
    transcript += event.results[i][0].transcript;
  }
  console.log('Heard: ' + transcript);
  // Compare with expected pronunciation
};

recognition.onerror = function(event) {
  console.error('Speech recognition error', event.error);
};

// Text-to-Speech for Italian
function speakItalian(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'it-IT';
  utterance.rate = 0.8; // Slower for learning
  speechSynthesis.speak(utterance);
}

// Load audio files from server
async function loadAudioFile(filePath) {
  if (audioCache[filePath]) {
    return audioCache[filePath];
  }
  
  try {
    const response = await fetch(filePath);
    const arrayBuffer = await response.arrayBuffer();
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    audioCache[filePath] = audioBuffer;
    return audioBuffer;
  } catch (error) {
    console.error('Error loading audio file:', error);
  }
}