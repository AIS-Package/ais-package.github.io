---
sidebar_position: 1
title: Classification
sidebar_label: BaseClassifier
last_update:
  date: 2025/05/17
  author: João Paulo
---

# Classe base para algoritmo de classificação.

## ``class BaseClassifier(ABC)``:

Classe base para algoritmos de classificação, definindo os métodos abstratos ``fit`` e ``predict``, e implementando o método ``get_params``.

## Abstract methods


### def fit(...)

```python
def fit(self, X: npt.NDArray, y: npt.NDArray, verbose: bool = True)
```

Ajusta o modelo aos dados de treinamento.

Implementação:

- [RNSA](/docs/aisp-techniques/negative-selection/rnsa#função-fit)
- [BNSA](/docs/aisp-techniques/negative-selection/bnsa#função-fit)
- [AIRS](/docs/aisp-techniques/clonal-selection-algorithms/airs/#método-fit)

### def predict(...)

```python
def predict(self, X) -> Optional[npt.NDArray]:
```

Realiza a previsão dos rótulos para os dados fornecidos.

Implementação:

- [RNSA](/docs/aisp-techniques/negative-selection/rnsa#função-predict)
- [BNSA](/docs/aisp-techniques/negative-selection/bnsa#função-predict)
- [AIRS](/docs/aisp-techniques/clonal-selection-algorithms/airs/#método-predict)

---

## Métodos

### def score(...)

```python
def score(self, X: npt.NDArray, y: list) -> float
```

A função de pontuação (score) calcula a precisão da previsão.

Esta função realiza a previsão de X e verifica quantos elementos são iguais entre o vetor y e y_predicted. 
Esta função foi adicionada para compatibilidade com algumas funções do scikit-learn.

**Parâmetros**:
+ ***X***: np.ndarray
    Conjunto de características com formato (n_amostras, n_características).
+ ***y***: np.ndarray
    Valores verdadeiros com formato (n_amostras,).

**Retorna**:

+ precisão: float
    A precisão do modelo.

---

### Método _slice_index_list_by_class(...):

A função ``_slice_index_list_by_class(...)``, separa os índices das linhas conforme a classe de saída, para percorrer o array de amostra, apenas nas posições que a saída for a classe que está sendo treinada:

```python
def _slice_index_list_by_class(self, y: npt.NDArray) -> dict:
```

Retorna um dicionário com as classes como chave e os índices em ``X`` das amostras.

---

### def get_params(...)

```python
def get_params(self, deep: bool = True) -> dict:
```
A função get_params retorna um dicionário com os parâmetros principais do objeto.

Esta função é necessária para garantir a compatibilidade com as funções do scikit-learn.
