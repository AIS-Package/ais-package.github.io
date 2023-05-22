---
id: bnsa
title: BNSA
sidebar_label: BNSA - Algoritmo de Seleção Negativa Binária
sidebar_position: 2
pagination_next: null
keywords:
  - Binário
  - classificação
  - anomalias
  - not self
  - affinity threshold
---

# BNSA (Algoritmo de Seleção Negativa Binária).

A classe ``BNSA`` tem a finalidade de classificação e identificação de anomalias através do método self e not self . 

```python
class BNSA(
  self, 
  N: int = 100, 
  aff_thresh: float = 0.1, 
  max_discards: int = 100, 
  seed: int = None
)
```


**Attributes:**
* *N* (``int``): Quantidade de detectores. Defaults to ``100``.
* *aff_thresh* (``float``): A variável ('affinity threshold') representa a porcentagem de não similaridade entre a célula T e as amostras próprias. O valor padrão é de 10% (0,1), enquanto que o valor de 1,0 representa 100% de não similaridade.
:::note
Definir uma porcentagem de diferença muito alta pode resultar na incapacidade de gerar detectores para não-próprio.
:::

* *max_discards* (``int``): Este parâmetro indica o número máximo de descartes de detectores em sequência, que tem como objetivo evitar um 
possível loop infinito caso seja definido um raio que não seja possível gerar detectores do não-próprio. Defaults to ``100``.
* *seed* (``int``): Semente para a geração randômica dos valores nos detectores. Defaults to ``None``.

**Outras variáveis iniciadas:**

* *detectors* (``dict``): Esta variável armazena uma lista de detectores por classe.

* *classes* (``npt.NDArray``): lista de classes de saída.

### Função fit(...)

A função ``fit(...)`` gera os detectores para os não próprios com relação às amostras:

```python
def fit(self, X: npt.NDArray, y: npt.NDArray):
```
Nela é realizado o treinamento de acordo com ``X`` e ``y``, usando o método de seleção negativa(``NegativeSelect``).

**Os parâmetros de entrada são:**
* ``X``: array com as características das amostras com **N** amostras (linhas) e **N** características  (colunas), normalizados para valores entre [0, 1]. 
* ``y``: array com as classes de saídas disposto em **N** amostras que são relacionadas ao ``X``.
* ``verbose``: booleano com valor default ``True``, determina se o feedback da geração dos detectores será printado.

*Retorna a instância da classe.*

---

### Função predict(...)

A função ``predict(...)`` realiza a previsão das classes utilizando os detectores gerados:

```python
def predict(self, X: npt.NDArray) -> npt.NDArray:
```

**O parâmetro de entrada:**
 
* ``X``: array  com as características para a previsão, com **N** amostras (Linhas) e **N** colunas.

**Retorna:** 
* ``C``: Um array de previsão com as classes de saída para as características informadas. 
* ``None``: se não houver detectores.

---

### Função score(...)

A função "score(...)" calcula a precisão do modelo treinado por meio da realização de previsões e do cálculo da acurácia.

```python
def score(self, X: npt.NDArray, y: list) -> float:
```

retorna a acurácia, do tipo ``float``.

---

## Métodos privados

---

### Função __slice_index_list_by_class(...)

A função ``__slice_index_list_by_class(...)``, separa os índices das linhas conforme a classe de saída, para percorrer o array de amostra, apenas nas posições que a saída for a classe que está sendo treinada:

```python
def __slice_index_list_by_class(self, y: npt.NDArray) -> dict:
```

Retorna um dicionario com as classes como chave e os índices em ``X`` das amostras.

---