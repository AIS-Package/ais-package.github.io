---
sidebar_position: 1
---

# Seleção Negativa

A **seleção negativa** é o processo em que o sistema imunológico faz a maturação das células-T conhecidas também por linfócitos-T, no qual tornam-as aptas na detecção dos não-próprios. Assim, o Algoritmo de seleção negativa (NSA), utilizam-se de hiperesferas simbolizando os detectores em um espaço de dados N-dimensional. [1](#1)

---

# classes

> 1. **[Binary version:](BNSA.md)**
>> O algoritmo binário adaptado para múltiplas classes neste projeto tem como base a versão proposta por [Forrest et al. (1994)](#2), originalmente desenvolvida para segurança computacional.
>>> **Exemplo:**
>>> + [Base de dados Mushrooms](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/classification/BNSA/mushrooms_dataBase_example_pt-br.ipynb)

> 2. **[Real-Valued version:](RNSA.md)**
>>Este algoritmo possui duas versões diferentes: uma baseada na versão canônica [[1]](#1) e outra com detectores de raio variável [[3]](#3). Ambas estão adaptadas para trabalhar com múltiplas classes e possuem métodos para previsão de dados presentes na região não-self de todos os detectores e classes.
>>> **Exemplos:**
>>> +  [Base de dados Iris](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/classification/RNSA/iris_dataBase_example_pt-br.ipynb)
>>> +  [Base de dados Geyser](https://github.com/AIS-Package/aisp/blob/main/examples/pt-br/classification/RNSA/geyser_dataBase_example_pt-br.ipynb)

# References

---

##### 1 
> BRABAZON, Anthony; O'NEILL, Michael; MCGARRAGHY, Seán. Natural Computing Algorithms. [S. l.]: Springer Berlin Heidelberg, 2015. DOI 10.1007/978-3-662-43631-8. Disponível em: http://dx.doi.org/10.1007/978-3-662-43631-8.

##### 2
> S. Forrest, A. S. Perelson, L. Allen and R. Cherukuri, "Self-nonself discrimination in a computer," Proceedings of 1994 IEEE Computer Society Symposium on Research in Security and Privacy, Oakland, CA, USA, 1994, pp. 202-212, doi: http://dx.doi.org/10.1109/RISP.1994.296580.

##### 3
> JI, Zhou; DASGUPTA, Dipankar. Real-Valued Negative Selection Algorithm with Variable-Sized Detectors. Genetic and Evolutionary Computation - GECCO 2004. [S. l.]: Springer Berlin Heidelberg, 2004. DOI 10.1007/978-3-540-24854-5_30. Disponível em: http://dx.doi.org/10.1007/978-3-540-24854-5_30.

---