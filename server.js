const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

mongoose.connect('mongodb://localhost:27017/oku-ai', { useNewUrlParser: true, useUnifiedTopology: true });

// Модель предметов
const subjectSchema = new mongoose.Schema({ name: String, topics: [String] });
const Subject = mongoose.model('Subject', subjectSchema);

// Добавь предметы
const subjects = [
  { name: 'Математика', topics: ['Дроби', 'Уравнения', 'Геометрия'] },
  { name: 'История Казахстана', topics: ['Абылай хан', 'Алаш Орда'] },
  { name: 'Казахский язык', topics: ['Грамматика', 'Лексика'] }
];
Subject.insertMany(subjects).catch(err => console.log('Subjects already exist'));

// Oylan API ключ
const OYLAN_API_KEY = 'wiJCuSOU.C7u13bPkRiKYX1WlNoAX59kxZzOuTkFw';
const OYLAN_URL = 'https://issai.nu.edu.kz/api/v1/chat'; // Эндпоинт из документации ISSAI

// Чат
io.on('connection', (socket) => {
  socket.on('ask', async (data) => {
    const { subject, topic, question, lang } = data;
    const prompt = lang === 'kk' ? 
      `Сұрақ: ${question}. Тақырып: ${topic}. Пән: ${subject}. Қазақша қарапайым тілмен түсіндір, мысалдар келтір. Балаларға арналған.` : 
      `Вопрос: ${question}. Тема: ${topic}. Предмет: ${subject}. Объясни простым языком на русском, с примерами. Для детей.`;

    try {
      // Oylan API вызов (POST с JSON)
      const response = await axios.post(OYLAN_URL, {
        prompt: prompt,
        model: 'oylan-2.5' // Или 'oylan' по документации
      }, {
        headers: {
          'Authorization': `Bearer ${OYLAN_API_KEY}`,
          'Content-Type': 'application/json'
        }
      });
      const answer = response.data.choices[0].message.content || response.data.answer; // Адаптируй по ответу API
      socket.emit('answer', { answer, lang });
    } catch (error) {
      console.error('Oylan ошибка:', error.response?.data || error.message);
      socket.emit('error', 'Ошибка Oylan. Попробуй позже. (Проверь ключ на issai.nu.edu.kz)');
    }
  });
});

app.use(express.static('public'));
app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

server.listen(3000, () => console.log('OқуAI сервер на 3000'));