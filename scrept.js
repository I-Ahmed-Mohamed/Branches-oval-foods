
const headers = document.querySelectorAll('.branch-header');
headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const expanded = content.style.maxHeight && content.style.maxHeight !== '0px';
        content.style.maxHeight = expanded ? '0px' : content.scrollHeight + 'px';
        content.style.opacity = expanded ? '0' : '1';
        header.querySelector('.fa-chevron-down').style.transform = expanded ? 'rotate(0deg)' : 'rotate(180deg)';
    });
});


 const searchInput = document.getElementById('searchInput');
    const branches = document.querySelectorAll('.branch');

    searchInput.addEventListener('input', function() {
        const value = this.value.toLowerCase();
        branches.forEach(branch => {
            const text = branch.textContent.toLowerCase();
            branch.style.display = text.includes(value) ? 'block' : 'none';
        });
    });