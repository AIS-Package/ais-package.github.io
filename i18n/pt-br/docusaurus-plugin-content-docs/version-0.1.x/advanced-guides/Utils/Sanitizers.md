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

A função ``sanitize_choice(...)``, retorna o valor se estiver presente no conjunto de opções válidas; caso contrário, retorna o valor padrão.

**Parameters:**

* ***value*** (``T``): O valor a ser verificado.
* ***valid_choices*** (``Iterable[T]``): Uma coleção de opções válidas.
* ***default***: O valor padrão a ser retornado se ``value`` não estiver em ``valid_choices``.

**Returns:**

* `T`: O valor original, se válido, ou o valor padrão, se não.

---

## def sanitize_param(...)

```python
def sanitize_param(value: T, default: T, condition: Callable[[T], bool]) -> T:
```

A função ``sanitize_param(...)``, retorna o valor se ele satisfizer a condição especificada; caso contrário, retorna o valor padrão.

**Parameters:**

* value (``T``): O valor a ser verificado.
* default (``T``): O valor padrão a ser retornado se a condição não for satisfeita.
* condition (``Callable[[T], bool]``): Uma função que recebe um valor e retorna um booleano, determinando se o valor é válido.

**Returns:**

* `T`: O valor original se a condição for satisfeita, ou o valor padrão se não for.

---

## def sanitize_seed(...)

```python
def sanitize_seed(seed: Any) -> Optional[int]:
```

A função ``sanitize_param(...)``, retorna a semente se for um inteiro não negativo; caso contrário, retorna Nenhum.

**Parameters:**

* seed (``Any``): O valor da seed a ser validado.

**Returns:**

* ``Optional[int]``: A seed original se for um inteiro não negativo, ou ``None`` se for inválido.
