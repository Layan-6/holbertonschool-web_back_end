#!/usr/bin/env python3
"""
This module provides a function that sums a list of floats.
"""

from typing import List

def sum_list(input_list: List[float]) -> float:
    """
    Returns the sum of a list of floats.

    Args:
        input_list (List[float]): A list containing float numbers.

    Returns:
        float: The total sum of the list elements.
    """
    return sum(input_list)
