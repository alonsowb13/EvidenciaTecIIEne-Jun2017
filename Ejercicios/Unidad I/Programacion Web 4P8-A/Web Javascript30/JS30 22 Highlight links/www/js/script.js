const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

highlight.classList.add('highlight');
document.body.append(highlight);

triggers.forEach(trigger=>trigger.addEventListener("mouseover",highlighLink));

function highlighLink(){
    const coords = this.getBoundingClientRect();
    
    highlight.style.width=`${coords.width}px`;
    highlight.style.height=`${coords.height}px`;
    highlight.style.transform=`translate(${coords.left+window.scrollX}px,${coords.top+window.scrollY}px)`;
}