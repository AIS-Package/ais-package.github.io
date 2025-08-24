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

## **Installation procedure**

The simplest way to install is via ``pip``:

```bash
pip install aisp
```

## **Importing modules**

```python
from aisp.nsa import RNSA, BNSA

nsa = RNSA(N=300, r=0.05)
```

