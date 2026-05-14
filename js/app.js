// Italian Learning Platform - Main Application

let currentLevel = null;
let userProgress = {
  completedLessons: 24,
  totalLessons: 120,
  quizScores: [85, 78, 92, 88],
  streak: 7,
  favoriteItems: [],
  history: [
    { title: 'Greetings Lesson', date: '2026-05-14', score: 95 },
    { title: 'Numbers Quiz', date: '2026-05-13', score: 88 },
    { title: 'Food Vocabulary', date: '2026-05-12', score: 92 }
  ]
};

// Navigation Functions
function navigateTo(page) {
  // Hide all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => section.classList.add('hidden'));
  
  // Show specific section
  const sectionId = `${page}-section`;
  const targetSection = document.getElementById(sectionId);
  
  if (targetSection) {
    targetSection.classList.remove('hidden');
    window.scrollTo(0, 0);
  }
}

function selectLevel(level) {
  currentLevel = level;
  console.log(`Selected level: ${level}`);
  alert(`Starting ${level.charAt(0).toUpperCase() + level.slice(1)} Italian Course!`);
  navigateTo('alphabet');
}

// Vocabulary Functions
function loadVocabulary(category) {
  const vocabularyContent = document.getElementById('vocabulary-content');
  const data = vocabularyData[category];
  
  if (!data) return;
  
  vocabularyContent.innerHTML = '';
  
  data.forEach((item, index) => {
    const vocabCard = document.createElement('div');
    vocabCard.className = 'vocabulary-item';
    vocabCard.innerHTML = `
      <div class="vocab-word">${item.italian}</div>
      <div class="vocab-pronunciation">/${item.pronunciation}/</div>
      <div class="vocab-meaning"><strong>English:</strong> ${item.english}</div>
      <button class="audio-btn" onclick="speakItalian('${item.italian}')"><i class="fas fa-volume-up"></i> Pronounce</button>
      <div class="vocab-example"><strong>Example:</strong> ${item.example}</div>
    `;
    vocabularyContent.appendChild(vocabCard);
  });
  
  // Update active category button
  document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
}

// Grammar Functions
function loadGrammar(topic) {
  const grammarContent = document.getElementById('grammar-content');
  const data = grammarTopics[topic];
  
  if (!data) return;
  
  grammarContent.innerHTML = `
    <h3>${data.title}</h3>
    ${data.content}
  `;
}

// Conversation Functions
function loadConversation(conversationType) {
  const conversationContent = document.getElementById('conversation-content');
  const data = conversationsData[conversationType];
  
  if (!data) return;
  
  conversationContent.innerHTML = `<h3>${data.title}</h3>`;
  
  data.lines.forEach((line, index) => {
    const lineElement = document.createElement('div');
    lineElement.className = `conversation-line speaker${index % 2 === 0 ? '1' : '2'}`;
    lineElement.innerHTML = `
      <div class="speaker-label">${line.speaker}:</div>
      <div class="speaker-text">
        <div class="speaker-italian">${line.italian}</div>
        <div class="speaker-english">${line.english}</div>
        <button class="audio-btn" onclick="speakItalian('${line.italian}')"><i class="fas fa-volume-up"></i></button>
      </div>
    `;
    conversationContent.appendChild(lineElement);
  });
}

// Practice Functions
function startPractice(type) {
  const practiceContent = document.getElementById('practice-content');
  const questions = practiceQuestions[type];
  
  if (!questions || questions.length === 0) {
    practiceContent.innerHTML = '<p>No exercises available for this type.</p>';
    return;
  }
  
  const question = questions[0];
  let optionsHTML = '';
  
  question.options.forEach((option, index) => {
    optionsHTML += `
      <div class="option" onclick="checkAnswer(${index}, ${question.correct})">
        ${option}
      </div>
    `;
  });
  
  practiceContent.innerHTML = `
    <div class="exercise-question">${question.question}</div>
    <div class="exercise-options">${optionsHTML}</div>
    <div id="feedback"></div>
  `;
}

function checkAnswer(selected, correct) {
  const feedback = document.getElementById('feedback');
  const options = document.querySelectorAll('.option');
  
  options[selected].classList.add(selected === correct ? 'correct' : 'incorrect');
  options[correct].classList.add('correct');
  
  if (selected === correct) {
    feedback.innerHTML = '<p style="color: green; font-weight: bold;">✓ Correct! Great job!</p>';
  } else {
    feedback.innerHTML = '<p style="color: red; font-weight: bold;">✗ Incorrect. Try again!</p>';
  }
}

// Alphabet Functions
function switchAlphabetTab(tab) {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  
  // In a full implementation, you would switch between different alphabet content
  console.log(`Switched to alphabet tab: ${tab}`);
}

// Progress Functions
function updateProgress() {
  const percentage = (userProgress.completedLessons / userProgress.totalLessons) * 100;
  const progressFill = document.querySelector('.progress-fill');
  if (progressFill) {
    progressFill.style.width = percentage + '%';
  }
}

function displayHistory() {
  const historyContent = document.getElementById('history-content');
  if (!historyContent) return;
  
  historyContent.innerHTML = '';
  
  userProgress.history.forEach(item => {
    const historyItem = document.createElement('div');
    historyItem.className = 'history-item';
    historyItem.innerHTML = `
      <div class="history-item-text">
        <div class="history-item-title">${item.title}</div>
        <div class="history-item-date">${item.date}</div>
      </div>
      <div class="history-item-score">${item.score}%</div>
    `;
    historyContent.appendChild(historyItem);
  });
}

// Mobile Navigation
function setupMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  
  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
}

// Search Function
function searchContent(query) {
  console.log(`Searching for: ${query}`);
  // Implement search functionality
}

// Favorites Function
function addToFavorites(itemId) {
  if (!userProgress.favoriteItems.includes(itemId)) {
    userProgress.favoriteItems.push(itemId);
    console.log(`Added to favorites: ${itemId}`);
  }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  updateProgress();
  displayHistory();
  loadVocabulary('greetings'); // Load default vocabulary
});

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    // Close modals or reset view
  }
});