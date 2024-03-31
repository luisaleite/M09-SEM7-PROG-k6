# Documentação oficial do projeto

<center>
<img src='../assets/logo_grupo.png' width='250px'> &  <img src='../assets/track-logo-white.png' width='250px'>
</center>

<br>
<br>

---

|Sumário|
|-----------|
| [Introdução](#introdução)  |
| [Definição dos Requisitos Não Funcionais](#definição-dos-requisitos-não-funcionais)| 
| [Definição dos Requisitos Funcionais](#definição-dos-requisitos-funcionais) |
| [Diagrama Nível 1 C4 Model - Contexto ](#diagrama-nível-1-c4-model---contexto)|
| [Diagrama Nível 2 C4 Model - Container](#diagrama-nível-2-c4-model---contêiner) |
| [Prototipação do front-end](#prototipação-do-front-end) |
| [Implementação e Práticas de Segurança do front-end](#implementação-e-práticas-de-segurança-do-front-end) |
| [Testes](#testes) |
| [Sonnarqube](#sonnarqube) |


<br>

### Histórico de lançamento
---

<center>

| Versionamento | Data       |
| ----------------------- | ---------- |
| Versão 1                | 18/02/2024 |
| Versão 2                | 01/03/2024 |
| Versão 3                | 15/03/2024 |
| Versão 4                | / /        |
| Versão 5                | / /        |

---

</center>

<br>
<br>

# Introdução

O problema em abordado no projeto é a necessidade de estabelecer uma estratégia abrangente para testes automatizados nas funcionalidades principais da plataforma CXM. Atualmente, a ausência de testes automatizados cria uma dependência significativa de testes manuais, tornando as implantações um processo crítico e propenso a erros. Isso não apenas afeta a percepção de confiabilidade da plataforma entre os clientes, mas também aumenta o risco de perdas financeiras para a empresa. Cada reversão não apenas interrompe os serviços fornecidos, mas também aumenta a probabilidade de insatisfação do cliente e possível migração para concorrentes mais estáveis.

O objetivo é implementar testes automatizados nessas funcionalidades críticas para reduzir a probabilidade de regressões durante as implantações e permitir a detecção precoce de possíveis problemas. Ao fazer isso, será melhorado significativamente a confiança do cliente, pois a plataforma será percebida como mais robusta e confiável. Para abordar esse problema de forma eficaz, deve-se concentrar nas funcionalidades principais, especificamente Pesquisas, Dashboards, Distribuição e Interação, pois essas telas desempenham um papel central na plataforma.

Os benefícios esperados para o parceiro, TRACK.CO, incluem maior estabilidade e confiabilidade da plataforma, com uma redução significativa de reversões. Isso, por sua vez, aumentará a confiança do cliente, levando à retenção de dos mesmos e atraindo novos. Além disso, os testes automatizados economizarão tempo e recursos, permitindo uma abordagem de desenvolvimento mais ágil. A detecção precoce de problemas será facilitada, melhorando a qualidade geral do software. No longo prazo, a redução de erros e reversões resultará em economia de custos. Em geral, a implementação de testes automatizados é crucial para fortalecer a posição da empresa, melhorar sua reputação e garantir o sucesso contínuo no mercado.


# Seleção dos casos de uso

O parceiro apresentou diversos casos de uso para o MVP do projeto, sendo esses baseados no uso real da plataforma, considerando suas funcionalidades e características gerais de comportamento. Nota-se que os casos de uso descritos e dispostos como opção de escolha eram:

- **Caso de uso 1:** Realizar distribuição com o canal  E-mail e verificar seus retornos.
- **Caso de uso 2:** Realizar distribuição com o canal  Whatsapp e verificar seus retornos.
- **Caso de uso 3:** Realizar distribuição com o canal SMS Link e verificar seus retornos.
- **Caso de uso 4:** Realizar distribuição com o canal Lista de Links e verificar seus retornos.
- **Caso de uso 5:**  Configurar e implementar widget de pesquisa em um domínio e verificar se a resposta foi gravada.
- **Caso de uso 6:** Verificar quadrante de NPS Relacional, validando todas as zonas.
- **Caso de uso 7:** Criar um dashboard, adicionar elemento NPS e comparar com o resultado do elemento de NPS na tela de overview.
- **Caso de uso 8:** Aplicar filtro na tela de interações e verificar resultados.
- **Caso de uso 9:** Verificar cadastro de clientes e saúde após envio de uma planilha.
- **Caso de uso 10:** Criar um grupo de loop e que incluíssem apenas interações que estiverem condizentes com o filtro e analisar respostas.


Para a execução do projeto, o grupo desenvolvedor optou por realizar os casos de uso 1 e 4, somado a um aditivo do caso de uso 9, uma vez que compreendeu-se ser uma regra de negócio importante para o desenvolvimento e execução do caso de uso 4.

# Definição dos Requisitos Não Funcionais

Requisitos não funcionais são critérios que definem as características e restrições do sistema, além das funcionalidades específicas que ele deve fornecer. Ao contrário dos requisitos funcionais, que se concentram no "o que" o sistema deve fazer, os requisitos não funcionais se concentram no "como" o sistema deve ser, ou seja, nas qualidades e propriedades que ele deve possuir.

Os requisitos não funcionais abrangem uma ampla gama de aspectos, que podem incluir desempenho, segurança, usabilidade, confiabilidade, escalabilidade, manutenibilidade, interoperabilidade, entre outros. Eles fornecem critérios para avaliar a qualidade geral do sistema e garantir que ele atenda aos padrões e expectativas definidos pelos usuários e pelo ambiente em que será implantado.

### RNF01 - O sistema deve garantir o disparo de até 1000 pesquisas em no máximo 2 segundos. 

O requisito especifica que o sistema precisa ser capaz de enviar um máximo de 1000 pesquisas em um período de tempo de no máximo 2 segundos. Isso implica que o sistema deve ser capaz de processar e enviar uma grande quantidade de pesquisas de forma rápida e eficiente.

Para atender a esse requisito, o sistema exigirá uma infraestrutura robusta e escalável, além de um mecanismo de envio de pesquisas de satisfação eficiente. Pode ser necessário implementar técnicas de otimização, como processamento paralelo, para garantir que as pesquisas sejam enviados dentro do limite de tempo especificado.

### RNF02 - O sistema deve ter nível de disponibilidade de 95%.

O sistema deve garantir um nível de disponibilidade mínimo de 95%. Isso significa que o sistema deve estar acessível e operacional para os usuários durante pelo menos 95% do tempo, considerando um período de avaliação específico.
Para atender a esse requisito, o sistema deve ser projetado e implementado com mecanismos de alta disponibilidade. Isso inclui a utilização de infraestrutura redundante, balanceamento de carga e replicação de dados para evitar pontos únicos de falha e garantir a resiliência do sistema.

É importante considerar a monitoração constante do sistema, a fim de identificar e responder rapidamente a possíveis incidentes ou falhas que possam afetar a disponibilidade.

### RNF03 - O sistema deve garantir a segurança dos dados dos usuários e também dos clientes de seus usuários, não permitindo o uso de informações sensíveis (número de telefone, email ou outros dados de contato usados pela plataforma).

O sistema deve garantir a segurança dos dados dos usuários e dos clientes, protegendo as informações sensíveis, como números de telefone, e-mails e outros dados de contato utilizados pela plataforma. Essa medida visa a preservar a privacidade e a confidencialidade das informações, evitando o uso indevido ou não autorizado desses dados.

Para atender a esse requisito, o sistema deve adotar medidas de segurança adequadas, considerando práticas recomendadas e padrões amplamente reconhecidos, como:

- Criptografia;
- Controle de Acesso;
- Proteção contra Ataques;
- Políticas de Privacidade;
- Treinamento e Conscientização.

### RNF04 - O sistema deve ter taxa de atualização de até 5min dos dados coletados das pesquisas enviadas.

O sistema deve ser capaz de atualizar os dados coletados das pesquisas enviadas com uma taxa de atualização máxima de até 5 minutos. Isso significa que, após a coleta das respostas, as informações devem ser processadas e refletidas no sistema dentro desse intervalo de tempo.

A taxa de atualização rápida dos dados coletados é essencial para fornecer aos usuários uma visão em tempo quase real do feedback dos clientes. Com uma atualização frequente, os usuários podem acompanhar as respostas e as métricas de desempenho atualizadas, permitindo uma tomada de decisão ágil e informada.

Para atender a esse requisito, o sistema deve ser projetado e otimizado para processar e armazenar eficientemente as respostas das pesquisas.

### RNF05 - O sistema deve ter uma alta manutenabilidade, permitindo a atualização e correção da plataforma.

O sistema deve ser projetado e desenvolvido com alta manutenabilidade, permitindo atualizações, correções e melhorias contínuas na plataforma. Isso é fundamental para garantir a estabilidade, confiabilidade e eficiência do sistema ao longo do tempo, bem como para atender às necessidades em evolução dos usuários e do ambiente operacional.

Para isso, serão considerados os mecanismos:

- Modularidade;
- Documentação Abrangente;
- Boas Práticas de Desenvolvimento;
- Versionamento de Código;
- Testes Automatizados;
- Processo de Liberação e Implantação;
- Monitoramento e Métricas.

### RNF06 - A plataforma deve ser compatível principalmente com desktops, porém as pesquisas devem se adaptar para diferentes dispositivos e ambientes (como o e-mail, WhatsApp e outros).

A plataforma deve ser compatível principalmente com desktops, garantindo uma experiência otimizada nesses dispositivos. No entanto, as pesquisas realizadas na plataforma devem se adaptar para diferentes dispositivos e ambientes, incluindo dispositivos móveis, como smartphones e tablets, e aplicativos de mensagens, como o WhatsApp, e-mail e outros.

Para atender a esse requisito, serão consideradas as seguintes diretrizes e práticas:

- Responsividade;
- Design Mobile-Friendly;
- Suporte a Navegadores;
- Integração com Apps de Mensagens;
- Testes em Diferentes Dispositivos;
- Acessibilidade.

### RNF07 - O sistema deve ser tolerante a falhas, tendo mecanismos para lidar ou conter erros durante o seu funcionamento.

O sistema deve ser projetado e implementado com mecanismos que permitam lidar de forma eficiente com falhas e erros que possam ocorrer durante o seu funcionamento. Esses mecanismos garantem a estabilidade e a continuidade das operações, minimizando interrupções e impactos negativos.

Para atender a esse requisito, é necessário considerar as seguintes diretrizes e práticas:

- Detecção de falhas;
- Recuperação automática;
- Tolerância a falhas de componentes;
- Isolamento e contenção de erros;
- Monitoramento e registro de falhas;
  Testes de resiliência.

### RNF08 - A interface do sistema deve ser intuitiva a fim de permitir reduzir a curva de aprendizado para novos usuários.

Para garantir a adoção e a satisfação dos usuários, o sistema deve oferecer uma interface intuitiva e amigável, seguindo a identidade visual da Track. Isso inclui o design de uma interface de usuário clara, com navegação simplificada, elementos de controle bem definidos e feedback visual adequado para orientar os usuários durante suas interações.

Uma interface intuitiva reduzirá a curva de aprendizado para novos usuários, aumentando a eficiência e a produtividade geral do sistema.

### RNF09 - O sistema deve ter o consentimento e transparência para com o usuario em relação ao uso dos seus dados.

O sistema deve obter o consentimento explícito dos usuários para coletar, processar e armazenar seus dados pessoais, garantindo a clara divulgação dos fins para os quais os dados serão utilizados e a possibilidade de revogação do consentimento a qualquer momento. Além disso, deve fornecer aos usuários informações claras e transparentes sobre suas práticas de tratamento de dados pessoais, incluindo políticas de privacidade, termos de uso e procedimentos para exercer os direitos dos titulares dos dados. O sistema também deve manter registros internos de suas atividades de tratamento de dados e estar preparado para demonstrar conformidade com os requisitos da LGPD.

### RNF10 - O sistema deve garantir uma escalabilidade horizontal para lidar com aumentos repentinos no volume de usuários e dados.

O sistema deve ser capaz de dimensionar horizontalmente seus recursos para lidar com picos de demanda repentinos, tanto em termos de número de usuários quanto de volume de dados. Isso significa que a arquitetura do sistema deve permitir a adição de novas instâncias de servidores de forma dinâmica e automatizada, distribuindo a carga de trabalho de maneira equilibrada e garantindo o desempenho adequado do sistema mesmo em momentos de alta atividade.

Para atender a esse requisito, serão consideradas técnicas como:

- Balanceamento de carga automático;
- Arquitetura de microsserviços;
- Uso de contêineres e orquestração de contêineres;
- Escalonamento automático baseado em métricas de utilização;
- Gerenciamento eficiente de recursos e capacidade de adaptação.

# Definição dos Requisitos Funcionais, descrição dos Fluxos Principais, dos Fluxos de Exceção e dos Fluxos Alternativos.

Requisitos funcionais são descrições detalhadas das funcionalidades e comportamentos que um sistema ou software deve possuir para atender às necessidades dos usuários. Eles especificam o que o sistema deve fazer, quais tarefas ele deve realizar e como ele deve se comportar em diferentes situações.

Os requisitos funcionais descrevem as principais funções, operações e serviços que são necessários para o sistema atingir seus objetivos. Eles geralmente são expressos em termos de entradas, saídas e comportamentos esperados. Esses requisitos podem incluir tarefas como processar informações, executar cálculos, exibir dados, interagir com usuários ou outros sistemas, entre outras funcionalidades.

Sabe-se que foram selecionados dois casos de uso para a execução e prototipação. Assim, definiu-se 4 requisitos principais de cada, como requisitos norteadores do desenvolvimento.

Ademais, fluxos de exceção são conjuntos de condições ou eventos não previstos que podem ocorrer durante a operação de um sistema ou software, necessitando de tratamento específico para manter a funcionalidade e a estabilidade do sistema. Eles representam os cenários onde as operações padrão desviam de seu curso normal, exigindo ações corretivas para lidar com entradas inválidas, falhas de comunicação, erros de processamento ou qualquer outro comportamento atípico.

Os fluxos de exceção detalham como o sistema deve responder a essas situações inesperadas, garantindo que possa se recuperar de falhas, informar os usuários sobre problemas e continuar operando de maneira eficiente. Eles são essenciais para a criação de sistemas robustos, confiáveis e seguros, que possam lidar com a complexidade e a incerteza do mundo real.

Estes fluxos descrevem as medidas preventivas, as mensagens de erro, as opções de recuperação de falhas e outras ações que o sistema deve tomar quando confrontado com uma exceção. Isso pode incluir, por exemplo, a validação de dados de entrada, a gestão de timeouts de conexão, a manipulação de erros de terceiros, entre outras estratégias de resolução de problemas.

Enquanto, um fluxo alternativo é uma sequência de etapas ou ações que ocorrem em um processo de software quando certas condições são atendidas ou quando ocorrem eventos específicos. Esses fluxos alternativos são usados para lidar com situações excepcionais, condições de erro ou requisitos não funcionais.

Ao definir requisitos, os fluxos alternativos são considerados para capturar os comportamentos não triviais do sistema e garantir que todas as possíveis situações sejam abordadas. Os fluxos alternativos são frequentemente documentados em conjunto com o fluxo principal ou fluxo normal do sistema.


## Caso de uso 1


### RF01 - O sistema deve permitir o disparo de pesquisas por e-mail.

O requisito RF01 estabelece que o sistema deve ter a capacidade de enviar pesquisas de satisfação por e-mail. Esse requisito implica que o sistema deve suportar a funcionalidade de criação, agendamento, envio e acompanhamento de pesquisas de satisfação aos destinatários por meio do canal de comunicação por e-mail.

Para atender a esse requisito, o sistema precisará fornecer uma interface onde os usuários possam criar e personalizar as pesquisas de satisfação. Isso pode incluir a definição de perguntas, opções de resposta, formatação de texto e design visual. Além disso, o sistema deve permitir que os usuários especifiquem os destinatários da pesquisa, seja por meio de listas de e-mails pré-definidas ou por meio de seleção manual.

### Descrição do fluxo principal RF01

1. **Criação da pesquisa de satisfação:** O usuário cria a pesquisa de satisfação, definindo as perguntas, opções de resposta e o design visual.
2. **Seleção de destinatários:** O usuário seleciona os destinatários da pesquisa, podendo ser uma lista de e-mails pré-definida, uma segmentação específica de contatos ou até mesmo uma seleção manual dos destinatários.
3. **Personalização do e-mail:** O usuário personaliza o e-mail que acompanhará a pesquisa de satisfação, incluindo uma saudação, mensagem introdutória e o link exclusivo para cada destinatário.
4. **Agendamento do envio:** O usuário agenda o momento adequado para o envio dos e-mails com as pesquisas de satisfação.
5. **Envio dos e-mails:** O sistema envia automaticamente os e-mails com as pesquisas de satisfação para os destinatários, utilizando as configurações e personalizações definidas pelo usuário.
6. **Acompanhamento e registro de respostas:** O sistema registra as respostas dos destinatários e fornece um mecanismo para o usuário acompanhar e analisar os resultados da pesquisa.

### Descrição do fluxo de exceção RF01

- **E1.1:** Se ocorrer uma falha no envio dos e-mails devido a problemas técnicos ou erros de conexão, o sistema deve registrar a falha e notificar o usuário responsável pela pesquisa.
- **E1.2:** Se um destinatário específico não puder receber o e-mail devido a um endereço inválido ou bloqueio de mensagem, o sistema deve registrar essa situação e fornecer uma opção para o usuário atualizar ou remover o destinatário da lista.

### Descrição do fluxo alternativo RF01

**Fluxo Alternativo 1:**

- O usuário decide personalizar o conteúdo do e-mail de acordo com as características do destinatário.
- O sistema fornece recursos de mesclagem de dados, permitindo que o usuário inclua informações personalizadas nos e-mails, como o nome do destinatário, histórico de compras ou outros dados relevantes.

**Fluxo Alternativo 2:**

- O usuário opta por enviar lembretes de pesquisa de satisfação para os destinatários que ainda não responderam.
- O sistema identifica os destinatários que não responderam à pesquisa dentro de um determinado período de tempo e envia automaticamente lembretes por e-mail, incentivando-os a participar da pesquisa.


### RF02 - O sistema deve permitir a edição das pesquisas de satisfação criadas

O sistema deve fornecer um recurso de edição completo e intuitivo para as pesquisas de satisfação criadas. Os usuários autorizados devem ter a capacidade de modificar e atualizar as perguntas, opções de resposta e qualquer outra configuração relacionada às pesquisas existentes.

Ao editar uma pesquisa, o sistema deve permitir que os usuários adicionem, removam ou modifiquem perguntas e opções de resposta de forma flexível. Isso pode incluir a capacidade de rearranjar a ordem das perguntas, definir a obrigatoriedade de resposta e adicionar instruções ou notas para os respondentes.

### Descrição do fluxo principal RF04

1. **Acesso a pesquisas existentes:** O usuário acessa a lista de pesquisas existentes dentro da plataforma.
2. **Seleção de pesquisa para edição:** O usuário escolhe a pesquisa que deseja editar e acessa a ferramenta de edição associada.
3. **Modificação de perguntas e opções de resposta:**
   - Adição, remoção ou modificação de perguntas e opções de resposta.
   - Alteração do tipo de pergunta (múltipla escolha, classificação, abertas, etc.).
4. **Revisão e salvar alterações:**
   - Após realizar as edições, o usuário revisa as alterações e salva as atualizações feitas na pesquisa.

### Descrição do fluxo de exceção RF02

**Fluxo de Exceção:**

- **E3.1:** Ao tentar modificar uma pesquisa que já foi respondida por algum usuário, o sistema deve alertar sobre o impacto potencial nas análises e solicitar confirmação para prosseguir.
- **E3.2:** Se ocorrer um erro durante a edição que impeça a atualização das informações, o sistema deve informar o usuário do erro e sugerir tentativas futuras.


### Descrição do fluxo alternativo RF02

**Fluxo Alternativo 1:**

- O usuário tenta editar uma pesquisa que já foi enviada para os clientes.
- O sistema exibe uma mensagem informando que a pesquisa não pode ser editada porque já foi enviada.


### RF03 - O sistema deve emitir alerta de quando o disparo das pesquisas não for efetuado ou ocorrer algum erro.

O sistema deve ser capaz de emitir alertas automáticos quando o disparo das pesquisas de satisfação não for efetuado corretamente ou ocorrer algum erro durante o processo. Esses alertas são essenciais para garantir a integridade e a eficácia do sistema, permitindo que os usuários ajam prontamente para corrigir possíveis problemas.

O sistema deve monitorar de forma contínua e proativa o processo de disparo das pesquisas, verificando se todas as etapas ocorreram conforme o planejado

### Descrição do fluxo principal RF04

1. **Monitoramento do processo de envio:** O sistema monitora continuamente o processo de envio das pesquisas(e.g: Sistema de filas), verificando se todas as etapas ocorrem conforme o planejado.
2. **Detecção de falhas ou erros:** O sistema identifica qualquer falha ou erro que ocorra durante o disparo das pesquisas.
3. **Emissão de alertas automáticos:** O sistema emite notificação automática dos usuários sobre as falhas no disparo das pesquisas e especifica a causa da falha e contatos afetados.

### Descrição do fluxo de exceção RF03

**Fluxo de Exceção:**

- **E9.1:** Se o sistema não conseguir emitir o alerta (por exemplo, falha no serviço de e-mail), deve-se registrar o incidente para revisão manual pelo administrador.


### Descrição do fluxo alternativo RF03



### RF04 - O usuário deve conseguir receber os resultados das pesquisas enviadas por email e visualizar em um dashboard.

Para atender a esse requisito, o sistema precisa ser capaz de receber as respostas das pesquisas enviadas por e-mail. Isso pode envolver a integração com o serviço de envio de e-mails utilizado para coletar as respostas, a extração dos dados relevantes dos e-mails recebidos e o armazenamento desses dados em um formato adequado para análise posterior.

Além disso, o sistema deve fornecer um painel de controle (dashboard) onde o usuário possa visualizar os resultados das pesquisas de forma clara e intuitiva. Isso pode incluir gráficos, tabelas e outros elementos visuais que permitam ao usuário compreender e analisar os dados coletados. O painel de controle deve ser projetado de maneira a facilitar a identificação de tendências, insights e métricas relevantes relacionadas à satisfação dos clientes.


### Descrição do fluxo principal RF04

1. **Recebimento das respostas na plataforma:** As respostas das pesquisas são recebidas diretamente na plataforma, seja por meio de um formulário online ou de outro mecanismo de coleta de dados.
2. **Armazenamento dos dados das respostas:** As respostas são armazenadas na plataforma, em um banco de dados ou sistema de gerenciamento apropriado, garantindo a integridade e segurança dos dados.
3. **Processamento e organização dos dados:** Os dados das respostas são processados e organizados pela plataforma, preparando-os para análise e visualização.
4. **Apresentação dos resultados no dashboard:** A plataforma exibe os resultados das pesquisas em um painel de controle (dashboard) intuitivo e visualmente atraente. O dashboard contém elementos gráficos, tabelas e outras representações visuais dos dados para facilitar a compreensão e análise dos resultados.
5. **Exploração e análise dos resultados:** Os usuários podem explorar os resultados no dashboard, interagindo com os gráficos, aplicando filtros, selecionando métricas de interesse e obtendo insights relevantes relacionados à satisfação dos clientes.

### Descrição do fluxo de exceção RF04

- **E4.1:** Se ocorrer algum erro durante o armazenamento dos dados das respostas na plataforma, o sistema registra a falha e notifica o usuário responsável pela pesquisa.
- **E4.2:** Se houver problemas técnicos ou interrupções no acesso à plataforma, o sistema deve garantir a recuperação adequada dos dados e a restauração do serviço assim que possível, para evitar a perda de informações.

### Descrição do fluxo alternativo RF04

**Fluxo Alternativo 1:**

- O usuário decide personalizar o layout e a aparência do dashboard de acordo com suas preferências e necessidades.
- A plataforma oferece recursos de personalização, permitindo que o usuário ajuste a visualização do dashboard, escolha os tipos de gráficos, organize os painéis e customize a aparência geral.

**Fluxo Alternativo 2:**

- O usuário opta por criar relatórios automatizados com base nos resultados das pesquisas.
- A plataforma oferece recursos para gerar relatórios automáticos, que podem ser agendados para serem enviados por e-mail ou disponibilizados para download, oferecendo uma forma conveniente de compartilhar os resultados com outras partes interessadas.

    # Diagrama Nível 1 C4 Model - Contexto

Os Diagramas C4 (Context, Containers, Components, Code) são uma ferramenta eficaz para visualizar e comunicar a arquitetura de software de um sistema. Esses diagramas oferecem uma representação hierárquica e modular da arquitetura, desde o contexto mais amplo até os detalhes do código fonte. No nível "Contexto", o diagrama C4 descreve o ambiente externo ao sistema, incluindo os usuários, suas interações e os sistemas com os quais o software se integra. Neste documento, exploraremos o Diagrama C4 do nível "Contexto" de um sistema de envio de e-mail com os links de pesquisa.

<img src="../assets/C4-Model-N1-Caso1.png?raw=true" alt="C4 Model Level 1">

No contexto do sistema de testes automatizados para a "Verificação da Lista de Links", temos os seguintes elementos:

- Clientes: Serão os clientes cadastrados das empresas que receberão os emails de pesquisa enviados por meio da lista de links
- Sistema envio de email: Este sistema é responsável por enviar o link de pesquisa por email para determinado cliente cadastrado para aquela pesquisa
- Banco: Banco de dados com os clientes cadastrados
- Interface de pesquisa: É o form de pesquisa em si, o link que será enviado

## Fluxo

1. Usuários: São cadastrados no banco como clientes da empresa caso já não estejam cadastrados. Ao receber o email, acessa o form de pesquisa e responde
2. Banco: Armazena os usuários cadastrados e se a pesquisa já foi respondida por eles
3. Sistema de envio de emails: Consome o banco para direcionar emails com o link de pesquisa para usuários cadastrados para aquela pesquisa

# Diagrama Nível 2 C4 Model - Contêiner

O diagrama de nível 2 de um modelo C4 descreve um contêiner, que é basicamente um contexto ou limite no qual algum código é executado ou dados são armazenados. Cada contêiner é uma entidade separadamente implantável ou executável, geralmente (mas nem sempre) operando em seu próprio espaço de processo. Como resultado, a comunicação entre contêineres normalmente assume a forma de uma comunicação entre processos

<img src="../assets/C4-Model-N2-Caso1.png" alt="C4 Model Level 2">

## Fluxo

- Autenticação: Valida os usuários cadastrados para enviar corretamente os emails
- Gerenciamento de links: Seleção de link de pesquisa correspondente para usuários cadastrados
- Envio de email: Faz o envio do email para os clientes com o link da pesquisa

<br>
<br>


## Caso de uso 4

<img src="https://github.com/Inteli-College/2024-T0003-ES09-G01/blob/doc/assets/main_flow.jpg?raw=true" alt="Main Flow Image">


### RF01 - O sistema deve ter a funcionalidade de cadastrar os contatos dos clientes que receberão as pesquisas criadas.

O sistema deve fornecer uma funcionalidade abrangente para cadastrar e gerenciar os contatos dos clientes que receberão as pesquisas criadas. Os usuários autorizados devem ter a capacidade de adicionar novos contatos, incluindo informações relevantes, como nome, endereço de e-mail, número de telefone e quaisquer outros dados necessários por meio do upload de planilha.

O sistema deve permitir que os usuários organizem os contatos em grupos ou categorias, facilitando a segmentação e o envio direcionado das pesquisas para grupos específicos de clientes.

### Descrição do Fluxo Principal RF01

1. **Acesso a ferramenta de gerenciamento de contatos:** O usuário acessa a ferramenta de gerenciamento de contatos dentro da plataforma.
2. **Adição de um novo contato:** O usuário adiciona novos contatos, inserindo informações relevantes como nome, email, telefone, etc.
3. **Organização dos contatos em grupos:** O usuário organiza os contatos em grupos ou categorias para facilitar o envio direcionado das pesquisas.
4. **Importação e exportação de listas de contatos:** O usuário pode importar e exportar listas de contatos em formatos comuns (e.g: Excel ou CSV) para facilitar a integração com outros sistemas.

### Descrição do fluxo de exceção RF01

- **E1.1:** Se o usuário tentar adicionar um contato com informações incompletas ou inválidas, o sistema deve indicar os erros e solicitar correções.
- **E1.2:** Se houver falha na importação da lista de contatos devido a formato incompatível ou erro de leitura, o sistema deve notificar o usuário e fornecer instruções para solucionar o problema.


### Descrição do fluxo alternativo RF01

**Fluxo Alternativo 1:**

- O usuário tenta cadastrar um contato com um endereço de e-mail inválido.
- O sistema exibe uma mensagem de erro e solicita que o usuário digite um endereço de e-mail válido.

**Fluxo Alternativo 2:**

- O usuário tenta importar um arquivo de contatos com formato incorreto.
- O sistema exibe uma mensagem de erro e informa o formato correto do arquivo.



### RF02 - O sistema deve ser capaz de gerar links individuais para cada cliente da pesquisa de satisfação criada.

O sistema deve ter a capacidade de gerar links individuais para cada cliente da pesquisa de satisfação criada. Isso significa que, para cada destinatário da pesquisa, o sistema deve fornecer um link exclusivo que direcionará o cliente para a pesquisa específica associada a ele.

Para atender a esse requisito, o sistema precisará gerar links únicos e exclusivos para cada cliente da pesquisa de satisfação. Esses links podem ser incorporados nos e-mails enviados aos clientes ou disponibilizados de alguma outra forma conveniente, como em uma página de pesquisa personalizada.

### Descrição do fluxo principal RF02

1. **Criação da pesquisa de satisfação:** O usuário cria a pesquisa de satisfação, definindo suas perguntas e opções de resposta.
2. **Geração de links individuais:** Após a criação da pesquisa, o sistema gera links individuais exclusivos para cada cliente cadastrado.
3. **Associação dos links aos clientes:** O sistema associa cada link gerado a um cliente específico, armazenando essa informação em um banco de dados ou sistema de gerenciamento.
4. **Envio dos links aos clientes:** O sistema envia os links individuais para os clientes por meio de e-mails, SMS ou outra forma de comunicação.

### Descrição do fluxo de exceção RF02

- **E2.1:** Se ocorrer um erro durante a geração dos links individuais, o sistema registra o problema e notifica o usuário responsável pela pesquisa.
- **E2.2:** Se o link individual gerado for inválido ou estiver corrompido, o sistema notifica o usuário e toma as medidas necessárias para corrigir ou regerar o link.

### Descrição do fluxo alternativo RF02

**Fluxo Alternativo 1:**

- O usuário decide fornecer os links individuais através de uma página web personalizada, em vez de enviá-los por e-mail.
- O sistema gera os links individuais e os disponibiliza em uma página web acessível apenas para os clientes cadastrados.
- Os clientes podem acessar a página e encontrar seu link exclusivo, possibilitando o acesso à pesquisa de satisfação.

**Fluxo Alternativo 2:**

- O usuário opta por fornecer os links individuais por meio de um aplicativo móvel.
- O sistema gera os links exclusivos e os disponibiliza no aplicativo, onde os clientes podem acessá-los e ser direcionados para a pesquisa de satisfação correspondente.

### RF03 - Sistema deve ser capaz de armazenar as respostas de todos os clientes.

O sistema deve possuir uma capacidade robusta de armazenamento para registrar e gerenciar as respostas de todos os clientes às pesquisas realizadas. Essa funcionalidade deve garantir a integridade, segurança e disponibilidade dos dados coletados.

O sistema deve ser capaz de armazenar as respostas de forma estruturada, permitindo que os usuários acessem e analisem as informações de maneira eficiente. Isso pode ser alcançado por meio da utilização de um banco de dados adequado, que seja capaz de armazenar e organizar as respostas de maneira escalável e de fácil recuperação.

### Descrição do fluxo principal RF03

1. **Recebimento de respostas:** O sistema recebe as respostas dos clientes às pesquisas realizadas, armazenando em um banco de dados seguro.
2. **Gerenciamento de respostas:** O sistema organiza e gerencia as respostas de forma estruturada, permitindo que os usuários acessem e analisem as informações.
3. **Garantia de integridade e segurança dos dados: I**mplementação de medidas de segurança para garantir a integridade e confidencialidade das respostas dos clientes.

### Descrição do fluxo de exceção RF03

- **E6.1:** Em caso de falha no armazenamento das respostas, seja por limitações de capacidade ou falhas no banco de dados, o sistema deve alertar o administrador para que medidas corretivas possam ser tomadas.
- **E6.2:** Se as respostas excederem o limite de armazenamento, o sistema deve sugerir a exportação de dados antigos ou o aumento da capacidade de armazenamento.


### Descrição do fluxo alternativo RF03

**Fluxo Alternativo 1:**

- A capacidade de armazenamento do sistema é excedida.
- O sistema informa o usuário sobre a necessidade de aumentar a capacidade de armazenamento.


### RF04 - O sistema deve disponibilizar modelo da planilha para o preenchimento de contatos

O sistema deve fornecer aos usuários um modelo de planilha para facilitar o preenchimento e a importação de contatos de forma eficiente. Esse modelo de planilha deve seguir um formato padronizado e conter as colunas e campos necessários para capturar as informações dos contatos de maneira organizada.

O modelo de planilha disponibilizado deve ser de fácil compreensão e utilização. Ele deve incluir cabeçalhos claros e instruções sobre quais informações devem ser inseridas em cada coluna.

### Descrição do fluxo principal RF04

1. **Acesso ao modelo de planilha:** O usuário acessa o modelo de planilha disponibilizado na plataforma.
2. **Preenchimento da planilha com dados dos contatos:** O usuário preenche a planilha com os dados dos contatos conforme as instruções fornecidas.
3. **Importação planilha preenchida:** O usuário importa a planilha preenchida de volta para a plataforma, onde os dados dos contatos são automaticamente adicionados ao sistema.


### Descrição do fluxo de exceção RF04

**Fluxo de Exceção:**

- **E10.1:** Se o usuário tentar fazer upload de uma planilha em formato não suportado, o sistema deve informar sobre os formatos compatíveis e solicitar a conversão do arquivo.

### Descrição do fluxo alternativo RF04

**Fluxo Alternativo 1:**

- O usuário tenta importar um modelo de planilha com dados incorretos.
- O sistema exibe uma mensagem de erro e informa quais dados estão incorretos.


# Diagrama Nível 1 C4 Model - Contexto

Os Diagramas C4 (Context, Containers, Components, Code) são uma ferramenta eficaz para visualizar e comunicar a arquitetura de software de um sistema. Esses diagramas oferecem uma representação hierárquica e modular da arquitetura, desde o contexto mais amplo até os detalhes do código fonte. No nível "Contexto", o diagrama C4 descreve o ambiente externo ao sistema, incluindo os usuários, suas interações e os sistemas com os quais o software se integra. Neste documento, exploraremos o Diagrama C4 do nível "Contexto" de um sistema de testes automatizados para a "Verificação da Lista de Links".

<img src="https://github.com/Inteli-College/2024-T0003-ES09-G01/blob/doc/assets/C4-Model-N1.png?raw=true" alt="C4 Model Level 1">

No contexto do sistema de testes automatizados para a "Verificação da Lista de Links", temos os seguintes elementos:

- Usuários: Envolvem testadores, desenvolvedores e analistas de QA representam os usuários finais que interagem com a plataforma e realizam testes para verificar os links, sendo assim, os usuários tem papel de ator envolvido no nível Contexto. Além disso, são os responsáveis por conduzir os testes e analisar os resultados, garantindo a qualidade e integridade da plataforma.
- Sistema de Distribuição do Canal de Lista de Links: Este sistema é responsável por distribuir os links para os usuários finais, proporcionando-lhes acesso aos recursos relevantes.
- Planilha modelo: É a planilha que é importada e exportada da plataforma, contendo a lista de usuários para distribuição da Lista de Links.
- API de integração: Contém as rotas que coletam informações do sistema da Track.Co e conecta aos componentes os quais os testes serão executados.
- Dashboard de testes: Apresentam visualmente os resultados dos testes, permitindo a análise e obtenção de insights relevantes que se relacionam a qualidade do sistema.

## Fluxo

1. Usuários: Utilizam e atuam diretamente com o sistema de testes automatizados para conduzir testes na plataforma, garantindo a integridade e funcionalidade dos links.
2. Sistema de Testes Automatizados: Executa os scripts de teste, automatizando o processo de verificação dos links e coletando os resultados. Se comunica diretamente com a Planilha Modelo, API de Integração e com o Dashboard de Testes.
3. Planilha Modelo: Fornece um modelo estruturado para a formatação e organização dos dados de teste, facilitando a análise e interpretação dos resultados.
4. API de Integração: Recebe os resultados dos testes do sistema de testes automatizados e os integra com o sistema de distribuição do canal de Lista de Links, garantindo a atualização e consistência dos dados.
5. Dashboard de Testes: Apresenta de forma visual e acessível os resultados dos testes, permitindo uma análise rápida e eficaz, além de fornecer retornos importantes para o sistema de distribuição.

# Diagrama Nível 2 C4 Model - Contêiner

O diagrama de nível 2 de um modelo C4 descreve um contêiner, que é basicamente um contexto ou limite no qual algum código é executado ou dados são armazenados. Cada contêiner é uma entidade separadamente implantável ou executável, geralmente (mas nem sempre) operando em seu próprio espaço de processo. Como resultado, a comunicação entre contêineres normalmente assume a forma de uma comunicação entre processos

<img src="https://github.com/Inteli-College/2024-T0003-ES09-G01/blob/doc/assets/C4-Model-N2.png?raw=true" alt="C4 Model Level 2">

## Fluxo

- Módulo de Testes: Executa os scripts de teste, automatizando o processo de verificação dos links e coletando os resultados, verificando basicamente se a quantidade de clientes novos inseridos na base constam na coluna Incluído,
  quantos clientes novos estão sendo cadastrado na plataforma a partir da criação da distribuição, além de fazer a verificação de cliente válidos ou não e verifica todos os clientes para os quais houve tentativa de disparo, ou seja, aqueles sem impedimento para receber a pesquisa.
- Banco: Armazena quaisquer novos dados e é usado para consutas do módulo de testes.
- Distribuição Lista de Links: Realizar os "disparos" com o canal Lista de Links e verificar seus retornos, enviando-os de volta ao módulo de testes.

<br>
<br>

# Prototipação do front-end

<img src="https://github.com/Inteli-College/2024-T0003-ES09-G01/blob/doc/assets/Tela1.jpg" alt="Tela 1">

<img src="https://github.com/Inteli-College/2024-T0003-ES09-G01/blob/doc/assets/Tela2.jpg" alt="Tela 2">

<img src="https://github.com/Inteli-College/2024-T0003-ES09-G01/blob/doc/assets/Tela3.jpg" alt="Tela 3">

<br>
<br>

# Implementação e Práticas de Segurança do front-end

## Integração com Auth0

### Configuração
O Auth0 foi configurado como provedor de identidade para gerenciar a autenticação e autorização dos usuários da nossa interface do usuário. Para configurá-lo, foram seguidos os seguintes passos:

1. Criar uma conta no Auth0 e configurar o domínio da aplicação.
2. Definir as configurações de aplicativo, incluindo o URL de retorno após a autenticação e as permissões necessárias.
3. Configurar as conexões de identidade, como provedores sociais (Google, Facebook, etc.) e diretório corporativo (LDAP, Active Directory, etc.), conforme necessário para os usuários da nossa aplicação.
4. Configurar as regras personalizadas para aplicar lógica de negócios específica durante o processo de autenticação, como verificação de domínio de e-mail corporativo, atribuição de funções de usuário, etc.

### Autenticação
O Auth0 permite que os usuários autentiquem-se utilizando provedores de identidade social, como Google, Facebook, LinkedIn, etc. Na nossa aplicação, os usuários podem escolher entre diferentes provedores sociais durante o processo de autenticação. O Auth0 lida com todo o fluxo de autenticação social de forma segura e transparente.

### Autorização
A autenticação multifator (MFA) foi habilitada no Auth0 para adicionar uma camada extra de segurança ao processo de autenticação dos usuários. Isso significa que, além das credenciais de login padrão, os usuários podem optar por receber e inserir um código de verificação enviado por SMS, e-mail ou por meio de um aplicativo autenticador.

### Integração com APIs Protegidas
O Auth0 é utilizado para autenticar os usuários da interface do usuário e conceder acesso seguro às APIs protegidas pela nossa aplicação. Isso é feito através da geração de tokens de acesso JWT (JSON Web Tokens) pelo Auth0, que são então incluídos nos cabeçalhos das solicitações para as APIs protegidas. As solicitações são verificadas pelo Auth0 para garantir que os tokens sejam válidos e que o usuário tenha as permissões adequadas antes de serem encaminhadas para as APIs.

### Gestão de Tokens
O Auth0 gerencia a geração, validação e expiração dos tokens de acesso JWT para garantir a segurança das comunicações entre a interface do usuário e os serviços protegidos. Os tokens são assinados digitalmente pelo Auth0 para evitar adulterações e expiram após um período de tempo configurado para minimizar o risco de reutilização indevida.

### Monitoramento
O Auth0 fornece recursos abrangentes de monitoramento e registro de atividades relacionadas à autenticação e autorização dos usuários. Isso inclui logs detalhados de autenticação, auditorias de acesso, tentativas de login inválidas e outras atividades relevantes. Esses registros são fundamentais para a detecção e resposta a possíveis ameaças à segurança da nossa aplicação.

<img src="../assets/image1.jpeg" alt="Tela 4">


<br>
<br>

# Testes

A implementação de testes automatizados nas funcionalidades CORE do produto CXM visa mitigar os riscos associados aos deploys manuais e reduzir a frequência de rollbacks.

Com a introdução de testes automatizados, a probabilidade de regressões durante os deploys será reduzida, permitindo uma rápida detecção de problemas potenciais e contribuindo para a identificação precoce de bugs.

Desta forma, foram definidos os seguintes testes abaixo.

## Teste de caixa preta

O teste de caixa preta, também conhecido como teste funcional, é uma técnica de teste de software em que o sistema é testado sem considerar sua estrutura interna ou lógica. Nesse tipo de teste, o foco está na validação das entradas e saídas do sistema, bem como no comportamento do sistema em relação aos requisitos funcionais especificados. O testador não tem conhecimento detalhado da implementação do sistema, mas sim das especificações e funcionalidades esperadas. O objetivo é avaliar se o sistema funciona corretamente, identificar erros de funcionalidade, verificar se todas as funcionalidades estão corretamente implementadas e se o sistema atende aos requisitos do usuário.

Assim, compreendeu-se a necessidade de realização desses para o projeto em questão.

### Cenário de testes de caixa preta

**Tecnologia Utilizada:** Cypress

**Justificativa da Escolha:** Para testes de caixa preta que focam na interação do usuário com a interface da aplicação, Cypress é escolhido sobre ferramentas como Selenium devido à sua arquitetura mais moderna e integração direta com frameworks front-end. Cypress oferece uma experiência de desenvolvimento mais ágil, com feedback instantâneo e capacidade de visualizar testes em execução, o que é essencial para testar o passo a passo de acesso a telas específicas. Diferentemente do Selenium, que é mais versátil para automação cross-browser mas pode ser mais complexo de configurar, Cypress proporciona um setup mais simples e um ambiente de teste mais consistente.

### Definição dos testes

#### 1. Cenário de teste para pesquisas automatizadas:

- Descrição: Verificar se uma pesquisa automatizada pode ser criada com sucesso.
- Passos: </br>
  - Acessar a interface de criação de pesquisa.</br>
  - Preencher todos os campos obrigatórios. </br>
  - Clicar no botão "Salvar". </br>
- Resultado esperado: A pesquisa é criada com sucesso e está disponível na lista de pesquisas.

#### 2. Cenário de teste para dashboards automatizados:

- Descrição: Garantir que os dados exibidos em um dashboard automatizado sejam precisos e atualizados. <br>
- Passos: </br>
  - Acessar o dashboard automatizado. </br>
  - Verificar se os indicadores e gráficos estão sendo exibidos corretamente. </br>
- Resultado esperado: Os dados exibidos no dashboard correspondem aos dados esperados e estão atualizados. </br>

#### 3. Cenário de teste para distribuição automatizada:

- Descrição: Testar o processo de distribuição automatizada de relatórios ou notificações.
- Passos:
  - Configurar uma nova distribuição automatizada.
  - Definir os destinatários e a frequência de envio.
  - Aguardar o envio automatizado.
- Resultado esperado: Os relatórios ou notificações são distribuídos conforme as configurações definidas, sem erros ou falhas.


### Relatório da Ferramenta de Testes

### Descrição dos testes

**Teste de interface - Link de download de CSV padrão (download.spec.cy.ts)**

- Verifica se o link de download do arquivo CSV padrão está funcionando corretamente.

```
describe('Teste de interface - Link de download de CSV padrão', () => {
    it('Verifica o link de download do arquivo CSV', () => {
      cy.visit('http://localhost:3000/') 
  
      cy.contains('download do modelo da planilha').should('have.attr', 'href').then(href => {
        cy.request(href)
          .then(response => {
            expect(response.status).to.eq(200)
            expect(response.headers['content-type']).to.eq('text/csv')
            expect(response.headers['content-disposition']).to.include('attachment')
          })
      })
    })
  })
```


**Teste de interface - Botão para salvar arquivo CSV (save-button.spec.cy.ts)**

- Verifica se o botão para salvar um arquivo CSV está presente na interface e se tem o texto "Enviar".

```
describe('Teste de interface - Botão para salvar arquivo CSV', () => {
    it('Verifica se o botão está presente', () => {
    cy.visit('http://localhost:3000/')

    cy.get('button[type="submit"]').should('exist')
    cy.get('button[type="submit"]').should('have.text', 'Enviar')
    })
})
```

**Teste de interface - Campo para inserir arquivo CSV (send-file.spec.cy.ts)**

- Verifica se o campo para inserir um arquivo CSV está presente na interface da aplicação.

```
/* Teste  de interface da aplicação - caso 1 - distribuição lista de links*/

describe('Teste de interface - Campo para inserir arquivo CSV', () => {
    it('Verifica se o campo está presente', () => {
      cy.visit('http://localhost:3000/')
  
      cy.get('input[type="file"]').should('exist')
    })
  })
```

**Teste de interface - Tags de aviso de inconformidade no CSV (tag-warning.spec.cy.ts)**

- Verifica se as tags de aviso de inconformidade no CSV estão presentes na interface da aplicação.

```
describe('Teste de interface - Tags de aviso de inconformidade no CSV', () => {
    it('Verifica se as tags de aviso estão presentes', () => {
      cy.visit('http://localhost:3000/') // Substitua pela URL do seu aplicativo

       // Seleciona o arquivo no input file
      const fileName = 'file_model - file_model.csv'; 
      cy.fixture(fileName).then(fileContent => {
        cy.get('input[type="file"]').attachFile({
          fileContent: fileContent.toString(),
          fileName: fileName,
          mimeType: 'text/csv'
        });

      });

      // Ativa o botão para dar continuidade ao teste
      cy.get('button').contains('Enviar').click();
  
      cy.get('.toaster').each(tag => {
        cy.wrap(tag)
          .find('.go4109123758')
          .should('exist')
      })
    })
  })
```

**Práticas de segurança adotadas**
A aplicação implementa medidas de segurança para garantir a integridade dos dados e a privacidade dos usuários. Estas medidas incluem, mas não se limitam a, autenticação de dois fatores, criptografia de dados sensíveis e proteção contra ataques de injeção de código.


### Teste de interface - caso de uso 1

**1. Acesso à página de pesquisa:**
- O usuário deve acessar a página de pesquisa da aplicação.
- Isso pode ser feito por meio da navegação dentro da aplicação até a página de pesquisa relevante.

**2. Seleção da pesquisa para distribuição:**
- O usuário deve passar o mouse sobre a pesquisa que deseja distribuir.
- Em seguida, deve clicar no ícone de "distribuição" associado à pesquisa selecionada.

**3. Iniciar nova distribuição** 
- Após clicar no ícone de distribuição, o usuário deve selecionar a opção "Nova distribuição".

**4. Escolha do canal de distribuição (e-mail)**
- Na nova distribuição, o usuário deve escolher o canal de distribuição desejado, no caso, o E-mail.

**5. Upload do modelo de planilha**
- Na aba Cliente, o usuário tem a opção de baixar o modelo da planilha.
- Após baixar o modelo, deve abri-lo em um programa compatível e preencher com os dados dos clientes.

**6. Seleção e envio do arquivo CSV**
- Após preencher a planilha, o usuário deve clicar em "Selecionar arquivo" na interface.
- Em seguida, deve escolher o arquivo CSV preenchido com os dados dos clientes.
- A interface deve mostrar as colunas do arquivo CSV, permitindo que o usuário verifique se os dados estão corretos.

**7. Confirmação da importação**
- Após verificar os dados, o usuário deve confirmar a importação do arquivo.
- A interface deve apresentar um resumo do lado direito da tela, mostrando a quantidade de clientes enviados para a distribuição.

**8. Salvar a distribuição**
- Por fim, o usuário deve clicar em "Salvar" para confirmar e salvar a distribuição.

#### **Práticas de seguranças adotadas**

- Autenticação de usuário: Acesso à página de pesquisa e às funcionalidades de distribuição são restritas a usuários autenticados na plataforma.
- Validação de arquivos: Antes da importação, a interface valida o formato e a integridade do arquivo CSV, prevenindo possíveis ataques por meio de arquivos maliciosos.
- Controle de acesso: Apenas usuários autorizados têm permissão para iniciar uma nova distribuição e acessar os recursos relacionados à distribuição de dados sensíveis.


### Execução da suíte de testes

_(Com a aplicação rodando)_

**1. Abra o terminal e navegue até o diretório do frontend do projeto.**

**2. Execute o comando Cypress para abrir o Cypress Test Runner:**

    npm run cypress:open

  - Isso abrirá a interface do Cypress, onde você pode selecionar os testes a serem executados.
    
![alt text](image.png)
![alt text](image-1.png)

**3. Na interface do Cypress, clique no arquivo de teste que deseja executar.**

![alt text](image-2.png)

**4. Aguarde até que o Cypress execute os testes. Os resultados serão exibidos na interface do Test Runner.**

![alt text](image-3.png)

**Observação:** Para que o passo a passo acima explicado funcione corretamente é necessário que o front-end esteja em execução.
Para isso é necessário também que se navegue até o diretório do projeto (final `2024-T0003-ES09-G01\src\frontend>`) e execute-se o comando `npm run dev`.


## Testes de carga

Testes de carga, também conhecidos como testes de desempenho, são uma forma de teste de software que avalia o comportamento e a capacidade de um sistema sob condições de carga e estresse. Esses testes são projetados para simular situações de uso intenso, como um grande número de usuários simultâneos ou um volume elevado de transações, a fim de verificar se o sistema é capaz de lidar com a carga esperada sem degradar seu desempenho. O objetivo é identificar gargalos, pontos de falha e limitações de recursos, permitindo que os desenvolvedores otimizem o sistema e garantam que ele possa funcionar de forma eficiente e estável em condições de carga real.

### Cenários de testes de Carga

**Tecnologia Utilizada:** Apache JMeter

**Justificativa da Escolha:** JMeter é amplamente reconhecido por sua eficácia em simular cenários de alta demanda em aplicações web, avaliando sua capacidade de manter a performance sob cargas variadas. Sua natureza open-source, flexibilidade para simular múltiplos usuários e suporte para diversos protocolos de rede o destacam de alternativas como LoadRunner, principalmente considerando o custo-benefício. JMeter permite uma análise detalhada através de gráficos e relatórios de performance, facilitando a identificação de gargalos e a tomada de decisões baseadas em dados concretos para otimização da aplicação.

### Definição de testes

A definição de hotpath são caminhos do sistema no qual a maior parte do tempo de execução é gasto e, portanto, que são potencialmente executados com muita frequência.

#### 1 - O teste será focado na funcionalidade de criação de pesquisas de satisfação dentro da plataforma.

- Descrição: O objetivo é garantir que os usuários autorizados possam criar questionários personalizados de forma eficiente e que todas as opções de personalização estejam funcionando conforme esperado.
- Passos: </br>
  - Acesso à Funcionalidade. </br>
  - Criação do Questionário. </br>
  - Personalização do Design e Layout. </br>
  - Salvamento e Publicação. </br>
- Valores de entrada: </br>
  - Informações de texto para as perguntas. </br>
  - Opções de resposta para perguntas específicas. </br>
  - Elementos de design, como logotipos, cores e estilos. </br>
- Valores de saída: </br>
  - Pesquisa de satisfação criada e disponível para uso. </br>
  - Design e layout da pesquisa conforme personalizado. </br>
  - Funcionalidades de lógica de direcionamento de respondentes configuradas conforme especificado. </br>
- Cenários de Carga: </br>
  - Cenário de Baixa Carga:
    - Volume de Usuários: 100 usuários simultâneos.
    - Tempo de Sessão: 20 minutos.
  - Cenário de Média Carga:
    - Volume de Usuários: 200 usuários simultâneos.
    - Tempo de Sessão: 40 minutos.
  - Cenário de Alta Carga:
    - Volume de Usuários: 500 usuários simultâneos.
    - Tempo de Sessão: 1 hora.

#### 2 - O teste de carga será realizado para avaliar a funcionalidade de cadastro de contatos dos clientes no sistema.

- Descrição: O objetivo é verificar a capacidade do sistema em lidar com diferentes volumes de solicitações de cadastro de contatos simultâneas, mantendo o desempenho adequado e garantindo a integridade dos dados.
- Passos: </br>
  - Acesso à Funcionalidade de Cadastro de Contatos.
  - Adição de Novos Contatos.
  - Preencha as informações relevantes do contato, como nome, endereço de e-mail, número de telefone e outros dados necessários.
  - Salve o novo contato adicionado.
  - Teste a funcionalidade de importação de listas de contatos em formatos comuns, como CSV.
  - Verifique se as listas de contatos podem ser importadas corretamente para o sistema.
  - Explore a opção de exportação de listas de contatos para garantir a integração com outros sistemas.
- Valores de entrada: </br>
  - Informações dos novos contatos a serem cadastrados.
  - Dados para organização dos contatos em grupos ou categorias.
  - Arquivos CSV para importação de listas de contatos.
- Valores de saída: </br>
  - Confirmação visual do cadastro bem-sucedido dos novos contatos.
  - Organização eficiente dos contatos em grupos ou categorias.
  - Listas de contatos importadas e exportadas corretamente em formato CSV.
- Cenários de Carga: </br>
  - Cenário de Baixa Carga: - Simulação de alguns usuários cadastrando contatos simultaneamente (por exemplo, 5 usuários). - Adição de um pequeno número de contatos em um curto período de tempo.
  - Cenário de Média Carga: - Simulação de uma quantidade moderada de usuários cadastrando contatos simultaneamente (por exemplo, 20 usuários). - Adição de contatos em grupos ou categorias específicas.
  - Cenário de Alta Carga:
    - Simulação de um grande número de usuários cadastrando contatos simultaneamente (por exemplo, 50 usuários).
    - Importação e exportação de grandes listas de contatos em formato CSV.
    - Verificação do desempenho do sistema e capacidade de resposta sob carga intensa.

#### 3 - O teste de carga será realizado para avaliar a funcionalidade de automação do envio das pesquisas para os endereços de contato cadastrados.

- Descrição: O objetivo é verificar a capacidade do sistema em lidar com diferentes volumes de solicitações de envio automático de pesquisas, mantendo o desempenho adequado e garantindo a confiabilidade da automação.
- Passos: </br>
  - Acesso à Funcionalidade de Automação de Envio.
  - Selecione a pesquisa que deseja automatizar o envio.
  - Defina as configurações predefinidas para o envio automático, incluindo frequência e horários de envio.
  - Ative a automação de envio para que as pesquisas sejam enviadas automaticamente de acordo com as configurações definidas.
- Valores de entrada: </br>
  - Configurações de automação, incluindo frequência e horários de envio das pesquisas.
  - Dados das pesquisas a serem enviadas automaticamente.
- Valores de saída: </br>
  - Confirmação visual da configuração bem-sucedida da automação de envio.
  - Pesquisas enviadas automaticamente nos horários programados.
- Cenários de Carga: </br>
  - Cenário de Baixa Carga:
    - Simulação de alguns usuários configurando a automação de envio de pesquisas simultaneamente (por exemplo, 5 usuários).
    - Envio automático de um pequeno número de pesquisas em intervalos espaçados.
  - Cenário de Média Carga:
    - Simulação de uma quantidade moderada de usuários configurando a automação de envio de pesquisas simultaneamente (por exemplo, 20 usuários).
    - Envio automático de pesquisas em intervalos regulares ao longo do dia.
  - Cenário de Alta Carga:
    - Simulação de um grande número de usuários configurando a automação de envio de pesquisas simultaneamente (por exemplo, 50 usuários).
    - Envio automático de um grande volume de pesquisas em datas específicas ou momentos determinados por eventos específicos.
    - Verificação do desempenho do sistema e capacidade de resposta sob carga intensa de automação de envio de pesquisas.

#### 4 - O teste de carga será realizado para avaliar a capacidade do sistema em armazenar as respostas de todos os clientes de forma eficiente

- Descrição: O objetivo é garantir que o sistema possua uma capacidade robusta de armazenamento, mantendo a integridade, segurança e disponibilidade dos dados coletados.
- Passos: </br>
  - Simule a entrada de um grande volume de respostas de clientes ao sistema.
  - Verifique se o sistema é capaz de armazenar todas as respostas de forma adequada.
  - Após a entrada das respostas, verifique se os usuários conseguem acessar e recuperar as informações armazenadas de maneira eficiente.
  - Teste a velocidade de acesso às respostas, especialmente em situações de carga elevada.
- Valores de entrada: </br>
  - Grande volume de respostas de clientes simuladas para entrada no sistema.
- Valores de saída: </br>
  - Confirmação visual da capacidade de armazenamento eficaz de todas as respostas.
  - Velocidade satisfatória no acesso e recuperação das respostas armazenadas.
- Cenários de Carga: </br>
  - Cenário de Baixa Carga:
    - Simulação de um número limitado de respostas de clientes sendo inseridas no sistema (por exemplo, 100 respostas).
    - Verificação da capacidade de armazenamento e acesso das respostas em condições de baixa carga.
  - Cenário de Média Carga:
    - Simulação de um volume moderado de respostas de clientes sendo inseridas no sistema (por exemplo, 500 respostas).
    - Teste da capacidade de armazenamento e acesso das respostas em condições de carga moderada.
  - Cenário de Alta Carga:
    - Simulação de um grande volume de respostas de clientes sendo inseridas no sistema (por exemplo, 1000 respostas ou mais).
    - Avaliação da capacidade de armazenamento e acesso das respostas em condições de carga intensa.
    - Verificação do desempenho do sistema e capacidade de resposta sob carga elevada de armazenamento de respostas.

## Testes Unitários

Testes unitários são um tipo de teste de software onde componentes individuais, como funções, métodos ou classes, são testados de forma isolada para garantir que eles funcionem corretamente e produzam os resultados esperados. Eles são executados de maneira automatizada e ajudam a identificar erros ou problemas em partes específicas do código, permitindo que os desenvolvedores detectem e corrijam defeitos precocemente durante o processo de desenvolvimento. Isso resulta em um código mais confiável, modular e fácil de manter.
Compreendendo a importância do desenvolvimento desses, foi pensado para o projeto, como a seguir.

### Cenários de testes Unitários

**Tecnologia Utilizada:** Jest

**Justificativa da Escolha:**
Jest é escolhido para testes unitários em projetos JavaScript ou TypeScript devido à sua simplicidade, velocidade e capacidade de oferecer uma experiência de teste coesa. Com recursos como mocking automático, um sistema de asserção rico e suporte para testes assíncronos, Jest se destaca sobre alternativas como Mocha ou Jasmine. A integração direta com projetos baseados em React, Angular ou Vue, juntamente com a capacidade de executar testes em paralelo, otimiza o ciclo de desenvolvimento e melhora a eficiência da integração contínua (CI). Diferente de outras ferramentas que podem requerer configurações adicionais para mocking ou relatórios de cobertura de código, Jest oferece essas funcionalidades out-of-the-box, facilitando a adoção e a manutenção dos testes unitários.

### Definição dos testes

#### 1. Teste de unidade para módulo de pesquisas automatizadas:

- Descrição: Este teste verifica a funcionalidade de criação de uma nova pesquisa automatizada, o que vai garantir que os parâmetros fornecidos resultem em uma pesquisa válida e pronta para uso.
- Valores de entrada: Parâmetros da pesquisa (por exemplo, título, questões, opções de resposta) para configurar a pesquisa de acordo com as necessidades da empresa.
- Valores de retorno: Confirmação de que a pesquisa foi criada com sucesso na plataforma e está disponível para uso pelos usuários.

#### 2. Teste de unidade para módulo de dashboards automatizados:

- Descrição: verifica a precisão e atualização dos dados exibidos nos dashboards automatizados da plataforma Track.co, assegurando que os indicadores apresentem as informações corretas conforme esperado pelos clientes da empresa.
- Valores de entrada: conjunto de dados de teste específicos da Track.co para os indicadores do dashboard, abrangendo diferentes cenários de uso com base nas necessidades dos clientes da empresa.
- Valores de retorno: Comparação dos dados exibidos no dashboard com os dados esperados, validando a precisão das métricas e gráficos apresentados aos usuários na plataforma.

#### 3. Teste de unidade para módulo de distribuição automatizada:

- Descrição: Este teste garante que a distribuição automatizada de relatórios ou notificações na plataforma Track.co seja realizado conforme configurado, verificando se os destinatários selecionados recebem as informações no momento adequado de acordo com as estratégias de CX da empresa.
- Valores de entrada: O teste receberá configurações de distribuição específicas da Track.co, incluindo destinatários, lista de distribuição, conteúdo a ser enviado e frequência de envio, alinhadas com as necessidades e expectativas dos clientes da empresa.
- Valores de retorno: Verificação de se os relatórios ou notificações foram entregues com sucesso aos destinatários designados na plataforma Track.co, com confirmação de envio e registro adequado para análise posterior pela equipe responsável por CX.

### Testes de unidade - Caso de uso 4

#### 1. Teste de acesso à página de pesquisa

- Tecnologia e justificativa: Optamos pelo Cypress para este teste devido à sua capacidade de simular interações de seleção de elementos da página. Como o caso de uso envolve a seleção do canal Lista de Links, é importante garantir que essa seleção seja realizada corretamente. O Cypress nos permite verificar essa funcionalidade de forma precisa, garantindo que o canal seja selecionado conforme o esperado.
- Entrada: A execução do comando cy.visit('pagina_de_pesquisa').
- Saída: Confirmação de que a página de pesquisa foi carregada com sucesso.

#### 2. Testar a passagem do mouse sobre a pesquisa

- Tecnologia e justificativa: Optamos pelo Cypress para este teste porque ele oferece recursos para simular ações do usuário, como passar o mouse sobre elementos da página. Esse teste é importante para garantir que a interação do usuário com a pesquisa seja realizada corretamente, e o Cypress nos permite verificar essa funcionalidade de forma precisa.
- Entrada: A execução da ação cy.hover('elemento_pesquisa').
- Saída: Verificação de que o mouse foi passado sobre a pesquisa corretamente.

#### 3. Teste de clique no ícone de distribuição

- Tecnologia e justificativa: O Cypress será utilizado neste teste devido à sua capacidade de simular cliques em elementos da página. Como o caso de uso envolve o clique em um ícone de distribuição, é importante garantir que essa interação seja realizada corretamente, e o Cypress nos permite realizar essa verificação de forma precisa e automatizada.
- Entrada: A execução do comando cy.get('icone_distribuicao').click().
- Saída: Confirmação de que o ícone de distribuição foi clicado corretamente.

#### 4. Teste de seleção do canal lista de links

- Tecnologia e justificativa: Cypress é adequado para simular interações de seleção de elementos da página. Este teste verifica se o canal Lista de Links é selecionado corretamente.
- Entrada: A execução do comando cy.get('seletor_canal_lista_de_links').select('Lista de Links').
- Saída: Verificação de que o canal Lista de Links foi selecionado com sucesso.

#### 5. Teste de download do modelo da planilha

- Entrada: A execução do comando cy.get('botao_download_modelo').click().
- Saída: Verificação de que o modelo da planilha foi baixado com sucesso.

#### 6. Preenchimento e importação da planilha

- Tecnologia e justificativa: Cypress é capaz de testar a funcionalidade de download de arquivos. Este teste verifica se o modelo da planilha é baixado corretamente.
- Entrada: A execução do comando cy.get('botao_download_modelo').click().
- Saída: Verificação de que o modelo da planilha foi baixado com sucesso.

#### 6. Teste de preenchimento e importação da planilha

- Tecnologia e justificativa: Cypress permite simular ações de preenchimento e envio de formulários. Este teste verifica se os dados da planilha são preenchidos e importados corretamente.
- Entrada: A execução das ações de preenchimento da planilha e envio através dos comandos cy.get('campo').type('dados') e cy.get('botao_importar').click().
- Saída: Confirmação de que os dados foram importados com sucesso e estão corretos.

#### 7. Teste de verificação dos retornos da distribuição

- Tecnologia e justificativa: Cypress é utilizado para verificar se os retornos da distribuição estão de acordo com as especificações do caso de uso.
- Entrada: A verificação dos valores das colunas Incluído, Válido, Inválido, Disparado, Não disparado, Recorrência, Resposta(s) - Disparado(s), Resposta(s) - Cliente(s), Abertura(s) - Disparado(s) e Abertura(s) - Cliente(s).
- Saída: Confirmação de que os retornos da distribuição estão corretos e em conformidade com as expectativas do caso de uso.

### Testes de unidade - Caso de uso 1

#### 1. Teste de criação da pesquisa de satisfação

- Descrição: Verifica se o sistema permite a criação de uma nova pesquisa de satisfação por e-mail, garantindo que o usuário possa definir perguntas, opções de resposta e o design visual da pesquisa.
- Entrada: Parâmetros de criação da pesquisa (perguntas, opções de resposta, design).
- Saída: Confirmação de que a pesquisa foi criada com sucesso na plataforma e está pronta para ser enviada.

#### 2. Teste de seleção de destinatários

- Descrição: Verifica se o sistema permite que o usuário selecione os destinatários da pesquisa, seja através de listas pré-definidas, segmentações específicas ou seleção manual.
- Entrada: Seleção dos destinatários da pesquisa.
- Saída: Confirmação de que os destinatários foram selecionados corretamente para a pesquisa.

#### 3. Teste de personalização do e-mail:

- Descrição: Garante que o sistema permita ao usuário personalizar o e-mail que acompanhará a pesquisa de satisfação, incluindo saudação, mensagem introdutória e link exclusivo para cada destinatário.
- Entrada: Personalização do conteúdo do e-mail.
- Saída: Verificação de que o e-mail foi personalizado corretamente de acordo com as especificações do usuário.

#### 4. Teste de agendamento do envio:

- Descrição: Verifica se o sistema permite que o usuário agende o momento adequado para o envio dos e-mails com as pesquisas de satisfação.
- Entrada: Agendamento do envio dos e-mails.
- Saída: Confirmação de que o envio dos e-mails foi agendado conforme especificado pelo usuário.

#### 5. Teste de envio dos e-mails:

- Descrição: Assegura que o sistema envie automaticamente os e-mails com as pesquisas de satisfação para os destinatários, utilizando as configurações definidas pelo usuário.
- Entrada: Processo de envio dos e-mails.
- Saída: Confirmação de que os e-mails foram enviados com sucesso para os destinatários especificados.

#### 6. Teste de acompanhamento e registro de respostas:

- Descrição: Verifica se o sistema é capaz de registrar as respostas dos destinatários e fornece um mecanismo para que o usuário acompanhe e analise os resultados da pesquisa.
- Entrada: Verificação e registro das respostas.
- Saída: Confirmação de que as respostas foram registradas e estão disponíveis para análise pelo usuário.

## Testes de integração

Testes de integração são um tipo de teste de software que verifica a interação e a comunicação entre diferentes componentes do sistema. Eles são realizados para garantir que os módulos ou serviços integrados funcionem corretamente em conjunto, identificando possíveis problemas de compatibilidade, troca de dados ou comportamento inadequado. Esses testes são executados após os testes unitários e antes dos testes de sistema, visando validar a integração adequada e a funcionalidade do sistema como um todo. Eles desempenham um papel importante na detecção precoce de erros que podem surgir na interação entre os componentes, melhorando a qualidade e a confiabilidade do software.

### Cenários de testes de Integração

**Tecnologia Utilizada:** Postman (para APIs) e Cypress (para UI)

**Justificativa da Escolha:** Postman é a escolha para testes de integração de APIs devido à sua interface de usuário intuitiva e extenso suporte para diferentes tipos de requisições HTTP, autenticação e validação de respostas. Sua capacidade de organizar testes em coleções e integrar com CI/CD facilita a automação e monitoramento de APIs. Cypress, utilizado para testes de integração na camada de UI, é preferido por sua execução rápida e feedback visual para testes que envolvem várias partes do sistema. Enquanto outras ferramentas como Selenium também poderiam ser usadas, a facilidade de uso e a integração de Cypress com o desenvolvimento moderno front-end o tornam mais adequado para esse tipo de teste.

### Definição dos testes

#### 1 - Teste de conexão da API para a requisição de criação de uma nova pesquisa.

- Descrição: O teste de conexão da API para a requisição de criação de uma nova pesquisa envolve verificar a capacidade da API em estabelecer uma conexão bem-sucedida com o servidor e enviar corretamente os dados necessários para criar uma nova pesquisa. Nesse teste, são verificados aspectos como a autenticação, a validação dos parâmetros de entrada, a resposta do servidor, a correta persistência dos dados e a geração de um identificador único para a pesquisa criada. O objetivo é garantir que a API esteja funcionando adequadamente e que seja capaz de receber, processar e armazenar corretamente os dados de uma nova pesquisa, assegurando a integridade e a confiabilidade do sistema.

- Valores de entrada: Requisição POST com os parâmetros de criação da pesquisa, como nome, atributos a serem preenchidos, canal de distribuição, dia de envio, lista de quem receberá a pesquisa.

- Valores de saída: Espera-se o retorno de resposta 201, além da criação da pesquisa.

#### 2 - Teste da API de listagem das pesquisas já criadas.

- Descrição: O teste da API de listagem das pesquisas já criadas consiste em verificar a funcionalidade da API em retornar uma lista de todas as pesquisas associadas a uma organização específica. Durante esse teste, serão realizadas solicitações à API, fornecendo os parâmetros corretos de autenticação e organização, e espera-se receber uma resposta contendo a lista completa das pesquisas existentes. O objetivo é garantir que a API seja capaz de recuperar e apresentar de forma precisa todas as pesquisas pertencentes à organização solicitada, permitindo que os usuários do sistema tenham acesso às informações relevantes de maneira adequada e eficiente.
- Valores de entrada: Requisição GET com os parâmetros de ID da pesquisa dentro do endpoint.
- Valores de saída: Espera-se o retorno de resposta 200, além da listagem das pesquisas de determinada empresa, contando com o ID da pesquisa, nome da pesquisa e identificador hash da pesquisa.

#### 3 - Teste de conexão da API de listar status de distribuições.

- Descrição: O teste de conexão da API de listar status de distribuições tem como objetivo verificar a capacidade da API em estabelecer uma conexão efetiva e obter os status dos clientes participantes de uma distribuição por meio de diferentes canais, como E-mail, SMS Link ou WhatsApp. Durante esse teste, serão realizadas solicitações à API, fornecendo os parâmetros adequados, como a identificação da distribuição e o histórico de alterações desejado. Dependendo das configurações, a API pode retornar apenas o último status de cada cliente ou todos os status ordenados por status. É importante observar que, nos casos dos canais Link ou QR Code, a API fornecerá apenas o status de sucesso da criação da distribuição, uma vez que não existem envios pela plataforma nesses casos. O objetivo é garantir que a API seja capaz de recuperar corretamente os status dos clientes, fornecendo informações precisas e relevantes sobre o andamento das distribuições realizadas através dos diferentes canais de comunicação.
- Valores de entrada: Requisição GET com parâmetros da URL da plataforma, além do ID da organização, juntamente com o ID da distribuição. Ainda é possível configurar o histórico de status, que recebe valores de "true" ou "false".
- Valores de saída: espera-se o retorno de resposta 200, além de valores como o nome, telefone, email, data de envio e o status em si. Quando o histórico é ativado, espera-se ainda o retorno de diversos status de uma mesma distribuição, seguidos das datas de cada um deles.

#### 4 - Teste de integração entre a plataforma de distribuição e a ferramenta de email.

- Descrição: O teste de integração entre a plataforma de distribuição e a ferramenta de e-mail envolve verificar a correta comunicação e interação entre esses dois sistemas. Durante esse teste, são realizadas simulações de envio de e-mails por meio da plataforma de distribuição, verificando se os dados são corretamente transmitidos para a ferramenta de e-mail e se os e-mails são entregues aos destinatários esperados. Esse teste abrange aspectos como a autenticação e autorização entre os sistemas, a formatação correta dos e-mails, o encaminhamento adequado dos dados e a confirmação de entrega dos e-mails. O objetivo é assegurar que a integração entre a plataforma de distribuição e a ferramenta de e-mail funcione corretamente, garantindo a efetividade das campanhas de e-mail marketing, a entrega adequada das mensagens aos destinatários e a consistência dos dados entre os sistemas envolvidos.
- Valores de entrada: As entradas são os endereços de email de cada um dos clientes, além de a pesquisa em si que seria distribuída.
- Valores de saída: Resposta positiva de envio, sem oferecer qualquer erro, garantindo que todos os clientes da lista receberam o email com a pesquisa.

#### 5 - Teste de integração entre a plataforma de distribuição e o aplicativo WhatsApp.

- Descrição: O teste de integração entre a plataforma de distribuição e o aplicativo WhatsApp consiste em verificar a correta interação e comunicação entre esses dois sistemas. Durante esse teste, são realizadas simulações de envio de mensagens pelo aplicativo WhatsApp por meio da plataforma de distribuição, verificando se os dados são transmitidos adequadamente e se as mensagens são entregues aos destinatários corretos. Esse teste abrange aspectos como a autenticação e autorização entre os sistemas, a formatação correta das mensagens, o encaminhamento adequado dos dados e a confirmação de entrega das mensagens pelo aplicativo WhatsApp. O objetivo é garantir que a integração entre a plataforma de distribuição e o aplicativo WhatsApp funcione de maneira correta e eficiente, assegurando a entrega adequada das mensagens aos destinatários e a consistência dos dados entre os sistemas envolvidos.
- Valores de entrada: As entradas seriam os links de WhatsApp de cada cliente, além de as próprias pesquisas em si que seriam distribuídas.
- Valores de saída: Resposta positiva de envio, sem oferecer qualquer erro, garantindo que todos os clientes da lista receberam a mensagem com a pesquisa.

### Teste de integração - Caso de uso 4

#### 1 - Teste de integração entre a planilha de clientes importada e a plataforma.

- Descrição: O teste de integração entre a planilha de clientes importada e a plataforma envolve verificar a correta integração e sincronização dos dados contidos na planilha com a plataforma. Durante esse teste, a planilha de clientes é importada para a plataforma, e são realizadas validações para garantir que os dados da planilha sejam corretamente mapeados e inseridos na plataforma, mantendo a consistência e a integridade dos dados. Esse teste abrange aspectos como a verificação dos formatos dos dados na planilha, a correspondência correta dos campos da planilha com os campos da plataforma, a detecção e tratamento de possíveis erros ou inconsistências nos dados, e a confirmação de que os clientes foram devidamente importados para a plataforma. O objetivo é assegurar que a integração entre a planilha de clientes e a plataforma seja eficiente, permitindo a correta importação e utilização dos dados dos clientes na plataforma, evitando duplicidades ou perdas de informações importantes.
- Valores de entrada: As entradas seriam os próprios arquivos de planilhas importados na plataforma.
- Valores de saída: O retorno deveria ser reposta de saída positiva, confirmando compatibilidade e aceitação do modelo.

> Obs: Vale destacar que todas as APIs citadas no teste foram retiradas da documentação oficial de APIs da plataforma - https://documenter.getpostman.com/view/14932352/Tz5v1upm.

## Relatório da Ferramenta de Testes

Os testes de integração foram projetados para validar a interação entre componentes críticos do sistema, especificamente no contexto de upload e processamento de arquivos CSV, além da recuperação de e-mails dos usuários. Este relatório resume os resultados obtidos, a cobertura de código alcançada e os índices de sucesso e falha dos testes executados.

### Módulos e Funcionalidades Testadas

#### LinkListsService (Caso de uso 4)

- **Funcionalidades:**
  - Validação do tipo de arquivo
  - Leitura e processamento de dados CSV
  - Salvamento dos dados processados no banco de dados
  - Envio de dados para a fila do RabbitMQ

- **Métodos Testados:**
  - `uploadFile`
  - `saveCSVData`
  - `sendLinkListToQueue`
  - `validateFileType`
  - `readCSVFile`
  - `parseCSV`

#### LinkListsController (Caso de uso 4)

- **Funcionalidades:**
  - Gerenciamento de requisições de upload de arquivos CSV

- **Métodos Testados:**
  - `uploadFile`

#### EmailService

- **Funcionalidades:**
  - Recuperação de e-mails dos usuários a partir do banco de dados
  - Envio de e-mails para os usuários

- **Métodos Testados:**
  - `getAllUserEmails`
  - `sendEmailsToUsers`

Este serviço foi testado para assegurar a correta recuperação de e-mails dos usuários do banco de dados e o envio de e-mails para esses usuários. Os testes validam o correto funcionamento dos métodos `getAllUserEmails` e `sendEmailsToUsers`.

No teste `should return array of user emails`, é verificado se o método `getAllUserEmails` retorna a lista esperada de e-mails, utilizando um mock da tabela `csvTable` no `PrismaService` para simular a recuperação dos dados. Esse teste confirma que a função `findMany` do `PrismaService` é chamada e que os e-mails corretos são retornados.

No teste `should send emails to all users`, o método `sendEmailsToUsers` é testado para garantir que e-mails são enviados para todos os usuários. Este teste utiliza o `MailerService` mockado para verificar se a função `sendMail` é chamada o número esperado de vezes e com os parâmetros corretos, incluindo remetente, assunto e texto da mensagem, confirmando a funcionalidade de envio de e-mails.

### Cobertura de Testes

Com a adição dos novos testes, a cobertura de código pode ter aumentado, refletindo a inclusão de testes para a funcionalidade de envio de e-mails. É importante revisar e atualizar a porcentagem de cobertura de código conforme necessário para refletir as adições recentes.

- **Cobertura de Código:** ~95% 
- **Módulos Cobertos:** `LinkListsService`, `LinkListsController`, `EmailService`

### Índices de Sucesso e Falha

- **Testes com Sucesso:** 26/26 
  - A inclusão de testes para o envio de e-mails reforça a confiabilidade e a abrangência da suite de testes, destacando a eficácia do sistema em cumprir suas funcionalidades de comunicação por e-mail, além do processamento de arquivos CSV.

### Observações Finais

A expansão dos testes para incluir a funcionalidade de envio de e-mails pelo `EmailService` complementa a suite de testes de integração, garantindo a performance adequada do sistema nas operações de comunicação por e-mail. Continuar a expansão da cobertura de testes e a revisão das funcionalidades do sistema é recomendado para manter a qualidade e a confiabilidade do sistema.


### Índices de Sucesso e Falha

- **Testes com Sucesso:** 26/26

- **Falhas:**
  - Nenhuma falha nos testes relacionados à lógica de negócio foi registrada. 

## TDD - Testes Unitários

### Introdução

Este documento fornece uma visão geral dos testes unitários implementados para os serviços `RabbitMQService` e `LinkListsService`, focando em validar o funcionamento correto das funcionalidades principais. Os testes foram projetados para garantir a qualidade e a estabilidade do código, seguindo as melhores práticas de desenvolvimento de software.

### Pré-requisitos

Antes de executar os testes, certifique-se de que você tem o seguinte instalado em seu ambiente de desenvolvimento:

- Node.js (versão recomendada 12.x ou superior)
- NPM ou Yarn
- Jest (instalado globalmente ou disponível no projeto)

### Como Executar os Testes

Para executar a suíte de testes, siga os passos abaixo:

1. Clone o repositório para sua máquina local.
2. Navegue até a pasta do projeto via terminal.
3. Instale as dependências do projeto com o comando `npm install` ou `yarn install`, dependendo do seu gerenciador de pacotes.
4. Execute os testes com o comando `npm run test` ou `yarn test`.

## Testes Implementados

### RabbitMQService

- **Envio de Mensagem (`sendMessage`)**: Testa se o serviço envia corretamente uma mensagem para a fila especificada.
- **Consumo de Mensagem (`consumeMessage`)**: Verifica se o serviço consome corretamente uma mensagem de uma fila especificada.

### LinkListsService

- **Criação (`create`)**: Avalia a adição de uma nova lista de links.
- **Leitura (`findAll` e `findOne`)**: Testa a recuperação de todas as listas de links e a busca por uma lista específica, respectivamente.
- **Atualização (`update`)**: Verifica a atualização de dados de uma lista de links existente.
- **Remoção (`remove`)**: Testa a remoção de uma lista de links.

## Cobertura de Testes e Relatórios

Para gerar um relatório de cobertura de testes, você pode utilizar o Jest com a opção `--coverage`. Execute o comando `npm run test -- --coverage` ou `yarn test --coverage`. Isso gerará um relatório detalhado sobre a cobertura de testes do projeto, que pode ser encontrado no diretório `coverage` na raiz do projeto.

## Resultados dos testes

<img src="https://github.com/Inteli-College/2024-T0003-ES09-G01/blob/doc/assets/result.jpeg" alt="resultados">

# Sonnarqube

## a- Instalação da ferramenta

Na parte de instalação da ferramenta deve ser baixado dois arquivos zips o primeiro do Sonnarqube (https://www.sonarsource.com/products/sonarqube/downloads/) e o outro do SonnarScanner (https://docs.sonarsource.com/sonarqube/latest/analyzing-source-code/scanners/sonarscanner/), não se esqueca de ter o docker na sua máquina também. 

Depois de baixado os arquivos zips e extraido, pesquise por variaveis de ambiente na sua máquina e verifique se o diretório bin do SonarScanner ao PATH foi adicionado. Ao final disso conseguimos inciar o sonnarscanner. 

Rode esse comando para criar um docker e iniciar ele:

`docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube`

No seu navegador pesquise http://localhost:9000/, onde abrira um página do sonnarqube se cadastre com a senha e usuario admin, e depois redefina a senha. 

Vamos conectar nosso projeto com o Sonnarqube localmente, então escolha essa opção ao criar o projeto no sonnarqube ao final ele vai retornar um comando para rodar no diretorio do seu projeto, vamos criar dois projetos no sonnarqube um voltado para o back e outro para o front então ele vai retornar esses dois comandos parecidos com isso:

- Backend

`sonar-scanner.bat -D"sonar.projectKey=2024-T0003-ES09-G01-back" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.token=sqp_5f1ff6e795cea6faf80295e7f801cdb229f4b00e”`

- Frontend

`sonar-scanner.bat -D"sonar.projectKey=2024-T0003-ES09-G01-front" -D"sonar.sources=." -D"sonar.host.url=http://localhost:9000" -D"sonar.token=sqp_5530135360162ff71cba7fad7bbf22b908d6b201”`

Na parte de projetos do sonnarqube vai ficar assim: 

![sqpartea](https://github.com/Inteli-College/2024-T0003-ES09-G01/blob/main/assets/sqpartea.jpg)

Após rodas esses dois comandos correspondentes as pastas do seu projeto você terá acesso as taxas de **Maintainability** e **Reliability**.

## b - Configuração das regras customizadas

Para configurar as regras personalizadas fomos para a seção **Rule** dentro do sonnarquebe disponibiliza alguns tampletes de regras sobre seu projeto. 

![sqpartea](https://github.com/Inteli-College/2024-T0003-ES09-G01/blob/main/assets/sqparteb.jpg)

## c - Vincular repositório a ferramenta

Quando criamos localmente o projeto no sonnarqube já temos a opção de vincular o repositória a ferramenta

## d - Relatório de execução de análise 

O relatória está disponível em  “\2024-T0003-ES09-G01\src\backend\coverage\[lcov.info](http://lcov.info/)”

# Dashboard de monitoramento da aplicação
