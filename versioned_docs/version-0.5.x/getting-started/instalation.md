---
sidebar_position: 1
title: Installation
sidebar_label: Installation
lastUpdatedAt: 2025/05/17
author: João Paulo
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 2025/05/17
  author: João Paulo
---

This page contains information about dependencies, how to install and how to import modules.

## **Dependencies:**

The package requires [python 3.10](https://www.python.org/downloads/) or higher.

<div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>

|    Packages   |     Version   |
|:-------------:|:-------------:|
|    numpy      |    ≥ 1.23.0   |
|    scipy      |    ≥ 1.8.1    |
|    tqdm       |    ≥ 4.64.1   |
|    numba      |    ≥ 0.59.0   |

</div>

## Installation procedure

The simplest way to install is via ``pip``:

```bash
pip install aisp
```

## **Importing modules**

### Negative selection Algorithms

```python
from aisp.nsa import RNSA, BNSA

r_nsa  = RNSA(N=300, r=0.05)
b_nsa = BNSA(N=300, aff_thresh=0.30)
```

### Clonal Selection Algorithms

```python
from aisp.csa import AIRS, Clonalg

airs = AIRS()
clonalg = Clonalg(problem_size=problem_size)
```

### Immune Network Algorithms

```python
from aisp.ina import AiNet

ai_net = AiNet(suppression_threshold=0.96, affinity_threshold=0.95)
```
