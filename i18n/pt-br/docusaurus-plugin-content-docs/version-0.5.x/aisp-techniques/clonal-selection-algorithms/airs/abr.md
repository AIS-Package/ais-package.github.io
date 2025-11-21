---
id: abr
title: ABR
sidebar_label: ABR - Bolha de reconhecimento artificial
sidebar_position: 2
keywords:
  - Binary
  - classifying
  - affinity threshold
  - Real-Valued
  - classifying
  - anomalies
  - K-Nearest Neighbors
lastUpdatedAt: 2025/05/25
author: João Paulo
---

## ABR (Artificial Recognition Ball)

Individuo do conjunto de células reconhecedoras (ABR), herda características de uma célula-B, adicionando o consumo de recursos

:::info

**``ABR``** estende a classe **[``BCell``](../../../advanced-guides/base-module/immune/cell.md#BCell)**, herdando sua funcionalidade base.

:::

### Constructor

Parameters:

* vector (``npt.NDArray``): A feature vector of the cell. Defaults to None.

---

### Function consume_resource(...)

Parameters:

* n_resource (```float```) : The initial amount of resources.
* amplified (``float``): Amplifier for resource consumption by the cell. It is multiplied by the cell's stimulus. The default value is 1.

```python
def consume_resource(self, n_resource: float, amplified: float = 1) -> float:
```

Returns the remaining amount of resources after consumption.
