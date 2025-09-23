# Display

Utility Functions for Displaying Algorithm Information

## def _supports_box_drawing()

```python
def _supports_box_drawing() -> bool
```

Function to check if the terminal supports boxed characters.

**Returns**:

* ***bool*** (`bool`): True if the terminal likely supports boxed characters, False otherwise.

---

## class TableFormatter

Class to format tabular data into strings for display in the console.

**Parameters**:

* ***headers*** (`Mapping[str, int]`): Mapping of column names to their respective widths, in the format `{column_name: column_width}`.

**Raises**:

* `ValueError`: If `headers` is empty or not a valid mapping.

---

### def _border(left, middle, right, line, new_line=True)

```python
def _border(self, left: str, middle: str, right: str, line: str, new_line: bool = True) -> str
```

Create a horizontal border for the table.

**Parameters**:

* ***left*** (`str`): Character on the left side of the border.
* ***middle*** (`str`): Character separator between columns.
* ***right*** (`str`): Character on the right side of the border.
* ***line*** (`str`): Character used to fill the border.
* ***new_line*** (`bool`, optional): If True, adds a line break before the border (default is True).

**Returns**:

* ***border*** (`str`): String representing the horizontal border.

---

### def get_header()

```python
def get_header(self) -> str
```

Generate the table header, including the top border, column headings, and separator line.

**Returns**:

* ***header*** (`str`): Formatted string of the table header.

---

### def get_row(values)

```python
def get_row(self, values: Mapping[str, Union[str, int, float]]) -> str
```

Generate a formatted row for the table data.

**Parameters**:

* ***values*** (`Mapping[str, Union[str, int, float]]`): Dictionary with values for each column, in the format `{column_name: value}`.

**Returns**:

* ***row*** (`str`): Formatted string of the table row.

---

### def get_bottom(new_line=False)

```python
def get_bottom(self, new_line: bool = False) -> str
```

Generate the table's bottom border.

**Parameters**:

* ***new_line*** (`bool`, optional): If True, adds a line break before the border (default is False).

**Returns**:

* ***bottom*** (`str`): Formatted string for the bottom border.

---

## class ProgressTable(TableFormatter)

Class to display a formatted table in the console to track the algorithm's progress.

**Parameters**:

* ***headers*** (`Mapping[str, int]`): Mapping `{column_name: column_width}`.
* ***verbose*** (`bool`): If False, prints nothing to the terminal.

**Raises**:

* `ValueError`: If `headers` is empty or not a valid mapping.

---

### def _print_header()

```python
def _print_header(self) -> None
```

Print the table header.

---

### def update(values)

```python
def update(self, values: Mapping[str, Union[str, int, float]]) -> None
```

Add a new row of values to the table.

**Parameters**:

* ***values*** (`Mapping[str, Union[str, int, float]]`): Keys must match the columns defined in headers.

---

### def finish()

```python
def finish(self) -> None
```

End the table display, printing the bottom border and total time.

---