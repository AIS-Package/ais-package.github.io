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

# Negative Selection Algorithm

On this page, you will find a collection of practical examples that demonstrate how to use the negative selection classes implemented in our package.

## The examples are organized below:

### Data Normalization:
> Shows how to normalize data using negative selection classes. In the real-valued version, the data is normalized between 0 and 1. In the binary version, it is normalized into a bit vector.

### K-fold Cross Validation with 50 Interactions:
> In this example, the data is divided into training and test sets and model performance is evaluated by cross-validation. So with dividing the training data into k parts. In each iteration, 10% of the training data is reserved for testing.

### Training:
> The trained model is tested in this example with all available training data.

The examples below show various functionality of negative selection classes so that you know how to use them in your project. Feel free to explore these examples and adapt them as needed to meet your specific needs.

## BNSA (Binary Negative Selection Algorithm)

+ [notebook](https://github.com/AIS-Package/aisp/blob/main/examples/BNSA/example_with_randomly_generated_dataset-en.ipynb) 
> In the example present in this notebook 600 random samples were generated, arranged in two groups, one for each class.

+ [mushrooms_dataBase_example](https://github.com/AIS-Package/aisp/blob/main/examples/BNSA/mushrooms_dataBase_example_en.ipynb)
>  It uses the [mushrooms database](https://www.kaggle.com/datasets/uciml/mushroom-classification), which contains information about edible and poisonous mushrooms.

# RNSA (Real-Valued Negative Selection Algorithm)

+ [notebook](https://github.com/AIS-Package/aisp/blob/main/examples/RNSA/example_with_randomly_generated_dataset-en.ipynb) 
> In the example present in this notebook 500 random samples were generated, arranged in two groups, one for each class, we can see the non-self detectors generated below
+ [iris_dataBase_example](https://github.com/AIS-Package/aisp/blob/main/examples/RNSA/iris_dataBase_example_en.ipynb)
> Example using the NSA [iris database](https://archive.ics.uci.edu/ml/datasets/iris), which contains four-dimensional samples and three output classes (Setosa, Versicolo and Virginca).
+ [geyser_dataBase_example](https://github.com/AIS-Package/aisp/blob/main/examples/RNSA/geyser_dataBase_example_en.ipynb)
> To classify geyser eruptions in Yellowstone National Park, this notebook uses the [Old Faithful database](https://github.com/mwaskom/seaborn-data/blob/master/geyser.csv).