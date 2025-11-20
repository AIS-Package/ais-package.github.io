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

**Parâmetros**

* `vetor` (`npt.NDArray`): Um array contendo os dados a serem classificados.

**Returns:**

* `FeatureType` (`Literal["binary-features", "continuous-features", "ranged-features"]`): O tipo de dado detectado no vetor.

**Lança**

* `UnsupportedDataTypeError`: Gerado se o vetor contiver um tipo de dado não suportado.
