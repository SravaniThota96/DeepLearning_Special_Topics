<template>
  <div id="app">
    <header>
      <h1>OpenAI Question Answering App</h1>
    </header>
    <main>
      <div class="input-group">
        <label for="api-key">Enter OpenAI API Key:</label>
        <input id="api-key" type="password" v-model="apiKey" placeholder="OpenAI API Key" />
      </div>
      <div class="input-group">
        <label for="question">Enter Your Question:</label>
        <textarea id="question" v-model="userQuestion" placeholder="Type your question here"></textarea>
        <button @click="fetchAnswer">Get Answer</button>
      </div>
      <div v-if="answer" class="answer-section">
        <h2>Answer:</h2>
        <p>{{ answer }}</p>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiKey: '',
      userQuestion: '',
      answer: ''
    };
  },
  methods: {
    async fetchAnswer() {
      if (!this.apiKey.trim()) {
        alert('API key is required');
        return;
      }
      if (!this.userQuestion.trim()) {
        alert('Please enter a question');
        return;
      }

      try {
        const prompt = `Answer concisely: ${this.userQuestion}`;
        const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7
        }, {
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json'
          }
        });

        this.answer = response.data.choices[0].text.trim();
      } catch (error) {
        console.error('Error fetching answer:', error);
        this.answer = 'Failed to fetch answer. Check the console for more details.';
      }
    }
  }
}
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
  padding: 40px 20px;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  margin-bottom: 30px;
}

.input-group {
  width: 80%;
  max-width: 600px;
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-size: 1.2em;
}

input[type="password"], textarea {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
}

.answer-section {
  margin-top: 30px;
  width: 80%;
  max-width: 600px;
  text-align: left;
}
</style>