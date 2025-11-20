---
sidebar_position: 1
title: Classe Base
sidebar_label: Base
lastUpdatedAt: 2025/08/19
author: João Paulo
keywords:
  - Classe Base
  - Modelo Base
  - Compatibilidade com Scikit-learn
  - get_params
  - set_params
  - Semente Aleatória
  - Classes Python
---

Classe base para compatibilidade com a API do scikit-learn.

Fornece os métodos `get_params` e `set_params` para compatibilidade com a API do scikit-learn, permitindo acesso aos parâmetros públicos do modelo.

### Função set_params(...)

```python
def set_params(self, **params)
```

Define os parâmetros da instância. Garante compatibilidade com funções do scikit-learn.

**Parâmetros**:

* **params**: dict - Dicionário de parâmetros que serão definidos como atributos da instância. Apenas atributos públicos (que não começam com "_") são modificados.

**Retorno**:

* self: `Base` - Retorna a própria instância após definir os parâmetros.

---

### Função get_params(...)

```python
def get_params(self, deep: bool = True) -> dict
```

Retorna um dicionário com os principais parâmetros do objeto. Garante compatibilidade com funções do scikit-learn.

**Parâmetros**:

* **deep**: `bool` (padrão=True) - Ignorado nesta implementação, mas incluído para compatibilidade com scikit-learn.

**Retorno**:

* params: `dict` - Dicionário contendo os atributos do objeto que não começam com "_".

---

## Funções utilitárias

### Função set_seed_numba(...)

```python
@njit(cache=True)
def set_seed_numba(seed: int)
```

Define a semente para números aleatórios usados por funções compiladas com Numba.

**Parâmetros**:

* **seed**: `int` - Valor inteiro usado para inicializar o gerador de números aleatórios do Numba.
