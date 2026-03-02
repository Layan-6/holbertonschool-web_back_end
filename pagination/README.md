# Pagination

This project covers pagination concepts in backend development.

## Files Description

| File | Description |
|------|-------------|
| `0-simple_helper_function.py` | Contains a helper function `index_range` that calculates start and end indexes for pagination |

## Function Details

### `index_range(page, page_size)`

**Parameters:**
- `page` (int): The page number (1-indexed)
- `page_size` (int): The number of items per page

**Returns:**
- A tuple of size two: `(start_index, end_index)`

**Example:**
```python
>>> index_range(1, 7)
(0, 7)
>>> index_range(3, 15)
(30, 45)
