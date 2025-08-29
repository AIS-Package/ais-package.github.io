---
last_update:
  date: 2025/05/17
  author: João Paulo
---

# Distance

Funções utilitárias para distância normalizada entre matrizes com decoradores numba.

## def hamming(...)

```python
def hamming(u: npt.NDArray, v: npt.NDArray) -> np.float64:
```

Função para calcular a distância de Hamming normalizada entre dois pontos.

    
$((x₁ ≠ x₂) + (y₁ ≠ y₂) + ... + (y_n ≠ y_n)) / n$


**Parameters:**
* u (``npt.NDArray``): Coordenadas do primeiro ponto
* v (``npt.NDArray``): Coordenadas do segundo ponto.

**Returns:**
* Distância (``float``) entre os dois pontos.

---

## def euclidean(...)

```python
def euclidean(u: npt.NDArray[np.float64], v: npt.NDArray[np.float64]) -> np.float64:
```

Função para calcular a distância euclidiana normalizada entre dois pontos.

$√( (x₁ – x₂)² + (y₁ – y₂)² + ... + (y_n – y_n)²)$



**Parameters:**
* u (``npt.NDArray``): Coordenadas do primeiro ponto
* v (``npt.NDArray``): Coordenadas do segundo ponto.

**Returns:**
* Distância (``float``) entre os dois pontos.

---

## def cityblock(...)

```python
def cityblock(u: npt.NDArray[np.float64], v: npt.NDArray[np.float64]) -> np.float64:
```

Função para calcular a distância Manhattan normalizada entre dois pontos.
    
$(|x₁ – x₂| + |y₁ – y₂| + ... + |y_n – y_n|) / n$


**Parameters:**
* u (``npt.NDArray``): Coordenadas do primeiro ponto
* v (``npt.NDArray``): Coordenadas do segundo ponto.

**Returns:**
* Distância (``float``) entre os dois pontos.

---

## def minkowski(...)

```python
def minkowski(u: npt.NDArray[np.float64], v: npt.NDArray[np.float64], p: float = 2.0):
```

Função para calcular a distância de Minkowski normalizada entre dois pontos.
    
$(( |X₁ – Y₁|p + |X₂ – Y₂|p + ... + |X_n – Y_n|p) ¹/ₚ) / n$


**Parameters:**
* u (``npt.NDArray``): Coordenadas do primeiro ponto.
* v (``npt.NDArray``): Coordenadas do segundo ponto.
* p (``float``): O parâmetro p define o tipo de distância a ser calculada:
    - p = 1: Distância **Manhattan** — soma das diferenças absolutas.
    - p = 2: Distância **Euclidiana** — soma das diferenças ao quadrado (raiz quadrada).
    - p > 2: Distância **Minkowski** com uma penalidade crescente à medida que p aumenta.

**Returns:**
* Distância (``float``) entre os dois pontos.

---

## def compute_metric_distance(...)

```python
def compute_metric_distance(
    u: npt.NDArray[np.float64],
    v: npt.NDArray[np.float64],
    metric: int,
    p: np.float64 = 2.0
) -> np.float64:
```

Função para calcular a distância entre dois pontos pela ``métrica`` escolhida.


**Parameters:**
* u (``npt.NDArray``): Coordenadas do primeiro ponto.
* v (``npt.NDArray``): Coordenadas do segundo ponto.
* metric (``int``): Métrica de distância a ser utilizada. Opções disponíveis: [0 (Euclidean), 1 (Manhattan), 2 (Minkowski)].
* p (``float``): Parâmetro da métrica de Minkowski (utilizado apenas se `metric` for "minkowski").
    

**Returns:**
* Distância (``double``) entre os dois pontos com a métrica selecionada.

---

## def min_distance_to_class_vectors(...)

```python
def min_distance_to_class_vectors(
    x_class: npt.NDArray,
    vector_x: npt.NDArray,
    metric: int,
    p: float = 2.0
) -> float:
```

Calcula a menor distância entre um vetor de entrada e os vetores de uma classe.

**Parameters:**
* x_class (``npt.NDArray``): Array contendo os vetores da classe com os quais o vetor de entrada será comparado. Formato esperado: (n_amostras, n_características).
* vector_x (``npt.NDArray``): Vetor a ser comparado com os vetores da classe. Formato esperado: (n_características,).
* metric (``int``): Métrica de distância a ser utilizada. Opções disponíveis: [0 (Euclidean), 1 (Manhattan), 2 (Minkowski)].
* p (``float``): Parâmetro da métrica de Minkowski (utilizado apenas se `metric` for "minkowski").

**Returns:**
* float: A menor distância calculada entre o vetor de entrada e os vetores da classe.
* Retorna -1.0 se as dimensões de entrada forem incompatíveis.

---

## def get_metric_code(...)

```python
def get_metric_code(metric: str) -> int:
```
Retorna o código numérico associado a uma métrica de distância.
  
**Parameters:**
* metric (``str``): Nome da métrica. Pode ser "euclidean", "manhattan", "minkowski" ou "hamming".


**Raises**
----------
* ``ValueError``: Se a métrica informada não for suportada.

**Returns:**
* ``int``: Código numérico correspondente à métrica.