const likebutton = document.createElement('button');
likebutton.innerText = 'Like';
likebutton.style.padding = '10px 20px';
likebutton.style.fontSize = '16px';
likebutton.style.backgroundColor = '#007BFF';
likebutton.style.color = '#FFFFFF';
likebutton.style.borderRadius = '5px';
likebutton.addEventListener('click', () => {
    alert('You liked this!');
});