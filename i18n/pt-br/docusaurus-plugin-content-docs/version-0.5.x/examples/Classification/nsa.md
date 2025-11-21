---
sidebar_position: 1
lastUpdatedAt: 2023/05/30
author: João Paulo
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 2023/05/30
  author: João Paulo
keywords:
  - Binário
  - classificação
  - anomalias
  - not self
  - affinity threshold
  - Algoritmo de Seleção Negativa
  - Sistema Imunológico Artificial (AIS)
  - Próprio e não-próprio
  - Imune
  - Computação Natural
  - Valor Real
  - V-detector
---

# Algoritmo de Seleção Negativa

Nesta página, você encontrará uma coleção de exemplos práticos que demonstram como usar as classes de seleção negativa implementadas em nosso pacote.

---

## BNSA (Algoritmo de Seleção Negativa Binária)

Execute on-line via Binder: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/AIS-Package/aisp/HEAD?labpath=%2Fexamples%2Fen%2Fclassification%2FBNSA)

---

+ [Exemplo com amostras aleatórias](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/classification/BNSA/example_with_randomly_generated_dataset-pt.ipynb)

> No exemplo presente neste notebook, foram geradas 1000 amostras aleatórias, organizadas em dois grupos, um para cada classe.

+ [Exemplo de Base de Dados de Cogumelos](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/classification/BNSA/mushrooms_dataBase_example_pt.ipynb)

> Ele usa a [base de dados de cogumelos](https://archive.ics.uci.edu/dataset/73/mushroom), que contém informações sobre cogumelos comestíveis e venenosos.

## RNSA (Algoritmo de Seleção Negativa de Valores Reais)

Execute on-line via Binder: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/AIS-Package/aisp/HEAD?labpath=%2Fexamples%2Fen%2Fclassification%2FRNSA)

---

+ [Exemplo com amostras aleatórias](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/classification/RNSA/example_with_randomly_generated_dataset-pt.ipynb)

> No exemplo presente neste notebook, foram geradas 500 amostras aleatórias, organizadas em dois grupos, um para cada classe.

+ [Exemplo de Base de Dados Iris](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/classification/RNSA/iris_dataBase_example_pt.ipynb)

> Exemplo usando a base de dados [íris](https://archive.ics.uci.edu/ml/datasets/iris), que contém amostras de quatro dimensões e três classes de saída (Setosa, Versicolor e Virginica).

+ [Exemplo de Base de Dados Geyser](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/classification/RNSA/geyser_dataBase_example_pt.ipynb)

> Para classificar erupções de geysers no Parque Nacional de Yellowstone, este notebook usa a [base de dados Old Faithful](https://github.com/mwaskom/seaborn-data/blob/master/geyser.csv).
