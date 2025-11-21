---
title: Módulo de Populações
sidebar_label: Populações
pagination_next: null
keywords:
  - Binary
  - classifying
  - affinity threshold
  - Real-Valued
  - classifying
  - anomalies
  - K-Nearest Neighbors
  - memory B-cell
  - Clonal Expansion
  - Immune System
  - Artificial Immune Systems
lastUpdatedAt: 2025/11/21
author: João Paulo
---

Fornece funções utilitárias para gerar populações de anticorpos em algoritmos imunológicos.

## generate_random_antibodies(...)

Gera uma população aleatória de anticorpos.

```python
def generate_random_antibodies(
    n_samples: int,
    n_features: int,
    feature_type: FeatureTypeAll = "continuous-features",
    bounds: Optional[npt.NDArray[np.float64]] = None
) -> npt.NDArray
```

### Parâmetros

* **n_samples** (`int`): Número de anticorpos (amostras) a serem gerados.
* **n_features** (`int`): Número de características (dimensões) para cada anticorpo.
* **feature_type** (`FeatureTypeAll`, default="continuous-features"): Especifica o tipo das características: "continuous-features", "binary-features", "ranged-features", or "permutation-features".
* **bounds** (`Optional[npt.NDArray[np.float64]]`): Array (n_features, 2) contendo os valores mínimo e máximo por dimensão.

### Retorno

* **npt.NDArray**: Array com forma (n_samples, n_features) contendo os anticorpos gerados.

### Exceções

* **ValueError**: Caso o número de características seja menor ou igual a zero.
