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
  - Binary
  - classifying
  - anomalies
  - not self
  - affinity threshold
  - Negative Selection Algorithm
  - Artificial Immune System (AIS)
  - Self and non-self
  - Immune
  - Computação Natural
  - mushrooms dataset
  - iris dataset
  - geyser dataset
---

# Negative Selection Algorithm

On this page, you will find a collection of practical examples that demonstrate how to use the negative selection classes implemented in our package.

## BNSA (Binary Negative Selection Algorithm)

Run notebooks online via Binder: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/AIS-Package/aisp/HEAD?labpath=%2Fexamples%2Fen%2Fclassification%2FBNSA)

---

+ [Example with random samples](https://github.com/AIS-Package/aisp/blob/main/examples/en/classification/BNSA/example_with_randomly_generated_dataset-en.ipynb) 
> In the example present in this notebook 1000 random samples were generated, arranged in two groups, one for each class.

+ [mushrooms_dataBase_example](https://github.com/AIS-Package/aisp/blob/main/examples/en/classification/BNSA/mushrooms_dataBase_example_en.ipynb)
>  It uses the [mushrooms database](https://archive.ics.uci.edu/dataset/73/mushroom), which contains information about edible and poisonous mushrooms.

# RNSA (Real-Valued Negative Selection Algorithm)

Run notebooks online via Binder: [![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/AIS-Package/aisp/HEAD?labpath=%2Fexamples%2Fen%2Fclassification%2FRNSA)

---

+ [Example with random samples](https://github.com/AIS-Package/aisp/blob/main/examples/en/classification/RNSA/example_with_randomly_generated_dataset-en.ipynb) 
> In the example present in this notebook 500 random samples were generated, arranged in two groups, one for each class, we can see the non-self detectors generated below
+ [iris_dataBase_example](https://github.com/AIS-Package/aisp/blob/main/examples/en/classification/RNSA/iris_dataBase_example_en.ipynb)
> Example using the NSA [iris database](https://archive.ics.uci.edu/ml/datasets/iris), which contains four-dimensional samples and three output classes (Setosa, Versicolor and Virginica).
+ [geyser_dataBase_example](https://github.com/AIS-Package/aisp/blob/main/examples/en/classification/RNSA/geyser_dataBase_example_en.ipynb)
> To classify geyser eruptions in Yellowstone National Park, this notebook uses the [Old Faithful database](https://github.com/mwaskom/seaborn-data/blob/master/geyser.csv).