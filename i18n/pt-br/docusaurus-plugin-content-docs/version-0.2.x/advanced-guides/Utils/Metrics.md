---
sidebar_position: 1
title: Métricas 
sidebar_label: Metrics
lastUpdatedAt: 2025/04/04
author: João Paulo
---

O arquivo de métricas fornece utilitários para medir, analisar e comparar o desempenho dos algoritmos do pacote de forma padronizada.

### def accuracy_score(...)

```python
def accuracy_score(
    y_true: Union[npt.NDArray, list],
    y_pred: Union[npt.NDArray, list]
) -> float
```

Função para calcular a acurácia de precisão com base em listas de rótulos
verdadeiros e nos rótulos previstos.

Parâmetros
---

* y_true (``Union[npt.NDArray, list]``): Rótulos verdadeiros (corretos)..
* y_pred (``Union[npt.NDArray, list]``): Rótulos previstos.

Retornos
---

* Precisão (``float``): A proporção de previsões corretas em relação
ao número total de previsões.

Lança
---

* ValueError: Se `y_true` ou `y_pred` estiverem vazios ou se não
tiverem o mesmo tamanho.

---
