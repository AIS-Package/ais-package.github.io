---
id: rnsa
title: RNSA
sidebar_label: RNSA - Algoritmo de Seleção Negativa de Valor Real
sidebar_position: 1
last_update:
  date: 2025/05/17
  author: João Paulo
keywords:
  - Valor Real
  - classificação
  - anomalias
  - not self
  - V-detector
  - Algoritmo de Seleção Negativa
  - Sistema Imunológico Artificial (AIS)
  - Próprio e não-próprio
  - Imune
  - Computação Natural
---

# RNSA (Algoritmo de Seleção Negativa de Valor Real)

## Construtor RNSA:

A classe ``RNSA`` tem a finalidade de classificação e identificação de anomalias através do método self e not self . 

```python
class RNSA(
    self, 
    N: int = 100, 
    r: float = 0.05, 
    r_s: float = 0.0001, 
    k: int = 1, 
    metric: Literal['manhattan', 'minkowski', 'euclidean'] = 'euclidean', 
    max_discards: int = 1000, 
    seed: int = None, 
    algorithm: Literal['default-NSA', 'V-detector'] ='default-NSA', 
    **kwargs: Dict[str, Union[bool, str, float]]
)
```

**Attributes:**

* *N* (``int``): Quantidade de detectores. Defaults to ``100``.
* *r* (``float``): Raio do detector. Defaults to ``0.05``.
:::note
É importante considerar que definir um raio muito baixo para o detector pode reduzir significativamente a taxa de detecção. Por outro lado, um raio muito grande pode inviabilizar a incorporação do detector no espaço de busca, o que também pode comprometer o desempenho da detecção. É fundamental encontrar um equilíbrio entre o tamanho do raio e a eficiência da detecção para obter os melhores resultados possíveis.
:::


* *k* (``int``): Quantidade de vizinhos próximos dos detectores gerados aleatoriamente para efetuar o cálculo da média da distância. Defaults to ``1``.
* *metric* (``str``): Forma para se calcular a distância entre o detector e a amostra: 
    
    * ``'euclidiana'`` ➜ O cálculo da distância dá-se pela expressão:  $$\sqrt{(X_1 – X_1)^2 + (Y_2 – Y_2)^2 + ... + (Y_n – Y_n)^2}$$.
    * ``'minkowski'``  ➜ O cálculo da distância dá-se pela expressão: $$( |X_1 – Y_1|^p + |X_2 – Y_2|^p + ... |X_n – Y_n|^p)^\frac{1}{p}$$.
    * ``'manhattan'``  ➜ O cálculo da distância dá-se pela expressão:  $$( |X_1 – X_1| + |Y_2 – Y_2| + ... + |Y_n – Y_n|)$$.

    Defaults to ``'euclidean'``.

* *max_discards* (``int``): Este parâmetro indica o número máximo de descartes de detectores em sequência, que tem como objetivo evitar um 
possível loop infinito caso seja definido um raio que não seja possível gerar detectores do não-próprio. Defaults to ``1000``.

* *seed* (``int``): Semente para a geração randômica dos valores nos detectores. Defaults to ``None``.
* *algorithm* (``str``), Definir a versão do algoritmo:

    * ``'default-NSA'``: Algoritmo padrão com raio fixo.
    * ``'V-detector'``: Este algoritmo é baseado no artigo "[Real-Valued Negative Selection Algorithm with Variable-Sized Detectors](https://doi.org/10.1007/978-3-540-24854-5_30)", de autoria de Ji, Z., Dasgupta, D. (2004), e utiliza um raio variável para a detecção de anomalias em espaços de características.  

    Defaults to ``'default-NSA'``.

* *r_s* (``float``): O valor de ``rₛ`` é o raio das amostras próprias da matriz ``X``.
- ``**kwargs``:
    -  *non_self_label* (``str``): Esta variável armazena o rótulo que será atribuído quando os dados possuírem 
    apenas uma classe de saída, e a amostra for classificada como não pertencente a essa classe. Defaults to ``'non-self'``.
                    
    - *cell_bounds* (``bool``):  Se definido como ``True``, esta opção limita a geração dos detectores ao espaço do plano compreendido entre 0 e 1. Isso significa que qualquer detector cujo raio ultrapasse esse limite é descartado, e esta variável é usada exclusivamente no algoritmo ``V-detector``.
    - p (``float``): Este parâmetro armazena o valor de ``p`` utilizada na distância de Minkowski. O padrão é ``2``, o que significa distância euclidiana normalizada. Diferentes valores de p levam a diferentes variantes da distância de Minkowski [saiba mais](https://docs.scipy.org/doc/scipy/reference/generated/scipy.spatial.distance.minkowski.html).
        

**Outras variáveis iniciadas:**

* *detectors* (``dict``): Esta variável armazena uma lista de detectores por classe.

* *classes* (``npt.NDArray``): lista de classes de saída.

---

### Função fit(...)

A função ``fit(...)`` gera os detectores para os não próprios com relação às amostras:

```python
def fit(self, X: npt.NDArray, y: npt.NDArray, verbose: bool = True)
```
Nela é realizado o treinamento de acordo com ``X`` e ``y``, usando o método de seleção negativa(``NegativeSelect``).

**Os parâmetros de entrada são:**
* ``X``: array com as características das amostras com **N** amostras (linhas) e **N** características  (colunas), normalizados para valores entre [0, 1]. 
* ``y``: array com as classes de saídas disposto em **N** amostras que são relacionadas ao ``X``.
* ``verbose``: boolean com valor padrão ``True``, determina se o feedback da geração dos detectores será impresso.

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

### Função __checks_valid_detector(...)

A função ``def __checks_valid_detector(...)`` verifica se o detector possui raio ``r`` válido para o não-próprio da classe:

```python
def __checks_valid_detector(self, X: npt.NDArray, vector_x: npt.NDArray, samplesIndexClass: npt.NDArray) -> bool:
```

**Os parâmetros de entrada são:**
* ``X``: array com as características das amostras com **N** amostras (linhas) e **N** características  (colunas), normalizados para valores entre [0, 1].

* ``vector_x``: Detector candidato gerado aleatoriamente. 

* ``samplesIndexClass``: Array com os indexes de uma classe.

**Retorna:** Verdadeiro (``True``) para os detectores que não possuam amostras em seu interior ou falso (``False``) se possuir.

---

### Função __compare_KnearestNeighbors_List(...)

A função ``def __compare_KnearestNeighbors_List(...)`` compara a distância dos k-vizinhos mais próximo, para isso se a distância da nova amostra for menor, substitui ``k-1`` e ordena em ordem crescente:

```python
def __compare_KnearestNeighbors_List(self, knn: npt.NDArray, distance: float) -> npt.NDArray:
```

**Retorna:** uma lista com as distâncias dos k-vizinhos mais próximo.

---

### Função __compare_sample_to_detectors(...)

Função para comparar uma amostra com os detectores, verificando se a amostra é própria.


Nesta função, quando possui ambiguidade de classes, retorna a classe que possuir a média de distância maior entre os detectores.

**Os parâmetros de entrada são:**
* line: vetor com N-características

**Retorna:** A classe prevista com os detectores ou None se a amostra não se qualificar a nenhuma classe.
       
---

### Função __detector_is_valid_to_Vdetector(...)

Verifique se a distância entre o detector e as amostras, descontando o raio das amostras, é maior do que o raio mínimo.

```python
def __detector_is_valid_to_Vdetector(self, distance, vector_x):
```

**Os parâmetros de entrada são:**

* distance (``float``): distância mínima calculada entre todas as amostras.
* vector_x (``numpy.ndarray``): vetor x candidato do detector gerado aleatoriamente, com valores entre 0 e 1.

**Retorna:**

* ``False``: caso o raio calculado seja menor do que a distância mínima ou ultrapasse a borda do espaço, caso essa opção esteja habilitada.
* ``True`` e a distância menos o raio das amostras, caso o raio seja válido.

---

### Função __distance(...)

A função ``def __distance(...)`` calcula a distância entre dois pontos utilizando a técnica definida em ``metric``, no qual são: ``'euclidiana', 'minkowski', ou 'manhattan'``

```python
def __distance(self, u: npt.NDArray, v: npt.NDArray):
```

Os parâmetros de entrada são NDArrays: ``u`` e ``v``, com as coordenadas para os pontos.

Retorna a distancia (``double``) entre os dois pontos.

---

### Função __slice_index_list_by_class(...)

A função ``__slice_index_list_by_class(...)``, separa os índices das linhas conforme a classe de saída, para percorrer o array de amostra, apenas nas posições que a saída for a classe que está sendo treinada:

```python
def __slice_index_list_by_class(self, y: npt.NDArray) -> dict:
```

Retorna um dicionario com as classes como chave e os índices em ``X`` das amostras.

---