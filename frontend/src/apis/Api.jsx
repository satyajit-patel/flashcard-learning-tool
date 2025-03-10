import axios from 'axios';

export const fetchFlashcards = async () => {
    const response = await axios.get(`${import.meta.env.VITE_URL_GLOBAL}/api/v1/todo/todos`);
    return response.data;
};

export const createFlashcard = async (flashcard) => {
    const response = await axios.post(`${import.meta.env.VITE_URL_GLOBAL}/api/v1/todo/todos`, flashcard);
    return response.data;
};

export const updateFlashcard = async (id, flashcard) => {
    const response = await axios.patch(`${import.meta.env.VITE_URL_GLOBAL}/api/v1/todo/todos/${id}`, flashcard);
    return response.data;
};

export const deleteFlashcard = async (id) => {
    await axios.delete(`${import.meta.env.VITE_URL_GLOBAL}/api/v1/todo/todos/${id}`);
};
