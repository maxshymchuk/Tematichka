const connector = new Connector();

connector.init();

const timer = setInterval(() => {
    connector.loaded && disablePreloader();
}, 2000);

function disablePreloader() {
    document.getElementById('preloader').visibility = 'hidden';
    clearInterval(timer);
}

window.onload = () => {
    document.getElementById('update').onclick = () => {
        alert(JSON.stringify(connector.response));
    }
}

function getDictionaryUrl(word, token = tokens[0]) {
    return `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${token}&lang=ru-ru&text=${word}`;
}