$(document).ready(function() {
    const owner = 'neestoralvz'; // Reemplaza con tu nombre de usuario
    const repo = 'nalve'; // Reemplaza con el nombre de tu repositorio
    const baseURL = `https://api.github.com/repos/${owner}/${repo}`;
  
    async function getDirectoryContents(directory) {
      const url = `${baseURL}/contents/${directory}`;
      const response = await axios.get(url);
      const files = response.data;
  
      for (const file of files) {
        if (file.type === 'dir') {
          // Si es un directorio, obtener su contenido de manera recursiva
          await getDirectoryContents(file.path);
        } else if (file.type === 'file' && file.name.endsWith('.html')) {
          // Si es un archivo HTML, obtener su contenido y extraer información
          const fileURL = file.download_url;
          const fileResponse = await axios.get(fileURL);
          const htmlContent = fileResponse.data;
          const $ = cheerio.load(htmlContent);
          const title = $('title').text() || 'Sin título';
  
          // Agregar enlace al índice
          const link = $('<a>').attr('href', file.name).text(title);
          $('#page-list').append($('<li>').append(link));
        }
      }
    }
  
    // Obtener contenido del directorio raíz del repositorio
    getDirectoryContents('');
  });
  