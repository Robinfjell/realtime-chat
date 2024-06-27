document.addEventListener('DOMContentLoaded', (event) => {
    const socket = io();
    const messageForm = document.getElementById('message-form');
    const messageInput = document.getElementById('message-input');
    const messageContainer = document.getElementById('message-container');

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = messageInput.value;
        socket.emit('chat message', message);
        messageInput.value = '';
    });

    socket.on('chat message', (msg) => {
        const messageElement = document.createElement('div');
        messageElement.textContent = msg;
        messageContainer.appendChild(messageElement);
        messageContainer.scrollTop = messageContainer.scrollHeight;
    });
});
