---
sidebar_position: 1
lastUpdatedAt: 2023/05/30
author: João Paulo
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 2023/05/30
  author: João Paulo

---

# Algoritmo de Seleção Negativa

Nesta página, você encontrará uma coleção de exemplos práticos que demonstram como usar as classes de seleção negativa implementadas em nosso pacote.

## Os exemplos estão organizados da seguinte forma:

### Normalização de Dados:
> Mostra como normalizar dados usando as classes de seleção negativa. Na versão de valores reais, os dados são normalizados entre 0 e 1. Na versão binária, eles são normalizados em um vetor de bits.

### Validação Cruzada K-fold com 50 Interações:
> Neste exemplo, os dados são divididos em conjuntos de treinamento e teste, e o desempenho do modelo é avaliado por meio de validação cruzada. Portanto, dividimos os dados de treinamento em k partes. Em cada iteração, 10% dos dados de treinamento são reservados para teste.

### Treinamento:
> O modelo treinado é testado neste exemplo com todos os dados de treinamento disponíveis.

Os exemplos a seguir mostram várias funcionalidades das classes de seleção negativa para que você saiba como usá-las em seu projeto. Sinta-se à vontade para explorar esses exemplos e adaptá-los conforme necessário para atender às suas necessidades específicas.

---

Acesse os notebooks com a possibilidade de execução online pelo Binder: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/AIS-Package/aisp/HEAD?labpath=%2Fexamples)

## BNSA (Algoritmo de Seleção Negativa Binária)
+ [Exemplo com amostras aleatórias](https://github.com/AIS-Package/aisp/blob/main/examples/BNSA/example_with_randomly_generated_dataset-pt.ipynb)
> No exemplo presente neste notebook, foram geradas 1000 amostras aleatórias, organizadas em dois grupos, um para cada classe.

+ [Exemplo de Base de Dados de Cogumelos](https://github.com/AIS-Package/aisp/blob/main/examples/BNSA/mushrooms_dataBase_example_pt.ipynb)
> Ele usa a [base de dados de cogumelos](https://archive.ics.uci.edu/dataset/73/mushroom), que contém informações sobre cogumelos comestíveis e venenosos.

## RNSA (Algoritmo de Seleção Negativa de Valores Reais)

+ [Exemplo com amostras aleatórias](https://github.com/AIS-Package/aisp/blob/main/examples/RNSA/example_with_randomly_generated_dataset-pt.ipynb)
> No exemplo presente neste notebook, foram geradas 500 amostras aleatórias, organizadas em dois grupos, um para cada classe.

+ [Exemplo de Base de Dados Iris](https://github.com/AIS-Package/aisp/blob/main/examples/RNSA/iris_dataBase_example_pt.ipynb)
> Exemplo usando a base de dados [íris](https://archive.ics.uci.edu/ml/datasets/iris), que contém amostras de quatro dimensões e três classes de saída (Setosa, Versicolo e Virginca).

+ [Exemplo de Base de Dados Geyser](https://github.com/AIS-Package/aisp/blob/main/examples/RNSA/geyser_dataBase_example_pt.ipynb)
> Para classificar erupções de geysers no Parque Nacional de Yellowstone, este notebook usa a [base de dados Old Faithful](https://github.com/mwaskom/seaborn-data/blob/master/geyser.csv).
