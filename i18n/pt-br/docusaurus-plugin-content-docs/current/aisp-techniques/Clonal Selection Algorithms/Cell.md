---
id: cell
title: Célula-B de Memória
sidebar_label: Célula-B de Memória
sidebar_position: 2
pagination_next: null
keywords:
  - Binário
  - classificação
  - limiar de afinidade
  - Valores Reais
  - classificação
  - anomalias
  - K-Vizinhos Mais Próximos
  - célula-B de memória
lastUpdatedAt: 2025/05/25
author: João Paulo
---

# Célula-B de memória

Representa uma célula-B de memória.

### Construtor:

Parâmetros:

* vector (`npt.NDArray`): Vetor de características da célula. Padrão é None.


---

### Função hyper_clonal_mutate(...):

Parâmetros:

* n (`int`): O número de clones a serem gerados a partir de mutações da célula original.
* algorithm (`Literal["continuous-features", "binary-features"]`): Especifica o tipo de algoritmo com base na natureza das características de entrada.

```python
def hyper_clonal_mutate(
    self,
    n: int,
    algorithm: Literal[
      "continuous-features",
      "binary-features"
    ] = "continuous-features"
) -> npt.NDArray
```

Retorna um array contendo N vetores mutados a partir da célula original.