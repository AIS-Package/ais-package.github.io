---
title: Algoritmo de Seleção Clonal
sidebar_position: 2
lastUpdatedAt: 2025/05/25
author: João Paulo
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 2025/05/25
  author: João Paulo
keywords:
  - Algoritmo de Seleção Clonal
  - CSA
  - Sistema Imune Artificial
  - AIS
  - AIRS
  - Algoritmo Binário
  - algoritmos inspirados no sistema imune
  - aprpt-brdizado de máquina
  - classificação
  - detecção de anomalias
  - conjunto de dados de cogumelos
  - conjunto de dados Iris
  - conjunto de dados Geyse
  - detectores com valores reais
  - reconhecimpt-brto imune
---

Esta página apresenta uma coleção de exemplos práticos demonstrando como usar o Algoritmo de Seleção Clonal.

## AIRS (Sistema Imunológico Artificial de Reconhecimento)

Run online via Binder: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/AIS-Package/aisp/HEAD?labpath=%2Fexamples%2Fpt%2Dbr%2Fclassification%2FAIRS)

---

### Algoritmo Binário

+ [Exemplo com amostras aleatórias](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/classification/AIRS/example_with_randomly_gpt-brerated_dataset-pt-br.ipynb)

> No exemplo apresentado neste notebook, foram geradas 1000 amostras aleatórias, organizadas em dois grupos, um para cada classe.

+ [Exemplo com banco de dados de cogumelos](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/classification/AIRS/mushrooms_dataBase_example_pt-br.ipynb)

> Utiliza o [mushrooms database](https://archive.ics.uci.edu/dataset/73/mushroom), que contém informações sobre cogumelos comestíveis e venenosos.

### Algoritmo com Valores Reais

+ [Exemplo com amostras aleatórias](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/classification/AIRS/example_with_randomly_gpt-brerated_dataset-pt-br.ipynb)

> No exemplo apresentado neste notebook, foram geradas 500 amostras aleatórias, organizadas em dois grupos, um para cada classe. Podemos ver abaixo os detectores "não-próprio" gerados.

+ [Exemplo com banco de dados Iris](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/classification/AIRS/iris_dataBase_example_pt-br.ipynb)

> Exemplo usando o NSA com o [iris database](https://archive.ics.uci.edu/ml/datasets/iris), que contém amostras com quatro dimensões e três classes de saída (Setosa, Versicolor e Virginica).

+ [Exemplo com banco de dados Geyser](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/classification/AIRS/geyser_dataBase_example_pt-br.ipynb)

> Para classificar erupções de gêiseres no Parque Nacional de Yellowstone, este notebook utiliza o [Old Faithful database](https://github.com/mwaskom/seaborn-data/blob/master/geyser.csv).
