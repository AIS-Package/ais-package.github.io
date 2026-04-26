---
id: api
sidebar_position: 5
sidebar_label: api
keywords:
    - api
    - aisp
    - Artificial Immune System Package
    - classification
    - optimization
    - clustering
    - classificação
    - otimização
    - clusterização
---

# AISP - API

Bem-vindo à API do **AISP** (Artificial Immune System Package). Esta documentação demonstra a API pública do pacote.

## Módulos Principais ([`aisp.base`](./base/README.md))

Abstrações fundamentais e classes base que definem as interfaces principais do pacote.

| Classe                                         | Descrição                                         |
|-----------------------------------------------|---------------------------------------------------|
| [`BaseClassifier`](./base/base-classifier.md) | Classe base abstrata para algoritmos de classificação. |
| [`BaseClusterer`](./base/base-clusterer.md)   | Classe base abstrata para algoritmos de agrupamento.   |
| [`BaseOptimizer`](./base/base-optimizer.md)   | Classe base abstrata para algoritmos de otimização.   |

### Componentes do Domínio Imunológico ([`aisp.base.immune`](./base/immune/README.md))

Estruturas principais e utilitários de suporte para implementações imunológicas.

| Módulo                                        | Descrição                                                                                   |
|-----------------------------------------------|---------------------------------------------------------------------------------------------|
| [`cell`](./base/immune/cell/README.md)        | Representação de células do sistema imunológico.                                           |
| [`mutation`](./base/immune/mutation.md)       | Funções para gerar clones mutados e simular a expansão clonal.                             |
| [`populations`](./base/immune/populations.md) | Fornece funções utilitárias para gerar populações de anticorpos em algoritmos imunológicos. |

---

## Algoritmos

### Algoritmos de Seleção Negativa ([`aisp.nsa`](./nsa/README.md))

Algoritmos de aprendizagem supervisionada baseados na seleção negativa, o processo do sistema imunológico de distinguir o próprio do não-próprio.

| Classe                   | Descrição                                                                            |
|-------------------------|--------------------------------------------------------------------------------------|
| [`RNSA`](./nsa/rnsa.md) | Um algoritmo de aprendizagem supervisionada para classificação que usa detectores de valores reais. |
| [`BNSA`](./nsa/bnsa.md) | Um algoritmo de aprendizagem supervisionada para classificação que usa detectores binários.        |

### Algoritmos de Seleção Clonal ([`aisp.csa`](./csa/README.md))

Algoritmos inspirados no processo de proliferação de anticorpos para detectar um antígeno.

| Classe                         | Descrição                                                                                                                                                                          |
|-------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`AIRS`](./csa/airs.md)       | Um algoritmo de aprendizagem supervisionada para tarefas de classificação baseado no princípio da seleção clonal.                                                                 |
| [`Clonalg`](./csa/clonalg.md) | Implementação do algoritmo de seleção clonal para otimização, adaptado para problemas de minimização e maximização em domínios binários, contínuos e de permutação. |

### Algoritmos de Redes Imunológicas ([`aisp.ina`](./ina/README.md))

Algoritmos baseados na Teoria de Redes Imunológicas proposta por Jerne.

| Classe                      | Descrição                                                                                  |
|----------------------------|--------------------------------------------------------------------------------------------|
| [`AiNet`](./ina/ai-net.md) | Um algoritmo de aprendizagem não supervisionada para agrupamento, baseado na teoria das redes imunológicas. |

## Utilitários ([`aisp.utils`](./utils/README.md))

Funções utilitárias e auxiliares para desenvolvimento.

| Módulo                                 | Descrição                                                                |
|----------------------------------------|--------------------------------------------------------------------------|
| [`display`](./utils/display/README.md) | Funções utilitárias para exibição de informações dos algoritmos.         |
| [`distance`](./utils/distance.md)      | Funções utilitárias para cálculo de distância entre arrays (com Numba).  |
| [`metrics`](./utils/metrics.md)        | Funções utilitárias para medição de precisão e desempenho.               |
| [`multiclass`](./utils/multiclass.md)  | Funções utilitárias para lidar com classes multicategorias.              |
| [`sanitizers`](./utils/sanitizers.md)  | Funções utilitárias para validação e tratamento de parâmetros.           |
| [`types`](./utils/types.md)            | Define aliases de tipos usados no projeto para melhorar a legibilidade.  |
| [`validation`](./utils/validation.md)  | Contém funções responsáveis pela validação de tipos de dados.            |

## Exceções ([`aisp.exceptions`](./exceptions.md))

Avisos e erros personalizados.
