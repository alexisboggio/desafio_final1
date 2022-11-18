const socket = io();

socket.on('HEALTH', data => {
    alert(data.health)
})