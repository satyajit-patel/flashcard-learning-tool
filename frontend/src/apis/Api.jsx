import axios from 'axios';

export const fetchFlashcards = async () => {
    const response = await axios.get('http://localhost:5000/api/v1/todo/todos');
    return response.data;
};

export const createFlashcard = async (flashcard) => {
    const response = await axios.post('http://localhost:5000/api/v1/todo/todos', flashcard);
    return response.data;
};

export const updateFlashcard = async (id, flashcard) => {
    const response = await axios.put(`http://localhost:5000/api/v1/todo/todos/${id}`, flashcard);
    return response.data;
};

export const deleteFlashcard = async (id) => {
    await axios.delete(`http://localhost:5000/api/v1/todo/todos/${id}`);
};
