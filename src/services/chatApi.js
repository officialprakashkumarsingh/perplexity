const API_BASE_URL = 'https://longcat-openai-api.onrender.com';
const API_KEY = 'pikachu@#25D';

export class ChatAPI {
  static async sendMessage(messages, model = 'gpt-3.5-turbo') {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: model,
          messages: messages,
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Chat API Error:', error);
      throw error;
    }
  }

  static async getAvailableModels() {
    try {
      const response = await fetch(`${API_BASE_URL}/v1/models`, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Models request failed: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Models API Error:', error);
      // Return default models if the endpoint doesn't exist
      return {
        data: [
          { id: 'gpt-3.5-turbo', object: 'model' },
          { id: 'gpt-4', object: 'model' },
        ]
      };
    }
  }
}