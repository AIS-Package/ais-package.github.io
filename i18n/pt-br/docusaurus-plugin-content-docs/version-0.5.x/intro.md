---
sidebar_position: 1
lastUpdatedAt: 2023/05/30
author: João Paulo
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 2025/05/17
  author: João Paulo
keywords:
  - AISP
  - Inteligência Artificial
  - Sistemas Imunológicos Artificiais
  - Computação Natural
  - Algoritmos Imunoinspirados
  - Otimização
  - Reconhecimento de Padrões
  - Python
  - Código Aberto
  - LGPLv3
  - Pesquisa
  - Bioinspiração
  - Artificial Immune System
  - Immune-inspired Algorithms
---

# Pacote de Sistemas Imunológicos Artificiais

<div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>

![Pacote de Sistemas Imunológicos Artificiais](./assets/logo.svg)  

</div>
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>

[![GitHub stars](https://img.shields.io/github/stars/AIS-Package/aisp?style=social)](https://github.com/AIS-Package/aisp)
[![PyPI Downloads](https://static.pepy.tech/personalized-badge/aisp?period=total&units=INTERNATIONAL_SYSTEM&left_color=GRAY&right_color=GREEN&left_text=downloads)](https://pepy.tech/projects/aisp)
![License](https://img.shields.io/pypi/l/aisp)
![Python version](https://img.shields.io/pypi/pyversions/aisp)

</div>

---

## Introdução

**AISP (Artificial Immune Systems Package)** é um pacote Python de técnicas imunoinspiradas, as quais aplicam metáforas do sistema imunológico dos vertebrados ao reconhecimento de padrões e à tarefas de otimização. Concebido como um pacote de sistemas imunológicos artificiais de código aberto, o AISP é resultado de um projeto de pesquisa iniciado em **2022** no Instituto Federal do Norte de Minas Gerais - Campus Salinas (**IFNMG - Salinas**). Sua distribuição é regida pela GNU Lesser General Public License v3.0 (LGPLv3).

### O que voce pode fazer com o AISP?

O AISP oferece implementações de algoritmos bio-inspirados para:

- **Detecção de anomalias**: Identifique padrões anormais em dados.
- **Classificação**: Classifique dados com multi-classes.
- **Otimização**: Encontre soluções ótimas para funções objetivas.
- **Clustering**: Agrupe dados sem supervisão.

---

## Algoritmos Implementados

### [Seleção Negativa](./aisp-techniques/negative-selection.md) (`aisp.nsa`)

- [**BNSA**](./api/nsa/bnsa.md) - Algoritmo de Seleção Negativa Binária  
- [**RNSA**](./api/nsa/rnsa.md) - Algoritmo de Seleção Negativa com Valores Reais  

### [Seleção Clonal](./aisp-techniques/clonal-selection-algorithms.md) (`aisp.csa`)

- [**AIRS**](./api/csa/airs.md) - Sistema Imunológico Artificial de Reconhecimento  
- [**CLONALG**](./api/csa/clonalg.md) - Algoritmo de Seleção Clonal  

### [Teoria de Redes Imunológicas](./aisp-techniques/immune-network-theory.md) (`aisp.ina`)

- [**AiNet**](./api/ina/ai-net.md) - Rede Imunológica Artificial para Agrupamento e Compressão de Dados  

### Módulo em Desenvolvimento

#### Teoria do Perigo (`aisp.dta`)

- **DCA** - Algoritmo de Células Dendríticas *(planejado)*  

## Visão geral da API

Todos os algoritmos seguem uma interface simples e consistente:

- `fit(X, y, verbose: bool = True)`: Treina o modelo para tarefas de classificação.
- `fit(X, verbose: bool = True)`: Treina o modelo para tarefas de agrupamento.
- `predict(X)`: Faz previsões com base em novos dados.
- `optimize(max_iters: int =..., n_iter_no_change: int =..., verbose: bool = True)`: executar os algoritmos de otimização
