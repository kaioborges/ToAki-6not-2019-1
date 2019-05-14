# TAREFA 3: INSTRUÇÕES

## 1. Instalação e configuração do Angular

No terminal, execute o comando abaixo. 
* No Linux, o comando deverá ser precedido por `sudo`.

```bash
npm install -g @angular/cli@latest
```

* Se você estiver utilizando Windows, deverá reiniciar o computador.

Verifique a versão instalada:

```bash
ng --version
```

A versão esperada do Angular CLI, em abril de 2019, é, pelo menos, **7.3.7**.

> No Windows (principalmente nos computadores dos laboratórios), muitas vezes, por falta de permissão, o comando `ng` não é adicionado ao *path*. Em consequência, ao tentar executar o comando `ng`, recebemos uma mensagem de que o comando não existe ou é desconhecido.
>
> Nesse caso, precisaremos criar um arquivo de nome `ng.bat`, dentro da pasta de trabalho (`TopicosPwa` ou semelhante), com o seguinte conteúdo:
>
> ```cmd
 > %USERPROFILE%\AppData\Roaming\npm\bin\ng %1 %2 %3 %4 %5 %6 %7 %8 %9
> ```
>
> Após criar e salvar o arquivo, o comando `ng --version` deve funcionar no terminal.

## 2. Clonagem e configurações de trabalho em grupo

A listagem com os membros de cada grupo encontra-se no [AVA](https://avafatecfranca.net.br).

Um dos membros de cada grupo deverá acessar o [repositório do professor](https://github.com/fgcintra/ToAki-6not-2019-1) e clicar sobre o botão `Fork`. O repositório *forkado* será o repositório do grupo.

O proprietário do repositório *forkado* deverá acessar a seção `Settings > Collaborators` do repositório e adicionar os demais membros como colaboradores.

**Cada um dos membros do grupo** deverá clonar o repositório *forkado* com o comando
   ```bash
   git clone <endereço_do_repo_do_grupo>
   ```
> Se você precisou criar o arquivo `ng.bat` na seção 1, mova agora esse arquivo para dentro da pasta do repositório clonado.

Entre dentro da pasta com o conteúdo do repositório:

```bash
cd ToAki-6not-2019-1
```

Configure o Angular para utilizar o `yarn` no seu projeto:

```bash
ng config cli.packageManager yarn
```

Instale as dependências:

```bash
yarn install
```

## 3. Adicionando os componentes Angular Material ao projeto

Os componentes [Angular Material](https://material.angular.io/) foram desenvolvidos segundo as diretrizes do [Material Design](https://material.io/design/) do Google. Utilizando esses componentes, nosso projeto terá uma série de benefícios, como a padronização da interface e a habilidade de deixar a aplicação "pronta" para ambientes *mobile*.

Para adicionar a biblioteca de componentes ao projeto, execute o comando abaixo no terminal:

```bash
ng add @angular/material
```

Esse comando também faz algumas perguntas. Responda conforme o modelo abaixo.

* `? Choose a prebuilt theme name, or "custom" for a custom theme: (Use arrow keys)` Com a seta, escolha a primeira opção, **Indigo/Pink** (as demais são horrorosas :P)
* `? Set up HammerJS for gesture recognition? (Y/n)` Responda **Y**.
* `? Set up browser animations for Angular Material? (Y/n)` Responda **Y**.

## 4. Instalando a biblioteca de ícones Material Icons

No terminal:

```bash
yarn add material-design-icons --network-timeout 1000000000
```
* Há relatos de que a execução desse comando é demorada. É por isso que aumentamos o tempo de expiração da rede (`--network-timeout`).

Abra o arquivo `src/styles.scss` e acrescente a **última linha**:

```css
/* src/styles.scss */

@import '~@angular/material/prebuilt-themes/indigo-pink.css';

/* Acrescente a linha a seguir */
@import "~material-design-icons/iconfont/material-icons.css";
```

## 5. Transformando o projeto Angular em um PWA

Instale o pacote a seguir:

```bash
ng add  @angular/pwa
```

Essa instalação atualiza alguns arquivos e cria novos arquivos e pastas:
* `ngsw-config.json`
* `src/manifest.json`
* `src/assets/`

A função de cada um desses arquivos será esclarecida ao longo deste tutorial.

## 6. Auditando o projeto no Google Chrome

Suba o servidor do projeto, em modo de produção:

```bash
ng serve --prod
```

Aguarde o processo de construção. Ao final, acesse o projeto pelo **Google Chrome** (obrigatoriamente) pelo endereço [http://localhost:4200](http://localhost:4200).

Abra as Ferramentas de Desenvolvimento do Google Chrome teclando `F12`. Vá até a última aba (`Audits`) e clique sobre `Run audits`. Uma ferramenta chamada **Lighthouse** irá verificar se o projeto cumpre os requisitos para ser considerado um PWA (*Progressive Web Application*). Nesse estágio, o projeto irá conseguir bons escores em vários quesitos, mas não pontuará ainda como PWA porque não destá sendo servido de forma segura, por meio do protocolo `https`.

## 7. Publicando o projeto no GitHub Pages

Uma das formas mais simples de conseguir com que o projeto seja servido utilizando o protocolo `https` é publicá-lo no **GitHub Pages**.

Para tanto:

1. Abra o arquivo `.gitignore` na raiz do projeto e apague dele a referência à pasta `/dist`. Isso faz com que essa pasta, até então ignorada nos *commits*, passe a ser enviada ao repositório.

2. Abra o arquivo `src/manifest.json` e altere a linha que inicia com `start_url` como segue:

```javascript
{
   ...
   "start_url": "/ToAki-6not-2019-1/ToAki/",
   ...
}
```

3. Execute:

```bash
ng build --prod --base-href /ToAki-6not-2019-1/ToAki/
```
* **IMPORTANTE**: não esqueça a barra final (`/`)!

Isso irá construir os arquivos do projeto, otimizados para produção, dentro da pasta `/dist`.

4. Comite o código da pasta dist em um *branch* especial do repositório. Esse *branch* (`gh-pages`) será utilizado pelo GitHub para gerar a aplicação dentro das GitHub Pages.

```bash
git add dist
git commit -m "Mesagem de commit"
git subtree push --prefix=dist origin gh-pages
```

4. O proprietário do repositório *forkado* precisa acessar os `Settings` do repositório no GitHub e, na seção `GitHub Pages` e selecionar `gh-pages branch` na opção `Source`. **Isso só precisa ser feito uma vez**. 

5. Acesse a aplicação em [https://<user_do_repo_forkado>.github.io/ToAki-6not-2019-1/ToAki](https://<user_do_repo_forkado>.github.io/ToAki-6not-2019-1/ToAki). 
   
   **Repita, nesta página, o processo de auditoria descrito no item 6. O Lighthouse deve agora reconhecer a aplicação como um PWA.**

## 8. Adicionando um módulo para os componentes do Angular Material

Os componentes Angular Material são frequentemente utilizados, e, como qualquer componente da plataforma, precisam ser importados dentro de um módulo para funcionar.

Para evitar importar esses componentes um a um, é mais prático criar um módulo com todos os componentes do Angular Material e importá-los todos de uma vez para dentro do projeto.

Para tanto:

1. Gere um módulo vazio:
```bash
ng generate module material
```

2. Abra o arquivo `src/app/material/material.module.ts` e substitua seu conteúdo pelo código deste [gist](https://gist.github.com/mlabieniec/821356ddc5cbf19124601981a23b12e3#file-material-module-ts).

3. Abra o arquivo `src/app/app.module.ts` e acrescente as linhas indicadas:
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Acrescentar a linha abaixo 
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // Acrescentar a linha abaixo e uma vírgula no final da linha acima
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
});

export class AppModule { }
```
**PRONTO**! Agora todos os componentes Angular Material já podem ser utilizados no projeto.

## 9. Adicionando elementos de interface

Deverão ser adicionados os seguintes elementos de interface ao projeto:

1. Um [Toolbar](https://material.angular.io/components/toolbar/overview), tendo por fundo a cor primária do tema, contendo a identificação do aplicativo (**Fatec ToAki**) e um botão com o ícone de três linhas horizontais ou três pontos verticais para abrir o menu lateral;
2. Um [Sidenav](https://material.angular.io/components/sidenav/overview) (menu lateral), contendo os itens de menu do aplicativo. Os itens de menu devem ser deduzidos de acordo com o documento final de requisitos disponível no AVA.

### Procedimento padrão para *commit* no *branch* master
```bash
git add .
git commit -m "Mensagem de commit"
git push origin master
```

Após implementar esses elementos de interface, **um dos membros do grupo** deverá comitar as mudanças para o repositório do grupo.

## 10. Geolocalização

**Um dos membros do grupo** (que não o que executou o passo anterior) deverá acrescentar um novo componente ao projeto (`ng generate component <nome-do-componente>`). Nesse componente, deverá ser colocada a lógica que detecta se o usuário está na Fatec Franca; essa lógica foi implementada em [outro repositório](https://github.com/fgcintra/6not-2019-1-AngularPwa) pelo professor.

Utilize os conhecimentos de IHC para criar uma nesse componente interface/comunicação visual (texto, imagens ou mesmo animações) para explicar ao usuário que ele precisa conceder ao aplicativo as permissões de localização e que, sem isso, não será possível prosseguir.

Após implementar e testar o componente, esse membro do grupo deverá comitar as mudanças para o repositório do grupo.

### Procedimento padrão para *commit* no *branch* master
```bash
git add .
git commit -m "Mensagem de commit"
git push origin master
```

## 11. *Mockup* de API

Como não temos um *back-end*, criaremos na classe `EventoService` (`src/app/services/evento.service.ts`) dados e métodos simulando as chamadas de uma API. 

Para isso, **um terceiro membro do grupo** (caso haja; senão, um dos anteriores) implementará, nessa classe, um vetor de objetos JSON, com, pelo menos, **dois objetos**. Cada um dos objetos deverá ter os seguintes atributos:

* código do evento (alfanumérico)
* nome do evento
* código da oficina
* nome da oficina
* local da oficina (sala, laboratório, etc.)
* nome do instrutor da oficina
* data/hora do início da oficina
* data/hora do término da oficina
* intervalo (em minutos) *antes* do início da oficina, durante o qual já é possível registrar presença
* intervalo (em minutos) *depois* do término da oficina, durante o qual ainda é possível registrar presença

Na classe `EventoService`, deverá ser implementado um método público que receba o código da oficina, localize o JSON correspondente no vetor e o retorne como resultado.

Após implementar e testar a classe do serviço, esse membro do grupo deverá comitar as mudanças para o repositório do grupo.

### Procedimento padrão para *commit* no *branch* master
```bash
git add .
git commit -m "Mensagem de commit"
git push origin master
```

> Novas instruções serão acrescentadas no decurso das próximas aulas. Durante a tarefa, todos os colaboradores deverão comitar seu código para o repositório do grupo. No final da tarefa, o dono do repositório fará um `pull request` para o repositório do professor.