document.addEventListener('DOMContentLoaded', function () {
     const fadeInElements = document.querySelectorAll('.fade-in');
 
     const handleScroll = () => {
         fadeInElements.forEach(element => {
             const rect = element.getBoundingClientRect();
             if (rect.top < window.innerHeight - 100) {
                 element.classList.add('visible');
             }
         });
     };
 
     window.addEventListener('scroll', handleScroll);
     handleScroll(); 
 });
 
 document.getElementById('curriculo').addEventListener('change', function() {
    const fileName = this.files[0] ? this.files[0].name : "Nenhum arquivo selecionado";
    document.getElementById('file-name').textContent = fileName;
});