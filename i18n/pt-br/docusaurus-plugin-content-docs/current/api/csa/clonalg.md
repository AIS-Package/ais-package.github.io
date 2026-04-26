---
id: clonalg
sidebar_label: Clonalg
keywords:
  - otimização
  - seleção clonal
  - clonalg
  - população de anticorpos
  - função de custo
tags:
  - otimização
  - seleção clonal
  - minimização
  - maximização
  - binário
  - contínuos
  - permutação
  - ranged
---

# Clonalg

Algoritmo de Seleção Clonal (CLONALG).

:::tip[Herança]

Esta classe herda de [BaseOptimizer](../base/base-optimizer.md)

:::


> **Módulo:** `aisp.csa`  
> **Importação:** `from aisp.csa import Clonalg`

---

## Visão geral

O _Clonal Selection Algorithm (CSA)_ é um algoritmo de otimização inspirado no processo biológico de seleção e expansão
clonal dos anticorpos do sistema imunológico [^1]. Esta implementação do clonalg foi adaptada para minimização e
maximização da função de custo em problemas binários, contínuos, com intervalo de valor e de permutação.

:::note

Esta implementação do CLONALG contem modificações para o pacote AISP, com intuito da aplicação geral em diferentes
tipos de problemas, o que pode resultar em comportamentos diferentes de implementações focada em um problema específico.  
A adaptação visa generalizar o uso do CLONALG para tarefas de minimização e maximização, além de oferecer suporte
a problemas binários, contínuos, com intervalo de valor e de permutação

:::

---

## Exemplo

```python
import numpy as np
from aisp.csa import Clonalg

# Limites do espaço de busca
bounds = {'low': -5.12, 'high': 5.12}


# Função de custo
def rastrigin_fitness(x):
    x = np.clip(x, bounds['low'], bounds['high'])
    return 10 * len(x) + np.sum(x ** 2 - 10 * np.cos(2 * np.pi * x))


# Instância do CLONALG
clonalg = Clonalg(problem_size=2, bounds=bounds, seed=1)
clonalg.register('affinity_function', rastrigin_fitness)
population = clonalg.optimize(100, 50, False)
print('Best cost:', abs(clonalg.best_cost))
```

**Output:**

```bash
Best cost: 0.02623036956750724
```

---

## Parâmetros do Construtor

| Nome                    | Tipo                                                 |       Default       | Descrição                                                                                                                                                 |
|-------------------------|------------------------------------------------------|:-------------------:|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `problem_size`          | `int`                                                |          -          | Dimensão do problema que será otimizado.                                                                                                                  |
| `N`                     | `int`                                                |        `50`         | Número de células de memória (anticorpos) na população.                                                                                                   |
| `rate_clonal`           | `int`                                                |        `10`         | Número máximo de clones possíveis de uma célula. Esse valor é multiplicado pela afinidade da célula para definir o número de clones.                      |
| `rate_hypermutation`    | `float`                                              |        `1.0`        | Taxa de hipermutação que controla a intensidade das mutações durante a expansão clonal. valores maiores reduzem a intensidade, enquanto menores aumentam. |
| `n_diversity_injection` | `int`                                                |         `5`         | Número de novas células de mémoria aleatórias inseridas para manter a diversidade.                                                                        |
| `selection_size`        | `int`                                                |         `5`         | Número dos melhores anticorpos selecionados para a clonagem.                                                                                              |
| `affinity_function`     | `Optional[Callable[..., npt.NDArray]]`               |       `None`        | Função objetiva usada para avaliar as soluções candidatas durante a otimização.                                                                           |
| `feature_type`          | [`FeatureTypeAll`](../utils/types.md#featuretypeall) | `'ranged-features'` | Tipo de representação das soluções: binária, contínua, com intervalo de valor e para permutação.                                                          |
| `bounds`                | `Optional[Dict]`                                     |       `None`        | Define os limites no espaço de busca quando ``feature_type='ranged-features'``.                                                                           |
| `mode`                  | `{"min", "max"}`                                     |       `'min'`       | Define se o algoritmo realiza minimização ou maximização da função de custo.                                                                              |
| `seed`                  | `int`                                                |       `None`        | Seed para geração aleatória.                                                                                                                              |

## Atributos

| Nome         | Tipo                       | Padrão | Descrição                |
|--------------|----------------------------|:------:|--------------------------|
| `population` | `Optional[List[Antibody]]` | `None` | População de anticorpos. |

---

## Métodos Públicos

### optimize

```python
def optimize(
    self, max_iters: int = 50, n_iter_no_change=10, verbose: bool = True
) -> List[Antibody]:
    ...
```

Realiza o processo de otimização e retorna a população de anticorpos resultante.

**Parâmetros**

| Nome               | Tipo   | Padrão | Descrição                                                                           |
|--------------------|--------|:------:|-------------------------------------------------------------------------------------|
| `max_iters`        | `int`  |  `50`  | Número máximo de iterações na busca da melhor solução do problema usando o CLONALG. |
| `n_iter_no_change` | `int`  |  `10`  | Número máximo de interações sem melhoria na melhor solução global encontrada.       |
| `verbose`          | `bool` | `True` | Indica se as mensagens de progresso na busca do melhor anticorpo deve ser exibido.  |

**Returns**

| Tipo             | Descrição                                                 |
|------------------|-----------------------------------------------------------|
| `List[Antibody]` | População de anticorpos após a expansão e seleção clonal. |

**Exceções**

| Exceção               | Descrição                                                            |
|-----------------------|----------------------------------------------------------------------|
| `NotImplementedError` | Se a função de afinidade não for fornecida para avaliar as soluções. |

---

### affinity_function

```python
def affinity_function(self, solution: npt.NDArray) -> np.float64:
    ...
```

Avalia a afinidade de uma solução candidata.

**Parâmetros**

| Nome       | Tipo          | Padrão | Descrição                            |
|------------|---------------|:------:|--------------------------------------|
| `solution` | `npt.NDArray` |   -    | Solução candidata que será avaliada. |

**Returns**

| Tipo         | Descrição                                         |
|--------------|---------------------------------------------------|
| `np.float64` | Valor de afinidade da solução candidata avaliada. |

**Exceções**

| Exceção               | Descrição                                         |
|-----------------------|---------------------------------------------------|
| `NotImplementedError` | Se a função de afinidade não tiver sido definida. |

---

## Exemplos Estendidos

Exemplos completos de uso estão disponíveis nos notebooks Jupyter:

- [**Exemplos**](../../examples/Optimization/csa.md#clonalg-algoritmo-de-seleção-clonal)

---

## Referências

[^1]: BROWNLEE, Jason. Clonal Selection Algorithm. Clever Algorithms: Nature-inspired
    Programming Recipes., 2011. Available at:
    https://cleveralgorithms.com/nature-inspired/immune/clonal_selection_algorithm.html
