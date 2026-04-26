---
sidebar_position: 1
lastUpdatedAt: 2023/05/30
author: João Paulo
last_update:
  date: 2025/05/17
  author: João Paulo
keywords:
  - AISP
  - Artificial Intelligence
  - Artificial Immune Systems
  - Natural Computing
  - Immune-inspired Algorithms
  - Optimization
  - Pattern Recognition
  - Python
  - Open Source
  - LGPLv3
  - Research
  - Bioinspiration
  - Immune Metaphors
---
# Artificial Immune Systems Package

<div style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>

![Artificial Immune Systems Package](./assets/logo.svg)  

</div>

<div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto" }}>

[![GitHub stars](https://img.shields.io/github/stars/AIS-Package/aisp?style=social)](https://github.com/AIS-Package/aisp)
[![PyPI Downloads](https://static.pepy.tech/personalized-badge/aisp?period=total&units=INTERNATIONAL_SYSTEM&left_color=GRAY&right_color=GREEN&left_text=downloads)](https://pepy.tech/projects/aisp)
![License](https://img.shields.io/pypi/l/aisp)
![Python version](https://img.shields.io/pypi/pyversions/aisp)

</div>

---

## Introduction

**AISP (Artificial Immune Systems Package)** is a Python package of immunoinspired techniques that apply metaphors from the vertebrate immune system to pattern recognition and optimization tasks. Conceived as an open-source package of artificial immune systems, AISP emerged from a research project initiated in **2022** at the Instituto Federal do Norte de Minas Gerais - Campus Salinas (**IFNMG - Salinas**). Its distribution is governed by the GNU Lesser General Public License v3.0 (LGPLv3).

### What can you do with AISP?

AISP provides implementations of bio-inspired algorithms for:

- **Anomaly detection**: Identify abnormal patterns in data.
- **Classification**: Classify data with multiple classes.
- **Optmization**: Find optimal solutions for objective functions.
- **Clustering**: Group data without supervision.

---

## Implemented Algorithms

### [Negative Selection](./aisp-techniques/negative-selection.md) (`aisp.nsa`)

- [**BNSA**](./api/nsa/bnsa.md) - Binary Negative Selection Algorithm  
- [**RNSA**](./api/nsa/rnsa.md) - Real-Valued Negative Selection Algorithm  

### [Clonal Selection](./aisp-techniques/clonal-selection-algorithms.md) (`aisp.csa`)

- [**AIRS**](./api/csa/airs.md) - Artificial Immune Recognition System  
- [**CLONALG**](./api/csa/clonalg.md) - Clonal Selection Algorithm  

### [Immune Network Theory](./aisp-techniques/immune-network-theory.md) (`aisp.ina`)

- [**AiNet**](./api/ina/ai-net.md) - Artificial Immune Network for clustering and data compression

### Module in Development

#### Danger Theory (`aisp.dta`)

- **DCA** - Dendritic Cell Algorithm *(planned)*

## API overview

All algorithms follow a simple and consistent interface:

- `fit(X, y, verbose: bool = True)`: trains the model for classification tasks.
- `fit(X, verbose: bool = True)`: trains the model for clustering tasks.
- `predict(X)`: makes predictions based on new data.
- `optimize(max_iters: int =..., n_iter_no_change: int =..., verbose: bool = True)`: run the optimization algorithms
