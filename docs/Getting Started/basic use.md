---
sidebar_position: 2
title: Basic usage
sidebar_label: Basic usage
lastUpdatedAt: 2023/06/01
author: João Paulo
showLastUpdateAuthor: true
showLastUpdateTime: true
---

# Basic usage

## BNSA (Binary Negative Selection Algorithm)

### Importing negative selection binary.

```python
from aisp.NSA import BNSA
```
### Randomly generating binary samples and splitting the data.
#### Function to generate binary samples

In this function, samples of binary data with a degree of similarity above a defined threshold s are generated. However, the first 10% of the data is generated randomly, without taking into account the value of s. Furthermore, when there are already samples, unique samples are generated for the new class, ensuring that the random samples generated are not duplicated in different classes.

```python
import numpy as np
from scipy.spatial.distance import cdist
# This function generates samples with similarities above a similarity threshold.
def generate_samples(n_samples: int, n_features: int, s: float, x: None):
   class_samples = []
   while len(class_samples) < n_samples:
     similarity = 0
     sample_rand = np.random.randint(0, 2, size=(n_features))
     if(len(class_samples) > max(int(n_samples * 0.1), 1)):
       similarity = cdist(class_samples, np.expand_dims(sample_rand, axis=0), metric='hamming')[0, :]
       if x is not None:
         if similarity[0] > s and not np.any(np.all(sample_rand == x, axis=1)):
           class_samples.append(sample_rand)
       elif similarity[0] > s:
         class_samples.append(sample_rand)
     else:
       class_samples.append(sample_rand)
   return np.array(class_samples)
```

#### Data generation and separation

In this step, 600 pieces of data are generated, 300 representing class 'x' and 300 representing class 'y'. Each die is made up of 20 dimensions. It is important to highlight that these data are created in such a way that they present a degree of similarity of 70%, that is, they share common characteristics. After generation, the data is separated into training and test sets.

```python

# Setting the seed to 121 to ensure the reproducibility of the generated data.
np.random.seed(121)
# Generating samples for class "x".
x = generate_samples(300, 20, 0.7, None)
# Generating unique samples for class "y", different from samples present in class "x".
y = generate_samples(300, 20, 0.7, x)
# Adding columns containing the outputs (labels) of classes "x" and "y".
x = np.hstack((x, np.full((x.shape[0], 1), 'x')))
y = np.hstack((y, np.full((y.shape[0], 1), 'y')))
# Merging the two vectors (classes "x" and "y") and randomizing the order of the samples.
index = np.random.permutation(x.shape[0]*2)
dataset = np.vstack((x, y))[index]
# Separating the characteristics (inputs) and the output classes (labels).
samples = dataset[:, :-1].astype(int)
output = dataset[:, -1]
# Data separation for training and testing.
train_x, test_x, train_y, test_y = train_test_split(samples, output, test_size=0.2)

```
### Testing the model:

```python
# Starting the model.
nsa = BNSA(N=100, aff_thresh=0.3, seed=12321, max_discards=10000)
# Conducting the training:
nsa.fit(X=train_x, y=train_y)
# Visualization of classes with test samples.
prev_y = nsa.predict(test_x)
# Showing the accuracy of predictions for real data.
print(f"The accuracy is {accuracy_score(prev_y, test_y)}")
print(classification_report(test_y, prev_y))
```

Output:
```
✔ Non-self detectors for classes (x, y) successfully generated:  ┇██████████┇ 200/200 detectors
The accuracy is  0.9
              precision    recall  f1-score   support

           x       0.91      0.91      0.91        68
           y       0.88      0.88      0.88        52

    accuracy                           0.90       120
   macro avg       0.90      0.90      0.90       120
weighted avg       0.90      0.90      0.90       120
```

## RNSA (Real-Valued Negative Selection Algorithm)

### Importing the negative selection real-valued.
```python
from aisp.NSA import RNSA
```

### Randomly generating class bubbles and separating the data.

```python
from sklearn.datasets import make_blobs
from sklearn.model_selection import train_test_split

# Generating the samples and outputs for the training.
samples, output = make_blobs(n_samples=500 , n_features=2, cluster_std=0.07, center_box=([0.0, 1.0]), centers=[[0.25, 0.75], [0.75, 0.25]], random_state=1234) 
# Separating data for training and testing.
train_x, test_x, train_y, test_y = train_test_split(samples, output, test_size=0.2)
```

### Testing the model `default-NSA`:
```python
from sklearn.metrics import confusion_matrix, classification_report, accuracy_score

# Starting the class.
model = RNSA(N=500, r=0.06, seed=123)
# Carrying out the training:
model.fit(X=train_x, y=train_y)
# Previewing classes with test samples.
prev_y = model.predict(test_x)
# Showing the accuracy of predictions for actual data.
print(f"The accuracy is {accuracy_score(prev_y, test_y)}")
print(classification_report(test_y, prev_y))
```

Output:
```bash
✔ Non-self detectors for classes (0, 1) successfully generated:  ┇██████████┇ 1000/1000 detectors
The accuracy is 1.0
              precision    recall  f1-score   support

           0       1.00      1.00      1.00        55
           1       1.00      1.00      1.00        45

    accuracy                           1.00       100
   macro avg       1.00      1.00      1.00       100
weighted avg       1.00      1.00      1.00       100
```

### Detector and sample plotting:
![](../assets/exemple_en_d.png)

### Testing the model `V-detector`:
```python
from sklearn.metrics import confusion_matrix, classification_report, accuracy_score

# Starting the class.
model = RNSA(N=20, r=0.02, algorithm='V-detector', r_s=0.04, seed=123)
# Carrying out the training:
model.fit(X=train_x, y=train_y)
# Previewing classes with test samples.
prev_y = model.predict(test_x)
# Showing the accuracy of predictions for actual data.
print(f"The accuracy is {accuracy_score(prev_y, test_y)}")
print(classification_report(test_y, prev_y))
```

Output:
```bash
✔ Non-self detectors for classes (0, 1) successfully generated:  ┇██████████┇ 40/40 detectors
The accuracy is 1.0
              precision    recall  f1-score   support

           0       1.00      1.00      1.00        55
           1       1.00      1.00      1.00        45

    accuracy                           1.00       100
   macro avg       1.00      1.00      1.00       100
weighted avg       1.00      1.00      1.00       100
```

### Detector and sample plotting:
![](../assets/exemple_en_v.png)