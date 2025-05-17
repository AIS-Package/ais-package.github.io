---
id: bnsa
title: BNSA
sidebar_label: BNSA - Binary Negative Selection Algorithm
sidebar_position: 2
pagination_next: null
keywords:
  - Binary
  - classifying
  - anomalies
  - not self
  - affinity threshold
  - Negative Selection Algorithm
  - Artificial Immune System (AIS)
  - Self and non-self
  - Immune
  - Computação Natural
  - Real-Valued
  - V-detector
last_update:
  date: 2025/05/17
  author: João Paulo
---

# BNSA (Binary Negative Selection Algorithm)

## Constructor RNSA:

The ``BNSA`` (Binary Negative Selection Algorithm) class has the purpose of classifying and identifying anomalies through the self and not self methods.

``` python
class BNSA(
    self,
    N: int = 100,
    aff_thresh: float = 0.1,
    max_discards: int = 1000,
    seed: int = None,
    no_label_sample_selection: Literal[
        "max_average_difference", "max_nearest_difference"
    ] = "max_average_difference",
)
```

**Attributes:**

* *N* (``int``): Number of detectors. Defaults to ``100``.
* *aff_thresh* (``float``): The variable ('affinity threshold') represents the percentage of dissimilarity between the T cell and the own samples. The default value is 10% (0.1), while a value of 1.0 represents 100% dissimilarity.
:::note
Setting the difference percentage too high can result in the inability to generate detectors for non-self.
:::

* *max_discards* (``int``): This parameter indicates the maximum number of detector discards in sequence, which aims to avoid a
possible infinite loop if a radius is defined that it is not possible to generate non-self detectors. Defaults to ``1000``.
* *seed* (``int``): Seed for the random generation of values in the detectors. Defaults to ``None``.
* no_label_sample_selection (``str``): Method for selecting labels for samples designated as non-members by all non-member detectors. **Available method types:**
    - (``max_average_difference``): Selects the class with the highest average difference among the detectors.
    - (``max_nearest_difference``): Selects the class with the highest difference between the nearest and farthest detector from the sample.

**Other variables initiated:**

* *detectors* (``dict``): This variable stores a list of detectors by class.

* *classes* (``npt.NDArray``): list of output classes.


---


### Function fit(...)

The ``fit(...)`` function generates the detectors for non-fits with respect to the samples:

```python
def fit(self, X: npt.NDArray, y: npt.NDArray, verbose: bool = True)
```

In it, training is performed according to ``X`` and ``y``, using the negative selection method(``NegativeSelect``).

**The input parameters are:** 
* ``X``: array with the characteristics of the samples with **N** samples (rows) and **N** characteristics (columns). 

* ``y``: array with the output classes arranged in **N** samples that are related to ``X``.

* ``verbose``: boolean with default value ``True``, determines if the feedback from the detector generation will be printed.

*Returns the instance of the class.*

---

### Function predict(...)

The ``predict(...)`` function performs class prediction using the generated detectors:

```python
def predict(self, X: npt.NDArray) -> npt.NDArray:
```

**The input parameter is:** 
* ``X``: array with the characteristics for the prediction, with **N** samples (Rows) and **N** columns.

**Returns:** 
* ``C``: prediction array, with the output classes for the given characteristics.
* ``None``: if there are no detectors.

---

### Function score(...)

The function ``score(...)`` calculates the accuracy of the trained model by making predictions and computing accuracy.

```python
def score(self, X: npt.NDArray, y: list) -> float:
```

It returns the accuracy as a float type.

---

## Private Methods

---

### Function __assign_class_to_non_self_sample(...)

The function ``__assign_class_to_non_self_sample(...)``, determines the class of a sample when all detectors classify it as "non-self". Classification is performed using the ``max_average_difference`` and ``max_nearest_difference`` methods.

```python
def __assign_class_to_non_self_sample(self, line: npt.NDArray, c: list):
```

**The input parameter is:** 
* ***line*** (``npt.NDArray``): Sample to be classified.
* ***c*** (``list``): List of predictions to be updated with the new classification.

---