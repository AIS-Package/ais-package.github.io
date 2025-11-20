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

**Parameters**

* `vector` (`npt.NDArray`): An array containing the data to be classified.

**Returns**

* `FeatureType` (`Literal["binary-features", "continuous-features", "ranged-features"]`): The detected type of data in the vector.

**Raises**

* `UnsupportedDataTypeError`: Raised if the vector contains an unsupported data type.
