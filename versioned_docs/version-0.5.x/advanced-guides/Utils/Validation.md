# Validation

## def detect_vector_data_type(...)

```python
def detect_vector_data_type(
    vector: npt.NDArray
) -> FeatureType:
```

Detects the type of data in a given vector.

This function analyzes the input vector and classifies its data as one of the supported types:

* **binary**: Boolean values (`True`/`False`) or integer `0`/`1`.
* **continuous**: Float values within the normalized range `[0.0, 1.0]`.
* **ranged**: Float values outside the normalized range.

### Parameters

* `vector` (`npt.NDArray`): An array containing the data to be classified.

### Returns

* `FeatureType` (`Literal["binary-features", "continuous-features", "ranged-features"]`): The detected type of data in the vector.

### Raises

* `UnsupportedDataTypeError`: Raised if the vector contains an unsupported data type.

---

## def check_array_type(...)

```python
def check_array_type(x, name: str = "X") -> npt.NDArray:
```

Ensure X is a numpy array. Convert from list if needed.

### Parameters

* `x` (`Any`): Array, containing the samples and their characteristics, \[`N samples` (rows)\]\[`N features` (columns)\].
* `name` (`str`, default='X'): Variable name used in error messages.

### Returns

* `npt.NDArray`: The converted or validated array.

### Raises

* `TypeError`: If X or y are not ndarrays or have incompatible shapes.

---

## def check_shape_match(...)

```python
def check_shape_match(x: npt.NDArray, y: npt.NDArray):
```

Ensure X and y have compatible first dimensions.

### Parameters

* `x` (`npt.NDArray`): Array, containing the samples and their characteristics, \[`N samples` (rows)\]\[`N features` (columns)\].
* `y` (`npt.NDArray`): Array of target classes of `x` with [`N samples` (lines)].

### Raises

* `TypeError`: If x or y are not ndarrays or have incompatible shapes.

---

## def check_feature_dimension(...)

```python
def check_feature_dimension(x: npt.NDArray, expected: int):
```

Ensure X has the expected number of features.

### Parameters

* `x` (`npt.NDArray`): Input array for prediction, containing the samples and their characteristics, \[`N samples` (rows)\]\[`N features` (columns)\].
* `expected` (`int`): Expected number of features per sample (columns in X).

### Raises

* `FeatureDimensionMismatch`: If the number of features in X does not match the expected number.

---

## def check_binary_array(...)

```python
def check_binary_array(x: npt.NDArray):
```

Ensure X contains only 0 and 1.

### Raises

* `ValueError`: If feature_type is binary-features and X contains values that are not composed only of 0 and 1.
