---
id: clonalg
sidebar_label: CLONALG - Clonal Selection Algorithm
keywords:
  - optimization
  - Binary
  - affinity
  - Real-Valued
lastUpdatedAt: 2025/09/21
author: João Paulo
---

# CLONALG - Clonal Selection Algorithm

The `Clonalg` class is an **optimization algorithm** inspired by the biological process of clonal selection in the immune system. This implementation is designed for minimizing or maximizing cost functions in various problem types, including binary, continuous, ranged-value, and permutation problems.

:::info
This CLONALG implementation contains some changes based on the AISP context, for general
application to various problems, which may produce results different from the standard or
specific implementation. This adaptation aims to generalize CLONALG to minimization and
maximization tasks, in addition to supporting continuous, discrete, and permutation problems.
:::


---

## CLONALG Constructor

The constructor initializes the CLONALG instance with key parameters that define the optimization process.

**Attributes:**

* **problem_size**: `int` - The dimension of the problem to be optimized.
* **N**: `int`, default=50 - The number of memory cells (antibodies) in the population.
* **rate_clonal**: `float`, default=10 - The maximum number of possible clones of a cell. This value is multiplied by the cell's affinity to determine the number of clones.
* **rate_hypermutation**: `float`, default=0.75 - The rate of mutated clones, used as a scalar factor.
* **n_diversity_injection**: `int`, default=5 - The number of new random memory cells injected to maintain diversity.
* **selection_size**: `int`, default=5 - The number of best antibodies selected for cloning.
* **affinity_function**: `Optional[Callable[..., npt.NDArray]]`, default=None - The objective function used to evaluate candidate solutions.
* **feature_type**: `FeatureTypeAll`, default='ranged-features' - The type of problem samples, which can be `'continuous-features'`, `'binary-features'`, `'ranged-features'`, or `'permutation-features'`.
* **bounds**: `Optional[Dict]`, default=None - A dictionary defining the search limits for `'ranged-features'` problems. Can be a single fixed range or a list of ranges for each dimension.
* **mode**: `Literal["min", "max"]`, default="min" - Specifies whether the algorithm minimizes or maximizes the cost function.
* **seed**: `Optional[int]`, default=None - A seed for random number generation.

---

## Public Methods

### Function `optimize(...)`

```python
def optimize(
    self,
    max_iters: int = 50,
    n_iter_no_change=10, 
    verbose: bool = True
) -> npt.NDArray:
```

This method execute the optimization process and return the population.

**Input parameters:**
* **max_iters**: `int`, default=50 - The maximum number of interactions.
* **n_iter_no_change**: `int`, default=10 - The maximum number of iterations without an improvement in the best solution.
* **verbose**: `bool`, default=True - A flag to enable or disable detailed output during the optimization process.

**Returns:**
* `npt.NDArray`: The best antibody population after clonal expansion.

---

### Function `affinity_function(...)`

```python
def affinity_function(self, solution: npt.NDArray) -> np.float64:
```

This method evaluates the affinity of a candidate solution. It raises a `NotImplementedError` if no affinity function has been provided to the class instance.

**Input parameters:**
* **solution**: `npt.NDArray` - The candidate solution to be evaluated.

**Returns:**
* `np.float64`: The affinity value associated with the solution.

---

## Private Methods

### Function `_select_top_antibodies(...)`

```python
def _select_top_antibodies(self, n: int, antibodies: list[tuple]) -> list[tuple]:
```

This method selects the top `n` antibodies based on their affinity scores, according to the `mode` (`'min'` or `'max'`).

**Input parameters:**
* **n**: `int` - The number of antibodies to select.
* **antibodies**: `list[tuple]` - A list of tuples, where each tuple represents an antibody and its associated score.

**Returns:**
* `list[tuple]`: A list containing the `n` selected antibodies.

---

### Function `_init_population_antibodies(...)`

```python
def _init_population_antibodies(self) -> npt.NDArray:
```

This method initializes the initial population of antibodies randomly.

**Returns:**
* `npt.NDArray`: A list of the initialized antibodies.

---

### Function `_diversity_introduction(...)`

```python
def _diversity_introduction(self):
```

This method introduces new random antibodies into the population to maintain genetic diversity and help prevent premature convergence.

**Returns:**
* `npt.NDArray`: An array of new random antibodies.

---

### Function `_clone_and_mutate(...)`

```python
def _clone_and_mutate(self, antibody: npt.NDArray, n_clone: int, rate_hypermutation: float) -> npt.NDArray:
```

This method generates mutated clones from a single antibody. The mutation strategy depends on the `feature_type` specified during initialization (`'binary-features'`, `'continuous-features'`, `'ranged-features'`, or `'permutation-features'`).

**Input parameters:**
* **antibody**: `npt.NDArray` - The original antibody vector to be cloned and mutated.
* **n_clone**: `int` - The number of clones to generate.
* **rate_hypermutation**: `float` - The hypermutation rate.

**Returns:**

  * `npt.NDArray`: An array containing the mutated clones.

---

### Function `_clone_and_hypermutation(...)`

```python
def _clone_and_hypermutation(self, population: list[tuple]) -> list:
```

This method clones and hypermutates a population of antibodies. It returns a list of all clones and their affinities with respect to the cost function.

**Input parameters:**
* **population**: `list[tuple]` - The list of antibodies to be evaluated and cloned.

**Returns:**
* `list`: A list of mutated clones.