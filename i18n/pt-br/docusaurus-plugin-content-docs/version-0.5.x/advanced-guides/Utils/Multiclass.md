---
sidebar_position: 1
title: Multiclasse
sidebar_label: Multiclass
lastUpdatedAt: 2025/04/04
author: João Paulo
---

Este arquivo contém funções utilitárias internas desenvolvidas para simplificar a manipulação e o processamento de dados em cenários de classificação multiclasse dentro do pacote AISP.

### def slice_index_list_by_class(...)

```python
def slice_index_list_by_class(classes: Union[npt.NDArray, list], y: npt.NDArray) -> dict
```

A função ``slice_index_list_by_class(...)``, separa os índices das linhas conforme a \
classe de saída, para percorrer o array de amostra, apenas nas posições que a saída for \
a classe que está sendo treinada.

**Parameters:**

* classes (``list or npt.NDArray``): lista com classes únicas.
* y (npt.NDArray): Recebe um array ``y``[``N amostra``] com as classes de saída do \
    array de amostra ``X``.

**Returns:**

* dict: Um dicionário com a lista de posições do array(``y``), com as classes como chave.

---

### def predict_knn_affinity(...)

Função para prever classes usando k-vizinhos mais próximos e células treinadas.

```python
def predict_knn_affinity(
    X: npt.NDArray,
    k: int,
    all_cell_vectors: List[Tuple[Union[str, int], npt.NDArray]],
    affinity_func: Callable[[npt.NDArray, npt.NDArray], float]
) -> npt.NDArray
```

**Parâmetros:**

* **_X_** (`npt.NDArray`): Dados de entrada a serem classificados.
* **_k_** (`int`): Número de vizinhos mais próximos a considerar para a previsão.
* **_all_cell_vectors_** (`List[Tuple[Union[str, int], npt.NDArray]]`): Lista de tuplas contendo pares (nome_da_classe, vetor_da_célula).
* **_affinity_func_** (`Callable[[npt.NDArray, npt.NDArray], float]`): Função que recebe dois vetores e retorna um valor de afinidade.

**Retorna:**

* `npt.NDArray`: Array de rótulos previstos para cada amostra em X, baseado nos k vizinhos mais próximos.