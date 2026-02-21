# Python - Async Comprehension

This directory contains Python projects focused on asynchronous generators and comprehensions using `asyncio`. The exercises cover creating async generators, using async comprehensions, and combining multiple async operations.

## Directory: python_async_comprehension

### Files

#### 0-async_generator.py
A coroutine called `async_generator` that takes no arguments. The coroutine loops 10 times, each time asynchronously waits 1 second, then yields a random float number between 0 and 10 using the `random` module.

**Usage Example:**
```python
#!/usr/bin/env python3

import asyncio

async_generator = __import__('0-async_generator').async_generator

async def print_yielded_values():
    result = []
    async for i in async_generator():
        result.append(i)
    print(result)

asyncio.run(print_yielded_values())
