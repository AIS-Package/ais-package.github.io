# Display

Funções utilitárias para exibir informações de algoritmos

## def _supports_box_drawing()

```python
def _supports_box_drawing() -> bool
```

Função para verificar se o terminal suporta caracteres de borda.

**Retorna**:

* ***bool*** (`bool`): True se o terminal provavelmente suporta caracteres de borda, False caso contrário.

---

## class TableFormatter

Classe para formatar dados tabulares em strings para exibição no console.

**Parâmetros**:

* ***headers*** (`Mapping[str, int]`): Mapeamento dos nomes das colunas para suas larguras respectivas, no formato `{nome_coluna: largura_coluna}`.

**Exceções**:

* `ValueError`: Se `headers` estiver vazio ou não for um mapeamento válido.

---

### def _border(left, middle, right, line, new_line=True)

```python
def _border(self, left: str, middle: str, right: str, line: str, new_line: bool = True) -> str
```

Cria uma borda horizontal para a tabela.

**Parâmetros**:

* ***left*** (`str`): Caractere na borda esquerda.
* ***middle*** (`str`): Caractere separador entre colunas.
* ***right*** (`str`): Caractere na borda direita.
* ***line*** (`str`): Caractere usado para preencher a borda.
* ***new_line*** (`bool`, opcional): Se True, adiciona uma quebra de linha antes da borda (padrão é True).

**Retorna**:

* ***border*** (`str`): String representando a borda horizontal.

---

### def get_header()

```python
def get_header(self) -> str
```

Gera o cabeçalho da tabela, incluindo a borda superior, os títulos das colunas e a linha separadora.

**Retorna**:

* ***header*** (`str`): String formatada do cabeçalho da tabela.

---

### def get_row(values)

```python
def get_row(self, values: Mapping[str, Union[str, int, float]]) -> str
```

Gera uma linha formatada para os dados da tabela.

**Parâmetros**:

* ***values*** (`Mapping[str, Union[str, int, float]]`): Dicionário com os valores de cada coluna, no formato `{nome_coluna: valor}`.

**Retorna**:

* ***row*** (`str`): String formatada da linha da tabela.

---

### def get_bottom(new_line=False)

```python
def get_bottom(self, new_line: bool = False) -> str
```

Gera a borda inferior da tabela.

**Parâmetros**:

* ***new_line*** (`bool`, opcional): Se True, adiciona uma quebra de linha antes da borda (padrão é False).

**Retorna**:

* ***bottom*** (`str`): String formatada da borda inferior.

---

## class ProgressTable(TableFormatter)

Classe para exibir uma tabela formatada no console para acompanhar o progresso de um algoritmo.

**Parâmetros**:

* ***headers*** (`Mapping[str, int]`): Mapeamento `{nome_coluna: largura_coluna}`.
* ***verbose*** (`bool`, padrão=True): Se False, não imprime nada no terminal.

**Exceções**:

* `ValueError`: Se `headers` estiver vazio ou não for um mapeamento válido.

---

### def _print_header()

```python
def _print_header(self) -> None
```

Imprime o cabeçalho da tabela.

---

### def update(values)

```python
def update(self, values: Mapping[str, Union[str, int, float]]) -> None
```

Adiciona uma nova linha de valores à tabela.

**Parâmetros**:

* ***values*** (`Mapping[str, Union[str, int, float]]`): As chaves devem corresponder às colunas definidas em `headers`.

---

### def finish()

```python
def finish(self) -> None
```

Encerra a exibição da tabela, imprimindo a borda inferior e o tempo total.

---
