---
sidebar_position: 1
title: Artificial Immune Network Base
sidebar_label: Artificial Immune Network
lastUpdatedAt: 2025/05/25
author: João Paulo
keywords:
  - AiNet
  - Immune Network Theory
  - Clustering
  - BaseAiNet
  - Artificial Immune Systems
  - Antibodies
---

Base class for Network Theory algorithms based on AiNet.

## ``BaseAiNet(BaseClusterer, ABC)``

The base class contains functions that are used by multiple classes in the AiNet package and
are considered essential for proper functioning of clustering algorithms based on immune network theory.

---

### def _check_and_raise_exceptions_fit(...)

Verify the fit parameters and throw exceptions if the verification is not successful.

```python
@staticmethod
def _check_and_raise_exceptions_fit(X: npt.NDArray)
```

**Parameters**:

* ***X*** (`npt.NDArray`): Training array, containing the samples and their characteristics, \[`N samples` (rows)]\[`N features` (columns)].

**Raises**:

* `TypeError`: If X is not an ndarray or list.

---

### def _check_and_raise_exceptions_predict(...)

Verify the predict parameters and throw exceptions if the verification is not successful.

```python
@staticmethod
def _check_and_raise_exceptions_predict(
    X: npt.NDArray,
    expected: int = 0,
    feature_type: FeatureType = "continuous-features"
) -> None
```

**Parameters**:

* ***X*** (`npt.NDArray`): Input array for prediction, containing the samples and their characteristics, \[`N samples` (rows)]\[`N features` (columns)].
* ***expected*** (`int`, default=0): Expected number of features per sample (columns in X).
* ***feature_type*** (`FeatureType`, default="continuous-features"): Specifies the type of features: "continuous-features", "binary-features", or "ranged-features".

**Raises**:

* `TypeError`: If X is not an ndarray or list.
* `FeatureDimensionMismatch`: If the number of features in X does not match the expected number.
* `ValueError`: If feature_type is "binary-features" and X contains values other than 0 and 1.

---

### def _generate_random_antibodies(...)

Generate a random antibody population.

```python
@staticmethod
def _generate_random_antibodies(
    n_samples: int,
    n_features: int,
    feature_type: FeatureType = "continuous-features",
    bounds: Optional[npt.NDArray[np.float64]] = None
) -> npt.NDArray
```

**Parameters**:

* ***n_samples*** (`int`): Number of antibodies (samples) to generate.
* ***n_features*** (`int`): Number of features (dimensions) for each antibody.
* ***feature_type*** (`FeatureType`, default="continuous-features"): Specifies the type of features: "continuous-features", "binary-features", or "ranged-features".
* ***bounds*** (`Optional[npt.NDArray[np.float64]]`): Array of shape (n_features, 2) with min and max per dimension (used only for ranged features).

**Returns**:

* `npt.NDArray`: Array of shape (n_samples, n_features) containing the generated antibodies.
  Data type depends on the feature_type (float for continuous/ranged, bool for binary).

**Raises**:

* `ValueError`: If n_features $<=$ 0.
