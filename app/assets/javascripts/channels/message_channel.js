App.messages = App.cable.subscriptions.create({ channel: "MessageChannel" }, {
    connected() {
        console.log('connected!')
    },
    disconnected() {
        console.log('disconnected!')
    },
    rejected() {
        console.log('rejected!')
    },
    received(data) {
        console.log(data);
        document.querySelector('#message').innerHTML = data;
    },
});
