# Validation

## def detect_vector_data_type(...)

```python
def detect_vector_data_type(
    vector: npt.NDArray
) -> FeatureType:
```

Detecta o tipo de dado em um determinado vetor.

Esta função analisa o vetor de entrada e classifica seus dados como um dos tipos suportados:

* **binário**: Valores booleanos (`True`/`False`) ou inteiro `0`/`1`.
* **contínuo**: Valores float dentro do intervalo normalizado `[0.0, 1.0]`.
* **intervalo**: Valores float fora do intervalo normalizado.

### Parâmetros

* `vetor` (`npt.NDArray`): Um array contendo os dados a serem classificados.

### Retorna

* `FeatureType` (`Literal["binary-features", "continuous-features", "ranged-features"]`): O tipo de dado detectado no vetor.

### Gera

* `UnsupportedDataTypeError`: Gerado se o vetor contiver um tipo de dado não suportado.

---

## def check_array_type(...)

```python
def check_array_type(x, name: str = "X") -> npt.NDArray:
```

Garante que o parâmetro recebido é um array numpy. Converte de lista se necessário.

**Parâmetros:**

* `x`: Array ou lista contendo as amostras e características.
* `name`: Nome da variável para mensagens de erro.

**Retorna:**

* `npt.NDArray`: O array convertido ou validado.

**Lança:**

* `TypeError`: Se não for possível converter para ndarray.

---

## def check_shape_match(...)

```python
def check_shape_match(x: npt.NDArray, y: npt.NDArray):
```

Garante que os arrays `x` e `y` possuem o mesmo número de amostras (primeira dimensão).

**Parâmetros:**

* `x`: Array de amostras.
* `y`: Array de classes alvo.

**Lança:**

* `TypeError`: Se as dimensões não forem compatíveis.

---

## def check_feature_dimension(...)

```python
def check_feature_dimension(x: npt.NDArray, expected: int):
```

Garante que o array possui o número esperado de características (features).

**Parâmetros:**

* `x`: Array de entrada para predição.
* `expected`: Número esperado de características por amostra.

**Lança:**

* `FeatureDimensionMismatch`: Se o número de características não corresponder ao esperado.

---

## def check_binary_array(...)

```python
def check_binary_array(x: npt.NDArray):
```

Garante que o array contém apenas valores 0 e 1.

**Parâmetros:**

* `x`: Array a ser verificado.

**Lança:**

* `ValueError`: Se o array contiver valores diferentes de 0 e 1.
