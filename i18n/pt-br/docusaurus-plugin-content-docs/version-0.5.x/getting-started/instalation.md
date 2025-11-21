---
sidebar_position: 1
title: Instalação
sidebar_label: Instalação
lastUpdatedAt: 2025/05/17
author: João Paulo
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 2025/05/17
  author: João Paulo
---

Esta página contém informações sobre as dependências do pacote, como instalá-lo e como importar os módulos.

## Dependências

O módulo requer [python 3.10](https://www.python.org/downloads/) ou superior.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>

|    Pacotes    |     Versão    |
|:-------------:|:-------------:|
|    numpy      |    ≥ 1.23.0   |
|    scipy      |    ≥ 1.8.1    |
|    tqdm       |    ≥ 4.64.1   |
|    numba      |    ≥ 0.59.0   |

</div>

## Procedimento de instalação

A maneira mais simples de instalação é através do ``pip``:

```bash
pip install aisp
```

## Importando módulos

### Algoritmos de Seleção Negativa

```python
from aisp.nsa import RNSA, BNSA

r_nsa  = RNSA(N=300, r=0.05)
b_nsa = BNSA(N=300, aff_thresh=0.30)
```

### Algoritmos de Seleção Clonal

```python
from aisp.csa import AIRS, Clonalg

airs = AIRS()
clonalg = Clonalg(problem_size=problem_size)
```

### Algoritmo de Rede Imunológica

```python
from aisp.ina import AiNet

ai_net = AiNet(suppression_threshold=0.96, affinity_threshold=0.95)
```
