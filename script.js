const tokens = [
  'dict.1.1.20200704T213006Z.cb2d5e00d0e31eed.3cd15300cbbd10dfa117c1044cf4d651bdf0d776',
  'dict.1.1.20200704T213003Z.76af1209ced5b5ec.aacc04241ff0c42bfcc2062557567f0f96c9b6a4',
  'dict.1.1.20200704T212057Z.909f5665d7d6acde.e9cde7ab66adc43ddb78c9a9d30a501049af5e0a'
]

window.onload = () => {
    document.getElementById('update').onclick = () => {
        req.open("GET", getDictionaryUrl('тест'));
        req.send();
    }
}

function getDictionaryUrl(word, key = tokens[0]) {
    return `https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${key}&lang=ru-ru&text=${word}`;
}

const req = new XMLHttpRequest();

req.onload = () => {
  alert(JSON.stringify(req.response));
}