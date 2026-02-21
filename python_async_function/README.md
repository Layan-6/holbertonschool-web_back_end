# Python - Async Function

This directory contains Python projects focused on asynchronous programming using `asyncio`. The exercises cover basic async coroutines, executing multiple coroutines simultaneously, and creating tasks.

## Files

### 0-basic_async_syntax.py
An asynchronous coroutine `wait_random` that takes an integer argument `max_delay` (default 10) and waits for a random delay between 0 and `max_delay` seconds, then returns the delay.

**Usage Example:**
```python
import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random

print(asyncio.run(wait_random()))
print(asyncio.run(wait_random(5)))
print(asyncio.run(wait_random(15)))
