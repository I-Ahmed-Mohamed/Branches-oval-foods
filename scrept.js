
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


    

function shareSite() {
    const shareData = {
        title: 'Oval Foods',
        text: 'تعرف على فروع Oval Foods والمنتجات المميزة!',
        url: window.location.href
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('تمت المشاركة بنجاح'))
            .catch((err) => console.error('خطأ في المشاركة:', err));
    } else {
        // لو المتصفح لا يدعم Web Share API يفتح واتساب
        window.open(`https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`, '_blank');
    }
}
