---
sidebar_position: 1
title: Instalation
sidebar_label: Instalation
lastUpdatedAt: 2023/05/30
author: João Paulo
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 2023/05/30
  author: João Paulo
---

# **Installation**

This page contains information about the dependencies needed by the package, how to install it and how to import the modules.

## **Dependencies:**

The module requires installation of [python 3.8.10](https://www.python.org/downloads/) or higher.


<div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>

|    Packages   |     Version   |
|:-------------:|:-------------:|
|    numpy      |    ≥ 1.23.0   |
|    scipy      |    ≥ 1.8.1    |
|    tqdm       |    ≥ 4.64.1   |

</div>

## **User installation**

The simplest way to install AISP is using ``pip``:

```bash
pip install aisp
```

## **How to import the Techniques**

```python
from aisp.NSA import RNSA, BNSA

nsa = RNSA(N=300, r=0.05)
```

