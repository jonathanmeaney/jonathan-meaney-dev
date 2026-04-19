---
title: Random Ruby Bits
pubDate: '2017-09-29 15:13:42'
updatedDate: '2017-09-29 15:13:42'
description: Merge and sum hash of hashes hash1 = { :employee1 => { :val1 => 20, :val2
  => 10, :val3 => 50, :val4 => 30 }, :employee2 => { :val1 => 30, :val2 => 40, :val3
  =>
draft: false
slug: random-ruby-bits
author: jonathanmeaney
tags:
- ruby
---
### Merge and sum hash of hashes

```
hash1 = { 
  :employee1 => { 
    :val1 => 20, 
    :val2 => 10, 
    :val3 => 50, 
    :val4 => 30 
  }, 
  :employee2 => { 
    :val1 => 30, 
    :val2 => 40, 
    :val3 => 60, 
    :val4 => 10 
  }, 
  :employee3 => { 
    :val1 => 70, 
    :val2 => 60, 
    :val3 => 10, 
    :val4 => 90 
  }
}

hash2 = { 
  :employee1 => { 
    :val1 => 30, 
    :val2 => 50, 
    :val3 => 60, 
    :val4 => 10 
  }, 
  :employee2 => { 
    :val1 => 90, 
    :val2 => 70, 
    :val3 => 60, 
    :val4 => 50 
  }, 
  :employee3 => { 
    :val1 => 20, 
    :val2 => 30, 
    :val3 => 50, 
    :val4 => 40 
  }
}

hash3 = hash1.merge(hash2) { |key, old_value, new_value| 
  # sum the values for each employee
  old_value.merge(new_value) { |k, o, n| o + n }
}

Contents of hash3:

{
  :employee1 => {
    :val1 => 50,
    :val2 => 60,
    :val3 => 110,
    :val4 => 40
  },
  :employee2 => {
    :val1 => 120,
    :val2 => 110,
    :val3 => 120,
    :val4 => 60
  },
  :employee3 => {
    :val1 => 90,
    :val2 => 90,
    :val3 => 60,
    :val4 => 130
  }
}
```
