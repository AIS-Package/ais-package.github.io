---
id: airs
sidebar_label: AIRS - Sistema Imunológico Artificial de Reconhecimento
keywords:
  - Binário
  - Classificação
  - Limiar de Afinidade
  - Valores Reais
  - Anomalias
  - K-Vizinhos Mais Próximos
lastUpdatedAt: 2025/08/22
author: João Paulo
---

# AIRS - Sistema Imunológico Artificial de Reconhecimento

O ``AIRS`` é um algoritmo de classificação inspirado no processo de seleção clonal. A versão implementada nesta classe é inspirada na sua versão simplificada, o AIRS2, descrito em[Brabazon, O'Neill, and McGarraghy (2015)](#1)


Esta implementação é inspirada no AIRS2, uma versão simplificada do algoritmo AIRS original, introduzindo adaptações para lidar com conjuntos de dados contínuos e binários.

Com base no algoritmo 16.5 de Brabazon et al. [1](#1).

:::tip Trabalhos relacionados e notáveis:

- [Artificial Immune Recognition System V2 - AZZOUG Aghiles](https://github.com/AghilesAzzoug/Artificial-Immune-System)

:::

:::info

**``AIRS``** estende a classe **[``_ABR``](abr)**, herdando sua funcionalidade base.

:::

## Construtor AIRS:

A classe `AIRS` tem como objetivo realizar classificação utilizando metáforas de seleção e expansão clonal.

**Atributos:**

* **n_resources** (`float`): Quantidade total de recursos disponíveis. O padrão é 10.

* **rate_clonal** (`float`): Número máximo de clones possíveis de uma classe. Esta quantidade é multiplicada por (estímulo da célula * taxa de hipermutação) para definir o número de clones. O padrão é 10.

* **rate_hypermutation** (`int`): Taxa de clones mutados derivada de rate_clonal como um fator escalar. O padrão é 0,75.

* **affinity_threshold_scalar** (`float`): Limiar de afinidade normalizado. O padrão é 0,75.

* **k** (`int`): Número de vizinhos mais próximos (k-NN) que será usado para escolher um rótulo na predição. O padrão é 10.

* **max_iters** (`int`): Número máximo de interações no processo de refinamento do conjunto ARB exposto a aᵢ. O padrão é 100.

* **resource_amplified** (`float`): Amplificador de consumo de recursos, multiplicado com o estímulo para subtrair recursos. O padrão é 1.0 (sem amplificação).

* **metric** (Literal["manhattan", "minkowski", "euclidean"]): Forma de calcular a distância entre o detector e a amostra:

    * ``'euclidiana'`` ➜ O cálculo da distância dá-se pela expressão:  $$\sqrt{(X_1 - X_1)^2 + (Y_2 - Y_2)^2 + ... + (Y_n - Y_n)^2}$$.
    * ``'minkowski'``  ➜ O cálculo da distância dá-se pela expressão: $$( |X_1 - Y_1|^p + |X_2 - Y_2|^p + ... |X_n - Y_n|^p)^\frac{1}{p}$$.
    * ``'manhattan'``  ➜ O cálculo da distância dá-se pela expressão:  $$( |X_1 - X_1| + |Y_2 - Y_2| + ... + |Y_n - Y_n|)$$.

    Defaults to ``'euclidean'``.

* **seed** (``Optional[int]``): Semente para geração aleatória de valores dos detectores. O padrão é None.

- `**kwargs`:

  * **p** (`float`): Este parâmetro armazena o valor de `p` usado na distância de Minkowski.
    O padrão é `2`, que corresponde à distância euclidiana normalizada. Diferentes valores de p resultam em variantes distintas da distância de Minkowski. [Saiba mais](https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.distance.minkowski.html).

**Outras variáveis inicializadas:**

* **cells_memory** (`dict`): Armazena uma lista de células de memória por classe.
* **affinity_threshold** (`dict`): Define o limiar de afinidade entre antígenos.
* **classes** (`npt.NDArray`): Lista de classes de saída.

---

## Métodos Públicos

### Método fit(...)

A função `fit(...)` gera detectores para os não-pertencentes em relação às amostras:

```python
def fit(self, X: npt.NDArray, y: npt.NDArray):
```

Realiza o treinamento conforme `X` e `y`, utilizando o método Sistema de Reconhecimento Imune Artificial (`AIRS`).

**Parâmetros de entrada:**

* **X**: Array com as características das amostras, com **N** amostras (linhas) e **N** características (colunas), normalizado para valores entre [0, 1].
* **y**: Array com as classes de saída correspondentes às **N** amostras relacionadas a `X`.
* **verbose**: Booleano, padrão `True`, determina se o feedback da geração dos detectores será impresso.

*Retorna a instância da classe.*

---

### Método predict(...)

A função `predict(...)` realiza a predição de classes utilizando os detectores gerados:

```python
def predict(self, X: npt.NDArray) -> npt.NDArray:
```

**Parâmetro de entrada:**

* **X**: Array com as características para predição, com **N** amostras (linhas) e **N** colunas.

**Retorna:**

* **C**: Um array de predições com as classes de saída para as características fornecidas.
* **None**: Se não houver detectores.

---

### Método score(...):

A função `score(...)` calcula a acurácia do modelo treinado realizando predições e calculando a precisão.

```python
def score(self, X: npt.NDArray, y: list) -> float:
```

Retorna a acurácia como um `float`.

---

## Métodos Privados

### Método _refinement_arb(...):

A função "_refinement_arb(...)" refina o conjunto ARB até que o valor médio de estímulo ultrapasse o limiar definido (`affinity_threshold_scalar`).

Parâmetros:

* **c_match** (`Cell`): Célula com o maior estímulo em relação a aᵢ.
* **arb_list** (`List[_ARB]`): Conjunto ARB.

```python
def _refinement_arb(self, ai: npt.NDArray, c_match: Cell, arb_list: List[_ARB]) -> _ARB:
```

Retorna a célula (_ARB) com o maior estímulo ARB.

---

### Método _cells_affinity_threshold(...):

A função "_cells_affinity_threshold(...)" calcula o limiar de afinidade com base na afinidade média entre instâncias de treinamento, onde aᵢ e aⱼ são um par de antígenos, e a afinidade é medida pela distância (Euclidiana, Manhattan, Minkowski, Hamming).
**Seguindo a fórmula:**

$$
\text{affinity}_{\text{threshold}} = \frac{
\sum_{i=1}^{n-1} \sum_{j=i+1}^{n} \text{affinity}(a_i, a_j)}{n(n-1)/2}
$$

Parâmetros:

* **antigens_list** (`NDArray`): Lista de antígenos de treinamento.

```python
def _cells_affinity_threshold(self, antigens_list: npt.NDArray):
```

---

### Método _affinity(...):

A função "_affinity(...)" calcula o estímulo entre dois vetores usando métricas.

Parâmetros:

* **u** (`npt.NDArray`): Coordenadas do primeiro ponto.
* **v** (`npt.NDArray`): Coordenadas do segundo ponto.

```python
def _affinity(self, u: npt.NDArray, v: npt.NDArray) -> float:
```

Retorna a taxa de estímulo entre os vetores.

---

### Método _init_memory_c(...):

A função "_init_memory_c(...)" inicializa células de memória selecionando aleatoriamente `n_antigens_selected` da lista de antígenos de treinamento.

Parâmetros:

* **antigens_list** (`NDArray`): Lista de antígenos de treinamento.

```python
def _init_memory_c(self, antigens_list: npt.NDArray) -> List[Cell]:
```

---


# Referências

---

##### 1
> BRABAZON, Anthony; O'NEILL, Michael; MCGARRAGHY, Seán. Natural Computing Algorithms. [S. l.]: Springer Berlin Heidelberg, 2015. DOI 10.1007/978-3-662-43631-8. Disponível em: http://dx.doi.org/10.1007/978-3-662-43631-8.