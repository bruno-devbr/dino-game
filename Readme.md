# Kaplay Dino Game

Este projeto é uma recriação do clássico jogo do dinossauro do Chrome, desenvolvido com [Kaplay](https://www.npmjs.com/package/kaplay).

## Demonstração

Abra o projeto em seu navegador e pressione <kbd>Espaço</kbd> ou <kbd>Seta para cima</kbd> para iniciar o jogo.

## Funcionalidades

-   Dinossauro animado com movimentos de correr, pular, agachar e colisão.
-   Obstáculos de cactos gerados aleatoriamente.
-   Nuvens animadas no fundo.
-   Piso em movimento infinito.
-   Controle por teclado.

## Instalação

1. Clone o repositório:

    ```sh
    git clone https://github.com/seu-usuario/kaplay.git
    cd kaplay
    ```

2. Instale as dependências:

    ```sh
    pnpm install
    ```

3. Rode o projeto em modo desenvolvimento:
    ```sh
    pnpm dev
    ```

## Estrutura do Projeto

```
src/
  main.ts
  utils/
    global/
      kaplay.ts
    sprites/
      cactus.ts
      clouds.ts
      dinos.ts
      floor.ts
assets/
```

## Como Jogar

-   <kbd>Espaço</kbd> ou <kbd>Seta para cima</kbd>: Pular/iniciar o jogo
-   <kbd>Seta para baixo</kbd>: Agachar

## Tecnologias

-   [Kaplay](https://www.npmjs.com/package/kaplay)
-   TypeScript
-   Vite

## Licença

Este projeto está sob a licença MIT.
