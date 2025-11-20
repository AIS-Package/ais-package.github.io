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

Parameters
---

* classes (``list or npt.NDArray``): lista com classes únicas.
* y (npt.NDArray): Recebe um array ``y``[``N amostra``] com as classes de saída do \
    array de amostra ``X``.

Returns
---

* dict: Um dicionário com a lista de posições do array(``y``), com as classes como chave.
