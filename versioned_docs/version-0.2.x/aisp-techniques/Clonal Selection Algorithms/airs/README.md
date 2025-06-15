---
id: airs
sidebar_label: AIRS - Artificial Immune Recognition System
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

# AIRS - Artificial Immune Recognition System

The ``AIRS`` class aims to perform classification using metaphors of selection and clonal expansion. 

This implementation is inspired by AIRS2, a simplified version of the original AIRS algorithm.
Introducing adaptations to handle continuous and binary datasets.

Based on Algorithm 16.5 from Brabazon et al. [1](#1).

:::tip Related and noteworthy works:

- [Artificial Immune Recognition System V2 - AZZOUG Aghiles](https://github.com/AghilesAzzoug/Artificial-Immune-System)

:::

:::info

**``AIRS``** extends the **[``_ABR`` class](abr)**, inheriting its base functionality.

:::

## AIRS Constructor:


**Attributes:**
* **n_resources** (``float``): Total amount of available resources. Defaults to 10.
* **rate_clonal** (``float``): Maximum number of possible clones of a class. This quantity is multiplied by (cell stimulus * rate_hypermutation) to define the number of clones. Defaults to 10.
* **rate_hypermutation** (``int``): The rate of mutated clones derived from rate_clonal as a scalar factor. Defaults to 0.75.
* **affinity_threshold_scalar** (``float``): Normalized affinity threshold. Defaults to 0.75.
* **k** (``int``): The number of K nearest neighbors that will be used to choose a label in the prediction. Defaults to 10.
* **max_iters** (``int``): Maximum number of interactions in the refinement process of the ARB set exposed to aᵢ. Defaults to 100.
* **resource_amplified** (``float``): Resource consumption amplifier is multiplied with the incentive to subtract resources. Defaults to 1.0 without amplification.
* **metric** (Literal["manhattan", "minkowski", "euclidean"]): Way to calculate the distance between the detector and the sample:
    * ``'Euclidean'`` ➜ The calculation of the distance is given by the expression: $$\sqrt{(X_{1} – X_{1})^2 + (Y_{2} – Y_{2})^2 + ... + (Y_{n} – Y_{n})^2}$$
    * ``'minkowski'`` ➜ The calculation of the distance is given by the expression: $$( |X_{1} – Y_{1}|^p + |X_{2} – Y_{2}|^p + ... |X_{n} – Y_{n}|^p)^\frac{1}{p}$$.
    * ``'manhattan'`` ➜ The calculation of the distance is given by the expression: $$( |X_{1} – X_{1}| + |Y_{2} – Y_{2}| + ... + |Y_{n} – Y_{n}|)$$.

    Defaults to **"Euclidean"**.
* **algorithm** (Literal["continuous-features", "binary-features"]): 
  Specifies the type of algorithm to use based on the nature of the input features:
    * ``continuous-features``: selects an algorithm designed for continuous data, which should
              be normalized within the range [0, 1].
    * ``binary-features``: selects an algorithm specialized for handling binary variables.

* **seed** (int): Seed for the random generation of detector values. Defaults to None.

- ``**kwargs``:
    - **p** (``float``): This parameter stores the value of ``p`` used in the Minkowski distance.
    The default is ``2``, which means normalized Euclidean distance. Different values of p lead to different variants of the Minkowski distance. [Learn more](https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.distance.minkowski.html).

**Other initialized variables:**
* **cells_memory** (``dict``): This variable stores a list of memory cells by class.
* **affinity_threshold** (``dict``): Defines the affinity threshold between antigens.
* **classes** (``npt.NDArray``): List of output classes.

---

## Public Methods

### Function fit(...)

The ``fit(...)`` function generates detectors for the non-owners relative to the samples:

```python
def fit(self, X: npt.NDArray, y: npt.NDArray):
```
It performs the training according to ``X`` and ``y``, using the method Artificial Immune Recognition System (``AIRS``).

**Input parameters:**
* **X**: Array with sample features, with **N** samples (rows) and **N** features (columns), normalized to values between [0, 1].
* **y**: Array with output classes corresponding to **N** samples related to ``X``.
* **verbose**: Boolean, default ``True``, determines if the feedback from the detector generation will be printed.

*Returns the class instance.*

---

### Function predict(...)

The ``predict(...)`` function performs class prediction using the generated detectors:

```python
def predict(self, X: npt.NDArray) -> npt.NDArray:
```

**Input parameter:**
* **X**: Array with the features for prediction, with **N** samples (rows) and **N** columns.

**Returns:**
* **C**: An array of predictions with the output classes for the given features.
* **None**: If there are no detectors.

---

### Function score(...):

The ``score(...)`` function calculates the accuracy of the trained model by making predictions and calculating the accuracy.

```python
def score(self, X: npt.NDArray, y: list) -> float:
```

Returns accuracy as a ``float``.

---

## Private Methods

### Function _refinement_arb(...):

The function "_refinement_arb(...)" refines the ARB set until the average stimulation value exceeds the defined threshold (``affinity_threshold_scalar``).

Parameters:
* **c_match** (``Cell``): Cell with the highest stimulation relative to aᵢ.
* **arb_list** (``List[_ARB]``): ARB set.

```python
def _refinement_arb(self, ai: npt.NDArray, c_match: Cell, arb_list: List[_ARB]) -> _ARB:
```

Returns the cell (_ARB) with the highest ARB stimulation.

---

### Function _cells_affinity_threshold(...):

The function "_cells_affinity_threshold(...)" calculates the affinity threshold based on the average affinity between training instances, where aᵢ and aⱼ are a pair of antigens, and affinity is measured by distance (Euclidean, Manhattan, Minkowski, Hamming).  
**Following the formula:**

$$
\text{affinity}_{\text{threshold}} = \frac{
\sum_{i=1}^{n-1} \sum_{j=i+1}^{n} \text{affinity}(a_i, a_j)}{n(n-1)/2}
$$

Parameters:
* **antigens_list** (``NDArray``): List of training antigens.

```python
def _cells_affinity_threshold(self, antigens_list: npt.NDArray):
```

---

### Function _affinity(...):

The function "_affinity(...)" calculates the stimulus between two vectors using metrics.

Parameters:
* **u** (``npt.NDArray``): Coordinates of the first point.
* **v** (``npt.NDArray``): Coordinates of the second point.

```python
def _affinity(self, u: npt.NDArray, v: npt.NDArray) -> float:
```

Returns the stimulus rate between the vectors.

---

### Function _init_memory_c(...):

The function "_init_memory_c(...)" initializes memory cells by randomly selecting `n_antigens_selected` from the list of training antigens.

Parameters:
* **antigens_list** (``NDArray``): List of training antigens.

```python
def _init_memory_c(self, antigens_list: npt.NDArray) -> List[Cell]:
```

---


# References

---

##### 1
> BRABAZON, Anthony; O’NEILL, Michael; MCGARRAGHY, Seán. Natural Computing Algorithms. [S. l.]: Springer Berlin Heidelberg, 2015. DOI 10.1007/978-3-662-43631-8. Disponível em: http://dx.doi.org/10.1007/978-3-662-43631-8.