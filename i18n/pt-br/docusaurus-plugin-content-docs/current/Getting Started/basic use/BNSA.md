---
sidebar_position: 1
title: Usando o BNSA
sidebar_label: Usando o BNSA
lastUpdatedAt: 2023/06/01
author: João Paulo
showLastUpdateAuthor: true
showLastUpdateTime: true
last_update:
  date: 2023/06/01
  author: João Paulo
---

# Usando o BNSA

Acesse o notebook Jupyter com o código disponível [aqui](https://github.com/AIS-Package/aisp/blob/main/examples/BNSA/example_with_randomly_generated_dataset-pt.ipynb)!

## Importando o Algoritmo de seleção negativa binária.

```python
from aisp.NSA import BNSA
```

## Gerando amostras binárias aleatoriamente e separando os dados.

### Função para gerar amostras binárias

Nesta função, são geradas amostras de dados binários com um grau de similaridade abaixo do limiar definido s. No entanto, 10% dos primeiros dados são gerados aleatoriamente, sem levar em consideração o valor de s. Além disso, quando já existem amostras, são geradas amostras únicas para a nova classe, garantindo que as amostras aleatórias geradas não estejam duplicadas em classes diferentes.

```python
import numpy as np
from scipy.spatial.distance import cdist
# Essa função gera amostras com similaridades acima de um limiar de semelhança.
def generate_samples(n_samples: int, n_features: int, s: float, x: None):
  classe_samples = []
  while len(classe_samples) < n_samples:
    similarity = 0
    sample_rand = np.random.randint(0, 2, size=(n_features))
    if(len(classe_samples) > max(int(n_samples * 0.1), 1)):
      similarity = cdist(classe_samples, np.expand_dims(sample_rand, axis=0), metric='hamming')[0, :]
      if x is not None:
        if similarity[0] <= s and not np.any(np.all(sample_rand == x, axis=1)):
          classe_samples.append(sample_rand)
      elif similarity[0] <= s:
        classe_samples.append(sample_rand)
    else:
      classe_samples.append(sample_rand)
  return np.array(classe_samples)
```

---

### Geração e separação de dados

Nessa etapa, são gerados 1000 dados, sendo 500 para representar a classe 'x' e 500 para representar a classe 'y'. Cada dado é formado por 20 dimensões. É importante destacar que esses dados são criados de forma que apresentem um grau de similaridade de 80%, ou seja, compartilham características comuns. Após a geração, os dados são separados em conjuntos de treinamento e teste.

```python
# Configurando a seed para 121 para garantir a reprodutibilidade dos dados gerados.
np.random.seed(121)
# Gerando amostras para a classe "x".
x = generate_samples(500, 20, 0.2, None)
# Gerando amostras exclusivas para a classe "y", diferentes das amostras presentes na classe "x".
y = generate_samples(500, 20, 0.2, x)
# Adicionando colunas contendo as saídas (rótulos) das classes "x" e "y".
x = np.hstack((x, np.full((x.shape[0], 1), 'x')))
y = np.hstack((y, np.full((y.shape[0], 1), 'y')))
# Juntando os dois vetores (classes "x" e "y") e randomizando a ordem das amostras.
index = np.random.permutation(x.shape[0]*2)
dataset = np.vstack((x, y))[index]

# Separando as características (inputs) e as classes de saída (rótulos).
samples = dataset[:, :-1].astype(int)
output = dataset[:, -1]
# Separating data for training and testing.
train_x, test_x, train_y, test_y = train_test_split(samples, output, test_size=0.2, random_state=1234321)

```

---

## Testando o modelo:

Iniciando o modelo e aplicando-o às amostras geradas aleatoriamente, a configuração atual possui 250 detectores com uma taxa de diferenciação de 30%.

```python
# Iniciando p modelo.
nsa = BNSA(N=250, aff_thresh=0.34, seed=1234321, max_discards=10000)
# Efetuando o treinamento: 
nsa.fit(X=train_x, y=train_y)
# Efetuando a previsão:: 
prev = nsa.predict(X=test_x)
# Mostrando a acurácia das previsões para os dados reais.
print(f"A acurácia é {accuracy_score(prev, test_y)}")
print(classification_report(test_y, prev))
```

Output:
```
✔ Non-self detectors for classes (x, y) successfully generated:  ┇██████████┇ 500/500 detectors
A acurácia é 0.96
              precision    recall  f1-score   support

           x       0.95      0.97      0.96        90
           y       0.97      0.95      0.96       110

    accuracy                           0.96       200
   macro avg       0.96      0.96      0.96       200
weighted avg       0.96      0.96      0.96       200
```

---

## Matriz de confusão
Aqui está a matriz de confusão, onde a diagonal principal representa as amostras previstas corretamente e a diagonal secundária mostra os falsos positivos. Dos 200 dados de teste, houve 5 falsos positivos para a classe x e 6 falsos positivos para a classe y.

![](../../assets/matrizBNSA.png)