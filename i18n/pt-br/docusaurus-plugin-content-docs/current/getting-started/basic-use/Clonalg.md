---
title: Usando o Clonalg
sidebar_label: Usando o Clonalg
author: João Paulo
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 2025/09/17
  author: João Paulo
keywords:
  - clonalg
  - algoritmo clonal
  - otimização
  - função de Rastrigin
  - inteligência artificial
  - algoritmo imunológico
  - benchmark de otimização
  - aprendizado de máquina
  - meta-heurísticas
---

Acesse o notebook Jupyter com o código disponível [here](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/optimization/clonalg/rastrigin_function_example.ipynb)!

Executar o notebook online via Binder: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/AIS-Package/aisp/HEAD?urlpath=%2Fdoc%2Ftree%2F%2Fexamples%2Fpt-br%2Foptimization%2Fclonalg%2Frastrigin_function_example.ipynb)

### Aplicamos o Clonalg à Função Rastrigin.

A função Rastrigin é uma função multimodal não-convexa que possui muitos mínimos locais, 
tornando-a um excelente teste para algoritmos de otimização, [saiba mais](https://en.wikipedia.org/wiki/Rastrigin_function). A função é definida como:

$$ f(x) = 10n + \sum_{i=1}^{n} (x_i^{2} - 10\cos(2\pi x_i)) $$

Onde:
* **n** é a dimensão do problema
* **x_i** ∈ [-5.12, 5.12] para cada dimensão
* **Mínimo global**: f(0,0) = 0

### Importação das bibliotecas necessárias

```python
# Importando o Algoritmo de Seleção Clonal (CLONALG)
from aisp.csa import Clonalg

# Bibliotecas para manipulação de dados e cálculos numéricos
import numpy as np

# Visualização de dados
import matplotlib.pyplot as plt
```

### Definição do problema

```python
problem_size = 2
bounds = {'low': -5.12, 'high': 5.12}

def rastrigin_fitness(x: np.ndarray) -> float:
    x = np.clip(x, bounds['low'], bounds['high'])
    
    n = len(x)
    result = 10 * n
    for i in range(n):
        result += x[i]**2 - 10 * np.cos(2 * np.pi * x[i])
    return result
```

### Configuração do algoritmo

```python
# Configuração otimizada do Clonalg para função Rastrigin
clonalg = Clonalg(
    problem_size=problem_size,
    N=50,
    selection_size=15,
    rate_clonal=10,
    rate_hypermutation=0.3,
    n_diversity_injection=15,
    bounds=bounds,
    seed=1234
)

# Registrar a função de fitness
clonalg.register('affinity_function', rastrigin_fitness)
```

### Execução da otimização

```python
clonalg.optimize(100, 3)

if clonalg.best_cost is not None:
    print('Best cost:', abs(clonalg.best_cost))
```
Output:
```bash
┌───────────┬─────────────────────────┬────────────────────┬─────────────────┐
│ Iteration │   Best Affinity (min)   │   Worse Affinity   │   Stagnation    │
├───────────┼─────────────────────────┼────────────────────┼─────────────────┤
│     1     │                 7.153385│           76.021342│        0        │
│     2     │                 0.000000│           33.315827│        0        │
│     3     │                 0.000000│           30.948129│        1        │
│     4     │                 0.000000│           31.998642│        2        │
│     5     │                 0.000000│           56.071764│        3        │
└───────────┴─────────────────────────┴────────────────────┴─────────────────┘
Total time: 0.027838 seconds
Best cost: 0.0
```

### Resultado

```python
print(clonalg.get_report())
```
Output:
```python
=============================================
            Optimization Summary             
=============================================
Best cost      : 0.0
Best solution  : [4.45057637e-308 8.01092457e-307]
Cost History per Iteration:

┌────────────┬────────────────────────────┐
│ Iteration  │            Cost            │
├────────────┼────────────────────────────┤
│          1 │                   7.153385 │
│          2 │                   0.000000 │
│          3 │                   0.000000 │
│          4 │                   0.000000 │
│          5 │                   0.000000 │
└────────────┴────────────────────────────┘
```

### Evolução do melhor ao longo das gerações

![](../../assets/clonalg.png)