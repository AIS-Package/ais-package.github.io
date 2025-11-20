---
title: Clonal Selection Algorithm
sidebar_position: 2
lastUpdatedAt: 2025/05/25
author: João Paulo
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 2025/05/25
  author: João Paulo
keywords:
  - Clonal Selection Algorithm
  - CSA
  - Artificial Immune System
  - AIS
  - AIRS
  - Binary Algorithm
  - NSA
  - immune-inspired algorithms
  - machine learning
  - classification
  - anomaly detection
  - mushrooms dataset
  - iris dataset
  - geyser dataset
  - real-valued detectors
  - immune recognition
---

This page presents a collection of practical examples showcasing how to use the Clonal Selection Algorithm.

## AIRS (Artificial Immune Recognition System)

Run notebooks online via Binder: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/AIS-Package/aisp/HEAD?labpath=%2Fexamples%2Fen%2Fclassification%2FAIRS)

---

### Binary Algorithm

+ [Example with random samples](https://github.com/AIS-Package/aisp/blob/main/examples/en/classification/AIRS/example_with_randomly_generated_dataset-en.ipynb)

> In the example present in this notebook 1000 random samples were generated, arranged in two groups, one for each class.

+ [mushrooms_dataBase_example](https://github.com/AIS-Package/aisp/blob/main/examples/en/classification/AIRS/mushrooms_dataBase_example_en.ipynb)

> It uses the [mushrooms database](https://archive.ics.uci.edu/dataset/73/mushroom), which contains information about edible and poisonous mushrooms.

### Real-Valued Algorithm

+ [Example with random samples](https://github.com/AIS-Package/aisp/blob/main/examples/en/classification/AIRS/example_with_randomly_generated_dataset-en.ipynb)

> In the example present in this notebook 500 random samples were generated, arranged in two groups, one for each class, we can see the non-self detectors generated below

+ [iris_dataBase_example](https://github.com/AIS-Package/aisp/blob/main/examples/en/classification/AIRS/iris_dataBase_example_en.ipynb)

> Example using the NSA [iris database](https://archive.ics.uci.edu/ml/datasets/iris), which contains four-dimensional samples and three output classes (Setosa, Versicolor and Virginica).

+ [geyser_dataBase_example](https://github.com/AIS-Package/aisp/blob/main/examples/en/classification/AIRS/geyser_dataBase_example_en.ipynb)

> To classify geyser eruptions in Yellowstone National Park, this notebook uses the [Old Faithful database](https://github.com/mwaskom/seaborn-data/blob/master/geyser.csv).
