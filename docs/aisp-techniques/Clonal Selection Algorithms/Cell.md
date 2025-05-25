---
id: cell
title: Memory B-cell
sidebar_label: Cell - Memory B-cell
sidebar_position: 2
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
lastUpdatedAt: 2025/05/25
author: João Paulo
---

# Célula-B de memória

Representa uma célula-B de memória.

### Constructor:

Parameters:
* vector (``Optional[npt.NDArray]``): A feature vector of the cell. Defaults to None.

---

### Function hyper_clonal_mutate(...):

Parameters:
* n (``int``): The number of clones to be generated from mutations in the original cell.
* algorithm (``Literal["continuous-features", "binary-features"]``): Specifies the type of
algorithm to use based on the nature of the input features

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

Returns an array containing N mutated vectors from the original cell.