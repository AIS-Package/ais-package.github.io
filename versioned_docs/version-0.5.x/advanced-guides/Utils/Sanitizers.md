---
last_update:
  date: 2025/05/17
  author: João Paulo
---

# Sanitizers

## def sanitize_choice(...)

```python
def sanitize_choice(value: T, valid_choices: Iterable[T], default: T) -> T
```

The function ``sanitize_choice(...)``, returns the value if it is present in the set of valid choices; otherwise, returns the default value.

**Parameters:**

* ***value*** (``T``): The value to be checked.
* ***valid_choices*** (``Iterable[T]``): A collection of valid choices.
* ***default***:  The default value to be returned if ``value`` is not in ``valid_choices``.

**Returns:**

* `T`: The original value if valid, or the default value if not.

---

## def sanitize_param(...)

```python
def sanitize_param(value: T, default: T, condition: Callable[[T], bool]) -> T:
```

The function ``sanitize_param(...)``, returns the value if it satisfies the specified condition; otherwise, returns the default value.

**Parameters:**

* value (``T``): The value to be checked.
* default (``T``): The default value to be returned if the condition is not satisfied.
* condition (``Callable[[T], bool]``): A function that takes a value and returns a boolean, determining if the value is valid.

**Returns:**

* `T`: The original value if the condition is satisfied, or the default value if not.

---

## def sanitize_seed(...)

```python
def sanitize_seed(seed: Any) -> Optional[int]:
```

The function ``sanitize_param(...)``, returns the seed if it is a non-negative integer; otherwise, returns None.

**Parameters:**

* seed (``Any``): The seed value to be validated.

**Returns:**

* ``Optional[int]``: The original seed if it is a non-negative integer, or ``None`` if it is invalid.

---

## def sanitize_bounds(...)

```python
def sanitize_bounds(
    bounds: Any, 
    problem_size: int
) -> Dict[str, npt.NDArray[np.float64]]
```

The function ``sanitize_bounds(...)``, validate and normalize feature bounds.

**Parameters:**

* ***bounds*** (``Any``): he input bounds, which must be either None or a dictionary with 'low' and 'high' keys.
* ***problem_size*** (``int``): The expected length for the normalized bounds lists, corresponding to the number of features in the problem.

**Returns:**

* `Dict[str, list]`: Dictionary ``{'low': [low_1, ..., low_N], 'high': [high_1, ..., high_N]}``.
