#!/usr/bin/env python3
"""
Simple helper function for pagination
"""

def index_range(page, page_size):
    """
    Returns a tuple containing the start and end indices for pagination.

    Args:
        page (int): The page number (1-indexed)
        page_size (int): The number of items per page

    Returns:
        tuple: (start_index, end_index)
    """
    # تأكد من أن المدخلات أعداد صحيحة
    if not isinstance(page, int) or not isinstance(page_size, int):
        raise TypeError("page and page_size must be integers")
    
    # تأكد من أن القيم موجبة
    if page <= 0 or page_size <= 0:
        raise ValueError("page and page_size must be positive integers")
    
    start_index = (page - 1) * page_size
    end_index = page * page_size
    
    return (start_index, end_index)
