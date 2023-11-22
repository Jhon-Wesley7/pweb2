document.getElementById('url_text').addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        const newUrl = document.getElementById('url_text');
        const iframe = document.querySelector('.responsive-iframe');
        
        iframe.src = "./" + newUrl.value; 
    }
});

document.querySelector('.dot.red').addEventListener('click', function() {
    const browser = document.querySelector('.browser');
    const btn = document.querySelector('.open-browser')
    btn.style.display = 'block';
    browser.style.display = 'none';
});

document.querySelector('.open-browser').addEventListener('click', function() {
    const browser = document.querySelector('.browser');
    const btn = document.querySelector('.open-browser')
    btn.style.display = 'none';
    browser.style.display = 'block';
});