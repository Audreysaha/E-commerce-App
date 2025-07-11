const ws = new WebSocket('ws://localhost:8000/ws/notifications/');
ws.onmessage = function(e) {
    const data = JSON.parse(e.data);
    alert("New email: " + data.subject);
};