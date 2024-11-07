// Ação do formulário
document.getElementById('curriculoForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    Swal.fire({
        icon: 'success',
        title: 'Currículo enviado!',
        text: 'Seu currículo foi enviado com sucesso. Entraremos em contato em breve!',
        confirmButtonText: 'OK'
    });

    // Verifique se há arquivos antes de acessar
    if (this.files && this.files.length > 0) {
        let fileName = this.files[0].name;
    }
    const fileNameElement = document.getElementById('file-name');
    const fileNameElement2 = document.getElementById('remove-file');
    if (fileNameElement) {
        fileNameElement.style.display = 'none'; 
        fileNameElement2.style.display = 'none';
    }
    
    this.reset();
});
 
 // Exibir o nome do arquivo selecionado
 document.getElementById('curriculo').addEventListener('change', function() {
    const fileName = this.files[0] ? this.files[0].name : "Nenhum arquivo selecionado";
    document.getElementById('file-name').textContent = fileName;

    // Exibe o ícone de remoção se um arquivo for selecionado
    document.getElementById('remove-file').style.display = this.files[0] ? 'inline' : 'none';
});

function removeFile() {
    const fileInput = document.getElementById('curriculo');
    
    // Limpa o arquivo selecionado
    fileInput.value = '';
    document.getElementById('file-name').textContent = "Nenhum arquivo selecionado";
    
    // Esconde o ícone de remoção
    document.getElementById('remove-file').style.display = 'none';
}


 


 