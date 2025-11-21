# Random

Funções utilitárias para geração e reprodutibilidade de números aleatórios.

## Função set_seed_numba(...)

```python
@njit(cache=True)
def set_seed_numba(seed: int)
```

Define a semente para números aleatórios usados por funções compiladas com Numba.

**Parâmetros**:

* **seed**: `int` - Valor inteiro usado para inicializar o gerador de números aleatórios do Numba.