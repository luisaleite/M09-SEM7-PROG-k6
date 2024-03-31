import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  // Gerando um caminho dinâmico do arquivo para teste
  const path = Math.random().toString(36).substring(7); // Gerando uma sequência aleatória para o path
  
  // Fazendo uma solicitação GET para o endpoint com o caminho dinâmico do arquivo
  const response = http.get('http://localhost:3001/link-lists/uploaded-file/file_model.csv');
    
  // Verificando se a resposta teve sucesso (status code 200)
  if (response.status === 200) {
    console.log(`Solicitação para ${path} foi bem-sucedida!`);
  } else {
    console.log(`Erro ao fazer solicitação para ${path}. Status code: ${response.status}`);
  }

  // Aguardando um curto período de tempo entre as solicitações
  sleep(1);
}